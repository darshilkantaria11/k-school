import { dbConnect } from '../../utils/mongoose';
import Slot from '../../models/slot';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        await dbConnect();

        // Parse the query parameter for the date
        const url = new URL(req.url);
        const dateParam = url.searchParams.get('date');

        console.log('Received date parameter:', dateParam); // Log the received date parameter

        if (!dateParam) {
            return NextResponse.json({ error: "Date parameter is required" }, { status: 400 });
        }

        // Add 'T00:00:00.000Z' to the received date to match database format
        const formattedDate = `${dateParam}T00:00:00.000Z`;
        console.log('Formatted date for comparison:', formattedDate);

        // Automatically delete slots for today and earlier dates in local timezone
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Normalize current date to midnight
        const formattedCurrentDate = currentDate.toISOString().split('T')[0] + 'T00:00:00.000Z';
        console.log('Formatted current date for deletion check:', formattedCurrentDate);

        await Slot.deleteMany({ date: { $lte: formattedCurrentDate } });

        // Find slots for the selected date
        const slotsForDate = await Slot.findOne({
            date: formattedDate // Use formatted date (YYYY-MM-DDT00:00:00.000Z)
        });

        console.log('Fetched slots for the selected date:', slotsForDate); // Log the fetched data

        if (!slotsForDate) {
            return NextResponse.json({ slots: [] }); // Return empty array if no slots are found
        }

        // Return the slots for the selected date
        return NextResponse.json({ slots: slotsForDate.slots });
    } catch (error) {
        console.error('Error fetching slots:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

import { dbConnect } from '../../utils/mongoose';
import Slot from '../../models/slot';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        await dbConnect();

        // Parse the query parameter for the date
        const url = new URL(req.url);
        const dateParam = url.searchParams.get('date');

        console.log('Received date parameter:', dateParam);

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
            date: formattedDate
        });

        console.log('Fetched slots for the selected date:', slotsForDate);

        if (!slotsForDate) {
            return NextResponse.json({ slots: [] }); // Return empty array if no slots are found
        }

        // Ensure slots are returned in the correct order
        const sortedSlots = {
            "10am-11am": slotsForDate.slots["10am-11am"] ?? false,
            "11am-12pm": slotsForDate.slots["11am-12pm"] ?? false,
            "12pm-1pm": slotsForDate.slots["12pm-1pm"] ?? false,
            "1pm-2pm": slotsForDate.slots["1pm-2pm"] ?? false,
        };

        return NextResponse.json({ slots: sortedSlots });
    } catch (error) {
        console.error('Error fetching slots:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

import { dbConnect } from '../../utils/mongoose';
import Slot from '../../models/slot';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await dbConnect();
        const { date, slot } = await req.json();

        if (!date || !slot) {
            return NextResponse.json({ error: "Date and Slot are required" }, { status: 400 });
        }

        // Convert date format to match database
        const formattedDate = `${date}T00:00:00.000Z`;

        // Find the slot document for the given date
        let slotDocument = await Slot.findOne({ date: formattedDate });

        if (!slotDocument) {
            return NextResponse.json({ error: "No slots found for the selected date" }, { status: 404 });
        }

        // Check if the slot is already booked
        if (slotDocument.slots[slot] === false) {
            return NextResponse.json({ error: "Slot is already booked" }, { status: 400 });
        }

        // Mark the slot as booked (false)
        slotDocument.slots[slot] = false;
        await slotDocument.save();

        return NextResponse.json({ message: "Slot booked successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error booking slot:", error.message);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

"use client"
import { useState } from "react";
import Image from "next/image";
import Offer from "../../../public/Ouroffer.svg"; // Assuming this contains your butterfly background
import Link from "next/link";

export default function LandingPage() {
    // State to manage the active section
    const [activeSection, setActiveSection] = useState("Field Trips");

    // Content for each section
    const content = {
        "Field Trips": "Field trips are an essential part of Knottin Preschool, where children explore the world beyond the classroom and engage with nature.",
        "Holidays": "We celebrate various holidays to introduce children to cultural diversity, fostering a deeper understanding and respect for different traditions.",
        "Entertainment": "Our entertainment activities are designed to stimulate creativity, including puppet shows, music sessions, and interactive storytelling."
    };

    return (
        <div className="relative h-auto flex flex-col mt-10 lv">
            {/* Background Image */}
            <div className="relative w-full h-auto flex justify-center items-center rounded-xl py-6 md:py-10">
                <Image
                    src={Offer}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute w-full h-full rounded-3xl"
                />

                {/* Content on top of the background */}
                <div className="relative z-10 text-center max-w-4xl mx-auto md:p-4 p-2 flex flex-col">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                        What We Offer
                    </h2>
                    <div className="w-16 h-1 mx-auto my-4"></div>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-green-900 mb-6">
                        Knottin Preschool embraces the Reggio Emilia approach, which views children as naturally curious learners with vast potential.
                    </p>

                    {/* Button Group */}
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex border-2 border-dashed border-g1 gap-4 rounded-full bg-white px-4 py-2">
                            {/* Field Trips Button */}
                            <button
                                onClick={() => setActiveSection("Field Trips")}
                                className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${
                                    activeSection === "Field Trips" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                }`}
                            >
                                Field Trips
                            </button>

                            {/* Holidays Button */}
                            <button
                                onClick={() => setActiveSection("Holidays")}
                                className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${
                                    activeSection === "Holidays" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                }`}
                            >
                                Holidays
                            </button>

                            {/* Entertainment Button */}
                            <button
                                onClick={() => setActiveSection("Entertainment")}
                                className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${
                                    activeSection === "Entertainment" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                }`}
                            >
                                Entertainment
                            </button>
                        </div>
                    </div>

                    {/* Section Content */}
                    <div className="mt-8 text-center">
                        <p className="text-lg md:text-xl text-green-900">
                            {content[activeSection]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

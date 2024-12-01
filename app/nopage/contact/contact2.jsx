"use client";
import { useState } from "react";
import Image from "next/image";
import Offer from "../../../public/Ouroffer.svg"; // Assuming this contains your butterfly background
import Tour from "../contact/book-a-tour"

export default function LandingPage() {
    // State to manage the active section
    const [activeSection, setActiveSection] = useState("Book a Tour");

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
                <div className="relative z-10 text-center max-w-4xl mx-auto md:p-4 p-2 flex flex-col w-full">
                    {/* Button Group */}
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex border-2 border-dashed border-g1 gap-4 rounded-full bg-white px-4 py-2">
                            {/* Book a Tour Button */}
                            <button
                                onClick={() => setActiveSection("Book a Tour")}
                                className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${
                                    activeSection === "Book a Tour" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                }`}
                            >
                                Book a Tour
                            </button>

                            {/* Enquire Button */}
                            <button
                                onClick={() => setActiveSection("Enquire")}
                                className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${
                                    activeSection === "Enquire" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                }`}
                            >
                                Enquire
                            </button>
                        </div>
                    </div>

                    {/* Section Content */}
                    <div className="mt-8 text-center w-full">
                        {activeSection === "Book a Tour" && (
                            <div className="text-lg md:text-xl text-green-900">
                                {/* Placeholder for the "Book a Tour" form */}
                                <Tour/>
                            </div>
                        )}
                        {activeSection === "Enquire" && (
                            <p className="text-lg md:text-xl text-green-900">
                                {/* Placeholder for the "Enquire" form */}
                                Enquiry form will be displayed here.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

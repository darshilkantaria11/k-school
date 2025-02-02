"use client"
import { useState } from "react";
import Image from "next/image";
import Offer from "../../../public/osct.svg"; // Assuming this contains your butterfly background

export default function LandingPage() {
    // State to manage active section
    const [activeSection, setActiveSection] = useState("Booster Seat Policy");

    // Content for each section
    const content = {
        "Late Pick-up Policy": (
            <ul className="list-disc">
                <li>Parents are expected to pick up their children promptly at the designated time.</li>
                <li>Late pickups may result in additional fees. Please contact us if you anticipate being late.</li>
                <li>Consistent late pickups may result in adjustments to your child&apos;s schedule or withdrawal from the program.</li>
            </ul>
        ),
        "Booster Seat Policy": (
            <ul className="list-disc">
                <li>All children under the age of 9 must be seated in a car or booster seat while riding in vehicles.</li>
                <li>Children less than 40lbs are required to be in car seats, while those over 40lbs may use a booster seat (the only exception being if your child reaches the height of 4&apos;9&quot; before they reach the age of 9).</li>
                <li>It is crucial to provide accurate information regarding your child&apos;s current height, weight, and age. The program will provide the required car and booster seats for transportation.</li>
            </ul>
        ),
        "Pick-up & Drop-off Policy": (
            <ul className="list-disc">
                <li>All children must be dropped off and picked up by a parent or guardian listed on the approved pickup list.</li>
                <li>For safety reasons, we require proper identification for anyone unfamiliar to the staff picking up your child.</li>
                <li>Late pick-ups must be communicated as soon as possible to the program director.</li>
            </ul>
        )
    };

    return (
        <div className="relative flex flex-col mt-10 lv">
            {/* Background Image */}
            <div className="relative w-full h-max flex justify-center items-center rounded-xl py-6 md:py-10">
                <Image
                    src={Offer}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute w-full h-full rounded-3xl"
                />

                {/* Content on top of the background */}
                <div className="relative z-10 max-w-4xl mx-auto md:p-4 p-2 flex flex-col">
                    {/* Title */}
                    <h2 className="text-3xl text-center md:text-4xl font-bold text-green-900">
                        What We Offer
                    </h2>
                    <div className="w-16 h-1 mx-auto my-4"></div>

                    {/* Button Group */}
                    <div className="flex text-center justify-center items-center mb-6">
                        <div className="flex border-2 border-dashed border-g1 gap-4 rounded-full bg-white px-4 py-2">
                            {/* Late Pick-up Policy Button */}
                            <button
                                onClick={() => setActiveSection("Late Pick-up Policy")}
                                className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${
                                    activeSection === "Late Pick-up Policy" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                }`}
                            >
                                Late Pick-up Policy
                            </button>

                            {/* Booster Seat Policy Button */}
                            <button
                                onClick={() => setActiveSection("Booster Seat Policy")}
                                className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${
                                    activeSection === "Booster Seat Policy" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                }`}
                            >
                                Booster Seat Policy
                            </button>

                            {/* Pick-up & Drop-off Policy Button */}
                            <button
                                onClick={() => setActiveSection("Pick-up & Drop-off Policy")}
                                className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${
                                    activeSection === "Pick-up & Drop-off Policy" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                }`}
                            >
                                Pick-up & Drop-off Policy
                            </button>
                        </div>
                    </div>

                    {/* Section Content */}
                    <div className="text-lg md:text-lg text-g4 font-normal mb-4">
                        {content[activeSection]}
                    </div>
                </div>
            </div>
        </div>
    );
}

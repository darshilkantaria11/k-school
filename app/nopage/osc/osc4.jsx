"use client"
import { useState } from "react";
import Image from "next/image";
import Offer from "../../../public/osct.svg"; // Assuming this contains your butterfly background
import Transport from "../../../public/osct.svg";

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
        <>

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
                                    className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${activeSection === "Late Pick-up Policy" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                        }`}
                                >
                                    Late Pick-up Policy
                                </button>

                                {/* Booster Seat Policy Button */}
                                <button
                                    onClick={() => setActiveSection("Booster Seat Policy")}
                                    className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${activeSection === "Booster Seat Policy" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
                                        }`}
                                >
                                    Booster Seat Policy
                                </button>

                                {/* Pick-up & Drop-off Policy Button */}
                                <button
                                    onClick={() => setActiveSection("Pick-up & Drop-off Policy")}
                                    className={`text-g1 md:px-4 px-1 py-2 rounded-full focus:outline-none transition duration-300 ${activeSection === "Pick-up & Drop-off Policy" ? "bg-g1 text-white" : "hover:bg-g1 hover:text-white"
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

            <div className="relative w-full h-auto flex justify-center items-center rounded-xl py-6 md:py-10 mt-10">
                <Image
                    src={Transport}  // Replace with relevant image
                    alt="Medication Policy Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute w-full h-full rounded-3xl"
                />

                {/* Content on top of the background */}
                <div className="relative z-10 md:p-4 p-2 flex flex-col container mx-auto">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-g4 text-center mb-4">
                        Medication Administration Policy
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-g4 font-semibold mb-6">
                        At Knottin School OSCC, medication and herbal remedies will only be administered by staff with written consent from a parent/guardian. Please review the following guidelines carefully:
                    </p>

                    {/* Policy Details */}
                    <div className="text-lg md:text-lg text-g4 font-normal mb-6">
                        <p><strong>Medication Storage & Handling:</strong> All medications and herbal remedies must be in their original container and handed directly to a staff member by the primary caregiver.</p>
                        <p>Children are not allowed to carry medications in their bags or backpacks.</p>
                        <p>Medications and herbal remedies will be tagged and securely stored in a locked facility, out of children's reach.</p>

                        <p><strong>Carrying Daily Medications:</strong> If a child requires daily medications (e.g., inhalers, epi-pens), their backpack will be tagged with their name.</p>
                        <p>Tagged backpacks will be stored at the front of the van for safety.</p>
                        <p>Children are not permitted to self-medicate.</p>

                        <p><strong>Confiscation & Disposal:</strong> Any medications or herbal remedies found in a child's backpack, lunch bag, or pockets will be confiscated and returned to the parent/guardian at the end of the day.</p>
                        <p>Unmarked medications (e.g., a loose pill in a baggie) will be immediately destroyed and disposed of.</p>

                        <p><strong>Consent Form Requirement:</strong> To allow our staff to administer medication, please print and complete the appropriate form and bring it to the program.</p>
                    </div>

                    {/* PDF Download Button */}
                    <div className="flex justify-center">
                        <a
                            href="https://drive.google.com/file/d/1KIk7hRTj_L5NGZaJK8oBbDb1JxPMJ0b1/view?usp=sharing" // Replace with actual PDF link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block p-1 bg-y1 text-yellow-900 font-semibold rounded-full hover:bg-yellow-500 transition"
                        >
                            <p className="border-dashed border-2 border-yellow-700 xl:px-4 xl:py-2 px-2 py-1 rounded-full text-sm xl:text-3xl">
                                Download Medication Consent Form
                            </p>
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}

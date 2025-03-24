"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

// Import PNGs (for small screens)
import A from "../../../public/o1.png";
import B from "../../../public/o2.png";
import C from "../../../public/o3.png";
import D from "../../../public/o4.png";
import E from "../../../public/o5.png";
import F from "../../../public/o6.png";

// Import SVGs (for larger screens)
import Al from "../../../public/o1.svg";
import Bl from "../../../public/o2.svg";
import Cl from "../../../public/o3.svg";
import Dl from "../../../public/o4.svg";
import El from "../../../public/o5.svg";
import Fl from "../../../public/o6.svg";

export default function TransportationPolicy() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // md breakpoint (768px)
        };

        // Run on mount and listen for resize events
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Select the images dynamically based on screen size
    const images = isLargeScreen ? [Al, Bl, Cl, Dl, El, Fl] : [A, B, C, D, E, F];
    const labels = ["Play time", "Outdoor time", "Circle time", "Quiet time", "Snack time", "Lunch time"];

    return (
        <>
            <div className="flex mt-8 mb-10 justify-center items-center text-3xl md:text-6xl lv">
                <h1 className="text-center text-g4">Transportation Policy</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-4  lg:gap-8">
                {images.map((img, index) => (
                    <div key={index} className="hover:scale-105 transition-transform duration-200 ease-in-out">
                        <Image src={img} alt={labels[index]} />
                    </div>
                ))}
            </div>
        </>
    );
}

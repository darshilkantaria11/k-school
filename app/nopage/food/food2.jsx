"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

// Import PNGs (for small screens)
import A from "../../../public/f1.png";
import B from "../../../public/f2.png";
import C from "../../../public/f3.png";

// Import SVGs (for larger screens)
import Al from "../../../public/f1.svg";
import Bl from "../../../public/f2.svg";
import Cl from "../../../public/f3.svg";

export default function SnackMealSchedule() {
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
    const images = isLargeScreen ? [Al, Bl, Cl] : [A, B, C];
    const labels = ["Play time", "Outdoor time", "Circle time"];

    return (
        <>
            <div className="flex mt-8 mb-10 justify-center items-center text-3xl md:text-6xl lv">
                <h1 className="text-center text-g4">Snack and Meal Schedule</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8">
                {images.map((img, index) => (
                    <div key={index} className="hover:scale-105 transition-transform duration-200 ease-in-out">
                        <Image src={img} alt={labels[index]} />
                    </div>
                ))}
            </div>
        </>
    );
}


"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

// Import PNGs
import A from "../../../public/h5a.png";
import B from "../../../public/h5b.png";
import C from "../../../public/h5c.png";
import D from "../../../public/h5d.png";
import E from "../../../public/h5e.png";
import F from "../../../public/h5f.png";

// Import SVGs
import Al from "../../../public/h5a.svg";
import Bl from "../../../public/h5b.svg";
import Cl from "../../../public/h5c.svg";
import Dl from "../../../public/h5d.svg";
import El from "../../../public/h5e.svg";
import Fl from "../../../public/h5f.svg";

export default function DayAtPreschool() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        // Check the screen size and update state
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // md breakpoint in Tailwind (768px)
        };

        // Run on mount and resize
        handleResize();
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Select images based on screen size
    const images = isLargeScreen
        ? [Al, Bl, Cl, Dl, El, Fl] // Use SVGs for large screens
        : [A, B, C, D, E, F]; // Use PNGs for small screens

    const labels = ["play time", "outdoor time", "circle time", "quiet time", "snack time", "lunch time"];

    return (
        <>
            <div className="flex mt-20 mb-10 justify-center items-center text-3xl md:text-5xl lv">
                <h1 className="text-center text-g4">A Day at Our Preschool</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
                {images.map((img, index) => (
                    <div key={index} className="hover:scale-105 transition-transform duration-200 ease-in-out">
                        <Image src={img} alt={labels[index]} />
                    </div>
                ))}
            </div>
        </>
    );
}

"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Images
import Contact from "../../../public/contact.svg";
import Call from "../../../public/cc.png";
import Email from "../../../public/ce.png";
import CallL from "../../../public/cc.svg";
import EmailL from "../../../public/ce.svg";

export default function Page() {
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
    const callImg = isLargeScreen ? CallL : Call;
    const emailImg = isLargeScreen ? EmailL : Email;

    return (
        <>
            {/* Contact Image */}
            <Image src={Contact} alt="Contact image" className="w-full" />

            {/* Heading */}
            <div className="flex mt-20 mb-4 justify-center items-center text-3xl md:text-6xl lv">
                <h1 className="text-center text-g4">Get in Touch With Us</h1>
            </div>

            {/* Contact Options */}
            <div className="container mx-auto flex justify-center gap-6">
                <Link href="tel:(587)364-0011">
                    <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
                        <Image src={callImg} alt="Call us" />
                    </div>
                </Link>

                <Link href="mailto:knottin_schoolcare@live.com">
                    <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
                        <Image src={emailImg} alt="Email us" />
                    </div>
                </Link>
            </div>

            {/* Google Maps Embed */}
            <div className="flex justify-center items-center my-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.850451627855!2d-113.96632522342784!3d50.704159671641754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537197837f9e1c8b%3A0x3fba89146c82211c!2sKnottin%20School%20Care%20-%20Out!5e0!3m2!1sen!2sin!4v1728653051941!5m2!1sen!2sin"
                    width="1200"
                    height="400"
                    className="rounded-2xl"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
}

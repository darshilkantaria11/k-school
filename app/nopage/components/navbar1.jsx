"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const Nav2 = () => {
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [isProgramHovered, setIsProgramHovered] = useState(false);
    const [isHam, setIsHam] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const ServicesTimeout = useRef(null);
    const ProgramTimeout = useRef(null);

    const handleMouseEnterServices = () => {
        clearTimeout(ServicesTimeout.current);
        setIsServicesHovered(true);
    };

    const handleMouseLeaveServices = () => {
        ServicesTimeout.current = setTimeout(() => {
            setIsServicesHovered(false);
        }, 300); // Delay in milliseconds
    };

    const handleMouseEnterProgram = () => {
        clearTimeout(ProgramTimeout.current);
        setIsProgramHovered(true);
    };

    const handleMouseLeaveProgram = () => {
        ProgramTimeout.current = setTimeout(() => {
            setIsProgramHovered(false);
        }, 300); // Delay in milliseconds
    };

    const toggleHamburger = () => {
        setIsHam(!isHam);
        setIsOpen1(false);
        setIsOpen2(false);
    };

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1(false);
    };

    return (
        <>
        <nav className="bg-g2  border-b-2 border-g1 border-dashed">
            <nav className="container mx-auto hidden md:flex flex-row justify-around w-full h-full relative bg-g2  text-white lv" aria-label="Main Navigation">
                <Link href="/why-us" className="flex-grow flex items-center justify-center hover:text-h1 rounded-full" title="Customer Reviews">
                    Why Us?
                </Link>
                <div
                    className="flex-grow flex items-center justify-center relative p-2"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                >
                    <p className=" ">
                        Services
                    </p>
                    {isServicesHovered && (
                        <div
                            className="dropdown-container absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10 min-w-full"
                            onMouseEnter={handleMouseEnterServices}
                            onMouseLeave={handleMouseLeaveServices}
                        >
                            <div className="dropdown bg-g1 rounded-md shadow-lg min-w-full mx-2 text-white ">
                                <Link href="/food-services" className="block p-2 hover:bg-g3 hover:text-black" title=" Food Services">
                                    Food Services
                                </Link>
                                <Link href="/field-trips" className="block p-2 hover:bg-g3 hover:text-black" title=" field trips">
                                   Field trips
                                </Link>
                                <Link href="/osc" className="block p-2 hover:bg-g3 hover:text-black" title="Out Of School Care">
                                    OSC
                                </Link>
                            </div>
                        </div>
                    )}
                    <style jsx>{`
                .dropdown-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%) translateY(-100%);
                    border-width: 15px;
                    border-style: solid;
                    border-color: transparent transparent #7BA567 transparent;
                    z-index: 20;
                }
            `}</style>
                </div>
                <div
                    className="flex-grow flex items-center justify-center relative p-2"
                    onMouseEnter={handleMouseEnterProgram}
                    onMouseLeave={handleMouseLeaveProgram}
                >
                    <Link href="/program" title="Program" className="hover:text-h1 ">
                        Programs
                    </Link>
                    {isProgramHovered && (
                        <div
                            className="dropdown-container absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-10 min-w-full"
                            onMouseEnter={handleMouseEnterProgram}
                            onMouseLeave={handleMouseLeaveProgram}
                        >
                            <div className="dropdown bg-g1 rounded-md shadow-lg min-w-full mx-2 text-white ">
                                <Link href="/program/toddler" className="block p-2 hover:bg-g3 hover:text-black" title="Program for Toddlers">
                                   Toddler
                                </Link>
                                <Link href="/program/preschool" className="block p-2 hover:bg-g3 hover:text-black" title="Program for Preschool">
                                    Preschool
                                </Link>
                                <Link href="/program/kindergarten" className="block p-2 hover:bg-g3 hover:text-black" title="Program for Kindergarten">
                                    Kindergarten
                                </Link>
                            </div>
                        </div>
                    )}
                    <style jsx>{`
                .dropdown-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%) translateY(-100%);
                    border-width: 15px;
                    border-style: solid;
                    border-color: transparent transparent #7BA567 transparent;
                    z-index: 20;
                }
            `}</style>
                </div>
                <Link href="/about-us" className="hover:text-h1 flex-grow flex items-center justify-center" title="About Us">
                    About us
                </Link>
                {/* <Link href="/family-resources" className="hover:text-h1  flex-grow flex items-center justify-center" title="Family Resources">
                    Family Resources
                </Link> */}
                
                <Link href="/careers" className="hover:text-h1 flex-grow flex items-center justify-center" title="Careers">
                    Careers
                </Link>
            </nav>
            </nav>
        </>
    );
};

export default Nav2;

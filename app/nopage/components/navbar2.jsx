"use client"
import Image from 'next/image';
import Logo from "../../../public/Logo.svg"
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {


    const [isHam, setIsHam] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

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
            <div className="flex justify-between items-center px-4 py-2 bg-g2 lv">
                {/* Left side: Logo */}
                <Link href="/">
                    <div className="flex items-center">
                        <Image
                            src={Logo}// Replace with your logo path
                            alt="Logo"
                            width={60} // Adjust the width as needed
                            height={60} // Adjust the height as needed
                        />
                    </div>
                </Link>

                {/* Right side: Book a Tour button */}
                <div className='flex flex-row'>
                    <Link href="/contact" className="bg-g1 text-white px-6 py-2 rounded-full">
                        Enquire Now
                    </Link>
                    <div className="md:hidden  flex items-center justify-start px-1 rounded-full " aria-label="Mobile Navigation">
                        <GiHamburgerMenu onClick={toggleHamburger} className='h-10 w-10 px-1 text-g4' />
                    </div>
                </div>

            </div>
            {isHam && (
                <div className="md:hidden bg-g1 " id="mobile-menu">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col" role="menu">
                        <li className="py-2">
                            <Link onClick={toggleHamburger} href="/why-us" className="text-black hover:text-h1  px-3 py-2 rounded-md text-md font-medium focus:outline-none" title="Why Choose Us">
                                Why us
                            </Link>
                        </li>
                        <li>
                            <div className="flex justify-between">
                                <p  className="text-black   px-3 py-2 rounded-md text-md font-medium focus:outline-none" title="Residential Painting Services">
                                    Services
                                </p>
                                <button
                                    onClick={toggleDropdown1}
                                    className="text-black  hover:text-h1 block px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                                    aria-expanded={isOpen1}
                                  
                                >
                                    <span className={`inline-block transition-transform transform ${isOpen1 ? "rotate-90" : ""}`}>
                                        ►
                                    </span>
                                </button>
                            </div>
                            {isOpen1 && (
                                <div className="mt-2 w-full bg-g2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1" role="menu" aria-orientation="vertical" >
                                        <Link onClick={toggleHamburger}href="/food-services" className="block px-4 py-2 text-md text-white  hover:text-h1 " role="menuitem"  title=" Food Services">
                                        Food Services
                                        </Link>
                                        <Link onClick={toggleHamburger} href="/feild-trips" className="block px-4 py-2 text-md text-white  hover:text-h1" role="menuitem" title=" Feild trips">
                                        Feild trips
                                        </Link>
                                        <Link onClick={toggleHamburger} href="/osc" className="block px-4 py-2 text-md text-white  hover:text-h1" role="menuitem" title="Out Of School Care">
                                        OSC
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li>
                            <div className="flex justify-between">
                                <Link onClick={toggleHamburger} href="/program" className="text-black  hover:text-h1 px-3 py-2 rounded-md text-md font-medium focus:outline-none" title="Program">
                                    Programs
                                </Link>
                                <button
                                    onClick={toggleDropdown2}
                                    className="text-black  hover:text-h1 block px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                                    aria-expanded={isOpen2}
                                >
                                    <span className={`inline-block transition-transform transform ${isOpen2 ? "rotate-90" : ""}`}>
                                        ►
                                    </span>
                                </button>
                            </div>
                            {isOpen2 && (
                                <div  className="mt-2 w-full bg-g2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1" role="menu" aria-orientation="vertical" >
                                        <Link onClick={toggleHamburger} href="/program/toddler" className="block px-4 py-2 text-md text-white  hover:text-h1" role="menuitem"  title="Program for Toddlers">
                                        Toddler
                                        </Link>
                                        <Link onClick={toggleHamburger} href="/program/preschool" className="block px-4 py-2 text-md text-white  hover:text-h1" role="menuitem" title="Program for Preschool">
                                        Preschool
                                        </Link>
                                        <Link onClick={toggleHamburger} href="/program/kindergarten" className="block px-4 py-2 text-md text-white  hover:text-h1" role="menuitem" title="Program for Kindergarten">
                                        Kindergarten
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="py-2">
                            <Link onClick={toggleHamburger} href="/about-us" className="text-black hover:text-h1 px-3 py-2 rounded-md text-md font-medium focus:outline-none" title="About Us">
                                About us
                            </Link>
                        </li>
                        {/* <li className="py-2">
                            <Link onClick={toggleHamburger} href="/family-resources" className="text-black  hover:text-h1 px-3 py-2 rounded-md text-md font-medium focus:outline-none" title="Family Resources">
                                Family Resources
                            </Link>
                        </li> */}

                        <li className="py-2">
                            <Link onClick={toggleHamburger} href="/careers" className="text-black  hover:text-h1 px-3 py-2 rounded-md text-md font-medium focus:outline-none" title="Careers">
                                Careers
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

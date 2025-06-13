import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link
import Footer from '../../../public/Footer.svg'; // For large screens
import Footers from '../../../public/Footers.svg'; // For small screens
import Logo from "../../../public/Logo.svg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function LandingPage() {
    return (
        <div className="relative h-auto flex flex-col lv mt-10  ">
            {/* Large screen layout */}
            <div className="hidden md:flex relative w-full h-auto">
                <div className="w-full h-full">
                    <Image
                        src={Footer}
                        alt="Background Image Large"
                        layout="responsive"
                        objectFit="cover"
                        priority
                        className="rounded-t-xl h-full w-full"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col md:flex-row justify-around items-center text-white px-10 py-10 space-y-6">
                    <div className="flex flex-col">
                        <Image
                            src={Logo}
                            alt='footer logo'
                            className=' w-24 h-auto xl:w-44'
                        />
                        <h2 className='text-3xl lg:text-6xl'>Knottin school day care centre</h2>
                        <p className="mt-4 text-xs xl:text-lg">
                            Come visit Knottin Day Care Centre for a tour and meet our dedicated educators.
                            Experience our high-quality early education first-hand.
                        </p>
                    </div>
                    <div className="w-full flex justify-around items-center text-left">
                        <div>
                            <ul className="text-xs xl:text-lg space-y-2">
                                <li><Link href="/why-us">Why us?</Link></li>
                                <li><Link href="/program">Program</Link></li>
                                {/* <li><Link href="/family-resources">Family Resources</Link></li> */}
                                <li><Link href="/careers">Careers</Link></li>
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="/contact">Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-start h-full">
                            <h2 className="text-2xl font-bold mb-4">Our Contact</h2>
                            <div>
                                <div className="text-xs xl:text-lg py-2 flex flex-row">
                                    <FaPhoneAlt className="mr-2 mt-1" /> {/* Phone icon */}
                                    <a href="tel:+15873640011">(587) 364 - 0011</a>
                                </div>

                                <div className="text-xs xl:text-lg py-2 flex flex-row">
                                    <FaEnvelope className="mr-2 mt-1" /> {/* Phone icon */}
                                    <a href="mailto:knottin_schoolcare@live.com">knottin_schoolcare@live.com</a>
                                </div>
                                <div className="text-xs xl:text-lg py-2 flex flex-row">
                                    <FaMapMarkerAlt className="mr-2 mt-1" /> {/* Phone icon */}
                                    101 Cimarron Grove Circle, Okotoks
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Small screen layout */}
            <div className="md:hidden relative w-full h-auto">
                <Image
                    src={Footers}
                    alt="Background Image Small"
                    layout="responsive"
                    width={100}
                    height={60}
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 flex flex-col justify-around items-center text-white px-4 py-6 space-y-4">
                    <div className="flex flex-col justify-start items-start">
                        <div className='flex flex-row w-full justify-center items-center'>
                            <div>
                                <Image
                                    src={Logo}
                                    alt='footer logo'
                                    className='h-32 w-44 xl:h-68 xl:w-80'
                                />
                            </div>
                            <div>

                                <h2 className='text-3xl lg:text-6xl'>Knottin school day care centre</h2>
                            </div>
                        </div>
                        <p className="mt-4 text-sm">
                            Come visit Knottin Day Care Centre for a tour and meet our dedicated educators.
                            Experience our high-quality early education first-hand.
                        </p>
                    </div>
                    <div className='text-center text-xl'>
                        <ul className="space-y-2">
                            <li><Link href="/why-us">Why us?</Link></li>
                            {/* <li><Link href="/services">Services</Link></li> */}
                            <li><Link href="/programs">Programs</Link></li>
                            {/* <li><Link href="/family-resources">Family Resources</Link></li> */}
                            <li><Link href="/career">Career</Link></li>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="w-full text-center text-xl">
                        <h2 className="text-2xl font-bold mb-2">Contact</h2>

                        {/* Phone Number 1 */}
                        <p className="text-base flex justify-center items-center">
                            <FaPhoneAlt className="mr-2" /> {/* Phone icon */}
                            <a href="tel:+15873640011">(587) 364 - 0011</a>
                        </p>



                        {/* Email */}
                        <p className="text-base flex justify-center items-center">
                            <FaEnvelope className="mr-2" /> {/* Email icon */}
                            <a href="mailto:knottin_schoolcare@live.com">knottin_schoolcare@live.com</a>
                        </p>

                        {/* Address */}
                        <p className="text-base flex justify-center items-center">
                            <FaMapMarkerAlt className="mr-2" /> {/* Address icon */}
                            101 Cimarron Grove Circle, Okotoks
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex absolute bottom-0 justify-center items-center w-full text-gray-400 py-4">
                <h1>Copyright © 2025 Knottin. All Rights Reserved</h1>
            </div>
        </div>
    );
}

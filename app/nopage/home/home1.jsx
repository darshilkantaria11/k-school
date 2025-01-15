import Image from 'next/image';
import Landing from "../../../public/landing.png";
import Landing2 from "../../../public/landing2.png";
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="relative h-96 flex flex-col lv ">
            {/* Background Image */}
            <div className="hidden md:flex relative w-full h-auto">
                <Image
                    src={Landing}
                    alt="Background Image"
                    layout="responsive"  // Ensures the image is responsive and starts from the top
                    width={100}          // Set width and height percentages to control image responsiveness
                    height={60}          // Adjust the height percentage to match the aspect ratio of your image
                    objectFit="contain"  // Ensures the full image is visible without cropping
                    priority
                    className='rounded-b-[60px]'
                />
            </div>
            <div className="md:hidden relative w-full h-auto">
                <Image
                    src={Landing2}
                    alt="Background Image"
                    layout="responsive"  // Ensures the image is responsive and starts from the top
                    width={100}          // Set width and height percentages to control image responsiveness
                    height={60}          // Adjust the height percentage to match the aspect ratio of your image
                    objectFit="contain"  // Ensures the full image is visible without cropping
                    priority
                    className='rounded-b-[50px]'
                />
            </div>

            {/* Text on the left */}
            <div className="absolute top-0 left-0  flex flex-col h-full  items-start justify-start px-12 md:px-20 pt-8 md:w-1/2 w-full xl:pt-10  ">
                <div className="bg-g1 text-white font-semibold px-4 py-2 mb-4 rounded-xl text-md md:text-sm  xl:text-2xl">
                    WELCOME TO KNOTTIN
                </div>

                {/* Main Text Content */}
                <div className="text-white">
                    <h1 className="text-3xl md:text-xl  xl:text-6xl font-bold leading-snug ">
                        <p className='py-1'>Empower Your</p>
                        <p className='py-1'>Child&apos;s Journey with</p> 
                        <p className=''> best start</p>
                    </h1>

                    {/* Read More Button */}
                    <Link
                        href="/about-us"
                        className="inline-block mt-6 p-1 bg-y1 text-yellow-900 font-semibold rounded-full hover:bg-yellow-500 transition"
                    >
                        <p className='border-dashed border-2 border-yellow-700 xl:px-4 xl:py-2 px-2 py-1 rounded-full text-sm xl:text-2xl'>Read More</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

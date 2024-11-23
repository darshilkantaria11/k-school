import Image from "next/image";
import Offer from "../../../public/Ouroffer.svg"; // Assuming this contains your butterfly background
import Link from "next/link";


export default function LandingPage() {
    return (
        <div className="relative h-96 flex flex-col mt-10 lv">
            {/* Background Image for large screens */}
            <div className="relative w-full h-auto flex justify-center items-center  rounded-xl py-6 md:py-10">
                <Image
                    src={Offer}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="absolute  w-full h-full rounded-3xl"
                />

                {/* Content on top of the background */}
                <div className="relative z-10 text-center max-w-4xl mx-auto md:p-4 p-2 flex flex-col">
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900">
                      Our Mission
                    </h2>
                    <div className="w-16 h-1 mx-auto my-4"></div>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-green-900 mb-6">
                    Welcome to our childcare centre, where each day is filled with activities that support individual, social, physical, emotional, and cognitive growth in a nurturing and fun environment. We believe every child should have the chance to explore their individuality through guided activities and free play.
                    </p>

                    {/* Button Group */}
                   
                </div>
            </div>
        </div>
    );
}

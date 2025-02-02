import Image from "next/image";
import Offer from "../../../public/osct.svg"; // Assuming this contains your butterfly background
import Link from "next/link";
import Aboutq from "../../../public/aboutq.svg";
import Toddler from "../../../public/toddler1.svg"



export default function LandingPage() {
    return (
        <>
                <div className="relative flex flex-col mt-10 mb-20 lv">
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
                <div className="relative z-10  max-w-4xl mx-auto md:p-4 p-2 flex flex-col">
                    <h2 className="text-3xl text-center md:text-4xl font-bold text-g4">
                    Highlights of the Toddler Program
                    </h2>
                    <div className="w-16 h-1 mx-auto my-4"></div>
                   
                    <div className="text-lg md:text-lg text-g4 font-normal mb-4">
                        <ol className="list-decimal">

                        <li> <strong> Individualized attention:</strong> Each child’s growth is nurtured at their own pace.</li>
                        <li> <strong> Safe exploration:</strong> Toddlers are encouraged to explore in a secure, supervised environment.</li>
                        <li><strong>  Stimulating activities:</strong> Multi-sensory experiences designed to engage growing minds and bodies.</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        
        <div className="container mx-auto relative h-auto flex flex-col mt-12 lv">
                {/* Background Image for large screens */}
                <div className="flex relative w-full h-auto">
                    <Image
                        src={Aboutq}
                        alt="Background Image"
                        layout="responsive"
                        objectFit="About quote"
                        priority
                        className='rounded-xl h-full w-full'
                    />
                </div>


                {/* Text Section */}
                <div className="absolute top-0 left-0 flex flex-col md:flex-row h-full items-center justify-around px-6 xl:px-20 pt-4 w-full text-white space-y-10 md:space-y-0">
                    <div className="flex flex-col text-justify">
                        <h1 className='xl:text-4xl md:text-2xl text-sm md:mb-4 italic'>Watching my toddler build confidence through play has been amazing. The caring teachers have made all the difference.</h1>
                        <p className='xl:text-xl md:text-lg text-xs'>— Parent</p>
                    </div>
                </div>
            </div>
        

            <div className="flex mb-8  container mx-auto justify-center flex-col lg:flex-row lv">
                <div className="flex flex-col justify-center p-4">
                    <div className="text-g4 mb-4 flex text-4xl sm:text-5xl font-bold pb-4 justify-center lg:justify-start text-center lg:text-start ">
                        <h1>Daily Rhythm</h1>
                    </div>
                    <div className="flex lg:hidden flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                        <div className="justify-center flex mb-4">
                            <div className=" p-2 rounded-xl">
                                <Image src={Toddler} alt="food image" className="h-80 w-96" />
                            </div>
                        </div>
                    </div>
                    <ul className="flex flex-col text-lg sm:text-xl text-justify list-disc ">
                        <li>
                        Morning: Arrival, free play, and circle time</li>
                        <li className="my-4">Mid-Morning: Outdoor exploration and sensory play</li>
                        <li>Afternoon: Snack, Storytime, and nap</li>
                        <li className="my-4">Late Afternoon: Group activities and music time</li>
                    </ul>
                </div>

                <div className="hidden lg:flex flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <div className="justify-center flex mb-4">
                        <div className=" p-2 rounded-xl">
                            <Image src={Toddler} alt="Feild iamge" className="h-80 w-96" />
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    );
}









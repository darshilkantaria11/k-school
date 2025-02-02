import Image from "next/image";
import Offer from "../../../public/osct.svg"; // Assuming this contains your butterfly background
import Link from "next/link";
import Aboutq from "../../../public/aboutq.svg";
import Preschool from "../../../public/toddler1.svg"
import Preschool1 from "../../../public/wu2.svg"



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
                            Key Benefits of Our Kindergarten Program
                        </h2>
                        <div className="w-16 h-1 mx-auto my-4"></div>

                        <div className="text-lg md:text-lg text-g4 font-normal mb-4">
                            <ul className="list-disc">

                                <li> <strong> Focus on readiness:</strong> Academic foundations are built through hands-on learning experiences.</li>
                                <li> <strong>Confidence building:</strong> Opportunities to lead group activities, present ideas, and work independently.</li>
                                <li><strong>  Balanced curriculum:</strong> A well-rounded approach that includes academic, social, and emotional development.</li>
                            </ul>
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
                    <div className="flex flex-col">
                        <h1 className='xl:text-4xl md:text-2xl text-justify text-sm md:mb-4 italic'>The growth my child has shown in both academics and social skills is phenomenal.</h1>
                        <p className='xl:text-xl md:text-lg text-xs'>— Parent</p>
                    </div>
                </div>
            </div>


            <div className="flex mb-2  container mx-auto justify-center flex-col lg:flex-row lv">
                <div className="flex flex-col justify-center p-4 lg:w-1/2">
                    <div className="text-g4 md:mb-4 flex text-4xl sm:text-5xl font-bold  justify-center lg:justify-start text-center lg:text-start ">
                        <h1>Daily Rhythm</h1>
                    </div>
                    <div className="flex lg:hidden flex-col  justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                        <div className="justify-center flex ">
                            <div className="  rounded-xl">
                                <Image src={Preschool} alt="food image" className="h-80 w-96" />
                            </div>
                        </div>
                    </div>
                    <ul className="flex flex-col text-lg sm:text-xl text-justify list-disc p-2">
                        <li> <strong> Critical Thinking:</strong> Puzzles, games, and experiments designed to build problem-solving skills.</li>
                        <li className="my-4"> <strong> Independence: Self-care routines</strong> (e.g., organizing materials, dressing, cleaning up) foster responsibility.</li>
                        <li> <strong> Collaboration:</strong> Group projects and activities teach the value of teamwork and cooperation.</li>

                    </ul>
                </div>

                <div className="hidden lg:flex lg:w-1/2 flex-col p-2 justify-center lg:justify-start hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <div className="justify-center flex mb-4">
                        <div className=" p-2 rounded-xl">
                            <Image src={Preschool} alt="Feild iamge" className="h-80 w-96" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mb-8  container mx-auto justify-center flex-col lg:flex-row lv">
                <div className="hidden lg:flex lg:w-1/2 flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <div className="justify-center flex mb-4">
                        <div className=" p-2 rounded-xl">
                            <Image src={Preschool1} alt="Feild iamge" className="h-80 w-full" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center p-4 lg:w-1/2">
                    <div className="text-g4 flex text-4xl sm:text-5xl font-bold pb-4 justify-center lg:justify-start text-center lg:text-start ">
                        <h1>Sample Weekly Schedule</h1>
                    </div>
                    <div className="flex lg:hidden flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                        <div className="justify-center flex mb-4">
                            <div className=" p-2 rounded-xl">
                                <Image src={Preschool1} alt="food image" className="h-80 w-96" />
                            </div>
                        </div>
                    </div>
                    <ul className="flex flex-col text-lg sm:text-xl text-justify list-disc p-2">
                        <li> <strong> Monday: </strong> Phonics & early reading, creative art projects, outdoor play</li>
                        <li className="my-4"> <strong> Tuesday:</strong>Math games, science experiments, music and dance</li>
                        <li> <strong> Wednesday:</strong> Storytime, role-playing, group activities</li>
                        <li className="my-4"> <strong> Thursday:</strong>Literacy practice, numeracy games, collaborative projects</li>
                        <li> <strong> Friday:</strong> Outdoor exploration, physical education, review of weekly lessons</li>

                    </ul>
                </div>


            </div>


        </>
    );
}









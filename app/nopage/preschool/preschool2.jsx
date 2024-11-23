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
                            Why Choose Our Preschool Program?
                        </h2>
                        <div className="w-16 h-1 mx-auto my-4"></div>

                        <div className="text-lg md:text-lg text-g4 font-normal mb-4">
                            <ol className="list-decimal">

                                <li> <strong> Child-centred learning:</strong> We focus on each child&apos;s unique strengths and interests.</li>
                                <li> <strong> Interactive play-based learning:</strong> Encouraging curiosity and problem-solving through fun, hands-on experiences.</li>
                                <li><strong>  Small group interactions:</strong> Ensuring individualized attention and fostering close relationships among peers.</li>
                            </ol>
                        </div>


                    </div>
                </div>
            </div>

            <div className="flex p-2 container mx-auto justify-center items-center py-10 lv">
                <div className=" flex flex-col bg-g1 text-white w-full rounded-3xl px-8 py-10 shadow-lg">
                    <h2 className="text-2xl xl:text-5xl font-bold text-center">
                        What Parents Love
                    </h2>

                    <div className="mt-6 text-center text-lg xl:text-2xl">
                        <p className="mb-2">Engaged educators: <span className="italic"> &quot;My child looks forward to school every day because of the fun and engaging activities.&quot;</span></p>

                            <p>Creativity and learning: <span className="italic"> &quot;The balance between learning and play is exactly what my child needed.&quot;</span></p>

                    </div>


                </div>
            </div>


            <div className="flex mb-8  container mx-auto justify-center flex-col lg:flex-row lv">
                <div className="flex flex-col justify-center p-4">
                    <div className="text-g4 flex text-4xl sm:text-5xl font-bold pb-4 justify-center lg:justify-start text-center lg:text-start ">
                        <h1>Preschool Readiness Checklist</h1>
                    </div>
                    <div className="flex lg:hidden flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                        <div className="justify-center flex mb-4">
                            <div className=" p-2 rounded-xl">
                                <Image src={Toddler} alt="food image" className="h-80 w-96" />
                            </div>
                        </div>
                    </div>
                    <div className="text-g4 flex text-xl sm:text-2xl font-bold pb-2 justify-center lg:justify-start text-center lg:text-start ">
                        <h1>Here are a few signs that your child is ready for our Preschool Program:</h1>
                    </div>
                    <ul className="flex flex-col text-lg sm:text-xl text-justify list-disc ">
                        <li>
                        Shows curiosity about books and enjoys being read to.</li>
                        <li className="my-4">Can follow simple instructions and routines.</li>
                        <li>Engages in independent play for short periods.</li>
                        <li className="my-4">Demonstrates interest in interacting with other children.</li>
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









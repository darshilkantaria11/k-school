import Image from "next/image"
import Program from "../../../public/Program.svg"
import P1 from "../../../public/p1.svg"
import P2 from "../../../public/p2.svg"
import P3 from "../../../public/p3.svg"



export default function Page() {
    return (
        <>
            <Image
                src={Program}
                alt="Program image"
                className="w-full"

            ></Image>
            <div className="flex mt-20 container mx-auto justify-start items-start flex-col lg:flex-row lv">
                <div className="flex flex-col p-2 justify-center hover:scale-105 transition-transform duration-200 ease-in-out lg:w-1/5">
                    <div className="flex text-2xl text-center lg:hidden sm:text-5xl font-bold pb-4 justify-center lg:justify-start">
                        <h1>Program for Toddlers ( 19 months - 2 years )</h1>
                    </div>
                    <div className=" justify-center flex  mb-4">
                        <div className=" p-2 rounded-xl">
                            <Image src={P1} alt="P1" className="h-58 w-80" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-4/5 pl-10 justify-center">
                    <div className="text-g4 hidden lg:flex text-3xl sm:text-4xl font-bold pb-4 justify-center lg:justify-start">
                        <h1>Program for Toddlers ( 19 months - 2 years )</h1>
                    </div>
                    <div className="flex text-lg sm:text-xl text-justify pr-10">
                        <p>
                        Focused on early development, fostering sensory exploration, motor skills, and basic social interaction. Our program offers a safe and nurturing environment, encouraging curiosity and discovery at every step. Daily activities are designed to support language and cognitive skills.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex mt-20 container mx-auto justify-start items-start flex-col lg:flex-row lv">
                <div className="flex flex-col p-2 justify-center hover:scale-105 transition-transform duration-200 ease-in-out lg:w-1/5">
                    <div className="flex text-2xl text-center lg:hidden sm:text-5xl font-bold pb-4 justify-center lg:justify-start">
                        <h1>Program for Preschool ( 3 years - 4 years )</h1>
                    </div>
                    <div className=" justify-center flex  mb-4">
                        <div className=" p-2 rounded-xl">
                            <Image src={P2} alt="P1" className="h-58 w-80" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-4/5 pl-10 justify-center">
                    <div className="text-g4 hidden lg:flex text-3xl sm:text-4xl font-bold pb-4 justify-center lg:justify-start">
                        <h1>Program for Preschool ( 3 years - 4 years )</h1>
                    </div>
                    <div className="flex text-lg sm:text-xl text-justify pr-10">
                        <p>
                        Encourages cognitive growth, language development, and creative play, preparing children for school readiness. We emphasize hands-on learning through art, music, and outdoor activities. Social skills like cooperation, sharing, and self-expression are integrated into daily routines.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex mt-20 container mx-auto justify-start items-start flex-col lg:flex-row lv">
                <div className="flex flex-col p-2 justify-center hover:scale-105 transition-transform duration-200 ease-in-out lg:w-1/5">
                    <div className="flex text-2xl text-center lg:hidden sm:text-5xl font-bold pb-4 justify-center lg:justify-start">
                        <h1>Program for Kindergarten  ( 5 years - 6 years )</h1>
                    </div>
                    <div className=" justify-center flex  mb-4">
                        <div className=" p-2 rounded-xl">
                            <Image src={P3} alt="P1" className="h-58 w-80" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-4/5 pl-10  justify-center">
                    <div className="text-g4 hidden lg:flex text-3xl sm:text-4xl font-bold pb-4 justify-center lg:justify-start">
                        <h1>Program for Kindergarten  ( 5 years - 6 years )</h1>
                    </div>
                    <div className="flex text-lg sm:text-xl text-justify pr-10">
                        <p>
                        Prepares children for formal schooling with an emphasis on academic, social, and emotional skills. Our curriculum focuses on early literacy, math, and science concepts, balanced with physical and creative play. Children are guided in problem-solving, teamwork, and self-regulation.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
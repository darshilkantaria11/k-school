import Image from "next/image";
import Story from "../../../public/story.svg";

export default function Home() {
    return (
        <>
            <div className="flex xl:mt-44 md:mt-0 mt-72 container mx-auto justify-between flex-col lg:flex-row lv">
                <div className="flex flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                    <div className="flex text-4xl lg:hidden sm:text-5xl font-bold pb-4 justify-center lg:justify-start">
                        <h1>What&apos;s Our Story?</h1>
                    </div>
                    <div className=" justify-center flex  mb-4">
                        <div className="border-2 border-dashed border-black p-2 rounded-xl">
                            <Image src={Story} alt="story" className="h-80 w-96" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-3/5 pl-10">
                    <div className="text-g4 hidden lg:flex text-4xl sm:text-5xl font-bold pb-4 justify-center lg:justify-start">
                        <h1>What&apos;s Our Story?</h1>
                    </div>
                    <div className="flex text-lg sm:text-xl text-justify pr-10">
                        <p>
                            The Knottin School Day Care has been in operation since December 2012. Knottin School Day Care offers a warm, nurturing environment where children can explore and develop their unique potential. We provide a safe space that meets each child&apos;s individual needs and fosters growth through peer interaction, caring adults, and purposeful play. Both spontaneous and teacher-guided activities promote social, physical, intellectual, creative, and emotional development, making play an essential part of their experience.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

import Image from "next/image";
import Fun from "../../../public/fun.svg";

export default function Home() {
    return (
        <>
            <div className="flex mt-20 container mx-auto justify-between flex-col lg:flex-row lv">
                
                <div className="flex flex-col lg:w-3/5 pl-10">
                    <div className="text-g4 flex flex-col text-3xl md:text-4xl font-bold pb-4 justify-center lg:justify-start">
                        <h1>A Favourite Place For</h1>
                      <h1 className=" text-xl sm:text-5xl ">  Fun and Joy</h1>
                    </div>
                    <div className="flex text-lg sm:text-xl text-justify pr-10">
                        <p>
                        Knottin Day Care is a favourite spot for toddlers, where fun and play go hand in hand with learning. Every day, children enjoy exciting activities that spark their curiosity, foster creativity, and encourage exploration. It&apos;s a joyful space where little ones eagerly discover new things while building friendships and developing essential skills.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                    <div className=" justify-center flex  mb-4">
                        <div className="p-2 rounded-xl">
                            <Image src={Fun} alt="story" className="h-80 w-96" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

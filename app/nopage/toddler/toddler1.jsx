import Image from "next/image"
import Toddler from "../../../public/toddler.svg"
import Toddler1 from "../../../public/wu5.svg"
import Table from "./table"


export default function Page() {
    return (
        <>
            <Image
                src={Toddler}
                alt="Toddler image"
                className="w-full"

            ></Image>
             <div className="flex flex-col lv container mx-auto justify-center items-center mt-10 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">Exploration and Discovery through Play</h1>
                <p className="xl:text-xl md:text-lg text-xs py-4 max-w-6xl text-justify">At this crucial stage of development, toddlers are naturally driven to explore their surroundings and interact with the world through their senses. Our Toddler Program is carefully crafted to nurture this innate curiosity through activities that are both engaging and developmentally appropriate. With a focus on sensory play, motor skill development, and early socialization, we ensure that your child&apos;s first educational experience is both enriching and fun. Our educators pay close attention to each child’s individual needs, fostering a secure and loving environment where toddlers can grow confidently.</p>
                <Image
                    src={Toddler1}
                    alt="Toddler1 image"
                    className=" mt-8"

                ></Image>
            </div>

            <Table/>
           
        </>
    )
}
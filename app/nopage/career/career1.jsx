import Image from "next/image"
import Career from "../../../public/career.svg"



export default function Page() {
    return (
        <>
            <Image
                src={Career}
                alt="Career image"
                className="w-full"

            ></Image>
             <div className="flex flex-col lv container mx-auto justify-center items-center mt-10 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">What make us Different?</h1>
                <p className="xl:text-xl md:text-lg text-xs py-4 max-w-6xl text-justify">At Knottin Preschool, we believe in nurturing young minds and shaping the future. If you&apos;re passionate about early education, join our team and make a difference!</p>
            </div>

            <div className="flex flex-col lv container mx-auto justify-center items-center mt-10 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">Available Positions</h1>
            </div>

           
           
        </>
    )
}
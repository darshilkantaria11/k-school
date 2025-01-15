import Image from "next/image"
import Preschool from "../../../public/preschool.svg"
import Preschool1 from "../../../public/feildimg.svg"
import Table from "./table"


export default function Page() {
    return (
        <>
            <Image
                src={Preschool}
                alt="Toddler image"
                className="w-full"

            ></Image>
             <div className="flex flex-col lv container mx-auto justify-center items-center mt-10 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">Building Confidence, Creativity & Communication</h1>
                <p className="xl:text-xl md:text-lg text-xs py-4 max-w-6xl text-justify">The Preschool Program is an exciting time when children start to assert their independence and curiosity while also building foundational academic and social skills. Our approach is play-based but includes structured learning opportunities that focus on early literacy, numeracy, and problem-solving. Through imaginative play, artistic expression, and group activities, we help children explore their creativity while laying the groundwork for lifelong learning. We also emphasize social interactions, helping pre-schoolers learn how to share, cooperate, and resolve conflicts.</p>
                <Image
                    src={Preschool1}
                    alt="Toddler1 image"
                    className=" mt-8"

                ></Image>
            </div>

            <Table/>
           
        </>
    )
}
import Image from "next/image"
import Kindergarten from "../../../public/kindergarten.svg"
import Kindergarten1 from "../../../public/kindergarten1.svg"
import Table from "./table"


export default function Page() {
    return (
        <>
            <Image
                src={Kindergarten}
                alt="Toddler image"
                className=""

            ></Image>
             <div className="flex flex-col lv container mx-auto justify-center items-center mt-10 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">Preparing for Academic and Social Success</h1>
                <p className="xl:text-xl md:text-lg text-xs py-4 max-w-6xl text-justify">Kindergarten is a pivotal year in your child&apos;s educational journey. Our program provides the structure and support necessary for children to develop essential academic and social skills in a fun, dynamic environment. With a focus on literacy, numeracy, science, and social-emotional learning, our Kindergarten Program helps children build the confidence they need to thrive in school. We believe in balancing structured learning with creative exploration, ensuring that your child is well-prepared for the challenges of elementary school while still enjoying the learning process.</p>
                <Image
                    src={Kindergarten1}
                    alt="Toddler1 image"
                    className=" mt-8"

                ></Image>
            </div>

            <Table/>
           
        </>
    )
}
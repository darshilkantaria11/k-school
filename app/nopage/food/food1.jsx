import Image from "next/image"
import Food from "../../../public/food.svg"



export default function Page() {
    return (
        <>
            <Image
                src={Food}
                alt="Food image"
                className="w-full"

            ></Image>

            <div className="flex flex-col lv container mx-auto justify-center items-center mt-10 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">Healthy Eating Policy</h1>
                <p className="xl:text-xl md:text-lg text-xs py-4 max-w-6xl text-justify">We believe that early childhood is the perfect time to establish lifelong healthy eating habits. By offering nutritious meals and snacks, we ensure children have the energy and focus they need to thrive. Together with families, we aim to create a foundation for their overall well-being and happiness.</p>
            </div>

        </>
    )
}
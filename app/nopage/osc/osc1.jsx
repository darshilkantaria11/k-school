import Image from "next/image"
import Osc from "../../../public/osc.svg"



export default function Page() {
    return (
        <>
            <Image
                src={Osc}
                alt="osc image"
                className=""

            ></Image>

            <div className="flex flex-col lv container mx-auto justify-center items-center mt-10 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">Knottin OSC</h1>
                <p className="xl:text-xl md:text-lg text-xs py-4 max-w-6xl text-justify">At Knottin School Day Care, our Out of School Care (OSC) program ensures safe, reliable transportation for your child, following Transport Canada Guidelines. We cover all aspects, from pick-up and drop-off procedures to booster seat requirements and late pick-up policies. Partnering with local schools, we provide a secure and smooth experience for parents, ensuring your child’s safety and comfort during their daily journey and activities.</p>
            </div>

        </>
    )
}
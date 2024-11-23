import Image from "next/image"
import About from "../../../public/about.svg"
import Aboutr from "../../../public/aboutr.svg"


export default function Page() {
    return (
        <>
            <Image
                src={About}
                alt="about image"
                className=""

            ></Image>
            <div className="flex flex-col lv container mx-auto justify-center items-center mt-10 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">Welcome to Knottin Day Care Centre</h1>
                <p className="xl:text-xl md:text-lg text-xs py-4 max-w-6xl text-justify">Located in the heart of Okotoks and proudly serving the surrounding Foothills area, Knottin Day Care Centre is dedicated to providing exceptional childcare. We believe that every child is a resilient, resourceful, and capable learner. Our goal is to create a vibrant, nurturing environment that fosters each child&apos;s unique identity while promoting learning through play. <br />
                    At Knottin, we support age-appropriate development through a holistic, play-based approach. Our preschool program encourages children to build independence while engaging in creative, stimulating activities that include arts, literacy, numeracy, and science—all presented through the joy of play. <br />
                    We are committed to building strong, supportive relationships between children, parents, and educators. By working closely with families, we create a cohesive, caring community where children can thrive emotionally, socially, and academically. <br />
                    At Knottin Day Care Centre, we don&apos;t just encourage play; we facilitate growth, exploration, and lifelong learning through every interaction.</p>
                <Image
                    src={Aboutr}
                    alt="about image"
                    className=" mt-8"

                ></Image>
            </div>

        </>
    )
}
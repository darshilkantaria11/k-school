import Image from "next/image"
import Feild from "../../../public/feild.svg"
import Feildi from "../../../public/feildimg.svg"
import Feildi2 from "../../../public/feildimg2.svg"




export default function Page() {
    return (
        <>
            <Image
                src={Feild}
                alt="Feild image"
                className="w-full"

            ></Image>
            <div className="flex flex-col lv container mx-auto justify-center items-center mt-10 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">Creating Memories with Knottin</h1>
                <p className="xl:text-xl md:text-lg text-xs py-4 max-w-6xl text-justify">Knottin&apos;s field trips are an exciting adventure for children, filled with fun, exploration, and learning beyond the classroom. Whether visiting local parks, museums, or nature trails, our field trips spark curiosity and create lasting memories. With hands-on experiences, children get the chance to explore new environments, discover the world around them, and bond with friends. Each trip is designed to be both educational and fun, ensuring that every child enjoys a day of excitement, laughter, and discovery. We strive to make these outings not only a highlight of their time at Knottin but also a stepping stone in their lifelong journey of learning.</p>

                <Image
                    src={Feildi}
                    alt="Feild image"
                    className=" mt-8"

                ></Image>
            </div>

            <div className="flex p-2 container mx-auto justify-center items-center py-10 lv">
                <div className="flex flex-col bg-g1 text-white w-full rounded-3xl px-8 py-10 shadow-lg">
                    <h2 className="text-2xl xl:text-5xl font-bold text-center">
                    Permission Forms & Schedules
                    </h2>

                    <div className="mt-6 text-lg md:text-lg">
                        <ul className="list-disc font-semibold">
                            <li>Parents may be required to contribute to field trip costs on a case-by-case basis.</li>
                            <li>It is important to have your child at the centre at least half an hour before the departure time for these events, we usually follow a tight schedule, and the centre is locked when we leave. </li>
                            <li>Permission forms will be posted one week before the field trip.</li>
                            <li>For field trips outside the area, children will be transported safely by licensed transportation services to and from the day-care.</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="flex mb-8  container mx-auto justify-between flex-col lg:flex-row lv">
                <div className="flex flex-col lg:w-3/5 p-4">
                    <div className="text-g4 flex text-4xl sm:text-5xl font-bold pb-4 justify-center lg:justify-start text-center lg:text-start ">
                        <h1>Parent Participation</h1>
                    </div>
                    <div className="flex lg:hidden flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                        <div className="justify-center flex mb-4">
                            <div className=" p-2 rounded-xl">
                                <Image src={Feildi2} alt="food image" className="h-80 w-96" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-lg sm:text-xl text-justify ">
                        <p>We warmly invite parents to join us as volunteers on our exciting field trips, offering a fun and rewarding opportunity to engage with the children.</p>
                        <p className="my-4">By participating, you&apos;ll get to share in their joy as they explore new environments and create lasting memories. </p>
                        <p>It&apos;s a great way to be actively involved in your child&apos;s learning journey while building connections with other families. </p>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                    <div className="justify-center flex mb-4">
                        <div className=" p-2 rounded-xl">
                            <Image src={Feildi2} alt="Feild iamge" className="h-80 w-96" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}






import Image from 'next/image';
import Home3 from "../../../public/home3.svg";
import Home3s from "../../../public/home3s.svg";
import A from "../../../public/h3a.svg";
import B from "../../../public/h3b.svg";
import C from "../../../public/h3c.svg";

export default function LandingPage() {
    return (
        <div className="container mx-auto relative h-auto flex flex-col mt-10 lv">
            {/* Background Image for large screens */}
            <div className="hidden md:flex relative w-full h-auto">
                <Image
                    src={Home3}
                    alt="Background Image"
                    layout="responsive"
                    objectFit="cover"
                    priority
                    className='rounded-xl h-full w-full'
                />
            </div>
            {/* Background Image for small screens */}
            <div className="md:hidden relative w-full h-auto">
                <Image
                    src={Home3s}
                    alt="Background Image"
                    layout="responsive"
                    width={100}
                    height={60}
                    objectFit="cover"
                    priority
                />
            </div>

            {/* Text Section */}
            <div className="absolute top-0 left-0 flex flex-col md:flex-row h-full items-center justify-around px-6 xl:px-20 pt-8 w-full text-white space-y-10 md:space-y-0">
                <div className="flex flex-col items-center md:w-1/3 justify-center md:pb-10 text-center ">
                    <div>
                        <Image
                            src={A}
                            alt="Language & Communication"
                           
                            className='rounded-xl xl:pb-5 xl:h-48 xl:w-48 h-28 w-28 hover:scale-105 transition-transform duration-200 ease-in-out'
                        />
                    </div>
                    <div className='pt-4'>
                        <h1 className="xl:text-2xl text-lg font-bold">Language & Communication</h1>
                        <p className='text-xs xl:text-sm'>&quot;Our curriculum builds language skills through stories, songs, and interactive lessons.&quot;</p>
                    </div>
                </div>
                <div className="flex flex-col items-center md:w-1/3 justify-center md:pb-10 text-center ">
                    <div>
                        <Image
                            src={B}
                            alt="Motor Skill Enhancement"
                            width={180}
                            height={180}
                            className='rounded-2xl xl:pb-5 xl:h-52 xl:w-52 h-32 w-32 hover:scale-105 transition-transform duration-200 ease-in-out'
                        />
                    </div>
                    <div>
                        <h1 className="xl:text-2xl text-lg  font-bold">Motor Skill Enhancement</h1>
                        <p className='text-xs xl:text-sm'>&quot;Use fun, hands-on activities to build motor skills, strength, coordination, and confidence through play.&quot;</p>
                    </div>
                </div>
                <div className="flex flex-col items-center md:w-1/3 justify-center md:pb-10 text-center ">
                    <div>
                        <Image
                            src={C}
                            alt="Holistic Development"
                            width={180}
                            height={180}
                            className='rounded-xl xl:pb-5 xl:h-52 xl:w-52 h-32 w-32 hover:scale-105 transition-transform duration-200 ease-in-out'
                        />
                    </div>
                    <div>
                        <h1 className="xl:text-2xl text-lg  font-bold">Holistic Development</h1>
                        <p className='text-xs xl:text-sm'>&quot;Our preschool fosters holistic growth, social & physical development in a safe, engaging environment.&quot;</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

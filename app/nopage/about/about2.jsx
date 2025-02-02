import Image from 'next/image';
import Aboutq from "../../../public/aboutq.svg";
import A from "../../../public/h3a.svg";
import B from "../../../public/h3b.svg";
import C from "../../../public/h3c.svg";

export default function LandingPage() {
    return (
        <>

            <div className="container mx-auto relative h-auto flex justify-center items-center text-justify flex-col mt-12 lv">
                {/* Background Image for large screens */}
                <div className="flex relative w-full h-auto">
                    <Image
                        src={Aboutq}
                        alt="Background Image"
                        layout="responsive"
                        objectFit="About quote"
                        priority
                        className='rounded-xl h-full w-full'
                    />
                </div>


                {/* Text Section */}
                <div className="absolute top-0 left-0 flex flex-col md:flex-row h-full items-center justify-around px-6 xl:px-20 pt-4 w-full text-white space-y-10 md:space-y-0">
                    <div className="flex flex-col">
                        <h1 className='xl:text-4xl md:text-2xl text-sm md:mb-4 italic'>The greatest gifts you can give your children are the roots of responsibility and the wings of independence.</h1>
                        <p className='xl:text-xl md:text-lg text-xs'>— Denis Waitley</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lv container mx-auto justify-center items-center mt-12 p-2">
                <h1 className="text-2xl text-center md:text-4xl xl:text-5xl font-semibold text-g4">WE MAKE &quot;PLAY&quot; A PURPOSEFUL WORK</h1>
                <p className="xl:text-xl md:text-lg text-xs py-4 max-w-6xl text-justify">At Knottin School Day Care, we provide a warm, accepting, and nurturing atmosphere where each child can explore and develop their unique potential. We believe that every child is an individual with differing needs, interests, and developmental paces. Within the safety and security of our day care, children are encouraged to challenge themselves and grow through interactions with peers, caring adults, and the power of play. <br />
                    For young children, play is purposeful work and fundamental to their growth and development. Our center uses both spontaneous and teacher-directed play activities to foster social, physical, intellectual, creative, and emotional development. <br />
                    Recognizing the importance of self-esteem, our staff gently guides children toward greater self-awareness, helping them build a realistic and positive sense of their abilities while developing the social skills needed to create meaningful relationships with others.</p>

            </div>
        </>
    );
}

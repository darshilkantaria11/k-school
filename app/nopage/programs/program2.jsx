// components/ProgramCard.js
import Link from "next/link";
import Accordion from "./program3"

export default function ProgramCard() {
    const accordionData = [
        { title: "Accordion 1", content: "This is the content for accordion 1." },
        { title: "Accordion 2", content: "This is the content for accordion 2." },
        { title: "Accordion 3", content: "This is the content for accordion 3." },
        { title: "Accordion 4", content: "This is the content for accordion 4." },
        { title: "Accordion 5", content: "This is the content for accordion 5." },
    ];
    return (
        <>
            <div className="flex p-2 container mx-auto justify-center items-center py-10 lv">
                <div className=" flex flex-col bg-g1 text-white w-full rounded-3xl px-8 py-10 shadow-lg">
                    <h2 className="text-2xl xl:text-4xl font-bold text-center">
                        Knottin&apos;s Early Childhood Programs
                    </h2>

                    <div className="mt-6 text-center text-lg xl:text-xl">
                        <p>At Knottin Day Care, we are dedicated to providing a nurturing and enriching environment for children in their early years. Our thoughtfully designed programs cater to each stage of development, from toddlers to kindergarten-aged children, ensuring they receive the care, attention, and learning opportunities needed for their growth. Through a balance of structured activities and creative play, we help children build essential social, emotional, and cognitive skills, laying a strong foundation for their future education and overall well-being.</p>

                    </div>

                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-block p-1 bg-y1 text-yellow-900 font-semibold rounded-full hover:bg-yellow-500 transition"
                        >
                            <p className='border-dashed border-2 border-yellow-700 xl:px-4 xl:py-2 px-2 py-1 rounded-full text-sm xl:text-3xl'>Get Admission Form</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-2xl mx-auto lv">
                <h2 className="text-center text-2xl font-bold text-green-900 my-6">
                    Answers to Your Preschool Questions
                </h2>
                {accordionData.map((item, index) => (
                    <Accordion key={index} title={item.title} content={item.content} />
                ))}
            </div>

        </>
    );
}

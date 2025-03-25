// components/ProgramCard.js
import Link from "next/link";

export default function ProgramCard() {
    return (
        <div className="flex p-2 container mx-auto justify-center items-center py-10 lv">
            <div className=" flex flex-col bg-g1 text-white w-full rounded-3xl px-8 py-10 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Programs Offered (Ages 19 Months to 12 Years)
                </h2>

                <div className="mt-6 text-center text-lg xl:text-2xl">
                    <p>Small Cohorts for Personalized Attention</p>
                    <p>Full-Time Program: 5 days a week</p>
                    <p>Part-Time Program: 3 days a week</p>
                    <p>Introduction to Pre-Kindergarten Skills</p>
                    <p>Kindergarten Transportation: Available within Okotoks for FSD or CTR</p>
                </div>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/program"
                        className="inline-block p-1 bg-y1 text-yellow-900 font-semibold rounded-full hover:bg-yellow-500 transition"
                    >
                        <p className='border-dashed border-2 border-yellow-700 xl:px-4 xl:py-2 px-2 py-1 rounded-full text-sm xl:text-3xl'>Get to Know More</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

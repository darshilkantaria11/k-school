export default function DayAtPreschool() {
    return (
        <>
            <div className="flex mt-20 mb-10 justify-center items-center text-3xl md:text-5xl lv">
                <h1 className="text-center text-g4">A Day at Our Preschool</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
                    <img src="/h5a.svg" alt="play time" className="w-full h-auto" />
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
                    <img src="/h5b.svg" alt="outdoor time" className="w-full h-auto" />
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
                    <img src="/h5c.svg" alt="circle time" className="w-full h-auto" />
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
                    <img src="/h5d.svg" alt="quiet time" className="w-full h-auto" />
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
                    <img src="/h5e.svg" alt="snack time" className="w-full h-auto" />
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out">
                    <img src="/h5f.svg" alt="lunch time" className="w-full h-auto" />
                </div>
            </div>
        </>
    );
}

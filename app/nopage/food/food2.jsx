import Image from 'next/image';
import A from '../../../public/f1.svg'; // Import the SVG frame
import B from '../../../public/f2.svg';
import C from '../../../public/f3.svg';


export default function DayAtPreschool() {
    return (
        <>
        <div className="flex mt-8 mb-10 justify-center items-center text-3xl md:text-6xl lv">
            <h1 className='text-center text-g4'>Snack and Meal Schedule</h1>
        </div>
            <div className="container mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8 ">
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={A}
                    alt='play time'
                    ></Image>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={B}
                    alt='outdoor time'
                    ></Image>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={C}
                    alt='circle time'
                    ></Image>
                </div>
               
            </div>
        </>
    );
}

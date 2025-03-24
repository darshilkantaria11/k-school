import Image from 'next/image';
import A from '../../../public/h5a.svg'; // Import the SVG frame
import B from '../../../public/h5b.svg';
import C from '../../../public/h5c.svg';
import D from '../../../public/h5d.svg';
import E from '../../../public/h5e.svg';
import F from '../../../public/h5f.svg';

export default function DayAtPreschool() {
    return (
        <>
        <div className="flex mt-20 mb-10 justify-center items-center text-3xl md:text-5xl lv">
            <h1 className='text-center text-g4'>A Day at Our Preschool</h1>
        </div>
            <div className="container mx-auto grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={A}
                    alt='play time'
                    unoptimized></Image>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={B}
                    alt='outdoor time'
                    unoptimized></Image>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={C}
                    alt='circle time'
                    unoptimized ></Image>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={D}
                    alt='quite time'
                    unoptimized ></Image>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={E}
                    alt='snack time'
                    unoptimized ></Image>
                </div>
                <div className=" hover:scale-105 transition-transform duration-200 ease-in-out">
                    <Image
                    src={F}
                    alt='lunch time'
                    unoptimized ></Image>
                </div>
                
               
            </div>
        </>
    );
}

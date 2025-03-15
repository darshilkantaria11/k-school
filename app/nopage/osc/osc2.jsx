import Image from 'next/image';
import A from '../../../public/o1a.svg'; // Import the SVG frame
import B from '../../../public/o2.svg';
import C from '../../../public/o3.svg';
import D from '../../../public/o4.svg';
import E from '../../../public/o5.svg';
import F from '../../../public/o6.svg';

export default function DayAtPreschool() {
    return (
        <>
        <div className="flex mt-20 mb-10 justify-center items-center text-3xl md:text-6xl lv">
            <h1 className='text-center text-g4'>Transportation Policy</h1>
        </div>
            <div className="container mx-auto grid grid-cols-2 gap-4 lg:gap-8">
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
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={D}
                    alt='quite time'
                    ></Image>
                </div>
                <div className="hover:scale-105 transition-transform duration-200 ease-in-out ">
                    <Image
                    src={E}
                    alt='snack time'
                    ></Image>
                </div>
                <div className=" hover:scale-105 transition-transform duration-200 ease-in-out">
                    <Image
                    src={F}
                    alt='lunch time'
                    ></Image>
                </div>
                
               
            </div>
        </>
    );
}

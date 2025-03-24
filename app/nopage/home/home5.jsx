import Image from 'next/image';
import A from '../../../public/h5a.png'; // Import the png frame
import B from '../../../public/h5b.png';
import C from '../../../public/h5c.png';
import D from '../../../public/h5d.png';
import E from '../../../public/h5e.png';
import F from '../../../public/h5f.png';

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

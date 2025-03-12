import Image from "next/image";
import Transport from "../../../public/osct.svg"; // Assuming this contains your butterfly background
import Link from "next/link";

export default function LandingPage() {
    return (
        <>
            <div className="relative h-full flex flex-col mt-10 lv mb-10">
                {/* Background Image for large screens */}
                <div className="relative w-full h-auto flex justify-center items-center rounded-xl py-6 md:py-10">
    <Image
        src={Transport}
        alt="Transport Image"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute w-full h-full rounded-3xl"
    />

    {/* Content on top of the background */}
    <div className="relative z-10 md:p-4 p-2 flex flex-col container mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-g4 text-center mb-4">
            Transportation Rules
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-g4 font-semibold mb-6">
            Children will be transported to and from field trips and are expected to abide by the rules set up for safety purposes. The following rules are to be followed and reviewed often with your child:
        </p>

        {/* Transportation Rules */}
        <div className="text-lg md:text-lg text-g4 font-normal mb-6">
            <p>1. After the driver has brought the van/bus to a complete stop, students should enter and leave the bus single file in a quiet and orderly manner.</p>
            <p>2. Students should never throw anything inside or outside the van/bus.</p>
            <p>3. Students should take a seat immediately and stay seated.</p>
            <p>4. Students should keep heads, hands, and arms inside the van/bus at all times. Failure to obey this rule can result in various accidents.</p>
            <p>5. Students are responsible for showing their best conduct. No rough play, loud talking, abusive language, or bothering others will be tolerated.</p>
            <p>6. Students are not permitted to eat or drink on the bus or van.</p>
            <p>7. Students should not open windows without the driver&apos;s permission.</p>
            <p>8. Students should not tamper with the safety devices on the bus or van or destroy or deface any portion of the vehicle.</p>
        </div>

        {/* PDF Download Button */}
        <div className="flex justify-center">
            <a
                href="https://drive.google.com/file/d/1s94owmx_t6L2mkX0ezAqmcxRI77O17kQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-1 bg-y1 text-yellow-900 font-semibold rounded-full hover:bg-yellow-500 transition"
            >
                <p className="border-dashed border-2 border-yellow-700 xl:px-4 xl:py-2 px-2 py-1 rounded-full text-sm xl:text-3xl">
                    View Transportation Rules PDF
                </p>
            </a>
        </div>
    </div>
</div>

            </div>



            <div className="flex p-2 container mx-auto justify-center items-center py-10 lv">
                <div className="flex flex-col bg-g1 text-white w-full rounded-3xl px-8 py-10 shadow-lg">
                    <h2 className="text-2xl xl:text-5xl font-bold text-center mb-2">
                        School Serviced By The OSC Program
                    </h2>
                    <p className="text-justify">The OSC program opens at 6:00 a.m., and children must arrive by 7:45 a.m. for school transportation. Please ensure your child has a nutritious breakfast before arriving or arrives early enough to eat at the center before bussing starts. Children will be picked up from school at designated &quot;meeting spots,&quot; where behavior expectations and safety rules, such as Stranger and Street Safety, will be reviewed at the start of each school year. If a child cannot wait in the designated area, parents may need to arrange alternative transportation.</p>
                    <div className="mt-6 text-lg md:text-lg text-center">
                        <ol className="">
                            <li>1. Big Rock Elementary School 403-938-6666</li>
                            <li>2. Ecole Percy Pegler 403-938-4449 </li>
                            <li>3. St.Mary&apos;s School 403-938-8048 </li>
                            <li>4. Westmount Elementary 403-995-4824 </li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

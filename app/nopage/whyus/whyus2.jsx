import Image from 'next/image';
import wu1 from '../../../public/wu1.svg';
import wu2 from '../../../public/wu2.svg';
import wu3 from '../../../public/wu3.svg';
import wu4 from '../../../public/wu4.svg';
import wu5 from '../../../public/wu5.svg';

export default function CognitiveDevelopmentSection() {
    return (
        <>

            <div className="flex flex-col-reverse md:flex-row bg-white p-6 justify-center lv container mx-auto">
                {/* Image section */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="p-4 rounded-lg">
                        <Image
                            src={wu1}
                            alt="Child Cognitive Development"

                            className="rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out w-full"
                        />
                    </div>
                </div>

                {/* Text section */}
                <div className="md:w-1/2 mt-6 md:mt-0  flex flex-col justify-center">
                    <div className="flex items-start flex-col ">
                        <div className="bg-g1 rounded-full p-2 text-2xl font-bold text-white flex justify-center items-center xl:mb-4 mb-2">
                            <p className='border-2 border-dashed  rounded-full border-white lg:py-4 lg:px-6 py-2 px-4'>
                                1
                            </p>
                        </div>
                        <h2 className="lg:text-4xl text-lg font-bold text-gray-800">Cognitive Development</h2>
                    </div>

                    <p className="mt-3 text-gray-600 lg:text-xl text-xs text-justify">
                        Between ages 3 to 6, the brain grows rapidly, especially the frontal lobes,
                        which handle reasoning, impulse control, and cause and effect. By school age,
                        children can better control their attention and behaviour. Activities like STEM
                        experiments, puzzles, and sensory play support this growth.
                    </p>

                    {/* Button tags section */}
                    <div className="mt-4 lg:mt-6 flex flex-wrap ">
                        <span className="bg-g3 text-g2 px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                            Rapid Growth
                        </span>
                        <span className="bg-g3 text-g2 px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                            Frontal development
                        </span>
                        <span className="bg-g3 text-g2 px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                            Cognitive facilitation
                        </span>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row bg-white p-6 justify-center lv container mx-auto">
                {/* Text section */}
                <div className="md:w-1/2 mt-6 md:mt-0  flex flex-col justify-center">
                    <div className="flex items-start flex-col ">
                        <div className="bg-bd rounded-full p-2 text-2xl font-bold text-white flex justify-center items-center xl:mb-4 mb-2">
                            <p className='border-2 border-dashed  rounded-full border-white lg:py-4 lg:px-6 py-2 px-4'>
                                2
                            </p>
                        </div>
                        <h2 className="lg:text-4xl text-lg font-bold text-gray-800">Social Development</h2>
                    </div>

                    <p className="mt-3 text-gray-600 lg:text-xl text-xs text-justify">
                        We provide children with opportunities to interact with peers in a fun safe environment. Groups, equipment and materials will be provided to encourage healthy interactions for all children involved. Children will be asked to be involved in planning to stimulate interest and participation.
                    </p>

                    {/* Button tags section */}
                    <div className="mt-4 lg:mt-6 flex flex-wrap ">
                        <span className="bg-bl text-bd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                            Peer Interaction
                        </span>
                        <span className="bg-bl text-bd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                            Safe Environment
                        </span>
                        <span className="bg-bl text-bd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                            Active Participation
                        </span>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="p-4 rounded-lg">
                        <Image
                            src={wu2}
                            alt="Child Cognitive Development"

                            className="rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out w-full"
                        />
                    </div>
                </div>
            </div>


            <div className="flex flex-col-reverse md:flex-row bg-white p-6 justify-center lv container mx-auto">
                {/* Image section */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="p-4 rounded-lg">
                        <Image
                            src={wu3}
                            alt="Child Cognitive Development"

                            className="rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out w-full"
                        />
                    </div>
                </div>

                {/* Text section */}
                <div className="md:w-1/2 mt-6 md:mt-0  flex flex-col justify-center">
                    <div className="flex items-start flex-col ">
                        <div className="bg-pm rounded-full p-2 text-2xl font-bold text-white flex justify-center items-center xl:mb-4 mb-2">
                            <p className='border-2 border-dashed  rounded-full border-white lg:py-4 lg:px-6 py-2 px-4'>
                                3
                            </p>
                        </div>
                        <h2 className="lg:text-4xl text-lg font-bold text-gray-800">Gross Motor</h2>
                    </div>

                    <p className="mt-3 text-gray-600 lg:text-xl text-xs text-justify">
                    We implement learning to use all our big muscles! Organized sports to creative yoga, to hopscotch, to dancing! Regular exercise is associated with improved listening, performance such as attention and memory. This domain is essential in everyday activities for appropriate development in children of all ages.
                    </p>

                    {/* Button tags section */}
                    <div className="mt-4 lg:mt-6 flex flex-wrap ">
                        <span className="bg-pl text-pd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                        Muscle development
                        </span>
                        <span className="bg-pl text-pd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                        Regular exercise
                        </span>
                        <span className="bg-pl text-pd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                        Cognitive improvement
                        </span>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row bg-white p-6 justify-center lv container mx-auto">
                {/* Text section */}
                <div className="md:w-1/2 mt-6 md:mt-0  flex flex-col justify-center">
                    <div className="flex items-start flex-col ">
                        <div className="bg-rd rounded-full p-2 text-2xl font-bold text-white flex justify-center items-center xl:mb-4 mb-2">
                            <p className='border-2 border-dashed  rounded-full border-white lg:py-4 lg:px-6 py-2 px-4'>
                                4
                            </p>
                        </div>
                        <h2 className="lg:text-4xl text-lg font-bold text-gray-800">Fine Motor</h2>
                    </div>

                    <p className="mt-3 text-gray-600 lg:text-xl text-xs text-justify">
                    Hand-eye coordination helps children develop control of their hand muscles. Activities like coloring, cutting, using tweezers, zipping coats, and molding clay strengthen the dexterity and skills needed for school.
                    </p>

                    {/* Button tags section */}
                    <div className="mt-4 lg:mt-6 flex flex-wrap ">
                        <span className="bg-rl text-rd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                            Hand Control
                        </span>
                        <span className="bg-rl text-rd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                        Muscle strength
                        </span>
                        <span className="bg-rl text-rd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                        School readiness
                        </span>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="p-4 rounded-lg">
                        <Image
                            src={wu4}
                            alt="Child Cognitive Development"

                            className="rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out w-full"
                        />
                    </div>
                </div>
            </div>


            <div className="flex flex-col-reverse md:flex-row bg-white p-6 justify-center lv container mx-auto">
                {/* Image section */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="p-4 rounded-lg">
                        <Image
                            src={wu5}
                            alt="Child Cognitive Development"

                            className="rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out w-full"
                        />
                    </div>
                </div>

                {/* Text section */}
                <div className="md:w-1/2 mt-6 md:mt-0  flex flex-col justify-center">
                    <div className="flex items-start flex-col ">
                        <div className="bg-brd rounded-full p-2 text-2xl font-bold text-white flex justify-center items-center xl:mb-4 mb-2">
                            <p className='border-2 border-dashed  rounded-full border-white lg:py-4 lg:px-6 py-2 px-4'>
                                5
                            </p>
                        </div>
                        <h2 className="lg:text-4xl text-lg font-bold text-gray-800">Language</h2>
                    </div>

                    <p className="mt-3 text-gray-600 lg:text-xl text-xs text-justify">
                    This domain emphasizes language skills, vocabulary growth, and communication. At age 4, children quickly absorb language, making preschool the perfect time to nurture these abilities through reading and storytelling.
                    </p>

                    {/* Button tags section */}
                    <div className="mt-4 lg:mt-6 flex flex-wrap ">
                        <span className="bg-brl text-brd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                        Language Skills
                        </span>
                        <span className="bg-brl text-brd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                        Vocabulary growth
                        </span>
                        <span className="bg-brl text-brd px-4 py-2 rounded-full lg:text-lg text-xs font-semibold m-1">
                        Comprehension Enhancement
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

import Image from "next/image";
import Food from "../../../public/fooddish.svg"

export default function ProgramCard() {
    return (
        <>
            <div className="flex p-2 container mx-auto justify-center items-center py-10 lv">
                <div className="flex flex-col bg-g1 text-white w-full rounded-3xl px-8 py-10 shadow-lg">
                    <h2 className="text-2xl xl:text-5xl font-bold text-center">
                        Parent&apos;s Role in Healthy Eating
                    </h2>

                    <div className="mt-6 text-lg md:text-lg">
                        <ul className="list-disc">
                            <li> <strong> Send a nutritious lunch</strong> that aligns with the guidelines set by the Canada Food Guide, ensuring your child receives the right balance of fruits, vegetables, proteins, and grains for their overall health and development.</li>
                            <li><strong> Pack enough snacks</strong> to keep your child fuelled throughout the day, as they participate in activities that require energy and focus. Make sure the snacks are wholesome and nutrient-rich, following the same principles as their lunch.</li>
                            <li>In the event that a child forgets their snack or lunch, the <strong> centre provides additional snacks</strong> to ensure no child goes hungry. These snacks are carefully selected to meet nutritional standards and offer a healthy alternative.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex mb-8  container mx-auto justify-between flex-col lg:flex-row lv">
                <div className="flex flex-col lg:w-3/5 p-4">
                    <div className="text-g4 flex text-4xl sm:text-5xl font-bold pb-4 justify-center lg:justify-start text-center lg:text-start ">
                        <h1>Meal Review & Supplement Policy</h1>
                    </div>
                    <div className="flex lg:hidden flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                        <div className="justify-center flex mb-4">
                            <div className=" p-2 rounded-xl">
                                <Image src={Food} alt="food dish" className="h-80 w-96" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-lg sm:text-xl text-justify ">
                        <p>Meals and snacks brought from home are reviewed monthly to ensure they align with updated nutritional guidelines and recommendations from the Canada Food Guide.</p>
                        <p className="my-4">If a child arrives without lunch or their meal does not meet nutritional standards, the centre will supplement it with healthy, nutritious options in accordance with the Canada Food Guide. </p>
                        <p>The centre also provides both morning and afternoon snacks, which follow strict guidelines to ensure a balanced diet. Any items with no nutritional value, such as candies, will be returned to the child’s lunch bag.</p>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col p-2 justify-center lg:justify-end hover:scale-105 transition-transform duration-200 ease-in-out lg:w-2/5">
                    <div className="justify-center flex mb-4">
                        <div className=" p-2 rounded-xl">
                            <Image src={Food} alt="food dish" className="h-80 w-96" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

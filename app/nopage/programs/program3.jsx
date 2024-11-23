"use client"
import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" my-2">
            <div className="rounded-xl p-1 border">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center p-2 text-left font-bold text-green-900 bg-white hover:bg-gray-100"
                >
                    <span className="font-semibold">{title}</span>
                    <span
                        className={`${isOpen ? "transform rotate-180" : ""
                            } transition-transform duration-300`}
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white bg-g4 rounded-full p-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>

                    </span>
                </button>
                {isOpen && (
                    <div className="p-4 text-gray-600 bg-gray-50">
                        {content}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordion;

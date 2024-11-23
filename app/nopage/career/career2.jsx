"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function JobOffers() {
    const [selectedJob, setSelectedJob] = useState(null);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/api/positions');
                const data = await response.json();

                if (response.ok) {
                    setJobs(data);
                } else {
                    setError(data.message || 'Failed to fetch jobs.');
                }
            } catch (err) {
                setError('Error fetching jobs.');
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const openJobModal = (job) => {
        setSelectedJob(job);
    };

    const closeModal = () => {
        setSelectedJob(null);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col items-center py-10 space-y-6 p-2 lv">
                <div className="w-full max-w-4xl">
                    {loading ? (
                        <p className="text-center">Loading jobs...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        jobs.map((job) => (
                            <div
                                key={job._id}
                                className={`flex flex-col md:flex-row border-r-2 border-b-2 rounded-md justify-between border-g1 bg-t1 p-6 shadow-md mb-4 cursor-pointer`}
                                onClick={() => openJobModal(job)}
                            >
                                <div className="flex flex-col">
                                    <h3 className="text-g4 font-bold">{job.positionName}</h3>
                                    <p className="text-gray-600">{job.shortDescription}</p>
                                </div>
                                <div className="text-g4 text-center items-center pt-2 justify-center flex">
                                    <p>{job.positionType === 'Full-time' ? 'Full Time' : 'Part Time'} &gt;</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {selectedJob && (
                    <div
                        className="fixed inset-0 z-20 flex justify-center items-center bg-black bg-opacity-50 p-6"
                        onClick={closeModal}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-title"
                            aria-describedby="modal-description"
                            className="bg-white rounded-lg shadow-lg w-full max-w-lg relative max-h-[80vh] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-gray-100 p-4">
                                <h2 id="modal-title" className="text-2xl font-bold text-g4 text-center">
                                    {selectedJob.positionName}
                                </h2>
                            </div>

                            <div id="modal-description" className="max-h-[50vh] overflow-y-auto p-4">
                                <ul className="list-decimal pl-5 space-y-2 text-gray-700">
                                    {selectedJob.longDescription.split('\n').map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gray-100 p-4 flex justify-center space-x-4">
                                <button
                                    className="bg-g1 text-white px-4 py-2 rounded-full hover:bg-g2"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                                <Link
                                    href={`/careers/${selectedJob.positionName.replace(/\s+/g, '-').toLowerCase()}`}
                                    className="bg-g1 text-white px-4 py-2 rounded-full hover:bg-g2 text-center"
                                >
                                    Apply
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex p-2 container mx-auto justify-center items-center py-10 lv">
                <div className="flex flex-col bg-g1 text-white w-full rounded-3xl px-8 py-10 shadow-lg">
                    <h2 className="text-2xl xl:text-5xl font-bold text-center mb-2">
                        Why Work With Us?
                    </h2>
                    <div className="mt-6 text-lg md:text-lg text-center">
                        <ol>
                            <li>1. Competitive salary and benefits.</li>
                            <li>2. Supportive and inclusive work environment.</li>
                            <li>3. Opportunities for professional growth and training.</li>
                            <li>4. Making a real impact on children&apos;s lives.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

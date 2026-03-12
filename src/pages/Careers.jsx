import React, { useEffect } from 'react';

function Careers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openings = [
        { title: "Waste Management Specialist", type: "Full-time", location: "Singapore", id: 1 },
        { title: "Environmental Compliance Officer", type: "Full-time", location: "Kuala Lumpur, Malaysia", id: 2 },
        { title: "Logistics Coordinator", type: "Full-time", location: "Bangkok, Thailand", id: 3 },
    ];

    return (
        <div className="pt-24 min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 font-sans">
            {/* Hero */}
            <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 mb-12">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-[#47622A] font-bold tracking-wider uppercase mb-4 block">Careers</p>
                    <h1 className="font-extrabold mb-6">
                        Join Our Team
                    </h1>
                    <h5 className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Build a sustainable future with us. We are looking for passionate individuals dedicated to environmental impact.
                    </h5>
                </div>
            </div>

            {/* Why Work With Us */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h2 className="font-bold mb-10">Why Work With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Impact", desc: "Your work directly contributes to a cleaner, greener planet.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                        { title: "Growth", desc: "Continuous learning opportunities and career advancement.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
                        { title: "Culture", desc: "A collaborative, inclusive, and safety-first work environment.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 bg-[#47622A]/10 text-[#47622A] rounded-xl flex items-center justify-center mb-5">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                </svg>
                            </div>
                            <h3 className="font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Openings */}
            <div className="max-w-4xl mx-auto px-4 mb-16">
                <h2 className="font-bold mb-8">Current Openings</h2>
                <div className="space-y-4">
                    {openings.map((job) => (
                        <div key={job.id} className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-[#47622A] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                            <div className="mb-4 sm:mb-0">
                                <h3 className="font-bold group-hover:text-[#47622A] transition-colors">{job.title}</h3>
                                <div className="text-gray-500 mt-1 flex gap-4">
                                    <p>{job.location}</p>
                                    <p>•</p>
                                    <p>{job.type}</p>
                                </div>
                            </div>
                            <button className="px-6 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-200 dark:border-gray-700 group-hover:bg-[#47622A] group-hover:text-white group-hover:border-[#47622A] transition-all">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="bg-[#47622A] py-12 px-4 text-center">
                <h2 className="font-bold mb-4">Don't see your role?</h2>
                <p className="text-white/80 mb-8 max-w-lg mx-auto">
                    We are always looking for talent. Send your resume to our HR team.
                </p>
                <a href="mailto:careers@msasia.com" className="inline-block px-8 py-3 bg-white text-[#47622A] font-bold rounded-full hover:bg-gray-100 transition-colors">
                    Email Us
                </a>
            </div>
        </div>
    );
}

export default Careers;

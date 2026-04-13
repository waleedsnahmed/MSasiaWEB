import React from 'react';
import { Cable } from 'lucide-react';

const WireCableScrapHero = () => {
    return (
        <section className="ewaste-hero flex flex-col before:content-[''] after:content-[''] !py-0">
            <div className="max-w-screen-2xl mx-0 md:mx-auto px-0 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center lg:h-[440px] animate-fadeIn">

                    {/* LEFT COLUMN: Text Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left h-full justify-center gap-2 md:gap-4 lg:gap-8">
                        {/* Pill Badge */}
                        <div className="ewaste-hero__badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <div className="ewaste-hero__badge-dot w-1.5 h-1.5 rounded-full bg-[#47622A] animate-pulse"></div>
                            <h6 className="ewaste-hero__badge-text text-[#47622A] dark:text-[#799851] uppercase">
                                Wire & Cable Scrap
                            </h6>
                        </div>

                        {/* Large Two-Tone Heading */}
                        <h1 className="ewaste-hero__heading leading-tight !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                            Wire and Cable Scrap Recycling
                        </h1>

                        {/* Concise Description */}
                        <div className="ewaste-hero__content flex flex-col gap-y-3">
                            <h5 className="ewaste-hero__description m-0 text-gray-700 dark:text-gray-300 font-normal text-[18px]">
                                Maximizing Value from Metal Wiring and Cable. We manage the entire process from collection to commodity recovery.
                            </h5>
                            <p className="ewaste-hero__description-secondary m-0 text-gray-700 dark:text-gray-300 normal-case font-normal">
                                MS Asia Enterprises offers a clean, efficient, and profitable recycling solution for all grades and types of wire and cable scrap, ensuring you get the best value and the most responsible disposal.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Image */}
                    <div className="relative -mx-3 w-[calc(100%+24px)] md:mx-auto md:w-full h-[300px] lg:h-full flex flex-col justify-center items-center bg-gray-50 dark:bg-[#111111] border-y md:border border-gray-200 dark:border-white/5 rounded-none md:rounded-3xl shadow-sm overflow-hidden">
                        {/* Decorative Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-[#47622A]/20 to-[#799851]/5 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Placeholder Icon */}
                        <div className="relative z-10 flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500">
                            <div className="p-4 rounded-xl md:rounded-2xl bg-white/50 dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/5 backdrop-blur-sm">
                                <Cable className="w-10 h-10 md:w-12 md:h-12 text-[#47622A] dark:text-[#799851]" strokeWidth={1.5} />
                            </div>
                            <p className="uppercase">Facility Image Placeholder</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WireCableScrapHero;

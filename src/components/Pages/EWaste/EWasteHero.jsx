import React from 'react';
import { Recycle } from 'lucide-react';

const EWasteHero = () => {
    return (
        <section className="ewaste-hero flex flex-col before:content-[''] after:content-['']">
            <div className="max-w-screen-2xl mx-auto px-0 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:h-[440px] animate-fadeIn">

                    {/* LEFT COLUMN: Text Content */}
                    <div className="flex flex-col items-start text-left h-full justify-center gap-y-7 lg:gap-y-8">
                        {/* Pill Badge */}
                        <div className="ewaste-hero__badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-gray-800 shadow-sm">
                            <span className="ewaste-hero__badge-dot w-1.5 h-1.5 rounded-full bg-[#47622A] animate-pulse"></span>
                            <span className="ewaste-hero__badge-text text-[#47622A] dark:text-[#799851] font-bold text-[10px] tracking-[0.2em] uppercase font-montserrat">
                                Electronics Recycling
                            </span>
                        </div>

                        {/* Large Two-Tone Heading */}
                        <h2 className="ewaste-hero__heading text-3xl lg:text-4xl xl:text-5xl font-montserrat font-extrabold leading-[1.15] tracking-tight">
                            <span className="text-gray-900 dark:text-white">Advanced </span><span className="ewaste-hero__heading-accent !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">E-Waste Recycling</span>
                        </h2>

                        {/* Concise Description */}
                        <div className="ewaste-hero__content prose prose-lg prose-gray dark:prose-invert max-w-none flex flex-col gap-y-3">
                            <p className="ewaste-hero__description m-0 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light font-sans tracking-tight">
                                From consumer electronics to enterprise servers, we process all forms of e-waste. Our advanced separation technologies recover high-purity metals and plastics, returning them to the circular economy.
                            </p>
                            <p className="ewaste-hero__description-secondary m-0 text-base text-gray-500 dark:text-gray-400 leading-snug font-sans tracking-tight">
                                Our certified experts utilize state-of-the-art methodology to ensure every aspect of your requirement is met with precision, absolute compliance, and environmental stewardship.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Image */}
                    <div className="relative w-full h-[300px] lg:h-full flex flex-col justify-center items-center bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5 rounded-2xl md:rounded-3xl shadow-sm overflow-hidden">
                        {/* Decorative Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-br from-[#47622A]/20 to-[#799851]/5 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Placeholder Icon */}
                        <div className="relative z-10 flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500">
                            <div className="p-4 rounded-xl md:rounded-2xl bg-white/50 dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/5 backdrop-blur-sm">
                                <Recycle className="w-10 h-10 md:w-12 md:h-12 text-[#47622A] dark:text-[#799851]" strokeWidth={1.5} />
                            </div>
                            <span className="font-medium text-xs md:text-sm tracking-wider uppercase">Facility Image Placeholder</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EWasteHero;

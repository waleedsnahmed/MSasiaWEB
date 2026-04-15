import React from 'react';
import { Target, Filter, TrendingUp, FileCheck } from 'lucide-react';

const whyPoints = [
    {
        icon: Target,
        title: 'Nickel Contamination',
        description: 'Introducing 300-series scrap (with nickel) into a 400-series melt adds expensive, unwanted nickel, making the entire batch catastrophically off-specification.',
    },
    {
        icon: Filter,
        title: 'Molybdenum Contamination',
        description: 'Adding 316 scrap (with Molybdenum) to a 304 melt directly creates an uncontrolled alloy unsuitable for its stringent intended applications.',
    },
    {
        icon: TrendingUp,
        title: 'Value Destruction',
        description: 'Selling a load of 316 scrap as mixed stainless can mean a devastating loss of 25-40% of its potential value. Selling it mistakenly as 430 scrap is disastrous.',
    },
    {
        icon: FileCheck,
        title: 'Mill Rejection',
        description: 'Stainless steel mills have exceptionally strict chemistry limits. Contaminated loads are rejected, leading to costly returns and permanent relationship damage.',
    },
];

const StainlessSteelScrapWhyChooseUs = () => {
    return (
        <section className="StainlessSteelScrap-why bg-white dark:bg-black !py-0">
            <div className="StainlessSteelScrap-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="StainlessSteelScrap-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="StainlessSteelScrap-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="StainlessSteelScrap-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Critical Imperative of Series-Specific Sorting
                    </h2>
                    <p className="StainlessSteelScrap-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Mixing alloys is one of the costliest errors in metal recycling. Our process is rigorously focused on maximizing value by definitively identifying specific grades and separating them from contamination.
                    </p>
                </div>

                <div className="StainlessSteelScrap-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group StainlessSteelScrap-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="StainlessSteelScrap-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="StainlessSteelScrap-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="StainlessSteelScrap-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="StainlessSteelScrap-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="StainlessSteelScrap-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="StainlessSteelScrap-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="StainlessSteelScrap-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="StainlessSteelScrap-why__cta-strong block text-white font-bold">MS Asia Enterprises is the definitive solution.</h4>
                            <p className="font-semibold text-white/90">We close the loop with a formal, auditable process that protects your business, recovers value, and
                                ensures every component is handled according to the highest environmental and data
                                security standards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StainlessSteelScrapWhyChooseUs;



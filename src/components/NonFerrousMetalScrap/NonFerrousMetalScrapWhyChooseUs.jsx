import React from 'react';
import { Target, Filter, TrendingUp, FileCheck } from 'lucide-react';

const whyPoints = [
    {
        icon: Target,
        title: 'Accurate Identification',
        description: 'Precisely determine the type and grade of all metals present to ensure fair valuation.',
    },
    {
        icon: Filter,
        title: 'Clean Segregation',
        description: 'Separate materials by type and grade to actively avoid damaging cross-contamination.',
    },
    {
        icon: TrendingUp,
        title: 'Maximum Value',
        description: 'Optimize processing infrastructure to ensure the highest possible financial return for every commodity.',
    },
    {
        icon: FileCheck,
        title: 'Reliable Compliance',
        description: 'Adhere flawlessly to all safety and environmental regulations, especially handling hazardous metals.',
    },
];

const NonFerrousMetalScrapWhyChooseUs = () => {
    return (
        <section className="NonFerrousMetalScrap-why bg-white dark:bg-black !py-0">
            <div className="NonFerrousMetalScrap-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="NonFerrousMetalScrap-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="NonFerrousMetalScrap-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="NonFerrousMetalScrap-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Essential Metals of Modern Industry
                    </h2>
                    <p className="NonFerrousMetalScrap-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Non-ferrous scrap streams are often mixed or improperly categorized. Because the value of these metals is directly tied to their purity, our approach is scientifically designed to maximize recovery value.
                    </p>
                </div>

                <div className="NonFerrousMetalScrap-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group NonFerrousMetalScrap-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="NonFerrousMetalScrap-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="NonFerrousMetalScrap-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="NonFerrousMetalScrap-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="NonFerrousMetalScrap-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="NonFerrousMetalScrap-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="NonFerrousMetalScrap-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="NonFerrousMetalScrap-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="NonFerrousMetalScrap-why__cta-strong block text-white font-bold">MS Asia Enterprises is the definitive solution.</h4>
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

export default NonFerrousMetalScrapWhyChooseUs;


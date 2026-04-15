import React from 'react';
import { Shield, FileCheck, Zap, TrendingUp } from 'lucide-react';

const whyPoints = [
    {
        icon: Shield,
        title: 'Grade Mixing Prevention',
        description: 'Advanced technical expertise ensures we avoid diluting specific, highly engineered alloy properties.',
    },
    {
        icon: FileCheck,
        title: 'Contamination Control',
        description: 'Strict handling protocols prevent the introduction of impurities or foreign matter during collection and processing.',
    },
    {
        icon: Zap,
        title: 'Value Preservation',
        description: 'We prevent misclassifying high-value alloys, securing true market valuations and maximum financial return.',
    },
    {
        icon: TrendingUp,
        title: 'Accurate Identification',
        description: 'Utilizing specialized tools like XRF/PMI analysis guarantees precise material grading and sorting.',
    },
];

const NickelAlloyScrapWhyChooseUs = () => {
    return (
        <section className="NickelAlloyScrap-why bg-white dark:bg-black !py-0">
            <div className="NickelAlloyScrap-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="NickelAlloyScrap-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="NickelAlloyScrap-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="NickelAlloyScrap-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Preserving Purity in Performance Metals
                    </h2>
                    <p className="NickelAlloyScrap-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Nickel is the core of materials like stainless steel and superalloys. Recycling these complex materials requires advanced technical expertise to ensure exact chemical composition and secure full market value.
                    </p>
                </div>

                <div className="NickelAlloyScrap-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group NickelAlloyScrap-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="NickelAlloyScrap-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="NickelAlloyScrap-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="NickelAlloyScrap-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="NickelAlloyScrap-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="NickelAlloyScrap-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="NickelAlloyScrap-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="NickelAlloyScrap-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="NickelAlloyScrap-why__cta-strong block text-white font-bold">MS Asia Enterprises is the definitive solution.</h4>
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

export default NickelAlloyScrapWhyChooseUs;


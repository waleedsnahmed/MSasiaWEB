import React from 'react';
import { Shield, FileCheck, TrendingUp, Zap } from 'lucide-react';

const whyPoints = [
    {
        icon: FileCheck,
        title: 'Regulatory Compliance',
        description: 'Maintains compliance with complex environmental, hazardous waste, and quality regulations, preventing costly fines and operational shutdowns.',
    },
    {
        icon: Shield,
        title: 'Protection of Integrity',
        description: 'Protects employees and the integrity of research, clinical trials, and manufactured products through stringent safety and precision handling protocols.',
    },
    {
        icon: Zap,
        title: 'Uninterrupted Operations',
        description: 'Supports uninterrupted production, R&D, and quality control by managing complex waste flows efficiently and reliably without disrupting your core processes.',
    },
    {
        icon: TrendingUp,
        title: 'Brand Reputation',
        description: 'Prevents environmental contamination and ensures ethical disposal, protecting your brand reputation and maintaining vital public trust.',
    },
];

const PharmaceuticalBiotechnologyWhyChooseUs = () => {
    return (
        <section className="pharma-biotech-why bg-white dark:bg-black !py-0">
            <div className="pharma-biotech-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="pharma-biotech-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="pharma-biotech-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="pharma-biotech-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Why Proper Waste Management Matters in Pharma & Biotech
                    </h2>
                    <p className="pharma-biotech-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Pharma and biotech facilities generate diverse and high-risk waste streams, from expired drugs and Active Pharmaceutical Ingredients (APIs) to biohazardous cultures and potent chemical solvents. <br />
                        These materials require specific, compliant disposal methods to protect research integrity and prevent environmental contamination. Improper disposal leads to severe regulatory violations, operational disruptions, and long-term damage to brand reputation.
                    </p>
                </div>

                <div className="pharma-biotech-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group pharma-biotech-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="pharma-biotech-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="pharma-biotech-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="pharma-biotech-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="pharma-biotech-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="pharma-biotech-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="pharma-biotech-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="pharma-biotech-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="pharma-biotech-why__cta-strong block text-white font-bold">MS Asia Enterprises is the definitive solution.</h4>
                            <p className="font-semibold text-white/90">We ensure every waste stream is handled with precision and care, providing scalable solutions customized based on operational scale, regulatory requirements, and waste complexity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PharmaceuticalBiotechnologyWhyChooseUs;

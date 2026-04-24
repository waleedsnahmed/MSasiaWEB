import React from 'react';
import { PackageX, Layers, ShieldAlert, Scale } from 'lucide-react';

const whyPoints = [
    {
        icon: PackageX,
        title: 'Fragmented Inventory & Costs',
        description: 'Supplies scattered across stockrooms and procedures lead to stockouts, overstocking, and massive waste. Inefficient manual processes and inaccurate forecasting cause supply costs to consume up to 40% of non-labor budgets.',
    },
    {
        icon: Layers,
        title: 'Waste Volume & Diversity',
        description: 'Multiple departments generate vast amounts of diverse waste. Mixing regulated medical waste with general trash violates EPA rules and drastically increases your overall disposal costs.',
    },
    {
        icon: ShieldAlert,
        title: 'Infection & Sharps Risk',
        description: 'Improper handling of infectious materials and frequent use of needles increases the risk of hospital-acquired infections (HAIs) and needle-stick injuries for clinical staff, housekeeping, and waste handlers.',
    },
    {
        icon: Scale,
        title: 'Regulatory & Compliance Burdens',
        description: 'Hospitals must navigate a labyrinth of OSHA, EPA, DOT, and DEA regulations. Properly managing licenses, product recalls, and hazardous or controlled substance disposal demands rigorous, audit-ready documentation.',
    },
];

const HospitalsHealthSystemsWhyChooseUs = () => {
    return (
        <section className="hospitals-why bg-white dark:bg-black !py-0">
            <div className="hospitals-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="hospitals-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="hospitals-why__label text-[#47622A] dark:text-[#799851] uppercase">The Challenge</h6>
                    <h2 className="hospitals-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Complexity at Scale
                    </h2>
                    <p className="hospitals-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Today's hospitals navigate a perfect storm of logistical pressures and immense waste volumes. <br />
                        Inefficiencies in these streams compromise care delivery and financial stability.
                    </p>
                </div>

                <div className="hospitals-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group hospitals-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="hospitals-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="hospitals-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="hospitals-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="hospitals-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="hospitals-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="hospitals-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="hospitals-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="hospitals-why__cta-strong block text-white font-bold">MS Asia Enterprises is the definitive solution.</h4>
                            <p className="font-semibold text-white/90">We integrate people, processes, and intelligent technology to create a unified, agile, and clinically-aligned framework that protects your patients and drives tangible value across your entire organization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HospitalsHealthSystemsWhyChooseUs;

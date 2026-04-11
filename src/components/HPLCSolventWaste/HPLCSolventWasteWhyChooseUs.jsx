import React from 'react';
import { Droplets, HeartPulse, FileCheck, Timer } from 'lucide-react';

const whyPoints = [
    {
        icon: Droplets,
        title: 'Environmental Contamination',
        description: 'Solvents can seep into groundwater or pass untreated through municipal sewage systems, harming aquatic life and polluting water sources.',
    },
    {
        icon: HeartPulse,
        title: 'Health & Safety Hazards',
        description: 'Exposure to vapors can cause respiratory, neurological, and organ damage. Improper storage creates fire and explosion risks.',
    },
    {
        icon: FileCheck,
        title: 'Regulatory Violations',
        description: 'The Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs) classify spent solvents as Schedule I Hazardous Waste (Code: 11.1). Non-compliant disposal attracts heavy penalties under the Environment (Protection) Act, 1986.',
    },
    {
        icon: Timer,
        title: 'Operational Inefficiency',
        description: 'In-house storage consumes valuable lab space and requires complex safety protocols. Lack of proper documentation complicates internal and external audits.',
    },
];

const HPLCSolventWasteWhyChooseUs = () => {
    return (
        <section className="hplc-why bg-white dark:bg-black !py-0 w-full flex justify-center">
            <div className="hplc-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px] w-full">
                <div className="hplc-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal min-h-[178px]">
                    <h6 className="hplc-why__label text-[#47622A] dark:text-[#799851] uppercase font-bold tracking-wider">The Risks</h6>
                    <h2 className="hplc-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Critical Importance of Professional HPLC Waste Management
                    </h2>
                    <p className="hplc-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        HPLC solvents typically include acetonitrile, methanol, water mixtures, and buffers, often contaminated with analyzed organic compounds. Their hazardous characteristics demand expert handling.
                    </p>
                </div>

                <div className="hplc-why__grid grid md:grid-cols-2 gap-4">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group hplc-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="hplc-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="hplc-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="hplc-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="hplc-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="hplc-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="hplc-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="hplc-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="hplc-why__cta-strong block text-white font-bold">MS Asia Enterprises bridges the gap.</h4>
                            <p className="font-semibold text-white/90">We provide a closed-loop system for solvent waste, from your lab's collection vessel to its final safe treatment, bridging the gap between laboratory operations and environmental compliance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HPLCSolventWasteWhyChooseUs;

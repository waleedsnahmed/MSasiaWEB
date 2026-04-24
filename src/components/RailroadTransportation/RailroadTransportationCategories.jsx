import React from 'react';
import { Flame, Settings, Battery, Shield, Leaf, Beaker } from 'lucide-react';

const categories = [
    {
        category: 'Oily & Hazardous Waste',
        examples: 'Used oils, greases, lubricants, and contaminated rags.',
        handling: 'Safe containment and licensed treatment or incineration.',
        icon: Flame,
    },
    {
        category: 'Heavy Scrap Metal',
        examples: 'Rail tracks, wheels, couplings, and retired railcars.',
        handling: 'Industrial-scale recovery and high-value recycling.',
        icon: Settings,
    },
    {
        category: 'Industrial Batteries',
        examples: 'Locomotive batteries and signaling power units.',
        handling: 'Safe disposal, lead recovery, and acid neutralization.',
        icon: Battery,
    },
    {
        category: 'Electrical E-Waste',
        examples: 'Signaling heads, electronic controls, and relay hardware.',
        handling: 'Secure data destruction and WEEE-compliant recycling.',
        icon: Shield,
    },
    {
        category: 'Contaminated Ballast',
        examples: 'Soil and ballast materials fouled by rail operations.',
        handling: 'Environmental remediation and compliant disposal.',
        icon: Leaf,
    },
    {
        category: 'Maintenance Chemicals',
        examples: 'Paint residues, solvents, and surface treatment chemicals.',
        handling: 'Hazardous material protocols and licensed disposal.',
        icon: Beaker,
    },
];

const RailroadTransportationCategories = () => {
    return (
        <section className="rail-categories bg-white dark:bg-black !py-0">
            <div className="rail-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="rail-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="rail-categories__label text-[#47622A] dark:text-[#799851] uppercase">Waste Streams</h6>
                    <h2 className="rail-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        High-Risk Waste Streams We Manage
                    </h2>
                    <p className="rail-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Diverse waste streams generated from maintenance, refueling, and infrastructure upgrades.
                    </p>
                </div>

                <div className="rail-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="rail-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="rail-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="rail-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Category</h6>
                            <h6 className="rail-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Examples</h6>
                            <h6 className="rail-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="rail-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="rail-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="rail-categories__cell rail-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="rail-categories__cell rail-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="rail-categories__cell rail-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
                                        <p>{cat.handling}</p>
                                    </div>
                                </div>
                            )})}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RailroadTransportationCategories;

import React from 'react';
import { Factory, Wind, Zap, AlignLeft, ShieldAlert, Settings } from 'lucide-react';

const categories = [
    {
        category: 'Plant Decommissioning',
        examples: 'Combustion by-products, asbestos, and PCB-containing equipment.',
        handling: 'Rigorous characterization, licensed abatement, and TSCA-compliant disposal.',
        icon: Factory,
    },
    {
        category: 'Renewable Wastes',
        examples: 'End-of-life solar panels, wind turbine blades, and large battery systems.',
        handling: 'Manufacturer-compliant take-back recycling and advanced composite processing.',
        icon: Wind,
    },
    {
        category: 'T&D Scrap',
        examples: 'Retired aluminum/copper conductors and lead-jacketed cables.',
        handling: 'On-site cutting, lab analysis, and segregated handling based on contamination.',
        icon: Zap,
    },
    {
        category: 'Treated Wood Poles',
        examples: 'Utility poles treated with pentachlorophenol, CCA, or creosote.',
        handling: 'Full-service pole pulling, chipping, and controlled disposal or biomass reuse.',
        icon: AlignLeft,
    },
    {
        category: 'Transformer Management',
        examples: 'PCB transformers, contaminated equipment, and mineral oil units.',
        handling: 'High-temperature incineration, oil filtration, and certified casing decontamination.',
        icon: ShieldAlert,
    },
    {
        category: 'Gas System Waste',
        examples: 'PAH-coated steel pipes, contaminated soils, and retired gas meters.',
        handling: 'Specialized coating removal, soil treatment, and electronic recycling.',
        icon: Settings,
    },
];

const UtilitiesEnergyCategories = () => {
    return (
        <section className="utilities-categories bg-white dark:bg-black !py-0">
            <div className="utilities-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="utilities-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="utilities-categories__label text-[#47622A] dark:text-[#799851] uppercase">Waste Streams</h6>
                    <h2 className="utilities-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Utility Sector Material Categories
                    </h2>
                    <p className="utilities-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        A granular understanding of each stream, segmented by asset lifecycle and delivery technology.
                    </p>
                </div>

                <div className="utilities-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="utilities-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="utilities-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="utilities-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Category</h6>
                            <h6 className="utilities-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Examples</h6>
                            <h6 className="utilities-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="utilities-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="utilities-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="utilities-categories__cell utilities-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="utilities-categories__cell utilities-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="utilities-categories__cell utilities-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default UtilitiesEnergyCategories;

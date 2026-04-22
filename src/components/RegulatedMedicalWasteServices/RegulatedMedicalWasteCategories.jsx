import React from 'react';
import { Syringe, TestTube, Pill, Recycle, Droplets, Trash2, Box } from 'lucide-react';

const categories = [
    {
        category: 'Infectious & Anatomical Waste',
        examples: 'Human/animal tissues, organs, body parts, and items contaminated with blood or body fluids (e.g., dressings, plaster casts).',
        handling: 'Collected in Yellow non-chlorinated plastic bags and routed for high-temperature incineration or deep burial.',
        icon: Trash2,
    },
    {
        category: 'Waste Sharps',
        examples: 'Needles, syringes with fixed needles, scalpels, blades, and contaminated glass that may cause puncture and cuts.',
        handling: 'Stored in puncture-proof White/Translucent leak-proof containers; processed via autoclaving and shredding.',
        icon: Syringe,
    },
    {
        category: 'Solid Plastic Waste',
        examples: 'Disposable items such as tubing, bottles, intravenous tubes and sets, catheters, and urine bags (excluding sharps).',
        handling: 'Collected in Red non-chlorinated plastic bags; processed via autoclaving or microwaving followed by safe recycling.',
        icon: Recycle,
    },
    {
        category: 'Microbiological & Lab Waste',
        examples: 'Blood bags, laboratory cultures, specimens of microorganisms, and live or attenuated vaccines.',
        handling: 'Pre-treated on-site (if highly infectious) and collected in Yellow bags for autoclaving or incineration.',
        icon: TestTube,
    },
    {
        category: 'Discarded Medicines & Cytotoxic Drugs',
        examples: 'Expired, discarded, or recalled medicines, and cytotoxic drugs used in cancer treatments.',
        handling: 'Collected in separate Yellow bags or Black containers depending on toxicity; routed for specialized incineration at >1200°C.',
        icon: Pill,
    },
    {
        category: 'Liquid Waste',
        examples: 'Liquid generated from laboratory activities, washing, cleaning, housekeeping, and disinfecting activities.',
        handling: 'Pre-treated with chemical disinfection (e.g., Sodium Hypochlorite) before discharge into the effluent treatment plant (ETP).',
        icon: Droplets,
    },
    {
        category: 'Chemical Waste',
        examples: 'Chemicals used in production of biologicals, chemicals used in disinfection, or insecticides.',
        handling: 'Collected in Yellow bags or secure containers; safely disposed of at hazardous waste treatment facilities.',
        icon: Box,
    },
];

const RegulatedMedicalWasteCategories = () => {
    return (
        <section className="regulated-categories bg-white dark:bg-black !py-0">
            <div className="regulated-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="regulated-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="regulated-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="regulated-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Types of Regulated Medical Waste We Manage
                    </h2>
                    <p className="regulated-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We manage primary RMW streams through appropriate, color-coded containment and specialized handling protocols.
                    </p>
                </div>

                <div className="regulated-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="regulated-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="regulated-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="regulated-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Category</h6>
                            <h6 className="regulated-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Examples</h6>
                            <h6 className="regulated-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling & Color Code</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="regulated-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="regulated-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="regulated-categories__cell regulated-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="regulated-categories__cell regulated-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="regulated-categories__cell regulated-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default RegulatedMedicalWasteCategories;

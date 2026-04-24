import React from 'react';
import { HardHat, ShieldAlert, Settings, Microscope, FileLock, Monitor } from 'lucide-react';

const categories = [
    {
        category: 'Construction Debris',
        examples: 'Concrete, metal, wood, and mixed demolition materials.',
        handling: 'Recycling, recovery, and compliant landfill disposal.',
        icon: HardHat,
    },
    {
        category: 'Hazardous Materials',
        examples: 'Contaminated soil, chemicals, and remediation waste.',
        handling: 'Licensed treatment and environmentally safe disposal.',
        icon: ShieldAlert,
    },
    {
        category: 'Industrial Scrap',
        examples: 'Decommissioned equipment, cables, and large machinery.',
        handling: 'Asset recovery, dismantling, and specialized metal recycling.',
        icon: Settings,
    },
    {
        category: 'Laboratory Waste',
        examples: 'Soil samples, water test vials, and analytical reagents.',
        handling: 'Precise lab-packing and regulatory-compliant destruction.',
        icon: Microscope,
    },
    {
        category: 'Confidential Documents',
        examples: 'Proprietary client designs, financial data, and reports.',
        handling: 'Secure mobile shredding and certified data destruction.',
        icon: FileLock,
    },
    {
        category: 'Electronic Waste (E-Waste)',
        examples: 'High-performance workstations, plotters, and field tech.',
        handling: 'Certified data wiping, asset remarketing, and recycling.',
        icon: Monitor,
    },
];

const EngineeringConsultingCategories = () => {
    return (
        <section className="engineering-categories bg-white dark:bg-black !py-0">
            <div className="engineering-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="engineering-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="engineering-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="engineering-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Waste Streams We Manage
                    </h2>
                    <p className="engineering-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Comprehensive management for diverse, project-specific waste streams.
                    </p>
                </div>

                <div className="engineering-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="engineering-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="engineering-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="engineering-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Category</h6>
                            <h6 className="engineering-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Examples</h6>
                            <h6 className="engineering-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="engineering-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="engineering-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="engineering-categories__cell engineering-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="engineering-categories__cell engineering-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="engineering-categories__cell engineering-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default EngineeringConsultingCategories;

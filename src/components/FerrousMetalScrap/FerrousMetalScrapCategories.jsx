import React from 'react';
import { Truck, Cuboid, Package, Cog, Box, Hammer } from 'lucide-react';

const categories = [
    {
        category: 'Heavy Melting Steel (HMS 1 & 2)',
        examples: 'Structural demolition beams, thick-walled steel sections, heavy machinery plates.',
        handling: 'Processed via 3000-ton shearers to produce premium feedstock for large EAFs.',
        icon: Hammer,
    },
    {
        category: 'Shredded Scrap (211)',
        examples: 'Fragmented low-density steel from automobiles, appliances, and light iron.',
        handling: 'Produced via 4000+ HP Hammermill shredders; ensures consistent chemistry.',
        icon: Cog,
    },
    {
        category: 'Baled Light Iron',
        examples: 'Sheet metal, drums, fencing, and light architectural off-cuts.',
        handling: 'Compressed using 2000-ton baling presses for efficient furnace charging.',
        icon: Cuboid,
    },
    {
        category: 'Steel Turnings & Briquettes',
        examples: 'Machining swarf, borings, and CNC turnings from manufacturing plants.',
        handling: 'Centrifuged to remove oils, then high-pressure briquetted for foundries.',
        icon: Package,
    },
    {
        category: 'Reinforcing Bar (Rebar)',
        examples: 'Clean, cut-to-length concrete reinforcement steel from construction sites.',
        handling: 'Sorted and sheared for direct supply to rerolling mills for new rebar production.',
        icon: Truck,
    },
    {
        category: 'Cast Iron',
        examples: 'Engine blocks, high-carbon machinery beds, heavy pipes, manhole covers.',
        handling: 'Fractured/broken down for dedicated supply exclusively to cast iron foundries.',
        icon: Box,
    },
];

const FerrousMetalScrapCategories = () => {
    return (
        <section className="ewaste-categories bg-white dark:bg-black !py-0">
            <div className="ewaste-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-categories__label text-[#47622A] dark:text-[#799851] uppercase">Scrap Identification</h6>
                    <h2 className="ewaste-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Key Ferrous Scrap Grades
                    </h2>
                    <p className="ewaste-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We adhere to strict international grading standards (ISRI specifications), transforming mixed iron and steel into specification-ready industrial commodities.
                    </p>
                </div>

                <div className="ewaste-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="ewaste-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="ewaste-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="ewaste-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Grade / ISRI Code</h6>
                            <h6 className="ewaste-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Typical Sources</h6>
                            <h6 className="ewaste-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling Strategy</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="ewaste-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="ewaste-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="ewaste-categories__cell ewaste-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="ewaste-categories__cell ewaste-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="ewaste-categories__cell ewaste-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default FerrousMetalScrapCategories;

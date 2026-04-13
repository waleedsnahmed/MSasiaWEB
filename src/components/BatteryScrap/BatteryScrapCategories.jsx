import React from 'react';
import { Battery, BatteryCharging, BatteryWarning, Combine, Package, Pocket } from 'lucide-react';

const categories = [
    {
        category: 'Lead-Acid Batteries (ULAB)',
        examples: 'Car batteries, UPS systems, solar storage, forklifts.',
        handling: 'High value (Lead, Sulfuric Acid); High hazard (Lead, Acid). Highly recyclable (>95% recovery).',
        icon: BatteryWarning,
    },
    {
        category: 'Lithium-Ion (Li-ion)',
        examples: 'Laptops, smartphones, electric vehicles (EVs), power tools.',
        handling: 'High value (Cobalt, Nickel, Lithium); Fire/Reactive hazard. Specialized Pyrometallurgy or Hydrometallurgy.',
        icon: BatteryCharging,
    },
    {
        category: 'Nickel-Cadmium (Ni-Cd)',
        examples: 'Power tools, older medical equipment, emergency lighting.',
        handling: 'Value (Nickel); Highly Toxic (Cadmium). Specialized recovery to safely extract contents.',
        icon: Battery,
    },
    {
        category: 'Nickel-Metal Hydride (Ni-MH)',
        examples: 'Rechargeable household batteries, some hybrid vehicles.',
        handling: 'Value (Nickel); Safer than NiCd. Primarily recycled to recover Nickel content.',
        icon: Combine,
    },
    {
        category: 'Alkaline & Zinc-Carbon',
        examples: 'Remote controls, clocks, flashlights, toys.',
        handling: 'Low value (Zinc, Manganese); Lower hazard. Mechanical dismantling and recovery of steel/zinc.',
        icon: Package,
    },
    {
        category: 'Button Cells',
        examples: 'Watches, Hearing Aids, Calculators.',
        handling: 'May contain mercury, lithium, silver oxide. Requires special small-waste collection protocols.',
        icon: Pocket,
    },
];

const BatteryScrapCategories = () => {
    return (
        <section className="ewaste-categories bg-white dark:bg-black !py-0">
            <div className="ewaste-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="ewaste-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Types of Batteries We Handle
                    </h2>
                    <p className="ewaste-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Battery scrap is categorized based on its chemical composition. Responsible recycling is crucial due to the presence of hazardous materials and valuable resources.
                    </p>
                </div>

                <div className="ewaste-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="ewaste-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="ewaste-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="ewaste-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Battery Type</h6>
                            <h6 className="ewaste-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Common Sources</h6>
                            <h6 className="ewaste-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Hazard & Processing</h6>
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

export default BatteryScrapCategories;

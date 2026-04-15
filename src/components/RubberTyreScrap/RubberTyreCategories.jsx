import React from 'react';
import { Car, Factory, Flame, Activity, ThermometerSun, RefreshCw } from 'lucide-react';

const categories = [
    {
        category: 'End-of-Life Tyres (ELTs)',
        examples: 'Passenger, commercial, heavy-duty logistics, and off-road mining tyres.',
        handling: 'Utilizes debeading, high-torque shredding, and rigorous steel/fiber separation.',
        icon: Car,
    },
    {
        category: 'Industrial Rubber Scrap',
        examples: 'Worn conveyor belts, rubber hoses, molded products, seals, mats, offcuts.',
        handling: 'Assessed for natural vs. synthetic composition prior to industrial granulation.',
        icon: Factory,
    },
    {
        category: 'Tyre-Derived Fuel (TDF)',
        examples: 'Cleanly shredded, uniform 50-100mm tire chips yielding high calorific values.',
        handling: 'Supplied directly as an energy fuel offsetting coal in massive cement kilns.',
        icon: Flame,
    },
    {
        category: 'Crumb Rubber',
        examples: 'Granules and ambient/cryogenically processed powders of various mesh sizes.',
        handling: 'Diverted back into road bitumen asphalt, athletic tracks, and new molded products.',
        icon: Activity,
    },
    {
        category: 'Pyrolysis Decomposition',
        examples: 'Advanced thermal processing breaking rubber into raw molecular states.',
        handling: 'Extracts extremely valuable Pyrolysis Oil, Carbon Black, Steel Wire, and Syngas at 500°C.',
        icon: ThermometerSun,
    },
    {
        category: 'Retreading & Reuse',
        examples: 'Commercial vehicle tires determined to still possess physically sound casings.',
        handling: 'Segregated and transferred to certified retreaders to extend tire lifecycle up to 90%.',
        icon: RefreshCw,
    },
];

const RubberTyreCategories = () => {
    return (
        <section className="rubber-tyre-categories bg-white dark:bg-black !py-0">
            <div className="rubber-tyre-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="rubber-tyre-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="rubber-tyre-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="rubber-tyre-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Advanced Recycling Technologies
                    </h2>
                    <p className="rubber-tyre-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We process a full spectrum of rubber materials, scientifically assessing each grade for its most suitable and financially viable advanced recovery route.
                    </p>
                </div>

                <div className="rubber-tyre-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="rubber-tyre-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="rubber-tyre-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="rubber-tyre-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Technology / Scrap</h6>
                            <h6 className="rubber-tyre-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Scrap Examples</h6>
                            <h6 className="rubber-tyre-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling / Processing</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="rubber-tyre-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="rubber-tyre-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="rubber-tyre-categories__cell rubber-tyre-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="rubber-tyre-categories__cell rubber-tyre-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="rubber-tyre-categories__cell rubber-tyre-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default RubberTyreCategories;

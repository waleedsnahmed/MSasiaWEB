import React from 'react';
import { ChefHat, Building2, FlaskConical, Car, Sofa, Factory } from 'lucide-react';

const categories = [
    { category: 'Food Processing & Kitchen', sources: 'Sinks, commercial countertops, vats, pristine cookware, and massive exhaust hoods.', focus: 'Critical to aggressively separate 316 from 304 due to harsh chemical washing environments.', icon: ChefHat },
    { category: 'Architectural & Construction', sources: 'Heavy exterior railings, load-bearing cladding, architectural trim, roofing, and structural sections.', focus: 'Separate magnetic panels (430) immediately to preserve high-value structural streams.', icon: Building2 },
    { category: 'Chemical & Pharmaceutical', sources: 'Complex industrial reactors, heavily alloyed tanks, heat exchangers, and sensitive pipe networks.', focus: 'Highest-value alloy stream; absolute precise XRF identification for 316L vs. 304L is strictly mandatory.', icon: FlaskConical },
    { category: 'Automotive & Transportation', sources: 'Comprehensive exhaust systems (old: 409/439; new: 304), heavy transit structural trim, and resilient fittings.', focus: 'Must isolate magnetic exhaust scrap (409 series) entirely from non-magnetic 304 components.', icon: Car },
    { category: 'Consumer Durables', sources: 'Home appliance bodies (sinks, outer panels) and commercial cutlery volumes.', focus: 'Immediate magnet testing quickly separates low-nickel 430/410 bodies from pure 304 sinks.', icon: Sofa },
    { category: 'Industrial Manufacturing', sources: 'Massive machining off-cuts, worn-out assembly line equipment, and large-scale storage drums.', focus: 'Heavily mixed grades intrinsically based on original equipment. Requires full spectrum 100% XRF analysis.', icon: Factory }
];

const StainlessSteelScrapCategories = () => {
    return (
        <section className="StainlessSteelScrap-categories bg-white dark:bg-black !py-0">
            <div className="StainlessSteelScrap-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="StainlessSteelScrap-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="StainlessSteelScrap-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="StainlessSteelScrap-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Sources of Stainless Steel Scrap
                    </h2>
                    <p className="StainlessSteelScrap-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We meticulously segment various sources of stainless steel scrap back into identifiable premium grades.
                    </p>
                </div>

                <div className="StainlessSteelScrap-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="StainlessSteelScrap-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="StainlessSteelScrap-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="StainlessSteelScrap-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Category</h6>
                            <h6 className="StainlessSteelScrap-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Sources</h6>
                            <h6 className="StainlessSteelScrap-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling Priority</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="StainlessSteelScrap-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="StainlessSteelScrap-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="StainlessSteelScrap-categories__cell StainlessSteelScrap-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="StainlessSteelScrap-categories__cell StainlessSteelScrap-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.sources}</p>
                                    </div>
                                    <div className="StainlessSteelScrap-categories__cell StainlessSteelScrap-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
                                        <p>{cat.focus}</p>
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

export default StainlessSteelScrapCategories;


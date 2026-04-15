import React from 'react';
import { Box, AlignLeft, Package, Activity, HardDrive, Factory, Shield } from 'lucide-react';

const categories = [
    {
        category: 'HDPE Plastics',
        examples: 'High-Density Polyethylene containers, industrial fluid drums, and heavy bottles.',
        handling: 'Strictly segregated to preserve structural high-density material quality.',
        icon: Box,
    },
    {
        category: 'LDPE Films',
        examples: 'Low-Density Polyethylene films, protective sheets, shrink wraps, and grocery bags.',
        handling: 'Baled efficiently to handle excessive volume generated in logistics.',
        icon: AlignLeft,
    },
    {
        category: 'PET Plastics',
        examples: 'Polyethylene Terephthalate bottles, consumer packaging, and soft drink containers.',
        handling: 'Washed and shredded into pellets for textile and raw packaging fiber.',
        icon: Package,
    },
    {
        category: 'PP Polymers',
        examples: 'Polypropylene crates, bottle caps, industrial parts, and automotive moldings.',
        handling: 'Mechanically sorted and processed separate from flexible packaging.',
        icon: Activity,
    },
    {
        category: 'PVC Materials',
        examples: 'Polyvinyl Chloride pipes, secure fittings, and industrial cabling structures.',
        handling: 'Segregated precisely due to differing reactive chlorine levels during extrusion.',
        icon: Shield,
    },
    {
        category: 'ABS & Engineering Plastics',
        examples: 'Acrylonitrile Butadiene Styrene casings, complex IT frames, and engineering resins.',
        handling: 'Recovered for high-durability molding applications and electronics housings.',
        icon: HardDrive,
    }
];

const PlasticScrapCategories = () => {
    return (
        <section className="plastic-scrap-categories bg-white dark:bg-black !py-0">
            <div className="plastic-scrap-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="plastic-scrap-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="plastic-scrap-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="plastic-scrap-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Types of Plastic Scrap We Process
                    </h2>
                    <p className="plastic-scrap-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We handle a wide range of plastic materials, including post-industrial and post-consumer plastics. Each plastic type is processed separately to preserve material quality.
                    </p>
                </div>

                <div className="plastic-scrap-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="plastic-scrap-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="plastic-scrap-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="plastic-scrap-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Plastic Type</h6>
                            <h6 className="plastic-scrap-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Scrap Examples</h6>
                            <h6 className="plastic-scrap-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling / Processing</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="plastic-scrap-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="plastic-scrap-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="plastic-scrap-categories__cell plastic-scrap-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="plastic-scrap-categories__cell plastic-scrap-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="plastic-scrap-categories__cell plastic-scrap-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default PlasticScrapCategories;

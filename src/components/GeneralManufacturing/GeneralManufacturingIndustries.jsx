import React from 'react';
import { Factory, Construction, Car, Cylinder, PackageCheck, Briefcase, Settings, Building2 } from 'lucide-react';

const industries = [
    { icon: Factory, title: 'Light Manufacturing', description: 'Managing mixed streams of packaging, light assembly scrap, and administrative facility waste.' },
    { icon: Construction, title: 'Heavy Manufacturing', description: 'Handling massive volumes of metal scrap, heavy machinery decommissioning, and industrial sludge.' },
    { icon: Car, title: 'Automotive Components', description: 'Point-of-generation scrap optimization for stamping, machining, and parts fabrication lines.' },
    { icon: Cylinder, title: 'Plastic Injection Molding', description: 'Specialized recycling for sprues, runners, off-spec parts, and purge materials.' },
    { icon: PackageCheck, title: 'Consumer Goods', description: 'Comprehensive packaging waste reduction and lean-aligned material recovery programs.' },
    { icon: Briefcase, title: 'Contract Manufacturing', description: 'Flexible, scalable waste solutions adapting to rapid production changes and diverse client specs.' },
    { icon: Settings, title: 'Machining & Fabrication', description: 'Management of metal chips, turnings, and complex spent metalworking fluid disposal.' },
    { icon: Building2, title: 'Multi-Site Operations', description: 'Standardized waste programs, centralized reporting, and consistent compliance across all plants.' },
];

const GeneralManufacturingIndustries = () => {
    return (
        <section className="general-industries bg-white dark:bg-black !py-0">
            <div className="general-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="general-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="general-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="general-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Manufacturing Facilities We Support
                    </h2>
                    <p className="general-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our services are tailored to production volume, waste complexity, and regulatory requirements.
                    </p>
                </div>

                <div className="general-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="general-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="general-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="general-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="general-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GeneralManufacturingIndustries;

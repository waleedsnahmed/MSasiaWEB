import React from 'react';
import { Factory, Activity, Zap, Truck, Wrench, Package, Building, Shield } from 'lucide-react';

const industries = [
    { icon: Factory, title: 'Manufacturing & Automotive', description: 'Production line removal, heavy machinery dismantling, and metal fabrication waste.' },
    { icon: Activity, title: 'Chemical & Pharmaceutical', description: 'Hazardous waste containment, expired product destruction, and laboratory decommissioning.' },
    { icon: Zap, title: 'Energy & Utilities', description: 'Power plant scrap, transformer recycling, boiler dismantling, and turbine extraction.' },
    { icon: Truck, title: 'Logistics & Warehousing', description: 'Heavy racking removal, warehouse cleanups, and large-scale facility clearing.' },
    { icon: Wrench, title: 'Engineering Units', description: 'Scrap collection, structural dismantling, and heavy equipment recovery.' },
    { icon: Package, title: 'Food Processing', description: 'Decommissioning of specialized industrial lines, chillers, and hygienic equipment.' },
    { icon: Building, title: 'Construction Companies', description: 'On-site scrap removal, structural steel recovery, and demolition waste handling.' },
    { icon: Shield, title: 'Government Facilities', description: 'Vetted, certified field teams for high-security sector operations and safe dismantling.' },
];

const IndustrialFieldServicesIndustries = () => {
    return (
        <section className="industrial-industries bg-white dark:bg-black !py-0">
            <div className="industrial-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="industrial-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="industrial-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="industrial-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Industries We Serve
                    </h2>
                    <p className="industrial-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our field teams are vetted, trained, and certified for operations in high-security and high-complexity sectors.
                    </p>
                </div>

                <div className="industrial-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="industrial-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="industrial-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="industrial-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="industrial-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrialFieldServicesIndustries;

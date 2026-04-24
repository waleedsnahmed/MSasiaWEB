import React from 'react';
import { Plane, Building, Ship, Anchor, PackageSearch, PenTool, ShieldAlert, Navigation } from 'lucide-react';

const industries = [
    { icon: Plane, title: 'International Airports', description: 'Comprehensive management of complex passenger, cargo, and biosecurity waste streams under strict security.' },
    { icon: Building, title: 'Domestic Airports', description: 'Streamlined recycling, de-icing fluid recovery, and municipal waste programs for high-volume regional hubs.' },
    { icon: Ship, title: 'Seaports & Terminals', description: 'Large-scale industrial scrap, cargo dunnage, and complex marine waste handling for shipping operations.' },
    { icon: Anchor, title: 'Cruise & Ferry Terminals', description: 'High-volume municipal, catering, and sanitary waste processing tailored for passenger vessel turnarounds.' },
    { icon: PackageSearch, title: 'Cargo & Logistics Hubs', description: 'Intensive packaging, wooden pallet, and shrink-wrap recycling centers for global freight forwarding networks.' },
    { icon: PenTool, title: 'Maintenance Hangars', description: 'Strict hazardous waste compliance for aviation fuels, oils, chemical solvents, and aircraft maintenance scrap.' },
    { icon: ShieldAlert, title: 'Shipyards & Drydocks', description: 'Heavy industrial waste management including marine growth, hull cleaning residues, and shipyard scrap.' },
    { icon: Navigation, title: 'Military Airfields', description: 'Secure, classified waste operations maintaining absolute base security and multi-agency regulatory compliance.' },
];

const AirportsSeaportsIndustries = () => {
    return (
        <section className="airports-industries bg-white dark:bg-black !py-0">
            <div className="airports-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="airports-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="airports-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="airports-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Facilities We Serve
                    </h2>
                    <p className="airports-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        MS Asia Enterprises adapts solutions to the scale, traffic volume, and specific regulatory requirements of each facility type.
                    </p>
                </div>

                <div className="airports-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="airports-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="airports-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="airports-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="airports-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AirportsSeaportsIndustries;

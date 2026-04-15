import React from 'react';
import { Rocket, Zap, Beaker, Car, Settings, Droplet, Factory, Anchor } from 'lucide-react';

const industries = [
    { icon: Rocket, title: 'Aerospace & Defense', description: 'Decommissioning and sourcing of extreme high-temperature turbine alloys.' },
    { icon: Zap, title: 'Power Generation', description: 'Recycling of specialized heat-resistant alloys from thermal and grid stations.' },
    { icon: Beaker, title: 'Chemical & Petrochemical', description: 'Safe recovery of Hastelloy and Monel from reactors and aggressive environments.' },
    { icon: Car, title: 'Automotive Manufacturing', description: 'Turnings and scrap processing for high-performance automotive supply chains.' },
    { icon: Settings, title: 'Engineering & Fabrication', description: 'Meticulous segregation of swarf and industrial machining components.' },
    { icon: Droplet, title: 'Oil & Gas Sector', description: 'Strategic material recovery of corrosion-resistant alloys from extraction setups.' },
    { icon: Factory, title: 'Industrial Equipment', description: 'Value recovery from heavy industrial tooling and specialty machinery.' },
    { icon: Anchor, title: 'Marine & Shipbuilding', description: 'Precision recycling of copper-nickel alloys optimized for saltwater resistance.' }
];

const NickelAlloyScrapIndustries = () => {
    return (
        <section className="NickelAlloyScrap-industries bg-white dark:bg-black !py-0">
            <div className="NickelAlloyScrap-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="NickelAlloyScrap-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="NickelAlloyScrap-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="NickelAlloyScrap-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Industries We Serve
                    </h2>
                    <p className="NickelAlloyScrap-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Tailored solutions for diverse sectors across India.
                    </p>
                </div>

                <div className="NickelAlloyScrap-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="NickelAlloyScrap-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="NickelAlloyScrap-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="NickelAlloyScrap-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="NickelAlloyScrap-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NickelAlloyScrapIndustries;


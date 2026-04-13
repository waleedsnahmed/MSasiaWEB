import React from 'react';
import { Building2, Settings, Ship, Car, Zap, Hammer, Landmark, Refrigerator } from 'lucide-react';

const industries = [
    { icon: Building2, title: 'Construction & Demolition', description: 'Large-scale clearance of structural steel, girders, plates, and rebar from active construction and demolition sites.' },
    { icon: Settings, title: 'Manufacturing & Engineering', description: 'Managing prompt scrap, production off-cuts, machinery rejects, and end-of-life capital goods.' },
    { icon: Ship, title: 'Shipbreaking', description: 'Massive volume processing of heavy melting steel (HMS) plates recovered from decommissioned maritime vessels.' },
    { icon: Car, title: 'Automotive Sectors', description: 'Shredding and baling of automobile bodies, defective parts, engine blocks, and high volumes of auto stamping scrap.' },
    { icon: Zap, title: 'Power Plants & Utilities', description: 'Secure dismantling and processing of large infrastructure elements, pipe networks, and transmission tower steel.' },
    { icon: Hammer, title: 'Metal Fabrication', description: 'Routine collection of mild steel scrap, welding waste, borings, and continuous CNC machining turnings.' },
    { icon: Landmark, title: 'Public Sector (PSUs)', description: 'Auditable, systematic collection services for government rail networks, defense, and public infrastructure projects.' },
    { icon: Refrigerator, title: 'Consumer Durables', description: 'High-volume hammermill shredding of end-of-life appliances, white goods, and light architectural panelling.' },
];

const FerrousMetalScrapIndustries = () => {
    return (
        <section className="ewaste-industries bg-white dark:bg-black !py-0">
            <div className="ewaste-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors We Serve</h6>
                    <h2 className="ewaste-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Industrial-Scale Source Supply
                    </h2>
                    <p className="ewaste-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We deploy fleet and field operations capable of managing heavy tonnage outputs across India's foundational manufacturing and infrastructure sectors.
                    </p>
                </div>

                <div className="ewaste-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="ewaste-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="ewaste-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="ewaste-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="ewaste-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FerrousMetalScrapIndustries;

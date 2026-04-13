import React from 'react';
import { Droplet, Car, Anchor, Zap, Factory, Landmark, Cpu, Hammer } from 'lucide-react';

const industries = [
    { icon: Droplet, title: 'Plumbing & Sanitary', description: 'Recovering valve bodies, taps, and pipe fittings made of dezincification-resistant (DZR) leaded brass.' },
    { icon: Anchor, title: 'Marine & Offshore', description: 'Dismanting heavy ship propellers, seawater valves, and condenser tubes composed of high-strength naval brass.' },
    { icon: Zap, title: 'Electrical & Power', description: 'Recycling high-conductivity switchgear components, terminals, and relay bases made of phosphor bronze.' },
    { icon: Landmark, title: 'Architecture & Art', description: 'Managing statues, decorative hardware, and artistic railings requiring specialized silicon bronze handle track.' },
    { icon: Car, title: 'Automotive & Transit', description: 'Processing high-volume radiator cores, engine bushings, and precision bearing cages from production scrap.' },
    { icon: Factory, title: 'Industrial Machinery', description: 'Scrap recovery of heavy-duty gears, pump impellers, and industrial fittings made of gunmetal or bearing bronze.' },
    { icon: Cpu, title: 'Electronics', description: 'Refining precision connectors and spring temper materials from high-speed electronic manufacturing nodes.' },
    { icon: Hammer, title: 'Machining Shops', description: 'Consolidating high volumes of Free-Cutting Brass (C36000) turnings and CNC borings into furnace briquettes.' },
];

const BrassBronzeScrapIndustries = () => {
    return (
        <section className="ewaste-industries bg-white dark:bg-black !py-0">
            <div className="ewaste-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors We Serve</h6>
                    <h2 className="ewaste-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        High-Density Industrial Scrap Nodes
                    </h2>
                    <p className="ewaste-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our agile teams operate across India's most specialized engineering clusters—from shipyards in Gujarat to precision pump foundries in Coimbatore.
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

export default BrassBronzeScrapIndustries;

import React from 'react';
import { Factory, Zap, Car, Building2, Bolt, Wrench, Anchor, Warehouse } from 'lucide-react';

const industries = [
    { icon: Factory, title: 'Manufacturing & Engineering', description: 'Collection of industrial turnings, off-cuts, and obsolete production components.' },
    { icon: Zap, title: 'Electrical & Electronics', description: 'Recovery of copper wiring, busbars, transformers, and electronic conductive scrap.' },
    { icon: Car, title: 'Automotive & Transport', description: 'Recycling aluminum cast parts, radiators, and high-value transport metals.' },
    { icon: Building2, title: 'Construction & Demolition', description: 'Value realization from heavy architectural aluminum, plumbing fixtures, and structural brass.' },
    { icon: Bolt, title: 'Power Generation', description: 'Specialized management of heavyweight conductive metals and grid infrastructure scrap.' },
    { icon: Wrench, title: 'Fabrication Workshops', description: 'Segregated collection of mixed metal swarf, clean cuttings, and machining off-cuts.' },
    { icon: Anchor, title: 'Shipbreaking Yards', description: 'Handling high-volume marine bronzes, cupronickel piping, and specialized naval alloys.' },
    { icon: Warehouse, title: 'Industrial Estates', description: 'Routine mixed scrap collection and bulk non-ferrous clearance for varied industrial zones.' }
];

const NonFerrousMetalScrapIndustries = () => {
    return (
        <section className="NonFerrousMetalScrap-industries bg-white dark:bg-black !py-0">
            <div className="NonFerrousMetalScrap-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="NonFerrousMetalScrap-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="NonFerrousMetalScrap-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="NonFerrousMetalScrap-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Industries We Serve
                    </h2>
                    <p className="NonFerrousMetalScrap-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Tailored solutions for diverse sectors across India.
                    </p>
                </div>

                <div className="NonFerrousMetalScrap-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="NonFerrousMetalScrap-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="NonFerrousMetalScrap-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="NonFerrousMetalScrap-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="NonFerrousMetalScrap-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NonFerrousMetalScrapIndustries;


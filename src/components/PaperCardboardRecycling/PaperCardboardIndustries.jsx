import React from 'react';
import { Building2, Landmark, ShoppingCart, Truck, GraduationCap, Home } from 'lucide-react';

const industries = [
    { icon: Building2, title: 'Corporate Offices & IT Parks', description: 'Generating high volumes of mixed paper and requiring secure document destruction.' },
    { icon: Landmark, title: 'Banks & Financial Institutions', description: 'Mandatory cross-cut shredding services for confidential transaction and client records.' },
    { icon: ShoppingCart, title: 'Retail Chains & Shopping Malls', description: 'High turnover of corrugated cardboard packaging and soft mixed papers from daily retail operations.' },
    { icon: Truck, title: 'E-commerce & Logistics', description: 'Massive volumes of #11 OCC (Old Corrugated Containers) and kraft paper demanding volume-optimized baling solutions.' },
    { icon: GraduationCap, title: 'Educational Institutions', description: 'Schools, colleges, and libraries generating vast amounts of newsprint, notebooks, and mixed paper.' },
    { icon: Home, title: 'Residential Complexes', description: 'Townships and apartment complexes requiring structured collection for household newsprint and packaging.' },
];

const PaperCardboardIndustries = () => {
    return (
        <section className="paper-cardboard-industries bg-white dark:bg-black !py-0">
            <div className="paper-cardboard-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="paper-cardboard-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="paper-cardboard-industries__label text-[#47622A] dark:text-[#799851] uppercase">Generators</h6>
                    <h2 className="paper-cardboard-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Who We Serve
                    </h2>
                    <p className="paper-cardboard-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Paper fibers are generated everywhere. We cater our collection logistics and processing endpoints to all scale operations across India.
                    </p>
                </div>

                <div className="paper-cardboard-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="paper-cardboard-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="paper-cardboard-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="paper-cardboard-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="paper-cardboard-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaperCardboardIndustries;

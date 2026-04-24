import React from 'react';
import { Factory, Construction, Settings, Diamond, Hammer, Zap, Wrench, Recycle } from 'lucide-react';

const industries = [
    { icon: Factory, title: 'Steel Mills', description: 'End-to-end management for integrated steelworks. We transform massive scrap streams from a logistical burden into a transparent, compliant revenue channel.' },
    { icon: Construction, title: 'Foundries', description: 'Comprehensive scrap management and precise process residue handling designed specifically for high-volume casting operations and metal pouring environments.' },
    { icon: Settings, title: 'Metal Fabrication', description: 'Efficient collection of heavy off-cuts, plates, and mixed manufacturing scrap, ensuring that valuable floor space is cleared quickly and safely.' },
    { icon: Diamond, title: 'Alloy Production', description: 'Meticulous segregation and recovery of high-value specialty alloys, utilizing advanced metallurgical knowledge to prevent value erosion through cross-contamination.' },
    { icon: Hammer, title: 'Mini-Mills', description: 'Optimized logistics and secure scrap supply specifically engineered for electric arc furnace operations, maintaining continuous, reliable raw material flow.' },
    { icon: Zap, title: 'Die-Casters', description: 'Specialized management of non-ferrous streams including aluminum, zinc, and other unique casting by-products to preserve their high inherent alloy value.' },
    { icon: Wrench, title: 'Decommissioning', description: 'Safe, project-managed dismantling and systematic recovery of end-of-life capital assets, including massive industrial equipment and legacy machinery.' },
    { icon: Recycle, title: 'Industrial Recycling', description: 'Strategic partnership for large-scale material processing and beneficiation, leveraging advanced shredding, shearing, and sorting technologies.' },
];

const SteelPrimaryMetalsIndustries = () => {
    return (
        <section className="steel-industries bg-white dark:bg-black !py-0">
            <div className="steel-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="steel-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="steel-industries__label text-[#47622A] dark:text-[#799851] uppercase">Facilities</h6>
                    <h2 className="steel-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Facilities We Support
                    </h2>
                    <p className="steel-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Customized based on facility size, process complexity, and waste types, ensuring safe and efficient operations.
                    </p>
                </div>

                <div className="steel-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="steel-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="steel-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="steel-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="steel-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SteelPrimaryMetalsIndustries;

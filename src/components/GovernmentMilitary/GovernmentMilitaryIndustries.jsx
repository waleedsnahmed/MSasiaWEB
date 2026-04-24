import React from 'react';
import { Building, Shield, Factory, Wrench, PlusSquare, FlaskConical, Tent, RadioTower } from 'lucide-react';

const industries = [
    { icon: Building, title: 'Government Offices', description: 'Secure handling of administrative waste and sensitive document destruction.' },
    { icon: Shield, title: 'Military Bases', description: 'Comprehensive waste programs for large-scale operations and residential quarters.' },
    { icon: Factory, title: 'Defense Manufacturing', description: 'Management of industrial scrap, hazardous materials, and production waste.' },
    { icon: Wrench, title: 'Maintenance Depots', description: 'Disposal of fuels, oils, solvents, and heavy equipment scrap.' },
    { icon: PlusSquare, title: 'Healthcare Units', description: 'Compliant biohazardous and medical waste management for military hospitals.' },
    { icon: FlaskConical, title: 'Research Facilities', description: 'Specialized handling for laboratory waste and hazardous testing materials.' },
    { icon: Tent, title: 'Training Facilities', description: 'On-demand collection for field training sites and temporary encampments.' },
    { icon: RadioTower, title: 'Secure Infrastructure', description: 'Controlled waste protocols for high-security installations and communications centers.' },
];

const GovernmentMilitaryIndustries = () => {
    return (
        <section className="gov-industries bg-white dark:bg-black !py-0">
            <div className="gov-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="gov-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="gov-industries__label text-[#47622A] dark:text-[#799851] uppercase">Facilities</h6>
                    <h2 className="gov-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Facilities We Support
                    </h2>
                    <p className="gov-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Custom-designed based on security level, waste complexity, and regulatory requirements.
                    </p>
                </div>

                <div className="gov-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="gov-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="gov-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="gov-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="gov-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GovernmentMilitaryIndustries;

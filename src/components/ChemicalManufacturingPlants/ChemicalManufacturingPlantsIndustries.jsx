import React from 'react';
import { FlaskConical, Factory, Shuffle, Microscope, TestTube, Database, Sprout, Pill } from 'lucide-react';

const industries = [
    { icon: FlaskConical, title: 'Specialty Chemical Plants', description: 'Managing low-volume, high-value, and often highly reactive specialized chemical waste.' },
    { icon: Factory, title: 'Industrial Production', description: 'Large-scale, continuous waste management for bulk petrochemical and basic chemical manufacturing.' },
    { icon: Shuffle, title: 'Blending & Formulation', description: 'Handling complex mixtures, wash-water, and cross-contamination risks in blending units.' },
    { icon: Microscope, title: 'R&D Laboratories', description: 'Precise lab-packing and management of diverse, small-volume hazardous research chemicals.' },
    { icon: TestTube, title: 'Quality Control Labs', description: 'Routine collection and secure disposal of testing reagents and expired analytical standards.' },
    { icon: Database, title: 'Bulk Storage Facilities', description: 'Large-scale spill prevention, containment, and tank-bottom sludge management.' },
    { icon: Sprout, title: 'Agrochemical Manufacturing', description: 'Specialized handling of highly toxic pesticide, herbicide, and fertilizer waste streams.' },
    { icon: Pill, title: 'Pharmaceutical Intermediates', description: 'Strict compliance and destruction of active pharmaceutical ingredients (APIs) and precursors.' },
];

const ChemicalManufacturingPlantsIndustries = () => {
    return (
        <section className="chemical-industries bg-white dark:bg-black !py-0">
            <div className="chemical-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="chemical-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="chemical-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="chemical-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Facilities We Serve
                    </h2>
                    <p className="chemical-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our solutions are designed around chemical compatibility, risk level, and regulatory requirements across all operations.
                    </p>
                </div>

                <div className="chemical-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="chemical-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="chemical-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="chemical-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="chemical-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChemicalManufacturingPlantsIndustries;

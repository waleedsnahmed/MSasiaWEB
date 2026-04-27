import React from 'react';
import { Building, HeartPulse, Truck, Globe, Droplets, Syringe, Microscope, FlaskConical } from 'lucide-react';

const industries = [
    { icon: Building, title: 'Hospital-Based Blood Banks', description: 'Integrating waste management with hospital-wide systems while meeting stricter lab accreditation standards.' },
    { icon: HeartPulse, title: 'Independent Blood Centers', description: 'Unified color-code protocols across donor centers, testing labs, and processing facilities to ensure comprehensive compliance.' },
    { icon: Truck, title: 'Mobile Blood Donation Units', description: 'Scalable solutions for mobile units to ensure safe collection and transport of sharps and biohazards on the go.' },
    { icon: Globe, title: 'Regional Blood Services', description: 'Managing large-scale waste generated from collecting, testing, and distributing thousands of units across regions.' },
    { icon: Droplets, title: 'Plasma Collection Facilities', description: 'Specialized handling of waste generated during plasma apheresis, freezing, and ultra-cold storage processes.' },
    { icon: Syringe, title: 'Transfusion Services', description: 'Ensuring proper handling of cross-matching lab waste, component preparation waste, and transfusion-related refuse.' },
    { icon: Microscope, title: 'Clinical Laboratories', description: 'Safe disposal of test kits, culture media, reagents, and samples used for infectious disease screening.' },
    { icon: FlaskConical, title: 'Research & Testing Labs', description: 'Compliant management of chemical waste, biohazards, and complex materials generated during blood and transfusion research.' },
];

const LabsAndBloodBanksIndustries = () => {
    return (
        <section className="labs-blood-banks-industries bg-white dark:bg-black !py-0">
            <div className="labs-blood-banks-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="labs-blood-banks-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="labs-blood-banks-industries__label text-[#47622A] dark:text-[#799851] uppercase">Facilities</h6>
                    <h2 className="labs-blood-banks-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Facilities We Support
                    </h2>
                    <p className="labs-blood-banks-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our solutions are custom-designed to match collection volumes, testing intensity, and specific regulatory requirements, ensuring safety at every stage.
                    </p>
                </div>

                <div className="labs-blood-banks-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="labs-blood-banks-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="labs-blood-banks-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="labs-blood-banks-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="labs-blood-banks-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LabsAndBloodBanksIndustries;

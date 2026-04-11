import React from 'react';
import { Database, Monitor, Factory, Stethoscope, Building2, Server, GraduationCap, Building } from 'lucide-react';

const industries = [
    { icon: Database, title: 'BFSI', description: 'Tailored protocols for ATM disposal, core banking hardware, and adherence to stringent financial regulations.' },
    { icon: Server, title: 'IT & ITeS', description: 'Large-scale data center decommissioning, secure handling of R&D equipment, and IP protection.' },
    { icon: Factory, title: 'Manufacturing & Pharma', description: 'Disposal of ERP/SCM hardware, lab IT equipment, and compliance with data integrity norms.' },
    { icon: Stethoscope, title: 'Healthcare', description: 'Secure disposal of patient data-bearing hardware, following necessary data sanitization protocols.' },
    { icon: Building2, title: 'Corporate Offices', description: 'Organized bulk removal of retired employee laptops, workstations, and network gear.' },
    { icon: Monitor, title: 'BPOs & IT Parks', description: 'Constant refresh cycles managed swiftly with minimal operational disruption.' },
    { icon: GraduationCap, title: 'Schools & Colleges', description: 'Safe removal of outdated lab computers, ensuring compliance and freeing up space.' },
    { icon: Building, title: 'Government Departments', description: 'Highly documented processing respecting state-level privacy requirements and auditing.' },
];

const ITScrapIndustries = () => {
    return (
        <section className="itscrap-industries bg-white dark:bg-black !py-0">
            <div className="itscrap-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="itscrap-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="itscrap-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="itscrap-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Industry-Specific Solutions
                    </h2>
                    <p className="itscrap-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our disposal system adapts to your scale, supporting IT disposal requirements universally.
                    </p>
                </div>

                <div className="itscrap-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="itscrap-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="itscrap-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="itscrap-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="itscrap-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ITScrapIndustries;

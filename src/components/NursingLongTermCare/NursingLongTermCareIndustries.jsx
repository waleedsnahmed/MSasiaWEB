import React from 'react';
import { Home, HeartHandshake, Activity, BrainCircuit, HeartPulse, Building, Users, BedDouble } from 'lucide-react';

const industries = [
    { icon: Home, title: 'Skilled Nursing Facilities', description: 'Comprehensive management of high-volume medical waste and sharps from continuous medical care.' },
    { icon: HeartHandshake, title: 'Assisted Living Centers', description: 'Discreet, scheduled collections that seamlessly integrate with daily resident activities.' },
    { icon: Activity, title: 'Rehabilitation Centers', description: 'Safe disposal of physical therapy equipment, outdated medical beds, and pharmaceutical waste.' },
    { icon: BrainCircuit, title: 'Memory Care Units', description: 'Specialized, secure handling of waste to ensure a safe, hygienic environment for vulnerable residents.' },
    { icon: HeartPulse, title: 'Post-Acute Care Facilities', description: 'Targeted logistics for short-term recovery centers handling frequent wound care materials.' },
    { icon: Building, title: 'Residential Care Homes', description: 'Compact, efficient containment solutions tailored for smaller, residential-style care environments.' },
    { icon: Users, title: 'Continuing Care Communities', description: 'Scalable frameworks deployed across large, multi-level retirement living campuses.' },
    { icon: BedDouble, title: 'Specialized Care Units', description: 'Stringent protocols for managing complex waste from highly specialized continuous care operations.' },
];

const NursingLongTermCareIndustries = () => {
    return (
        <section className="nursing-industries bg-white dark:bg-black !py-0">
            <div className="nursing-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="nursing-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="nursing-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="nursing-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Facilities We Serve
                    </h2>
                    <p className="nursing-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our solutions are customized based on patient population, facility size, and operational needs.
                    </p>
                </div>

                <div className="nursing-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="nursing-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="nursing-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="nursing-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="nursing-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NursingLongTermCareIndustries;

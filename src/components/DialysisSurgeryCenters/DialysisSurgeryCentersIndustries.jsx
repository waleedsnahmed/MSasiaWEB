import React from 'react';
import { Activity, Building2, Stethoscope, Home, Hospital, MapPin, Scissors, Building } from 'lucide-react';

const industries = [
    { icon: Activity, title: 'Outpatient Dialysis Facilities', description: 'Comprehensive management of daily high-volume blood-contaminated waste and sharps from continuous patient sessions.' },
    { icon: Building2, title: 'Nephrology Centers', description: 'Tailored solutions addressing the specific diagnostic, pharmaceutical, and clinical waste needs of nephrology care.' },
    { icon: Stethoscope, title: 'Specialty Kidney Care Units', description: 'Specialized handling for complex waste streams generated during advanced renal treatments and procedures.' },
    { icon: Home, title: 'Home Dialysis Providers', description: 'Portable containment and scheduled pickups ensuring safe care delivery without compromising compliance at home.' },
    { icon: Hospital, title: 'Hospital-Based Dialysis', description: 'Integration with hospital waste systems while maintaining dialysis-specific protocols and infection control.' },
    { icon: MapPin, title: 'Stand-Alone Dialysis Centers', description: 'Compact, efficient containment solutions with optimized workflows designed for limited space facilities.' },
    { icon: Scissors, title: 'Ambulatory Surgery Centers', description: 'Stringent protocols for managing high-volume biohazardous and pathological waste safely post-surgery.' },
    { icon: Building, title: 'Multi-Specialty Surgical Clinics', description: 'Scalable frameworks deployed across large clinics handling diverse surgical and procedural waste streams.' },
];

const DialysisSurgeryCentersIndustries = () => {
    return (
        <section className="dialysis-industries bg-white dark:bg-black !py-0">
            <div className="dialysis-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="dialysis-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="dialysis-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="dialysis-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Facilities We Serve
                    </h2>
                    <p className="dialysis-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        MS Asia Enterprises adapts solutions to the scale, patient volume, and specific requirements of each facility type.
                    </p>
                </div>

                <div className="dialysis-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="dialysis-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="dialysis-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="dialysis-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="dialysis-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DialysisSurgeryCentersIndustries;

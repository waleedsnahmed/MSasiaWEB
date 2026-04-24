import React from 'react';
import { Hospital, Activity, Droplets, Home, Building2, Stethoscope, Scissors, HeartPulse } from 'lucide-react';

const industries = [
    { icon: Hospital, title: 'Clinics & Urgent Care', description: 'Comprehensive solutions ensuring safe collection, transport, and disposal of all medical and hazardous waste types.' },
    { icon: Activity, title: 'Dental Clinics', description: 'Specialized services including amalgam recovery, sharps disposal, and OSHA compliance management.' },
    { icon: Droplets, title: 'Dialysis Centers', description: 'Professional management of blood-contaminated materials and chemical solutions to prevent cross-contamination.' },
    { icon: Home, title: 'Home Health Organizations', description: 'Portable containment and scheduled pickups ensuring safe care delivery without compromising compliance.' },
    { icon: Building2, title: 'Hospitals & Health Systems', description: 'Scalable, end-to-end solutions managing high volumes across diverse departments and specialty units.' },
    { icon: Stethoscope, title: 'Physician Offices', description: 'Streamlined services that are safe, reliable, and scalable for small and medium-sized practices.' },
    { icon: Scissors, title: 'Surgery Centers', description: 'Comprehensive disposal of high-risk clinical waste including sharps, biohazards, and pharmaceuticals.' },
    { icon: HeartPulse, title: 'Veterinary Clinics', description: 'Specialized pathological and biohazardous waste handling catering to unique animal care requirements.' },
];

const ClinicsUrgentCareIndustries = () => {
    return (
        <section className="clinics-industries bg-white dark:bg-black !py-0">
            <div className="clinics-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="clinics-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="clinics-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="clinics-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Healthcare Sub-Industries We Serve
                    </h2>
                    <p className="clinics-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        MS Asia Enterprises adapts solutions to meet your unique requirements and patient volume across the healthcare spectrum.
                    </p>
                </div>

                <div className="clinics-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="clinics-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="clinics-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="clinics-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="clinics-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClinicsUrgentCareIndustries;

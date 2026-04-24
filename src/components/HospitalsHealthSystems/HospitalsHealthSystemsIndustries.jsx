import React from 'react';
import { Building2, Globe, Activity, Scissors, HeartPulse, Network, Microscope, Warehouse } from 'lucide-react';

const industries = [
    { icon: Building2, title: 'Multi-Department Hospitals', description: 'Comprehensive solutions spanning surgical, laboratory, pharmacy, and administrative departments.' },
    { icon: Globe, title: 'National Health Systems', description: 'Standardized, scalable logistics and compliance frameworks deployed across multi-facility networks.' },
    { icon: Activity, title: 'Specialty Hospitals', description: 'Targeted logistics for oncology, focusing on hazardous and trace chemotherapy waste.' },
    { icon: Scissors, title: 'Surgical Centers', description: 'Optimized surgical tray management and secure collection of high-volume sharps and infectious waste.' },
    { icon: HeartPulse, title: 'Cardiology Facilities', description: 'Precision supply chain support for implants, catheters, and critical-care medical devices.' },
    { icon: Network, title: 'Outpatient Networks', description: 'Flexible pickup schedules and distributed inventory management for satellite clinics.' },
    { icon: Microscope, title: 'Integrated Clinical Facilities', description: 'Unified data platforms integrating logistics for diagnostic labs and patient care units.' },
    { icon: Warehouse, title: 'Central Distribution Hubs', description: 'Hospital-grade GDP compliance, temperature zoning, and high-velocity order picking.' },
];

const HospitalsHealthSystemsIndustries = () => {
    return (
        <section className="hospitals-industries bg-white dark:bg-black !py-0">
            <div className="hospitals-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="hospitals-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="hospitals-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="hospitals-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Healthcare Networks We Serve
                    </h2>
                    <p className="hospitals-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our solutions are tailored to meet the operational complexity, patient volume, and regulatory requirements of every facility type.
                    </p>
                </div>

                <div className="hospitals-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="hospitals-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="hospitals-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="hospitals-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="hospitals-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HospitalsHealthSystemsIndustries;

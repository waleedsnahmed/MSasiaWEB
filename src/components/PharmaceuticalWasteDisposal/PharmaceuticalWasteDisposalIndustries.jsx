import React from 'react';
import { Hospital, Cross, Building2, Beaker, Pill, Dna, Briefcase, Syringe } from 'lucide-react';

const industries = [
    { icon: Hospital, title: 'Hospitals & Medical Centers', description: 'Comprehensive waste management for complex, high-volume healthcare facilities, including trace and bulk chemo streams.' },
    { icon: Cross, title: 'Pharmacies & Retail Clinics', description: 'Secure, scheduled pickup and destruction of expired, recalled, or patient-returned over-the-counter and prescription medications.' },
    { icon: Building2, title: 'Pharmaceutical Manufacturers', description: 'Bulk disposal and secure destruction of manufacturing rejects, QA/QC samples, and off-spec raw materials to protect brand integrity.' },
    { icon: Syringe, title: 'Veterinary Clinics', description: 'Specialized collection for expired animal medications, vaccines, and controlled substances used in veterinary medicine.' },
    { icon: Beaker, title: 'Research & Testing Labs', description: 'Compliant disposal of pharmaceutical compounds, reagents, and contaminated test materials generated during R&D.' },
    { icon: Dna, title: 'Dental Clinics', description: 'Management of anesthetics, antibiotics, and amalgam-contaminated pharmaceutical waste specific to dental practices.' },
    { icon: Briefcase, title: 'Long-Term Care Facilities', description: 'Safe removal of leftover or expired resident medications, ensuring nursing homes remain compliant and secure.' },
    { icon: Pill, title: 'Government Health Agencies', description: 'Large-scale drug take-back programs and secure disposal services for law enforcement and municipal health departments.' },
];

const PharmaceuticalWasteDisposalIndustries = () => {
    return (
        <section className="pharma-industries bg-white dark:bg-black !py-0">
            <div className="pharma-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="pharma-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="pharma-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="pharma-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Industries We Serve
                    </h2>
                    <p className="pharma-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Specialized Solutions Across the Healthcare Spectrum.
                    </p>
                </div>

                <div className="pharma-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="pharma-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="pharma-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="pharma-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="pharma-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PharmaceuticalWasteDisposalIndustries;

import React from 'react';
import { Hospital, Beaker, Building2, Cross, GraduationCap, Syringe, Dna, Activity } from 'lucide-react';

const industries = [
    { icon: Hospital, title: 'Hospitals & Multi-Specialty Centers', description: 'Centralized waste management and infection control integration for large facilities with multiple departments.' },
    { icon: Beaker, title: 'Laboratories & Research Facilities', description: 'Compliant disposal of diagnostic waste, lab samples, reagents, and chemicals under strict biosafety levels.' },
    { icon: Building2, title: 'Pharmaceutical Manufacturers', description: 'Secure management of cytotoxic waste, chemical-contaminated materials, and manufacturing rejects.' },
    { icon: Cross, title: 'Veterinary Clinics', description: 'Special protocols for animal anatomical waste, veterinary medicines, and sharp instruments used in animal care.' },
    { icon: GraduationCap, title: 'Institutional Healthcare Units', description: 'Reliable collection and recycling programs tailored for government health agencies and educational medical institutions.' },
    { icon: Syringe, title: 'Clinics & Diagnostic Centers', description: 'Cost-effective solutions and specialized sharps management programs for standalone facilities and injection clinics.' },
    { icon: Dna, title: 'Dental Practices', description: 'Specific compliance support for the management of dental needles, blades, and chemical waste like developers.' },
    { icon: Activity, title: 'Blood Banks & Dialysis Centers', description: 'Specialized handling protocols for blood-related waste, dialysis materials, and high-volume sharps management.' },
];

const RegulatedMedicalWasteIndustries = () => {
    return (
        <section className="regulated-industries bg-white dark:bg-black !py-0">
            <div className="regulated-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="regulated-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="regulated-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="regulated-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Healthcare Facility-Specific Solutions
                    </h2>
                    <p className="regulated-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Tailored regulated medical waste solutions for diverse healthcare and research sectors across India.
                    </p>
                </div>

                <div className="regulated-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="regulated-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="regulated-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="regulated-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="regulated-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RegulatedMedicalWasteIndustries;

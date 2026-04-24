import React from 'react';
import { Hospital, Cross, ShieldAlert, HeartPulse, Home, Syringe, FlaskConical, Users } from 'lucide-react';

const industries = [
    { icon: Hospital, title: 'Hospitals & Large Facilities', description: 'Full-service contracts with centralized tracking and bulk containers for major healthcare centers.' },
    { icon: Cross, title: 'Clinics & Small Hospitals', description: 'Scheduled pickup services and standard containers ensuring cost-effective compliance.' },
    { icon: ShieldAlert, title: 'Dental & Veterinary Practices', description: 'Specialized pickups catering to unique sharps waste like anesthetic carpules and biopsy needles.' },
    { icon: HeartPulse, title: 'Pharmacies & Collection Points', description: 'Community drop-off kiosks and take-back boxes to support EPR and community safety.' },
    { icon: Home, title: 'Home Healthcare Users', description: 'Convenient mail-back or pharmacy return programs for diabetic and hormone therapy patients.' },
    { icon: Syringe, title: 'National Immunization Drives', description: 'Providing and managing safe disposal solutions for mass vaccination campaigns.' },
    { icon: FlaskConical, title: 'Pharmaceutical Companies', description: 'Helping manufacturers manage take-back programs for prefilled pens and syringes.' },
    { icon: Users, title: 'Corporate Wellness Clinics', description: 'Providing secure sharps disposal solutions for employee wellness programs involving injections.' },
];

const SharpsDisposalIndustries = () => {
    return (
        <section className="sharps-industries bg-white dark:bg-black !py-0">
            <div className="sharps-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="sharps-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="sharps-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="sharps-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Service Tiers for Different Clients
                    </h2>
                    <p className="sharps-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Tailored solutions from major healthcare networks down to individual household users.
                    </p>
                </div>

                <div className="sharps-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="sharps-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="sharps-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="sharps-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="sharps-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SharpsDisposalIndustries;

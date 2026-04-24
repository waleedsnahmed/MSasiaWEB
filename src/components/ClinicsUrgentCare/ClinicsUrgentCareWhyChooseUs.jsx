import React from 'react';
import { ShieldAlert, Scale, Recycle, BarChart3 } from 'lucide-react';

const whyPoints = [
    {
        icon: BarChart3,
        title: 'Volume and Variety of Waste',
        description: 'From sharps and biohazard materials to pharmaceutical and chemical waste, clinics must manage diverse streams safely, often dealing with rapid patient turnover and limited physical storage space.',
    },
    {
        icon: ShieldAlert,
        title: 'High Infection Risk',
        description: 'Improper disposal of contaminated materials can result in disease transmission to staff, patients, and the community. Strict infection control standards are essential in fast-paced urgent care settings.',
    },
    {
        icon: Scale,
        title: 'Regulatory Compliance Pressures',
        description: 'Adhering to federal, state, and local regulations for medical and hazardous waste requires specialized knowledge, proper documentation, and continuous readiness for unannounced inspections.',
    },
    {
        icon: Recycle,
        title: 'Environmental Responsibility',
        description: 'Increasing pressure exists to manage waste sustainably and reduce landfill contributions. Hospitals and clinics must implement resource recovery while maintaining strict safety standards.',
    },
];

const ClinicsUrgentCareWhyChooseUs = () => {
    return (
        <section className="clinics-why bg-white dark:bg-black !py-0">
            <div className="clinics-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="clinics-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="clinics-why__label text-[#47622A] dark:text-[#799851] uppercase">Challenges</h6>
                    <h2 className="clinics-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Unique Challenges in Clinic Waste Management
                    </h2>
                    <p className="clinics-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Clinics and urgent care centers encounter distinct challenges that differ significantly from larger hospital settings. <br />
                        Improper handling can lead to serious health risks, environmental contamination, and legal liabilities.
                    </p>
                </div>

                <div className="clinics-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group clinics-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="clinics-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="clinics-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="clinics-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="clinics-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="clinics-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="clinics-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="clinics-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="clinics-why__cta-strong block text-white font-bold">MS Asia Enterprises provides tailored solutions.</h4>
                            <p className="font-semibold text-white/90">We address these challenges through intelligent logistics, space-optimized containers, and staff training programs that transform waste management into a seamless component of clinical excellence.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicsUrgentCareWhyChooseUs;

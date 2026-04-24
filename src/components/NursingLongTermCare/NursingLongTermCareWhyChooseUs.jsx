import React from 'react';
import { Shield, FileCheck, Layers, Activity } from 'lucide-react';

const whyPoints = [
    {
        icon: Layers,
        title: 'High RMW Volume & Infection Control',
        description: 'The continuous generation of infectious waste, such as blood-soiled dressings, PPE, and incontinence products, necessitates frequent collection. Improper segregation risks serious infection transmission among vulnerable residents.',
    },
    {
        icon: Activity,
        title: 'Sharps Management & Injury Risk',
        description: 'Frequent use of diabetes care sharps, including insulin pens and glucometer lancets by both staff and residents, drastically increases the risk of accidental needle-stick injuries if not contained securely.',
    },
    {
        icon: Shield,
        title: 'Pharmaceutical & Chemical Waste',
        description: 'LTCFs manage high volumes of expired or unused medications, including controlled substances, alongside harsh cleaning chemicals. Improper disposal can lead to environmental contamination or illegal diversion.',
    },
    {
        icon: FileCheck,
        title: 'Operational Space & Compliance',
        description: 'Waste handling must integrate seamlessly with daily care routines without obstructing limited storage space. Additionally, strict adherence to OSHA, EPA, and state health department rules is mandatory to avoid severe fines.',
    },
];

const NursingLongTermCareWhyChooseUs = () => {
    return (
        <section className="nursing-why bg-white dark:bg-black !py-0">
            <div className="nursing-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="nursing-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="nursing-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="nursing-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Addressing the Unique Challenges of Residential Care
                    </h2>
                    <p className="nursing-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Nursing and long-term care facilities face a distinct set of waste management challenges. <br />
                        Managing continuous medical needs in a residential setting requires discreet, compliant precision.
                    </p>
                </div>

                <div className="nursing-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group nursing-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="nursing-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="nursing-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="nursing-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="nursing-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="nursing-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="nursing-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="nursing-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="nursing-why__cta-strong block text-white font-bold">MS Asia Enterprises is the definitive solution.</h4>
                            <p className="font-semibold text-white/90">We provide discreet, color-coded segregation protocols and scheduled pickups tailored to your facility's rhythm, ensuring the safety of your residents and complete regulatory peace of mind.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NursingLongTermCareWhyChooseUs;

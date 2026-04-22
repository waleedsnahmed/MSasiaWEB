import React from 'react';
import { Shield, FileCheck, ShieldAlert, HeartPulse } from 'lucide-react';

const whyPoints = [
    {
        icon: ShieldAlert,
        title: 'Zero Tolerance for Cross-Contamination',
        description: 'Implementing rigorous checks to ensure regulated medical waste is not mixed with general waste. Mixing non-RMW with RMW unnecessarily drives up disposal costs and increases contamination risks.',
    },
    {
        icon: FileCheck,
        title: 'Traceability (Cradle-to-Grave)',
        description: 'Providing a complete, auditable record and manifests for every pound of waste from your facility to its final destruction, ensuring flawless documentation for regulatory bodies.',
    },
    {
        icon: HeartPulse,
        title: 'Uncompromising Worker Safety',
        description: 'Strict adherence to OSHA Bloodborne Pathogens (BBP) standards, providing safe sharps handling, personal protective equipment, and spill mitigation training for your staff.',
    },
    {
        icon: Shield,
        title: 'Stringent Regulatory Adherence',
        description: 'Regulated Medical Waste is governed by multiple agencies (OSHA, DOT, EPA, SPCBs). We ensure full compliance, protecting your facility from operational shutdowns and severe financial penalties.',
    },
];

const RegulatedMedicalWasteWhyChooseUs = () => {
    return (
        <section className="regulated-why bg-white dark:bg-black !py-0">
            <div className="regulated-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="regulated-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="regulated-why__label text-[#47622A] dark:text-[#799851] uppercase">Understanding RMW</h6>
                    <h2 className="regulated-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Why Proper RMW Management Matters
                    </h2>
                    <p className="regulated-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Improper management of regulated medical waste can result in infection outbreaks, environmental hazards, and legal penalties. <br />
                        Safe, compliant handling and disposal protect public health and the environment.
                    </p>
                </div>

                <div className="regulated-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group regulated-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="regulated-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="regulated-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="regulated-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="regulated-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="regulated-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="regulated-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="regulated-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="regulated-why__cta-strong block text-white font-bold">Partner with MS Asia Enterprises</h4>
                            <p className="font-semibold text-white/90">We provide end-to-end regulated medical waste services, from collection to final disposal. Our approach prioritizes safety, compliance, and environmental responsibility, giving healthcare facilities complete peace of mind.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegulatedMedicalWasteWhyChooseUs;

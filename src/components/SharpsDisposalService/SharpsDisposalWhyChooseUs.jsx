import React from 'react';
import { ShieldAlert, Users, Scale, FileCheck } from 'lucide-react';

const whyPoints = [
    {
        icon: ShieldAlert,
        title: 'Needlestick Injuries & Infections',
        description: 'An estimated 3 million needlestick injuries occur annually among healthcare workers in India, with high risks of transmitting bloodborne pathogens like HIV, Hepatitis B, and Hepatitis C.',
    },
    {
        icon: Users,
        title: 'Community Exposure Risks',
        description: 'Improperly discarded sharps in public spaces, garbage dumps, or recycling streams pose direct, severe risks to sanitation workers, waste pickers, and the general public, especially children.',
    },
    {
        icon: Scale,
        title: 'Legal Liability & Penalties',
        description: 'Facilities and individuals can face severe penalties under biomedical waste rules for improper sharps disposal. Unsecured containers can also be tampered with for illicit drug use or resale.',
    },
    {
        icon: FileCheck,
        title: 'Strict Regulatory Framework',
        description: 'The Biomedical Waste Management Rules, 2016 classifies sharps under Category 4, mandating specific puncture-proof, tamper-proof containers and advanced treatment like autoclaving followed by mutilation.',
    },
];

const SharpsDisposalWhyChooseUs = () => {
    return (
        <section className="sharps-why bg-white dark:bg-black !py-0">
            <div className="sharps-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="sharps-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="sharps-why__label text-[#47622A] dark:text-[#799851] uppercase">Understanding The Hazards</h6>
                    <h2 className="sharps-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Critical Importance of Professional Sharps Management
                    </h2>
                    <p className="sharps-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Sharps waste is uniquely dangerous and requires specialized handling protocols that differ from other biomedical waste streams. <br />
                        Improper disposal leads to significant public health and safety risks.
                    </p>
                </div>

                <div className="sharps-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group sharps-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="sharps-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="sharps-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="sharps-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="sharps-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="sharps-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="sharps-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="sharps-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="sharps-why__cta-strong block text-white font-bold">MS Asia Enterprises provides the specialized solution.</h4>
                            <p className="font-semibold text-white/90">We address these challenges through a dedicated sharps management ecosystem—from purpose-designed containers and secure collection to guaranteed destruction and digital tracking—ensuring safety and compliance at every step.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SharpsDisposalWhyChooseUs;

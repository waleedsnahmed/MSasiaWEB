import React from 'react';
import { Droplet, Activity, FlaskConical, Scale } from 'lucide-react';

const whyPoints = [
    {
        icon: Droplet,
        title: 'Amalgam & Mercury Waste',
        description: 'Mercury-containing dental amalgam requires careful collection, handling, and recycling to prevent environmental contamination, as required by EPA rules.',
    },
    {
        icon: Activity,
        title: 'Sharps & Injury Risk',
        description: 'High volume of needles, scalers, and anesthetic carpules require specific puncture-proof containment to minimize the risk of needle-stick injuries and infection.',
    },
    {
        icon: FlaskConical,
        title: 'Chemical & Pharmaceutical Residues',
        description: 'Disinfectants, solvents, cleaning agents, and expired medications must be treated as hazardous waste to prevent contamination and illegal diversion.',
    },
    {
        icon: Scale,
        title: 'Space & Regulatory Complexity',
        description: 'Clinics often have small treatment rooms and storage areas. Solutions must be compact while adhering to strict OSHA, EPA, and state board regulations.',
    },
];

const DentalVeterinaryClinicsWhyChooseUs = () => {
    return (
        <section className="dental-why bg-white dark:bg-black !py-0">
            <div className="dental-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="dental-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="dental-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="dental-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Addressing the Unique Challenges of Clinical Waste
                    </h2>
                    <p className="dental-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Clinics face one of the most unique and challenging regulatory landscapes in healthcare.<br />
                        We provide discreet, compliant precision for high-risk waste.
                    </p>
                </div>

                <div className="dental-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group dental-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="dental-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="dental-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="dental-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="dental-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="dental-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="dental-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="dental-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="dental-why__cta-strong block text-white font-bold">MS Asia Enterprises provides end-to-end solutions.</h4>
                            <p className="font-semibold text-white/90">We offer a tailored suite of services covering every waste stream generated in your practice, ensuring safety, regulatory compliance, and sustainability without obstructing limited storage space.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentalVeterinaryClinicsWhyChooseUs;

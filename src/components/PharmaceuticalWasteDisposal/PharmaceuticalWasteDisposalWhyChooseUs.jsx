import React from 'react';
import { ShieldAlert, Droplets, UserCheck, Scale } from 'lucide-react';

const whyPoints = [
    {
        icon: Scale,
        title: 'Rigorous Regulatory Compliance',
        description: 'Pharmaceutical waste is governed by strict local and federal regulations (EPA, DEA, CPCB). We ensure 100% compliance, protecting your facility from severe penalties and operational disruptions.',
    },
    {
        icon: ShieldAlert,
        title: 'Preventing Drug Diversion',
        description: 'Improper disposal of controlled substances or expired medications creates opportunities for theft and black-market diversion. Our secure chain-of-custody and witnessed destruction protocols eliminate this risk.',
    },
    {
        icon: Droplets,
        title: 'Protecting Water Supplies',
        description: 'Flushing medications introduces active pharmaceutical ingredients (APIs) into municipal water systems and ecosystems. Our high-temperature incineration methods guarantee complete environmental neutralization.',
    },
    {
        icon: UserCheck,
        title: 'Comprehensive Liability Reduction',
        description: 'From the moment waste leaves your facility to its final destruction, we assume the burden of liability. We provide complete Certificates of Destruction for flawless, defensible audit trails.',
    },
];

const PharmaceuticalWasteDisposalWhyChooseUs = () => {
    return (
        <section className="pharma-why bg-white dark:bg-black !py-0">
            <div className="pharma-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="pharma-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="pharma-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="pharma-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Critical Importance of Pharmaceutical Waste Management
                    </h2>
                    <p className="pharma-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Managing pharmaceutical waste requires precision, security, and uncompromising regulatory adherence. <br />
                        We provide an end-to-end framework to neutralize risk and ensure the absolute safety of your community.
                    </p>
                </div>

                <div className="pharma-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group pharma-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="pharma-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="pharma-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#47622A]/20">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#47622A] dark:group-hover:text-[#799851]" strokeWidth={2} />
                                </div>
                                <h4 className="pharma-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="pharma-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="pharma-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="pharma-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="pharma-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="pharma-why__cta-strong block text-white font-bold">MS Asia Enterprises is your certified compliance partner.</h4>
                            <p className="font-semibold text-white/90">We provide technology-driven solutions backed by strict regulatory support, ensuring your facility remains compliant, safeguards its staff, and protects surrounding communities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PharmaceuticalWasteDisposalWhyChooseUs;

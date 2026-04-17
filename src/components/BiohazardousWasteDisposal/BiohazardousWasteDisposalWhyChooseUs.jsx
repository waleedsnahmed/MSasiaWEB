import React from 'react';
import { ShieldAlert, FileWarning, Recycle, HeartPulse } from 'lucide-react';

const whyPoints = [
    {
        icon: ShieldAlert,
        title: 'Disease Transmission & Public Health',
        description: 'Biohazardous waste contains dangerous pathogens. Improper handling can spread HIV, Hepatitis B & C, tuberculosis, and other bloodborne and airborne diseases to healthcare workers and the general public.',
    },
    {
        icon: FileWarning,
        title: 'Severe Legal & Financial Liability',
        description: 'Improper disposal violates the Biomedical Waste Management Rules, 2016. Non-compliance results in severe penalties, potential facility closure, and criminal liability under the Environment (Protection) Act, 1986.',
    },
    {
        icon: Recycle,
        title: 'Environmental & Ecological Damage',
        description: 'Dumping chemical and pharmaceutical residues contaminates water sources and soil. Incineration without proper emission controls releases harmful dioxins and heavy metals into the atmosphere.',
    },
    {
        icon: HeartPulse,
        title: 'Community Safety & Antibiotic Resistance',
        description: 'Informal recycling of syringes creates direct exposure risks in communities. Disposal of unused antibiotics and contaminated materials directly contributes to the dangerous spread of antibiotic-resistant bacteria.',
    },
];

const BiohazardousWasteDisposalWhyChooseUs = () => {
    return (
        <section className="biohaz-why bg-white dark:bg-black !py-0">
            <div className="biohaz-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="biohaz-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="biohaz-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="biohaz-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Critical Importance of Professional Waste Management
                    </h2>
                    <p className="biohaz-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Biohazardous medical waste is one of the most rigorously regulated waste streams globally. <br />
                        India generates approximately 600 metric tons of biomedical waste daily—safely managing it is a critical public health imperative.
                    </p>
                </div>

                <div className="biohaz-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group biohaz-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="biohaz-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="biohaz-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="biohaz-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="biohaz-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="biohaz-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="biohaz-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="biohaz-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="biohaz-why__cta-strong block text-white font-bold">MS Asia Enterprises is your certified compliance partner.</h4>
                            <p className="font-semibold text-white/90">We provide technology-driven solutions backed by strict regulatory support, ensuring your facility remains compliant, safeguards its staff, and protects surrounding communities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BiohazardousWasteDisposalWhyChooseUs;

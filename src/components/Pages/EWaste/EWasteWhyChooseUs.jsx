import React from 'react';
import { Shield, FileCheck, Zap, TrendingUp } from 'lucide-react';

const whyPoints = [
    {
        icon: Shield,
        title: 'Data Security Catastrophe',
        description: 'Every decommissioned hard drive, server, or phone contains sensitive data—financial records, customer PII, intellectual property. Informal disposal is a leading cause of data breaches.',
    },
    {
        icon: FileCheck,
        title: 'Legal & Financial Repercussions',
        description: 'Non-compliance with the E-Waste Rules, governed by the Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs), can lead to severe penalties, operational shutdowns, and reputational damage.',
    },
    {
        icon: Zap,
        title: 'Environmental Liability',
        description: 'Electronics contain hazardous substances like lead, mercury, cadmium, and brominated flame retardants. When dumped in landfills, these toxins leach into soil and groundwater, creating long-term ecological and public health issues.',
    },
    {
        icon: TrendingUp,
        title: 'Lost Resource Value',
        description: 'E-waste is a rich urban mine. Circuit boards contain gold, silver, palladium, and copper. Disposing of them as trash means throwing away valuable, finite resources that could re-enter the manufacturing cycle.',
    },
];

const EWasteWhyChooseUs = () => {
    return (
        <section className="ewaste-why bg-white dark:bg-black">
            <div className="ewaste-why__container max-w-screen-2xl mx-auto px-0 flex flex-col gap-[48px]">
                <div className="ewaste-why__header text-center flex flex-col items-center gap-4 scroll-reveal">
                    <p className="ewaste-why__label text-[#47622A] dark:text-[#799851] font-bold text-sm tracking-widest uppercase ">Why Choose Us</p>
                    <h2 className="ewaste-why__heading text-4xl md:text-5xl font-bold  dark:text-white text-gray-900 leading-tight">
                        Why Proper Electronics <br className="hidden md:block" />
                        <span className="ewaste-why__heading-accent !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">Management is Non-Negotiable</span>
                    </h2>
                    <p className="ewaste-why__subtitle text-lg dark:text-gray-400 text-gray-600 leading-relaxed max-w-none">
                        Electronic waste is India's fastest-growing waste stream, with over 3.2 million metric tons generated annually. <br />
                        The informal sector handles a significant portion, leading to dangerous practices.
                    </p>
                </div>

                <div className="ewaste-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group ewaste-why__card flex flex-col gap-4 scroll-reveal p-6 lg:p-8 rounded-3xl dark:bg-[#1a1a1a] bg-white border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="ewaste-why__card-header flex items-center gap-4">
                                <div className="ewaste-why__card-icon-wrap flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h3 className="ewaste-why__card-title text-xl font-bold dark:text-white text-gray-900 leading-tight">
                                    {point.title}
                                </h3>
                            </div>
                            <p className="ewaste-why__card-description dark:text-gray-400 text-gray-600 leading-relaxed text-sm md:text-base pl-1">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="ewaste-why__cta-wrapper scroll-reveal">
                    <div className="ewaste-why__cta-banner p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] text-white relative overflow-hidden">
                        <p className="ewaste-why__cta-text text-lg lg:text-xl leading-relaxed relative z-10 font-medium">
                            <strong className="ewaste-why__cta-strong text-xl lg:text-2xl block ">MS Asia Enterprises is the definitive solution.</strong>
                            We close the loop with a formal, auditable process that protects your business, recovers value, and
                            ensures every component is handled according to the highest environmental and data
                            security standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EWasteWhyChooseUs;

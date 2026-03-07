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
        <section className="ewaste-why bg-gray-50 dark:bg-[#111]">
            <div className="ewaste-why__container max-w-screen-2xl mx-auto flex flex-col gap-12 lg:gap-16">
                <div className="ewaste-why__header text-center flex flex-col items-center gap-4 py-4 scroll-reveal">
                    <p className="ewaste-why__label text-[#47622A] dark:text-[#799851] font-bold text-sm tracking-widest uppercase ">Why Choose Us</p>
                    <h2 className="ewaste-why__heading text-4xl md:text-5xl font-bold  dark:text-white text-gray-900 leading-tight">
                        Why Proper Electronics <br className="hidden md:block" />
                        <span className="ewaste-why__heading-accent !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">Management is Non-Negotiable</span>
                    </h2>
                    <p className="ewaste-why__subtitle text-lg dark:text-gray-400 text-gray-600 max-w-3xl leading-relaxed ">
                        Electronic waste is India's fastest-growing waste stream, with over 3.2 million
                        metric tons generated annually. The informal sector handles a significant portion,
                        leading to dangerous practices.
                    </p>
                </div>

                <div className="ewaste-why__grid grid md:grid-cols-2 gap-6 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="ewaste-why__card flex flex-col gap-4 scroll-reveal p-6 lg:p-8 rounded-3xl dark:bg-[#1a1a1a] bg-white border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="ewaste-why__card-icon-wrap inline-flex p-3 rounded-xl bg-[#47622A]/10 dark:bg-[#799851]/10 ">
                                <point.icon className="w-6 h-6 text-[#47622A] dark:text-[#799851]" strokeWidth={2} />
                            </div>
                            <h3 className="ewaste-why__card-title text-xl font-bold  dark:text-white text-gray-900">
                                {point.title}
                            </h3>
                            <p className="ewaste-why__card-description dark:text-gray-400 text-gray-600 leading-relaxed text-sm md:text-base">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="ewaste-why__cta-wrapper scroll-reveal">
                    <div className="ewaste-why__cta-banner p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] text-white relative overflow-hidden">
                        <div className="ewaste-why__cta-glow absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
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

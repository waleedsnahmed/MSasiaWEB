import React from 'react';
import { Shield, FileCheck, TrendingUp, Zap, CheckCircle2, Users } from 'lucide-react';

const benefits = [
    {
        icon: Shield,
        title: 'Data Risk Elimination',
        description: 'Complete eradication of data breach risks from retired assets.',
    },
    {
        icon: FileCheck,
        title: 'Regulatory Peace of Mind',
        description: 'Assured compliance with E-Waste Rules, 2022, and other applicable laws.',
    },
    {
        icon: TrendingUp,
        title: 'Enhanced ESG Profile',
        description: 'Robust documentation to strengthen your sustainability reports and brand reputation as a responsible corporate citizen.',
    },
    {
        icon: Zap,
        title: 'Resource Conservation',
        description: "Recycling metals uses 70-90% less energy than virgin mining. You directly reduce India's resource import burden.",
    },
    {
        icon: CheckCircle2,
        title: 'Toxin Prevention',
        description: 'Responsible diversion of hazardous materials protects local communities and ecosystems.',
    },
    {
        icon: Users,
        title: 'Operational Efficiency',
        description: 'Clear storage space, eliminate administrative burden, and streamline asset retirement with a single, accountable partner.',
    },
];

const EWasteBenefits = () => {
    return (
        <section className="ewaste-benefits bg-white dark:bg-black">
            <div className="ewaste-benefits__container max-w-screen-2xl mx-auto px-0 flex flex-col gap-12 lg:gap-16">
                <div className="ewaste-benefits__header text-center flex flex-col items-center gap-4 scroll-reveal">
                    <p className="ewaste-benefits__label text-[#5a7638] dark:text-[#799851] font-bold text-xs tracking-widest uppercase ">Why Partner</p>
                    <h2 className="ewaste-benefits__heading text-4xl md:text-5xl font-extrabold  dark:text-white text-gray-900 leading-tight">
                        Why Choose <span className="ewaste-benefits__heading-accent text-[#5a7638] dark:text-[#799851]">MS Asia Enterprises</span>
                    </h2>
                    <p className="ewaste-benefits__subtitle text-lg md:text-xl dark:text-gray-400 text-gray-600 max-w-none leading-relaxed">
                        Leading Indian and multinational companies trust us for secure, compliant, and sustainable e-waste management.
                    </p>
                </div>

                <div className="ewaste-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="ewaste-benefits__card scroll-reveal p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="ewaste-benefits__card-icon-wrap w-14 h-14 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024]  flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                            </div>
                            <h3 className="ewaste-benefits__card-title text-lg font-bold  dark:text-white text-gray-900 leading-snug">
                                {benefit.title}
                            </h3>
                            <p className="ewaste-benefits__card-description dark:text-gray-400 text-gray-500 text-[14px] leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EWasteBenefits;

import React from 'react';
import { Flame, ShieldCheck, Cpu, Maximize, Search, BarChart2 } from 'lucide-react';

const benefits = [
    {
        icon: Flame,
        title: 'Safety Hazard Elimination',
        description: 'Scheduled, bulk collections thoroughly eliminate the devastating fire and pest hazards strictly associated with vulnerable rubber stockpiling.',
    },
    {
        icon: ShieldCheck,
        title: 'Regulatory & EPR Compliance',
        description: 'Complete assurance of regulatory adherence to complex ELT and Extended Producer Responsibility mandates, providing fully audit-ready documentation.',
    },
    {
        icon: Cpu,
        title: 'Technology-Agnostic Processing',
        description: 'We scientifically select the optimal recycling pathway (TDF vs. Pyrolysis vs. Ambient Grinding) based entirely on material integrity and market volume.',
    },
    {
        icon: Maximize,
        title: 'Operational Space Efficiency',
        description: 'Bulky tires occupy massive operational space. We mobilize pan-India logistics to regularly clear your premises, freeing up critically valuable square footage.',
    },
    {
        icon: Search,
        title: 'Traceable Transparency',
        description: 'Digital tracking documents the absolute chain-of-custody from collection to final high-temperature recycling with irrefutable proof for stakeholders.',
    },
    {
        icon: BarChart2,
        title: 'Sustainable ESG Metrics',
        description: 'Guaranteed 100% landfill diversion paired with verified carbon replacement metrics via recovered oil and fuel boosts your CSR/ESG reporting natively.',
    },
];

const RubberTyreBenefits = () => {
    return (
        <section className="rubber-tyre-benefits bg-white dark:bg-black !py-0">
            <div className="rubber-tyre-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="rubber-tyre-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="rubber-tyre-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="rubber-tyre-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The MS Asia Enterprises Advantage
                    </h2>
                    <p className="rubber-tyre-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Our integrated operational capabilities ensure complete environmental integrity driving India's domestic circular economy.
                    </p>
                </div>

                <div className="rubber-tyre-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`rubber-tyre-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="rubber-tyre-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="rubber-tyre-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="rubber-tyre-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RubberTyreBenefits;

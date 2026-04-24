import React from 'react';
import { Shield, Wallet, Clock, FileCheck, Recycle, Link } from 'lucide-react';

const benefits = [
    {
        icon: Shield,
        title: 'Risk Mitigation',
        description: 'Dramatically reduces infectious risk (HAIs) and legal liability through strict regulatory compliance and precise waste segregation.',
    },
    {
        icon: Wallet,
        title: 'Cost Optimization',
        description: 'Achieve a 10-20% reduction in total supply spend and a 25-40% reduction in inventory carrying costs through intelligent forecasting.',
    },
    {
        icon: Clock,
        title: 'Operational Efficiency',
        description: 'Ensure >99% line fill rates and a 20-30% reduction in nursing time spent on supply tasks, streamlining workflows.',
    },
    {
        icon: FileCheck,
        title: 'Audit Readiness',
        description: 'Provides continuous, centralized tracking and documentation required for seamless federal, state, and corporate compliance checks.',
    },
    {
        icon: Recycle,
        title: 'Sustainable Operations',
        description: 'Reduces landfill contributions and optimizes transport routes, significantly lowering the environmental impact of your operations.',
    },
    {
        icon: Link,
        title: 'Supply Chain Resilience',
        description: 'Reduces vulnerability to global shortages and disruptions through integrated vendor-managed inventory and advanced demand sensing.',
    },
];

const HospitalsHealthSystemsBenefits = () => {
    return (
        <section className="hospitals-benefits bg-white dark:bg-black !py-0">
            <div className="hospitals-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="hospitals-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="hospitals-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="hospitals-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Partnership Benefits & Value Proposition
                    </h2>
                    <p className="hospitals-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Aligning logistical precision with clinical excellence to protect your margin and empower your staff.
                    </p>
                </div>

                <div className="hospitals-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="hospitals-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="hospitals-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="hospitals-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="hospitals-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HospitalsHealthSystemsBenefits;

import React from 'react';
import { TrendingUp, ShieldCheck, Leaf, ActivitySquare, LockKeyhole, FileCheck } from 'lucide-react';

const benefits = [
    {
        icon: TrendingUp,
        title: 'De-risking Capital Projects',
        description: 'We assume the environmental liability for material management, keeping your modernization projects on schedule and on budget.',
    },
    {
        icon: ShieldCheck,
        title: 'Optimizing AROs',
        description: 'Provide meticulous data to accurately execute Asset Retirement Obligations, ensuring financial reserves are used efficiently.',
    },
    {
        icon: Leaf,
        title: 'Enhancing ESG Performance',
        description: 'High-recovery recycling reduces Scope 3 emissions, supplying key metrics for sustainability reporting.',
    },
    {
        icon: ActivitySquare,
        title: 'Uninterrupted Operations',
        description: 'Scheduled services for ongoing O&M waste prevent compliance issues at substations, directly supporting grid reliability.',
    },
    {
        icon: LockKeyhole,
        title: 'Protecting Reputation',
        description: 'Our zero-compliance-failure track record ensures that material stewardship protects brand value built on public trust.',
    },
    {
        icon: FileCheck,
        title: 'Transparent Settlement',
        description: 'Final invoicing is backed by highly transparent pricing tied directly to published commodity indices for each material grade.',
    },
];

const UtilitiesEnergyBenefits = () => {
    return (
        <section className="utilities-benefits bg-white dark:bg-black !py-0">
            <div className="utilities-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="utilities-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="utilities-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="utilities-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The Strategic Value Delivered to Utility Partners
                    </h2>
                    <p className="utilities-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Our engagement delivers outcomes that directly support corporate strategic goals.
                    </p>
                </div>

                <div className="utilities-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="utilities-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="utilities-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="utilities-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="utilities-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UtilitiesEnergyBenefits;

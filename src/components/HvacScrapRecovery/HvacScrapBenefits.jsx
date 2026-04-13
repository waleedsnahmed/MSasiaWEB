import React from 'react';
import { FileCheck, TrendingUp, Leaf, ShieldCheck, Globe, Clock } from 'lucide-react';

const benefits = [
    {
        icon: FileCheck,
        title: 'Regulatory Compliance Guarantee',
        description: 'Our stringent certification under national ODS Rules and authorization under precise E-Waste Rules completely protects your operations from legal liabilities.',
    },
    {
        icon: TrendingUp,
        title: 'Maximized Financial Return',
        description: 'Instead of crushing units indiscriminately, we isolate copper, aluminium, and steel into pure high-yield streams, heavily boosting your final scrap payouts.',
    },
    {
        icon: Leaf,
        title: 'True Environmental Stewardship',
        description: 'We guarantee ZERO intentional atmospheric venting. By strictly capturing potent GHG refrigerants, our capture rate vastly outperforms the informal sector.',
    },
    {
        icon: ShieldCheck,
        title: 'Safe Professional Engineering',
        description: 'Our clearance crews are deeply trained in high-voltage electrical safety, harnessed height maneuvers, and volatile refrigerant handling logistics.',
    },
    {
        icon: Globe,
        title: 'National Service Network',
        description: 'Operating out of massive urban centers, our teams scale quickly to serve huge commercial demolition, hospitality renovations, and heavy industrial nodes across India.',
    },
    {
        icon: Clock,
        title: 'Operational Efficiency',
        description: 'Time is money. The integration of hydra cranes and systematic structural breakdowns ensures highly rapid removal with genuinely minimal interruption to your facilities.',
    },
];

const HvacScrapBenefits = () => {
    return (
        <section className="ewaste-benefits bg-white dark:bg-black !py-0">
            <div className="ewaste-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">The MS Asia Advantage</h6>
                    <h2 className="ewaste-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Why Companies Choose Us
                    </h2>
                    <p className="ewaste-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Achieving perfect harmony between absolute legal compliance and maximum financial recovery during massive systemic retirements.
                    </p>
                </div>

                <div className="ewaste-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="ewaste-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="ewaste-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="ewaste-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="ewaste-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HvacScrapBenefits;

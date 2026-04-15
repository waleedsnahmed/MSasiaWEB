import React from 'react';
import { Shield, FileCheck, TrendingUp, Zap, CheckCircle2, Users } from 'lucide-react';

const benefits = [
    {
        icon: Scale,
        title: 'Regulatory Compliance',
        description: 'Businesses achieve full regulatory compliance aligned with modern industrial waste sustainability goals.',
    },
    {
        icon: TrendingUp,
        title: 'Operational Efficiency',
        description: 'Enhance operational efficiency by securely disposing of decommissioned or unused heavy machinery.',
    },
    {
        icon: Leaf,
        title: 'Environmental Impact',
        description: 'Significantly minimize environmental impact by adopting eco-friendly scrap management solutions.',
    },
    {
        icon: ShieldCheck,
        title: 'Unlock Hidden Value',
        description: 'Extract and unlock the hidden financial value embedded within industrial and manufacturing equipment.',
    },
    {
        icon: Cpu,
        title: 'Complete Transparency',
        description: 'To ensure complete transparency and accountability, we provide detailed documentation and certification for every project.',
    },
    {
        icon: Globe2,
        title: 'Eco-Friendly Solutions',
        description: 'Our commitment is to deliver reliable, scalable, and eco-friendly solutions matching industry best practices.',
    },
];

const IndustrialMachineryScrapBenefits = () => {
    return (
        <section className="IndustrialMachineryScrap-benefits bg-white dark:bg-black !py-0">
            <div className="IndustrialMachineryScrap-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="IndustrialMachineryScrap-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="IndustrialMachineryScrap-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="IndustrialMachineryScrap-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Why Choose MS Asia Enterprises
                    </h2>
                    <p className="IndustrialMachineryScrap-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Leading Indian and multinational companies trust us for secure, compliant, and sustainable e-waste management.
                    </p>
                </div>

                <div className="IndustrialMachineryScrap-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="IndustrialMachineryScrap-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="IndustrialMachineryScrap-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="IndustrialMachineryScrap-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="IndustrialMachineryScrap-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrialMachineryScrapBenefits;


import React from 'react';
import { FileCheck, ShieldCheck, Leaf, Target, RefreshCw, TrendingDown } from 'lucide-react';

const benefits = [
    {
        icon: FileCheck,
        title: '100% Audit Readiness',
        description: 'With our impeccable digital manifesting and Certificates of Destruction, your facility is always prepared for sudden regulatory audits.',
    },
    {
        icon: ShieldCheck,
        title: 'Zero Drug Diversion',
        description: 'Our closed-loop logistics and witnessed destruction guarantee that expired or recalled medications never enter the black market.',
    },
    {
        icon: Leaf,
        title: 'Environmental Stewardship',
        description: 'We utilize advanced emission-controlled incineration, completely neutralizing active ingredients while protecting municipal water supplies.',
    },
    {
        icon: Target,
        title: 'Enhanced Staff Safety',
        description: 'By providing customized segregation training and color-coded containment, we drastically reduce the risk of accidental exposure.',
    },
    {
        icon: RefreshCw,
        title: 'Streamlined Operations',
        description: 'We handle the entire process—from container supply to final disposal—allowing your clinical staff to focus entirely on patient care.',
    },
    {
        icon: TrendingDown,
        title: 'Reduced Liability & Fines',
        description: 'Transfer your waste liability to us. Our uncompromising compliance framework protects your facility from severe EPA and DEA penalties.',
    },
];

const PharmaceuticalWasteDisposalBenefits = () => {
    return (
        <section className="pharma-benefits bg-white dark:bg-black !py-0">
            <div className="pharma-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="pharma-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="pharma-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">The MS Asia Advantage</h6>
                    <h2 className="pharma-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Strategic Benefits of Proper Disposal
                    </h2>
                    <p className="pharma-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Partnering with us means securing your operations with unmatched industry expertise, rigorous safety protocols, and unwavering environmental commitment.
                    </p>
                </div>

                <div className="pharma-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="pharma-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="pharma-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="pharma-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="pharma-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PharmaceuticalWasteDisposalBenefits;

import React from 'react';
import { DollarSign, Leaf, Zap, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const benefits = [
    {
        icon: DollarSign,
        title: 'Economic Value',
        description: 'Fair and transparent scrap valuation based on real-time market rates, ensuring you get the highest possible returns on your metal assets.',
    },
    {
        icon: Zap,
        title: '95% Energy Efficiency',
        description: 'Recycling aluminium requires only 5% of the energy needed for primary production, drastically reducing your operational environmental footprint.',
    },
    {
        icon: Leaf,
        title: 'Sustainability Goals',
        description: 'Meet institutional sustainability objectives by choosing zero-landfill recycling that reduces raw material dependency and carbon emissions.',
    },
    {
        icon: ShieldCheck,
        title: 'Full Compliance',
        description: 'We adhere strictly to environmental safety norms and waste handling guidelines, providing full documentation to mitigate regulatory risks.',
    },
    {
        icon: Clock,
        title: 'Operational Ease',
        description: 'Professional handling, reliable logistics, and faster turnaround times ensure that your scrap clearance happens without interrupting your core business.',
    },
    {
        icon: CheckCircle2,
        title: 'Reliable Partnership',
        description: 'Whether it is a one-time bulk clearance or regular recurring collections, we provide end-to-end service driven by expertise and transparency.',
    },
];

const AluminiumScrapBenefits = () => {
    return (
        <section className="ewaste-benefits bg-white dark:bg-black !py-0">
            <div className="ewaste-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">The MS Asia Advantage</h6>
                    <h2 className="ewaste-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Why Recycle with MS Asia?
                    </h2>
                    <p className="ewaste-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Combining economic transparency with environmentally sound practices to deliver seamless industrial scrap solutions.
                    </p>
                </div>

                <div className="ewaste-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="ewaste-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
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

export default AluminiumScrapBenefits;

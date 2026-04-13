import React from 'react';
import { ShieldCheck, TrendingUp, Handshake, Leaf, Scale, Move } from 'lucide-react';

const benefits = [
    {
        icon: ShieldCheck,
        title: 'Single-Point Responsibility',
        description: 'We manage the entire lifecycle—from heavy equipment deployment and structural cutting to processing and final mill sale, simplifying your plant waste operations.',
    },
    {
        icon: TrendingUp,
        title: 'Maximized Financial Return',
        description: 'Our industrial processing transforms your mixed scrap into premium ISRI grades, enabling you to share in the high-value upside of mill-ready material.',
    },
    {
        icon: Handshake,
        title: 'Consistent Mill Feedstock',
        description: 'For secondary steel producers and foundries, we provide a massive, reliable supply of specification-grade scrap with tightly controlled chemistry and bulk density.',
    },
    {
        icon: Leaf,
        title: '58% Emissions Reduction',
        description: 'Every ton of steel we recycle saves 1.5 tons of iron ore and 0.5 tons of coal, driving massive greenhouse gas reductions for your corporate ESG reporting.',
    },
    {
        icon: Scale,
        title: 'Transparent Weighbridges',
        description: 'All transactions utilize certified digital weighbridges with market-linked, transparent pricing structures. No guesswork, just audited volume data.',
    },
    {
        icon: Move,
        title: 'Turnkey Site Clearance',
        description: 'Beyond pure scrap collection, we execute massive demolition projects, offering complete site clearance and heavy structural removal with a zero-accident mandate.',
    },
];

const FerrousMetalScrapBenefits = () => {
    return (
        <section className="ewaste-benefits bg-white dark:bg-black !py-0">
            <div className="ewaste-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="ewaste-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The Value Chain Advantage
                    </h2>
                    <p className="ewaste-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Whether you are a heavy manufacturer generating prompt scrap, or a steel mill requiring consistent inputs, we bridge the gap.
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

export default FerrousMetalScrapBenefits;

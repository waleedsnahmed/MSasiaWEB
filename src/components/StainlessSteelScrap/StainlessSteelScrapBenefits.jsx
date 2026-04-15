import React from 'react';
import { ScanLine, TrendingUp, Truck, Magnet, Leaf, CheckCircle } from 'lucide-react';

const benefits = [
    {
        icon: ScanLine,
        title: 'Science-Based XRF Sorting',
        description: 'We are one of the few scrap processors in India investing systematically in handheld XRF for stainless steel. This fundamentally eliminates visual guesswork and guarantees absolute, certifiable grade purity.',
    },
    {
        icon: TrendingUp,
        title: 'Maximized Financial Return',
        description: 'You are definitively paid for exactly what you have. A processed ton of correctly sorted 316 scrap is aggressively paid at the premium 316 price, completely avoiding massively lower mixed-stainless pricing.',
    },
    {
        icon: Truck,
        title: 'Trusted Supplier to Critical Mills',
        description: 'We supply certified, known, consistent structural material. Mills pay massive premiums for highly reliable, uncontaminated feedstock, and we systematically pass that realized value directly back down to generators.',
    },
    {
        icon: Magnet,
        title: 'Magnetic Pre-Sorting Efficiency',
        description: 'Our initial magnetic separation is an extremely fast, ruthlessly effective way to isolate and correctly value massive volumes of 400-series scrap, proactively preventing it from catastrophically degrading 300-series material.',
    },
    {
        icon: Leaf,
        title: 'Sustainable Circulation & Support',
        description: 'Recycling stainless steel meticulously guarantees that highly valuable alloying elements remain in active, endless circulation without any loss of quality, fundamentally reducing global reliance on volatile primary ore mining operations.',
    },
    {
        icon: CheckCircle,
        title: 'National Network Hubs',
        description: 'Our strategic technical sorting hubs explicitly stationed in major heavy industrial cities ensure immediate localized expertise, impeccably fair processing, and incredibly fast transit execution for suppliers all across India.',
    },
];

const StainlessSteelScrapBenefits = () => {
    return (
        <section className="StainlessSteelScrap-benefits bg-white dark:bg-black !py-0">
            <div className="StainlessSteelScrap-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="StainlessSteelScrap-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="StainlessSteelScrap-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="StainlessSteelScrap-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Why Choose MS Asia Enterprises
                    </h2>
                    <p className="StainlessSteelScrap-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Leading Indian and multinational companies trust us for secure, compliant, and sustainable Stainless Steel Scrap management.
                    </p>
                </div>

                <div className="StainlessSteelScrap-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="StainlessSteelScrap-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="StainlessSteelScrap-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="StainlessSteelScrap-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="StainlessSteelScrap-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StainlessSteelScrapBenefits;



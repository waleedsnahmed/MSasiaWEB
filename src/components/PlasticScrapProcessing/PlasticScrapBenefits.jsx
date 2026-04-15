import React from 'react';
import { Minimize2, TrendingUp, ShieldCheck, Leaf, RefreshCw, Truck } from 'lucide-react';

const benefits = [
    {
        icon: Minimize2,
        title: 'Efficient Volume Reduction',
        description: 'Advanced size reduction and centralized baling systems drastically minimize the massive physical footprint of plastic bulk.',
    },
    {
        icon: TrendingUp,
        title: 'Cost-Effective Recovery',
        description: 'By converting bulky plastic waste into purified secondary manufacturing inputs, we drive localized cost savings and material value recovery.',
    },
    {
        icon: ShieldCheck,
        title: 'Regulatory Compliance',
        description: 'We handle rigid environmental laws gracefully, providing recycling certificates to neutralize risk and solidify documentation.',
    },
    {
        icon: Leaf,
        title: 'Improved Footprint',
        description: 'Prevent the release of hazardous microplastics and chemicals by bypassing landfills entirely, cultivating cleaner operational environments.',
    },
    {
        icon: RefreshCw,
        title: 'Circular Economy Contribution',
        description: 'Instead of linear consumption, our recycling cascades polymers back into continuous manufacturing, minimizing reliance on virgin extraction.',
    },
    {
        icon: Truck,
        title: 'Reliable Logistics',
        description: 'Dependable fleet management ensuring your facility never faces overflow bottlenecks, with fully scheduled, certified collections.',
    },
];

const PlasticScrapBenefits = () => {
    return (
        <section className="plastic-scrap-benefits bg-white dark:bg-black !py-0">
            <div className="plastic-scrap-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="plastic-scrap-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="plastic-scrap-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="plastic-scrap-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Benefits of Our Plastic Services
                    </h2>
                    <p className="plastic-scrap-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Our mission is to deliver eco-friendly plastic processing solutions that align with global sustainability standards.
                    </p>
                </div>

                <div className="plastic-scrap-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`plastic-scrap-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="plastic-scrap-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="plastic-scrap-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="plastic-scrap-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlasticScrapBenefits;

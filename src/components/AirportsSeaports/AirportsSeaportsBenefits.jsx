import React from 'react';
import { Power, ShieldCheck, Expand, FileLock, PiggyBank, Leaf } from 'lucide-react';

const benefits = [
    {
        icon: Power,
        title: 'Operational Continuity',
        description: 'Reliable, coordinated waste removal prevents bottlenecks and ensures the smooth, uninterrupted flow of passengers and cargo.',
    },
    {
        icon: ShieldCheck,
        title: 'Multi-Agency Compliance',
        description: 'Expertly navigates complex overlaps between FAA, USCG, EPA, Customs, and USDA APHIS regulations to eliminate violations.',
    },
    {
        icon: Expand,
        title: 'Scale & Adaptability',
        description: 'Built to handle immense, fluctuating waste volumes across hundreds of acres of dynamic infrastructure.',
    },
    {
        icon: FileLock,
        title: 'Risk & Liability Transfer',
        description: 'Fully insured, permitted operations protect port authorities from multi-million dollar regulatory fines and enforcement actions.',
    },
    {
        icon: PiggyBank,
        title: 'Financial Optimization',
        description: 'Consolidated services and advanced commodity recovery (like glycol recycling) significantly reduce total waste management costs.',
    },
    {
        icon: Leaf,
        title: 'Environmental Leadership',
        description: 'Advanced recycling, stormwater protection, and sustainable practices support your Airport Carbon Accreditation goals.',
    },
];

const AirportsSeaportsBenefits = () => {
    return (
        <section className="airports-benefits bg-white dark:bg-black !py-0">
            <div className="airports-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="airports-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="airports-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="airports-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Benefits of Partnering with MS Asia Enterprises
                    </h2>
                    <p className="airports-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Strategic waste management transforms a fragmented cost center into a streamlined, proactive value-generating function.
                    </p>
                </div>

                <div className="airports-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="airports-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="airports-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="airports-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="airports-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AirportsSeaportsBenefits;

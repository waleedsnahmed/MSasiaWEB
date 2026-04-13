import React from 'react';
import { Target, HardHat, TrendingUp, Truck, FileCheck } from 'lucide-react';

const benefits = [
    {
        icon: Target,
        title: 'Turnkey Project Management',
        description: 'A single point of responsibility. We handle the entire complex process—from the first site hazard assessment to the final destruction certificate.',
    },
    {
        icon: HardHat,
        title: 'Engineered Safety Protocols',
        description: 'Our extraction sequences are designed by engineers, not scrap laborers. We manage and mitigate the strict liability of hazardous environments so you do not have to.',
    },
    {
        icon: TrendingUp,
        title: 'Maximized Financial Return',
        description: 'We yield higher returns using a blended strategy: salvaging high-value components (used parts/engines) while aggressively segregating premium metal alloys from the bulk frame.',
    },
    {
        icon: Truck,
        title: 'Heavy Logistics Capability',
        description: 'Deploying heavy low-bed transporters, engineered lifting gear, and cranes up to 250-ton capacity to extract the largest assets from remote or congested locations.',
    },
    {
        icon: FileCheck,
        title: 'Bulletproof Documentation',
        description: 'Total legal transparency. You receive immutable environmental disposal manifests for all drained fluids alongside certified weighbridge data for the metal streams.',
    },
];

const HeavyEquipmentScrapBenefits = () => {
    return (
        <section className="ewaste-benefits bg-white dark:bg-black !py-0">
            <div className="ewaste-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="ewaste-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The MS Asia Enterprises Advantage
                    </h2>
                    <p className="ewaste-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Eliminating operational liability while optimizing the financial recovery of your largest capital assets.
                    </p>
                </div>

                <div className="ewaste-benefits__grid flex flex-wrap justify-center gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`ewaste-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                                index >= 3 ? 'lg:w-[calc(40%-16px)] flex-grow' : ''
                            }`}
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

export default HeavyEquipmentScrapBenefits;

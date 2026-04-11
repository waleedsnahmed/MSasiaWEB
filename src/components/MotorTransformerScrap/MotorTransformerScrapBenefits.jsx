import React from 'react';
import { DollarSign, ShieldCheck, Scale, Handshake, Truck, Maximize } from 'lucide-react';

const benefits = [
    {
        icon: DollarSign,
        title: 'Maximized Financial Return',
        description: 'Our advanced processing yields cleaner, higher-grade output materials that command top market prices. You share directly in this enhanced value.',
    },
    {
        icon: ShieldCheck,
        title: 'Turnkey Safe Decommissioning',
        description: 'We handle the entire complex, heavy, and hazardous job from start to finish with full insurance, certified personnel, and strict safety protocols.',
    },
    {
        icon: Scale,
        title: 'Compliance Guaranteed',
        description: 'We manage all hazardous components (oil, PCBs, asbestos) with proper manifests and certificates, shielding your organization from regulatory liability.',
    },
    {
        icon: Handshake,
        title: 'Transparency & Trust',
        description: 'Final payment is based on actual processed output weights, verified together using certified weighbridges. Zero hidden deductions.',
    },
    {
        icon: Truck,
        title: 'Nationwide Logistics & Scale',
        description: 'We service large-scale industrial closures, plant upgrades, and routine scrap generation reliably across all major regions in India.',
    },
    {
        icon: Maximize,
        title: 'Immediate Space Clearance',
        description: 'Quickly remove massive, idle electrical equipment to free up valuable floor space in maintenance areas, warehouses, and storage yards.',
    },
];

const MotorTransformerScrapBenefits = () => {
    return (
        <section className="mts-benefits bg-white dark:bg-black !py-0 w-full flex justify-center">
            <div className="mts-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px] w-full">
                <div className="mts-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="mts-benefits__label text-[#5a7638] dark:text-[#799851] uppercase font-bold tracking-wider">The Advantage</h6>
                    <h2 className="mts-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The MS Asia Value Proposition
                    </h2>
                    <p className="mts-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Partnering with us means securing your operations with unmatched industry expertise, cutting-edge technology, and maximum financial return.
                    </p>
                </div>

                <div className="mts-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="mts-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="mts-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="mts-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="mts-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MotorTransformerScrapBenefits;

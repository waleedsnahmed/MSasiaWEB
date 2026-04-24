import React from 'react';
import { ShieldCheck, TrendingUp, Leaf, LockKeyhole, ActivitySquare, FileCheck } from 'lucide-react';

const benefits = [
    {
        icon: ShieldCheck,
        title: 'Worker Protection',
        description: 'Handling heavy, sharp-edged scrap and hazardous chemicals presents severe risks. Our formal safety protocols protect employees from industrial hazards inherent in the primary metals production environment.',
    },
    {
        icon: TrendingUp,
        title: 'Resource Maximization',
        description: 'By ensuring pristine material segregation and deploying state-of-the-art processing, we maximize the recovery and financial value of high-volume scrap metal and complex process by-products.',
    },
    {
        icon: Leaf,
        title: 'Environmental Protection',
        description: 'Our rigorous handling of industrial sludge, dust, and chemical residues prevents the severe contamination of soil, water, and air, actively securing the facility\'s long-term environmental integrity.',
    },
    {
        icon: LockKeyhole,
        title: 'Full Compliance',
        description: 'We provide meticulous chain-of-custody documentation and audit-ready records that ensure continuous adherence to local and national environmental regulations, drastically reducing regulatory penalties.',
    },
    {
        icon: ActivitySquare,
        title: 'Operational Efficiency',
        description: 'Our customized collection schedules are aligned perfectly with your production cycles. This minimizes staging area clutter, reduces operational bottlenecks, and vastly improves overall floor safety.',
    },
    {
        icon: FileCheck,
        title: 'Transparent Settlement',
        description: 'We eliminate pricing opacity by selling directly to domestic and export consumers. Your payment is based on prevailing published commodity indices, backed by comprehensive financial and environmental reporting.',
    },
];

const SteelPrimaryMetalsBenefits = () => {
    return (
        <section className="steel-benefits bg-white dark:bg-black !py-0">
            <div className="steel-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="steel-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="steel-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="steel-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Strategic Value
                    </h2>
                    <p className="steel-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Our specialized service protects your massive investments in infrastructure, your people, and your license to operate.
                    </p>
                </div>

                <div className="steel-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="steel-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="steel-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="steel-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="steel-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SteelPrimaryMetalsBenefits;

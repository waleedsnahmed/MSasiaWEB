import React from 'react';
import { ShieldAlert, Stethoscope, FileSearch, Leaf, Zap, CheckCircle2 } from 'lucide-react';

const benefits = [
    {
        icon: ShieldAlert,
        title: 'Compliance Certainty',
        description: 'Complete adherence to Biomedical Waste Rules, 2016, and all state regulations. Guarantees your facility is free from audit-related fines and disruption.',
    },
    {
        icon: Stethoscope,
        title: 'Infection Control Priority',
        description: 'Structured, professional handling and specialized protocols significantly reduce the risk of accidental staff exposure, needlesticks, and contamination.',
    },
    {
        icon: FileSearch,
        title: 'Audit-Ready Documentation',
        description: 'Comprehensive digital tracking, real-time waste manifests, and treatment certificates for every batch provide a verifiable, airtight chain of custody.',
    },
    {
        icon: Zap,
        title: 'Technology Leadership',
        description: 'Access to state-of-the-art autoclaves, dual-chamber emission-controlled incinerators, and digital tracking from waste generation to final ash disposal.',
    },
    {
        icon: Leaf,
        title: 'Environmental Responsibility',
        description: 'Advanced pollution control systems verify clean emissions while promoting sustainable practices and resource recovery where permitted.',
    },
    {
        icon: CheckCircle2,
        title: 'Complete Peace of Mind',
        description: 'Allows your clinical, laboratory, and administrative staff to focus purely on core healthcare operations, knowing a high-risk liability is managed responsibly.',
    },
];

const BiohazardousWasteDisposalBenefits = () => {
    return (
        <section className="biohaz-benefits bg-white dark:bg-black !py-0">
            <div className="biohaz-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="biohaz-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="biohaz-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Core value</h6>
                    <h2 className="biohaz-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The MS Asia Enterprises Advantage
                    </h2>
                    <p className="biohaz-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Our direct business advantage delivers guaranteed compliance and unrivaled safety for your facility.
                    </p>
                </div>

                <div className="biohaz-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="biohaz-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="biohaz-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="biohaz-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="biohaz-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BiohazardousWasteDisposalBenefits;

import React from 'react';
import { Shield, FileText, FlaskConical, Zap, Map, Leaf } from 'lucide-react';

const benefits = [
    {
        icon: Shield,
        title: 'Safety-First Protocol',
        description: 'Protection for your laboratory personnel and facility integrity through professional handling protocols. We provide ongoing training support on safe lab segregation.',
    },
    {
        icon: FileText,
        title: 'Audit-Ready Documentation',
        description: 'We provide the complete, legally valid paper trail required for internal safety checks, customer audits, and ISO/GLP certification body submissions.',
    },
    {
        icon: FlaskConical,
        title: 'Regulatory Expertise',
        description: 'Navigate complex Hazardous Waste Rules effortlessly. We ensure your lab remains fully compliant with CPCB/SPCB requirements to avoid shutdowns or penalties.',
    },
    {
        icon: Zap,
        title: 'Smooth Operations',
        description: 'Quick, reliable, and responsible waste management service that removes operational bottlenecks with zero disruption to your daily laboratory activities.',
    },
    {
        icon: Map,
        title: 'Pan-India Network',
        description: 'We serve R&D centers, clinical QC labs, and university research hubs across all major scientific and industrial clusters throughout India.',
    },
    {
        icon: Leaf,
        title: 'Environmental Responsibility',
        description: 'We ensure final treatment at authorized TSDFs, guaranteeing zero illegal dumping or chemical release into municipal water or the environment.',
    },
];

const HPLCSolventWasteBenefits = () => {
    return (
        <section className="hplc-benefits bg-white dark:bg-black !py-0 w-full flex justify-center">
            <div className="hplc-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px] w-full">
                <div className="hplc-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="hplc-benefits__label text-[#5a7638] dark:text-[#799851] uppercase font-bold tracking-wider">The Advantage</h6>
                    <h2 className="hplc-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Why Labs Choose MS Asia Enterprises
                    </h2>
                    <p className="hplc-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Our tailored service adheres to the highest standards of chemical safety and environmental legislation.
                    </p>
                </div>

                <div className="hplc-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="hplc-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="hplc-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="hplc-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="hplc-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HPLCSolventWasteBenefits;

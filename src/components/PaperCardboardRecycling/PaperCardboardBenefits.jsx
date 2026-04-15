import React from 'react';
import { ShieldCheck, TrendingUp, BarChart2, Filter, MapPin, FileCheck } from 'lucide-react';

const benefits = [
    {
        icon: ShieldCheck,
        title: 'Guaranteed Data Security',
        description: 'Our NAID-aligned confidential shredding service provides legal defensibility and peace of mind for highly sensitive corporate information.',
    },
    {
        icon: TrendingUp,
        title: 'Maximized Financial Return',
        description: 'By ensuring clean segregation at source, we produce high-grade bales that command top market prices, passing on transparent rebates to you.',
    },
    {
        icon: BarChart2,
        title: 'Sustainability Reporting',
        description: 'We provide detailed monthly reports on weights recycled, equivalent trees saved, water conserved, and carbon emissions avoided for your ESG/CSR metrics.',
    },
    {
        icon: Filter,
        title: 'Contamination Control Expertise',
        description: 'Our on-site training and rigorous multi-stage quality checks drastically reduce contamination, protecting the intrinsic value of your recyclables.',
    },
    {
        icon: MapPin,
        title: 'National Network',
        description: 'We operate collection and processing hubs in major tier-1 and tier-2 cities across India, ensuring reliable service and highly efficient logistics.',
    },
    {
        icon: FileCheck,
        title: 'Compliance & Certification',
        description: 'We hold all necessary trade and pollution control licenses. Our documented recovery processes support your certifications like ISO 14001, LEED, or IGBC.',
    },
];

const PaperCardboardBenefits = () => {
    return (
        <section className="paper-cardboard-benefits bg-white dark:bg-black !py-0">
            <div className="paper-cardboard-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="paper-cardboard-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="paper-cardboard-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="paper-cardboard-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The MS Asia Enterprises Advantage
                    </h2>
                    <p className="paper-cardboard-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Our integrated capabilities set the benchmark for formalized paper and fiber recovery.
                    </p>
                </div>

                <div className="paper-cardboard-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`paper-cardboard-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="paper-cardboard-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="paper-cardboard-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="paper-cardboard-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaperCardboardBenefits;

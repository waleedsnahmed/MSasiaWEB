import React from 'react';
import { DollarSign, BarChart2, Repeat, FileCheck, ShieldAlert, Leaf } from 'lucide-react';

const benefits = [
    {
        icon: DollarSign,
        title: 'Cost Reduction',
        description: 'Lowering net waste costs through optimized material recovery and reduced disposal volumes.',
    },
    {
        icon: BarChart2,
        title: 'Yield Improvement',
        description: 'Integrating waste management with production to capture scrap value and improve material utilization.',
    },
    {
        icon: Repeat,
        title: 'Lean Integration',
        description: 'Aligning physical waste reduction with continuous improvement and lean manufacturing initiatives.',
    },
    {
        icon: FileCheck,
        title: 'Regulatory Compliance',
        description: 'Ensuring complete adherence to EPA, OSHA, and local environmental standards with audit-ready records.',
    },
    {
        icon: ShieldAlert,
        title: 'Safety & Protection',
        description: 'Protecting workers and preventing spills through proper containerization and hazard management.',
    },
    {
        icon: Leaf,
        title: 'Sustainability Goals',
        description: 'Supporting zero-landfill initiatives and fulfilling stringent customer sustainability scorecard requirements.',
    },
];

const GeneralManufacturingBenefits = () => {
    return (
        <section className="general-benefits bg-white dark:bg-black !py-0">
            <div className="general-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="general-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="general-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="general-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Benefits of Partnering with MS Asia Enterprises
                    </h2>
                    <p className="general-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Reduced administrative and operational burden through reliable, compliant, and scalable services.
                    </p>
                </div>

                <div className="general-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="general-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="general-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="general-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="general-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GeneralManufacturingBenefits;

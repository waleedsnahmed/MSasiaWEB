import React from 'react';
import { Shield, FileCheck, Clock, CheckCircle2, Recycle, Users } from 'lucide-react';

const benefits = [
    {
        icon: Shield,
        title: 'Resident & Staff Safety',
        description: 'Dramatically reduces the risk of infection transmission and exposure to sharps or hazardous chemicals.',
    },
    {
        icon: FileCheck,
        title: 'Regulatory Compliance',
        description: 'Ensures full adherence to OSHA, EPA, and State Health Department rules, mitigating fines and liability.',
    },
    {
        icon: Clock,
        title: 'Operational Efficiency',
        description: 'Reliable, scheduled, and discreet collections minimize disruption to daily patient care and staff workflow.',
    },
    {
        icon: CheckCircle2,
        title: 'Audit Readiness',
        description: 'Provides complete, traceable documentation for all waste streams, ensuring total peace of mind during inspections.',
    },
    {
        icon: Recycle,
        title: 'Sustainable Operations',
        description: 'Diverts non-hazardous waste like plastics and metals from landfills, supporting your facility\'s ESG goals.',
    },
    {
        icon: Users,
        title: 'Space & Risk Reduction',
        description: 'Efficient consolidation of waste frees up valuable facility space and minimizes physical lifting risks for housekeeping staff.',
    },
];

const NursingLongTermCareBenefits = () => {
    return (
        <section className="nursing-benefits bg-white dark:bg-black !py-0">
            <div className="nursing-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="nursing-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="nursing-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="nursing-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Benefits of Partnering with MS Asia Enterprises
                    </h2>
                    <p className="nursing-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Transform a risky, fragmented burden into a streamlined, compliant, and value-generating system.
                    </p>
                </div>

                <div className="nursing-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="nursing-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="nursing-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="nursing-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="nursing-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NursingLongTermCareBenefits;

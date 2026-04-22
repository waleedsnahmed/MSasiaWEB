import React from 'react';
import { Shield, FileCheck, Leaf, CalendarCheck, FileText, CheckCircle2 } from 'lucide-react';

const benefits = [
    {
        icon: Shield,
        title: 'Complete Risk Elimination',
        description: 'Ensures safety for staff, patients, and communities by minimizing exposure to needle-sticks and infectious materials.',
    },
    {
        icon: FileCheck,
        title: 'Stringent Compliance',
        description: 'Guaranteed full adherence to OSHA, DOT, EPA, and Biomedical Waste Management Rules, 2016, preventing operational shutdowns.',
    },
    {
        icon: FileText,
        title: 'Transparent Reporting',
        description: 'Complete documentation and audit readiness with cradle-to-grave manifest tracking and precise reporting.',
    },
    {
        icon: CalendarCheck,
        title: 'Reliable Scheduling',
        description: 'Scheduled collection services tailored to your facility’s specific waste generation volume, preventing compliance violations.',
    },
    {
        icon: Leaf,
        title: 'Environmental Stewardship',
        description: 'Environmentally responsible treatment and disposal methods minimize environmental contamination and protect public health.',
    },
    {
        icon: CheckCircle2,
        title: 'Cost Optimization',
        description: 'Expert segregation training and container right-sizing significantly reduce expensive RMW volume and lower total disposal costs.',
    },
];

const RegulatedMedicalWasteBenefits = () => {
    return (
        <section className="regulated-benefits bg-white dark:bg-black !py-0">
            <div className="regulated-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="regulated-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="regulated-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="regulated-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Benefits of Proper RMW Management
                    </h2>
                    <p className="regulated-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Partnering with MS Asia Enterprises ensures your facility's RMW is managed professionally, safely, and sustainably.
                    </p>
                </div>

                <div className="regulated-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="regulated-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="regulated-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="regulated-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="regulated-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RegulatedMedicalWasteBenefits;

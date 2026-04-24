import React from 'react';
import { ShieldCheck, ActivitySquare, Clock, Heart, FileText, Leaf } from 'lucide-react';

const benefits = [
    {
        icon: ShieldCheck,
        title: 'Full Compliance',
        description: 'Minimizes risk of fines by ensuring strict adherence to OSHA BBP standard, EPA, and state healthcare waste regulations.',
    },
    {
        icon: ActivitySquare,
        title: 'Infection Control',
        description: 'Guaranteed safe handling of blood-contaminated RMW, significantly reducing the risk of disease transmission.',
    },
    {
        icon: Clock,
        title: 'Operational Streamlining',
        description: 'Efficient, scheduled collections and expert segregation free up staff to focus on critical patient care without disruption.',
    },
    {
        icon: Heart,
        title: 'Safety & Peace of Mind',
        description: 'Trained personnel and secure container systems eliminate staff and patient exposure to sharps and biohazards.',
    },
    {
        icon: FileText,
        title: 'Audit Readiness',
        description: 'Provides complete traceable manifests, training records, and Certificates of Destruction for absolute audit readiness.',
    },
    {
        icon: Leaf,
        title: 'Environmental Stewardship',
        description: 'Supports sustainability by ensuring proper chemical neutralization, high-temperature incineration, and general waste diversion.',
    },
];

const DialysisSurgeryCentersBenefits = () => {
    return (
        <section className="dialysis-benefits bg-white dark:bg-black !py-0">
            <div className="dialysis-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="dialysis-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="dialysis-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="dialysis-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Benefits of Partnering with MS Asia Enterprises
                    </h2>
                    <p className="dialysis-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        We transform complex regulatory burdens into a streamlined, compliant, and value-generating system.
                    </p>
                </div>

                <div className="dialysis-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="dialysis-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="dialysis-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="dialysis-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="dialysis-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DialysisSurgeryCentersBenefits;

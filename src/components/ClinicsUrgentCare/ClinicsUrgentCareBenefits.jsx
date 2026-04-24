import React from 'react';
import { FileCheck, TrendingDown, Shield, Clock, Recycle, Users } from 'lucide-react';

const benefits = [
    {
        icon: FileCheck,
        title: 'Complete Regulatory Compliance',
        description: 'Achieve total peace of mind with 100% adherence to BMW Rules and all applicable state and federal healthcare waste regulations.',
    },
    {
        icon: TrendingDown,
        title: 'Cost Optimization',
        description: 'Significantly reduce waste management costs through intelligent source segregation strategies and optimized collection routing.',
    },
    {
        icon: Shield,
        title: 'Enhanced Safety',
        description: 'Protect clinical staff and patients by dramatically reducing the risk of needlestick injuries and dangerous pathogen exposures.',
    },
    {
        icon: Clock,
        title: 'Operational Efficiency',
        description: 'Implement streamlined, clear waste management protocols that save time and do not interfere with the rapid delivery of patient care.',
    },
    {
        icon: Recycle,
        title: 'Environmental Stewardship',
        description: 'Reduce the ecological footprint of your healthcare operations through advanced resource recovery and zero-impact treatment initiatives.',
    },
    {
        icon: Users,
        title: 'Community Safety',
        description: 'Prevent the dangerous spread of improperly discarded medical waste in public spaces, assuring community trust and public health protection.',
    },
];

const ClinicsUrgentCareBenefits = () => {
    return (
        <section className="clinics-benefits bg-white dark:bg-black !py-0">
            <div className="clinics-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="clinics-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="clinics-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="clinics-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Partnership Benefits & Value Proposition
                    </h2>
                    <p className="clinics-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Ensuring clinic management, staff, and patients benefit from a robust, safe, and efficient waste ecosystem.
                    </p>
                </div>

                <div className="clinics-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="clinics-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="clinics-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="clinics-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="clinics-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClinicsUrgentCareBenefits;

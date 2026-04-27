import React from 'react';
import { Shield, Settings, HeartPulse, Maximize, Lock, Award } from 'lucide-react';

const benefits = [
    {
        icon: Shield,
        title: 'Mitigate Regulatory Risk',
        description: 'Our guaranteed documentation provides an ironclad defense in audits. Our permitted operations transfer environmental liability away from your blood bank.',
    },
    {
        icon: Settings,
        title: 'Enhance Operational Efficiency',
        description: 'Our streamlined systems free clinical and laboratory staff from waste-related tasks, preventing accumulation, and solving space issues.',
    },
    {
        icon: HeartPulse,
        title: 'Protect Staff & Donors',
        description: 'By assuming handling risks, we significantly reduce your staff\'s exposure to needlestick injuries, chemical exposures, and bloodborne pathogens.',
    },
    {
        icon: Maximize,
        title: 'Reclaim Valuable Space',
        description: 'Efficient waste systems eliminate clutter. Consolidating vendors and container types frees up valuable floor space in crucial technical areas.',
    },
    {
        icon: Lock,
        title: 'Ensure Data Security',
        description: 'Proper destruction of donor data-bearing materials mitigates the risk of catastrophic privacy breaches and the resulting reputational damage.',
    },
    {
        icon: Award,
        title: 'Support Sustainability Goals',
        description: 'We provide detailed metrics on waste diverted from landfill, helping you demonstrate leadership in corporate social responsibility to your donors.',
    },
];

const LabsAndBloodBanksBenefits = () => {
    return (
        <section className="labs-blood-banks-benefits bg-white dark:bg-black !py-0">
            <div className="labs-blood-banks-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="labs-blood-banks-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="labs-blood-banks-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="labs-blood-banks-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Benefits of Partnering with MS Asia Enterprises
                    </h2>
                    <p className="labs-blood-banks-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Partnering with a dedicated specialist transforms waste management from a fragmented, risky, and costly burden into a streamlined, compliant, and value-generating system.
                    </p>
                </div>

                <div className="labs-blood-banks-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="labs-blood-banks-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="labs-blood-banks-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="labs-blood-banks-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="labs-blood-banks-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LabsAndBloodBanksBenefits;

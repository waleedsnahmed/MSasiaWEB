import React from 'react';
import { Shield, FileCheck, MapPin, Search, Users, Recycle } from 'lucide-react';

const benefits = [
    {
        icon: Shield,
        title: 'Safety-First Engineering',
        description: 'Our containers and protocols are precisely designed to eliminate needlestick injuries at the source, protecting your staff and reducing liability.',
    },
    {
        icon: FileCheck,
        title: 'Guaranteed Compliance',
        description: 'We handle the entire compliance burden—containers, manifests, transportation, treatment, and reporting—as per Biomedical Waste Management Rules, 2016.',
    },
    {
        icon: MapPin,
        title: 'Pan-India Network',
        description: 'From major metropolitan hospitals to tier-2 and tier-3 city clinics, we have the robust logistics network to serve your facility reliably.',
    },
    {
        icon: Search,
        title: 'Technology-Driven Transparency',
        description: 'Real-time container tracking and immutable digital certificates provide total peace of mind and audit-ready documentation for your records.',
    },
    {
        icon: Users,
        title: 'Community Health Focus',
        description: 'We actively work on programs and awareness campaigns to prevent public exposure to improperly discarded sharps in community settings.',
    },
    {
        icon: Recycle,
        title: 'Environmental Responsibility',
        description: 'We prioritize autoclaving and shredding over incineration wherever possible, significantly reducing emissions and promoting environmental stewardship.',
    },
];

const SharpsDisposalBenefits = () => {
    return (
        <section className="sharps-benefits bg-white dark:bg-black !py-0">
            <div className="sharps-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="sharps-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="sharps-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="sharps-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The MS Asia Enterprises Advantage
                    </h2>
                    <p className="sharps-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Leading Indian healthcare and industrial facilities trust us for secure, compliant, and zero-risk sharps management.
                    </p>
                </div>

                <div className="sharps-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="sharps-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="sharps-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="sharps-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="sharps-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SharpsDisposalBenefits;

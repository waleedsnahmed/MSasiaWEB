import React from 'react';
import { Shield, FileCheck, Users, CheckCircle2, Leaf, Award } from 'lucide-react';

const benefits = [
    {
        icon: FileCheck,
        title: 'Absolute Regulatory Compliance',
        description: 'We assume generator liability for the compliant transportation and destruction of your hazardous waste, shielding you from penalties.',
    },
    {
        icon: Shield,
        title: 'Enhanced Patient Safety',
        description: 'Proper containerization and removal of hazardous materials significantly reduces the risk of accidental exposure or medication diversion.',
    },
    {
        icon: Users,
        title: 'Operational Efficiency',
        description: 'Clear protocols and scheduled pickups empower your staff, freeing up pharmacist time to focus entirely on dedicated patient care.',
    },
    {
        icon: CheckCircle2,
        title: 'Brand Reputation & Trust',
        description: 'Demonstrating a verifiable commitment to preventing pharmaceutical pollution resonates powerfully with your health-conscious consumers.',
    },
    {
        icon: Leaf,
        title: 'Comprehensive Sustainability',
        description: 'Beyond drug destruction, our recycling programs for plastics and packaging allow you to present a full-circle environmental program.',
    },
    {
        icon: Award,
        title: 'Unmatched Documentation',
        description: 'Receive a fully audit-ready documentation suite, including EPA manifests and DEA certificates, serving as proof of compliance.',
    },
];

const RetailAndCommercialBenefits = () => {
    return (
        <section className="retail-commercial-benefits bg-white dark:bg-black !py-0">
            <div className="retail-commercial-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="retail-commercial-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="retail-commercial-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="retail-commercial-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Strategic Value for Your Pharmacy
                    </h2>
                    <p className="retail-commercial-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Partnering with a specialized waste management provider is vital for protecting patients, staff, and your operating license while maintaining professional standards.
                    </p>
                </div>

                <div className="retail-commercial-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="retail-commercial-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="retail-commercial-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="retail-commercial-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="retail-commercial-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RetailAndCommercialBenefits;

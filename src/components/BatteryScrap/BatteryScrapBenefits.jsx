import React from 'react';
import { ShieldCheck, DollarSign, MapPin, CheckCircle, Scale, Recycle } from 'lucide-react';

const benefits = [
    {
        icon: ShieldCheck,
        title: 'Full Regulatory Compliance',
        description: 'We operate strictly under the Battery Waste Management Rules, 2022. Your EPR and hazardous waste compliance is fully guaranteed.',
    },
    {
        icon: DollarSign,
        title: 'Maximum Recovery Value',
        description: 'We ensure maximum extraction of materials like lead, cobalt, and nickel with transparent weighing and pricing structures.',
    },
    {
        icon: MapPin,
        title: 'Nationwide Logistics Network',
        description: 'We collect from even the most remote telecom towers or urban IT parks, aggregating waste efficiently via our registered fleet.',
    },
    {
        icon: CheckCircle,
        title: 'Safe Handling Expertise',
        description: 'Our extraction protocols for Li-ion (fire risk) and Lead-Acid (acid leak) guarantees zero interruption or liability at your operations.',
    },
    {
        icon: Scale,
        title: 'Transparency & Traceability',
        description: 'Every kilogram is tracked. You receive formal certificates and manifests linking your waste to its final, approved recycler.',
    },
    {
        icon: Recycle,
        title: 'Circular Economy Contribution',
        description: '100% of batteries bypass landfills, preventing contamination and feeding critical materials back into the manufacturing chain.',
    },
];

const BatteryScrapBenefits = () => {
    return (
        <section className="ewaste-benefits bg-white dark:bg-black !py-0">
            <div className="ewaste-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="ewaste-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The MS Asia Enterprises Advantage
                    </h2>
                    <p className="ewaste-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        A safe, compliant, and value-focused approach to commercial battery disposal.
                    </p>
                </div>

                <div className="ewaste-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="ewaste-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="ewaste-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="ewaste-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="ewaste-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BatteryScrapBenefits;

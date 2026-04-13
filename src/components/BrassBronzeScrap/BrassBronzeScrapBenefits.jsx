import React from 'react';
import { Microscope, Hammer, FileCheck, Globe, Scale, Lightbulb } from 'lucide-react';

const benefits = [
    {
        icon: Microscope,
        title: 'Metallurgical Lab Access',
        description: 'Our in-house testing facility with XRF spectrometry provides definitive alloy identification that basic processors cannot match.',
    },
    {
        icon: Hammer,
        title: 'Briquetting Excellence',
        description: 'Our 300-ton high-pressure lines transform hazardous, loose turnings into dense, furnace-efficient feedstock for high-end foundries.',
    },
    {
        icon: FileCheck,
        title: 'Foundry-Grade Certification',
        description: 'We provide Material Test Certificates (MTC) detailing exact chemical composition, giving you unprecedented quality assurance and traceability.',
    },
    {
        icon: Scale,
        title: 'Composition-Based Valuation',
        description: 'We pay for chemical content (exact copper, tin, zinc), not just bulk weight, based on real-time London Metal Exchange (LME) globally live rates.',
    },
    {
        icon: Globe,
        title: 'Global Consumer Networks',
        description: 'Direct relationships with high-spec marine and industrial foundries ensure we can command premium returns for your sorted, pure alloy lots.',
    },
    {
        icon: Lightbulb,
        title: 'Alloy Development Support',
        description: 'We work with manufacturers to create custom blends from streams, creating value from materials that would otherwise be downgraded.',
    },
];

const BrassBronzeScrapBenefits = () => {
    return (
        <section className="ewaste-benefits bg-white dark:bg-black !py-0">
            <div className="ewaste-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Strategic Advantage</h6>
                    <h2 className="ewaste-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The MS Asia Technical Edge
                    </h2>
                    <p className="ewaste-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Moving beyond basic trading to provide specialized metallurgical expertise and furnace-ready material preparation.
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

export default BrassBronzeScrapBenefits;

import React from 'react';
import { Trash2, CloudRain, Droplet, Zap, TestTube, ShieldCheck } from 'lucide-react';

const benefits = [
    {
        icon: Trash2,
        title: 'Massive Landfill Diversion',
        description: 'For every single ton of textiles actively recycled, an extraordinary 4.5 cubic meters of critical urban landfill space is systematically conserved.',
    },
    {
        icon: CloudRain,
        title: 'Rapid Carbon Reduction',
        description: 'Our recycling frameworks mathematically save 6.5 kg of hazardous CO₂ equivalent atmospheric emissions per kilogram of cotton fully recovered.',
    },
    {
        icon: Droplet,
        title: 'Critical Water Conservation',
        description: 'Bypassing the immense strain of new farming, recovering just one kilogram of recycled cotton actively conserves over 7,500 liters of raw water.',
    },
    {
        icon: Zap,
        title: 'High Energy Savings',
        description: 'Compared directly to the immense power needed for virgin extraction, synthesizing recycled polyester functions on 85% less industrial energy.',
    },
    {
        icon: TestTube,
        title: 'Chemical Runoff Reduction',
        description: 'By heavily minimizing reliance on new raw garments, we drive an extreme 90% quantifiable reduction in toxic textile dye and chemical usage.',
    },
    {
        icon: ShieldCheck,
        title: 'GRS & ESG Certifications',
        description: 'Your recovery stream is inherently powered by fully auditable Oeko-Tex Standard 100 metrics, natively accelerating your ISO 14001 compliance standing.',
    },
];

const TextileFabricBenefits = () => {
    return (
        <section className="textile-fabric-benefits bg-white dark:bg-black !py-0">
            <div className="textile-fabric-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="textile-fabric-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="textile-fabric-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="textile-fabric-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Quantifiable Sustainability Metrics
                    </h2>
                    <p className="textile-fabric-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Our integrated operational capabilities ensure complete environmental integrity driving rapid metric-backed ESG growth for your business.
                    </p>
                </div>

                <div className="textile-fabric-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`textile-fabric-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="textile-fabric-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="textile-fabric-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="textile-fabric-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TextileFabricBenefits;

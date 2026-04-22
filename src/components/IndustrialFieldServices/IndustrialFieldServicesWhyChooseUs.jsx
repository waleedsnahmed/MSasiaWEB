import React from 'react';
import { Activity, ShieldCheck, Cog, DollarSign } from 'lucide-react';

const whyPoints = [
    {
        icon: Activity,
        title: 'Zero Disruption & Speed',
        description: 'Our "Field First" approach ensures your facility stays live and operational while we work. Professional-grade machinery and trained crews mean your projects are finished safely and strictly on schedule.',
    },
    {
        icon: ShieldCheck,
        title: 'Risk Transfer & Compliance',
        description: 'We assume total responsibility for safe dismantling, hazardous waste handling, and regulatory compliance. Every process is executed under rigorous safety protocols to protect your operations.',
    },
    {
        icon: Cog,
        title: 'Turnkey End-to-End Solution',
        description: 'One single partner for site evaluation, dismantling, loading, and certified recycling. We provide comprehensive Certificates of Destruction and Recycling to ensure your audit trails are flawless.',
    },
    {
        icon: DollarSign,
        title: 'Maximum ROI & Value Recovery',
        description: 'Value recovery happens at the source. Precision sorting on-site ensures you get the highest possible financial return for your scrap assets, directing recyclables back into the global supply chain.',
    },
];

const IndustrialFieldServicesWhyChooseUs = () => {
    return (
        <section className="industrial-why bg-white dark:bg-black !py-0">
            <div className="industrial-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="industrial-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="industrial-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Trust Us</h6>
                    <h2 className="industrial-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Why Industries Trust MS Asia Enterprises
                    </h2>
                    <p className="industrial-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Industrial field operations require precise coordination, robust safety measures, and strategic execution. <br />
                        We deliver an unmatched industrial advantage designed to protect your assets, team, and bottom line.
                    </p>
                </div>

                <div className="industrial-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group industrial-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="industrial-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="industrial-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="industrial-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="industrial-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="industrial-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="industrial-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="industrial-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="industrial-why__cta-strong block text-white font-bold">Comprehensive Field Solutions.</h4>
                            <p className="font-semibold text-white/90">Our fully equipped field team handles everything from detailed site evaluation to on-site scrap collection, heavy machinery dismantling, and certified eco-friendly recycling, ensuring uninterrupted operations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustrialFieldServicesWhyChooseUs;

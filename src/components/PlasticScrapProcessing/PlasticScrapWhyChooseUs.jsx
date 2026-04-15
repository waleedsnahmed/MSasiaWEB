import React from 'react';
import { Earth, CloudRain, Zap, Cpu, Recycle, FileCheck2 } from 'lucide-react';

const whyPoints = [
    {
        icon: Earth,
        title: 'Reduce Landfill & Ocean Pollution',
        description: 'Plastics can remain in the environment for hundreds of years. Diverting this waste from landfills preventing ecosystem damage is our prime directive.',
    },
    {
        icon: CloudRain,
        title: 'Lower Carbon Emissions',
        description: 'Recycling plastic drastically lowers the carbon emissions strictly associated with the energy-intensive extraction and creation of virgin plastic production.',
    },
    {
        icon: Zap,
        title: 'Conserve Energy & Raw Materials',
        description: 'Reprocessing scrap into usable granular forms helps manufacturers conserve massive amounts of energy and natural raw petrochemical materials.',
    },
    {
        icon: Cpu,
        title: 'Advanced Recycling Technologies',
        description: 'We utilize automated sorting systems, high-capacity washing lines, and precision shredders to process large volumes while maintaining recovery rates.',
    },
    {
        icon: Recycle,
        title: 'Environmental Stewardship',
        description: 'Responsible plastic scrap processing is not merely waste management. It is environmental stewardship driving sustainable industrial practices.',
    },
    {
        icon: FileCheck2,
        title: 'Documentation & Transparency',
        description: 'Transparency is core. We provide complete waste handling records and compliance reports ensuring clients meet all rigorous regulatory limits.',
    },
];

const PlasticScrapWhyChooseUs = () => {
    return (
        <section className="plastic-scrap-why bg-white dark:bg-black !py-0">
            <div className="plastic-scrap-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="plastic-scrap-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="plastic-scrap-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="plastic-scrap-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Environmental Responsibility & Impact
                    </h2>
                    <p className="plastic-scrap-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Plastics can remain in the environment for hundreds of years. Proper processing converts waste into usable resources while protecting ecosystems and public health.
                    </p>
                </div>

                <div className="plastic-scrap-why__grid grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group plastic-scrap-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="plastic-scrap-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="plastic-scrap-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="plastic-scrap-why__card-title dark:text-white text-gray-900 leading-tight">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="plastic-scrap-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="plastic-scrap-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="plastic-scrap-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="plastic-scrap-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="plastic-scrap-why__cta-strong block text-white font-bold">Why Plastic Processing Matters</h4>
                            <p className="font-semibold text-white/90">Plastic recycling is not a one-size-fits-all process. We strictly adhere to environmental regulations and ensure that all non-recyclable or hazardous residues are selectively disposed of safely and responsibly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlasticScrapWhyChooseUs;

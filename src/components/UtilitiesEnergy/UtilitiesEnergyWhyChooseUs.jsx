import React from 'react';
import { ShieldAlert, Settings, CloudCog, Monitor } from 'lucide-react';

const whyPoints = [
    {
        icon: ShieldAlert,
        title: 'Hazardous Waste Disposal',
        description: 'Safe collection and licensed treatment of oils, solvents, and chemicals to prevent severe compliance failures and reputational damage.',
    },
    {
        icon: Settings,
        title: 'Industrial Scrap Management',
        description: 'Recycling of metal scrap, cables, and decommissioned equipment, optimizing the value of retired assets while reducing landfill waste.',
    },
    {
        icon: CloudCog,
        title: 'Ash & Process Waste Handling',
        description: 'Secure transport, stabilization, and fully compliant disposal of coal combustion residuals, ash, and sludge from power generation.',
    },
    {
        icon: Monitor,
        title: 'E-Waste & Electronics Disposal',
        description: 'Secure recycling of meters, sensors, and IT equipment with guaranteed data security to support infrastructure modernization.',
    },
];

const UtilitiesEnergyWhyChooseUs = () => {
    return (
        <section className="utilities-why bg-white dark:bg-black !py-0">
            <div className="utilities-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="utilities-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="utilities-why__label text-[#47622A] dark:text-[#799851] uppercase">Energy Sector</h6>
                    <h2 className="utilities-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Specialized Energy Solutions
                    </h2>
                    <p className="utilities-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        We deliver custom waste management programs aligned with safety protocols, environmental regulations, and operational efficiency.
                    </p>
                </div>

                <div className="utilities-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group utilities-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="utilities-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="utilities-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="utilities-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="utilities-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="utilities-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="utilities-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="utilities-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="utilities-why__cta-strong block text-white font-bold">Comprehensive Protection</h4>
                            <p className="font-semibold text-white/90">Effective waste management is essential to protect workers, communities, and the environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UtilitiesEnergyWhyChooseUs;

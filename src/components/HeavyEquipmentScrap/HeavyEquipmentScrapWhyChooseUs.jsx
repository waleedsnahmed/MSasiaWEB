import React from 'react';
import { AlertTriangle, Biohazard, ShieldAlert, BadgeDollarSign } from 'lucide-react';

const whyPoints = [
    {
        icon: AlertTriangle,
        title: 'Catastrophic Safety Risks',
        description: 'Improper lifting, uncontrolled gas cutting, and un-engineered dismantling can cause sudden structural collapse, leading to fatal injuries and massive property damage.',
    },
    {
        icon: ShieldAlert,
        title: 'Severe Liability & Fines',
        description: 'Improper disposal violates Hazardous Waste Management regulations. The original equipment owner retains full legal liability for downstream pollution if handled informally.',
    },
    {
        icon: Biohazard,
        title: 'Toxic Contamination',
        description: 'Heavy machinery contains vast amounts of hydrocarbons, hydraulic fluids, and PCBs. Accidental spills lead to exorbitant soil remediation costs that eclipse scrap value.',
    },
    {
        icon: BadgeDollarSign,
        title: 'Substantial Value Loss',
        description: 'Unorganized removal destroys salvageable components (engines, pumps) and fails to properly separate high-grade alloy steels, copper, and aluminum, crushing financial return.',
    },
];

const HeavyEquipmentScrapWhyChooseUs = () => {
    return (
        <section className="ewaste-why bg-white dark:bg-black !py-0">
            <div className="ewaste-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal min-h-[178px]">
                    <h6 className="ewaste-why__label text-[#47622A] dark:text-[#799851] uppercase">The Dismantling Challenge</h6>
                    <h2 className="ewaste-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Why Professional Execution is Critical
                    </h2>
                    <p className="ewaste-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Heavy equipment scrap involves massive scale, integrated power systems, and intense hazardous containments. It demands engineered extraction, not basic scrap trading.
                    </p>
                </div>

                <div className="ewaste-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group ewaste-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="ewaste-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="ewaste-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="ewaste-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="ewaste-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="ewaste-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="ewaste-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="ewaste-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="ewaste-why__cta-strong block text-white font-bold">Our Engineered Solution</h4>
                            <p className="font-semibold text-white/90">We execute heavy equipment recovery as a highly managed project, applying rigorous engineering principles and stringent environmental protocols to eliminate liability.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeavyEquipmentScrapWhyChooseUs;

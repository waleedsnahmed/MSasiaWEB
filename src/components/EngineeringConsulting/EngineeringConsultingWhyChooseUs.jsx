import React from 'react';
import { HardHat, ShieldAlert, Settings, Clock } from 'lucide-react';

const whyPoints = [
    {
        icon: HardHat,
        title: 'Construction & Demolition',
        description: 'Collection and disposal of concrete, metal, wood, and mixed debris from infrastructure projects.',
    },
    {
        icon: ShieldAlert,
        title: 'Hazardous & Environmental',
        description: 'Safe management of contaminated soil, chemicals, and hazardous materials identified during assessments.',
    },
    {
        icon: Settings,
        title: 'Industrial Scrap & Equipment',
        description: 'Recovery and recycling of metals, cables, and secure handling of decommissioned assets.',
    },
    {
        icon: Clock,
        title: 'Project-Based Waste',
        description: 'On-demand collection and flexible container placement perfectly aligned with temporary project schedules.',
    },
];

const EngineeringConsultingWhyChooseUs = () => {
    return (
        <section className="engineering-why bg-white dark:bg-black !py-0">
            <div className="engineering-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="engineering-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="engineering-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="engineering-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Built for Complex Projects
                    </h2>
                    <p className="engineering-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Engineering firms encounter diverse waste challenges across multiple project environments. We provide the coordination, documentation, and regulatory oversight needed.
                    </p>
                </div>

                <div className="engineering-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group engineering-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="engineering-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="engineering-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="engineering-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="engineering-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="engineering-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="engineering-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="engineering-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="engineering-why__cta-strong block text-white font-bold">Comprehensive Lifecycle Management</h4>
                            <p className="font-semibold text-white/90">We support your organization throughout the entire project lifecycle, minimizing environmental and regulatory risks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EngineeringConsultingWhyChooseUs;

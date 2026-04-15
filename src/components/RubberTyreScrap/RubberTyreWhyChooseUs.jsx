import React from 'react';
import { Bug, Flame, AlertTriangle, Factory, ShieldAlert, Leaf } from 'lucide-react';

const whyPoints = [
    {
        icon: Bug,
        title: 'Environmental Pollution',
        description: 'Stockpiled tires trap rainwater, creating hazardous breeding grounds for mosquitoes that spread dengue and malaria, while simultaneously contaminating local groundwater.',
    },
    {
        icon: Flame,
        title: 'Public Health Hazards',
        description: 'Open burning of tires for wire recovery releases severely carcinogenic compounds including PAHs and dioxins, causing long-term respiratory diseases in nearby communities.',
    },
    {
        icon: AlertTriangle,
        title: 'Fire & Safety Risks',
        description: 'Tire stockpiles are highly flammable. Once ignited, they can burn uncontrollably for weeks or months, producing toxic and legally penalizing smoke plumes.',
    },
    {
        icon: Factory,
        title: 'Resource Waste',
        description: 'Tires contain high-quality commercial steel, carbon black, and synthetic rubber—valuable resources that are permanently lost through illegal burning or dumping.',
    },
    {
        icon: ShieldAlert,
        title: 'Regulatory Non-Compliance',
        description: 'With India enforcing stricter EPR regulations under Hazardous Waste Rules, improper disposal now carries significant legal and financial penalties for bulk producers.',
    },
    {
        icon: Leaf,
        title: 'Zero Landfill Guarantee',
        description: 'We replace harmful practices with a multi-pathway recycling system mapping 100% landfill diversion, recovering maximum value safely and compliantly.',
    },
];

const RubberTyreWhyChooseUs = () => {
    return (
        <section className="rubber-tyre-why bg-white dark:bg-black !py-0">
            <div className="rubber-tyre-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="rubber-tyre-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="rubber-tyre-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="rubber-tyre-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Critical Challenge of Rubber Waste
                    </h2>
                    <p className="rubber-tyre-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Traditional disposal methods create severe environmental hazards, fire risks, and public health threats. We replace these practices with advanced, scientifically proven compliance technologies.
                    </p>
                </div>

                <div className="rubber-tyre-why__grid grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group rubber-tyre-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="rubber-tyre-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="rubber-tyre-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="rubber-tyre-why__card-title dark:text-white text-gray-900 leading-tight">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="rubber-tyre-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="rubber-tyre-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="rubber-tyre-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="rubber-tyre-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="rubber-tyre-why__cta-strong block text-white font-bold">Mismanagement Risks Solved</h4>
                            <p className="font-semibold text-white/90">Our service is built firmly on stringent regulatory compliance, strict adherence to fire prevention plans, and maximizing energy recovery to support India's circular economy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RubberTyreWhyChooseUs;

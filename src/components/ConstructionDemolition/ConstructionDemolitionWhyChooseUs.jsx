import React from 'react';
import { Clock, Ban, Droplets, ShieldAlert } from 'lucide-react';

const whyPoints = [
    {
        icon: Clock,
        title: 'Project Delays',
        description: 'Overflowing unorganized waste severely obstructs site access, delays timelines, and blocks critical structural work areas.',
    },
    {
        icon: Ban,
        title: 'Regulatory Shutdowns',
        description: 'Non-compliance with C&D Waste Rules, 2016, or Hazardous Rules easily leads to direct stop-work notices and heavy penalties.',
    },
    {
        icon: Droplets,
        title: 'Environmental Liability',
        description: 'Uncontrolled dumping contaminates land and water bodies, while unauthorized burning of mixed waste creates severe air pollution.',
    },
    {
        icon: ShieldAlert,
        title: 'Safety Incidents',
        description: 'Unorganized and massive waste piles directly create dangerous tripping, fire, and structural collapse hazards for working personnel.',
    },
];

const ConstructionDemolitionWhyChooseUs = () => {
    return (
        <section className="ewaste-why bg-white dark:bg-black !py-0">
            <div className="ewaste-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal min-h-[178px]">
                    <h6 className="ewaste-why__label text-[#47622A] dark:text-[#799851] uppercase">Consequences of Poor Waste Management</h6>
                    <h2 className="ewaste-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Scale and Complexity of Industrial & C&D Waste
                    </h2>
                    <p className="ewaste-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        This waste stream is diverse, bulky, and heavily regulated. Improper management halts projects, incurs massive fines, and damages reputations.
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
                            <h4 className="ewaste-why__cta-strong block text-white font-bold">The Integrated Solution</h4>
                            <p className="font-semibold text-white/90">We provide a systematic framework—from strategic planning to final certification—that clears your site safely, manages strict compliance, and successfully recovers maximum value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConstructionDemolitionWhyChooseUs;

import React from 'react';
import { Settings, ShieldAlert, Hammer, Wrench } from 'lucide-react';

const whyPoints = [
    {
        icon: Settings,
        title: 'Scrap Metal Collection',
        description: 'Recovery and recycling of ferrous and non-ferrous metals. We manage the efficient and high-volume recovery of carbon steel, alloy steel, stainless steel, copper, aluminum, and brass. Our process ensures the meticulous segregation of high-value alloys and reusable materials, eliminating value erosion through contamination and directly reducing landfill impact and operational costs.',
    },
    {
        icon: ShieldAlert,
        title: 'Hazardous & Industrial Waste',
        description: 'Safe collection of oils, lubricants, chemical residues, and sludge. Heavy manufacturing processes generate complex chemical treatments and coatings by-products. We provide licensed treatment and disposal that follows rigorous environmental standards, actively minimizing operational downtime and preventing severe environmental contamination of soil, water, and air.',
    },
    {
        icon: Hammer,
        title: 'Process By-Products',
        description: 'Collection and disposal of slag, scale, baghouse fines, and other industrial residues. We specialize in routing hazardous process residues like electric arc furnace (EAF) dust for stabilization, reclamation, or fully compliant, licensed disposal, ensuring strict compliance with both environmental and occupational regulations.',
    },
    {
        icon: Wrench,
        title: 'Maintenance & Equipment',
        description: 'Expert handling of decommissioned equipment, heavy machinery parts, and maintenance scrap. We manage the secure transport and recovery of reusable components, resolving the logistical disruption and safety hazards associated with accumulating scrap that occupies valuable floor space and interrupts critical material flow.',
    },
];

const SteelPrimaryMetalsWhyChooseUs = () => {
    return (
        <section className="steel-why bg-white dark:bg-black !py-0">
            <div className="steel-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="steel-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="steel-why__label text-[#47622A] dark:text-[#799851] uppercase">Heavy Industry</h6>
                    <h2 className="steel-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Specialized Metal Solutions
                    </h2>
                    <p className="steel-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        We deliver customized, compliant waste handling programs designed for heavy industry.
                    </p>
                </div>

                <div className="steel-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group steel-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="steel-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="steel-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="steel-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="steel-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="steel-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="steel-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="steel-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="steel-why__cta-strong block text-white font-bold">End-to-End Waste Management Process</h4>
                            <p className="font-semibold text-white/90">From scrap metal recovery to hazardous waste disposal, we manage every waste stream responsibly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SteelPrimaryMetalsWhyChooseUs;

import React from 'react';
import { Trash2, CloudRain, Droplet, Factory, BarChart3, AlertTriangle } from 'lucide-react';

const whyPoints = [
    {
        icon: Trash2,
        title: 'Massive Landfill Burden',
        description: 'Textiles occupy approximately 5% of all landfill space in Indian cities, despite having an exceptionally high material recovery and recycling potential.',
    },
    {
        icon: CloudRain,
        title: 'High Carbon Footprint',
        description: 'The global fashion industry is directly responsible for 10% of total world carbon emissions, with unregulated waste disposal adding significantly to this footprint.',
    },
    {
        icon: Droplet,
        title: 'Water Pollution Risks',
        description: 'Toxic dye leaching deeply contaminates groundwater, while degrading synthetic nylon fibers continuously release harmful microplastics during washing and soil breakdown.',
    },
    {
        icon: Factory,
        title: 'Extreme Resource Waste',
        description: 'Producing new textiles requires immense raw water input—over 2,700 liters for just one cotton t-shirt—making structured recycling absolutely crucial for conservation.',
    },
    {
        icon: BarChart3,
        title: 'Lost Economic Opportunity',
        description: 'India actively imports massive quantities of costly cotton and synthetic fibers while simultaneously exporting or trashing its own recoverable textile waste.',
    },
    {
        icon: AlertTriangle,
        title: 'Blend Contamination Hurdles',
        description: 'Heterogeneous blends like poly-cotton and hard attachments (zippers/buttons) complicate processing. We bridge this precise technology gap to reclaim value.',
    },
];

const TextileFabricWhyChooseUs = () => {
    return (
        <section className="textile-fabric-why bg-white dark:bg-black !py-0">
            <div className="textile-fabric-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="textile-fabric-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="textile-fabric-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="textile-fabric-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Scale of India's Textile Waste Challenge
                    </h2>
                    <p className="textile-fabric-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Textile waste represents one of the fastest-growing waste streams globally, with India positioned as both a major generator and a powerful potential solutions hub.
                    </p>
                </div>

                <div className="textile-fabric-why__grid grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group textile-fabric-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="textile-fabric-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="textile-fabric-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="textile-fabric-why__card-title dark:text-white text-gray-900 leading-tight">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="textile-fabric-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="textile-fabric-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="textile-fabric-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="textile-fabric-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="textile-fabric-why__cta-strong block text-white font-bold">Unlocking The Reuse Potential</h4>
                            <p className="font-semibold text-white/90">We address complex fashion barriers through technology-driven sorting architectures, strategic chemical processing partnerships, and market development initiatives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextileFabricWhyChooseUs;

import React from 'react';
import { TreePine, Factory, Trash2, TrendingUp, AlertTriangle, FileLock2 } from 'lucide-react';

const whyPoints = [
    {
        icon: TreePine,
        title: 'Forest Conservation',
        description: 'Recycling one ton of paper saves approximately 17 trees, conserves 7,000 gallons of water, and saves enough energy to power an average Indian home for 6 months.',
    },
    {
        icon: Factory,
        title: 'Carbon Footprint Reduction',
        description: 'Manufacturing paper from recycled fiber produces 73% less air pollution than making it from virgin wood pulp, significantly lowering greenhouse gas emissions.',
    },
    {
        icon: Trash2,
        title: 'Landfill Diversion',
        description: 'Paper and cardboard comprise nearly 40% of municipal solid waste by volume. Diverting this material is essential for extending landfill life and preventing methane release.',
    },
    {
        icon: TrendingUp,
        title: 'Economic Value Creation',
        description: 'The recycled paper industry provides formal employment and supplies a critical, cost-effective raw material to India’s rapidly growing domestic paper mills.',
    },
    {
        icon: AlertTriangle,
        title: 'The Contamination Challenge',
        description: 'Food waste, liquids, and plastic liners in recycling bins destroy value. We implement source-level segregation to prevent mixed-waste contamination.',
    },
    {
        icon: FileLock2,
        title: 'Data Security Concerns',
        description: 'Disposing of confidential corporate documents requires guaranteed destruction, which unregulated sectors cannot provide. We offer secure, certified shredding.',
    },
];

const PaperCardboardWhyChooseUs = () => {
    return (
        <section className="paper-cardboard-why bg-white dark:bg-black !py-0">
            <div className="paper-cardboard-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="paper-cardboard-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="paper-cardboard-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="paper-cardboard-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Critical Role of Paper Recycling
                    </h2>
                    <p className="paper-cardboard-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        India is one of the world's fastest-growing paper markets, yet it faces a significant fiber deficit. <br />
                        Recycling bridges this gap sustainably while addressing core environmental and systemic challenges.
                    </p>
                </div>

                <div className="paper-cardboard-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group paper-cardboard-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="paper-cardboard-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="paper-cardboard-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="paper-cardboard-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="paper-cardboard-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="paper-cardboard-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="paper-cardboard-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="paper-cardboard-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="paper-cardboard-why__cta-strong block text-white font-bold">Our Integrated Solution</h4>
                            <p className="font-semibold text-white/90">We address these challenges through a business-focused model that prioritizes purity, security, and transparency, creating a reliable supply chain from office floor to paper mill.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaperCardboardWhyChooseUs;

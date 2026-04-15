import React from 'react';
import { Shield, FileCheck, Zap, TrendingUp, AlertTriangle, Box, Truck, BarChart } from 'lucide-react';

const whyPoints = [
    {
        icon: Zap,
        title: 'Energy & Emission Reduction',
        description: 'Using recycled glass (cullet) reduces furnace energy consumption by 25-30% and significantly lowers CO₂ emissions because it melts at a lower temperature than raw materials.',
    },
    {
        icon: Box,
        title: 'Raw Material Preservation',
        description: 'Every ton of recycled glass saves 1.2 tons of virgin raw materials from being mined, preserving natural resources like sand, soda ash, and limestone.',
    },
    {
        icon: AlertTriangle,
        title: 'Overcoming Contamination',
        description: 'We tackle the biggest barrier—mixing glass with ceramics, stones, or heat-resistant glass—by using advanced optical sorting to ensure pure, color-separated output.',
    },
    {
        icon: FileCheck,
        title: 'Complete Landfill Diversion',
        description: 'Glass is heavy and entirely non-biodegradable, meaning it takes up landfill space indefinitely. We divert 100% of collected glass back into the manufacturing cycle.',
    },
];

const GlassWasteWhyChooseUs = () => {
    return (
        <section className="glass-waste-why bg-white dark:bg-black !py-0">
            <div className="glass-waste-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="glass-waste-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="glass-waste-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="glass-waste-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The Urgent Need for Formal Glass Recycling
                    </h2>
                    <p className="glass-waste-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Glass is 100% recyclable, yet its potential is largely untapped in India's informal waste management landscape. <br />
                        Understanding the benefits and overcoming the barriers is critical.
                    </p>
                </div>

                <div className="glass-waste-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group glass-waste-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="glass-waste-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="glass-waste-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="glass-waste-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="glass-waste-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="glass-waste-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="glass-waste-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="glass-waste-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="glass-waste-why__cta-strong block text-white font-bold">Our Integrated Solution</h4>
                            <p className="font-semibold text-white/90">We address the entire value chain—from incentivized collection and education to high-tech sorting and creating a guaranteed market for the processed cullet with glass manufacturers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlassWasteWhyChooseUs;

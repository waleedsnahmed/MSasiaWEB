import React from 'react';
import { Route, Cog, Users, FileCheck, MapPin } from 'lucide-react';

const benefits = [
    {
        icon: Route,
        title: 'End-to-End Market Linkage',
        description: "We don't just collect; we ensure a guaranteed offtake for the cullet with established glass plants, creating a sustainable business model.",
    },
    {
        icon: Cog,
        title: 'Investment in Sorting Technology',
        description: 'Our use of optical sorting ensures color purity that meets the strict standards of container glass manufacturers, maximizing the value of the output.',
    },
    {
        icon: Users,
        title: 'Focus on Source Education',
        description: 'We work upstream to improve the quality of collected material, reducing processing costs and improving yields.',
    },
    {
        icon: FileCheck,
        title: 'Environmental Impact Transparency',
        description: 'We provide partners with data on the energy saved, raw materials conserved, and carbon emissions avoided through their recycling efforts, supporting ESG reporting.',
    },
    {
        icon: MapPin,
        title: 'Pan-India Collection Network',
        description: 'Developing aggregation hubs in high-generation urban and industrial centers across the subcontinent.',
    },
    {
        icon: FileCheck,
        title: 'Guaranteed Regulatory Compliance',
        description: 'Complete adherence to waste management rules and provision of accurate disposal certificates for risk-free business operations.',
    },
];

const GlassWasteBenefits = () => {
    return (
        <section className="glass-waste-benefits bg-white dark:bg-black !py-0">
            <div className="glass-waste-benefits__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="glass-waste-benefits__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="glass-waste-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="glass-waste-benefits__heading text-[#47622A] dark:text-[#799851]">
                        The MS Asia Enterprises Advantage
                    </h2>
                    <p className="glass-waste-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Our integrated capabilities and dedication to the circular economy set us apart in glass recycling.
                    </p>
                </div>

                <div className="glass-waste-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`glass-waste-benefits__card scroll-reveal p-4 md:p-[32px] min-h-fit md:min-h-[245px] rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-2 md:gap-4 items-start text-left ${index === 4 ? 'lg:col-start-2' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-4">
                                <div className="glass-waste-benefits__card-icon-wrap w-14 h-14 shrink-0 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024] flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h4 className="glass-waste-benefits__card-title">
                                    {benefit.title}
                                </h4>
                            </div>
                            <p className="glass-waste-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlassWasteBenefits;

import React from 'react';
import { FileCheck, TrendingUp, Settings, LineChart } from 'lucide-react';

const whyPoints = [
    {
        icon: FileCheck,
        title: 'Compliance Without the Stress',
        description: 'Ensures full adherence to environmental, health, and privacy regulations with complete regulatory support and detailed documentation.',
    },
    {
        icon: TrendingUp,
        title: 'Cost Control & Value',
        description: 'Provides highly cost-effective and scalable waste solutions tailored specifically to your budget constraints and business size.',
    },
    {
        icon: Settings,
        title: 'Operational Reliability',
        description: 'Improves operational efficiency by offering reliable, timely service with absolutely minimal disruption to your daily workflow.',
    },
    {
        icon: LineChart,
        title: 'Focus on Growth',
        description: 'Frees up valuable staff time and owner attention by handling all waste logistics, so you can focus entirely on core business activities.',
    },
];

const SmallBusinessesWhyChooseUs = () => {
    return (
        <section className="small-businesses-why bg-white dark:bg-black !py-0">
            <div className="small-businesses-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="small-businesses-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="small-businesses-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="small-businesses-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Balancing Limited Resources with Complex Compliance
                    </h2>
                    <p className="small-businesses-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Without proper segregation, disposal, and recycling practices, small businesses risk financial penalties, environmental harm, and operational inefficiencies. <br />
                        Handling hazardous materials and meeting complex regulations requires specialized knowledge that small staff may lack. We bridge that gap by acting as your outsourced recycling and compliance department.
                    </p>
                </div>

                <div className="small-businesses-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group small-businesses-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="small-businesses-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="small-businesses-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="small-businesses-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="small-businesses-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="small-businesses-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="small-businesses-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="small-businesses-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="small-businesses-why__cta-strong block text-white font-bold">MS Asia Enterprises is the definitive solution.</h4>
                            <p className="font-semibold text-white/90">Our partnership transforms waste management from a risk and an administrative burden into a reliable, highly efficient, and compliant part of your daily operation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmallBusinessesWhyChooseUs;

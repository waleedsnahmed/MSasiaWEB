import React from 'react';
import { Factory, Zap, Car, Building2, HardHat, Train } from 'lucide-react';

const industries = [
    {
        icon: Zap,
        title: 'Power Generation & Distribution',
        examples: 'Discoms, Gencos, Substations',
        description: 'Comprehensive decommissioning and recovery for power transformers and utility-scale electrical grid infrastructure.',
    },
    {
        icon: Factory,
        title: 'Heavy Engineering & Manufacturing',
        examples: 'General Manufacturing Units, Fabricators',
        description: 'Value recovery from heavy-duty industrial motors, HVAC systems, and factory-floor electrical equipment.',
    },
    {
        icon: Car,
        title: 'Automotive Components',
        examples: 'Assembly Plants, EV Manufacturing',
        description: 'Recycling of specialized traction motors, servo drives, and robotic assembly line transformers.',
    },
    {
        icon: Building2,
        title: 'Textile, Cement & Steel',
        examples: 'Mills, Primary Metal Facilities',
        description: 'Collection and processing of ruggedized motors and high-voltage electrical setups used in harsh environments.',
    },
    {
        icon: HardHat,
        title: 'Infrastructure & Demolition',
        examples: 'Construction Firms, HVAC Contractors',
        description: 'Site-clearance scrap collection for commercial building demolitions and large-scale infrastructure renovations.',
    },
    {
        icon: Train,
        title: 'Railways & PSUs',
        examples: 'Public Sector Undertakings',
        description: 'Compliant disposal and asset recovery for railway traction motors and heavy public-utility electrical assets.',
    },
];

const MotorTransformerScrapIndustries = () => {
    return (
        <section className="mts-industries bg-white dark:bg-black !py-0 w-full flex justify-center">
            <div className="mts-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px] w-full">
                <div className="mts-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="mts-industries__label text-[#47622A] dark:text-[#799851] uppercase font-bold tracking-wider">Industries We Serve</h6>
                    <h2 className="mts-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Specialized Sector Support
                    </h2>
                    <p className="mts-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We service large industrial closures and routine scrap generation across India's core sectors.
                    </p>
                </div>

                <div className="mts-industries__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-0">
                    {industries.map((ind, index) => (
                        <div
                            key={index}
                            className="mts-industries__card scroll-reveal p-4 md:p-[32px] rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-[#47622A]/30 dark:hover:border-[#799851]/30 transition-all hover:shadow-lg group flex flex-col gap-2 md:gap-4 items-start text-left"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-4 w-full">
                                <div className="mts-industries__card-icon-wrap w-14 h-14 shrink-0 rounded-xl bg-white dark:bg-black border border-gray-100 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <ind.icon className="w-6 h-6 text-[#47622A] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="mts-industries__card-title dark:text-white text-gray-900 leading-tight md:leading-normal">
                                        {ind.title}
                                    </h4>
                                    <span className="text-xs text-[#47622A] dark:text-[#799851] font-medium uppercase tracking-wider">{ind.examples}</span>
                                </div>
                            </div>
                            <p className="mts-industries__card-description dark:text-gray-400 text-gray-500 text-sm md:text-base">
                                {ind.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MotorTransformerScrapIndustries;

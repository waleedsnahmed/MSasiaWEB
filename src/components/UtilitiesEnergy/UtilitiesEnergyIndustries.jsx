import React from 'react';
import { Factory, Wind, Settings, Zap, ShieldAlert, Thermometer, Battery, Map } from 'lucide-react';

const industries = [
    { icon: Factory, title: 'Fossil Fuel Plants', description: 'Management of coal combustion residuals and decommissioning projects ensuring EPA compliance.' },
    { icon: Wind, title: 'Renewable Operations', description: 'Lifecycle waste solutions for complex solar and wind farm composite materials.' },
    { icon: Settings, title: 'Investor-Owned Utilities', description: 'Enterprise-scale asset recovery prioritizing grid reliability and environmental compliance.' },
    { icon: Zap, title: 'T&D Operations', description: 'Continuous support for managing retired cables, transformers, and storm-damaged infrastructure.' },
    { icon: ShieldAlert, title: 'Nuclear Decommissioning', description: 'Logistics and processing for non-radiological, clean scrap generated during plant retirement.' },
    { icon: Thermometer, title: 'Natural Gas Utilities', description: 'Solutions for modernization, handling coated pipes and contaminated soils.' },
    { icon: Battery, title: 'Battery Storage Systems', description: 'Management of end-of-life batteries navigating complex hazardous waste protocols.' },
    { icon: Map, title: 'Municipal Utilities', description: 'Scalable waste management programs designed for specific local budgetary and operational needs.' },
];

const UtilitiesEnergyIndustries = () => {
    return (
        <section className="utilities-industries bg-white dark:bg-black !py-0">
            <div className="utilities-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="utilities-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="utilities-industries__label text-[#47622A] dark:text-[#799851] uppercase">Energy Sector</h6>
                    <h2 className="utilities-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Energy Facilities We Support
                    </h2>
                    <p className="utilities-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our services are tailored to operational scale, waste complexity, and regulatory requirements, ensuring safe and compliant waste handling.
                    </p>
                </div>

                <div className="utilities-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="utilities-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="utilities-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="utilities-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="utilities-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UtilitiesEnergyIndustries;

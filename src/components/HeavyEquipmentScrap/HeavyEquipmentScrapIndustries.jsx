import React from 'react';
import { Pickaxe, Building2, Factory, Zap, Anchor, ShieldCheck } from 'lucide-react';

const industries = [
    { icon: Pickaxe, title: 'Mining Operations', description: 'Decommissioning massive drill rigs, high-tonnage haul trucks, and extraction equipment from active pits.' },
    { icon: Building2, title: 'Construction & Infrastructure', description: 'Clearing end-of-life earthmoving equipment and tower cranes from concluded megaprojects.' },
    { icon: Factory, title: 'Manufacturing Plants', description: 'Turnkey removal of obsolete industrial presses, heavy machine tools, and full production lines.' },
    { icon: Zap, title: 'Power Plants & Utilities', description: 'Systematic dismantling of aged boilers, massive turbines, and obsolete transmission infrastructure.' },
    { icon: Anchor, title: 'Ports & Railways', description: 'Recovery of gantry cranes, marine loading equipment, locomotives, and rail freight assets.' },
    { icon: ShieldCheck, title: 'Defense & PSUs', description: 'Secure, legally compliant disposal of heavy government equipment with full audit transparency.' },
];

const HeavyEquipmentScrapIndustries = () => {
    return (
        <section className="ewaste-industries bg-white dark:bg-black !py-0">
            <div className="ewaste-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors We Serve</h6>
                    <h2 className="ewaste-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Industrial Nodes Nationwide
                    </h2>
                    <p className="ewaste-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        From the coal mines of Jharkhand to the construction hubs of Maharashtra, we mobilize heavy dismantling teams across India.
                    </p>
                </div>

                <div className="ewaste-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="ewaste-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="ewaste-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="ewaste-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="ewaste-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeavyEquipmentScrapIndustries;

import React from 'react';
import { Server, Database, Factory, Cpu, GraduationCap, Zap, ShoppingCart, Building2 } from 'lucide-react';

const industries = [
    { icon: Server, title: 'Information Technology & ITeS', description: 'Secure decommissioning for data centers and office IT refresh cycles.' },
    { icon: Database, title: 'BFSI', description: 'High-security data destruction for retired servers, ATMs, and storage media.' },
    { icon: Factory, title: 'Manufacturing & Automotive', description: 'Recycling of industrial automation, control systems, and electronic production scrap.' },
    { icon: Cpu, title: 'Healthcare & Pharmaceuticals', description: 'Compliant disposal of diagnostic and lab electronics after necessary decontamination.' },
    { icon: GraduationCap, title: 'Education & Government', description: 'Cost-effective, pan-India collection and recycling programs for institutions.' },
    { icon: Zap, title: 'Telecommunications & Media', description: 'Decommissioning of network infrastructure and broadcast equipment.' },
    { icon: ShoppingCart, title: 'Retail & Consumer Goods', description: 'Take-back schemes and end-of-life management for electronic products.' },
    { icon: Building2, title: 'Real Estate & Hospitality', description: 'End-of-lifecycle management for building automation and hospitality systems.' },
];

const EWasteIndustries = () => {
    return (
        <section className="ewaste-industries bg-white dark:bg-black">
            <div className="ewaste-industries__container max-w-screen-2xl mx-auto px-0 flex flex-col gap-[24px]">
                <div className="ewaste-industries__header text-center flex flex-col items-center gap-4 scroll-reveal">
                    <h6 className="ewaste-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="ewaste-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Industries We Serve
                    </h2>
                    <p className="ewaste-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Tailored solutions for diverse sectors across India.
                    </p>
                </div>

                <div className="ewaste-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="ewaste-industries__card scroll-reveal flex flex-col gap-4 p-[12px] md:p-[24px] min-h-[280px] items-center text-center justify-center rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="ewaste-industries__card-icon w-16 h-16 rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851]  flex items-center justify-center">
                                <industry.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                            </div>
                             <h4 className="ewaste-industries__card-title">
                                {industry.title}
                            </h4>
                            <p className="ewaste-industries__card-description dark:text-gray-400 text-gray-500">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EWasteIndustries;

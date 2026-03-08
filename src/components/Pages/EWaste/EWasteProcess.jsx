import React from 'react';
import { FileCheck, Shield, MapPin, Recycle, TrendingUp, CheckCircle2 } from 'lucide-react';

const processSteps = [
    {
        phase: 'Phase 1',
        title: 'Assessment & Planning',
        description: 'A dedicated account manager conducts a detailed assessment (on-site or virtual) to catalogue all electronic assets—IT equipment, lab devices, industrial scrap, etc. We develop a customized plan that aligns with your operational schedule, data security protocols, and sustainability goals.',
        icon: FileCheck,
    },
    {
        phase: 'Phase 2',
        title: 'Secure On-Site Collection',
        description: 'Our uniformed, trained crews arrive at your scheduled time with secure vehicles and handling gear. Each asset is logged into our digital tracking system with a unique ID. For data-bearing devices, we can perform on-site data wiping or apply tamper-proof seals.',
        icon: Shield,
    },
    {
        phase: 'Phase 3',
        title: 'GPS-Tracked Transportation',
        description: 'All collected assets are transported in our GPS-tracked, secure vehicles directly to our CPCB/SPCB-authorized processing facilities. We maintain full liability throughout transit.',
        icon: MapPin,
    },
    {
        phase: 'Phase 4',
        title: 'Systematic Processing',
        description: 'Material is weighed and audited. All data storage devices undergo irreversible destruction through degaussing and physical shredding. Skilled technicians disassemble items, segregating components into over 40 pure streams.',
        icon: Recycle,
    },
    {
        phase: 'Phase 5',
        title: 'Material Recovery',
        description: "Components undergo mechanical processing to achieve high-purity grades. Recovered materials are sent to authorized smelters and processors to become raw materials for new products, fueling India's circular economy.",
        icon: TrendingUp,
    },
    {
        phase: 'Phase 6',
        title: 'Certification & Reporting',
        description: 'You receive a comprehensive Certificate of Recycling & Data Destruction. This document is crucial for demonstrating EPR compliance, fulfilling ISO 14001 requirements, and providing evidence for ESG reporting.',
        icon: CheckCircle2,
    },
];

const EWasteProcess = () => {
    return (
        <section id="process" className="ewaste-process bg-white dark:bg-black">
            <div className="ewaste-process__container max-w-screen-2xl mx-auto px-0 flex flex-col gap-[48px]">
                <div className="ewaste-process__header text-center flex flex-col items-center gap-4 scroll-reveal">
                    <p className="ewaste-process__label text-[#47622A] dark:text-[#799851] font-bold text-sm tracking-widest uppercase ">Our Expertise</p>
                    <h2 className="ewaste-process__heading text-4xl md:text-5xl font-bold  dark:text-white text-gray-900 leading-tight">
                        Our <span className="ewaste-process__heading-accent !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">Certified Process</span>
                    </h2>
                    <p className="ewaste-process__subtitle text-lg mx-auto dark:text-gray-400 text-gray-600 max-w-none leading-relaxed">
                        A Step-by-Step Framework for India: We operate on a foundation of transparency, security, and compliance.
                    </p>
                </div>

                <div className="ewaste-process__list flex flex-col gap-6 lg:gap-8">
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`ewaste-process__step scroll-reveal flex flex-col items-center gap-6 p-6 lg:p-8 rounded-3xl dark:bg-[#111] bg-gray-50 border border-transparent dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-colors ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="ewaste-process__step-icon-wrap flex-shrink-0 w-full md:w-auto">
                                    <div className="ewaste-process__step-icon w-16 h-16 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-[#47622A] to-[#799851] flex items-center justify-center shadow-md">
                                        <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                    </div>
                                </div>
                                <div className="ewaste-process__step-body flex-grow w-full flex flex-col gap-2 text-center md:text-left">
                                    <div className="ewaste-process__step-phase text-[#47622A] dark:text-[#799851] font-bold text-xs tracking-widest uppercase ">
                                        {step.phase}
                                    </div>
                                    <h3 className="ewaste-process__step-title text-xl font-bold  dark:text-white text-gray-900">
                                        {step.title}
                                    </h3>
                                    <p className="ewaste-process__step-description dark:text-gray-400 text-gray-600 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default EWasteProcess;

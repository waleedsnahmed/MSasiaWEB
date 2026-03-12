import React from 'react';
import { FileCheck, Shield, MapPin, Recycle, TrendingUp, CheckCircle2 } from 'lucide-react';

const processSteps = [
    {
        phase: 'Phase 1',
        title: 'Assessment & Planning',
        description: 'A dedicated account manager conducts a detailed assessment (on-site or virtual) to securely catalog your IT equipment, lab devices, and industrial scrap. We then create a fully customized recycling plan aligned with your operational schedule and sustainability goals.',
        icon: FileCheck,
    },
    {
        phase: 'Phase 2',
        title: 'Secure On-Site Collection',
        description: (<>Our certified collection crews arrive at your scheduled time to securely log each electronic asset into our advanced digital tracking system.<br />For data-bearing devices, we perform specialized on-site data wiping or apply tamper-proof seals for complete chain-of-custody security.</>),
        icon: Shield,
    },
    {
        phase: 'Phase 3',
        title: 'GPS-Tracked Transportation',
        description: 'All collected electronic assets are transported in our GPS-tracked, fully insured, and secured vehicles directly to our authorized processing facilities. We maintain complete legal and operational liability and provide real-time shipment tracking throughout transit.',
        icon: MapPin,
    },
    {
        phase: 'Phase 4',
        title: 'Systematic Processing',
        description: 'Material is accurately weighed and audited, and all data storage devices undergo irreversible physical destruction via specialized industrial shredding. Skilled technicians efficiently disassemble items, segregating components into forty distinct pure recovery streams.',
        icon: Recycle,
    },
    {
        phase: 'Phase 5',
        title: 'Material Recovery',
        description: 'Recovered electronic components undergo advanced mechanical processing to achieve diverse high-purity material grades for industrial reuse. These materials directly power the circular economy, becoming essential raw inputs for new products at authorized smelters.',
        icon: TrendingUp,
    },
    {
        phase: 'Phase 6',
        title: 'Certification & Reporting',
        description: 'You receive a comprehensive, legally recognized Certificate of Recycling and Data Destruction detailing the precise processing outcome for every asset. This documentation demonstrates EPR compliance and provides verifiable evidence for your corporate ESG reporting.',
        icon: CheckCircle2,
    },
];

const EWasteProcess = () => {
    return (
        <section id="process" className="ewaste-process bg-white dark:bg-black flex justify-center">
            <div className="ewaste-process__container max-w-[1152px] px-0 flex flex-col gap-[24px] w-full">
                <div className="ewaste-process__header text-center flex flex-col items-center gap-4 scroll-reveal">
                    <h6 className="ewaste-process__label text-[#47622A] dark:text-[#799851] uppercase">Our Expertise</h6>
                    <h2 className="ewaste-process__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Our Certified Process
                    </h2>
                    <p className="ewaste-process__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        A Step-by-Step Framework for India: We operate on a foundation of transparency, security, and compliance.
                    </p>
                </div>

                <div className="ewaste-process__list flex flex-col gap-6 lg:gap-8 w-full">
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`ewaste-process__step scroll-reveal flex flex-col items-center gap-6 p-[12px] md:p-[24px] rounded-3xl dark:bg-[#111] bg-gray-50 border border-transparent dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-colors w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="ewaste-process__step-icon-wrap flex-shrink-0 w-full md:w-auto">
                                    <div className="ewaste-process__step-icon w-16 h-16 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-[#47622A] to-[#799851] flex items-center justify-center shadow-md">
                                        <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                    </div>
                                </div>
                                <div className="ewaste-process__step-body flex-1 w-full flex flex-col text-center md:text-left">
                                    <h6 className="ewaste-process__step-phase text-[#47622A] dark:text-[#799851] uppercase">
                                        {step.phase}
                                    </h6>
                                    <h3 className="ewaste-process__step-title">
                                        {step.title}
                                    </h3>
                                    <p className="ewaste-process__step-description dark:text-gray-400 text-gray-600 text-justify">
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

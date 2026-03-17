import React, { useRef, useLayoutEffect } from 'react';
import { FileCheck, Shield, MapPin, Recycle, TrendingUp, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    const containerRef = useRef(null);
    const innersRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            innersRef.current.forEach((inner, index) => {
                if (!inner) return;

                // Elements inside the inner wrap
                const icon = inner.querySelector('.ewaste-process__step-icon');
                const phase = inner.querySelector('.ewaste-process__step-phase');
                const title = inner.querySelector('.ewaste-process__step-title');
                const desc = inner.querySelector('.ewaste-process__step-description');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: inner.parentElement, // Trigger exactly when the static outer boundary hits
                        start: "top 65%", // Typically matches the leading edge of the roadmap drawing
                    },
                    onComplete: () => {
                        // Clear inline GSAP styles after completion so hover CSS keeps working
                        gsap.set([inner, icon, phase, title, desc], { clearProps: "all" });
                    }
                });

                // 1. Inner Card: Smooth fade and lift
                tl.fromTo(inner, 
                    { y: 60, opacity: 0, scale: 0.97 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1.4,
                        ease: "expo.out",
                        force3D: true
                    }
                )
                // 2. Icon: Pop-in
                .fromTo(icon, 
                    { scale: 0.7, opacity: 0, },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.2,
                        ease: "elastic.out(1, 0.7)"
                    }, 
                    "-=1.1"
                )
                // 3. Text Elements
                .fromTo([phase, title, desc],
                    { y: 20, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        stagger: 0.15,
                        ease: "power4.out"
                    },
                    "-=1.1"
                );
            });
        }, containerRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section id="roadmap-process" className="ewaste-process bg-transparent flex justify-center relative" ref={containerRef}>
            <div className="ewaste-process__container max-w-[1152px] px-4 md:px-0 flex flex-col gap-[24px] w-full">
                <div className="ewaste-process__header text-center flex flex-col items-center gap-4">
                    <h6 className="ewaste-process__label text-[#47622A] dark:text-[#799851] uppercase">Our Expertise</h6>
                    <h2 className="ewaste-process__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Our Certified Process
                    </h2>
                    <p className="ewaste-process__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        A Step-by-Step Framework for India: We operate on a foundation of transparency, security, and compliance.
                    </p>
                </div>

                <div className="ewaste-process__list relative flex flex-col gap-8 w-full">
                    {/* Progress Line removed for global ScrollVibe overlay */}

                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                id={`ew-process-step-${index}`}
                                className={`group w-full relative z-10 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Inner wrapper for animation to prevent outer bounding rect shift */}
                                <div 
                                    ref={el => innersRef.current[index] = el}
                                    className={`ewaste-process__step-inner flex flex-col items-center gap-6 p-[24px] rounded-[24px] bg-white dark:bg-[#111] border border-[#799851] transition-all duration-300 w-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-[#47622A] ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                <div className="ewaste-process__step-icon-wrap flex-shrink-0 w-full md:w-auto">
                                    <div className="ewaste-process__step-icon w-16 h-16 mx-auto md:mx-0 rounded-2xl bg-[#799851] dark:bg-[#47622A] flex items-center justify-center shadow-md transition-transform duration-300">
                                        <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                    </div>
                                </div>
                                <div className="ewaste-process__step-body flex-1 w-full flex flex-col text-center md:text-left">
                                    <h6 className="ewaste-process__step-phase text-[#799851] dark:text-[#799851] uppercase font-bold text-sm tracking-widest">
                                        {step.phase}
                                    </h6>
                                    <h3 className="ewaste-process__step-title text-2xl font-bold text-black dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="ewaste-process__step-description text-gray-600 dark:text-gray-400 text-base leading-relaxed text-justify md:text-left">
                                        {step.description}
                                    </p>
                                </div>
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


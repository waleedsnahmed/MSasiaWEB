import React, { useEffect, useRef, useState } from 'react';
import { FileCheck, Shield, MapPin, Recycle, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';

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

// Sub-component for the flowing roadmap line
const FlowingLiquidPath = ({ pathProgress }) => {
    const containerRef = useRef(null);
    const [pathData, setPathData] = useState("");
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const calculatePath = () => {
            if (!containerRef.current) return;
            const container = containerRef.current.parentElement;
            if (!container) return;

            const cards = container.querySelectorAll("[data-phase-card]");
            if (cards.length === 0) return;

            const containerRect = container.getBoundingClientRect();
            const r = 32; // Corner radius for the flowing path
            const padding = 0; // Padding from card edge

            let path = "";
            let currentX = containerRect.width / 2;

            // Start from top center
            path = `M ${currentX} 0`;

            cards.forEach((card, index) => {
                const cardRect = card.getBoundingClientRect();
                const left = cardRect.left - containerRect.left;
                const right = cardRect.right - containerRect.left;
                const top = cardRect.top - containerRect.top;
                const bottom = cardRect.bottom - containerRect.top;
                const centerX = left + (right - left) / 2;

                // 1. Line to top center of the card
                path += ` L ${centerX} ${top}`;

                if (index % 2 === 0) {
                    // Phase 1, 3, 5: Snake Right
                    path += ` L ${right} ${top}`;
                    path += ` L ${right} ${bottom}`;
                    path += ` L ${centerX} ${bottom}`;
                } else {
                    // Phase 2, 4, 6: Snake Left
                    path += ` L ${left} ${top}`;
                    path += ` L ${left} ${bottom}`;
                    path += ` L ${centerX} ${bottom}`;
                }
            });

            // Final extension to bottom of container
            path += ` L ${containerRect.width / 2} ${containerRect.height}`;

            setPathData(path);
            setDimensions({ width: containerRect.width, height: containerRect.height });
        };

        const timer = setTimeout(calculatePath, 500); // Wait for animations
        const resizeObserver = new ResizeObserver(() => setTimeout(calculatePath, 100));
        if (containerRef.current?.parentElement) {
            resizeObserver.observe(containerRef.current.parentElement);
        }

        return () => {
            clearTimeout(timer);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
            <svg
                width={dimensions.width}
                height={dimensions.height}
                className="absolute inset-0"
                style={{ overflow: "visible" }}
            >
                <defs>
                    <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#799851" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#47622A" stopOpacity="1" />
                        <stop offset="100%" stopColor="#799851" stopOpacity="0.9" />
                    </linearGradient>
                    <filter id="liquidGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feFlood floodColor="#47622A" floodOpacity="0.5" result="color" />
                        <feComposite in="color" in2="blur" operator="in" result="glow" />
                        <feMerge>
                            <feMergeNode in="glow" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <path
                    d={pathData}
                    fill="none"
                    stroke="#47622A"
                    strokeWidth="4"
                    strokeOpacity="0.05"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
                <motion.path
                    d={pathData}
                    fill="none"
                    stroke="url(#liquidGradient)"
                    strokeWidth="4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    filter="url(#liquidGlow)"
                    style={{ pathLength: pathProgress }}
                    initial={{ pathLength: 0 }}
                />
                <motion.path
                    d={pathData}
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    style={{ pathLength: pathProgress }}
                    initial={{ pathLength: 0 }}
                />
            </svg>
        </div>
    );
};

const EWasteProcess = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.2"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 15,
        restDelta: 0.001
    });

    return (
        <section ref={sectionRef} id="process" className="ewaste-process bg-white dark:bg-black flex justify-center py-12 md:py-20 overflow-hidden">
            <div className="ewaste-process__container max-w-[1152px] px-4 md:px-0 flex flex-col gap-[48px] w-full">
                <motion.div 
                    className="ewaste-process__header text-center flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h6 className="ewaste-process__label text-[#47622A] dark:text-[#799851] uppercase font-bold tracking-widest text-xs">Our Expertise</h6>
                    <h2 className="ewaste-process__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851] text-3xl md:text-5xl font-bold">
                        Our Certified Process
                    </h2>
                    <p className="ewaste-process__subtitle dark:text-gray-400 text-gray-600 max-w-2xl text-sm md:text-base">
                        A Step-by-Step Framework for India: We operate on a foundation of transparency, security, and compliance.
                    </p>
                </motion.div>

                <div ref={containerRef} className="relative w-full">
                    {/* Start Orb */}
                    <motion.div 
                        className="absolute left-1/2 -top-8 -translate-x-1/2 z-20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#799851] to-[#47622A] shadow-[0_0_15px_rgba(71,98,42,0.6)]" />
                    </motion.div>

                    {/* Flowing Liquid Path */}
                    <FlowingLiquidPath pathProgress={smoothProgress} />

                    <div className="ewaste-process__list flex flex-col gap-8 w-full relative z-10">
                        {processSteps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    data-phase-card
                                    className={`ewaste-process__step flex flex-col items-center gap-6 p-[20px] md:p-[32px] rounded-3xl dark:bg-[#111] bg-gray-50/50 border border-transparent dark:border-white/5 hover:border-[#47622A]/20 dark:hover:border-[#799851]/20 transition-all duration-500 w-full relative group ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="ewaste-process__step-icon-wrap flex-shrink-0 w-full md:w-auto">
                                        <div className="ewaste-process__step-icon w-16 h-16 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-[#47622A] to-[#799851] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                                            <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                        </div>
                                    </div>
                                    <div className={`ewaste-process__step-body flex-1 w-full flex flex-col text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                        <h6 className="ewaste-process__step-phase text-[#47622A] dark:text-[#799851] uppercase font-bold text-[10px] tracking-widest mb-1">
                                            {step.phase}
                                        </h6>
                                        <h3 className="ewaste-process__step-title text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#47622A] dark:group-hover:text-[#799851]">
                                            {step.title}
                                        </h3>
                                        <p className="ewaste-process__step-description dark:text-gray-400 text-gray-600 text-[15px] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* End Orb */}
                    <motion.div 
                        className="absolute left-1/2 -bottom-8 -translate-x-1/2 z-20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#799851] to-[#47622A] shadow-[0_0_15px_rgba(71,98,42,0.6)]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EWasteProcess;

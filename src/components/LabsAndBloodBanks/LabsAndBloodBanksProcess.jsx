import React, { useRef } from 'react';
import { ClipboardCheck, LayoutTemplate, Truck, Package, ShieldCheck, Award } from 'lucide-react';
import { motion, useScroll, useInView } from 'framer-motion';

const phases = [
  {
    number: 1,
    title: 'Waste Assessment & Regulatory Mapping',
    description: 'Our process begins with a detailed on-site assessment. We evaluate the types of waste generated, frequency, risk level, and existing storage practices to design a completely customized waste management plan.',
    icon: ClipboardCheck,
    color: 'from-blue-400 to-cyan-500',
    gradient: 'bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-900/30 dark:to-cyan-900/30',
    shadowColor: 'rgba(56, 189, 248, 0.4)'
  },
  {
    number: 2,
    title: 'Segregation & Safe Storage at Source',
    description: 'Proper segregation is the foundation. We supply color-coded containers, puncture-resistant sharps units, and leak-proof bins placed strategically to support safe workflows and eliminate cross-contamination.',
    icon: LayoutTemplate,
    color: 'from-emerald-400 to-teal-500',
    gradient: 'bg-gradient-to-br from-emerald-50/60 to-teal-50/60 dark:from-emerald-900/30 dark:to-teal-900/30',
    shadowColor: 'rgba(20, 184, 166, 0.4)'
  },
  {
    number: 3,
    title: 'Secure & Scheduled Collection',
    description: 'We provide reliable, scheduled collection services with trained personnel. Collections are planned to integrate seamlessly with your daily blood bank operations, avoiding any overfilling or storage risks.',
    icon: Truck,
    color: 'from-amber-400 to-orange-500',
    gradient: 'bg-gradient-to-br from-amber-50/60 to-orange-50/60 dark:from-amber-900/30 dark:to-orange-900/30',
    shadowColor: 'rgba(245, 158, 11, 0.4)'
  },
  {
    number: 4,
    title: 'Compliant Transportation',
    description: 'All waste is transported using authorized vehicles specifically designed for medical waste. We ensure secure containment and maintain full chain-of-custody documentation throughout transit.',
    icon: Package,
    color: 'from-rose-400 to-pink-500',
    gradient: 'bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-900/30 dark:to-pink-900/30',
    shadowColor: 'rgba(244, 63, 94, 0.4)'
  },
  {
    number: 5,
    title: 'Treatment, Recycling & Final Disposal',
    description: 'Biohazardous waste is treated through autoclaving or incineration. Sharps are destroyed, chemical waste is neutralized, and non-contaminated materials are recycled responsibly to protect the environment.',
    icon: ShieldCheck,
    color: 'from-green-400 to-lime-500',
    gradient: 'bg-gradient-to-br from-green-50/60 to-lime-50/60 dark:from-green-900/30 dark:to-lime-900/30',
    shadowColor: 'rgba(132, 204, 22, 0.4)'
  },
  {
    number: 6,
    title: 'Documentation & Audit Support',
    description: 'We provide complete compliance documentation, including waste manifests, treatment certificates, and regulatory reports. This transparency allows blood banks to demonstrate compliance with absolute confidence.',
    icon: Award,
    color: 'from-sky-400 to-blue-500',
    gradient: 'bg-gradient-to-br from-sky-50/60 to-blue-50/60 dark:from-sky-900/30 dark:to-blue-900/30',
    shadowColor: 'rgba(14, 165, 233, 0.4)'
  }
];

const PhaseCard = ({ phase, index }) => {
    const cardRef = useRef(null);
    const Icon = phase.icon;
    const isEven = index % 2 === 0;

    // Trigger reveal once when it enters screen
    const isRevealed = useInView(cardRef, { once: true, margin: "-10% 0px" });
    // Trigger highlight continuously when near center of screen
    const isActive = useInView(cardRef, { margin: "-40% 0px -40% 0px" });

    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 80 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-0 md:mb-4 last:mb-0"
        >
            <div className={`flex items-center gap-2 md:gap-8 flex-col-reverse ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                <div className={`flex-1 w-full ${isEven ? 'md:text-right text-center' : 'md:text-left text-center'}`}>
                    <motion.div
                        animate={(isActive || isMobile) ? { 
                            scale: isMobile ? 1 : 1.05, 
                            opacity: 1, 
                            filter: "blur(0px)"
                        } : { 
                            scale: 0.98, 
                            opacity: 0.5, 
                            filter: "blur(2px)"
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`
                            bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 p-4 md:p-6 rounded-[24px]
                            backdrop-blur-md bg-white/90 dark:bg-[#111]/90
                            border border-[#47622A]/10 dark:border-[#799851]/20
                            relative z-20 group
                        `}
                    >
                        <div className={`flex items-center gap-3 justify-center md:justify-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <span className={`text-[18px] font-bold bg-gradient-to-r from-[#47622A] to-[#799851] bg-clip-text text-transparent normal-case`}>
                                phase {phase.number}
                            </span>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {phase.title}
                        </h4>
                        <p className={`text-gray-700 dark:text-gray-300 leading-relaxed text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                            {phase.description}
                        </p>
                    </motion.div>
                </div>

                <div className="relative flex-shrink-0 group z-20 my-0 md:my-0">
                    <motion.div
                        animate={(isActive && !isMobile) ? { scale: 1.15, rotate: 0 } : { scale: 1, rotate: 0 }}
                        whileHover={!isMobile ? { scale: 1.25, rotate: 10 } : {}}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`
                            w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#47622A] to-[#799851]
                            flex items-center justify-center
                        `}
                    >
                        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                    </motion.div>
                </div>

                <div className="flex-1 w-full hidden md:block" />
            </div>
        </motion.div>
    );
};

const LabsAndBloodBanksProcess = () => {
    const listRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: listRef,
        offset: ["start center", "end center"]
    });

    return (
        <section id="roadmap-process" className="labs-blood-banks-process bg-white dark:bg-black !p-0 flex justify-center overflow-hidden">
            <div className="labs-blood-banks-process__container max-w-[1400px] w-full flex flex-col gap-4 md:gap-6">
                <div className="text-center flex flex-col items-center gap-2 md:gap-4">
                    <motion.h6 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#47622A] dark:text-[#799851] uppercase font-bold tracking-wider"
                    >
                        Simplicity, Flexibility, and Compliance
                    </motion.h6>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]"
                    >
                        End-to-End Service Process
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        MS Asia Enterprises offers scalable and flexible services that integrate seamlessly into your operation.
                    </motion.p>
                </div>

                <div className="relative flex flex-col gap-4 md:block md:gap-0" ref={listRef}>
                    {/* SVG Animated Center Line (Desktop Only) */}
                    <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 hidden md:block z-0">
                        <svg className="absolute w-full h-[100%] overflow-visible" preserveAspectRatio="none">
                            {/* Background Track */}
                            <line 
                                x1="50%" y1="0" 
                                x2="50%" y2="100%" 
                                className="stroke-gray-300 dark:stroke-gray-800" 
                                strokeWidth="4" 
                                strokeDasharray="8 8" 
                            />
                            {/* Animated Foreground Line */}
                            <motion.line 
                                x1="50%" y1="0" 
                                x2="50%" y2="100%" 
                                className="stroke-[#799851]" 
                                strokeWidth="4" 
                                strokeLinecap="round"
                                style={{ pathLength: scrollYProgress }} 
                            />
                        </svg>
                    </div>

                    {phases.map((phase, index) => (
                        <PhaseCard key={phase.number} phase={phase} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LabsAndBloodBanksProcess;

import React, { useRef } from 'react';
import { PackageOpen, ScanSearch, Settings2, FlaskConical, ShoppingBag } from 'lucide-react';
import { motion, useScroll, useInView } from 'framer-motion';

const phases = [
  {
    number: 1,
    title: 'Intelligent Collection Systems',
    description: 'We deploy tailored infrastructure spanning garment manufacturing off-cuts, corporate uniform take-back programs, institutional drops, and integrated municipal waste aggregation.',
    icon: PackageOpen,
    color: 'from-blue-400 to-cyan-500',
    gradient: 'bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-900/30 dark:to-cyan-900/30',
    shadowColor: 'rgba(56, 189, 248, 0.4)'
  },
  {
    number: 2,
    title: 'Advanced AI & Manual Sorting',
    description: 'Combining skilled manual curation with automated Near-Infrared (NIR) fiber spectroscopy, colour sorting, and precision robotic removal grids to completely isolate non-textile zippers.',
    icon: ScanSearch,
    color: 'from-emerald-400 to-teal-500',
    gradient: 'bg-gradient-to-br from-emerald-50/60 to-teal-50/60 dark:from-emerald-900/30 dark:to-teal-900/30',
    shadowColor: 'rgba(20, 184, 166, 0.4)'
  },
  {
    number: 3,
    title: 'Mechanical Processing Paths',
    description: 'Primary recovery shreds unblended fibers apart for direct yarn reclamation, processes industrial absorbent rags, and manufactures traditional shoddy for woolen textiles.',
    icon: Settings2,
    color: 'from-amber-400 to-orange-500',
    gradient: 'bg-gradient-to-br from-amber-50/60 to-orange-50/60 dark:from-amber-900/30 dark:to-orange-900/30',
    shadowColor: 'rgba(245, 158, 11, 0.4)'
  },
  {
    number: 4,
    title: 'Chemical Regeneration',
    description: 'For complex synthetics, we harness advanced polymer depolymerization breaking polyester down to pristine monomers and converting cellulosic blends back into raw regenerated fibers.',
    icon: FlaskConical,
    color: 'from-rose-400 to-pink-500',
    gradient: 'bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-900/30 dark:to-pink-900/30',
    shadowColor: 'rgba(244, 63, 94, 0.4)'
  },
  {
    number: 5,
    title: 'Market Product Manufacturing',
    description: 'Processed materials are transformed actively into recycled fashion yarns, thermal denim insulation, acoustic vehicle panels, and sustainable geo-textile packaging products.',
    icon: ShoppingBag,
    color: 'from-purple-400 to-fuchsia-500',
    gradient: 'bg-gradient-to-br from-purple-50/60 to-fuchsia-50/60 dark:from-purple-900/30 dark:to-fuchsia-900/30',
    shadowColor: 'rgba(192, 38, 211, 0.4)'
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
                                Stage {phase.number}
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

const TextileFabricProcess = () => {
    const listRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: listRef,
        offset: ["start center", "end center"]
    });

    return (
        <section id="roadmap-process" className="textile-fabric-process bg-white dark:bg-black !p-0 flex justify-center overflow-hidden">
            <div className="textile-fabric-process__container max-w-[1400px] w-full flex flex-col gap-4 md:gap-6">
                <div className="text-center flex flex-col items-center gap-2 md:gap-4">
                    <motion.h6 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#47622A] dark:text-[#799851] uppercase font-bold tracking-wider"
                    >
                        Service Hierarchy
                    </motion.h6>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]"
                    >
                        Comprehensive Textile Framework
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        We deploy intelligent collection methodologies matched meticulously to the world's most advanced chemical and thermal recycling pathways.
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

export default TextileFabricProcess;

import React, { useRef, useLayoutEffect } from 'react';
import { Shield, FileCheck, TrendingUp, Zap, CheckCircle2, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
    {
        icon: Shield,
        title: 'Data Risk Elimination',
        description: 'Complete eradication of data breach risks from retired assets.',
    },
    {
        icon: FileCheck,
        title: 'Regulatory Peace of Mind',
        description: 'Assured compliance with E-Waste Rules, 2022, and other applicable laws.',
    },
    {
        icon: TrendingUp,
        title: 'Enhanced ESG Profile',
        description: 'Robust documentation to strengthen your sustainability reports and brand reputation as a responsible corporate citizen.',
    },
    {
        icon: Zap,
        title: 'Resource Conservation',
        description: "Recycling metals uses 70-90% less energy than virgin mining. You directly reduce India's resource import burden.",
    },
    {
        icon: CheckCircle2,
        title: 'Toxin Prevention',
        description: 'Responsible diversion of hazardous materials protects local communities and ecosystems.',
    },
    {
        icon: Users,
        title: 'Operational Efficiency',
        description: 'Clear storage space, eliminate administrative burden, and streamline asset retirement with a single, accountable partner.',
    },
];

const EWasteBenefits = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Header fades in
            gsap.fromTo(headerRef.current,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 75%", 
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power4.out"
                }
            );

            // 2. Cards fade in sequentially as the single purple line travels down the left margin
            cardsRef.current.forEach((card, index) => {
                if (!card) return;
                gsap.fromTo(card,
                    { y: 60, opacity: 0, scale: 0.96 },
                    {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 65%", // Line runs parallel
                        },
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1.4,
                        ease: "expo.out",
                        clearProps: "transform,scale" // Free hover state
                    }
                );
            });
        }, containerRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section className="ewaste-benefits bg-transparent relative" ref={containerRef}>
            <div className="ewaste-benefits__container max-w-screen-2xl mx-auto px-0 flex flex-col gap-[24px]">
                <div ref={headerRef} className="ewaste-benefits__header text-center flex flex-col items-center gap-4">
                    <h6 className="ewaste-benefits__label text-[#5a7638] dark:text-[#799851] uppercase">Why Partner</h6>
                    <h2 className="ewaste-benefits__heading text-[#47622A] dark:text-[#799851]">
                        Why Choose MS Asia Enterprises
                    </h2>
                    <p className="ewaste-benefits__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Leading Indian and multinational companies trust us for secure, compliant, and sustainable e-waste management.
                    </p>
                </div>

                <div className="ewaste-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="ewaste-benefits__card p-[12px] md:p-[32px] min-h-[245px] rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col gap-4 items-start text-left relative z-10"
                        >
                            <div className="ewaste-benefits__card-icon-wrap w-14 h-14 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024]  flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                            </div>
                            <h4 className="ewaste-benefits__card-title">
                                {benefit.title}
                            </h4>
                            <p className="ewaste-benefits__card-description dark:text-gray-400 text-gray-500">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EWasteBenefits;

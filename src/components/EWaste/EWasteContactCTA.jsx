import React, { useRef, useLayoutEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EWasteContactCTA = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (!textRef.current) return;
            
            // Staggered fade up exactly matching the three vertical neon lines hitting the block
            gsap.fromTo(textRef.current.children,
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 65%", 
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.25, // Stagger text -> subtitle -> button
                    ease: "power4.out"
                }
            );
        }, containerRef.current);

        return () => ctx.revert();
    }, []);

    return (
        <section className="ewaste-contact bg-transparent relative" ref={containerRef}>
            <div className="ewaste-contact__container max-w-screen-2xl mx-auto px-0">
                <div className="ewaste-contact__banner flex flex-col gap-6 bg-gradient-to-b from-[#5a7638] to-[#3d5220] dark:!bg-none dark:bg-black justify-center text-center text-white relative overflow-hidden w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    {/* Top Gap Spacer */}
                    <div></div>

                    <div className="ewaste-contact__glow-bottom absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                    <div className="ewaste-contact__content-wrapper flex justify-center w-full relative z-10">
                        <div ref={textRef} className="flex flex-col gap-6 items-center w-full max-w-[1152px]">
                            <h2 className="ewaste-contact__heading text-white font-bold">
                                Ready to Secure Your E-Waste?
                            </h2>
                            <p className="ewaste-contact__subtitle text-white/90 max-w-none">
                                Get in touch with our experts to design a tailored electronics recycling program for your organization.
                            </p>

                            <div className="ewaste-contact__actions flex flex-col gap-[16px] justify-center items-center w-full">
                                <a
                                    href="/contact"
                                    className="ewaste-contact__btn group h-[44px] w-[200px] max-w-full rounded-xl bg-white !text-[#47622A] hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <p className="text-[#3d5220] dark:text-[#3d5220]">Contact Us Today</p>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Gap Spacer */}
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default EWasteContactCTA;

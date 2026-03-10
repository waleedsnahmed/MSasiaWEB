import React from 'react';
import { ArrowRight } from 'lucide-react';

const EWasteContactCTA = () => {
    return (
        <section className="ewaste-contact bg-white dark:bg-black">
            <div className="ewaste-contact__container max-w-screen-2xl mx-auto px-0">
                <div className="ewaste-contact__banner flex flex-col gap-6 bg-gradient-to-r from-[#47622A] to-[#799851] p-[24px] min-h-[348px] justify-center text-center text-white relative overflow-hidden scroll-reveal w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    <div className="ewaste-contact__glow-bottom absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                    <div className="max-w-screen-xl mx-auto flex flex-col gap-6 items-center w-full relative z-10">
                        <h2 className="ewaste-contact__heading text-3xl lg:text-5xl font-bold text-white">
                            Ready to Secure Your E-Waste?
                        </h2>
                        <p className="ewaste-contact__subtitle text-lg md:text-xl text-white/90 max-w-none leading-relaxed">
                            Get in touch with our experts to design a tailored electronics recycling program for your organization.
                        </p>

                        <div className="ewaste-contact__actions flex flex-col gap-[16px] justify-center items-center w-full">
                            {/* Top Row */}
                            <a
                                href="/contact"
                                className="ewaste-contact__btn group h-[44px] w-[260px] max-w-full rounded-xl bg-white !text-[#47622A] font-bold text-base hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                            >
                                <span className="text-[#47622A] dark:text-[#47622A]">Contact Us Today</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>

                            {/* Bottom Row */}
                            <div className="flex flex-col sm:flex-row gap-[16px] justify-center items-center w-full">
                                <a
                                    href="/contact"
                                    className="ewaste-contact__btn group h-[44px] w-[260px] max-w-full rounded-xl bg-white !text-[#47622A] font-bold text-base hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                                >
                                    <span className="text-[#47622A] dark:text-[#47622A]">Request a Quote</span>
                                </a>
                                <a
                                    href="/contact"
                                    className="ewaste-contact__btn group h-[44px] w-[260px] max-w-full rounded-xl bg-white !text-[#47622A] font-bold text-base hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
                                >
                                    <span className="text-[#47622A] dark:text-[#47622A]">Client Testimonials</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EWasteContactCTA;

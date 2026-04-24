import React from 'react';
import { ArrowRight } from 'lucide-react';

const HospitalsHealthSystemsContactCTA = () => {
    return (
        <section className="hospitals-contact bg-white dark:bg-black relative z-10 !py-0">
            {/* Visible separator line between CTA and Footer on mobile */}
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#799851] dark:bg-[#47622A] z-20"></div>
            <div className="hospitals-contact__container max-w-screen-2xl mx-0 md:mx-auto px-0">
                <div className="hospitals-contact__banner flex flex-col gap-2 md:gap-6 bg-gradient-to-b from-[#5a7638] to-[#3d5220] dark:!bg-none dark:bg-black justify-center text-center text-white relative overflow-hidden w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    {/* Top Gap Spacer */}
                    <div></div>

                    <div className="hospitals-contact__content-wrapper flex justify-center w-full relative z-10">
                        <div className="flex flex-col gap-2 md:gap-6 items-center w-full max-w-[1152px]">
                            <h2 className="hospitals-contact__heading text-white font-bold">
                                Ready to Build a Clinically Integrated Supply Chain?
                            </h2>
                            <p className="hospitals-contact__subtitle text-white/90 max-w-none">
                                Stop letting logistical complexity constrain your clinical and financial potential. Partner with MS Asia Enterprises to create a seamless, intelligent, and resilient supply chain that empowers your staff and protects your margin.
                            </p>

                            <div className="hospitals-contact__actions flex flex-col gap-[16px] justify-center items-center w-full">
                                <a
                                    href="/contact"
                                    className="hospitals-contact__btn group h-[44px] w-auto px-6 max-w-full rounded-xl bg-white !text-[#47622A] hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <p className="text-[#3d5220] dark:text-[#3d5220] whitespace-nowrap">Schedule a Consultation</p>
                                    <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
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

export default HospitalsHealthSystemsContactCTA;

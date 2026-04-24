import React from 'react';
import { ArrowRight } from 'lucide-react';

const DialysisSurgeryCentersContactCTA = () => {
    return (
        <section className="dialysis-contact bg-white dark:bg-black relative z-10 !py-0">
            {/* Visible separator line between CTA and Footer on mobile */}
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#799851] dark:bg-[#47622A] z-20"></div>
            <div className="dialysis-contact__container max-w-screen-2xl mx-0 md:mx-auto px-0">
                <div className="dialysis-contact__banner flex flex-col gap-2 md:gap-6 bg-gradient-to-b from-[#5a7638] to-[#3d5220] dark:!bg-none dark:bg-black justify-center text-center text-white relative overflow-hidden w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                    {/* Top Gap Spacer */}
                    <div></div>

                    <div className="dialysis-contact__content-wrapper flex justify-center w-full relative z-10">
                        <div className="flex flex-col gap-2 md:gap-6 items-center w-full max-w-[1152px]">
                            <h2 className="dialysis-contact__heading text-white font-bold">
                                Optimize Your Infection Control & Compliance
                            </h2>
                            <p className="dialysis-contact__subtitle text-white/90 max-w-none">
                                Request a no-obligation consultation to streamline RMW and sharps disposal for your center's volume.
                            </p>

                            <div className="dialysis-contact__actions flex flex-col gap-[16px] justify-center items-center w-full">
                                <a
                                    href="/contact"
                                    className="dialysis-contact__btn group h-[44px] w-auto px-6 max-w-full rounded-xl bg-white !text-[#47622A] hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    <p className="text-[#3d5220] dark:text-[#3d5220] whitespace-nowrap">Schedule Your Service Now</p>
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

export default DialysisSurgeryCentersContactCTA;

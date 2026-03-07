import React from 'react';
import { ArrowRight } from 'lucide-react';

const EWasteContactCTA = () => {
    return (
        <section className="ewaste-contact dark:bg-[#0a0a0a] bg-white">
            <div className="ewaste-contact__container max-w-screen-2xl mx-auto">
                <div className="ewaste-contact__banner flex flex-col gap-6 bg-gradient-to-r from-[#47622A] to-[#799851] rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden scroll-reveal">
                    <div className="ewaste-contact__glow-top absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="ewaste-contact__glow-bottom absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                    <h2 className="ewaste-contact__heading text-3xl lg:text-5xl font-bold  relative z-10 text-white">
                        Ready to Secure Your E-Waste?
                    </h2>
                    <p className="ewaste-contact__description text-lg lg:text-xl font-medium  max-w-2xl mx-auto relative z-10 text-white/90">
                        Get in touch with our experts to design a tailored electronics recycling program for your organization.
                    </p>

                    <div className="ewaste-contact__actions flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10 mt-2">
                        <a
                            href="/contact"
                            className="ewaste-contact__btn group px-8 py-4 rounded-xl bg-white !text-[#47622A] font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center space-x-2"
                        >
                            <span className="text-[#47622A] dark:text-[#47622A]">Contact Us Today</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EWasteContactCTA;

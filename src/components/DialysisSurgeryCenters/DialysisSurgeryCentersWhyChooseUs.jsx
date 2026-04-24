import React from 'react';
import { Droplet, Syringe, FlaskConical, LayoutGrid } from 'lucide-react';

const whyPoints = [
    {
        icon: Droplet,
        title: 'High-Risk Biohazardous Waste',
        description: 'Used dialyzers, blood-contaminated tubing, filters, gauze, and disposable gowns are high-risk materials that must be strictly segregated as Biohazardous Waste.',
    },
    {
        icon: Syringe,
        title: 'Sharps & Needle Volume',
        description: 'The frequent use of needles, syringes, and catheters for vascular access results in a continuous stream of sharps waste that demands puncture-resistant containment.',
    },
    {
        icon: FlaskConical,
        title: 'Chemical & Pharma Residues',
        description: 'Proper disposal of expired medications, dialysis-related drugs, and chemical solutions (disinfectants, concentrates) is critical for EPA compliance.',
    },
    {
        icon: LayoutGrid,
        title: 'Space & Infection Control',
        description: 'High patient volume requires organized waste solutions that minimize clutter in treatment areas while maintaining strict protocols to prevent Bloodborne Pathogens.',
    },
];

const DialysisSurgeryCentersWhyChooseUs = () => {
    return (
        <section className="dialysis-why bg-white dark:bg-black !py-0">
            <div className="dialysis-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="dialysis-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="dialysis-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="dialysis-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Addressing the Unique Challenges of Dialysis Centers
                    </h2>
                    <p className="dialysis-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Dialysis centers have unique needs due to frequent treatments, high patient turnover, and the type of high-risk waste produced.
                    </p>
                </div>

                <div className="dialysis-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group dialysis-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="dialysis-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="dialysis-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="dialysis-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="dialysis-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="dialysis-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="dialysis-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="dialysis-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="dialysis-why__cta-strong block text-white font-bold">MS Asia Enterprises provides end-to-end solutions.</h4>
                            <p className="font-semibold text-white/90">We offer a complete suite of services designed for the demands of outpatient, specialty, and home dialysis service providers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DialysisSurgeryCentersWhyChooseUs;

import React from 'react';
import { Database, FileText, ShieldAlert, TrendingDown } from 'lucide-react';

const whyPoints = [
    {
        icon: Database,
        title: 'Data Breach Liability',
        description: 'Each storage device contains residual data. Informal dismantling or resale without proper sanitization is a primary vector for data theft, exposing strategic business information.',
    },
    {
        icon: FileText,
        title: 'Regulatory Non-Compliance',
        description: 'Multiple regulations govern privacy and e-waste, including the DPDP Act 2023, E-Waste Rules 2022, and RBI/SEBI Guidelines. Non-compliance results in heavy penalization.',
    },
    {
        icon: ShieldAlert,
        title: 'Environmental Violation',
        description: 'Dumping IT equipment in landfills or channeling it to the informal sector leads to toxic pollution from lead, mercury, and brominated flame retardants, violating environmental laws.',
    },
    {
        icon: TrendingDown,
        title: 'Lost Asset Value',
        description: 'Functional components and high-grade metals within IT hardware hold recoverable value that is entirely lost with casual disposal.',
    },
];

const ITScrapWhyChooseUs = () => {
    return (
        <section className="itscrap-why bg-white dark:bg-black !py-0">
            <div className="itscrap-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="itscrap-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="itscrap-why__label text-[#47622A] dark:text-[#799851] uppercase">The Critical Need</h6>
                    <h2 className="itscrap-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        The High Stakes of Informal IT Disposal
                    </h2>
                    <p className="itscrap-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        India's corporate sector is undergoing rapid digital transformation, leading to frequent hardware refresh cycles. <br />
                        However, the disposal phase is often overlooked, creating substantial corporate risk.
                    </p>
                </div>

                <div className="itscrap-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group itscrap-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_0_1px_rgb(16_185_129/0.4),0_20px_40px_-15px_rgb(16_185_129/0.35)] dark:hover:shadow-[0_0_0_1px_rgb(16_185_129/0.4),0_20px_40px_-15px_rgb(16_185_129/0.2)] hover:z-10"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="itscrap-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="itscrap-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl transition-colors duration-300 bg-slate-900 text-emerald-400 dark:bg-slate-800 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-md">
                                    <point.icon className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <h4 className="itscrap-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="itscrap-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="itscrap-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="group itscrap-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-slate-900 dark:bg-slate-800 text-white relative overflow-hidden border border-slate-800 dark:border-slate-700 shadow-xl transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_0_1px_rgb(16_185_129/0.4),0_20px_40px_-15px_rgb(16_185_129/0.35)] dark:hover:shadow-[0_0_0_1px_rgb(16_185_129/0.4),0_20px_40px_-15px_rgb(16_185_129/0.2)]">
                        {/* Subtle glow for CTA */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300 blur-[60px] rounded-full pointer-events-none"></div>
                        <div className="itscrap-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="itscrap-why__cta-strong block text-white font-bold">MS Asia Enterprises closes this loop.</h4>
                            <p className="font-semibold text-white/90">We provide a formal, certified IT Asset Disposition (ITAD) process offering legal defensibility, environmental compliance, and complete peace of mind.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ITScrapWhyChooseUs;

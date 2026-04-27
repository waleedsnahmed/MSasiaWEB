import React from 'react';
import { Shield, FileCheck, TrendingUp, Zap } from 'lucide-react';

const whyPoints = [
    {
        icon: Shield,
        title: 'Guaranteed Safety',
        description: 'Creates a safe learning and working environment for students and staff, minimizing risks in classrooms, residential areas, and high-risk teaching and research laboratories.',
    },
    {
        icon: FileCheck,
        title: 'Complete Compliance',
        description: 'Ensures continuous compliance with all complex environmental, hazardous waste, and laboratory safety regulations, protecting the institution from fines and legal issues.',
    },
    {
        icon: TrendingUp,
        title: 'Enhanced Reputation',
        description: 'Publicly demonstrates a strong commitment to sustainability, environmental education, and social responsibility, enhancing institutional standing among students and stakeholders.',
    },
    {
        icon: Zap,
        title: 'Operational Efficiency',
        description: 'Provides a reduced administrative burden on staff through flexible, scalable waste management programs, freeing up resources to focus entirely on education and research.',
    },
];

const EducationAndResearchWhyChooseUs = () => {
    return (
        <section className="education-research-why bg-white dark:bg-black !py-0">
            <div className="education-research-why__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="education-research-why__header text-center flex flex-col items-center justify-start gap-2 md:gap-4 scroll-reveal">
                    <h6 className="education-research-why__label text-[#47622A] dark:text-[#799851] uppercase">Why Choose Us</h6>
                    <h2 className="education-research-why__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Why Effective Waste Management Matters in Education
                    </h2>
                    <p className="education-research-why__subtitle dark:text-gray-400 text-gray-600 max-w-none">
                        Educational environments generate highly diverse waste streams across academic, administrative, residential, laboratory, and maintenance activities. <br />
                        Managing this complexity efficiently and legally is a significant challenge, requiring specialized expertise to protect student and staff safety, public health, and institutional reputation.
                    </p>
                </div>

                <div className="education-research-why__grid grid md:grid-cols-2 gap-4 ">
                    {whyPoints.map((point, index) => (
                        <div
                            key={index}
                            className="group education-research-why__card flex flex-col gap-2 md:gap-4 scroll-reveal p-4 md:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="education-research-why__card-header flex items-center gap-2 md:gap-4">
                                <div className="education-research-why__card-icon-wrap flex items-center justify-center p-[12px] rounded-2xl bg-gradient-to-br from-[#47622A]/10 to-[#799851]/10 dark:from-[#799851]/20 dark:to-[#47622A]/20 shadow-sm border border-[#47622A]/5 dark:border-[#799851]/10 transition-colors duration-300 ease-in-out group-hover:bg-[#22c55e]/10">
                                    <point.icon className="w-7 h-7 text-[#47622A] dark:text-[#799851] transition-all duration-300 ease-in-out group-hover:text-[#22c55e] dark:group-hover:text-[#22c55e]" strokeWidth={2} />
                                </div>
                                <h4 className="education-research-why__card-title dark:text-white text-gray-900">
                                    {point.title}
                                </h4>
                            </div>
                            <p className="education-research-why__card-description dark:text-gray-400 text-gray-600">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="education-research-why__cta-wrapper flex justify-center scroll-reveal">
                    <div className="education-research-why__cta-banner w-full max-w-[1152px] p-4 md:p-[24px] rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] dark:!bg-none dark:bg-black text-white relative overflow-hidden">
                        <div className="education-research-why__cta-text relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left gap-2 md:gap-[16px]">
                            <h4 className="education-research-why__cta-strong block text-white font-bold">MS Asia Enterprises is the definitive solution.</h4>
                            <p className="font-semibold text-white/90">We partner with a wide range of organizations, from K–12 schools and colleges to large universities and specialized research campuses, ensuring your environment is safe, your operations are fully compliant, and your institutional sustainability goals are supported.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationAndResearchWhyChooseUs;

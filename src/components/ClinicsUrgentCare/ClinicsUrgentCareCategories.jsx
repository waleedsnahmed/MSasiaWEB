import React from 'react';
import { Activity, Syringe, FlaskConical, Stethoscope, Recycle } from 'lucide-react';

const categories = [
    {
        category: 'Biohazardous Waste Management',
        examples: 'Blood-soiled materials, lab specimens, and contaminated PPE.',
        handling: 'Segregation at source using color-coded containers and transport to licensed facilities.',
        icon: Activity,
    },
    {
        category: 'Sharps Management',
        examples: 'Needles, scalpels, and other sharps.',
        handling: 'Collection in puncture-resistant containers ensuring OSHA compliance.',
        icon: Syringe,
    },
    {
        category: 'Pharmaceutical Waste Disposal',
        examples: 'Expired or unused medications, including controlled substances.',
        handling: 'Secure transport and environmentally safe treatment or destruction with full documentation.',
        icon: FlaskConical,
    },
    {
        category: 'Regulated Medical Waste',
        examples: 'All regulated medical waste according to state and federal guidelines.',
        handling: 'Use of sterilization, autoclaving, and approved incineration methods.',
        icon: Stethoscope,
    },
    {
        category: 'Recycling Programs',
        examples: 'Non-contaminated materials like paper, cardboard, plastics, and packaging.',
        handling: 'Helps clinics reduce waste sent to landfills and supports sustainability initiatives.',
        icon: Recycle,
    },
];

const ClinicsUrgentCareCategories = () => {
    return (
        <section className="clinics-categories bg-white dark:bg-black !py-0">
            <div className="clinics-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="clinics-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="clinics-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="clinics-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Comprehensive Service Solutions
                    </h2>
                    <p className="clinics-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We provide specialized solutions tailored to address the unique challenges of clinics and urgent care facilities.
                    </p>
                </div>

                <div className="clinics-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="clinics-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="clinics-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="clinics-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Service Area</h6>
                            <h6 className="clinics-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Waste Examples</h6>
                            <h6 className="clinics-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Our Approach</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="clinics-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="clinics-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="clinics-categories__cell clinics-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="clinics-categories__cell clinics-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="clinics-categories__cell clinics-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
                                        <p>{cat.handling}</p>
                                    </div>
                                </div>
                            )})}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicsUrgentCareCategories;

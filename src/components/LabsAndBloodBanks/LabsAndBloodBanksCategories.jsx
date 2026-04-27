import React from 'react';
import { Droplet, Syringe, Microscope, FlaskConical, Package, FileText } from 'lucide-react';

const categories = [
    {
        category: 'Biohazardous Blood Waste',
        examples: 'Blood-contaminated materials, expired blood products, and reactive blood units.',
        handling: 'Secure collection and transportation for validated pathogen inactivation and sterilization.',
        icon: Droplet,
    },
    {
        category: 'Sharps Disposal Services',
        examples: 'Puncture-resistant containers for needles, lancets, and single-use collection sets.',
        handling: 'Regular pickups to prevent overfilling and workplace hazards, with guaranteed destruction.',
        icon: Syringe,
    },
    {
        category: 'Laboratory & Testing Waste',
        examples: 'Contaminated lab materials, test kits, culture media, and disposable lab tools from screening.',
        handling: 'Proper segregation and safe disposal to neutralize biological hazards from testing processes.',
        icon: Microscope,
    },
    {
        category: 'Chemical Waste Handling',
        examples: 'Collection of preservatives, anticoagulants, disinfectants, reagents, and organic solvents.',
        handling: 'Neutralization and environmentally responsible treatment compliant with chemical safety laws.',
        icon: FlaskConical,
    },
    {
        category: 'Single-Use Plastics & Packaging',
        examples: 'Collection sets, satellite bags, sample tubes, and sterile wrap packaging.',
        handling: 'Efficient segregation of non-contaminated plastics to enable large-scale responsible recycling.',
        icon: Package,
    },
    {
        category: 'Sensitive Data & E-Waste',
        examples: 'Donor records, deferral cards, and obsolete immunohematology analyzers or servers.',
        handling: 'Secure shredding and certified data wiping to ensure absolute compliance with privacy laws.',
        icon: FileText,
    },
];

const LabsAndBloodBanksCategories = () => {
    return (
        <section className="labs-blood-banks-categories bg-white dark:bg-black !py-0">
            <div className="labs-blood-banks-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="labs-blood-banks-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="labs-blood-banks-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="labs-blood-banks-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Diverse Waste Streams We Manage
                    </h2>
                    <p className="labs-blood-banks-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Blood bank operations yield a diverse array of waste materials, each necessitating specific handling protocols dictated by its biohazard potential and regulatory classification.
                    </p>
                </div>

                <div className="labs-blood-banks-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="labs-blood-banks-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="labs-blood-banks-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="labs-blood-banks-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Category</h6>
                            <h6 className="labs-blood-banks-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Examples</h6>
                            <h6 className="labs-blood-banks-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="labs-blood-banks-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="labs-blood-banks-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="labs-blood-banks-categories__cell labs-blood-banks-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="labs-blood-banks-categories__cell labs-blood-banks-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="labs-blood-banks-categories__cell labs-blood-banks-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default LabsAndBloodBanksCategories;

import React from 'react';
import { Pill, AlertTriangle, Shield, CheckCircle, Trash2, Box } from 'lucide-react';

const categories = [
    {
        category: 'Non-Hazardous Pharmaceuticals',
        examples: 'Over-the-counter medications, nutritional supplements, IV solutions, and non-RCRA empty vials.',
        handling: 'Secure collection and high-temperature incineration at authorized treatment facilities.',
        icon: Pill,
    },
    {
        category: 'Hazardous Pharmaceutical Waste',
        examples: 'RCRA-listed drugs (P, U, D, F-listed), heavy-metal containing medications, and toxic chemo agents.',
        handling: 'Strict segregation, UN-approved leak-proof containment, and specialized hazardous incineration.',
        icon: AlertTriangle,
    },
    {
        category: 'Controlled Substances',
        examples: 'Narcotics, sedatives, painkillers, and other DEA-regulated or highly addictive substances.',
        handling: 'Witnessed destruction protocols, rigourous chain-of-custody documentation, and compliance auditing.',
        icon: Shield,
    },
    {
        category: 'Trace Chemotherapy Waste',
        examples: 'Empty vials, IV bags, tubing, gowns, and gloves used during the administration of chemotherapy.',
        handling: 'Segregated into yellow bags/containers and subjected to specialized thermal treatment.',
        icon: CheckCircle,
    },
    {
        category: 'Bulk Chemotherapy Waste',
        examples: 'Unused or expired chemo drugs, visibly contaminated personal protective equipment (PPE).',
        handling: 'Segregated into designated black containers and processed under strict hazardous waste protocols.',
        icon: Trash2,
    },
    {
        category: 'Expired & Recalled Products',
        examples: 'Pharmaceutical manufacturing rejects, outdated pharmacy inventory, and recalled medical products.',
        handling: 'Secure transit, complete destruction for brand protection, backed by a Certificate of Destruction.',
        icon: Box,
    },
];

const PharmaceuticalWasteDisposalCategories = () => {
    return (
        <section className="pharma-categories bg-white dark:bg-black !py-0">
            <div className="pharma-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="pharma-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="pharma-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="pharma-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Pharmaceutical Waste Types
                    </h2>
                    <p className="pharma-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Not all pharmaceutical waste is created equal. We ensure accurate classification and dedicated treatment pathways for every specific waste stream.
                    </p>
                </div>

                <div className="pharma-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="pharma-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="pharma-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="pharma-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Category</h6>
                            <h6 className="pharma-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Examples</h6>
                            <h6 className="pharma-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="pharma-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="pharma-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="pharma-categories__cell pharma-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="pharma-categories__cell pharma-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="pharma-categories__cell pharma-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default PharmaceuticalWasteDisposalCategories;

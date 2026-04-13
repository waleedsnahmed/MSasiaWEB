import React from 'react';
import { TestTube, Flame, AlertOctagon, Droplet } from 'lucide-react';

const categories = [
    {
        category: 'Industrial Chemicals',
        examples: 'Solvents, acids, alkalis (bases), corrosive compounds, oils, lubricants, and petrochemical byproducts.',
        handling: 'Strict acid-resistant containment, anti-corrosive linings, and rigorous physical isolation frameworks.',
        icon: TestTube,
    },
    {
        category: 'Flammables & Combustibles',
        examples: 'Flammable liquids, thinners, varnishes, and other volatile organic compounds.',
        handling: 'Heat-resistant carriers, fume-controlled handling, and deployment of stringent fire-safe arrangements.',
        icon: Flame,
    },
    {
        category: 'Toxic & Reactive Waste',
        examples: 'Toxic compounds, certain lab reagents, contaminated materials, and highly reactive residues.',
        handling: 'Incompatibility segregation, full PPE utilization, and no-contact transfer techniques to avoid dangerous reactions.',
        icon: AlertOctagon,
    },
    {
        category: 'Residues & Absorbents',
        examples: 'Contaminated absorbents, sludges, filter cakes, and other semi-solid residues.',
        handling: 'Safe containment using UN-certified drums designed for solids and liquids with spill trays on standby.',
        icon: Droplet,
    },
];

const ChemicalPackingCategories = () => {
    return (
        <section className="ewaste-categories bg-white dark:bg-black !py-0">
            <div className="ewaste-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="ewaste-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Spectrum of Handled Chemicals
                    </h2>
                    <p className="ewaste-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our team is trained to safely pack and prepare the full spectrum of industrial and laboratory chemical waste, guaranteeing full regulatory compliance across every category.
                    </p>
                </div>

                <div className="ewaste-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="ewaste-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="ewaste-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="ewaste-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Chemical Type</h6>
                            <h6 className="ewaste-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Common Sources</h6>
                            <h6 className="ewaste-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Handling Matrix</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="ewaste-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="ewaste-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="ewaste-categories__cell ewaste-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="ewaste-categories__cell ewaste-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="ewaste-categories__cell ewaste-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default ChemicalPackingCategories;

import React from 'react';

const categories = [
    {
        category: 'Corporate IT & Telecom',
        examples: 'Servers, Laptops, Desktops, Switches, Routers, PBX Systems, UPS.',
        handling: 'Focus on certified data destruction & high-value component recovery.',
    },
    {
        category: 'Office Equipment',
        examples: 'Printers, Photocopiers, Scanners, Projectors, EPABX Systems.',
        handling: 'Toner/cartridge removal, separation of plastics, metals, and electronics.',
    },
    {
        category: 'Industrial Electronics',
        examples: 'PLCs, Control Panels, Drives, Sensors, HMIs, Manufacturing Control Systems.',
        handling: 'Often contain high-grade metals; handled with precision dismantling.',
    },
    {
        category: 'Home Appliances',
        examples: 'Televisions, Refrigerators, ACs, Washing Machines, Audio/Video Equipment.',
        handling: 'Safe removal of refrigerants (CFCs) and compressor oils before recycling.',
    },
    {
        category: 'Lab & Medical Equipment',
        examples: 'Diagnostic Machines, Analyzers, Lab Ovens, Microscopes (after decontamination).',
        handling: 'Compliance with biomedical waste rules if applicable; careful component recovery.',
    },
    {
        category: 'Electrical Scrap',
        examples: 'Motors, Transformers, DG Sets, Capacitors, HV/LV Panels.',
        handling: 'Safe oil drainage, PCB management, and recovery of copper windings.',
    },
    {
        category: 'Miscellaneous',
        examples: 'Cables, Wires, Batteries of all types, PCBs from any source.',
        handling: 'Granulation, separation, and sending to specialized authorized recyclers.',
    },
];

const EWasteCategories = () => {
    return (
        <section className="ewaste-categories bg-white dark:bg-black !py-0">
            <div className="ewaste-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="ewaste-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Electronics We Collect
                    </h2>
                    <p className="ewaste-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We provide solutions for virtually every category of end-of-life electronic equipment
                        across India.
                    </p>
                </div>

                <div className="ewaste-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="ewaste-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="ewaste-categories__grid-header hidden md:grid grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="ewaste-categories__th p-[12px] font-bold uppercase tracking-wider text-center">Category</h6>
                            <h6 className="ewaste-categories__th p-[12px] font-bold uppercase tracking-wider text-center">Examples</h6>
                            <h6 className="ewaste-categories__th p-[12px] font-bold uppercase tracking-wider text-center">Our Specialized Handling</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="ewaste-categories__grid-body divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => (
                                <div key={index} className="ewaste-categories__grid-row grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="ewaste-categories__cell ewaste-categories__td-category p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex items-center justify-center md:justify-start border-b md:border-b-0 dark:border-white/5 border-gray-100">
                                        <p>{cat.category}</p>
                                    </div>
                                    <div className="ewaste-categories__cell ewaste-categories__td-examples p-[12px] dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-b md:border-b-0 dark:border-white/5 border-gray-100">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="ewaste-categories__cell ewaste-categories__td-handling p-[12px] dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
                                        <p>{cat.handling}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default EWasteCategories;

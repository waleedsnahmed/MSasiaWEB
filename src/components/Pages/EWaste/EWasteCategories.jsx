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
        category: 'Consumer & Domestic Appliances',
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
        <section className="ewaste-categories bg-white dark:bg-black">
            <div className="ewaste-categories__container max-w-screen-2xl mx-auto px-0 flex flex-col gap-[24px]">
                <div className="ewaste-categories__header text-center flex flex-col items-center gap-4 scroll-reveal">
                    <p className="ewaste-categories__label text-[#47622A] dark:text-[#799851] font-bold text-sm tracking-widest uppercase ">Capabilities</p>
                    <h2 className="ewaste-categories__heading text-4xl md:text-5xl font-bold  dark:text-white text-gray-900 leading-tight">
                        <span className="ewaste-categories__heading-accent !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">Electronics</span> We Collect
                    </h2>
                    <p className="ewaste-categories__subtitle text-lg dark:text-gray-400 text-gray-600 max-w-3xl leading-relaxed">
                        We provide solutions for virtually every category of end-of-life electronic equipment
                        across India.
                    </p>
                </div>

                <div className="ewaste-categories__table-wrapper scroll-reveal">
                    <div className="ewaste-categories__table-outer overflow-x-auto rounded-3xl border dark:border-white/10 border-gray-200 bg-white dark:bg-[#1a1a1a] shadow-sm">
                        <table className="ewaste-categories__table w-full text-left">
                            <thead className="ewaste-categories__thead bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                                <tr>
                                    <th className="ewaste-categories__th p-[12px] text-sm font-bold uppercase tracking-wider">Category</th>
                                    <th className="ewaste-categories__th p-[12px] text-sm font-bold uppercase tracking-wider">Examples</th>
                                    <th className="ewaste-categories__th p-[12px] text-sm font-bold uppercase tracking-wider">Our Specialized Handling</th>
                                </tr>
                            </thead>
                            <tbody className="ewaste-categories__tbody divide-y dark:divide-white/5 divide-gray-100">
                                {categories.map((cat, index) => (
                                    <tr key={index} className="ewaste-categories__row hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="ewaste-categories__td-category p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-sm align-top">
                                            {cat.category}
                                        </td>
                                        <td className="ewaste-categories__td-examples p-[12px] dark:text-gray-400 text-gray-600 text-sm align-top">
                                            {cat.examples}
                                        </td>
                                        <td className="ewaste-categories__td-handling p-[12px] dark:text-gray-400 text-gray-600 text-sm align-top">
                                            {cat.handling}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EWasteCategories;

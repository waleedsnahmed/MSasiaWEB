import React from 'react';
import { Server, Wifi, Monitor, HardDrive, Cpu } from 'lucide-react';

const categories = [
    {
        category: 'Data Center & Server Room',
        examples: 'Rack servers, blade centers, storage SAN/NAS, tape libraries, UPS systems.',
        handling: 'High-density data destruction, precious metal recovery from PCBs.',
        icon: Server,
    },
    {
        category: 'Network Infrastructure',
        examples: 'Routers, switches, firewalls, wireless controllers, PBX systems.',
        handling: 'Secure configuration wipe, component recycling.',
        icon: Wifi,
    },
    {
        category: 'End-User Computing',
        examples: 'Laptops, desktops, workstations, thin clients, monitors.',
        handling: 'Bulk data destruction, maximized asset recovery.',
        icon: Monitor, // Assuming this exists or similar; if not we'll handle alias in lucide later, Desktop is usually monitor/tv icon in Lucide but wait, lucide-react has 'Monitor' and 'Laptop'. We will use Server since Desktop isn't there, I will use Server or similar. Wait, Let me just use generic icons that exist in lucide.
    },
    {
        category: 'Peripherals & Storage',
        examples: 'Printers, MFDs, external HDDs, projectors, scanners.',
        handling: 'Toner/cartridge management, consumable disposal.',
        icon: HardDrive,
    },
    {
        category: 'Specialized Equipment',
        examples: 'ATMs, point-of-sale systems, banking hardware, security DVRs.',
        handling: 'Ultra-high-security protocols, industry-specific compliance.',
        icon: Cpu,
    },
];

const ITScrapCategories = () => {
    return (
        <section className="itscrap-categories bg-white dark:bg-black !py-0">
            <div className="itscrap-categories__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="itscrap-categories__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="itscrap-categories__label text-[#47622A] dark:text-[#799851] uppercase">Capabilities</h6>
                    <h2 className="itscrap-categories__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        IT Equipment We Process
                    </h2>
                    <p className="itscrap-categories__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        We handle every type of IT asset used in modern workplaces, ensuring total data security and maximum recovery.
                    </p>
                </div>

                <div className="itscrap-categories__grid-wrapper scroll-reveal max-w-[1152px] mx-0 md:mx-auto w-full">
                    <div className="itscrap-categories__grid-outer overflow-hidden rounded-3xl border border-[#47622A]/10 dark:border-[#799851]/20 bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 shadow-sm">
                        
                        {/* Grid Header */}
                        <div className="itscrap-categories__grid-header grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                            <h6 className="itscrap-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Asset Category</h6>
                            <h6 className="itscrap-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center border-r md:border-r-0 border-white/20">Examples</h6>
                            <h6 className="itscrap-categories__th p-2 md:p-[12px] text-[16px] md:text-base font-bold uppercase tracking-wider text-center">Key Focus Area</h6>
                        </div>

                        {/* Grid Body */}
                        <div className="itscrap-categories__grid-body flex flex-col divide-y dark:divide-white/5 divide-gray-100">
                            {categories.map((cat, index) => {
                                const Icon = cat.icon;
                                return (
                                <div key={index} className="itscrap-categories__grid-row grid grid-cols-[1.2fr_2fr_2fr] md:grid-cols-[1fr_2fr_2fr] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                    <div className="itscrap-categories__cell itscrap-categories__td-category p-2 md:p-[12px] font-bold dark:text-gray-200 text-[#47622A] text-center md:text-left flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-[8px] border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <div className="flex md:hidden items-center justify-center w-[28px] h-[28px] rounded-full border dark:border-white/5 border-gray-100 shrink-0">
                                            <Icon className="w-[14px] h-[14px]" />
                                        </div>
                                        <p className="text-[16px] md:text-base leading-tight">{cat.category}</p>
                                    </div>
                                    <div className="itscrap-categories__cell itscrap-categories__td-examples p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center border-r md:border-r-0 border-gray-100 dark:border-white/5">
                                        <p>{cat.examples}</p>
                                    </div>
                                    <div className="itscrap-categories__cell itscrap-categories__td-handling p-2 md:p-[12px] text-[10px] md:text-base leading-tight md:leading-normal dark:text-gray-400 text-gray-600 text-center flex items-center justify-center">
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

export default ITScrapCategories;

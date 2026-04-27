import React from 'react';
import { Store, Factory, Building, Coffee, Wrench, HardHat, Laptop, Heart } from 'lucide-react';

const industries = [
    { icon: Store, title: 'Retail Stores', description: 'Tailored waste solutions for storefronts managing packaging, plastics, and general retail waste.' },
    { icon: Factory, title: 'Small Manufacturing', description: 'Handling of production by-products, metal cuttings, and hazardous workshop materials.' },
    { icon: Building, title: 'Offices & Co-working', description: 'Secure document shredding, e-waste recycling, and clean general office waste management.' },
    { icon: Coffee, title: 'Cafes & Restaurants', description: 'Management of food service waste, bulk packaging materials, and general operational refuse.' },
    { icon: Wrench, title: 'Automotive Garages', description: 'Safe disposal of used oil, filters, coolant, aerosol cans, and solvent-contaminated rags.' },
    { icon: HardHat, title: 'Construction Contractors', description: 'Collection and processing of construction demolition debris, bulky items, and mixed metals.' },
    { icon: Laptop, title: 'Technology Firms', description: 'Certified recycling of obsolete IT equipment and specialized secure data destruction services.' },
    { icon: Heart, title: 'Health & Wellness', description: 'Proper handling of operational waste, packaging, and regulatory compliant material disposal.' },
];

const SmallBusinessesIndustries = () => {
    return (
        <section className="small-businesses-industries bg-white dark:bg-black !py-0">
            <div className="small-businesses-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="small-businesses-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="small-businesses-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="small-businesses-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Small Business Types We Serve
                    </h2>
                    <p className="small-businesses-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our solutions are customized to your business size, operational complexity, and specific regulatory obligations, making waste management completely stress-free.
                    </p>
                </div>

                <div className="small-businesses-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="small-businesses-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="small-businesses-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="small-businesses-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="small-businesses-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SmallBusinessesIndustries;

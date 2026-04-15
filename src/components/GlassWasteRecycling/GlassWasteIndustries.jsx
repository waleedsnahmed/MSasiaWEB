import React from 'react';
import { Utensils, ShoppingCart, Building, Home, Calendar, Factory } from 'lucide-react';

const industries = [
    { icon: Utensils, title: 'Hospitality Sector', description: 'Hotels, Bars, Restaurants, Clubs (HORECA).' },
    { icon: ShoppingCart, title: 'Retail and Beverage', description: 'Retailers, beverage manufacturers, and distributors handling packaged goods.' },
    { icon: Building, title: 'Healthcare Facilities', description: 'Hospitals and healthcare facilities managing non-hazardous glass waste.' },
    { icon: Home, title: 'Residential Communities', description: 'Residential apartments and gated communities looking for structured glass disposal.' },
    { icon: Calendar, title: 'Event Management', description: 'Event managers and catering companies dealing with bulk glass waste post-events.' },
    { icon: Factory, title: 'Glass Manufacturing', description: 'Glass processors, mirror manufacturers, and fabrication units generating pre-consumer scrap.' },
];

const GlassWasteIndustries = () => {
    return (
        <section className="glass-waste-industries bg-white dark:bg-black !py-0">
            <div className="glass-waste-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="glass-waste-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="glass-waste-industries__label text-[#47622A] dark:text-[#799851] uppercase">Generators</h6>
                    <h2 className="glass-waste-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Who Generates Glass Waste?
                    </h2>
                    <p className="glass-waste-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Glass waste comes from a variety of sources. We provide collection and processing services for generators of all sizes.
                    </p>
                </div>

                <div className="glass-waste-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="glass-waste-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="glass-waste-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="glass-waste-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="glass-waste-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlassWasteIndustries;

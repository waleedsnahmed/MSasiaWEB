import React from 'react';
import { Factory, ShoppingCart, Truck, Car, PlusSquare, HardHat } from 'lucide-react';

const industries = [
    { icon: Factory, title: 'Manufacturing & Packaging', description: 'Handling massive capacities of production waste, bulk plastics, and flawed raw packaging yields.' },
    { icon: ShoppingCart, title: 'FMCG & Retail', description: 'Solving post-consumer material streams including high volumes of PET and LDPE secondary packaging.' },
    { icon: Truck, title: 'Logistics & Supply Chain', description: 'Managing industrial crates, protective films, and rigid drum scrap generated during distribution.' },
    { icon: Car, title: 'Automotive & Engineering', description: 'Processing complex technical engineering plastics, ABS housings, and heavy PP automotive molds.' },
    { icon: PlusSquare, title: 'Pharmaceuticals', description: 'Strict processing of non-hazardous clinical grade plastics adhering to specialized decontamination protocols.' },
    { icon: HardHat, title: 'Construction & Infrastructure', description: 'Diverting high-impact PVC piping, structural polymer offcuts, and heavy-duty protective sheeting.' },
];

const PlasticScrapIndustries = () => {
    return (
        <section className="plastic-scrap-industries bg-white dark:bg-black !py-0">
            <div className="plastic-scrap-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="plastic-scrap-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="plastic-scrap-industries__label text-[#47622A] dark:text-[#799851] uppercase">Generators</h6>
                    <h2 className="plastic-scrap-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Industries We Serve
                    </h2>
                    <p className="plastic-scrap-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our plastic scrap processing services cater to a wide range of industries generating diverse, complex polymer streams.
                    </p>
                </div>

                <div className="plastic-scrap-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="plastic-scrap-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="plastic-scrap-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="plastic-scrap-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="plastic-scrap-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlasticScrapIndustries;

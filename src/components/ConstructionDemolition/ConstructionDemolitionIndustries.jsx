import React from 'react';
import { Building2, Factory, Wrench, PackageSearch, HardHat, Cog, Landmark, Hammer } from 'lucide-react';

const industries = [
    { icon: Building2, title: 'Real Estate Developers', description: 'Comprehensive site clearance for large residential, commercial, and mixed-use civil projects.' },
    { icon: Factory, title: 'Manufacturing Lines', description: 'End-to-end dismantling for active and aging production facilities and fabrication units.' },
    { icon: HardHat, title: 'Infrastructure Engineers', description: 'Managing complex logistical debris for road, highway, metro rail, and airport infrastructure.' },
    { icon: PackageSearch, title: 'Warehousing Hubs', description: 'Bulk extraction of aging temporary site materials, structures, and massive cardboard/pallet accumulations.' },
    { icon: Wrench, title: 'Engineering Workshops', description: 'Safe processing of machining scraps, metal composites, and high-volume industrial alloys.' },
    { icon: Cog, title: 'Industrial Estates', description: 'Scaling specialized heavy-duty cleanup protocols across entire high-risk property boundaries.' },
    { icon: Landmark, title: 'Government & PSUs', description: 'Executing highly regulated, audit-ready clearance for state and sensitive public sector contracts.' },
    { icon: Hammer, title: 'Demolition Contractors', description: 'Synchronized removal of post-blasting structural beams, wiring, piping, and concrete rubble.' },
];

const ConstructionDemolitionIndustries = () => {
    return (
        <section className="ewaste-industries bg-white dark:bg-black !py-0">
            <div className="ewaste-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="ewaste-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="ewaste-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Projects We Service
                    </h2>
                    <p className="ewaste-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our integrated waste solutions adapt fluidly to the unique scale and demanding constraints of India's most massive industrial environments.
                    </p>
                </div>

                <div className="ewaste-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="ewaste-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="ewaste-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="ewaste-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="ewaste-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConstructionDemolitionIndustries;

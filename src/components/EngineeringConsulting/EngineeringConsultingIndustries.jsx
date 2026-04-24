import React from 'react';
import { Compass, Leaf, Building2, Briefcase, ClipboardCheck, PenTool, Mountain, Zap } from 'lucide-react';

const industries = [
    { icon: Compass, title: 'Engineering Consultancies', description: 'Managing hybrid waste streams from both professional offices and technical project workspaces.' },
    { icon: Leaf, title: 'Environmental Consulting', description: 'Handling soil samples, water testing residuals, and remediation-site hazardous materials.' },
    { icon: Building2, title: 'Civil & Infrastructure', description: 'Large-scale construction and demolition debris management for public works and developments.' },
    { icon: Briefcase, title: 'Project Management (EPC)', description: 'Coordinating complex, multi-phase waste logistics for massive engineering, procurement, and construction sites.' },
    { icon: ClipboardCheck, title: 'Technical Advisory', description: 'Secure destruction of proprietary client data, schematics, and sensitive feasibility studies.' },
    { icon: PenTool, title: 'Architecture Firms', description: 'Recycling large-format plotter paper, 3D printing scrap, and obsolete physical scale models.' },
    { icon: Mountain, title: 'Geotechnical Services', description: 'Disposal of massive volumes of soil boring samples, rock cores, and field testing equipment.' },
    { icon: Zap, title: 'Mechanical & Electrical', description: 'Specialized recycling for decommissioned HVAC units, control panels, and heavy electrical scrap.' },
];

const EngineeringConsultingIndustries = () => {
    return (
        <section className="engineering-industries bg-white dark:bg-black !py-0">
            <div className="engineering-industries__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px]">
                <div className="engineering-industries__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="engineering-industries__label text-[#47622A] dark:text-[#799851] uppercase">Sectors</h6>
                    <h2 className="engineering-industries__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Organizations We Support
                    </h2>
                    <p className="engineering-industries__subtitle dark:text-gray-400 text-gray-600 max-w-3xl">
                        Our solutions are tailored to project complexity, duration, and regulatory scope, ensuring efficient and compliant waste handling.
                    </p>
                </div>

                <div className="engineering-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="engineering-industries__card scroll-reveal flex flex-col gap-2 md:gap-4 p-4 md:p-[24px] min-h-fit md:min-h-[280px] items-start md:items-center text-left md:text-center justify-start md:justify-center rounded-2xl bg-gradient-to-br from-[#47622A]/5 to-[#799851]/5 dark:from-[#799851]/10 dark:to-[#47622A]/10 backdrop-blur-md bg-white/90 dark:bg-[#111]/90 border border-[#47622A]/10 dark:border-[#799851]/20 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="flex flex-row md:flex-col items-center md:items-center gap-2 md:gap-4 w-full">
                                <div className="engineering-industries__card-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851] flex items-center justify-center">
                                    <industry.icon className="w-5 h-5 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                                </div>
                                 <h4 className="engineering-industries__card-title text-left md:text-center w-full">
                                    {industry.title}
                                </h4>
                            </div>
                            <p className="engineering-industries__card-description dark:text-gray-400 text-gray-500 text-left md:text-center">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngineeringConsultingIndustries;

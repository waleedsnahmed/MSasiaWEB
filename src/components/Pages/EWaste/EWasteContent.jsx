import { useEffect } from 'react';
import {
    Recycle,
    Shield,
    FileCheck,
    TrendingUp,
    Users,
    CheckCircle2,
    Phone,
    Mail,
    MapPin,
    Server,
    Cpu,
    Zap,
    Globe,
    Database,
    Factory,
    Building2,
    GraduationCap,
    ShoppingCart,
    ArrowRight,
} from 'lucide-react';
import './EWasteContent.css';

const EWasteContent = () => {
    // E-Waste specific state/effects
    useEffect(() => {
        const reveals = document.querySelectorAll('.scroll-reveal');
        const handleScroll = () => {
            reveals.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const processSteps = [
        {
            phase: 'Phase 1',
            title: 'Assessment & Planning',
            description: 'A dedicated account manager conducts a detailed assessment (on-site or virtual) to catalogue all electronic assets—IT equipment, lab devices, industrial scrap, etc. We develop a customized plan that aligns with your operational schedule, data security protocols, and sustainability goals.',
            icon: FileCheck,
        },
        {
            phase: 'Phase 2',
            title: 'Secure On-Site Collection',
            description: 'Our uniformed, trained crews arrive at your scheduled time with secure vehicles and handling gear. Each asset is logged into our digital tracking system with a unique ID. For data-bearing devices, we can perform on-site data wiping or apply tamper-proof seals.',
            icon: Shield,
        },
        {
            phase: 'Phase 3',
            title: 'GPS-Tracked Transportation',
            description: 'All collected assets are transported in our GPS-tracked, secure vehicles directly to our CPCB/SPCB-authorized processing facilities. We maintain full liability throughout transit.',
            icon: MapPin,
        },
        {
            phase: 'Phase 4',
            title: 'Systematic Processing',
            description: 'Material is weighed and audited. All data storage devices undergo irreversible destruction through degaussing and physical shredding. Skilled technicians disassemble items, segregating components into over 40 pure streams.',
            icon: Recycle,
        },
        {
            phase: 'Phase 5',
            title: 'Material Recovery',
            description: "Components undergo mechanical processing to achieve high-purity grades. Recovered materials are sent to authorized smelters and processors to become raw materials for new products, fueling India's circular economy.",
            icon: TrendingUp,
        },
        {
            phase: 'Phase 6',
            title: 'Certification & Reporting',
            description: 'You receive a comprehensive Certificate of Recycling & Data Destruction. This document is crucial for demonstrating EPR compliance, fulfilling ISO 14001 requirements, and providing evidence for ESG reporting.',
            icon: CheckCircle2,
        },
    ];

    const benefits = [
        {
            icon: Shield,
            title: 'Data Risk Elimination',
            description: 'Complete eradication of data breach risks from retired assets.',
        },
        {
            icon: FileCheck,
            title: 'Regulatory Peace of Mind',
            description: 'Assured compliance with E-Waste Rules, 2022, and other applicable laws.',
        },
        {
            icon: TrendingUp,
            title: 'Enhanced ESG Profile',
            description: 'Robust documentation to strengthen your sustainability reports and brand reputation as a responsible corporate citizen.',
        },
        {
            icon: Zap,
            title: 'Resource Conservation',
            description: "Recycling metals uses 70-90% less energy than virgin mining. You directly reduce India's resource import burden.",
        },
        {
            icon: CheckCircle2,
            title: 'Toxin Prevention',
            description: 'Responsible diversion of hazardous materials protects local communities and ecosystems.',
        },
        {
            icon: Users,
            title: 'Operational Efficiency',
            description: 'Clear storage space, eliminate administrative burden, and streamline asset retirement with a single, accountable partner.',
        },
    ];

    const industries = [
        { icon: Server, title: 'Information Technology & ITeS', description: 'Secure decommissioning for data centers and office IT refresh cycles.' },
        { icon: Database, title: 'BFSI', description: 'High-security data destruction for retired servers, ATMs, and storage media.' },
        { icon: Factory, title: 'Manufacturing & Automotive', description: 'Recycling of industrial automation, control systems, and electronic production scrap.' },
        { icon: Cpu, title: 'Healthcare & Pharmaceuticals', description: 'Compliant disposal of diagnostic and lab electronics after necessary decontamination.' },
        { icon: GraduationCap, title: 'Education & Government', description: 'Cost-effective, pan-India collection and recycling programs for institutions.' },
        { icon: Zap, title: 'Telecommunications & Media', description: 'Decommissioning of network infrastructure and broadcast equipment.' },
        { icon: ShoppingCart, title: 'Retail & Consumer Goods', description: 'Take-back schemes and end-of-life management for electronic products.' },
        { icon: Building2, title: 'Real Estate & Hospitality', description: 'End-of-lifecycle management for building automation and hospitality systems.' },
    ];

    const whyPoints = [
        {
            icon: Shield,
            title: 'Data Security Catastrophe',
            description: 'Every decommissioned hard drive, server, or phone contains sensitive data—financial records, customer PII, intellectual property. Informal disposal is a leading cause of data breaches.',
        },
        {
            icon: FileCheck,
            title: 'Legal & Financial Repercussions',
            description: 'Non-compliance with the E-Waste Rules, governed by the Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs), can lead to severe penalties, operational shutdowns, and reputational damage.',
        },
        {
            icon: Zap,
            title: 'Environmental Liability',
            description: 'Electronics contain hazardous substances like lead, mercury, cadmium, and brominated flame retardants. When dumped in landfills, these toxins leach into soil and groundwater, creating long-term ecological and public health issues.',
        },
        {
            icon: TrendingUp,
            title: 'Lost Resource Value',
            description: 'E-waste is a rich urban mine. Circuit boards contain gold, silver, palladium, and copper. Disposing of them as trash means throwing away valuable, finite resources that could re-enter the manufacturing cycle.',
        },
    ];

    return (
        <div className="ewaste-page w-full">

            {/* ============ 1. HERO / INTRO SECTION ============ */}
            <section className="ewaste-hero relative w-full overflow-hidden bg-gray-50 dark:bg-[#111]">
                <div className="max-w-screen-2xl mx-auto px-[12px] h-[500px] flex items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full h-full">
                        {/* Text Content Column */}
                        <div className="flex flex-col gap-4 justify-center h-full animate-fadeIn lg:pr-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#47622A]/10 dark:bg-[#799851]/10 border border-[#47622A]/20 dark:border-[#799851]/20 shadow-sm w-fit">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#47622A] dark:bg-[#799851] animate-pulse"></span>
                                <span className="text-[#47622A] dark:text-[#799851] font-bold text-[10px] tracking-widest uppercase">
                                    Electronics Recycling
                                </span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
                                Advanced <span className="!text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">E-Waste Recycling</span>
                            </h2>

                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
                                Secure, compliant processing for enterprise IT assets and consumer electronics. We recover maximum value and ensure zero landfill waste.
                            </p>

                            <div className="flex gap-4 pt-2">
                                <a href="/contact" className="px-6 py-2.5 bg-[#47622A] hover:bg-[#5a7638] text-white font-semibold rounded-lg transition-colors shadow-md text-sm">
                                    Request Audit
                                </a>
                                <a href="#process" className="px-6 py-2.5 bg-white dark:bg-[#1a1a1a] border border-[#47622A] text-[#47622A] dark:text-[#799851] hover:bg-gray-50 dark:hover:bg-[#111] font-semibold rounded-lg transition-colors text-sm">
                                    Our Capabilities
                                </a>
                            </div>
                        </div>

                        {/* Image Content Column */}
                        <div className="animate-fadeIn hidden md:flex justify-end items-center h-full py-8">
                            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#47622A]/20 to-transparent mix-blend-overlay z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1550005973-54cd798b31ea?q=80&w=2670&auto=format&fit=crop"
                                    alt="Advanced E-Waste Recycling Facility"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ 3. WHY CHOOSE US SECTION ============ */}
            <section className="ewaste-why py-4 bg-gray-50 dark:bg-[#111]">
                <div className="ewaste-why__container max-w-screen-2xl mx-auto px-[12px]">
                    <div className="ewaste-why__header text-center flex flex-col items-center  py-4 scroll-reveal">
                        <p className="ewaste-why__label text-[#47622A] dark:text-[#799851] font-bold text-sm tracking-widest uppercase ">Why Choose Us</p>
                        <h2 className="ewaste-why__heading text-4xl md:text-5xl font-bold  dark:text-white text-gray-900 leading-tight">
                            Why Proper Electronics <br className="hidden md:block" />
                            <span className="ewaste-why__heading-accent !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">Management is Non-Negotiable</span>
                        </h2>
                        <p className="ewaste-why__subtitle text-lg dark:text-gray-400 text-gray-600 max-w-3xl leading-relaxed ">
                            Electronic waste is India's fastest-growing waste stream, with over 3.2 million
                            metric tons generated annually. The informal sector handles a significant portion,
                            leading to dangerous practices.
                        </p>
                    </div>

                    <div className="ewaste-why__grid grid md:grid-cols-2 gap-6 ">
                        {whyPoints.map((point, index) => (
                            <div
                                key={index}
                                className="ewaste-why__card scroll-reveal p-6 lg:p-8 rounded-3xl dark:bg-[#1a1a1a] bg-white border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-md"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="ewaste-why__card-icon-wrap inline-flex p-3 rounded-xl bg-[#47622A]/10 dark:bg-[#799851]/10 ">
                                    <point.icon className="w-6 h-6 text-[#47622A] dark:text-[#799851]" strokeWidth={2} />
                                </div>
                                <h3 className="ewaste-why__card-title text-xl font-bold  dark:text-white text-gray-900">
                                    {point.title}
                                </h3>
                                <p className="ewaste-why__card-description dark:text-gray-400 text-gray-600 leading-relaxed text-sm md:text-base">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="ewaste-why__cta-wrapper scroll-reveal">
                        <div className="ewaste-why__cta-banner p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-[#47622A] to-[#799851] text-white relative overflow-hidden">
                            <div className="ewaste-why__cta-glow absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                            <p className="ewaste-why__cta-text text-lg lg:text-xl leading-relaxed relative z-10 font-medium">
                                <strong className="ewaste-why__cta-strong text-xl lg:text-2xl block ">MS Asia Enterprises is the definitive solution.</strong>
                                We close the loop with a formal, auditable process that protects your business, recovers value, and
                                ensures every component is handled according to the highest environmental and data
                                security standards.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ 4. CERTIFIED PROCESS SECTION ============ */}
            <section id="process" className="ewaste-process py-8 dark:bg-[#0a0a0a] bg-white">
                <div className="ewaste-process__container max-w-screen-2xl mx-auto px-[12px]">
                    <div className="ewaste-process__header text-center flex flex-col items-center  scroll-reveal">
                        <p className="ewaste-process__label text-[#47622A] dark:text-[#799851] font-bold text-sm tracking-widest uppercase ">Our Expertise</p>
                        <h2 className="ewaste-process__heading text-4xl md:text-5xl font-bold  dark:text-white text-gray-900 leading-tight">
                            Our <span className="ewaste-process__heading-accent !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">Certified Process</span>
                        </h2>
                        <p className="ewaste-process__subtitle text-lg mx-auto dark:text-gray-400 text-gray-600 max-w-3xl leading-relaxed">
                            A Step-by-Step Framework for India: We operate on a foundation of transparency,
                            security, and compliance.
                        </p>
                    </div>

                    <div className="ewaste-process__list ">
                        {processSteps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className={`ewaste-process__step scroll-reveal flex flex-col items-center gap-6 p-6 lg:p-8 rounded-3xl dark:bg-[#111] bg-gray-50 border border-transparent dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-colors ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className="ewaste-process__step-icon-wrap flex-shrink-0 w-full md:w-auto">
                                        <div className="ewaste-process__step-icon w-16 h-16 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-[#47622A] to-[#799851] flex items-center justify-center shadow-md">
                                            <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                        </div>
                                    </div>
                                    <div className="ewaste-process__step-body flex-grow w-full text-center md:text-left">
                                        <div className="ewaste-process__step-phase text-[#47622A] dark:text-[#799851] font-bold text-xs tracking-widest uppercase ">
                                            {step.phase}
                                        </div>
                                        <h3 className="ewaste-process__step-title text-xl font-bold  dark:text-white text-gray-900">
                                            {step.title}
                                        </h3>
                                        <p className="ewaste-process__step-description dark:text-gray-400 text-gray-600 leading-relaxed text-sm md:text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ============ 5. CATEGORIES TABLE SECTION ============ */}
            <section className="ewaste-categories py-8 bg-gray-50 dark:bg-[#111]">
                <div className="ewaste-categories__container max-w-screen-2xl mx-auto px-[12px]">
                    <div className="ewaste-categories__header text-center flex flex-col items-center  scroll-reveal">
                        <p className="ewaste-categories__label text-[#47622A] dark:text-[#799851] font-bold text-sm tracking-widest uppercase ">Capabilities</p>
                        <h2 className="ewaste-categories__heading text-4xl md:text-5xl font-bold  dark:text-white text-gray-900 leading-tight">
                            <span className="ewaste-categories__heading-accent !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">Electronics</span> We Collect
                        </h2>
                        <p className="ewaste-categories__subtitle text-lg mx-auto dark:text-gray-400 text-gray-600 max-w-3xl leading-relaxed">
                            We provide solutions for virtually every category of end-of-life electronic equipment
                            across India.
                        </p>
                    </div>

                    <div className="ewaste-categories__table-wrapper scroll-reveal">
                        <div className="ewaste-categories__table-outer overflow-x-auto rounded-3xl border dark:border-white/10 border-gray-200 bg-white dark:bg-[#1a1a1a] shadow-sm">
                            <table className="ewaste-categories__table w-full min-w-[800px] text-left">
                                <thead className="ewaste-categories__thead bg-[#47622A] dark:bg-[#1a1a1a] border-b dark:border-white/10 border-transparent text-white dark:text-gray-200">
                                    <tr>
                                        <th className="ewaste-categories__th px-6 py-4 text-sm font-bold uppercase tracking-wider">Category</th>
                                        <th className="ewaste-categories__th px-6 py-4 text-sm font-bold uppercase tracking-wider">Examples</th>
                                        <th className="ewaste-categories__th px-6 py-4 text-sm font-bold uppercase tracking-wider">Our Specialized Handling</th>
                                    </tr>
                                </thead>
                                <tbody className="ewaste-categories__tbody divide-y dark:divide-white/5 divide-gray-100">
                                    {categories.map((cat, index) => (
                                        <tr key={index} className="ewaste-categories__row hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                            <td className="ewaste-categories__td-category px-6 py-4 font-bold dark:text-gray-200 text-[#47622A] text-sm align-top">
                                                {cat.category}
                                            </td>
                                            <td className="ewaste-categories__td-examples px-6 py-4 dark:text-gray-400 text-gray-600 text-sm align-top">
                                                {cat.examples}
                                            </td>
                                            <td className="ewaste-categories__td-handling px-6 py-4 dark:text-gray-400 text-gray-600 text-sm align-top">
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

            {/* ============ 6. INDUSTRIES / SECTORS SECTION ============ */}
            <section className="ewaste-industries py-8 dark:bg-[#0a0a0a] bg-white">
                <div className="ewaste-industries__container max-w-screen-2xl mx-auto px-[12px]">
                    <div className="ewaste-industries__header text-center flex flex-col items-center  scroll-reveal">
                        <p className="ewaste-industries__label text-[#47622A] dark:text-[#799851] font-bold text-sm tracking-widest uppercase ">Sectors</p>
                        <h2 className="ewaste-industries__heading text-4xl md:text-5xl font-bold  dark:text-white text-gray-900 leading-tight">
                            Industries <span className="ewaste-industries__heading-accent !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">We Serve</span>
                        </h2>
                        <p className="ewaste-industries__subtitle text-lg mx-auto dark:text-gray-400 text-gray-600 max-w-3xl leading-relaxed">
                            Tailored solutions for diverse sectors across India.
                        </p>
                    </div>

                    <div className="ewaste-industries__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="ewaste-industries__card scroll-reveal p-8 flex flex-col items-center text-center rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="ewaste-industries__card-icon w-16 h-16 rounded-[1.25rem] bg-[#5a7638] dark:bg-[#799851]  flex items-center justify-center">
                                    <industry.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="ewaste-industries__card-title text-[17px] font-bold  dark:text-white text-gray-900 leading-snug tracking-tight px-2">
                                    {industry.title}
                                </h3>
                                <p className="ewaste-industries__card-description dark:text-gray-400 text-gray-500 text-[13px] leading-relaxed">
                                    {industry.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ 7. WHY PARTNER / BENEFITS SECTION ============ */}
            <section className="ewaste-benefits py-8 bg-gray-50 dark:bg-[#111]">
                <div className="ewaste-benefits__container max-w-screen-2xl mx-auto px-[12px]">
                    <div className="ewaste-benefits__header text-center flex flex-col items-center  scroll-reveal">
                        <p className="ewaste-benefits__label text-[#5a7638] dark:text-[#799851] font-bold text-xs tracking-widest uppercase ">Why Partner</p>
                        <h2 className="ewaste-benefits__heading text-4xl md:text-5xl font-extrabold  dark:text-white text-gray-900 leading-tight">
                            Why Choose <span className="ewaste-benefits__heading-accent text-[#5a7638] dark:text-[#799851]">MS Asia Enterprises</span>
                        </h2>
                        <p className="ewaste-benefits__subtitle text-lg mx-auto dark:text-gray-400 text-gray-600 max-w-3xl leading-relaxed">
                            Leading Indian and multinational companies trust us for secure, compliant, and sustainable e-<br className="hidden md:block" />waste management.
                        </p>
                    </div>

                    <div className="ewaste-benefits__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="ewaste-benefits__card scroll-reveal p-8 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-[0_4px_20px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 flex flex-col items-start text-left"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="ewaste-benefits__card-icon-wrap w-14 h-14 rounded-2xl bg-[#eff1ea] dark:bg-[#2a3024]  flex items-center justify-center border border-[#e5e9de] dark:border-white/5">
                                    <benefit.icon className="w-6 h-6 text-[#5a7638] dark:text-[#799851]" strokeWidth={1.5} />
                                </div>
                                <h3 className="ewaste-benefits__card-title text-lg font-bold  dark:text-white text-gray-900 leading-snug">
                                    {benefit.title}
                                </h3>
                                <p className="ewaste-benefits__card-description dark:text-gray-400 text-gray-500 text-[14px] leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ 8. CONTACT CTA SECTION ============ */}
            <section className="ewaste-contact py-8 dark:bg-[#0a0a0a] bg-white">
                <div className="ewaste-contact__container max-w-screen-2xl mx-auto px-[12px]">
                    <div className="ewaste-contact__banner bg-gradient-to-r from-[#47622A] to-[#799851] rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden scroll-reveal">
                        <div className="ewaste-contact__glow-top absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="ewaste-contact__glow-bottom absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

                        <h2 className="ewaste-contact__heading text-3xl lg:text-5xl font-bold  relative z-10 text-white">
                            Ready to Secure Your E-Waste?
                        </h2>
                        <p className="ewaste-contact__description text-lg lg:text-xl font-medium  max-w-2xl mx-auto relative z-10 text-white/90">
                            Get in touch with our experts to design a tailored electronics recycling program for your organization.
                        </p>

                        <div className="ewaste-contact__actions flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
                            <a
                                href="/contact"
                                className="ewaste-contact__btn group px-8 py-4 rounded-xl bg-white !text-[#47622A] font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all inline-flex items-center space-x-2"
                            >
                                <span className="text-[#47622A] dark:text-[#47622A]">Contact Us Today</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EWasteContent;

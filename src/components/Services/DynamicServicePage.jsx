import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceData } from './ServiceData';
import EWasteContent from '../Pages/EWaste/EWasteContent';

const DynamicServicePage = () => {
    const { slug } = useParams();
    const data = getServiceData(slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
            {/* 1. HERO SECTION */}
            <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
                {/* Background Image Placeholder */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                    style={{
                        backgroundImage: `url('${data.image}')`,
                    }}
                >
                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="relative h-full max-w-screen-2xl mx-auto px-[12px] flex flex-col justify-center items-start text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-2 animate-slideInLeft text-white">
                        {data.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-6 font-light max-w-2xl animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
                        {data.subtitle}
                    </p>
                    <div className="w-24 h-1.5 bg-[#799851] rounded-full animate-widthGrow"></div>
                </div>
            </div>

            {/* 2. MAIN CONTENT AREA */}
            {slug === 'e-waste-recycling' ? (
                <EWasteContent />
            ) : (
                <main className="max-w-[1240px] mx-auto px-6 py-16 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* LEFT COLUMN: Main Content (Cols 1-8) */}
                        <div className="lg:col-span-8 space-y-20 lg:space-y-24">

                            {/* 1. Inner Page Header/Intro */}
                            <section className="space-y-6 animate-fadeIn">
                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#47622A] animate-pulse"></span>
                                    <span className="text-[#47622A] dark:text-[#799851] font-bold text-[11px] tracking-[0.2em] uppercase font-montserrat">
                                        Enterprise Solutions
                                    </span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-montserrat font-extrabold leading-[1.15] tracking-tight">
                                    <span className="text-gray-900 dark:text-white">Advanced </span><span className="!text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">{data.title}</span>
                                </h2>

                                <div className="prose prose-lg prose-gray dark:prose-invert max-w-none pt-4">
                                    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light font-sans">
                                        {data.description}
                                    </p>
                                    <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mt-6 font-sans">
                                        Our certified experts utilize state-of-the-art methodology to ensure every aspect of your requirement is met with precision, absolute compliance, and environmental stewardship. We deliver enterprise-grade performance built for modern regulatory challenges.
                                    </p>
                                </div>
                            </section>

                            {/* 2. Core Features/Offerings (Grid) */}
                            <section className="space-y-8 lg:space-y-10 animate-fadeInUp">
                                <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
                                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white">
                                        Core Capabilities
                                    </h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                    {data.features && data.features.map((feature, i) => (
                                        <div key={i} className="group flex flex-col items-start p-8 rounded-3xl bg-white dark:bg-[#111111] border border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-all duration-500 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] dark:shadow-none dark:hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.02)] relative overflow-hidden">

                                            {/* Ultra-subtle background accent on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent dark:from-white/[0.02] dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50/80 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-gray-900 dark:text-gray-200 mb-6 group-hover:scale-105 group-hover:text-[#47622A] dark:group-hover:text-[#799851] group-hover:bg-white dark:group-hover:bg-white/10 transition-all duration-500 shadow-sm relative z-10">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                                    {/* Clean, minimalist icons */}
                                                    {(i === 0) ? <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> :
                                                        (i === 1) ? <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /> :
                                                            (i === 2) ? <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> :
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />}
                                                </svg>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-montserrat tracking-tight relative z-10 group-hover:text-[#47622A] dark:group-hover:text-[#799851] transition-colors">
                                                {feature}
                                            </h4>
                                            <p className="text-gray-500 dark:text-gray-400 font-sans text-[15px] leading-relaxed relative z-10 font-light">
                                                Engineered for rigorous compliance, ensuring seamless integration with your operational workflows and risk-mitigation strategies.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 3. Our Process */}
                            <section className="space-y-8 lg:space-y-10 animate-fadeInUp">
                                <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-8">
                                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 dark:text-white">
                                        Operational Workflow
                                    </h3>
                                </div>

                                <div className="relative mt-6">
                                    {/* Central Line */}
                                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-[#47622A]/20 dark:bg-[#799851]/20 md:-translate-x-1/2"></div>

                                    <div className="space-y-8 md:space-y-0 relative">
                                        {[
                                            { title: "Assessment & Strategy", desc: "A detailed onsite evaluation to align our solutions with your facility's unique compliance and logistical needs." },
                                            { title: "Protocol Deployment", desc: "Our specialized teams execute the approved framework using industry-leading equipment and protocols." },
                                            { title: "Secure Processing", desc: "Material is transported and processed at certified facilities, maximizing recovery and neutralizing risks." },
                                            { title: "Audit & Certification", desc: "Issuance of immutable records and certificates validating complete regulatory adherence and destruction." }
                                        ].map((step, idx) => {
                                            const isEven = idx % 2 === 0;
                                            return (
                                                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''} md:py-8`}>

                                                    {/* Center Dot */}
                                                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#47622A] dark:bg-[#799851] ring-4 ring-white dark:ring-[#0a0a0a] z-10 top-8 md:top-1/2 md:-translate-y-1/2"></div>

                                                    {/* Empty space for alternating layout on desktop */}
                                                    <div className="hidden md:block md:w-[50%]"></div>

                                                    {/* Content Card */}
                                                    <div className={`w-full md:w-[50%] pl-12 md:pl-0 ${isEven ? 'md:pr-14' : 'md:pl-14'}`}>
                                                        <div className="bg-white dark:bg-[#111111] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 group">
                                                            <div className={`text-[11px] font-bold text-[#47622A] dark:text-[#799851] mb-3 font-montserrat tracking-[0.2em] uppercase ${isEven ? 'md:text-right' : 'text-left'}`}>
                                                                Phase 0{idx + 1}
                                                            </div>
                                                            <h4 className={`text-xl font-bold text-gray-900 dark:text-white mb-3 font-montserrat tracking-tight ${isEven ? 'md:text-right' : 'text-left'}`}>
                                                                {step.title}
                                                            </h4>
                                                            <p className={`text-gray-500 dark:text-gray-400 font-sans text-[15px] leading-relaxed font-light ${isEven ? 'md:text-right' : 'text-left'}`}>
                                                                {step.desc}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </section>

                            {/* 4. Why Choose MS Asia */}
                            <section className="bg-gradient-to-br from-[#111111] to-[#0a0a0a] rounded-3xl lg:rounded-[2rem] p-8 lg:p-12 text-white shadow-xl animate-fadeInUp border border-gray-800 relative overflow-hidden">
                                {/* Subtle Background Glow */}
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#47622A] rounded-full blur-[100px] opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

                                <div className="mb-10 relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
                                    <h3 className="text-3xl lg:text-4xl font-montserrat font-black tracking-tight mb-4">
                                        The MS Asia Advantage
                                    </h3>
                                    <p className="text-gray-400 max-w-2xl font-sans text-lg lg:text-xl font-light">
                                        Partnering with us means securing your operations with unmatched industry expertise, cutting-edge technology, and unwavering compliance.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
                                    <div className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/10 dark:border-white/5 hover:bg-white/10 dark:hover:bg-white/[0.05] transition-all duration-500 group">
                                        <div className="w-12 h-12 rounded-2xl bg-black/30 dark:bg-black/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-105 transition-transform duration-500">
                                            <svg className="w-5 h-5 text-[#799851]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <h4 className="text-lg font-bold font-montserrat text-white tracking-wide mb-3">Regulatory Excellence</h4>
                                        <p className="text-gray-400 font-sans text-[15px] leading-relaxed font-light">Absolute adherence to global safety protocols, protecting your organization from regulatory liabilities and ensuring peace of mind.</p>
                                    </div>

                                    <div className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/10 dark:border-white/5 hover:bg-white/10 dark:hover:bg-white/[0.05] transition-all duration-500 group">
                                        <div className="w-12 h-12 rounded-2xl bg-black/30 dark:bg-black/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-105 transition-transform duration-500">
                                            <svg className="w-5 h-5 text-[#799851]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                        </div>
                                        <h4 className="text-lg font-bold font-montserrat text-white tracking-wide mb-3">Data-Driven Precision</h4>
                                        <p className="text-gray-400 font-sans text-[15px] leading-relaxed font-light">Real-time reporting and detailed analytics ensuring transparent operations, full traceability, and measurable efficiency gains.</p>
                                    </div>

                                    <div className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/10 dark:border-white/5 hover:bg-white/10 dark:hover:bg-white/[0.05] transition-all duration-500 group">
                                        <div className="w-12 h-12 rounded-2xl bg-black/30 dark:bg-black/50 flex items-center justify-center border border-white/5 mb-6 group-hover:scale-105 transition-transform duration-500">
                                            <svg className="w-5 h-5 text-[#799851]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        </div>
                                        <h4 className="text-lg font-bold font-montserrat text-white tracking-wide mb-3">Zero-Impact Goals</h4>
                                        <p className="text-gray-400 font-sans text-[15px] leading-relaxed font-light">Championing the circular economy by pushing zero-landfill initiatives and maximizing resource recovery across all managed facilities.</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* RIGHT SIDE: Sticky CTA Sidebar (Cols 9-12) */}
                        <aside className="lg:col-span-4 lg:sticky lg:top-32 animate-fadeInRight">
                            <div className="bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-white/5 rounded-[2rem] p-10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                                {/* Seamless glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#47622A]/20 to-transparent rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

                                <h3 className="text-2xl font-montserrat font-bold text-white mb-4 tracking-tight relative z-10">
                                    Request Consultation
                                </h3>
                                <p className="text-gray-400 font-sans text-[15px] leading-relaxed mb-8 relative z-10 font-light">
                                    Connect with our specialists to develop a tailored framework for your {data.title} requirements at highly competitive rates.
                                </p>

                                <Link to="/contact" className="relative z-10 flex items-center justify-center gap-3 w-full bg-white/10 backdrop-blur-md text-white border border-white/10 font-montserrat font-semibold py-4 px-6 rounded-2xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-0.5 group/btn">
                                    <span>Get a Quote</span>
                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>

                                <div className="mt-10 pt-8 border-t border-white/5 space-y-8 relative z-10">
                                    <div className="flex items-center gap-5 group/item cursor-pointer">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#799851] group-hover/item:scale-105 group-hover/item:bg-white/10 transition-all duration-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-montserrat mb-1">Direct Line</p>
                                            <a href="tel:+1234567890" className="text-white font-montserrat font-semibold text-[17px] tracking-tight hover:text-[#799851] transition-colors">
                                                +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 group/item cursor-pointer">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#799851] group-hover/item:scale-105 group-hover/item:bg-white/10 transition-all duration-500">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-montserrat mb-1">Email Support</p>
                                            <a href="mailto:solutions@msasia.com" className="text-white font-montserrat font-semibold text-[17px] tracking-tight hover:text-[#799851] transition-colors">
                                                solutions@msasia.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            )}

        </div>
    );
};

export default DynamicServicePage;

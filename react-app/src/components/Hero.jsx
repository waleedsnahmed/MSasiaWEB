import ServiceCard from './ServiceCard'

function Hero() {
    return (
        <main className="pt-[200px] px-6 max-w-7xl mx-auto text-center relative z-10 w-full overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-bg-alt rounded-full blur-3xl opacity-60 -z-10 transition-colors duration-500"></div>

            {/* Badge */}
            <span className="inline-block py-1 px-3 rounded-full bg-brand-bg-highlight text-brand-link-hover text-xs font-bold tracking-wider mb-6">
                PREMIUM RECYCLING & WASTE MANAGEMENT
            </span>

            {/* Heading */}
            <h1 className="h1 mb-8">
                Sustainable <br />
                <span className="text-brand-link">Industries & Future</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto leading-relaxed mb-12">
                Transforming industrial waste into valuable resources with precision, compliance, and sustainability at the core.
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 text-left pb-20">
                <ServiceCard
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            />
                        </svg>
                    }
                    title="Chemical Waste"
                    description="Safe handling and disposal of hazardous chemical byproducts."
                    iconColorClass="text-brand-icon-primary"
                />

                <ServiceCard
                    icon={
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                    }
                    title="Recycling"
                    description="Advanced recycling processes for metals, plastics, and electronics."
                    iconColorClass="text-brand-icon-eco"
                />
            </div>
        </main>
    )
}

export default Hero

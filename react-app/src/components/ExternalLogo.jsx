function ExternalLogo({ isHidden }) {
    return (
        <div
            id="external-logo"
            className={`external-element fixed top-8 left-6 md:left-12 z-50 flex items-center gap-2 group ${isHidden ? 'hidden-state' : ''}`}
        >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-heading-h1 to-brand-icon-primary flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-heading-h1/20">
                MA
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-heading-h1 hidden md:block">
                Ms Asia
            </span>
        </div>
    )
}

export default ExternalLogo

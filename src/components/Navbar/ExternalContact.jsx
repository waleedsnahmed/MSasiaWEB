import ThemeToggle from '../common/ThemeToggle'

function ExternalContact({ isHidden, isDark, toggleTheme }) {
    return (
        <div className="hidden md:flex fixed top-8 right-6 md:right-12 z-50 items-center gap-3 pointer-events-none">
            {/* Contact Button */}
            <div
                className={`external-element pointer-events-auto hidden md:block ${isHidden ? 'hidden-state' : ''
                    }`}
            >
                <a
                    href="#contact"
                    className="bg-brand-btn-primary hover:bg-brand-btn-primary-hover text-white rounded-full px-4 md:px-6 lg:px-8 h-10 md:h-11 lg:h-12 shadow-lg shadow-brand-btn-primary/30 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
                >
                    <span className="font-semibold text-sm" style={{ color: 'white' }}>Contact Us</span>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </a>
            </div>

            {/* Theme Toggle (Desktop only) */}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} isDesktop={true} />
        </div>
    )
}

export default ExternalContact

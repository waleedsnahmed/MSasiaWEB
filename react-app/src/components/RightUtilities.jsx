return (
    <div className="fixed top-8 right-6 md:right-12 z-50 hidden md:flex items-center gap-3 pointer-events-none">
        {/* External Contact */}
        <div
            id="external-contact"
            className={`external-element pointer-events-auto ${isHidden ? 'hidden-state' : ''}`}
        >
            <a
                href="#"
                className="bg-brand-btn-primary hover:bg-brand-btn-primary-hover text-white rounded-full pl-5 pr-2 py-2 shadow-lg shadow-brand-btn-primary/30 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
            >
                <span className="font-semibold text-sm">Contact Us</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </a>
        </div>

        {/* Theme Toggle */}
        <button
            onClick={onToggleTheme}
            className="pointer-events-auto p-2.5 bg-brand-bg-card/80 backdrop-blur-md rounded-full text-brand-icon-primary hover:bg-brand-bg-highlight transition-all shadow-sm group border border-brand-border-soft"
        >
            {/* Sun Icon (shown in dark mode) */}
            <svg
                className={`w-5 h-5 ${isDarkMode ? 'block' : 'hidden'} group-hover:rotate-90 transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
            {/* Moon Icon (shown in light mode) */}
            <svg
                className={`w-5 h-5 ${isDarkMode ? 'hidden' : 'block'} group-hover:-rotate-90 transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        </button>
    </div>
)
}

export default RightUtilities

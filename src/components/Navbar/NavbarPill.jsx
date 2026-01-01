import SearchBar from '../common/SearchBar'

function NavbarPill({
    isScrolled,
    isMobileScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    isSearchExpanded,
    toggleSearch,
    isDark,
    toggleTheme,
}) {
    const pillClasses = `glass-pill pointer-events-auto rounded-full px-4 py-2.5 flex items-center gap-1 transition-all duration-500 bg-brand-bg-card/90 backdrop-blur-md border border-brand-border-soft shadow-lg ${isScrolled ? 'scrolled' : ''
        } ${isMobileScrolled ? 'mobile-scrolled' : ''}`

    return (
        <div className="fixed top-6 left-0 w-full flex justify-center z-40 pointer-events-none px-4">
            <nav id="navbar-pill" className={pillClasses}>
                {/* INTERNAL LOGO (Desktop - appears on scroll) */}
                <a
                    href="/"
                    className={`internal-element navbar-logo hidden md:flex items-center gap-2 no-underline transition-all duration-300 ${isScrolled ? 'visible-state' : 'opacity-0 max-w-0 overflow-hidden'
                        }`}
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-heading-h1 to-brand-icon-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                        MA
                    </div>
                </a>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center gap-1">
                    <li>
                        <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                            What We Do
                        </a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                            Industries We Serve
                        </a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                            Company
                        </a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                            Blog
                        </a>
                    </li>
                </ul>

                {/* DIVIDER (Desktop only) */}
                <div className="h-6 w-px bg-brand-border-divider hidden md:block mx-1"></div>

                {/* SEARCH BUTTON */}
                <SearchBar isExpanded={isSearchExpanded} toggleSearch={toggleSearch} />

                {/* ===== MOBILE LAYOUT ===== */}
                {/* MOBILE: Logo (Left) */}
                <a href="/" className="navbar-logo flex md:hidden items-center gap-2 no-underline mr-auto">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-heading-h1 to-brand-icon-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                        MA
                    </div>
                </a>

                {/* MOBILE: Menu Button (Center) */}
                <button
                    onClick={toggleMobileMenu}
                    className="md:hidden px-3 py-1.5 rounded-full text-sm font-medium bg-brand-heading-h1 text-white hover:bg-brand-heading-h1/90 transition-colors flex items-center gap-1"
                >
                    <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        )}
                    </svg>
                </button>

                {/* MOBILE: Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="md:hidden p-2 rounded-full text-white bg-brand-heading-h1 hover:bg-brand-heading-h1/90 transition-all"
                >
                    {isDark ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>

                {/* INTERNAL CONTACT (Desktop - appears on scroll) */}
                <a
                    href="#contact"
                    className={`internal-element hidden md:flex bg-brand-btn-primary hover:bg-brand-btn-primary-hover !text-white rounded-full px-4 py-1.5 text-sm font-semibold shadow-md transition-all items-center gap-1 ${isScrolled ? 'visible-state' : 'opacity-0 max-w-0 overflow-hidden'
                        }`}
                >
                    <span>Contact Us</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>

                {/* MOBILE: Contact Button */}
                <a
                    href="#contact"
                    className="md:hidden bg-brand-btn-primary hover:bg-brand-btn-primary-hover text-white rounded-full px-3 py-1.5 text-xs font-semibold shadow-md transition-all"
                >
                    Contact
                </a>
            </nav>
        </div>
    )
}

export default NavbarPill

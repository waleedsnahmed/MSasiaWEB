function MobileMenu({ isOpen, onClose, onToggleTheme }) {
    return (
        <div
            id="mobile-menu"
            className={`mobile-overlay fixed inset-0 bg-brand-bg-card/98 backdrop-blur-xl z-[60] flex flex-col pt-24 px-6 md:hidden ${isOpen ? 'open' : ''}`}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-brand-text-muted bg-brand-bg-alt rounded-full"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Menu Links */}
            <div className="flex flex-col gap-4 text-xl font-medium text-brand-text-main">
                <a href="#" className="py-3 border-b border-brand-border-soft">Home</a>
                <a href="#" className="py-3 border-b border-brand-border-soft">What We Do</a>
                <a href="#" className="py-3 border-b border-brand-border-soft">Industries We Serve</a>
                <a href="#" className="py-3 border-b border-brand-border-soft">Company</a>
                <a href="#" className="py-3 border-b border-brand-border-soft">Blog</a>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex flex-col gap-4">
                {/* Search */}
                <div className="flex items-center bg-brand-bg-alt rounded-lg p-3">
                    <svg className="w-5 h-5 text-brand-text-muted mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent w-full outline-none text-brand-text-main placeholder-brand-text-muted"
                    />
                </div>

                {/* Theme Toggle Button */}
                <button
                    onClick={onToggleTheme}
                    className="flex items-center justify-between w-full p-4 bg-brand-bg-alt rounded-lg text-brand-text-main"
                >
                    <span className="font-medium">Dark Mode</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                </button>

                {/* Contact Button */}
                <a
                    href="#"
                    className="bg-brand-btn-primary text-white text-center font-bold py-4 rounded-lg shadow-lg mt-2 flex items-center justify-center gap-2"
                >
                    Contact Us
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default MobileMenu

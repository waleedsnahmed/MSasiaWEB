function MobileMenu({ isOpen, onClose }) {
    return (
        <div
            className={`fixed inset-0 bg-brand-bg-card/98 backdrop-blur-xl z-50 flex flex-col pt-24 px-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
        >
            <div className="flex flex-col gap-4 text-xl font-medium text-brand-text-main">
                <a href="#" onClick={onClose} className="py-3 border-b border-brand-border-soft">
                    What We Do
                </a>
                <a href="#" onClick={onClose} className="py-3 border-b border-brand-border-soft">
                    Industries We Serve
                </a>
                <a href="#" onClick={onClose} className="py-3 border-b border-brand-border-soft">
                    Company
                </a>
                <a href="#" onClick={onClose} className="py-3 border-b border-brand-border-soft">
                    Blog
                </a>
            </div>
        </div>
    )
}

export default MobileMenu

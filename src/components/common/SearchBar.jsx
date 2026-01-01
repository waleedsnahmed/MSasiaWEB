import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

function SearchBar({ isExpanded, toggleSearch }) {
    const inputRef = useRef(null)

    useEffect(() => {
        if (isExpanded && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isExpanded])

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isExpanded) {
                toggleSearch()
            }
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isExpanded, toggleSearch])

    // Prevent body scroll when search is open
    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isExpanded])

    return (
        <>
            {/* Search Button in Navbar */}
            <button
                onClick={toggleSearch}
                className="p-2 text-brand-icon-primary hover:bg-brand-bg-highlight rounded-full transition-colors focus:outline-none"
            >
                <svg className="w-4 h-4" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>

            {/* Bottom Center Search Overlay - Using Portal to render outside navbar */}
            {isExpanded && createPortal(
                <div className="search-overlay-container">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                        style={{ zIndex: 9998 }}
                        onClick={toggleSearch}
                    />

                    {/* Search Bar Container - Compact Symmetrical Pill */}
                    <div
                        className="fixed top-20 left-1/2"
                        style={{
                            zIndex: 9999,
                            transform: 'translateX(-50%)',
                            width: '360px',
                            maxWidth: 'calc(100vw - 2rem)'
                        }}
                    >
                        <div
                            className="bg-white backdrop-blur-lg rounded-full shadow-lg border border-gray-200"
                            style={{
                                animation: 'searchSlideUp 0.25s ease-out forwards'
                            }}
                        >
                            <div className="flex items-center justify-center h-12 px-4">
                                {/* Search Icon - Centered */}
                                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>

                                {/* Input Field */}
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search for services, solutions..."
                                    className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 mx-3"
                                />

                                {/* Close Button - Centered */}
                                <button
                                    onClick={toggleSearch}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-btn-primary hover:bg-brand-btn-primary-hover transition-colors flex-shrink-0"
                                >
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Animation Keyframes */}
                    <style>{`
                        @keyframes searchSlideUp {
                            from {
                                opacity: 0;
                                transform: translateY(30px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                    `}</style>
                </div>,
                document.body
            )}
        </>
    )
}

export default SearchBar

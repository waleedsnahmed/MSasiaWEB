import { useState, useEffect } from 'react'
import ExternalLogo from './ExternalLogo'
import ExternalContact from './ExternalContact'
import NavbarPill from './NavbarPill'
import MobileMenu from './MobileMenu'
import ThemeToggle from '../common/ThemeToggle'

function Navbar({ isDark, toggleTheme }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileScrolled, setIsMobileScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSearchExpanded, setIsSearchExpanded] = useState(false)

    const isMobile = () => window.innerWidth < 768

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY

            if (isMobile()) {
                // Mobile scroll (10px threshold for glass blur)
                if (scrollY > 10) {
                    setIsMobileScrolled(true)
                } else {
                    setIsMobileScrolled(false)
                }
            } else {
                // Desktop scroll animation - collapse all into navbar pill
                if (scrollY > 100) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden'
    }

    const toggleSearch = () => {
        setIsSearchExpanded(!isSearchExpanded)
    }

    return (
        <>
            {/* 1. EXTERNAL LOGO (LEFT) */}
            <ExternalLogo isHidden={isScrolled} />

            {/* 2. CENTER NAVBAR PILL */}
            <NavbarPill
                isScrolled={isScrolled}
                isMobileScrolled={isMobileScrolled}
                isMobileMenuOpen={isMobileMenuOpen}
                toggleMobileMenu={toggleMobileMenu}
                isSearchExpanded={isSearchExpanded}
                toggleSearch={toggleSearch}
                isDark={isDark}
                toggleTheme={toggleTheme}
            />

            {/* 3. EXTERNAL CONTACT BUTTON + THEME TOGGLE (RIGHT - Desktop only) */}
            <ExternalContact
                isHidden={isScrolled}
                isDark={isDark}
                toggleTheme={toggleTheme}
            />

            {/* MOBILE MENU OVERLAY */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => {
                    setIsMobileMenuOpen(false)
                    document.body.style.overflow = ''
                }}
            />
        </>
    )
}

export default Navbar

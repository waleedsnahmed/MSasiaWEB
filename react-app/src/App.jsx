import { useState, useEffect } from 'react'
import ExternalLogo from './components/ExternalLogo'
import NavbarPill from './components/NavbarPill'
import RightUtilities from './components/RightUtilities'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'

function App() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Initialize dark mode from localStorage
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
        } else {
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false)
        }
    }, [])

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const threshold = 50

            if (scrollY > threshold && !isScrolled) {
                setIsScrolled(true)
            } else if (scrollY <= threshold && isScrolled) {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isScrolled])

    // Toggle dark mode
    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
            setIsDarkMode(true)
        }
    }

    // Mobile menu handlers
    const openMobileMenu = () => {
        setIsMobileMenuOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        document.body.style.overflow = ''
    }

    return (
        <div className="bg-brand-bg-main min-h-[200vh] text-brand-text-main transition-colors duration-500">
            {/* External Logo */}
            <ExternalLogo isHidden={isScrolled} />

            {/* Navbar Pill */}
            <NavbarPill
                isScrolled={isScrolled}
                onOpenMobileMenu={openMobileMenu}
            />

            {/* Right Utilities (Contact + Theme Toggle) */}
            <RightUtilities
                isHidden={isScrolled}
                onToggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
            />

            {/* Mobile Menu Overlay */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                onToggleTheme={toggleTheme}
            />

            {/* Main Content */}
            <Hero />
        </div>
    )
}

export default App

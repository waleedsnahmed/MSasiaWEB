import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import IndustrialHero from './components/Hero/IndustrialHero'
import ScrapShowcase from './components/ScrapShowcase/ScrapShowcase'
import WorkProcess from './components/WorkProcess/WorkProcess'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import DynamicServicePage from './pages/Services/DynamicServicePage'
import About from './pages/About'
import PrivacyPolicy from './pages/Legal/PrivacyPolicy'
import TermsOfService from './pages/Legal/TermsOfService'
import NotFound from './pages/NotFound'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import SearchResults from './pages/SearchResults'
import WhatWeDo from './pages/WhatWeDo'
import Industries from './pages/Industries'
import Contact from './pages/Contact'

// Company Pages
import MissionValues from './pages/Company/MissionValues'
import Certifications from './pages/Company/Certifications'
import TechnologyInnovation from './pages/Company/TechnologyInnovation'
import SafetyStandards from './pages/Company/SafetyStandards'
import SustainabilityReport from './pages/Company/SustainabilityReport'
import Testimonials from './pages/Company/Testimonials'
import CaseStudies from './pages/Company/CaseStudies'
import StandardOfExcellence from './pages/Company/StandardOfExcellence'
import DemoRoadmap from './pages/DemoRoadmap'

// HomePage Component (Existing Content)
const HomePage = () => (
    <>
        <IndustrialHero />
        <ScrapShowcase />
        <WorkProcess />
        <ContactSection />
    </>
);

function App() {
    const [isDark, setIsDark] = useState(false)

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true)
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    // Toggle theme function
    const toggleTheme = () => {
        setIsDark(!isDark)
        if (!isDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <Router>
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/what-we-do" element={<WhatWeDo />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/:slug" element={<DynamicServicePage />} />
                <Route path="/industries/:slug" element={<DynamicServicePage />} />

                {/* Company Pages */}
                <Route path="/mission-and-values" element={<MissionValues />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/technology-and-innovation" element={<TechnologyInnovation />} />
                <Route path="/safety-standards" element={<SafetyStandards />} />
                <Route path="/sustainability-report" element={<SustainabilityReport />} />
                <Route path="/client-testimonials" element={<Testimonials />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/standard-of-excellence" element={<StandardOfExcellence />} />
                <Route path="/demoroadmap" element={<DemoRoadmap />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App

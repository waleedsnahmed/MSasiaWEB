import { useState, useRef, useEffect } from 'react'
import DropdownMenu from './DropdownMenu'

// Dropdown data
const servicesDropdown = {
    title: "What We Do",
    width: "w-[900px]",
    columns: 5,
    sections: [
        {
            heading: "Electronics & IT Assets",
            items: [
                "Corporate IT Scrap Disposal",
                "E-Waste Recycling",
                "HPLC Solvent Waste Collection",
                "Motor & Transformer Scrap",
                "Wire & Cable Scrap",
                "Battery Scrap Collection"
            ]
        },
        {
            heading: "Metals Recycling",
            items: [
                "Aluminium Scrap Recycling",
                "Brass & Bronze Scrap",
                "Ferrous Metal Scrap",
                "Heavy Equipment Scrap",
                "Industrial Machinery Scrap",
                "Lead Scrap Recycling",
                "Nickel & Alloy Scrap",
                "Non-Ferrous Metal Scrap",
                "Stainless Steel Scrap"
            ]
        },
        {
            heading: "Industrial Waste Solutions",
            items: [
                "Construction & Demolition Scrap",
                "HVAC Scrap Recovery",
                "Chemical Packing"
            ]
        },
        {
            heading: "Recyclable Materials",
            items: [
                "Glass Waste Recycling",
                "Paper & Cardboard Recycling",
                "Plastic Scrap Processing",
                "Rubber & Tyre Scrap",
                "Textile & Fabric Scrap",
                "Wood & Pallet Scrap"
            ]
        },
        {
            heading: "Special Waste Services",
            items: [
                "Biohazardous Medical Waste Disposal",
                "Pharmaceutical Waste",
                "Regulated Medical Waste Services",
                "Sharps Disposal Service"
            ]
        }
    ]
}

const industriesDropdown = {
    title: "Industries We Serve",
    width: "w-[900px]",
    columns: 4,
    sections: [
        {
            heading: "Healthcare",
            items: [
                "Hospitals & Health Systems",
                "Clinics & Urgent Care Centers",
                "Dental Clinics",
                "Dialysis Centers",
                "Physician Offices",
                "Surgery Centers",
                "Nursing & Long-Term Care Facilities",
                "Veterinary Clinics & Hospitals"
            ]
        },
        {
            heading: "Pharmacy & Research",
            items: [
                "Retail Pharmacies",
                "Compounding Pharmacies",
                "Laboratory & Research Organizations",
                "Blood Banks"
            ]
        },
        {
            heading: "Corporate & Enterprise",
            items: [
                "Enterprise Healthcare",
                "National & Corporate Healthcare",
                "Non-Acute Hospital Affiliates",
                "Home Health Organizations",
                "Practices & Care Providers"
            ]
        },
        {
            heading: "Other Sectors",
            items: [
                "Chemical & Specialty Chemical",
                "Pharmaceutical & Biotechnology",
                "Education / Educational Institutions",
                "Government & Military",
                "Energy",
                "Transportation",
                "Utilities",
                "Steel & Primary Metals",
                "General Manufacturing",
                "Engineering & Consulting",
                "Refinery",
                "Railroad Services",
                "Airports & Seaports",
                "Small Businesses"
            ]
        }
    ]
}

const companyDropdown = {
    title: "Company",
    width: "w-48",
    columns: 1,
    sections: [
        {
            heading: null,
            items: ["About Us", "Careers", "Contact Us", "Excellence"]
        }
    ]
}

function NavbarPill({ isScrolled, onOpenMobileMenu }) {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false)
    const searchContainerRef = useRef(null)
    const searchInputRef = useRef(null)

    // Close search when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(e.target) && isSearchExpanded) {
                setIsSearchExpanded(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isSearchExpanded])

    const toggleSearch = (e) => {
        e.stopPropagation()
        setIsSearchExpanded(!isSearchExpanded)
        if (!isSearchExpanded && searchInputRef.current) {
            setTimeout(() => searchInputRef.current.focus(), 100)
        }
    }

    return (
        <div className="fixed top-6 left-0 w-full flex justify-end md:justify-center px-6 md:px-4 z-40 pointer-events-none">
            <nav
                id="navbar-pill"
                className={`glass-pill pointer-events-auto rounded-full p-2 flex items-center gap-2 transition-all duration-500 ${isScrolled ? 'scrolled' : ''}`}
            >
                {/* Internal Logo (shown when scrolled) */}
                <div id="internal-logo" className="internal-element flex items-center gap-2 pr-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-heading-h1 to-brand-icon-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                        MA
                    </div>
                    <span className="text-lg font-bold text-brand-heading-h1">Ms Asia</span>
                </div>

                {/* Menu Items */}
                <ul className="hidden md:flex items-center gap-1">
                    {/* Home (no dropdown) */}
                    <li>
                        <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                            Home
                        </a>
                    </li>

                    {/* What We Do Dropdown */}
                    <DropdownMenu data={servicesDropdown} />

                    {/* Industries Dropdown */}
                    <DropdownMenu data={industriesDropdown} />

                    {/* Company Dropdown */}
                    <DropdownMenu data={companyDropdown} />

                    {/* Blog (no dropdown) */}
                    <li>
                        <a href="#" className="px-3 py-2 rounded-full text-sm font-medium text-brand-text-muted hover:text-brand-heading-h1 hover:bg-brand-bg-highlight transition-colors">
                            Blog
                        </a>
                    </li>
                </ul>

                {/* Divider */}
                <div className="h-6 w-px bg-brand-border-divider hidden md:block mx-1"></div>

                {/* Expandable Search */}
                <div
                    ref={searchContainerRef}
                    className={`search-container hidden md:flex items-center rounded-full px-1 py-1 ${isSearchExpanded ? 'expanded' : ''}`}
                >
                    <button
                        onClick={toggleSearch}
                        className="p-2 text-brand-icon-primary hover:bg-brand-bg-highlight rounded-full transition-colors focus:outline-none"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        className="search-input bg-transparent border-none outline-none text-sm text-brand-text-main placeholder-brand-text-muted"
                    />
                </div>

                {/* Internal Contact (shown when scrolled) */}
                <div id="internal-contact" className="internal-element pl-2">
                    <a
                        href="#"
                        className="bg-brand-btn-primary hover:bg-brand-btn-primary-hover text-white rounded-full px-5 py-2 whitespace-nowrap text-sm font-semibold shadow-md transition-colors flex items-center gap-2"
                    >
                        Contact Us
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={onOpenMobileMenu}
                        className="p-3 text-brand-icon-primary bg-brand-bg-highlight rounded-full hover:bg-brand-bg-alt transition-colors"
                        aria-label="Open Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default NavbarPill

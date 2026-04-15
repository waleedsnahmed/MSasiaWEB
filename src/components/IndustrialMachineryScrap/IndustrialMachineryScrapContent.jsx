"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import './IndustrialMachineryScrapContent.css';

// Direct import for Hero as it's the first thing seen
import IndustrialMachineryScrapHero from './IndustrialMachineryScrapHero';

// Lazy load the rest of the page components
const IndustrialMachineryScrapWhyChooseUs = lazy(() => import('./IndustrialMachineryScrapWhyChooseUs'));
const IndustrialMachineryScrapProcess = lazy(() => import('./IndustrialMachineryScrapProcess'));
const IndustrialMachineryScrapCategories = lazy(() => import('./IndustrialMachineryScrapCategories'));
const IndustrialMachineryScrapIndustries = lazy(() => import('./IndustrialMachineryScrapIndustries'));
const IndustrialMachineryScrapBenefits = lazy(() => import('./IndustrialMachineryScrapBenefits'));
const IndustrialMachineryScrapContactCTA = lazy(() => import('./IndustrialMachineryScrapContactCTA'));

const IndustrialMachineryScrapContent = () => {
    // Scroll reveal effect
    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.scroll-reveal');
            reveals.forEach((element) => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check + delayed re-check for lazy components
        setTimeout(handleScroll, 100);
        setTimeout(handleScroll, 500);
        setTimeout(handleScroll, 1000);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="max-w-screen-2xl w-full px-3 lg:px-3 mx-0 lg:mx-auto flex flex-col gap-4 md:gap-[48px]">
            {/* Empty div to trigger the flex gap of 48px at the top without using padding/margin */}
            <div className="hidden md:block"></div>

            <div className="flex flex-col gap-4 md:gap-[48px]">
                <IndustrialMachineryScrapHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <IndustrialMachineryScrapWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <IndustrialMachineryScrapProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Categories...</p></div>}>
                <IndustrialMachineryScrapCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <IndustrialMachineryScrapIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <IndustrialMachineryScrapBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <IndustrialMachineryScrapContactCTA />
            </Suspense>
        </div>
    );
};

export default IndustrialMachineryScrapContent;

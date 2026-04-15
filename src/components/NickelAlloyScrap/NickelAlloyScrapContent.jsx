// "use client"; // Assuming Next.js App Router syntax as reference, if this is vanilla React we don't need it. But adding it based on the user's snippet.
"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import './NickelAlloyScrapContent.css';

// Direct import for Hero as it's the first thing seen
import NickelAlloyScrapHero from './NickelAlloyScrapHero';

// Lazy load the rest of the page components
const NickelAlloyScrapWhyChooseUs = lazy(() => import('./NickelAlloyScrapWhyChooseUs'));
const NickelAlloyScrapProcess = lazy(() => import('./NickelAlloyScrapProcess'));
const NickelAlloyScrapCategories = lazy(() => import('./NickelAlloyScrapCategories'));
const NickelAlloyScrapIndustries = lazy(() => import('./NickelAlloyScrapIndustries'));
const NickelAlloyScrapBenefits = lazy(() => import('./NickelAlloyScrapBenefits'));
const NickelAlloyScrapContactCTA = lazy(() => import('./NickelAlloyScrapContactCTA'));

const NickelAlloyScrapContent = () => {
    // Nickel and Alloy Scrap specific state/effects
    useEffect(() => {
        const handleScroll = () => {
            // Re-query on every scroll so lazy-loaded components are picked up
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
                <NickelAlloyScrapHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <NickelAlloyScrapWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <NickelAlloyScrapProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Categories...</p></div>}>
                <NickelAlloyScrapCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <NickelAlloyScrapIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <NickelAlloyScrapBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <NickelAlloyScrapContactCTA />
            </Suspense>
        </div>
    );
};

export default NickelAlloyScrapContent;


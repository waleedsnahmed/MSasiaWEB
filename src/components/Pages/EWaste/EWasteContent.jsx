// "use client"; // Assuming Next.js App Router syntax as reference, if this is vanilla React we don't need it. But adding it based on the user's snippet.
"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import './EWasteContent.css';

// Direct import for Hero as it's the first thing seen
import EWasteHero from './EWasteHero';

// Lazy load the rest of the page components
const EWasteWhyChooseUs = lazy(() => import('./EWasteWhyChooseUs'));
const EWasteProcess = lazy(() => import('./EWasteProcess'));
const EWasteCategories = lazy(() => import('./EWasteCategories'));
const EWasteIndustries = lazy(() => import('./EWasteIndustries'));
const EWasteBenefits = lazy(() => import('./EWasteBenefits'));
const EWasteContactCTA = lazy(() => import('./EWasteContactCTA'));

const EWasteContent = () => {
    // E-Waste specific state/effects
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
        <div className="max-w-screen-2xl w-full px-3 lg:px-3 mx-auto flex flex-col gap-[48px]">
            {/* Empty div to trigger the flex gap of 48px at the top without using padding/margin */}
            <div></div>

            <div className="flex flex-col gap-[48px]">
                <EWasteHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48">Loading...</div>}>
                    <EWasteWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48">Loading Process...</div>}>
                <EWasteProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48">Loading Categories...</div>}>
                <EWasteCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48">Loading Industries...</div>}>
                <EWasteIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48">Loading Benefits...</div>}>
                <EWasteBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48">Loading Contact...</div>}>
                <EWasteContactCTA />
            </Suspense>
        </div>
    );
};

export default EWasteContent;

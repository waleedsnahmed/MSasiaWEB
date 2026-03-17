// "use client"; // Assuming Next.js App Router syntax as reference, if this is vanilla React we don't need it. But adding it based on the user's snippet.
"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import './EWasteContent.css';

// Direct import for Hero as it's the first thing seen
import EWasteHero from './EWasteHero';
import EWasteRoadmapSystem from './EWasteRoadmapSystem';

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
        <div className="relative max-w-screen-2xl w-full px-3 lg:px-3 mx-auto flex flex-col gap-[48px]">
            <EWasteRoadmapSystem />
            
            {/* Empty div to trigger the flex gap of 48px at the top without using padding/margin */}
            <div></div>

            <div className="flex flex-col gap-[48px]">
                <div id="ew-hero"><EWasteHero /></div>
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <div id="ew-why"><EWasteWhyChooseUs /></div>
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <div id="ew-process"><EWasteProcess /></div>
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Categories...</p></div>}>
                <div id="ew-categories"><EWasteCategories /></div>
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <div id="ew-industries"><EWasteIndustries /></div>
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <div id="ew-benefits"><EWasteBenefits /></div>
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <div id="ew-cta"><EWasteContactCTA /></div>
            </Suspense>
        </div>
    );
};

export default EWasteContent;

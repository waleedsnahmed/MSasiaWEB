"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import './GeneralManufacturingContent.css';

// Direct import for Hero as it's the first thing seen
import GeneralManufacturingHero from './GeneralManufacturingHero';

// Lazy load the rest of the page components
const GeneralManufacturingWhyChooseUs = lazy(() => import('./GeneralManufacturingWhyChooseUs'));
const GeneralManufacturingProcess = lazy(() => import('./GeneralManufacturingProcess'));
const GeneralManufacturingCategories = lazy(() => import('./GeneralManufacturingCategories'));
const GeneralManufacturingIndustries = lazy(() => import('./GeneralManufacturingIndustries'));
const GeneralManufacturingBenefits = lazy(() => import('./GeneralManufacturingBenefits'));
const GeneralManufacturingContactCTA = lazy(() => import('./GeneralManufacturingContactCTA'));

const GeneralManufacturingContent = () => {
    // Specific state/effects
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
                <GeneralManufacturingHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <GeneralManufacturingWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <GeneralManufacturingProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Categories...</p></div>}>
                <GeneralManufacturingCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Sectors...</p></div>}>
                <GeneralManufacturingIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <GeneralManufacturingBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <GeneralManufacturingContactCTA />
            </Suspense>
        </div>
    );
};

export default GeneralManufacturingContent;

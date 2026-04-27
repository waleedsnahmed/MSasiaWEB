"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import './PharmaceuticalBiotechnologyContent.css';

// Direct import for Hero as it's the first thing seen
import PharmaceuticalBiotechnologyHero from './PharmaceuticalBiotechnologyHero';

// Lazy load the rest of the page components
const PharmaceuticalBiotechnologyWhyChooseUs = lazy(() => import('./PharmaceuticalBiotechnologyWhyChooseUs'));
const PharmaceuticalBiotechnologyProcess = lazy(() => import('./PharmaceuticalBiotechnologyProcess'));
const PharmaceuticalBiotechnologyCategories = lazy(() => import('./PharmaceuticalBiotechnologyCategories'));
const PharmaceuticalBiotechnologyIndustries = lazy(() => import('./PharmaceuticalBiotechnologyIndustries'));
const PharmaceuticalBiotechnologyBenefits = lazy(() => import('./PharmaceuticalBiotechnologyBenefits'));
const PharmaceuticalBiotechnologyContactCTA = lazy(() => import('./PharmaceuticalBiotechnologyContactCTA'));

const PharmaceuticalBiotechnologyContent = () => {
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
                <PharmaceuticalBiotechnologyHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <PharmaceuticalBiotechnologyWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <PharmaceuticalBiotechnologyProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Categories...</p></div>}>
                <PharmaceuticalBiotechnologyCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <PharmaceuticalBiotechnologyIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <PharmaceuticalBiotechnologyBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <PharmaceuticalBiotechnologyContactCTA />
            </Suspense>
        </div>
    );
};

export default PharmaceuticalBiotechnologyContent;

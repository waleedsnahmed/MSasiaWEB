"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import './PharmaceuticalWasteDisposalContent.css';

// Direct import for Hero as it's the first thing seen
import PharmaceuticalWasteDisposalHero from './PharmaceuticalWasteDisposalHero';

// Lazy load the rest of the page components
const PharmaceuticalWasteDisposalWhyChooseUs = lazy(() => import('./PharmaceuticalWasteDisposalWhyChooseUs'));
const PharmaceuticalWasteDisposalProcess = lazy(() => import('./PharmaceuticalWasteDisposalProcess'));
const PharmaceuticalWasteDisposalCategories = lazy(() => import('./PharmaceuticalWasteDisposalCategories'));
const PharmaceuticalWasteDisposalIndustries = lazy(() => import('./PharmaceuticalWasteDisposalIndustries'));
const PharmaceuticalWasteDisposalBenefits = lazy(() => import('./PharmaceuticalWasteDisposalBenefits'));
const PharmaceuticalWasteDisposalContactCTA = lazy(() => import('./PharmaceuticalWasteDisposalContactCTA'));

const PharmaceuticalWasteDisposalContent = () => {
    // Scroll reveal animation effect
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

        window.addEventListener('scroll', handleScroll, { passive: true });
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
                <PharmaceuticalWasteDisposalHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <PharmaceuticalWasteDisposalWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <PharmaceuticalWasteDisposalProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Categories...</p></div>}>
                <PharmaceuticalWasteDisposalCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <PharmaceuticalWasteDisposalIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <PharmaceuticalWasteDisposalBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <PharmaceuticalWasteDisposalContactCTA />
            </Suspense>
        </div>
    );
};

export default PharmaceuticalWasteDisposalContent;

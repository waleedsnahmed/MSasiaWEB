"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import '../../components/EWaste/EWasteContent.css';

// Direct import for Hero as it's the first thing seen
import ConstructionDemolitionHero from './ConstructionDemolitionHero';

// Lazy load the rest of the page components
const ConstructionDemolitionWhyChooseUs = lazy(() => import('./ConstructionDemolitionWhyChooseUs'));
const ConstructionDemolitionProcess = lazy(() => import('./ConstructionDemolitionProcess'));
const ConstructionDemolitionCategories = lazy(() => import('./ConstructionDemolitionCategories'));
const ConstructionDemolitionIndustries = lazy(() => import('./ConstructionDemolitionIndustries'));
const ConstructionDemolitionBenefits = lazy(() => import('./ConstructionDemolitionBenefits'));
const ConstructionDemolitionContactCTA = lazy(() => import('./ConstructionDemolitionContactCTA'));

const ConstructionDemolitionContent = () => {
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
                <ConstructionDemolitionHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <ConstructionDemolitionWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <ConstructionDemolitionProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Capabilities...</p></div>}>
                <ConstructionDemolitionCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <ConstructionDemolitionIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <ConstructionDemolitionBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <ConstructionDemolitionContactCTA />
            </Suspense>
        </div>
    );
};

export default ConstructionDemolitionContent;

"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import '../../components/EWaste/EWasteContent.css';

// Direct import for Hero as it's the first thing seen
import FerrousMetalScrapHero from './FerrousMetalScrapHero';

// Lazy load the rest of the page components
const FerrousMetalScrapWhyChooseUs = lazy(() => import('./FerrousMetalScrapWhyChooseUs'));
const FerrousMetalScrapProcess = lazy(() => import('./FerrousMetalScrapProcess'));
const FerrousMetalScrapCategories = lazy(() => import('./FerrousMetalScrapCategories'));
const FerrousMetalScrapIndustries = lazy(() => import('./FerrousMetalScrapIndustries'));
const FerrousMetalScrapBenefits = lazy(() => import('./FerrousMetalScrapBenefits'));
const FerrousMetalScrapContactCTA = lazy(() => import('./FerrousMetalScrapContactCTA'));

const FerrousMetalScrapContent = () => {
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
                <FerrousMetalScrapHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Impact Profile...</p></div>}>
                    <FerrousMetalScrapWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Logistics Infrastructure...</p></div>}>
                <FerrousMetalScrapProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading ISRI Grades...</p></div>}>
                <FerrousMetalScrapCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Service Sectors...</p></div>}>
                <FerrousMetalScrapIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Strategic Advantages...</p></div>}>
                <FerrousMetalScrapBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Dispatch System...</p></div>}>
                <FerrousMetalScrapContactCTA />
            </Suspense>
        </div>
    );
};

export default FerrousMetalScrapContent;

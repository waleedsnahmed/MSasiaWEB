"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import '../../components/EWaste/EWasteContent.css';

// Direct import for Hero as it's the first thing seen
import AluminiumScrapHero from './AluminiumScrapHero';

// Lazy load the rest of the page components
const AluminiumScrapWhyChooseUs = lazy(() => import('./AluminiumScrapWhyChooseUs'));
const AluminiumScrapProcess = lazy(() => import('./AluminiumScrapProcess'));
const AluminiumScrapCategories = lazy(() => import('./AluminiumScrapCategories'));
const AluminiumScrapIndustries = lazy(() => import('./AluminiumScrapIndustries'));
const AluminiumScrapBenefits = lazy(() => import('./AluminiumScrapBenefits'));
const AluminiumScrapContactCTA = lazy(() => import('./AluminiumScrapContactCTA'));

const AluminiumScrapContent = () => {
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
                <AluminiumScrapHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <AluminiumScrapWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Operation...</p></div>}>
                <AluminiumScrapProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Modules...</p></div>}>
                <AluminiumScrapCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <AluminiumScrapIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <AluminiumScrapBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <AluminiumScrapContactCTA />
            </Suspense>
        </div>
    );
};

export default AluminiumScrapContent;

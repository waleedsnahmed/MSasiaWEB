"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import '../../components/EWaste/EWasteContent.css';

// Direct import for Hero as it's the first thing seen
import BrassBronzeScrapHero from './BrassBronzeScrapHero';

// Lazy load the rest of the page components
const BrassBronzeScrapWhyChooseUs = lazy(() => import('./BrassBronzeScrapWhyChooseUs'));
const BrassBronzeScrapProcess = lazy(() => import('./BrassBronzeScrapProcess'));
const BrassBronzeScrapCategories = lazy(() => import('./BrassBronzeScrapCategories'));
const BrassBronzeScrapIndustries = lazy(() => import('./BrassBronzeScrapIndustries'));
const BrassBronzeScrapBenefits = lazy(() => import('./BrassBronzeScrapBenefits'));
const BrassBronzeScrapContactCTA = lazy(() => import('./BrassBronzeScrapContactCTA'));

const BrassBronzeScrapContent = () => {
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
                <BrassBronzeScrapHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Lab Data...</p></div>}>
                    <BrassBronzeScrapWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Methodology...</p></div>}>
                <BrassBronzeScrapProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Alloy Matrix...</p></div>}>
                <BrassBronzeScrapCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industry Map...</p></div>}>
                <BrassBronzeScrapIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Technical Advantages...</p></div>}>
                <BrassBronzeScrapBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Connecting to Specialists...</p></div>}>
                <BrassBronzeScrapContactCTA />
            </Suspense>
        </div>
    );
};

export default BrassBronzeScrapContent;

"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import '../../components/EWaste/EWasteContent.css';

// Direct import for Hero as it's the first thing seen
import ChemicalPackingHero from './ChemicalPackingHero';

// Lazy load the rest of the page components
const ChemicalPackingWhyChooseUs = lazy(() => import('./ChemicalPackingWhyChooseUs'));
const ChemicalPackingProcess = lazy(() => import('./ChemicalPackingProcess'));
const ChemicalPackingCategories = lazy(() => import('./ChemicalPackingCategories'));
const ChemicalPackingIndustries = lazy(() => import('./ChemicalPackingIndustries'));
const ChemicalPackingBenefits = lazy(() => import('./ChemicalPackingBenefits'));
const ChemicalPackingContactCTA = lazy(() => import('./ChemicalPackingContactCTA'));

const ChemicalPackingContent = () => {
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
                <ChemicalPackingHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <ChemicalPackingWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <ChemicalPackingProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Categories...</p></div>}>
                <ChemicalPackingCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <ChemicalPackingIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <ChemicalPackingBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <ChemicalPackingContactCTA />
            </Suspense>
        </div>
    );
};

export default ChemicalPackingContent;

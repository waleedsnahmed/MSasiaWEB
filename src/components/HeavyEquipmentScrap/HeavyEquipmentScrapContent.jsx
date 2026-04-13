"use client";
import React, { Suspense, lazy, useEffect } from 'react';
import '../../components/EWaste/EWasteContent.css';

// Direct import for Hero as it's the first thing seen
import HeavyEquipmentScrapHero from './HeavyEquipmentScrapHero';

// Lazy load the rest of the page components
const HeavyEquipmentScrapWhyChooseUs = lazy(() => import('./HeavyEquipmentScrapWhyChooseUs'));
const HeavyEquipmentScrapProcess = lazy(() => import('./HeavyEquipmentScrapProcess'));
const HeavyEquipmentScrapCategories = lazy(() => import('./HeavyEquipmentScrapCategories'));
const HeavyEquipmentScrapIndustries = lazy(() => import('./HeavyEquipmentScrapIndustries'));
const HeavyEquipmentScrapBenefits = lazy(() => import('./HeavyEquipmentScrapBenefits'));
const HeavyEquipmentScrapContactCTA = lazy(() => import('./HeavyEquipmentScrapContactCTA'));

const HeavyEquipmentScrapContent = () => {
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
                <HeavyEquipmentScrapHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Risk Analysis...</p></div>}>
                    <HeavyEquipmentScrapWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Engineering Workflow...</p></div>}>
                <HeavyEquipmentScrapProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Asset Classes...</p></div>}>
                <HeavyEquipmentScrapCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Deployment Sectors...</p></div>}>
                <HeavyEquipmentScrapIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Value Matrix...</p></div>}>
                <HeavyEquipmentScrapBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Engineering Contact...</p></div>}>
                <HeavyEquipmentScrapContactCTA />
            </Suspense>
        </div>
    );
};

export default HeavyEquipmentScrapContent;

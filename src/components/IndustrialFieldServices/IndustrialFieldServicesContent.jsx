import React, { Suspense, lazy, useEffect } from 'react';
import './IndustrialFieldServicesContent.css';

// Direct import for Hero as it's the first thing seen
import IndustrialFieldServicesHero from './IndustrialFieldServicesHero';

// Lazy load the rest of the page components
const IndustrialFieldServicesWhyChooseUs = lazy(() => import('./IndustrialFieldServicesWhyChooseUs'));
const IndustrialFieldServicesProcess = lazy(() => import('./IndustrialFieldServicesProcess'));
const IndustrialFieldServicesCategories = lazy(() => import('./IndustrialFieldServicesCategories'));
const IndustrialFieldServicesIndustries = lazy(() => import('./IndustrialFieldServicesIndustries'));
const IndustrialFieldServicesBenefits = lazy(() => import('./IndustrialFieldServicesBenefits'));
const IndustrialFieldServicesContactCTA = lazy(() => import('./IndustrialFieldServicesContactCTA'));

const IndustrialFieldServicesContent = () => {
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
                <IndustrialFieldServicesHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <IndustrialFieldServicesWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <IndustrialFieldServicesProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Categories...</p></div>}>
                <IndustrialFieldServicesCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <IndustrialFieldServicesIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <IndustrialFieldServicesBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <IndustrialFieldServicesContactCTA />
            </Suspense>
        </div>
    );
};

export default IndustrialFieldServicesContent;

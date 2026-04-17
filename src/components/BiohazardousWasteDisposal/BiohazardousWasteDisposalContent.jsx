import React, { Suspense, lazy, useEffect } from 'react';
import './BiohazardousWasteDisposalContent.css';

// Direct import for Hero as it's the first thing seen
import BiohazardousWasteDisposalHero from './BiohazardousWasteDisposalHero';

// Lazy load the rest of the page components
const BiohazardousWasteDisposalWhyChooseUs = lazy(() => import('./BiohazardousWasteDisposalWhyChooseUs'));
const BiohazardousWasteDisposalProcess = lazy(() => import('./BiohazardousWasteDisposalProcess'));
const BiohazardousWasteDisposalCategories = lazy(() => import('./BiohazardousWasteDisposalCategories'));
const BiohazardousWasteDisposalIndustries = lazy(() => import('./BiohazardousWasteDisposalIndustries'));
const BiohazardousWasteDisposalBenefits = lazy(() => import('./BiohazardousWasteDisposalBenefits'));
const BiohazardousWasteDisposalContactCTA = lazy(() => import('./BiohazardousWasteDisposalContactCTA'));

const BiohazardousWasteDisposalContent = () => {
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
                <BiohazardousWasteDisposalHero />
                <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading...</p></div>}>
                    <BiohazardousWasteDisposalWhyChooseUs />
                </Suspense>
            </div>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Process...</p></div>}>
                <BiohazardousWasteDisposalProcess />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Categories...</p></div>}>
                <BiohazardousWasteDisposalCategories />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Industries...</p></div>}>
                <BiohazardousWasteDisposalIndustries />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Benefits...</p></div>}>
                <BiohazardousWasteDisposalBenefits />
            </Suspense>

            <Suspense fallback={<div className="flex justify-center items-center h-48"><p>Loading Contact...</p></div>}>
                <BiohazardousWasteDisposalContactCTA />
            </Suspense>
        </div>
    );
};

export default BiohazardousWasteDisposalContent;

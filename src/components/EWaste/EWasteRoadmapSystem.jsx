import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

const RoadmapLine = ({ startId, endId, containerRef, color = "#47622A" }) => {
    const [path, setPath] = useState("");
    const pathLength = useMotionValue(0);
    const smoothPathLength = useSpring(pathLength, { stiffness: 50, damping: 20 });
    const opacity = useTransform(smoothPathLength, [0, 0.1], [0, 0.6]);

    useEffect(() => {
        let animationFrame;
        
        const updateMetrics = () => {
            const startElem = document.getElementById(startId);
            const endElem = document.getElementById(endId);
            const container = containerRef.current;

            if (!startElem || !endElem || !container) return;

            const containerRect = container.getBoundingClientRect();
            const startRect = startElem.getBoundingClientRect();
            const endRect = endElem.getBoundingClientRect();

            // Calculate SVG coordinates
            const x1 = startRect.left - containerRect.left + startRect.width / 2;
            const y1 = startRect.top - containerRect.top + startRect.height / 2;
            const x2 = endRect.left - containerRect.left + endRect.width / 2;
            const y2 = endRect.top - containerRect.top + 80;

            const centerX = containerRect.width / 2;
            const yMid1 = y1 + (y2 - y1) * 0.3;
            const yMid2 = y1 + (y2 - y1) * 0.7;
            
            // S-curve toward center
            const cp1x = x1 + (centerX - x1) * 0.5;
            const cp2x = centerX;

            const newPath = `M ${x1} ${y1} C ${cp1x} ${yMid1}, ${cp2x} ${yMid2}, ${x2} ${y2}`;
            if (newPath !== path) setPath(newPath);

            // Handle scroll progress manually for stability
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const startPos = startRect.top + scrollY - windowHeight;
            const endPos = endRect.top + scrollY - windowHeight / 2;
            
            let progress = (scrollY - startPos) / (endPos - startPos);
            progress = Math.max(0, Math.min(1, progress));
            pathLength.set(progress);
        };

        const onScroll = () => {
            animationFrame = requestAnimationFrame(updateMetrics);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateMetrics);
        
        // Initial delays to wait for lazy components
        const timer1 = setTimeout(updateMetrics, 500);
        const timer2 = setTimeout(updateMetrics, 1500);
        const timer3 = setTimeout(updateMetrics, 3000);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateMetrics);
            cancelAnimationFrame(animationFrame);
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [startId, endId, containerRef, path]);

    if (!path) return null;

    return (
        <motion.path
            d={path}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            style={{ 
                pathLength: smoothPathLength,
                opacity: opacity,
                filter: 'url(#glow)'
            }}
        />
    );
};

const EWasteRoadmap = ({ containerRef }) => {
    const sections = useMemo(() => [
        'roadmap-why',
        'roadmap-process',
        'roadmap-categories',
        'roadmap-industries',
        'roadmap-benefits'
    ], []);

    return (
        <div className="absolute inset-0 pointer-events-none z-0" style={{ height: '100%', width: '100%' }}>
            <svg className="w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="roadmap-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#799851" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#47622A" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#3d5220" stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>
                {sections.map((sectionId) => (
                    <RoadmapLine 
                        key={sectionId} 
                        startId={sectionId} 
                        endId="roadmap-cta" 
                        containerRef={containerRef}
                        color="url(#roadmap-gradient)"
                    />
                ))}
            </svg>
        </div>
    );
};

export default EWasteRoadmap;

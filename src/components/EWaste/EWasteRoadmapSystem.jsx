import React, { useEffect, useState, useRef } from 'react';

// Generates an SVG path with perfect rounded corners between an array of waypoints [x, y]
function getRoundedPath(points, r = 40) {
    if (!points || points.length < 2) return '';
    let path = `M ${points[0][0]},${points[0][1]}`;
    
    for (let i = 1; i < points.length - 1; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const next = points[i + 1];
        
        const dx1 = prev[0] - curr[0], dy1 = prev[1] - curr[1];
        const len1 = Math.sqrt(dx1*dx1 + dy1*dy1);
        const rad1 = Math.min(r, len1 / 2); // Prevent radii from crossing midpoint
        
        const dx2 = next[0] - curr[0], dy2 = next[1] - curr[1];
        const len2 = Math.sqrt(dx2*dx2 + dy2*dy2);
        const rad2 = Math.min(r, len2 / 2);
        
        const p1x = curr[0] + (dx1 / len1) * rad1;
        const p1y = curr[1] + (dy1 / len1) * rad1;
        const p2x = curr[0] + (dx2 / len2) * rad2;
        const p2y = curr[1] + (dy2 / len2) * rad2;
        
        path += ` L ${p1x},${p1y} Q ${curr[0]},${curr[1]} ${p2x},${p2y}`;
    }
    const last = points[points.length - 1];
    path += ` L ${last[0]},${last[1]}`;
    return path;
}

const EWasteRoadmapSystem = () => {
    const containerRef = useRef(null);
    const [paths, setPaths] = useState([]);

    // Coordinate Measurement Effect
    useEffect(() => {
        const updatePaths = () => {
            if (!containerRef.current || !containerRef.current.parentElement) return;
            // Get bounding rect of the relative parent (EWasteContent wrapper) to ensure we map true height
            const parentRect = containerRef.current.parentElement.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            const w = parentRect.width;

            const getRelBounds = (id) => {
                const el = document.getElementById(id);
                if (!el) return null;
                const rect = el.getBoundingClientRect();
                return {
                    top: rect.top - containerRect.top,
                    bottom: rect.bottom - containerRect.top,
                    left: rect.left - containerRect.left,
                    right: rect.right - containerRect.left,
                    width: rect.width,
                    height: rect.height,
                    cx: rect.left - containerRect.left + (rect.width / 2),
                    cy: rect.top - containerRect.top + (rect.height / 2),
                };
            };

            const hero = getRelBounds('ew-hero');
            const why = getRelBounds('ew-why');
            const process = getRelBounds('ew-process');
            const categories = getRelBounds('ew-categories');
            const industries = getRelBounds('ew-industries');
            const benefits = getRelBounds('ew-benefits');
            const cta = getRelBounds('ew-cta');
            
            if (!hero || !cta) return; // Layout not fully built yet

            const p = [];

            // Path 1: CYAN - Sweeping from Left (Hero -> Why Choose Us)
            if (why) {
                p.push({
                    color: '#0ea5e9', // Cyber Cyan
                    path: getRoundedPath([
                        [-50, hero.bottom - 40],
                        [w * 0.15, hero.bottom - 40],
                        [w * 0.15, why.bottom + 60],
                        [w * 0.5, why.bottom + 60], // Drops down the center
                        [w * 0.5, process ? process.top - 20 : why.bottom + 120]
                    ], 60)
                });
            }

            // Path 2: GREEN - Sweeping from Right (Process -> Categories)
            if (process && categories) {
                const s0 = getRelBounds('ew-process-step-0');
                const s1 = getRelBounds('ew-process-step-1');
                const s2 = getRelBounds('ew-process-step-2');
                const s3 = getRelBounds('ew-process-step-3');
                const s4 = getRelBounds('ew-process-step-4');
                const s5 = getRelBounds('ew-process-step-5');

                const processPts = [];
                // Enter from top right
                processPts.push([w * 0.85, process.top - 20]);
                
                if (s0 && s1 && s2 && s3 && s4 && s5) {
                    // Right path down alongside Step 0
                    processPts.push([w * 0.87, s0.top + 20]);
                    processPts.push([w * 0.87, s0.bottom + 20]);
                    
                    // Cross left horizontally under Step 0 / over Step 1
                    processPts.push([s1.left - 30, s0.bottom + 20]);
                    
                    // Left path down alongside Step 1
                    processPts.push([s1.left - 30, s1.bottom + 20]);
                    
                    // Cross right horizontally under Step 1 / over Step 2
                    processPts.push([s2.right + 30, s1.bottom + 20]);
                    
                    // Right path down alongside Step 2
                    processPts.push([s2.right + 30, s2.bottom + 20]);
                    
                    // Cross left horizontally under Step 2 / over Step 3
                    processPts.push([s3.left - 30, s2.bottom + 20]);
                    
                    // Left path down alongside Step 3
                    processPts.push([s3.left - 30, s3.bottom + 20]);
                    
                    // Cross right horizontally under Step 3 / over Step 4
                    processPts.push([s4.right + 30, s3.bottom + 20]);
                    
                    // Right path down alongside Step 4
                    processPts.push([s4.right + 30, s4.bottom + 20]);
                     
                    // Cross left horizontally under Step 4 / over Step 5
                    processPts.push([s5.left - 30, s4.bottom + 20]);
                    
                    // Left path down alongside Step 5
                    processPts.push([s5.left - 30, s5.bottom + 40]);
                } else {
                    // Fallback if cards aren't fully measured yet to prevent breaking line
                    processPts.push([w * 0.85, process.bottom - 60]);
                    processPts.push([w * 0.1, process.bottom - 30]);
                }
                    
                const catTable = getRelBounds('ew-categories-table');

                if (catTable) {
                    // Line is currently on the left side (w * 0.1) from Process output
                    
                    // Go down to just above the table
                    processPts.push([w * 0.1, catTable.top - 30]);
                    
                    // Cross horizontally right OVER the table
                    processPts.push([catTable.right + 30, catTable.top - 30]);
                    
                    // Down the right flank of the table
                    processPts.push([catTable.right + 30, catTable.bottom + 30]);
                    
                    // Cross horizontally left UNDER the table back to original track
                    processPts.push([w * 0.1, catTable.bottom + 30]);
                } else {
                    processPts.push([w * 0.1, categories.bottom + 40]);
                }

                // Final trailing line segment heading out towards Industries
                processPts.push([w * 0.1, categories.bottom + 80]);

                p.push({
                    color: '#10b981', // Emerald Green
                    path: getRoundedPath(processPts, 60)
                });
            }

            // Path 3: PURPLE - Left Margin (Industries -> Benefits)
            if (industries && benefits) {
                p.push({
                    color: '#c026d3', // Pink/Purple
                    path: getRoundedPath([
                        [-50, industries.top + 60],
                        [w * 0.08, industries.top + 60],
                        [w * 0.08, benefits.bottom - 30],
                        [w * 0.9, benefits.bottom - 30], // Crosses full width
                        [w * 0.9, cta.top - 120]
                    ], 60)
                });
            }

            // Path 4: CIRCUIT MULTI-LINES - Wrapping the Final CTA
            if (cta) {
                const startY = cta.top - 80;

                const btn = getRelBounds('ew-cta-button');
                
                // Exact button edges directly from DOM Inspector (or fallbacks)
                const btnLeft = btn ? btn.left - 2 : (w / 2) - 102; 
                const btnRight = btn ? btn.right + 2 : (w / 2) + 102;
                const btnCY = btn ? btn.cy : cta.top + (cta.height / 2) + 50; 

                // Outer Right Blue -> Drops straight down the right margin, hooks into right edge
                p.push({
                    color: '#3b82f6', 
                    path: getRoundedPath([
                        [w * 0.92, startY - 140],
                        [w * 0.92, btnCY - 6], // Straight drop down right margin
                        [btnRight, btnCY - 6]  // Hook squarely into the button
                    ], 24)
                });

                // Inner Right Yellow -> Drops straight down right margin, hooks into right edge
                p.push({
                    color: '#facc15',
                    path: getRoundedPath([
                        [w * 0.88, startY - 60],
                        [w * 0.88, btnCY + 6], // Straight drop down right margin
                        [btnRight, btnCY + 6]  // Hook squarely into the button
                    ], 24)
                });

                // Left Green -> Drops straight down left margin, hooks into left edge
                p.push({
                    color: '#22c55e',
                    path: getRoundedPath([
                        [w * 0.12, startY - 40],
                        [w * 0.12, btnCY],  // Straight drop down left margin
                        [btnLeft, btnCY]    // Hook squarely into the button
                    ], 24)
                });
            }

            setPaths(p);
        };

        // Use ResizeObserver to detect layout shifts (like lazy-loaded content popping in)
        const resizeObserver = new ResizeObserver(() => {
            requestAnimationFrame(updatePaths);
        });

        if (containerRef.current && containerRef.current.parentElement) {
            // Actively observe the specific parent EWasteContent container for maximum accuracy during lazy loads
            resizeObserver.observe(containerRef.current.parentElement);
        }

        const onResize = () => requestAnimationFrame(updatePaths);
        window.addEventListener('resize', onResize);
        
        const onReactFinish = () => requestAnimationFrame(updatePaths);
        window.addEventListener('roadmap-recalc', onReactFinish);
        
        // Initial setups to capture potential late paints
        const t1 = setTimeout(updatePaths, 150);
        const t2 = setTimeout(updatePaths, 600);
        const t3 = setTimeout(updatePaths, 2000);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', onResize);
            window.removeEventListener('roadmap-recalc', onReactFinish);
            clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
        };
    }, []);

    // Scroll Reveal Effect
    useEffect(() => {
        const handleScroll = () => {
            if (!paths.length) return;
            
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // For every animated path, update its dash offset exactly as ScrollVibe does
            const lineNodes = document.querySelectorAll('.animate-roadmap-path');
            lineNodes.forEach((node) => {
                // Determine absolute position of the path relative to viewport
                const rect = node.getBoundingClientRect();
                
                // The path starts drawing when its top enters the bottom of the viewport
                // We want it to finish drawing fully by the time the bottom of the path hits the bottom of the viewport.
                // However, if the path sits at the very bottom of the document, the user might hit page-bottom before rect.bottom reaches screen-bottom.
                // So we dynamically clamp the total distance based on max scrollability.

                const documentHeight = document.body.offsetHeight;
                const maxScrollY = documentHeight - windowHeight;
                const distanceTraveled = windowHeight - rect.top;
                
                // Compress the total distance needed so it visibly finishes drawing much earlier,
                // guaranteeing the strokes physically plug into the button before the user hits the footer wall.
                const baseDistanceTotal = rect.height * 0.8; 
                let rawProgress = distanceTraveled / baseDistanceTotal;

                if (scrollY >= maxScrollY - 50) {
                    rawProgress = 1.0; // Force immediate 100% completion at absolute page bottom
                }

                const progress = Math.max(0, Math.min(1, rawProgress));
                
                node.style.strokeDasharray = "1";
                node.style.strokeDashoffset = (1 - progress).toString();
                
                // Match the glow layer identically so glow doesn't bleed past the core line
                const glowNode = node.previousElementSibling;
                if (glowNode) {
                    glowNode.style.strokeDasharray = "1";
                    glowNode.style.strokeDashoffset = (1 - progress).toString();
                }

                // Sync the glowing tracking dot mathematically to the exact leading edge
                const dotNode = node.nextElementSibling;
                if (dotNode && dotNode.classList.contains('animate-roadmap-dot')) {
                    // Magic equation to perfectly pin a 0.5% dash to the exact tip:
                    // offset = 1.01 - progress (pattern repeats every 1.005)
                    dotNode.style.strokeDasharray = "0.005 1";
                    dotNode.style.strokeDashoffset = (1.01 - progress).toString();
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Request an initial frame to paint correctly on load
        requestAnimationFrame(handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [paths]);

    return (
        <div 
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-[5]" 
            ref={containerRef}
        >
            {paths.length > 0 && (
                <svg 
                    className="absolute inset-0 w-full h-full overflow-visible"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                            <feComponentTransfer in="coloredBlur" result="dimmedBlur">
                                <feFuncA type="linear" slope="0.7"/>
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode in="dimmedBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    {paths.map((p, i) => (
                        <g key={`roadmap-line-${i}`}>
                            {/* Ambient Glow Trail Layer */}
                            <path 
                                d={p.path}
                                fill="none"
                                stroke={p.color}
                                strokeWidth="8"
                                className="opacity-40 transition-shadow duration-300"
                                filter="url(#neon-glow)"
                                pathLength="1"
                                style={{ strokeDasharray: "1", strokeDashoffset: "1" }}
                            />
                            {/* Sharp Bright Core Line Layer */}
                            <path 
                                d={p.path}
                                fill="none"
                                stroke={p.color}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                className="animate-roadmap-path opacity-100 transition-[stroke-dashoffset] duration-[300ms] ease-out"
                                pathLength="1"
                                style={{ strokeDasharray: "1", strokeDashoffset: "1" }}
                            />
                            {/* Brilliant White Leading Tracker Dot */}
                            <path 
                                className="animate-roadmap-dot opacity-100 transition-[stroke-dashoffset] duration-[300ms] ease-out"
                                d={p.path}
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                pathLength="1"
                                style={{ strokeDasharray: "0.005 1", strokeDashoffset: "1.01" }}
                                filter="drop-shadow(0 0 10px rgba(255, 255, 255, 1))"
                            />
                        </g>
                    ))}
                </svg>
            )}
        </div>
    );
};

export default EWasteRoadmapSystem;

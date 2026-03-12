import React, { useEffect } from 'react';

const TechnologyInnovation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300 font-sans">
            {/* Tech Hero */}
            <div className="relative py-24 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/scene_electronics.png"
                        alt="Advanced Technology"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="font-bold mb-6 tracking-tight">
                        Future-Ready <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#799851] to-emerald-400">Innovation</span>
                    </h1>
                    <h5 className="text-gray-300 max-w-2xl leading-relaxed">
                        Leveraging advanced robotics, AI-driven sorting, and proprietary chemical processes to maximize resource recovery.
                    </h5>
                </div>
            </div>

            {/* Tech Stack / Grid */}
            <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Feature 1 */}
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="font-bold mb-4">AI-Powered Sorting</h2>
                        <h6 className="text-gray-600 dark:text-gray-300">
                            Our facilities utilize next-generation optical sorting systems powered by artificial intelligence. These systems can identify and separate materials with over 99% accuracy, significantly outpacing manual sorting lines.
                        </h6>
                        <ul className="text-gray-600 dark:text-gray-300 mt-4 space-y-2">
                            <li>• Automated polymer identification</li>
                            <li>• High-speed varying alloy detection</li>
                            <li>• Real-time purity analysis</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-2xl h-80">
                        <img src="/images/scene_corporate.png" className="w-full h-full object-cover" alt="AI Sorting" />
                    </div>

                    {/* Feature 2 (Reverse Layout) */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl h-80 lg:order-last">
                        <img src="/images/scene_pharma.png" className="w-full h-full object-cover" alt="Chemical Processing" />
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="font-bold mb-4">Chemical Hydrometallurgy</h2>
                        <h6 className="text-gray-600 dark:text-gray-300">
                            Beyond mechanical separation, we employ advanced hydrometallurgical processes to recover precious metals from e-waste and catalysts at the molecular level.
                        </h6>
                        <ul className="text-gray-600 dark:text-gray-300 mt-4 space-y-2">
                            <li>• Zero-emission acid leaching systems</li>
                            <li>• Platinum Group Metals (PGM) recovery</li>
                            <li>• Closed-loop water filtration</li>
                        </ul>
                    </div>
                </div>

                {/* Stat Bar */}
                <div className="mt-24 p-10 bg-[#799851] rounded-3xl text-white grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h1 className="font-black mb-2">99.8%</h1>
                        <p className="uppercase tracking-wider font-semibold opacity-80">Recovery Rate</p>
                    </div>
                    <div>
                        <h1 className="font-black mb-2">24/7</h1>
                        <p className="uppercase tracking-wider font-semibold opacity-80">Automated Operations</p>
                    </div>
                    <div>
                        <h1 className="font-black mb-2">Zero</h1>
                        <p className="uppercase tracking-wider font-semibold opacity-80">Liquid Discharge</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyInnovation;

import React, { useEffect } from 'react';

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posts = [
        {
            id: 1,
            title: "The Future of E-Waste Recycling in Asia",
            excerpt: "How new regulations and technologies are reshaping the electronic waste landscape across Southeast Asia.",
            date: "Feb 10, 2026",
            category: "Industry News",
            image: "bg-blue-100 dark:bg-blue-900/20"
        },
        {
            id: 2,
            title: "Sustainable Disposal of Pharmaceutical Waste",
            excerpt: "Best practices for hospitals and clinics to ensure safe and compliant disposal of hazardous medical waste.",
            date: "Jan 28, 2026",
            category: "Compliance",
            image: "bg-green-100 dark:bg-green-900/20"
        },
        {
            id: 3,
            title: "Achieving Zero Landfill: A Case Study",
            excerpt: "How one manufacturing plant reduced their waste footprint by 95% within 12 months using our holistic solutions.",
            date: "Jan 15, 2026",
            category: "Case Studies",
            image: "bg-orange-100 dark:bg-orange-900/20"
        },
        {
            id: 4,
            title: "Understanding ISO 14001 Standards",
            excerpt: "A comprehensive guide to environmental management systems and why certification matters for your business.",
            date: "Dec 05, 2025",
            category: "Certification",
            image: "bg-purple-100 dark:bg-purple-900/20"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 font-sans pb-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="font-bold mb-4">Latest Insights</h1>
                <h5 className="text-gray-600 dark:text-gray-400">News, updates, and expert articles on waste management.</h5>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <div key={post.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col h-full transform hover:-translate-y-1">
                            {/* Gradient Image Placeholder */}
                            <div className={`h-48 w-full ${post.image} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent"></div>
                                <svg className="w-12 h-12 text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <p className="inline-block px-3 py-1 rounded-full bg-[#47622A]/10 text-[#47622A] dark:text-[#799851] font-bold tracking-wider uppercase mb-3 w-fit">{post.category}</p>
                                <h3 className="font-bold mb-3 hover:text-[#47622A] dark:hover:text-[#799851] cursor-pointer transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                                    <p className="text-gray-500">{post.date}</p>
                                    <p className="font-medium text-[#47622A] dark:text-[#799851] cursor-pointer hover:underline">
                                        Read More →
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;

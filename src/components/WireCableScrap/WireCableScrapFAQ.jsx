import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Do you purchase wire scrap?',
        answer: 'Yes. Pricing depends on copper or aluminum percentage. We provide real-time price guidance based on LME and local market conditions.',
    },
    {
        question: 'Can you handle onsite cutting or stripping?',
        answer: 'Yes, for large volumes we provide on-site solutions to manage heavy cables efficiently before transporting them.',
    },
    {
        question: 'Do you issue certificates for recycling?',
        answer: 'Yes, full documentation and certificates are provided. Our process ensures compliance with environmental regulations.',
    },
];

const WireCableScrapFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="ewaste-faq bg-white dark:bg-black !py-0 w-full flex justify-center">
            <div className="ewaste-faq__container max-w-screen-2xl mx-0 md:mx-auto px-0 flex flex-col gap-4 md:gap-[24px] w-full">
                <div className="ewaste-faq__header text-center flex flex-col items-center gap-2 md:gap-4 scroll-reveal">
                    <h6 className="ewaste-faq__label text-[#47622A] dark:text-[#799851] uppercase font-bold tracking-wider">FAQ</h6>
                    <h2 className="ewaste-faq__heading !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                        Frequently Asked Questions
                    </h2>
                    <p className="ewaste-faq__subtitle dark:text-gray-400 text-gray-600 max-w-2xl">
                        Find quick answers to common queries about our wire and cable recycling processes.
                    </p>
                </div>

                <div className="ewaste-faq__content max-w-3xl mx-auto w-full flex flex-col gap-3 scroll-reveal">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index} 
                                className={`ewaste-faq__item border dark:border-white/10 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#47622A]/5 dark:bg-white/5 border-[#47622A]/20 dark:border-white/20' : 'bg-transparent'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full form-button p-4 md:p-[24px] text-left flex justify-between items-center outline-none focus:outline-none"
                                >
                                    <h5 className="font-bold text-gray-900 dark:text-gray-100 pr-4">{faq.question}</h5>
                                    <ChevronDown className={`w-5 h-5 text-[#47622A] dark:text-[#799851] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                <div className={`ewaste-faq__answer-wrapper overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-4 md:px-[24px] md:pb-[24px] md:pt-0 text-gray-600 dark:text-gray-400">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WireCableScrapFAQ;

"use client";
import { useState } from "react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is AKTU Helper really free to use?",
            answer: "Yes! AKTU Helper is completely free for all students. You get access to previous year papers, study notes, AI assistant, and community forums without any cost. We believe quality education resources should be accessible to everyone.",
            category: "General"
        },
        {
            question: "Which branches and subjects are covered?",
            answer: "We cover all AKTU branches including CSE, IT, ECE, EE, ME, CE, and more. Our resources span across all semesters with comprehensive coverage of core subjects, electives, and practical courses. New content is added regularly based on student requests.",
            category: "Content"
        },
        {
            question: "How accurate are the previous year paper solutions?",
            answer: "All solutions are verified by subject experts and top-scoring students. We maintain a rigorous quality check process to ensure accuracy. If you spot any errors, you can report them through our platform, and we'll review and update immediately.",
            category: "Quality"
        },
        {
            question: "Can I access AKTU Helper on my mobile device?",
            answer: "Absolutely! AKTU Helper is fully responsive and works seamlessly on all devices - smartphones, tablets, and desktops. You can study anytime, anywhere. We also have mobile apps coming soon for an even better experience.",
            category: "Technical"
        },
        {
            question: "How does the AI Study Assistant work?",
            answer: "Our AI assistant uses advanced natural language processing to understand your questions and provide accurate, contextual answers. It's trained on AKTU syllabus and can help with concept explanations, problem-solving, and study guidance 24/7.",
            category: "Features"
        },
        {
            question: "Do I need to create an account to access resources?",
            answer: "While you can browse some content without an account, creating a free account unlocks full access to all features including AI assistant, personalized recommendations, progress tracking, and the ability to save your favorite resources.",
            category: "Account"
        },
        {
            question: "How often is new content added?",
            answer: "We update our platform regularly! New previous year papers are added immediately after exams. Study notes and resources are continuously updated based on syllabus changes and student feedback. You'll always have access to the latest materials.",
            category: "Updates"
        },
        {
            question: "Can I download study materials for offline use?",
            answer: "Yes! Most of our resources including PDFs of previous year papers and notes can be downloaded for offline studying. This feature is available for all registered users at no additional cost.",
            category: "Features"
        },
        {
            question: "How can I contribute or report errors?",
            answer: "We love community contributions! You can submit corrections, share your own notes, or suggest improvements through the 'Contribute' section. Every submission is reviewed by our team, and contributors get special recognition on the platform.",
            category: "Community"
        },
        {
            question: "Is there a limit on how much I can use the AI Assistant?",
            answer: "Free users get generous daily usage limits that are sufficient for regular studying. If you need unlimited access to the AI assistant and premium features, you can upgrade to our Pro plan (coming soon) at student-friendly prices.",
            category: "Features"
        }
    ];

    const categories = ["All", "General", "Content", "Features", "Technical"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredFAQs = activeCategory === "All"
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-700">Got Questions?</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need to know about AKTU Helper. Can't find the answer you're looking for? Contact our support team.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeCategory === category
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-xl border-2 transition-all duration-300 ${isOpen
                                        ? "border-blue-500 shadow-lg"
                                        : "border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                                >
                                    <div className="flex-1 pr-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className={`text-xs font-semibold px-2 py-1 rounded ${isOpen
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "bg-gray-100 text-gray-600"
                                                }`}>
                                                {faq.category}
                                            </span>
                                        </div>
                                        <h3 className={`font-semibold transition-colors ${isOpen ? "text-blue-600" : "text-gray-900 group-hover:text-blue-600"
                                            }`}>
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen
                                            ? "bg-blue-600 rotate-180"
                                            : "bg-gray-100 group-hover:bg-gray-200"
                                        }`}>
                                        <svg
                                            className={`w-5 h-5 transition-colors ${isOpen ? "text-white" : "text-gray-600"
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-6 pb-5">
                                        <div className="pt-2 border-t border-gray-100">
                                            <p className="text-gray-700 leading-relaxed mt-3">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Still Have Questions CTA */}
                <div className="mt-12 text-center">
                    <div className="inline-flex flex-col items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Still have questions?
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Can't find the answer you're looking for? Our support team is here to help.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <a
                                    href="/contact"
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105"
                                >
                                    Contact Support
                                </a>
                                <a
                                    href="/community"
                                    className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200"
                                >
                                    Join Community
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
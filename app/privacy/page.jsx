"use client";
import React from "react";

export default function PrivacyPolicy() {
    return (
        <section className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12 sm:p-16">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center">
                    Privacy Policy
                </h1>
                <p className="text-gray-600 text-lg mb-12 text-center">
                    Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                </p>

                {/* Section 1 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                        Information We Collect
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may collect personal information such as your name, email address, and usage data when you use our services or interact with our website.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                        How We Use Your Information
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
                        <li>To provide and maintain our services.</li>
                        <li>To improve user experience on our website.</li>
                        <li>To communicate updates, offers, or announcements.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                        Data Protection
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We take appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </div>

                {/* Section 4 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                        Third-Party Services
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may use third-party services for analytics, hosting, or marketing purposes. These services have their own privacy policies which we encourage you to review.
                    </p>
                </div>

                {/* Section 5 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                        Your Rights
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
                        <li>You can request access to your personal data.</li>
                        <li>You can request correction or deletion of your personal data.</li>
                        <li>You can unsubscribe from our communications at any time.</li>
                    </ul>
                </div>

                {/* Section 6 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full"></span>
                        Changes to This Policy
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of our services indicates acceptance.
                    </p>
                </div>

                {/* Footer Note */}
                <p className="text-gray-500 text-sm mt-16 text-center">
                    Last Updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </section>
    );
}

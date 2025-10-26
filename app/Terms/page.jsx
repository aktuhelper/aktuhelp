"use client";
import React from "react";

export default function TermsAndConditions() {
    return (
        <section className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12 sm:p-16">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center">
                    Terms & Conditions
                </h1>
                <p className="text-gray-600 text-lg mb-12 text-center">
                    Please read these terms and conditions carefully before using our website.
                </p>

                {/* Section 1 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></span>
                        Acceptance of Terms
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></span>
                        Use of Content
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        All content provided on this site is for informational purposes only. You may not reproduce, distribute, or use any content without prior written permission.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></span>
                        User Responsibilities
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
                        <li>Ensure all information you provide is accurate and current.</li>
                        <li>Do not engage in any activity that disrupts the functionality of the website.</li>
                        <li>Respect all applicable laws and regulations while using our services.</li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></span>
                        Limitation of Liability
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are not liable for any damages that may occur from the use or inability to use this website. Use the website at your own risk.
                    </p>
                </div>

                {/* Section 5 */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                        <span className="inline-block w-2 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></span>
                        Changes to Terms
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        We reserve the right to modify these terms at any time. Changes will be posted on this page, and your continued use signifies acceptance.
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

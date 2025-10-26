"use client";
import React from "react";
import { FiExternalLink, FiAward, FiUser, FiCalendar } from "react-icons/fi";

export default function UpScholarshipCard() {
    const scholarshipUrl = "https://scholarship.up.gov.in/";

    return (
        <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center px-6 py-16">
            <div className="max-w-3xl w-full bg-white/80 backdrop-blur-lg border border-emerald-100 shadow-2xl rounded-3xl p-10 text-center transition-all duration-300 hover:shadow-emerald-200/60">
                {/* Header */}
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-4">
                    UP Scholarship Portal {new Date().getFullYear()}

                </h1>
                <p className="text-gray-600 text-lg mb-10">
                    Apply online for Pre-Matric, Post-Matric, and Dashmottar scholarships provided by the Government of Uttar Pradesh.
                </p>

                {/* Info Highlights */}
                <div className="grid sm:grid-cols-3 gap-5 mb-10 text-left">
                    <div className="flex items-start gap-3 bg-gradient-to-r from-emerald-50 to-white p-4 rounded-2xl border border-emerald-100">
                        <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                            <FiAward className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Scholarship Type</p>
                            <p className="font-semibold text-gray-800">Pre & Post Matric</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-r from-emerald-50 to-white p-4 rounded-2xl border border-emerald-100">
                        <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                            <FiUser className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Eligible Students</p>
                            <p className="font-semibold text-gray-800">UP Domicile Students</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-r from-emerald-50 to-white p-4 rounded-2xl border border-emerald-100">
                        <div className="p-2 bg-emerald-100 rounded-xl text-emerald-700">
                            <FiCalendar className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Last Date</p>
                            <p className="font-semibold text-gray-800">Varies (Check Portal)</p>
                        </div>
                    </div>
                </div>

                {/* Main CTA Button */}
                <a
                    href={scholarshipUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-white font-semibold text-lg shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:shadow-emerald-300/50 transition-all duration-300 hover:-translate-y-1"
                >
                    Apply Now
                    <FiExternalLink className="w-5 h-5" />
                </a>

                {/* Footer Note */}
                <p className="text-sm text-gray-500 mt-8">
                    You will be redirected to the official UP Scholarship Portal.
                </p>
            </div>
        </section>
    );
}

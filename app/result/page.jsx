"use client";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

export default function AktuResultCard() {
    const resultUrl = "https://erp.aktu.ac.in/WebPages/OneView/OneView.aspx";

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-6 py-16">
            <div className="max-w-2xl w-full bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl border border-gray-200 p-10 text-center">
                {/* Header */}
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-4">
                    AKTU Result Portal
                </h1>
                <p className="text-gray-600 mb-8 text-lg">
                    Check your semester results directly from the official AKTU website.
                </p>

                {/* Info Box */}
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900 rounded-2xl py-5 px-6 mb-10 border border-blue-200 shadow-sm">
                    <p className="text-base font-semibold">
                        University: <span className="font-bold">Dr. A.P.J. Abdul Kalam Technical University (AKTU)</span>
                    </p>
                    <p className="text-base mt-1">Result Portal: OneView</p>
                </div>

                {/* Button */}
                <a
                    href={resultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                    View Result
                    <FiExternalLink className="w-5 h-5" />
                </a>

                {/* Footer note */}
                <p className="text-sm text-gray-500 mt-8">
                    You’ll be redirected to the official AKTU result portal.
                </p>
            </div>
        </section>
    );
}

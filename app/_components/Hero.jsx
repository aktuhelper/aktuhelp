"use client";
import { useState } from "react";
import {
    Sparkles,
    ArrowRight,
    Play,
    CheckCircle2,
    BookOpen,
    Users,
    TrendingUp,
} from "lucide-react";

export default function HeroSection() {
    const [hoveredCard, setHoveredCard] = useState(null);

    const features = [
        { icon: BookOpen, title: "10,000+ Resources", desc: "Comprehensive study materials" },
        { icon: Users, title: "50,000+ Students", desc: "Active learning community" },
        { icon: TrendingUp, title: "95% Success Rate", desc: "Proven academic success" },
    ];

    const benefits = [
        "Access to previous year papers",
        "Expert-verified study notes",
        "AI-powered study assistant",
        "24/7 community support",
    ];

    return (
        <section className="relative z-0 bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">



            {/* Floating Blobs */}
            <div className="absolute top-10 right-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors">
                            <Sparkles className="w-4 h-4" />
                            Trusted by 50,000+ AKTU Students
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                            Your Complete{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                AKTU Study Platform
                            </span>
                        </h1>

                        <p className="text-gray-600 text-lg max-w-md">
                            Access study materials, previous year papers, and expert notes.
                            Everything you need to excel in your AKTU exams.
                        </p>

                        <ul className="space-y-2">
                            {benefits.map((b, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">{b}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <a
                                href="#get-started"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                            >
                                Get Started Free <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#watch-demo"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:shadow-md transition-all"
                            >
                                <Play className="w-4 h-4" />
                                Aktuhelper
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Feature Cards */}
                    <div className="space-y-4">
                        {features.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={i}
                                    onMouseEnter={() => setHoveredCard(i)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className={`p-4 bg-white rounded-xl border transition-all ${hoveredCard === i
                                            ? "border-blue-500 shadow-lg scale-105"
                                            : "border-gray-200 hover:border-gray-300 shadow-sm"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`p-3 rounded-lg ${hoveredCard === i ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                                            <p className="text-gray-600 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(20px,-30px) scale(1.1); }
          66% { transform: translate(-15px,15px) scale(0.9); }
        }
        .animate-blob { animation: blob 6s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
        </section>
    );
}

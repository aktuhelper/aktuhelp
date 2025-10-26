"use client";
import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Users, Target, Award, TrendingUp } from 'lucide-react';

export default function AboutUs() {
    const [scrollY, setScrollY] = useState(0);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stats = [
        { number: '500K+', label: 'Active Users', icon: Users },
        { number: '99.9%', label: 'Uptime', icon: TrendingUp },
        { number: '150+', label: 'Countries', icon: Target },
        { number: '50+', label: 'Awards', icon: Award }
    ];

    const values = [
        {
            title: 'Innovation First',
            description: 'We push boundaries and challenge the status quo to create products that truly make a difference.',
            gradient: 'from-violet-500 to-purple-600'
        },
        {
            title: 'Customer Obsessed',
            description: 'Every decision we make starts and ends with our customers. Their success is our success.',
            gradient: 'from-blue-500 to-cyan-600'
        },
        {
            title: 'Transparent & Open',
            description: 'We believe in radical transparency, open communication, and building in public.',
            gradient: 'from-pink-500 to-rose-600'
        }
    ];

    const team = [
        { name: 'Sarah Chen', role: 'CEO & Founder', color: 'bg-gradient-to-br from-violet-400 to-purple-600' },
        { name: 'Marcus Rodriguez', role: 'CTO', color: 'bg-gradient-to-br from-blue-400 to-cyan-600' },
        { name: 'Emily Thompson', role: 'Head of Design', color: 'bg-gradient-to-br from-pink-400 to-rose-600' },
        { name: 'David Kim', role: 'VP Engineering', color: 'bg-gradient-to-br from-orange-400 to-red-600' },
        { name: 'Lisa Johnson', role: 'VP Product', color: 'bg-gradient-to-br from-emerald-400 to-green-600' },
        { name: 'James Wilson', role: 'VP Growth', color: 'bg-gradient-to-br from-amber-400 to-yellow-600' }
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Hero Section */}
            <div className="relative pt-20 pb-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-2 mb-6">
                            <Sparkles className="w-4 h-4 text-violet-600" />
                            <span className="text-sm text-violet-700">About Us</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-violet-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                            We're building the<br />future of productivity
                        </h1>

                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Our mission is to empower teams worldwide with tools that transform how they work, collaborate, and achieve their goals.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={i}
                                    className="relative group"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                                    <div className="relative bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-6 hover:border-violet-300 transition-all shadow-sm hover:shadow-md">
                                        <Icon className="w-8 h-8 text-violet-600 mb-3" />
                                        <div className="text-3xl font-bold mb-1">{stat.number}</div>
                                        <div className="text-slate-600 text-sm">{stat.label}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="relative py-20 px-6 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 rounded-3xl blur-3xl" />
                        <div className="relative bg-white backdrop-blur-xl border border-slate-200 rounded-3xl p-12 shadow-lg">
                            <Zap className="w-12 h-12 text-violet-600 mb-6" />
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Founded in 2020, we started with a simple observation: teams were drowning in tools that made them less productive, not more. We knew there had to be a better way.
                                </p>
                                <p>
                                    What began as a weekend project has grown into a platform trusted by over 500,000 teams worldwide. We've stayed true to our core belief that software should enhance human creativity, not replace it.
                                </p>
                                <p>
                                    Today, we're a team of dreamers, builders, and problem-solvers united by the vision of creating tools that people genuinely love to use every day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="relative py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, i) => (
                            <div
                                key={i}
                                className="group cursor-pointer"
                                onMouseEnter={() => setActiveCard(i)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div className="relative h-full">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                                    <div className="relative bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-8 h-full hover:border-slate-300 transition-all duration-300 transform group-hover:scale-105 shadow-sm hover:shadow-lg">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl mb-6 transform group-hover:rotate-12 transition-transform duration-300`} />
                                        <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="relative py-20 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4">Meet the Team</h2>
                    <p className="text-slate-600 text-center mb-16 max-w-2xl mx-auto">
                        We're a diverse group of thinkers, makers, and doers committed to building something extraordinary.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {team.map((member, i) => (
                            <div
                                key={i}
                                className="group cursor-pointer"
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    <div className="relative bg-white backdrop-blur-xl border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all shadow-sm hover:shadow-md">
                                        <div className={`w-full aspect-square ${member.color} rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-300`} />
                                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                                        <p className="text-slate-600 text-sm">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                        <div className="relative bg-white backdrop-blur-xl border border-slate-200 rounded-3xl p-16 shadow-xl">
                            <h2 className="text-5xl font-bold mb-6">Join us on our journey</h2>
                            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                                We're always looking for talented people who share our passion for building exceptional products.
                            </p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-violet-500/25">
                                    View Openings
                                </button>
                                <button className="px-8 py-4 bg-slate-100 border border-slate-300 rounded-xl font-semibold hover:bg-slate-200 transition-all transform hover:scale-105">
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
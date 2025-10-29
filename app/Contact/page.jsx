"use client"
import React, { useState } from 'react';
import { Mail, Send, CheckCircle, MessageSquare, Clock, AlertCircle, X } from 'lucide-react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [focusedField, setFocusedField] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send email');
            }

            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, 5000);
        } catch (err) {
            setError(err.message);
            setTimeout(() => setError(null), 5000);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email Us',
            description: 'Our team responds within 24 hours',
            value: 'hello@company.com',
            color: 'violet'
        },
        {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Chat with our support team',
            value: 'Available 24/7',
            color: 'cyan'
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            violet: {
                gradient: 'from-violet-500 to-purple-600',
                bg: 'bg-violet-50',
                border: 'border-violet-200',
                text: 'text-violet-600',
                hover: 'hover:border-violet-300'
            },
            cyan: {
                gradient: 'from-cyan-500 to-blue-600',
                bg: 'bg-cyan-50',
                border: 'border-cyan-200',
                text: 'text-cyan-600',
                hover: 'hover:border-cyan-300'
            },
            pink: {
                gradient: 'from-pink-500 to-rose-600',
                bg: 'bg-pink-50',
                border: 'border-pink-200',
                text: 'text-pink-600',
                hover: 'hover:border-pink-300'
            },
            emerald: {
                gradient: 'from-emerald-500 to-green-600',
                bg: 'bg-emerald-50',
                border: 'border-emerald-200',
                text: 'text-emerald-600',
                hover: 'hover:border-emerald-300'
            }
        };
        return colors[color] || colors.violet;
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 overflow-hidden relative">
            {/* Success Modal */}
            {submitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={() => setSubmitted(false)}
                    />

                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
                        <button
                            onClick={() => setSubmitted(false)}
                            className="absolute right-4 top-4 rounded-full p-1 hover:bg-slate-100 transition-colors"
                        >
                            <X className="h-5 w-5 text-slate-600" />
                        </button>

                        <div className="flex flex-col items-center justify-center py-6">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 animate-bounce">
                                    <CheckCircle className="w-10 h-10 text-white" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full blur-2xl opacity-30 animate-pulse" />
                            </div>

                            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Message Sent Successfully!
                            </h3>

                            <p className="text-center text-slate-600 mb-6">
                                Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                            </p>

                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    setFormData({ name: '', email: '', subject: '', message: '' });
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Contact Methods Grid */}
            <div className="relative py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6 mb-20">
                        {contactMethods.map((method, i) => {
                            const Icon = method.icon;
                            const colors = getColorClasses(method.color);
                            return (
                                <div
                                    key={i}
                                    className="group cursor-pointer"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                >
                                    <div className="relative h-full">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                                        <div className={`relative bg-white border ${colors.border} ${colors.hover} rounded-2xl p-6 h-full transition-all duration-300 transform group-hover:scale-105 shadow-sm hover:shadow-md`}>
                                            <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                                                <Icon className={`w-6 h-6 ${colors.text}`} />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                                            <p className="text-slate-500 text-sm mb-3">{method.description}</p>
                                            <p className={`font-semibold ${colors.text}`}>{method.value}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Contact Form Section */}
            <div className="relative py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse" />
                            <div className="relative bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
                                {/* Decorative Elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />

                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                                            <MessageSquare className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-violet-600 bg-clip-text text-transparent">Send us a message</h2>
                                    </div>
                                    <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                                </div>

                                <div className="space-y-6">
                                    {error && (
                                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                            <p className="text-red-700 text-sm">{error}</p>
                                        </div>
                                    )}

                                    <div className="relative">
                                        <label className="block text-sm font-semibold mb-2 text-slate-700">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            disabled={loading}
                                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'name'
                                                ? 'border-violet-500 shadow-lg shadow-violet-500/20'
                                                : 'border-slate-200 hover:border-slate-300'
                                                }`}
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-semibold mb-2 text-slate-700">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            disabled={loading}
                                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'email'
                                                ? 'border-cyan-500 shadow-lg shadow-cyan-500/20'
                                                : 'border-slate-200 hover:border-slate-300'
                                                }`}
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-semibold mb-2 text-slate-700">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('subject')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            disabled={loading}
                                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'subject'
                                                ? 'border-pink-500 shadow-lg shadow-pink-500/20'
                                                : 'border-slate-200 hover:border-slate-300'
                                                }`}
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="block text-sm font-semibold mb-2 text-slate-700">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('message')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            disabled={loading}
                                            rows="5"
                                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'message'
                                                ? 'border-emerald-500 shadow-lg shadow-emerald-500/20'
                                                : 'border-slate-200 hover:border-slate-300'
                                                }`}
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-4 rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        <span>{loading ? 'Sending...' : 'Send Message'}</span>
                                        <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="space-y-8">
                            {/* Response Time */}
                            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Average Response Time</h4>
                                        <p className="text-emerald-600 font-semibold text-xl">Under 2 hours</p>
                                    </div>
                                </div>
                                <p className="text-slate-600">Our support team is dedicated to providing you with quick and helpful responses. Most inquiries are answered within 2 hours during business hours.</p>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Expert Support</h4>
                                            <p className="text-slate-600 text-sm">Get help from our experienced team members</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">Quick Resolution</h4>
                                            <p className="text-slate-600 text-sm">We prioritize solving your issues efficiently</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <CheckCircle className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">24/7 Availability</h4>
                                            <p className="text-slate-600 text-sm">Reach us anytime, from anywhere</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="relative py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                        <div className="relative bg-slate-50 border border-slate-200 rounded-3xl p-12">
                            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
                            <p className="text-slate-600 mb-6">Join our Community and become part of our Family</p>
                            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg">
                                Join our Community
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
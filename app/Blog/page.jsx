"use client";
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag, TrendingUp, Bookmark, Share2, Eye, Heart } from 'lucide-react';

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [visibleCount, setVisibleCount] = useState(3);

    const categories = [
        { name: 'All', count: 32 },
        { name: 'Product', count: 10 },
        { name: 'Engineering', count: 8 },
        { name: 'Design', count: 7 },
        { name: 'Culture', count: 4 },
        { name: 'News', count: 3 }
    ];

    const blogs = [
        {
            id: 1,
            title: 'Building the Future of AI-Powered Productivity',
            excerpt: 'Discover how we\'re revolutionizing workplace efficiency with cutting-edge artificial intelligence and machine learning technologies.',
            author: 'Sarah Chen',
            authorRole: 'CEO',
            date: '2025-10-25',
            readTime: '8 min read',
            category: 'Product',
            image: 'bg-gradient-to-br from-violet-400 to-purple-600',
            views: '2.4K',
            likes: '142',
            featured: true,
            trending: true
        },
        {
            id: 2,
            title: 'Design System 2.0: A Complete Overhaul',
            excerpt: 'How we rebuilt our entire design system from scratch to create more consistent and accessible user experiences.',
            author: 'Emily Thompson',
            authorRole: 'Head of Design',
            date: '2025-10-23',
            readTime: '12 min read',
            category: 'Design',
            image: 'bg-gradient-to-br from-pink-400 to-rose-600',
            views: '1.8K',
            likes: '98',
            featured: true
        },
        {
            id: 3,
            title: 'Scaling to 1 Million Users: Our Infrastructure Journey',
            excerpt: 'The technical challenges we faced and solutions we implemented while scaling our platform to serve millions.',
            author: 'Marcus Rodriguez',
            authorRole: 'CTO',
            date: '2025-10-20',
            readTime: '10 min read',
            category: 'Engineering',
            image: 'bg-gradient-to-br from-cyan-400 to-blue-600',
            views: '3.2K',
            likes: '215',
            trending: true
        },
        {
            id: 4,
            title: 'Remote Work Culture: Building a Global Team',
            excerpt: 'Learn how we maintain team culture, collaboration, and productivity across 15 different time zones.',
            author: 'Lisa Johnson',
            authorRole: 'VP People',
            date: '2025-10-18',
            readTime: '6 min read',
            category: 'Culture',
            image: 'bg-gradient-to-br from-emerald-400 to-green-600',
            views: '1.5K',
            likes: '87'
        },
        {
            id: 5,
            title: 'Product Updates: Q4 2025 Release Notes',
            excerpt: 'Exciting new features, improvements, and updates shipping in our latest quarterly release.',
            author: 'David Kim',
            authorRole: 'VP Product',
            date: '2025-10-15',
            readTime: '5 min read',
            category: 'News',
            image: 'bg-gradient-to-br from-orange-400 to-red-600',
            views: '2.1K',
            likes: '156'
        },
        {
            id: 6,
            title: 'The Science of User Onboarding',
            excerpt: 'Data-driven insights into creating onboarding experiences that convert and retain users effectively.',
            author: 'Sarah Chen',
            authorRole: 'CEO',
            date: '2025-10-12',
            readTime: '9 min read',
            category: 'Product',
            image: 'bg-gradient-to-br from-amber-400 to-yellow-600',
            views: '1.9K',
            likes: '103'
        },
        {
            id: 7,
            title: 'How We Use Data to Drive Product Decisions',
            excerpt: 'A deep dive into our data analytics process and how we leverage insights to build better products.',
            author: 'Marcus Rodriguez',
            authorRole: 'CTO',
            date: '2025-10-10',
            readTime: '11 min read',
            category: 'Engineering',
            image: 'bg-gradient-to-br from-indigo-400 to-purple-600',
            views: '1.6K',
            likes: '92'
        },
        {
            id: 8,
            title: 'Creating Inclusive Design: Best Practices',
            excerpt: 'Our approach to building products that are accessible and inclusive for all users, regardless of ability.',
            author: 'Emily Thompson',
            authorRole: 'Head of Design',
            date: '2025-10-08',
            readTime: '7 min read',
            category: 'Design',
            image: 'bg-gradient-to-br from-teal-400 to-cyan-600',
            views: '1.4K',
            likes: '78'
        },
        {
            id: 9,
            title: 'Behind the Scenes: A Day in Engineering',
            excerpt: 'Follow our engineering team through a typical day of building, testing, and shipping features.',
            author: 'David Kim',
            authorRole: 'VP Engineering',
            date: '2025-10-05',
            readTime: '6 min read',
            category: 'Culture',
            image: 'bg-gradient-to-br from-lime-400 to-green-600',
            views: '1.2K',
            likes: '65'
        },
        {
            id: 10,
            title: 'API v3: What\'s New and Breaking Changes',
            excerpt: 'Comprehensive guide to our new API version, including new endpoints, improvements, and migration tips.',
            author: 'Marcus Rodriguez',
            authorRole: 'CTO',
            date: '2025-10-03',
            readTime: '15 min read',
            category: 'Engineering',
            image: 'bg-gradient-to-br from-blue-400 to-indigo-600',
            views: '2.8K',
            likes: '187'
        },
        {
            id: 11,
            title: 'Our Sustainability Commitment',
            excerpt: 'How we\'re reducing our carbon footprint and building environmentally conscious products.',
            author: 'Sarah Chen',
            authorRole: 'CEO',
            date: '2025-10-01',
            readTime: '8 min read',
            category: 'News',
            image: 'bg-gradient-to-br from-green-400 to-emerald-600',
            views: '1.7K',
            likes: '112'
        },
        {
            id: 12,
            title: 'Mobile-First Design Strategy',
            excerpt: 'Why we prioritize mobile experiences and how it shapes our entire product development process.',
            author: 'Emily Thompson',
            authorRole: 'Head of Design',
            date: '2025-09-28',
            readTime: '9 min read',
            category: 'Design',
            image: 'bg-gradient-to-br from-fuchsia-400 to-pink-600',
            views: '1.5K',
            likes: '89'
        }
    ];

    const trendingTopics = [
        'Artificial Intelligence',
        'Remote Work',
        'Product Design',
        'Developer Tools',
        'Team Culture'
    ];

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredBlog = filteredBlogs.find(blog => blog.featured);
    const regularBlogs = filteredBlogs.filter(blog => !blog.featured);
    const displayedBlogs = regularBlogs.slice(0, visibleCount);
    const hasMore = visibleCount < regularBlogs.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Header */}
            <div className="relative pt-20 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-2 mb-6">
                            <TrendingUp className="w-4 h-4 text-violet-600" />
                            <span className="text-sm text-violet-700">Latest Stories</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-violet-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                            Our Blog
                        </h1>

                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Insights, stories, and updates from our team. Learn about our products, culture, and the future we're building.
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="relative mb-6">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-violet-500 focus:shadow-lg focus:shadow-violet-500/20 outline-none transition-all duration-300"
                            />
                        </div>

                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => setSelectedCategory(cat.name)}
                                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === cat.name
                                            ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/30'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                >
                                    {cat.name} <span className="text-xs opacity-75">({cat.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Blog */}
            {featuredBlog && (
                <div className="relative px-6 mb-20">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-4 h-4 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold">Featured Article</h2>
                        </div>

                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500" />
                            <div className="relative bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="grid md:grid-cols-5 gap-0">
                                    <div className={`${featuredBlog.image} md:col-span-2 p-8 flex items-center justify-center relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                                        <div className="relative text-white text-center">
                                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 mx-auto">
                                                <TrendingUp className="w-8 h-8" />
                                            </div>
                                            <div className="text-4xl font-bold mb-1">{featuredBlog.views}</div>
                                            <div className="text-sm opacity-90">Views</div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-3 p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2.5 py-0.5 bg-violet-100 text-violet-600 rounded-full text-xs font-semibold">
                                                {featuredBlog.category}
                                            </span>
                                            {featuredBlog.trending && (
                                                <span className="px-2.5 py-0.5 bg-red-100 text-red-600 rounded-full text-xs font-semibold flex items-center gap-1">
                                                    <TrendingUp className="w-3 h-3" />
                                                    Trending
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-600 transition-colors line-clamp-2">
                                            {featuredBlog.title}
                                        </h3>

                                        <p className="text-slate-600 mb-4 leading-relaxed line-clamp-2">
                                            {featuredBlog.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full" />
                                                <div>
                                                    <div className="font-semibold text-sm">{featuredBlog.author}</div>
                                                    <div className="text-xs text-slate-500">{featuredBlog.authorRole}</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3 text-xs text-slate-500">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(featuredBlog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {featuredBlog.readTime}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Heart className="w-3.5 h-3.5" />
                                                    {featuredBlog.likes}
                                                </span>
                                            </div>

                                            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:from-violet-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-violet-500/30">
                                                Read More
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Blog Grid */}
            <div className="relative px-6 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold">Latest Articles</h2>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Eye className="w-4 h-4" />
                            <span>Showing {displayedBlogs.length} of {regularBlogs.length} articles</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayedBlogs.map((blog, i) => (
                            <div
                                key={blog.id}
                                className="group cursor-pointer"
                                onMouseEnter={() => setHoveredCard(blog.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{ animationDelay: `${i * 50}ms` }}
                            >
                                <div className="relative h-full">
                                    <div className="absolute -inset-1 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    <div className="relative bg-white border-2 border-slate-200 rounded-2xl overflow-hidden h-full flex flex-col hover:border-slate-300 transition-all duration-300 transform group-hover:scale-[1.02] shadow-sm hover:shadow-xl">
                                        {/* Image */}
                                        <div className={`${blog.image} h-40 relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                                            <div className="absolute top-4 right-4 flex gap-2">
                                                {blog.trending && (
                                                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                                        <TrendingUp className="w-3 h-3" />
                                                        Trending
                                                    </div>
                                                )}
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                                <span className="px-2 py-0.5 bg-white/90 backdrop-blur-sm text-slate-900 rounded-full text-xs font-semibold">
                                                    {blog.category}
                                                </span>
                                                <div className="flex gap-1.5">
                                                    <button className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110">
                                                        <Bookmark className="w-3.5 h-3.5 text-slate-700" />
                                                    </button>
                                                    <button className="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110">
                                                        <Share2 className="w-3.5 h-3.5 text-slate-700" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-base font-bold mb-2 group-hover:text-violet-600 transition-colors line-clamp-2">
                                                {blog.title}
                                            </h3>

                                            <p className="text-slate-600 text-sm mb-3 line-clamp-2 flex-grow">
                                                {blog.excerpt}
                                            </p>

                                            <div className="flex items-center gap-2 mb-3 pt-3 border-t border-slate-100">
                                                <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-purple-600 rounded-full" />
                                                <div className="flex-grow min-w-0">
                                                    <div className="font-semibold text-xs truncate">{blog.author}</div>
                                                    <div className="text-xs text-slate-500 truncate">{blog.authorRole}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-xs text-slate-500">
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {blog.readTime.split(' ')[0]}m
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="flex items-center gap-1">
                                                        <Eye className="w-3 h-3" />
                                                        {blog.views}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {hasMore && (
                        <div className="flex justify-center mt-12">
                            <button
                                onClick={handleLoadMore}
                                className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 flex items-center gap-3"
                            >
                                <span>Load More Articles</span>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Trending Topics Sidebar */}
            <div className="relative px-6 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-50 to-violet-50 border border-slate-200 rounded-3xl p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Tag className="w-5 h-5 text-violet-600" />
                            <h3 className="text-xl font-bold">Trending Topics</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {trendingTopics.map((topic, i) => (
                                <button
                                    key={i}
                                    className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-violet-300 hover:shadow-md transition-all duration-300 transform hover:scale-105"
                                >
                                    #{topic}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter CTA */}
            <div className="relative px-6 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                        <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-12 text-center shadow-xl">
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
                            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                                Subscribe to our newsletter and get the latest articles, insights, and updates delivered straight to your inbox.
                            </p>
                            <div className="flex gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-violet-500 focus:shadow-lg focus:shadow-violet-500/20 outline-none transition-all"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl font-semibold hover:from-violet-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-violet-500/30">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
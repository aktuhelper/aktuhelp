'use client';

import { useState } from 'react';
import { Brain, Calculator, Lightbulb, Target, Clock, BookOpen, ChevronRight, Award, TrendingUp } from 'lucide-react';

export default function AptitudePage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Categories', icon: BookOpen, color: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
        { id: 'numerical', name: 'Numerical Ability', icon: Calculator, color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
        { id: 'reasoning', name: 'Reasoning Ability', icon: Brain, color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
        { id: 'verbal', name: 'Verbal Ability', icon: BookOpen, color: 'bg-gradient-to-br from-green-500 to-emerald-500' },
        { id: 'logical', name: 'Logical Reasoning', icon: Lightbulb, color: 'bg-gradient-to-br from-orange-500 to-red-500' }
    ];

    const practiceSets = [
        // Numerical Ability Sets
        {
            id: 1,
            title: 'Basic Arithmetic & Percentages',
            category: 'numerical',
            difficulty: 'easy',
            questions: 25,
            duration: '30 mins',
            topics: ['Percentages', 'Profit & Loss', 'Simple Interest'],
            completionRate: '85%',
            attempted: 1250
        },
        {
            id: 2,
            title: 'Time, Speed & Distance',
            category: 'numerical',
            difficulty: 'medium',
            questions: 30,
            duration: '40 mins',
            topics: ['Time & Distance', 'Trains', 'Boats & Streams'],
            completionRate: '72%',
            attempted: 980
        },
        {
            id: 3,
            title: 'Advanced Problem Solving',
            category: 'numerical',
            difficulty: 'hard',
            questions: 35,
            duration: '50 mins',
            topics: ['Mixtures', 'Allegation', 'Work & Time'],
            completionRate: '65%',
            attempted: 650
        },
        {
            id: 4,
            title: 'Number Systems & Averages',
            category: 'numerical',
            difficulty: 'easy',
            questions: 20,
            duration: '25 mins',
            topics: ['HCF & LCM', 'Averages', 'Number Series'],
            completionRate: '88%',
            attempted: 1450
        },

        // Reasoning Ability Sets
        {
            id: 5,
            title: 'Pattern Recognition',
            category: 'reasoning',
            difficulty: 'easy',
            questions: 25,
            duration: '30 mins',
            topics: ['Series', 'Analogies', 'Classification'],
            completionRate: '82%',
            attempted: 1100
        },
        {
            id: 6,
            title: 'Blood Relations & Directions',
            category: 'reasoning',
            difficulty: 'medium',
            questions: 30,
            duration: '35 mins',
            topics: ['Blood Relations', 'Directions', 'Sitting Arrangements'],
            completionRate: '75%',
            attempted: 890
        },
        {
            id: 7,
            title: 'Puzzles & Seating Arrangement',
            category: 'reasoning',
            difficulty: 'hard',
            questions: 40,
            duration: '60 mins',
            topics: ['Complex Puzzles', 'Circular Seating', 'Linear Arrangement'],
            completionRate: '58%',
            attempted: 520
        },
        {
            id: 8,
            title: 'Coding-Decoding & Syllogisms',
            category: 'reasoning',
            difficulty: 'medium',
            questions: 28,
            duration: '35 mins',
            topics: ['Coding-Decoding', 'Syllogisms', 'Statements'],
            completionRate: '78%',
            attempted: 950
        },

        // Verbal Ability Sets
        {
            id: 9,
            title: 'Vocabulary & Grammar Basics',
            category: 'verbal',
            difficulty: 'easy',
            questions: 30,
            duration: '30 mins',
            topics: ['Synonyms', 'Antonyms', 'Grammar'],
            completionRate: '80%',
            attempted: 1350
        },
        {
            id: 10,
            title: 'Reading Comprehension',
            category: 'verbal',
            difficulty: 'medium',
            questions: 25,
            duration: '40 mins',
            topics: ['Passages', 'Inference', 'Main Ideas'],
            completionRate: '70%',
            attempted: 820
        },
        {
            id: 11,
            title: 'Sentence Correction & Para Jumbles',
            category: 'verbal',
            difficulty: 'hard',
            questions: 35,
            duration: '45 mins',
            topics: ['Error Spotting', 'Para Jumbles', 'Fill in Blanks'],
            completionRate: '62%',
            attempted: 580
        },

        // Logical Reasoning Sets
        {
            id: 12,
            title: 'Logical Deduction Basics',
            category: 'logical',
            difficulty: 'easy',
            questions: 20,
            duration: '25 mins',
            topics: ['Statements', 'Arguments', 'Assumptions'],
            completionRate: '84%',
            attempted: 1200
        },
        {
            id: 13,
            title: 'Data Sufficiency',
            category: 'logical',
            difficulty: 'medium',
            questions: 30,
            duration: '40 mins',
            topics: ['Data Sufficiency', 'Critical Reasoning'],
            completionRate: '68%',
            attempted: 750
        },
        {
            id: 14,
            title: 'Advanced Logic Puzzles',
            category: 'logical',
            difficulty: 'hard',
            questions: 35,
            duration: '55 mins',
            topics: ['Complex Logic', 'Grid Puzzles', 'Truth Tellers'],
            completionRate: '55%',
            attempted: 480
        }
    ];

    const filteredSets = selectedCategory === 'all'
        ? practiceSets
        : practiceSets.filter(set => set.category === selectedCategory);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'easy': return 'text-green-600 bg-green-50 border-green-200';
            case 'medium': return 'text-amber-600 bg-amber-50 border-amber-200';
            case 'hard': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    const getCategoryIcon = (categoryId) => {
        const category = categories.find(c => c.id === categoryId);
        return category ? category.icon : Target;
    };

    const handleStartPractice = (setId) => {
        // Navigate to practice set
        window.location.href = `/aptitude/${setId}`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
                            <Target className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">Aptitude Practice</h1>
                    </div>
                    <p className="text-gray-600">Master aptitude with comprehensive practice sets</p>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`p-4 rounded-xl transition-all duration-300 ${selectedCategory === category.id
                                            ? `${category.color} text-white shadow-lg scale-105`
                                            : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                                        }`}
                                >
                                    <Icon className={`w-6 h-6 mx-auto mb-2 ${selectedCategory === category.id ? 'text-white' : 'text-gray-600'
                                        }`} />
                                    <div className="text-sm font-medium text-center">
                                        {category.name}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <BookOpen className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">{filteredSets.length}</div>
                                <div className="text-sm text-gray-600">Practice Sets</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <Award className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">
                                    {Math.round(filteredSets.reduce((acc, set) => acc + parseInt(set.completionRate), 0) / filteredSets.length)}%
                                </div>
                                <div className="text-sm text-gray-600">Avg. Completion</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <TrendingUp className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">
                                    {filteredSets.reduce((acc, set) => acc + set.attempted, 0).toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">Total Attempts</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Practice Sets Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredSets.map((set) => {
                        const CategoryIcon = getCategoryIcon(set.category);
                        return (
                            <div
                                key={set.id}
                                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                            >
                                {/* Header with gradient */}
                                <div className={`p-4 ${categories.find(c => c.id === set.category)?.color} text-white`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <CategoryIcon className="w-5 h-5" />
                                        <span className={`px-2.5 py-1 rounded-md text-xs font-medium border capitalize bg-white ${getDifficultyColor(set.difficulty)}`}>
                                            {set.difficulty}
                                        </span>
                                    </div>
                                    <h3 className="font-semibold text-lg line-clamp-2">
                                        {set.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    {/* Stats */}
                                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <BookOpen className="w-4 h-4" />
                                            <span>{set.questions} Qs</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{set.duration}</span>
                                        </div>
                                    </div>

                                    {/* Topics */}
                                    <div className="mb-4">
                                        <div className="text-xs font-medium text-gray-700 mb-2">Topics Covered:</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {set.topics.map((topic, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                                            <span>Completion Rate</span>
                                            <span className="font-medium">{set.completionRate}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                                                style={{ width: set.completionRate }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Attempts */}
                                    <div className="text-xs text-gray-500 mb-4">
                                        {set.attempted.toLocaleString()} students attempted
                                    </div>

                                    {/* Start Button */}
                                    <button
                                        onClick={() => handleStartPractice(set.id)}
                                        className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                    >
                                        Start Practice
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* No Results */}
                {filteredSets.length === 0 && (
                    <div className="text-center py-16">
                        <Target className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No practice sets found</h3>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                )}
            </div>
        </div>
    );
}
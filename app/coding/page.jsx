'use client';

import { useState } from 'react';
import { Search, Filter, Code2, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function CodingQuestions() {
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [selectedTopic, setSelectedTopic] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter(); 
    const questions = [
        { id: 1, title: 'Two Sum', difficulty: 'easy', topic: 'Arrays', tags: ['Array', 'Hash Table'], acceptance: '49%' },
        { id: 2, title: 'Add Two Numbers', difficulty: 'medium', topic: 'Linked List', tags: ['Linked List', 'Math'], acceptance: '38%' },
        { id: 3, title: 'Longest Substring', difficulty: 'medium', topic: 'Strings', tags: ['String', 'Sliding Window'], acceptance: '33%' },
        { id: 4, title: 'Median of Two Sorted Arrays', difficulty: 'hard', topic: 'Arrays', tags: ['Array', 'Binary Search'], acceptance: '35%' },
        { id: 5, title: 'Valid Parentheses', difficulty: 'easy', topic: 'Stack', tags: ['Stack', 'String'], acceptance: '40%' },
        { id: 6, title: 'Merge K Sorted Lists', difficulty: 'hard', topic: 'Linked List', tags: ['Linked List', 'Heap'], acceptance: '47%' },
        { id: 7, title: 'Container With Most Water', difficulty: 'medium', topic: 'Arrays', tags: ['Array', 'Two Pointers'], acceptance: '54%' },
        { id: 8, title: 'Reverse Integer', difficulty: 'easy', topic: 'Math', tags: ['Math'], acceptance: '27%' },
        { id: 9, title: 'Palindrome Linked List', difficulty: 'easy', topic: 'Linked List', tags: ['Linked List', 'Two Pointers'], acceptance: '45%' },
        { id: 10, title: 'Min Stack', difficulty: 'medium', topic: 'Stack', tags: ['Stack', 'Design'], acceptance: '51%' },
        { id: 11, title: 'Longest Palindrome', difficulty: 'easy', topic: 'Strings', tags: ['String', 'Hash Table'], acceptance: '55%' },
        { id: 12, title: 'Binary Tree Inorder', difficulty: 'easy', topic: 'Trees', tags: ['Tree', 'DFS'], acceptance: '68%' },
        { id: 13, title: 'Course Schedule', difficulty: 'medium', topic: 'Graphs', tags: ['Graph', 'DFS', 'BFS'], acceptance: '46%' },
        { id: 14, title: 'Daily Temperatures', difficulty: 'medium', topic: 'Stack', tags: ['Stack', 'Array'], acceptance: '65%' },
        { id: 15, title: 'Group Anagrams', difficulty: 'medium', topic: 'Strings', tags: ['String', 'Hash Table'], acceptance: '62%' },
    ];

    const topics = ['all', 'Arrays', 'Strings', 'Linked List', 'Stack', 'Trees', 'Graphs', 'Math'];

    const filteredQuestions = questions.filter(q => {
        const matchesDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
        const matchesTopic = selectedTopic === 'all' || q.topic === selectedTopic;
        const matchesSearch = q.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesDifficulty && matchesTopic && matchesSearch;
    });

    const handleViewSolution = (questionId) => {
        router.push(`/coding/${questionId}`); // ✅ navigate dynamically
    };
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'easy': return 'text-green-500 bg-green-50 border-green-200';
            case 'medium': return 'text-amber-500 bg-amber-50 border-amber-200';
            case 'hard': return 'text-red-500 bg-red-50 border-red-200';
            default: return 'text-gray-500 bg-gray-50 border-gray-200';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-indigo-600 rounded-lg">
                            <Code2 className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">Coding Challenges</h1>
                    </div>
                    <p className="text-gray-600">Practice problems from top tech companies</p>
                </div>

                {/* Filters Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                    <div className="flex flex-col gap-4">
                        {/* Search */}
                        <div className="w-full">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search questions..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Difficulty Filter */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Difficulty</label>
                            <div className="flex flex-wrap gap-2">
                                {['all', 'easy', 'medium', 'hard'].map(diff => (
                                    <button
                                        key={diff}
                                        onClick={() => setSelectedDifficulty(diff)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${selectedDifficulty === diff
                                                ? 'bg-indigo-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {diff.charAt(0).toUpperCase() + diff.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Topic Filter */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Topic</label>
                            <div className="flex flex-wrap gap-2">
                                {topics.map(topic => (
                                    <button
                                        key={topic}
                                        onClick={() => setSelectedTopic(topic)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${selectedTopic === topic
                                                ? 'bg-emerald-600 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {topic.charAt(0).toUpperCase() + topic.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-4 text-sm text-gray-600">
                    Showing {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''}
                </div>

                {/* Questions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredQuestions.map(question => (
                        <div
                            key={question.id}
                            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                        >
                            <div className="p-5">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                            {question.title}
                                        </h3>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border capitalize whitespace-nowrap ml-2 ${getDifficultyColor(question.difficulty)}`}>
                                        {question.difficulty}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {question.tags.map((tag, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <TrendingUp className="w-3.5 h-3.5" />
                                        <span>{question.acceptance}</span>
                                    </div>
                                </div>

                                {/* View Solution Button */}
                                <button
                                    onClick={() => handleViewSolution(question.id)}
                                    className="w-full mt-4 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                                >
                                    View Solution
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredQuestions.length === 0 && (
                    <div className="text-center py-16">
                        <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
                        <p className="text-gray-500">Try adjusting your filters or search term</p>
                    </div>
                )}
            </div>
        </div>
    );
}
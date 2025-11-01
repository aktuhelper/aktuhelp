'use client';

import { useState, useEffect } from 'react';
import { Brain, Calculator, Target, Clock, BookOpen, ChevronRight, Award, TrendingUp, RotateCcw, Loader2, AlertCircle } from 'lucide-react';

export default function AptitudePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [practiceSets, setPracticeSets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questionCounts, setQuestionCounts] = useState({});

  const STRAPI_URL = typeof window !== 'undefined' && window.ENV?.NEXT_PUBLIC_STRAPI_URL
    ? window.ENV.NEXT_PUBLIC_STRAPI_URL
    : 'http://localhost:1337';

  useEffect(() => {
    fetchPracticeSets();
  }, []);

  const fetchQuestionCount = async (category) => {
    try {
      // Try multiple variations including trimmed versions to handle spaces
      const variations = [
        category,
        category.toLowerCase(),
        category.toUpperCase(),
        category.charAt(0).toUpperCase() + category.slice(1).toLowerCase(),
        category.trim(),
        category.toLowerCase().trim(),
        ' ' + category.toLowerCase(),
      ];

      for (const variant of variations) {
        const url = `${STRAPI_URL}/api/apti-questions?filters[category][$eq]=${variant}&pagination[limit]=1`;

        const response = await fetch(url);
        const data = await response.json();
        const count = data.meta?.pagination?.total || 0;

        if (count > 0) {
          return count;
        }
      }

      return 0;
    } catch (err) {
      console.error(`Error fetching question count for ${category}:`, err);
      return 0;
    }
  };

  const fetchPracticeSets = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${STRAPI_URL}/api/practice-sets`);

      if (!response.ok) {
        throw new Error('Failed to fetch practice sets');
      }

      const data = await response.json();

      const transformedSets = data.data.map((item) => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        category: item.category,
        questions: item.question,
        duration: item.duraton,
        difficulty: item.difficulty || 'medium',
        marksScored: item.marksScored || null,
        totalMarks: item.total_marks,
        attempted: item.attempted || 0,
        isAttempted: item.isAttempted || false
      }));

      console.log('📋 Transformed practice sets:', transformedSets);
      setPracticeSets(transformedSets);

      // Fetch question counts for each category
      const categories = ['numerical', 'reasoning', 'verbal'];
      const counts = {};

      for (const cat of categories) {
        counts[cat] = await fetchQuestionCount(cat);
      }

      setQuestionCounts(counts);

    } catch (err) {
      console.error('Error fetching practice sets:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, color: 'bg-gradient-to-br from-indigo-500 to-purple-500' },
    { id: 'numerical', name: 'Numerical Ability', icon: Calculator, color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { id: 'reasoning', name: 'Reasoning Ability', icon: Brain, color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
    { id: 'verbal', name: 'Verbal Ability', icon: BookOpen, color: 'bg-gradient-to-br from-green-500 to-emerald-500' },
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

  const getCategoryInfo = (categoryId) => {
    return categories.find(c => c.id === categoryId) || categories[0];
  };

  const getScoreColor = (marks, total) => {
    const percentage = (marks / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const isSetAvailable = (set) => {
    const count = questionCounts[set.category] || 0;
    return count > 0;
  };

  const handleStartPractice = (set) => {
    if (!isSetAvailable(set)) {
      alert(`No questions available for ${set.category} category yet. Please try another practice set.`);
      return;
    }

    sessionStorage.setItem('currentTest', JSON.stringify({
      id: set.id,
      documentId: set.documentId,
      title: set.title,
      category: set.category,
      questions: set.questions,
      duration: parseInt(set.duration),
      totalMarks: set.totalMarks
    }));

    window.location.href = `/aptitude/${set.id}`;
  };

  const handleReattempt = (set) => {
    if (!isSetAvailable(set)) {
      alert(`No questions available for ${set.category} category yet. Please try another practice set.`);
      return;
    }

    sessionStorage.setItem('currentTest', JSON.stringify({
      id: set.id,
      documentId: set.documentId,
      title: set.title,
      category: set.category,
      questions: set.questions,
      duration: parseInt(set.duration),
      totalMarks: set.totalMarks,
      attempted: set.attempted,
      reattempt: true
    }));

    window.location.href = `/aptitude/${set.id}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-purple-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading practice sets...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 max-w-md w-full border border-red-200 shadow-lg">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={fetchPracticeSets}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Aptitude Practice</h1>
          </div>
          <p className="text-gray-600">Master aptitude with comprehensive practice sets</p>
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${selectedCategory === category.id ? 'text-white' : 'text-gray-600'}`} />
                  <div className="text-sm font-medium text-center">
                    {category.name}
                  </div>
                  {category.id !== 'all' && questionCounts[category.id] !== undefined && (
                    <div className={`text-xs mt-1 ${selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                      {questionCounts[category.id]} questions
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

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
                  {filteredSets.filter(set => set.isAttempted).length}
                </div>
                <div className="text-sm text-gray-600">Completed</div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSets.map((set) => {
            const categoryInfo = getCategoryInfo(set.category);
            const CategoryIcon = categoryInfo.icon;
            const available = isSetAvailable(set);

            return (
              <div
                key={set.id}
                className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 ${!available ? 'opacity-75' : ''}`}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1.5 rounded-lg text-xs font-medium text-white ${categoryInfo.color} flex items-center gap-1.5`}>
                      <CategoryIcon className="w-3.5 h-3.5" />
                      {categoryInfo.name}
                    </span>
                    {!available && (
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-lg line-clamp-2 text-gray-900 mb-4">
                    {set.title}
                  </h3>

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

                  {set.isAttempted ? (
                    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-medium">Your Score</span>
                        <span className={`text-lg font-bold ${getScoreColor(set.marksScored ?? 0, set.totalMarks)}`}>
                          {set.marksScored ?? 0}/{set.totalMarks}
                        </span>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((set.marksScored ?? 0) / set.totalMarks) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 font-medium">Total Marks</span>
                        <span className="text-lg font-bold text-gray-900">
                          {set.totalMarks}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="text-xs text-gray-500 mb-4">
                    {set.attempted.toLocaleString()} students attempted
                  </div>

                  {set.isAttempted ? (
                    <button
                      onClick={() => handleReattempt(set)}
                      disabled={!available}
                      className={`w-full px-4 py-2.5 rounded-lg font-medium transition-all shadow-md flex items-center justify-center gap-2 ${available
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      <RotateCcw className="w-4 h-4" />
                      {available ? 'Reattempt' : 'Not Available'}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStartPractice(set)}
                      disabled={!available}
                      className={`w-full px-4 py-2.5 rounded-lg font-medium transition-all shadow-md flex items-center justify-center gap-2 ${available
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      {available ? 'Start Practice' : 'Not Available'}
                      {available && <ChevronRight className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

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
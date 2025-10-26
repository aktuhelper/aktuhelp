"use client";
"use client";
import React, { useState } from 'react';
import { BookOpen, FileText, Download, Search, Calendar, Star, TrendingUp, CheckCircle, Clock, FileQuestion, Lightbulb, BookMarked, GraduationCap, Code, X, ChevronRight } from 'lucide-react';

export default function StudyMaterialsPage() {
    const [selectedSemester, setSelectedSemester] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showMaterialModal, setShowMaterialModal] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState(null);

    const semesters = [
        { id: 1, name: 'Semester 1', subjects: 5 },
        { id: 2, name: 'Semester 2', subjects: 6 },
        { id: 3, name: 'Semester 3', subjects: 6 },
        { id: 4, name: 'Semester 4', subjects: 6 },
        { id: 5, name: 'Semester 5', subjects: 7 },
        { id: 6, name: 'Semester 6', subjects: 7 },
        { id: 7, name: 'Semester 7', subjects: 6 },
        { id: 8, name: 'Semester 8', subjects: 5 }
    ];

    const categories = ['All', 'Syllabus', 'Notes', 'PYQ', 'Solutions', 'Books'];

    // PYQ Data by year
    const pyqData = {
        'CS101': {
            subject: 'Programming in C',
            years: [
                { year: '2024', size: '2.1 MB', downloads: 450, type: 'Mid-Sem' },
                { year: '2024', size: '2.5 MB', downloads: 520, type: 'End-Sem' },
                { year: '2023', size: '1.9 MB', downloads: 380, type: 'Mid-Sem' },
                { year: '2023', size: '2.3 MB', downloads: 410, type: 'End-Sem' },
                { year: '2022', size: '2.0 MB', downloads: 340, type: 'Mid-Sem' },
                { year: '2022', size: '2.4 MB', downloads: 390, type: 'End-Sem' },
                { year: '2021', size: '1.8 MB', downloads: 290, type: 'Mid-Sem' },
                { year: '2021', size: '2.2 MB', downloads: 320, type: 'End-Sem' }
            ]
        },
        'MA101': {
            subject: 'Mathematics-I',
            years: [
                { year: '2024', size: '2.3 MB', downloads: 580, type: 'Mid-Sem' },
                { year: '2024', size: '2.8 MB', downloads: 640, type: 'End-Sem' },
                { year: '2023', size: '2.1 MB', downloads: 490, type: 'Mid-Sem' },
                { year: '2023', size: '2.6 MB', downloads: 550, type: 'End-Sem' },
                { year: '2022', size: '2.2 MB', downloads: 420, type: 'Mid-Sem' },
                { year: '2022', size: '2.7 MB', downloads: 480, type: 'End-Sem' },
                { year: '2021', size: '2.0 MB', downloads: 360, type: 'Mid-Sem' },
                { year: '2021', size: '2.5 MB', downloads: 410, type: 'End-Sem' }
            ]
        },
        'PH101': {
            subject: 'Physics',
            years: [
                { year: '2024', size: '2.4 MB', downloads: 420, type: 'Mid-Sem' },
                { year: '2024', size: '2.9 MB', downloads: 480, type: 'End-Sem' },
                { year: '2023', size: '2.2 MB', downloads: 370, type: 'Mid-Sem' },
                { year: '2023', size: '2.7 MB', downloads: 430, type: 'End-Sem' },
                { year: '2022', size: '2.3 MB', downloads: 340, type: 'Mid-Sem' },
                { year: '2022', size: '2.8 MB', downloads: 390, type: 'End-Sem' }
            ]
        },
        'EC101': {
            subject: 'Basic Electronics',
            years: [
                { year: '2024', size: '2.0 MB', downloads: 390, type: 'Mid-Sem' },
                { year: '2024', size: '2.4 MB', downloads: 450, type: 'End-Sem' },
                { year: '2023', size: '1.9 MB', downloads: 330, type: 'Mid-Sem' },
                { year: '2023', size: '2.3 MB', downloads: 380, type: 'End-Sem' },
                { year: '2022', size: '2.1 MB', downloads: 310, type: 'Mid-Sem' },
                { year: '2022', size: '2.5 MB', downloads: 360, type: 'End-Sem' }
            ]
        },
        'ME101': {
            subject: 'Engineering Drawing',
            years: [
                { year: '2024', size: '3.1 MB', downloads: 410, type: 'Mid-Sem' },
                { year: '2024', size: '3.5 MB', downloads: 470, type: 'End-Sem' },
                { year: '2023', size: '2.9 MB', downloads: 360, type: 'Mid-Sem' },
                { year: '2023', size: '3.3 MB', downloads: 420, type: 'End-Sem' },
                { year: '2022', size: '3.0 MB', downloads: 330, type: 'Mid-Sem' },
                { year: '2022', size: '3.4 MB', downloads: 380, type: 'End-Sem' }
            ]
        }
    };

    // Solutions Data by year
    const solutionsData = {
        'CS101': {
            subject: 'Programming in C',
            years: [
                { year: '2024', size: '3.5 MB', downloads: 380, type: 'Mid-Sem' },
                { year: '2024', size: '4.2 MB', downloads: 450, type: 'End-Sem' },
                { year: '2023', size: '3.3 MB', downloads: 320, type: 'Mid-Sem' },
                { year: '2023', size: '4.0 MB', downloads: 370, type: 'End-Sem' },
                { year: '2022', size: '3.4 MB', downloads: 290, type: 'Mid-Sem' },
                { year: '2022', size: '4.1 MB', downloads: 340, type: 'End-Sem' }
            ]
        },
        'MA101': {
            subject: 'Mathematics-I',
            years: [
                { year: '2024', size: '4.0 MB', downloads: 510, type: 'Mid-Sem' },
                { year: '2024', size: '4.8 MB', downloads: 580, type: 'End-Sem' },
                { year: '2023', size: '3.8 MB', downloads: 440, type: 'Mid-Sem' },
                { year: '2023', size: '4.6 MB', downloads: 500, type: 'End-Sem' },
                { year: '2022', size: '3.9 MB', downloads: 390, type: 'Mid-Sem' },
                { year: '2022', size: '4.7 MB', downloads: 450, type: 'End-Sem' }
            ]
        },
        'PH101': {
            subject: 'Physics',
            years: [
                { year: '2024', size: '3.8 MB', downloads: 370, type: 'Mid-Sem' },
                { year: '2024', size: '4.5 MB', downloads: 430, type: 'End-Sem' },
                { year: '2023', size: '3.6 MB', downloads: 320, type: 'Mid-Sem' },
                { year: '2023', size: '4.3 MB', downloads: 380, type: 'End-Sem' }
            ]
        },
        'EC101': {
            subject: 'Basic Electronics',
            years: [
                { year: '2024', size: '3.2 MB', downloads: 340, type: 'Mid-Sem' },
                { year: '2024', size: '3.9 MB', downloads: 400, type: 'End-Sem' },
                { year: '2023', size: '3.0 MB', downloads: 290, type: 'Mid-Sem' },
                { year: '2023', size: '3.7 MB', downloads: 350, type: 'End-Sem' }
            ]
        }
    };

    const studyMaterials = {
        1: [
            {
                id: 1,
                subject: 'Programming in C',
                code: 'CS101',
                materials: {
                    syllabus: { available: true, size: '2.5 MB', downloads: 1250 },
                    notes: { available: true, size: '15.8 MB', downloads: 2340 },
                    pyq: { available: true, size: '8.2 MB', downloads: 1890, hasYears: true },
                    solutions: { available: true, size: '12.4 MB', downloads: 1650, hasYears: true },
                    books: { available: true, size: '45.2 MB', downloads: 890 }
                },
                color: 'from-blue-400 to-cyan-600',
                icon: Code
            },
            {
                id: 2,
                subject: 'Mathematics-I',
                code: 'MA101',
                materials: {
                    syllabus: { available: true, size: '1.8 MB', downloads: 1180 },
                    notes: { available: true, size: '18.5 MB', downloads: 2100 },
                    pyq: { available: true, size: '10.3 MB', downloads: 2450, hasYears: true },
                    solutions: { available: true, size: '14.7 MB', downloads: 1950, hasYears: true },
                    books: { available: true, size: '52.1 MB', downloads: 750 }
                },
                color: 'from-purple-400 to-pink-600',
                icon: BookOpen
            },
            {
                id: 3,
                subject: 'Physics',
                code: 'PH101',
                materials: {
                    syllabus: { available: true, size: '2.1 MB', downloads: 980 },
                    notes: { available: true, size: '20.2 MB', downloads: 1890 },
                    pyq: { available: true, size: '9.5 MB', downloads: 2100, hasYears: true },
                    solutions: { available: true, size: '13.2 MB', downloads: 1720, hasYears: true },
                    books: { available: true, size: '48.3 MB', downloads: 650 }
                },
                color: 'from-green-400 to-emerald-600',
                icon: Lightbulb
            },
            {
                id: 4,
                subject: 'Basic Electronics',
                code: 'EC101',
                materials: {
                    syllabus: { available: true, size: '2.3 MB', downloads: 1050 },
                    notes: { available: true, size: '16.7 MB', downloads: 1950 },
                    pyq: { available: true, size: '7.8 MB', downloads: 1780, hasYears: true },
                    solutions: { available: true, size: '11.5 MB', downloads: 1540, hasYears: true },
                    books: { available: true, size: '41.2 MB', downloads: 580 }
                },
                color: 'from-orange-400 to-red-600',
                icon: FileText
            },
            {
                id: 5,
                subject: 'Engineering Drawing',
                code: 'ME101',
                materials: {
                    syllabus: { available: true, size: '1.9 MB', downloads: 890 },
                    notes: { available: true, size: '22.4 MB', downloads: 1650 },
                    pyq: { available: true, size: '11.2 MB', downloads: 1890, hasYears: true },
                    solutions: { available: false, size: '0 MB', downloads: 0 },
                    books: { available: true, size: '38.7 MB', downloads: 520 }
                },
                color: 'from-indigo-400 to-purple-600',
                icon: BookMarked
            }
        ]
    };

    const currentMaterials = studyMaterials[selectedSemester] || [];

    const filteredMaterials = currentMaterials.filter(material => {
        const matchesSearch = material.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            material.code.toLowerCase().includes(searchQuery.toLowerCase());

        if (selectedCategory === 'All') return matchesSearch;

        const categoryKey = selectedCategory.toLowerCase();
        return matchesSearch && material.materials[categoryKey]?.available;
    });

    const getMaterialIcon = (type) => {
        const icons = {
            syllabus: FileText,
            notes: BookOpen,
            pyq: FileQuestion,
            solutions: CheckCircle,
            books: BookMarked
        };
        return icons[type] || FileText;
    };

    const handleMaterialClick = (materialCode, materialType, materialData) => {
        if (materialData.hasYears) {
            const data = materialType === 'pyq' ? pyqData[materialCode] : solutionsData[materialCode];
            setSelectedMaterial({
                code: materialCode,
                type: materialType,
                data: data
            });
            setShowMaterialModal(true);
        }
    };

    const stats = [
        { label: 'Total Subjects', value: '48', icon: BookOpen, color: 'bg-blue-500' },
        { label: 'Study Materials', value: '240+', icon: FileText, color: 'bg-purple-500' },
        { label: 'Total Downloads', value: '50K+', icon: Download, color: 'bg-green-500' },
        { label: 'PYQ Papers', value: '120+', icon: FileQuestion, color: 'bg-orange-500' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Header */}
            <div className="relative pt-12 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4 sm:mb-6">
                            <GraduationCap className="w-4 h-4 text-blue-600" />
                            <span className="text-xs sm:text-sm text-blue-700">Computer Science & Engineering</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight px-4">
                            Study Materials Portal
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                            Access semester-wise syllabus, notes, PYQs, solutions, and reference books all in one place
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                <div className="relative bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${stat.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                    </div>
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search subjects or codes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base rounded-xl sm:rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 outline-none transition-all duration-300 bg-white"
                            />
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === cat
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative px-4 sm:px-6 pb-12 sm:pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-4 gap-4 sm:gap-6">
                        {/* Sidebar - Semester Selection */}
                        <div className="lg:col-span-1">
                            <div className="bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 sticky top-6 shadow-lg">
                                <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                    Semesters
                                </h2>
                                <div className="space-y-2">
                                    {semesters.map((sem) => (
                                        <button
                                            key={sem.id}
                                            onClick={() => setSelectedSemester(sem.id)}
                                            className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${selectedSemester === sem.id
                                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                                                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm sm:text-base">{sem.name}</span>
                                                <span className={`text-xs sm:text-sm px-2 py-0.5 rounded-full ${selectedSemester === sem.id
                                                        ? 'bg-white/20 text-white'
                                                        : 'bg-slate-200 text-slate-600'
                                                    }`}>
                                                    {sem.subjects} subjects
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content - Subject Cards */}
                        <div className="lg:col-span-3">
                            <div className="mb-4 sm:mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                                    Semester {selectedSemester} - Study Materials
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                                    {filteredMaterials.length} subject{filteredMaterials.length !== 1 ? 's' : ''} found
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                {filteredMaterials.map((material, index) => {
                                    const Icon = material.icon;
                                    return (
                                        <div
                                            key={material.id}
                                            className="relative group"
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                            <div className="relative bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                                {/* Subject Header */}
                                                <div className={`bg-gradient-to-r ${material.color} p-4 sm:p-6 text-white`}>
                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                                                            <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                                                        </div>
                                                        <div className="flex-grow">
                                                            <h3 className="text-lg sm:text-xl font-bold mb-1">{material.subject}</h3>
                                                            <p className="text-xs sm:text-sm text-white/80">Subject Code: {material.code}</p>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 sm:gap-2 self-start sm:self-auto">
                                                            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-300 text-yellow-300" />
                                                            <span className="text-xs sm:text-sm font-semibold">Popular</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Materials Grid */}
                                                <div className="p-4 sm:p-6">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                                        {Object.entries(material.materials).map(([type, data]) => {
                                                            const MaterialIcon = getMaterialIcon(type);
                                                            return (
                                                                <button
                                                                    key={type}
                                                                    disabled={!data.available}
                                                                    onClick={() => handleMaterialClick(material.code, type, data)}
                                                                    className={`relative p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 transition-all duration-300 text-left ${data.available
                                                                            ? 'border-slate-200 hover:border-blue-400 hover:shadow-md bg-white cursor-pointer transform hover:scale-105'
                                                                            : 'border-slate-100 bg-slate-50 cursor-not-allowed opacity-50'
                                                                        }`}
                                                                >
                                                                    <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                                                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${data.available
                                                                                ? 'bg-blue-50 text-blue-600'
                                                                                : 'bg-slate-100 text-slate-400'
                                                                            }`}>
                                                                            <MaterialIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                                                                        </div>
                                                                        <div className="flex-grow min-w-0">
                                                                            <h4 className="text-sm sm:text-base font-semibold text-slate-900 capitalize mb-0.5 sm:mb-1 truncate">
                                                                                {type}
                                                                            </h4>
                                                                            <p className="text-xs text-slate-500">
                                                                                {data.available ? data.size : 'Not Available'}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    {data.available && (
                                                                        <div className="flex items-center justify-between">
                                                                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                                                                <Download className="w-3 h-3" />
                                                                                <span>{data.downloads}</span>
                                                                            </div>
                                                                            <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                                                                                {data.hasYears ? (
                                                                                    <>
                                                                                        <ChevronRight className="w-3 h-3" />
                                                                                        <span className="hidden sm:inline">View Years</span>
                                                                                        <span className="sm:hidden">Years</span>
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        <Download className="w-3 h-3" />
                                                                                        <span className="hidden sm:inline">Download</span>
                                                                                    </>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {filteredMaterials.length === 0 && (
                                <div className="text-center py-12 sm:py-20">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                        <Search className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">No materials found</h3>
                                    <p className="text-sm sm:text-base text-slate-600">Try adjusting your search or filters</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Material Modal - Year-wise View */}
            {showMaterialModal && selectedMaterial && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-2xl font-bold capitalize">{selectedMaterial.type} Papers</h2>
                                <button
                                    onClick={() => setShowMaterialModal(false)}
                                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-white/90">{selectedMaterial.data?.subject}</p>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                            <div className="mb-4">
                                <p className="text-sm text-slate-600">
                                    Select a year to download {selectedMaterial.type === 'pyq' ? 'previous year question papers' : 'solutions'}
                                </p>
                            </div>

                            {/* Year-wise Papers Grid */}
                            <div className="space-y-3">
                                {selectedMaterial.data?.years.map((yearData, index) => (
                                    <div
                                        key={index}
                                        className="relative group"
                                    >
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        <div className="relative bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-blue-400 transition-all duration-300 cursor-pointer">
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="flex items-center gap-4 flex-grow">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <Calendar className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h3 className="text-lg font-bold text-slate-900">
                                                            {yearData.year} - {yearData.type}
                                                        </h3>
                                                        <div className="flex items-center gap-3 mt-1">
                                                            <span className="text-sm text-slate-600">Size: {yearData.size}</span>
                                                            <span className="text-sm text-slate-400">•</span>
                                                            <span className="text-sm text-slate-600 flex items-center gap-1">
                                                                <Download className="w-3 h-3" />
                                                                {yearData.downloads} downloads
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center gap-2 flex-shrink-0">
                                                    <Download className="w-4 h-4" />
                                                    <span className="hidden sm:inline">Download</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Info Box */}
                            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Lightbulb className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1">Study Tip</h4>
                                        <p className="text-sm text-slate-600">
                                            Practice with at least 3-4 years of previous papers to understand the exam pattern and important topics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Quick Tips Section */}
            <div className="relative px-4 sm:px-6 pb-12 sm:pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Study Smart, Not Hard!</h3>
                                <p className="text-sm sm:text-base text-white/90 mb-4">
                                    Download materials early, make notes, solve PYQs regularly, and discuss solutions with peers.
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-lg text-xs sm:text-sm">
                                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Regular Updates</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-lg text-xs sm:text-sm">
                                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Quality Content</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-lg text-xs sm:text-sm">
                                        <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                                        <span>Free Access</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
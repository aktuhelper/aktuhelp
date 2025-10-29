"use client";
import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Download, Search, Calendar, Star, TrendingUp, CheckCircle, Clock, FileQuestion, Lightbulb, BookMarked, GraduationCap, Code, X, ChevronRight, Loader2 } from 'lucide-react';
import { getStudyMaterials } from '../_utils/GlobalApi';
export default function StudyMaterialsPage() {
    const [selectedSemester, setSelectedSemester] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showMaterialModal, setShowMaterialModal] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [apiMaterials, setApiMaterials] = useState({});
    const [loading, setLoading] = useState(true);

    // Hardcoded subject names and codes for SEO
    const hardcodedSubjects = {
        1: [
            { subject: 'Programming in C', code: 'CS101', icon: Code },
            { subject: 'Mathematics-I', code: 'MA101', icon: BookOpen },
            { subject: 'Physics', code: 'PH101', icon: Lightbulb },
            { subject: 'Basic Electronics', code: 'EC101', icon: FileText },
            { subject: 'Engineering Drawing', code: 'ME101', icon: BookMarked }
        ],
        2: [
            { subject: 'Data Structures', code: 'CS201', icon: Code },
            { subject: 'Mathematics-II', code: 'MA201', icon: BookOpen },
            { subject: 'Chemistry', code: 'CH201', icon: Lightbulb },
            { subject: 'Digital Electronics', code: 'EC201', icon: FileText },
            { subject: 'Engineering Mechanics', code: 'ME201', icon: BookMarked },
            { subject: 'English Communication', code: 'EN201', icon: GraduationCap }
        ],
        3: [
            { subject: 'solid mechanics', code: 'civ101', icon: Code },
            { subject: 'fulid mechanics', code: 'civ102', icon: BookOpen },
            { subject: 'material testing', code: 'civ103', icon: FileText },
            { subject: 'mechanics', code: 'civ104', icon: BookMarked },
            { subject: 'Operating Systems', code: 'CS304', icon: Lightbulb },
            { subject: 'Software Engineering', code: 'CS305', icon: GraduationCap }
        ],
        4: [
            { subject: 'Computer Networks', code: 'CS401', icon: Code },
            { subject: 'Theory of Computation', code: 'CS402', icon: BookOpen },
            { subject: 'Microprocessors', code: 'CS403', icon: FileText },
            { subject: 'Web Technologies', code: 'CS404', icon: BookMarked },
            { subject: 'Computer Graphics', code: 'CS405', icon: Lightbulb },
            { subject: 'Design & Analysis of Algorithms', code: 'CS406', icon: GraduationCap }
        ]
     
    };
    // Hardcoded syllabus links for CSE branch
 

    // Fetch data from API
    useEffect(() => {
        async function fetchAllSemesters() {
            setLoading(true);
            try {
                const materialsData = {};

                for (let sem = 1; sem <= 4; sem++) {
                    const data = await getStudyMaterials({
                        courseName: "mba",
                       
                        semester: sem,
                    });
                    console.log("Fetching data for semester:", sem);

                    if (data && data.length > 0) {
                        materialsData[sem] = data.map(subject => ({
                            id: subject.id,
                            subject_name: subject.subject_name,
                            subject_code: subject.subject_code,
                            materials: organizeMaterials(subject.materials)
                        }));
                    }
                }

                setApiMaterials(materialsData);
            } catch (err) {
                console.error('Error fetching materials:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchAllSemesters();
    }, []);

    const organizeMaterials = (materials) => {
        const organized = {
            syllabus: { available: false, items: [] },
            notes: { available: false, items: [] },
            pyq: { available: false, hasYears: false, items: [] },
            solutions: { available: false, hasYears: false, items: [] },
            books: { available: false, items: [] }
        };

        materials?.forEach(material => {
            const type = material.type.toLowerCase().trim();

            if (organized[type]) {
                organized[type].available = true;
                organized[type].items.push({
                    id: material.id,
                    year: material.year,
                    link: material.link,
                    file: material.file
                });

                if (material.year && (type === 'pyq' || type === 'solutions')) {
                    organized[type].hasYears = true;
                }
            }
        });

        return organized;
    };

    // Merge hardcoded subjects with API materials
    const getMergedMaterials = () => {
        // Hardcoded syllabus links for CSE branch
        const syllabusLinks = {
            1: "https://aktu.ac.in/pdf/syllabus/syllabus2223/Syllabus_BTech_First_Yr_Common_other_than_AG_&_BT_effective_from_2022_23_R.pdf", // Common for Sem 1 & 2
            2: "https://aktu.ac.in/pdf/syllabus/syllabus2223/Syllabus_BTech_First_Yr_Common_other_than_AG_&_BT_effective_from_2022_23_R.pdf", // Same as Sem 1
            3: "https://drive.google.com/file/d/1dTQ4kS0R1eoCIf0uYd74mNnC1y6gE3v1/view",
            4: "https://drive.google.com/file/d/1mR7sEmTtSRz3lKpDPm6TH1UqLLQyeoAW/view",
            5: "https://drive.google.com/file/d/1z0T4K8oZib6trE3A7z_VXxkRz4H8RcX7/view",
            6: "https://drive.google.com/file/d/1XnCJtObAWoz5K1PQHg6K1Vxcz4l2zq7M/view",
            7: "https://drive.google.com/file/d/1dpR0HT2HQzX1zyQ1m5vE2hKPYvZJSkci/view",
            8: "https://drive.google.com/file/d/1S7c4VZxMo2bEVoHuAQ0tH0AfLrFlZbRr/view",
        };

        const hardcoded = hardcodedSubjects[selectedSemester] || [];
        const apiData = apiMaterials[selectedSemester] || [];

        return hardcoded.map(hardSubject => {
            const apiSubject = apiData.find(api =>
                api.subject_code === hardSubject.code ||
                api.subject_name.toLowerCase() === hardSubject.subject.toLowerCase()
            );

            const materials = apiSubject?.materials || {
                syllabus: { available: false, items: [] },
                notes: { available: false, items: [] },
                pyq: { available: false, hasYears: false, items: [] },
                solutions: { available: false, hasYears: false, items: [] },
                books: { available: false, items: [] }
            };

            // ✅ Inject hardcoded syllabus link if missing
            if (!materials.syllabus.available && syllabusLinks[selectedSemester]) {
                materials.syllabus.available = true;
                materials.syllabus.items.push({
                    id: `syllabus-${selectedSemester}`,
                    link: syllabusLinks[selectedSemester],
                });
            }

            return {
                id: hardSubject.code,
                subject: hardSubject.subject,
                code: hardSubject.code,
                icon: hardSubject.icon,
                materials,
            };
        });
    };


    const semesters = [
        { id: 1, name: 'Semester 1', subjects: hardcodedSubjects[1]?.length || 0 },
        { id: 2, name: 'Semester 2', subjects: hardcodedSubjects[2]?.length || 0 },
        { id: 3, name: 'Semester 3', subjects: hardcodedSubjects[3]?.length || 0 },
        { id: 4, name: 'Semester 4', subjects: hardcodedSubjects[4]?.length || 0 },
        { id: 5, name: 'Semester 5', subjects: hardcodedSubjects[5]?.length || 0 },
        { id: 6, name: 'Semester 6', subjects: hardcodedSubjects[6]?.length || 0 },
        { id: 7, name: 'Semester 7', subjects: hardcodedSubjects[7]?.length || 0 },
        { id: 8, name: 'Semester 8', subjects: hardcodedSubjects[8]?.length || 0 }
    ];

    const categories = ['All', 'Syllabus', 'Notes', 'PYQ', 'Solutions', 'Books'];

    const currentMaterials = getMergedMaterials();

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

    const handleMaterialClick = (materialCode, materialType, materialData, subjectName) => {
        if (materialData.hasYears && materialData.items.length > 0) {
            const yearGroups = {};
            materialData.items.forEach(item => {
                const key = item.year || 'Unknown';
                if (!yearGroups[key]) {
                    yearGroups[key] = [];
                }
                yearGroups[key].push(item);
            });

            const years = Object.entries(yearGroups).map(([year, items]) => ({
                year: year,
                items: items,
                type: items.length > 1 ? 'Multiple' : 'Paper',
                size: '2.5 MB',
                downloads: Math.floor(Math.random() * 500) + 200
            })).sort((a, b) => b.year.localeCompare(a.year));

            setSelectedMaterial({
                code: materialCode,
                type: materialType,
                subject: subjectName,
                data: { years }
            });
            setShowMaterialModal(true);
        } else if (materialData.available && materialData.items.length > 0) {
            // Direct download for non-year based materials
            window.open(materialData.items[0].link, '_blank');
        }
    };

    const handleDownload = (link) => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                    <p className="text-slate-600">Loading study materials...</p>
                </div>
            </div>
        );
    }

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
                            <span className="text-xs sm:text-sm text-blue-700">MBA</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight px-4">
                            Study Materials Portal
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                            Access semester-wise syllabus, notes, PYQs, solutions, and reference books all in one place
                        </p>
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

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {filteredMaterials.map((material, index) => {
                                    const Icon = material.icon;
                                    return (
                                        <div
                                            key={material.id}
                                            className="relative group"
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                            <div className="relative bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                                                {/* Subject Header */}
                                                <div className="bg-slate-50 border-b-2 border-slate-100 p-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <Icon className="w-6 h-6 text-white" />
                                                        </div>
                                                        <div className="flex-grow min-w-0">
                                                            <h3 className="text-base font-bold text-slate-900 truncate">{material.subject}</h3>
                                                            <p className="text-xs text-slate-600">{material.code}</p>
                                                        </div>
                                                        <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 border border-amber-200 rounded-md flex-shrink-0">
                                                            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                                            <span className="text-xs font-semibold text-amber-700">Popular</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Materials Grid */}
                                                <div className="p-4">
                                                    <div className="grid grid-cols-3 gap-2">
                                                        {Object.entries(material.materials).map(([type, data]) => {
                                                            const MaterialIcon = getMaterialIcon(type);
                                                            return (
                                                                <button
                                                                    key={type}
                                                                    disabled={!data.available}
                                                                    onClick={() => handleMaterialClick(material.code, type, data, material.subject)}
                                                                    className={`relative p-3 rounded-lg border-2 transition-all duration-300 text-left ${data.available
                                                                        ? 'border-slate-200 hover:border-blue-400 hover:shadow-md bg-white cursor-pointer transform hover:scale-105'
                                                                        : 'border-slate-100 bg-slate-50 cursor-not-allowed opacity-50'
                                                                        }`}
                                                                >
                                                                    <div className="flex flex-col items-center text-center gap-2">
                                                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${data.available
                                                                            ? 'bg-blue-50 text-blue-600'
                                                                            : 'bg-slate-100 text-slate-400'
                                                                            }`}>
                                                                            <MaterialIcon className="w-5 h-5" />
                                                                        </div>
                                                                        <div className="w-full">
                                                                            <h4 className="text-xs font-semibold text-slate-900 capitalize mb-1 truncate">
                                                                                {type}
                                                                            </h4>
                                                                            {data.available ? (
                                                                                <div className="flex items-center justify-center gap-1 text-xs text-green-600">
                                                                                    <CheckCircle className="w-3 h-3" />
                                                                                    <span>Available</span>
                                                                                </div>
                                                                            ) : (
                                                                                <p className="text-xs text-slate-400">N/A</p>
                                                                            )}
                                                                        </div>
                                                                    </div>
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
                            <p className="text-white/90">{selectedMaterial.subject}</p>
                            <p className="text-white/70 text-sm">{selectedMaterial.code}</p>
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
                                    <div key={index} className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        <div className="relative bg-white border-2 border-slate-200 rounded-xl p-4 hover:border-blue-400 transition-all duration-300">
                                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                                <div className="flex items-center gap-4 flex-grow">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <Calendar className="w-6 h-6 text-white" />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h3 className="text-lg font-bold text-slate-900">
                                                            {yearData.year} - {yearData.type}
                                                        </h3>
                                                        <div className="flex items-center gap-3 mt-1 flex-wrap">
                                                            <span className="text-sm text-slate-600">Size: {yearData.size}</span>
                                                            <span className="text-sm text-slate-400">•</span>
                                                            <span className="text-sm text-slate-600 flex items-center gap-1">
                                                                <Download className="w-3 h-3" />
                                                                {yearData.downloads} downloads
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 flex-shrink-0">
                                                    {yearData.items.map((item, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => handleDownload(item.link)}
                                                            className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center gap-2"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                            <span>Download</span>
                                                        </button>
                                                    ))}
                                                </div>
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
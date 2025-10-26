'use client';

import { useState } from 'react';
import { Users, Code, ChevronDown, ChevronUp, Search, Briefcase, Lightbulb, BookOpen, Star } from 'lucide-react';

export default function InterviewQuestionsPage() {
    const [selectedType, setSelectedType] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const questionTypes = [
        { id: 'all', name: 'All Questions', icon: BookOpen, color: 'bg-indigo-600' },
        { id: 'hr', name: 'HR Round', icon: Users, color: 'bg-purple-600' },
        { id: 'technical', name: 'Technical Round', icon: Code, color: 'bg-blue-600' }
    ];

    const questions = [
        // HR Questions
        {
            id: 1,
            type: 'hr',
            category: 'Introduction',
            difficulty: 'easy',
            question: 'Tell me about yourself',
            answer: 'This is your opportunity to make a great first impression. Structure your answer using the Present-Past-Future formula:\n\n• Present: Brief overview of your current role and key responsibilities\n• Past: Relevant experience and achievements that led you here\n• Future: Why you\'re interested in this position and what you hope to achieve\n\nKeep it professional, concise (2-3 minutes), and relevant to the job you\'re applying for. Focus on professional achievements rather than personal details.',
            tips: ['Keep it under 3 minutes', 'Focus on relevant experience', 'End with why you\'re interested in this role'],
            popularity: 98
        },
        {
            id: 2,
            type: 'hr',
            category: 'Strengths & Weaknesses',
            difficulty: 'medium',
            question: 'What are your greatest strengths and weaknesses?',
            answer: 'Strengths: Choose 2-3 strengths that are relevant to the job. Back them up with specific examples.\n\nExample: "I\'m highly analytical and detail-oriented. In my last project, this helped me identify a critical bug that saved the company $50,000 in potential losses."\n\nWeaknesses: Choose a genuine weakness but show how you\'re working to improve it.\n\nExample: "I sometimes focus too much on details, which can slow me down. I\'ve been working on this by setting time limits for tasks and learning to prioritize what truly needs detailed attention."',
            tips: ['Be honest but strategic', 'Always provide examples', 'Show self-awareness and growth'],
            popularity: 95
        },
        {
            id: 3,
            type: 'hr',
            category: 'Career Goals',
            difficulty: 'easy',
            question: 'Where do you see yourself in 5 years?',
            answer: 'Focus on professional growth and alignment with the company:\n\n"In 5 years, I see myself as a senior [role] who has made significant contributions to the company. I\'m particularly interested in [specific area related to the company], and I hope to have developed expertise in this domain while mentoring junior team members. I\'m looking for a company where I can grow long-term, and from my research, your organization seems to offer excellent opportunities for professional development."\n\nAvoid: Mentioning competitors, being too vague, or suggesting you\'ll leave soon.',
            tips: ['Align with company growth', 'Show commitment', 'Be realistic yet ambitious'],
            popularity: 92
        },
        {
            id: 4,
            type: 'hr',
            category: 'Behavioral',
            difficulty: 'medium',
            question: 'Describe a time when you faced a challenge at work and how you handled it',
            answer: 'Use the STAR method:\n\nSituation: Set the context\n"In my previous role, our team faced a critical deadline with a major client..."\n\nTask: Explain your responsibility\n"I was responsible for delivering the backend API, but we discovered a major integration issue..."\n\nAction: Detail what you did\n"I organized a quick meeting with the frontend team, proposed an alternative approach, worked extra hours, and implemented the solution..."\n\nResult: Share the outcome\n"We delivered on time, the client was satisfied, and we secured a contract extension worth $200,000."\n\nBe specific with numbers and outcomes.',
            tips: ['Use the STAR method', 'Be specific with details', 'Focus on your contribution'],
            popularity: 90
        },
        {
            id: 5,
            type: 'hr',
            category: 'Motivation',
            difficulty: 'easy',
            question: 'Why do you want to work for our company?',
            answer: 'Research the company thoroughly and mention specific reasons:\n\n"I\'m impressed by your company\'s commitment to innovation in [specific area]. Your recent [project/achievement] aligns perfectly with my interests in [relevant skill]. I\'m particularly excited about [specific aspect of the role] and believe my experience in [relevant experience] would allow me to contribute meaningfully to your team. Additionally, your company culture of [culture aspect] resonates with my values, and I see this as an opportunity for long-term growth."\n\nAvoid: Generic answers, focusing only on what you\'ll gain, or mentioning salary/perks.',
            tips: ['Research the company thoroughly', 'Mention specific projects or values', 'Show genuine enthusiasm'],
            popularity: 94
        },
        {
            id: 6,
            type: 'hr',
            category: 'Teamwork',
            difficulty: 'medium',
            question: 'How do you handle conflicts with team members?',
            answer: 'Demonstrate emotional intelligence and problem-solving skills:\n\n"I believe in addressing conflicts directly but professionally. When I encounter a disagreement:\n\n1. I first try to understand the other person\'s perspective by listening actively\n2. I focus on the issue, not the person\n3. I propose solutions that benefit the project and team\n4. If needed, I involve a manager or mediator\n\nFor example, in my last project, a colleague and I disagreed on the technical approach. I scheduled a meeting, we discussed pros and cons of each approach, and ultimately combined ideas to create a better solution. This taught me that conflicts can lead to innovation when handled constructively."',
            tips: ['Show maturity and professionalism', 'Emphasize communication', 'Provide a real example'],
            popularity: 88
        },

        // Technical Questions
        {
            id: 7,
            type: 'technical',
            category: 'Programming Fundamentals',
            difficulty: 'easy',
            question: 'What is the difference between == and === in JavaScript?',
            answer: '== (Equality Operator):\n• Compares values after type coercion\n• Converts operands to the same type before comparison\n• Example: 5 == "5" returns true\n\n=== (Strict Equality Operator):\n• Compares both value and type\n• No type coercion\n• Example: 5 === "5" returns false\n\nBest Practice: Always use === to avoid unexpected behavior from type coercion.\n\nExamples:\n5 == "5"    // true (string coerced to number)\n5 === "5"   // false (different types)\n0 == false  // true (both coerced to falsy)\n0 === false // false (different types)\nnull == undefined  // true\nnull === undefined // false',
            tips: ['Always prefer === for predictable behavior', 'Understand type coercion', 'Know the falsy values'],
            popularity: 85
        },
        {
            id: 8,
            type: 'technical',
            category: 'Data Structures',
            difficulty: 'medium',
            question: 'Explain the difference between Stack and Queue',
            answer: 'Stack (LIFO - Last In First Out):\n• Elements added and removed from the same end (top)\n• Operations: push(), pop(), peek(), isEmpty()\n• Use cases: Function call stack, undo/redo, browser history\n• Time Complexity: O(1) for push, pop, peek\n\nQueue (FIFO - First In First Out):\n• Elements added at rear, removed from front\n• Operations: enqueue(), dequeue(), front(), isEmpty()\n• Use cases: Task scheduling, BFS algorithm, printer queue\n• Time Complexity: O(1) for enqueue, dequeue\n\nReal-world analogy:\n• Stack: Stack of plates (take from top, add to top)\n• Queue: Line at a store (first person in line is served first)\n\nImplementation: Both can be implemented using arrays or linked lists.',
            tips: ['Remember LIFO vs FIFO', 'Know real-world use cases', 'Understand time complexity'],
            popularity: 90
        },
        {
            id: 9,
            type: 'technical',
            category: 'Object-Oriented Programming',
            difficulty: 'medium',
            question: 'What are the four pillars of OOP?',
            answer: '1. Encapsulation:\n• Bundling data and methods that operate on that data\n• Hiding internal implementation details\n• Example: Private variables accessed through public methods (getters/setters)\n\n2. Abstraction:\n• Hiding complex implementation, showing only necessary features\n• Focus on "what" rather than "how"\n• Example: Interface defining methods without implementation\n\n3. Inheritance:\n• Creating new classes from existing classes\n• Promotes code reusability\n• Example: Employee class inheriting from Person class\n\n4. Polymorphism:\n• Objects taking multiple forms\n• Same interface, different implementations\n• Types: Compile-time (method overloading) and Runtime (method overriding)\n• Example: Animal class with speak() method, overridden in Dog (bark) and Cat (meow)',
            tips: ['Understand each concept with examples', 'Know how they work together', 'Be ready to provide code examples'],
            popularity: 92
        },
        {
            id: 10,
            type: 'technical',
            category: 'Databases',
            difficulty: 'medium',
            question: 'What is the difference between SQL and NoSQL databases?',
            answer: 'SQL (Relational) Databases:\n• Structured data with predefined schema\n• Tables with rows and columns\n• ACID properties (Atomicity, Consistency, Isolation, Durability)\n• Vertical scaling\n• Examples: MySQL, PostgreSQL, Oracle\n• Best for: Complex queries, transactions, structured data\n\nNoSQL (Non-Relational) Databases:\n• Flexible schema, unstructured data\n• Types: Document (MongoDB), Key-Value (Redis), Column (Cassandra), Graph (Neo4j)\n• BASE properties (Basically Available, Soft state, Eventually consistent)\n• Horizontal scaling\n• Best for: Large-scale data, rapid development, hierarchical data\n\nWhen to use SQL: Banking systems, ERP systems, complex relationships\nWhen to use NoSQL: Social networks, real-time analytics, IoT applications',
            tips: ['Know the trade-offs', 'Understand ACID vs BASE', 'Know real-world use cases'],
            popularity: 88
        },
        {
            id: 11,
            type: 'technical',
            category: 'Web Development',
            difficulty: 'easy',
            question: 'What is the difference between GET and POST HTTP methods?',
            answer: 'GET Method:\n• Retrieves data from server\n• Parameters sent in URL query string\n• Can be cached and bookmarked\n• Length limited (URL length restrictions)\n• Visible in browser history\n• Should not be used for sensitive data\n• Idempotent (multiple identical requests have same effect)\n• Example: Fetching user profile, searching\n\nPOST Method:\n• Sends data to server to create/update resources\n• Parameters sent in request body\n• Not cached or bookmarked\n• No length restrictions\n• Not visible in browser history\n• Used for sensitive data (passwords, forms)\n• Not idempotent (multiple requests may have different effects)\n• Example: Submitting forms, uploading files, creating records\n\nOther methods: PUT (update), DELETE (remove), PATCH (partial update)',
            tips: ['Remember security implications', 'Know when to use each', 'Understand idempotency'],
            popularity: 87
        },
        {
            id: 12,
            type: 'technical',
            category: 'Programming Fundamentals',
            difficulty: 'hard',
            question: 'Explain closures in JavaScript with an example',
            answer: 'A closure is a function that has access to variables in its outer (enclosing) function\'s scope, even after the outer function has returned.\n\nKey Concepts:\n• Inner function has access to outer function\'s variables\n• Creates a private scope\n• Variables remain in memory\n\nExample:\n```javascript\nfunction createCounter() {\n  let count = 0; // Private variable\n  \n  return {\n    increment: function() {\n      count++;\n      return count;\n    },\n    decrement: function() {\n      count--;\n      return count;\n    },\n    getCount: function() {\n      return count;\n    }\n  };\n}\n\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.increment(); // 2\ncounter.getCount();  // 2\n```\n\nUse Cases:\n• Data privacy/encapsulation\n• Factory functions\n• Event handlers\n• Callbacks\n• Module pattern',
            tips: ['Understand scope chain', 'Know practical use cases', 'Be aware of memory implications'],
            popularity: 86
        },
        {
            id: 13,
            type: 'technical',
            category: 'System Design',
            difficulty: 'hard',
            question: 'How would you design a URL shortening service like bit.ly?',
            answer: 'Requirements:\n• Shorten long URLs to short unique codes\n• Redirect users to original URL\n• Handle high traffic\n• Track analytics (optional)\n\nApproach:\n\n1. Database Design:\n• Store mapping: shortCode -> originalURL\n• Use NoSQL (e.g., Redis, MongoDB) for fast lookups\n• Fields: shortCode, originalURL, createdAt, expiryDate, clickCount\n\n2. Short Code Generation:\n• Use base62 encoding (a-z, A-Z, 0-9) = 62 characters\n• 6 characters = 62^6 = 56 billion URLs\n• Generate random string or use incremental ID + base62 conversion\n\n3. API Design:\n• POST /shorten - Input: originalURL, Output: shortURL\n• GET /{shortCode} - Redirect to original URL (302 redirect)\n\n4. Scalability:\n• Use caching (Redis) for frequently accessed URLs\n• Load balancer for distributing traffic\n• Database sharding by shortCode range\n• CDN for global distribution\n\n5. Additional Features:\n• Custom aliases\n• Expiry dates\n• Analytics dashboard\n• Rate limiting',
            tips: ['Think about scale', 'Discuss trade-offs', 'Ask clarifying questions'],
            popularity: 82
        },
        {
            id: 14,
            type: 'technical',
            category: 'Algorithms',
            difficulty: 'medium',
            question: 'What is Big O notation and explain common complexities?',
            answer: 'Big O notation describes the upper bound of algorithm performance (worst-case scenario) as input size grows.\n\nCommon Time Complexities (fastest to slowest):\n\n1. O(1) - Constant:\n• Same time regardless of input size\n• Example: Array access by index, hash table lookup\n\n2. O(log n) - Logarithmic:\n• Divides problem in half each time\n• Example: Binary search, balanced tree operations\n\n3. O(n) - Linear:\n• Time grows proportionally with input\n• Example: Linear search, iterating array\n\n4. O(n log n) - Linearithmic:\n• Efficient sorting algorithms\n• Example: Merge sort, quick sort, heap sort\n\n5. O(n²) - Quadratic:\n• Nested loops\n• Example: Bubble sort, selection sort, insertion sort\n\n6. O(2^n) - Exponential:\n• Doubles with each input increase\n• Example: Recursive fibonacci, subset generation\n\n7. O(n!) - Factorial:\n• Extremely slow\n• Example: Permutations, traveling salesman (brute force)\n\nSpace Complexity: Memory used by algorithm',
            tips: ['Visualize growth rates', 'Know which algorithms have which complexity', 'Consider both time and space'],
            popularity: 91
        }
    ];

    const filteredQuestions = questions.filter(q => {
        const matchesType = selectedType === 'all' || q.type === selectedType;
        const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });

    const toggleQuestion = (questionId) => {
        setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'easy': return 'text-green-600 bg-green-50 border-green-200';
            case 'medium': return 'text-amber-600 bg-amber-50 border-amber-200';
            case 'hard': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    const getCategoryStats = () => {
        const hrCount = questions.filter(q => q.type === 'hr').length;
        const techCount = questions.filter(q => q.type === 'technical').length;
        return { hrCount, techCount, total: questions.length };
    };

    const stats = getCategoryStats();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg">
                            <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">Interview Questions & Answers</h1>
                    </div>
                    <p className="text-gray-600">Comprehensive guide to ace your interviews</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-indigo-100 rounded-lg">
                                <BookOpen className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                                <div className="text-sm text-gray-600">Total Questions</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-purple-100 rounded-lg">
                                <Users className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">{stats.hrCount}</div>
                                <div className="text-sm text-gray-600">HR Questions</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <Code className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">{stats.techCount}</div>
                                <div className="text-sm text-gray-600">Technical Questions</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search questions or categories..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div className="flex gap-2">
                            {questionTypes.map(type => {
                                const Icon = type.icon;
                                return (
                                    <button
                                        key={type.id}
                                        onClick={() => setSelectedType(type.id)}
                                        className={`px-4 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap flex items-center gap-2 ${selectedType === type.id
                                                ? `${type.color} text-white shadow-md`
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {type.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Questions List */}
                <div className="space-y-4">
                    {filteredQuestions.map((q) => (
                        <div
                            key={q.id}
                            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                        >
                            {/* Question Header */}
                            <button
                                onClick={() => toggleQuestion(q.id)}
                                className="w-full p-5 text-left hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-2.5 py-1 rounded-md text-xs font-medium border capitalize ${getDifficultyColor(q.difficulty)}`}>
                                                {q.difficulty}
                                            </span>
                                            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                                                {q.category}
                                            </span>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                <span>{q.popularity}%</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {q.question}
                                        </h3>
                                    </div>
                                    <div className="flex-shrink-0 mt-1">
                                        {expandedQuestion === q.id ? (
                                            <ChevronUp className="w-5 h-5 text-gray-400" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>
                                </div>
                            </button>

                            {/* Answer Section */}
                            {expandedQuestion === q.id && (
                                <div className="border-t border-gray-100 p-5 bg-gradient-to-br from-gray-50 to-white">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Lightbulb className="w-5 h-5 text-amber-500" />
                                            <h4 className="font-semibold text-gray-900">Answer:</h4>
                                        </div>
                                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                                            {q.answer}
                                        </div>
                                    </div>

                                    {/* Tips */}
                                    <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Star className="w-4 h-4 text-indigo-600" />
                                            <h5 className="font-semibold text-gray-900 text-sm">Pro Tips:</h5>
                                        </div>
                                        <ul className="space-y-1">
                                            {q.tips.map((tip, idx) => (
                                                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                                    <span className="text-indigo-600 mt-1">•</span>
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredQuestions.length === 0 && (
                    <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
                        <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
}
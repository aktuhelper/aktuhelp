'use client';
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Clock, BarChart3, Code2, BookOpen, Lightbulb, Sparkles } from 'lucide-react';

export default function SolutionPage({ params }) {

    const resolvedParams = React.use(params); 
    const id = resolvedParams.id || 'na';
    const [activeTab, setActiveTab] = useState('python');
    const [isConverting, setIsConverting] = useState(false);
    const [convertedCode, setConvertedCode] = useState({});
    useEffect(() => {
        const titles = {
            1: 'Two Sum | Coding Practice',
            2: 'Reverse Linked List | Coding Practice',
            3: 'Valid Parentheses | Coding Practice'
        };
        document.title = titles[id] || 'Coding Problem | Practice';
    }, [id]);
 // fallback if not found
    // Base solution in Python
    const baseSolution = {
        python: `def twoSum(nums, target):
    """
    Find two numbers that add up to target
    Time: O(n), Space: O(n)
    """
    hashmap = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        if complement in hashmap:
            return [hashmap[complement], i]
        
        hashmap[num] = i
    
    return []

# Example usage
nums = [2, 7, 11, 15]
target = 9
print(twoSum(nums, target))  # Output: [0, 1]`
    };

    const questions = [
        {
            id: 1,
            title: 'Two Sum',
            difficulty: 'easy',
            topic: 'Arrays',
            description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
            examples: [
                {
                    input: 'nums = [2,7,11,15], target = 9',
                    output: '[0,1]',
                    explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
                },
                {
                    input: 'nums = [3,2,4], target = 6',
                    output: '[1,2]',
                    explanation: 'Because nums[1] + nums[2] == 6, we return [1, 2].'
                }
            ],
            constraints: [
                '2 <= nums.length <= 10⁴',
                '-10⁹ <= nums[i] <= 10⁹',
                '-10⁹ <= target <= 10⁹',
                'Only one valid answer exists.'
            ],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            algorithm: [
                'Create a hash map to store the numbers we\'ve seen and their indices',
                'Iterate through the array',
                'For each number, calculate the complement (target - current number)',
                'Check if the complement exists in the hash map',
                'If found, return the indices of both numbers',
                'If not found, add the current number and its index to the hash map',
                'Continue until we find the pair'
            ],
            pseudocode: `function twoSum(nums, target):
    create empty hashmap
    
    for i from 0 to length(nums) - 1:
        complement = target - nums[i]
        
        if complement exists in hashmap:
            return [hashmap[complement], i]
        
        hashmap[nums[i]] = i
    
    return empty array`
        },

        {
            id: 2,
            title: 'Reverse Linked List',
            difficulty: 'easy',
            topic: 'Linked List',
            description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
            examples: [
                {
                    input: 'head = [1,2,3,4,5]',
                    output: '[5,4,3,2,1]',
                    explanation: 'The linked list is reversed from 1→2→3→4→5 to 5→4→3→2→1.'
                },
                {
                    input: 'head = [1,2]',
                    output: '[2,1]',
                    explanation: 'The linked list 1→2 becomes 2→1.'
                }
            ],
            constraints: [
                'The number of nodes in the list is in the range [0, 5000].',
                '-5000 <= Node.val <= 5000'
            ],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            algorithm: [
                'Initialize three pointers: prev = null, curr = head, next = null',
                'While curr is not null:',
                '   Save next = curr.next',
                '   Set curr.next = prev',
                '   Move prev = curr',
                '   Move curr = next',
                'Return prev (new head)'
            ],
            pseudocode: `function reverseList(head):
    prev = null
    curr = head
    
    while curr != null:
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    
    return prev`
        },

        {
            id: 3,
            title: 'Valid Parentheses',
            difficulty: 'easy',
            topic: 'Stack',
            description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets and in the correct order.',
            examples: [
                {
                    input: 's = "()"',
                    output: 'true',
                    explanation: 'The parentheses are correctly matched.'
                },
                {
                    input: 's = "([)]"',
                    output: 'false',
                    explanation: 'The order of brackets is incorrect.'
                }
            ],
            constraints: [
                '1 <= s.length <= 10⁴',
                's consists of parentheses only \'()[]{}\'.'
            ],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            algorithm: [
                'Use a stack to keep track of opening brackets',
                'Iterate over each character in the string',
                'If it\'s an opening bracket, push it onto the stack',
                'If it\'s a closing bracket, check if the top of the stack has the matching opening bracket',
                'If not, return false',
                'At the end, if the stack is empty, return true; otherwise, false'
            ],
            pseudocode: `function isValid(s):
    stack = empty stack
    mapping = { ')': '(', ']': '[', '}': '{' }
    
    for char in s:
        if char in mapping.values():
            stack.push(char)
        else:
            if stack is empty or stack.pop() != mapping[char]:
                return false
    
    return stack is empty`
        }
    ];
    const question = questions.find(q => q.id === Number(id)) || questions[0];

    const languages = [
        { id: 'python', name: 'Python', color: 'bg-blue-600', icon: '🐍' },
        { id: 'cpp', name: 'C++', color: 'bg-purple-600', icon: '⚡' },
        { id: 'c', name: 'C', color: 'bg-gray-600', icon: '©️' },
        { id: 'java', name: 'Java', color: 'bg-orange-600', icon: '☕' },
        { id: 'javascript', name: 'JavaScript', color: 'bg-yellow-500', icon: '📜' }
    ];

    // Simulated code converter (in real app, this would call an API or use a library)
    const convertCode = async (targetLanguage) => {
        if (convertedCode[targetLanguage]) {
            return convertedCode[targetLanguage];
        }

        setIsConverting(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));

        const templates = {
            cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        /*
         * Find two numbers that add up to target
         * Time: O(n), Space: O(n)
         */
        unordered_map<int, int> hashmap;
        
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            
            if (hashmap.find(complement) != hashmap.end()) {
                return {hashmap[complement], i};
            }
            
            hashmap[nums[i]] = i;
        }
        
        return {};
    }
};`,

            c: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced
 * Time: O(n^2) - Using nested loops for simplicity in C
 * Space: O(1)
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    *returnSize = 2;
    int* result = (int*)malloc(2 * sizeof(int));
    
    for (int i = 0; i < numsSize - 1; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i;
                result[1] = j;
                return result;
            }
        }
    }
    
    return result;
}`,

            java: `import java.util.HashMap;
import java.util.Map;

class Solution {
    /**
     * Find two numbers that add up to target
     * Time: O(n), Space: O(n)
     */
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hashmap = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (hashmap.containsKey(complement)) {
                return new int[] {hashmap.get(complement), i};
            }
            
            hashmap.put(nums[i], i);
        }
        
        return new int[] {};
    }
}`,

            javascript: `/**
 * Find two numbers that add up to target
 * Time: O(n), Space: O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const hashmap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (hashmap.has(complement)) {
            return [hashmap.get(complement), i];
        }
        
        hashmap.set(nums[i], i);
    }
    
    return [];
}`
        };

        const code = templates[targetLanguage];
        setConvertedCode(prev => ({ ...prev, [targetLanguage]: code }));
        setIsConverting(false);

        return code;
    };

    const handleLanguageChange = async (langId) => {
        setActiveTab(langId);
        if (langId !== 'python' && !convertedCode[langId]) {
            await convertCode(langId);
        }
    };

    const getCurrentCode = () => {
        if (activeTab === 'python') {
            return baseSolution.python;
        }
        return convertedCode[activeTab] || '';
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'easy': return 'text-green-600 bg-green-50 border-green-200';
            case 'medium': return 'text-amber-600 bg-amber-50 border-amber-200';
            case 'hard': return 'text-red-600 bg-red-50 border-red-200';
            default: return 'text-gray-600 bg-gray-50 border-gray-200';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => window.location.href = '/coding'}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <h1 className="text-2xl font-bold text-gray-900">{question.title}</h1>
                                <span className={`px-3 py-1 rounded-lg text-sm font-medium border capitalize ${getDifficultyColor(question.difficulty)}`}>
                                    {question.difficulty}
                                </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" />
                                    {question.topic}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {question.timeComplexity}
                                </span>
                                <span className="flex items-center gap-1">
                                    <BarChart3 className="w-4 h-4" />
                                    Space: {question.spaceComplexity}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Problem Description */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-indigo-600" />
                        Problem Description
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6">{question.description}</p>

                    {/* Examples */}
                    <div className="space-y-4 mb-6">
                        {question.examples.map((example, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                <div className="font-medium text-gray-900 mb-2">Example {idx + 1}:</div>
                                <div className="space-y-1 text-sm">
                                    <div><span className="font-medium">Input:</span> <code className="text-indigo-600">{example.input}</code></div>
                                    <div><span className="font-medium">Output:</span> <code className="text-green-600">{example.output}</code></div>
                                    <div><span className="font-medium">Explanation:</span> {example.explanation}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Constraints */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Constraints:</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            {question.constraints.map((constraint, idx) => (
                                <li key={idx}>{constraint}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Algorithm */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-amber-500" />
                        Algorithm
                    </h2>
                    <ol className="space-y-2">
                        {question.algorithm.map((step, idx) => (
                            <li key={idx} className="flex gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium">
                                    {idx + 1}
                                </span>
                                <span className="text-gray-700 pt-0.5">{step}</span>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Pseudocode */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Pseudocode</h2>
                    <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
                        <code>{question.pseudocode}</code>
                    </pre>
                </div>

                {/* Code Implementation with Auto-Converter */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-indigo-600" />
                                    <h2 className="text-lg font-semibold text-gray-900">Code Solution</h2>
                                </div>
                                <div className="text-xs text-gray-600 bg-white px-3 py-1 rounded-full border border-indigo-200">
                                    Auto-converted to {languages.find(l => l.id === activeTab)?.name}
                                </div>
                            </div>
                            <div className="flex items-center gap-2 overflow-x-auto pb-2">
                                {languages.map(lang => (
                                    <button
                                        key={lang.id}
                                        onClick={() => handleLanguageChange(lang.id)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === lang.id
                                                ? `${lang.color} text-white shadow-md`
                                                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                            }`}
                                    >
                                        <span>{lang.icon}</span>
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-6">
                        {isConverting ? (
                            <div className="flex items-center justify-center py-12">
                                <div className="text-center">
                                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-200 border-t-indigo-600 mb-3"></div>
                                    <p className="text-gray-600">Converting to {languages.find(l => l.id === activeTab)?.name}...</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-md font-semibold text-gray-900">
                                        {languages.find(l => l.id === activeTab)?.name} Implementation
                                    </h3>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(getCurrentCode())}
                                        className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                                    >
                                        Copy Code
                                    </button>
                                </div>
                                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm leading-relaxed">
                                    <code>{getCurrentCode()}</code>
                                </pre>
                            </>
                        )}
                    </div>
                </div>

                {/* Complexity Analysis */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 p-6 mt-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Complexity Analysis</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 border border-indigo-100">
                            <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-5 h-5 text-indigo-600" />
                                <span className="font-semibold text-gray-900">Time Complexity</span>
                            </div>
                            <p className="text-2xl font-bold text-indigo-600">{question.timeComplexity}</p>
                            <p className="text-sm text-gray-600 mt-1">Single pass through the array</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-purple-100">
                            <div className="flex items-center gap-2 mb-2">
                                <BarChart3 className="w-5 h-5 text-purple-600" />
                                <span className="font-semibold text-gray-900">Space Complexity</span>
                            </div>
                            <p className="text-2xl font-bold text-purple-600">{question.spaceComplexity}</p>
                            <p className="text-sm text-gray-600 mt-1">Hash map to store elements</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
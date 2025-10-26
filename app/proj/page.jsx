import React from "react";
import {
    FiGithub,
    FiExternalLink,
    FiStar,
    FiGitBranch,
    FiArrowUpRight,
} from "react-icons/fi";

export default function ProjectsShowcase() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description:
                "Full-stack e-commerce solution with Next.js, featuring real-time inventory management, payment integration, and admin dashboard.",
            tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
            github: "https://github.com/yourusername/ecommerce-platform",
            demo: "https://demo-ecommerce.vercel.app",
            stars: 245,
            forks: 67,
            color: "from-blue-500 to-cyan-500",
        },
        {
            id: 2,
            title: "AI Content Generator",
            description:
                "SaaS application that generates marketing copy using OpenAI's GPT API. Includes user authentication and subscription management.",
            tags: ["React", "Node.js", "OpenAI", "MongoDB"],
            github: "https://github.com/yourusername/ai-content-generator",
            demo: "https://ai-content.vercel.app",
            stars: 512,
            forks: 143,
            color: "from-purple-500 to-pink-500",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                        Portfolio 2025
                    </span>
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 tracking-tight">
                        Featured Projects
                    </h1>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
                        A curated collection of projects showcasing modern web technologies
                        and innovative solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                            <div className="p-8">
                                <div className="flex items-start justify-between mb-5">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 pr-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2 shrink-0">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-xl bg-gray-50 hover:bg-gray-900 hover:text-white border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:scale-110 hover:rotate-12"
                                        >
                                            <FiGithub className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2.5 rounded-xl bg-gradient-to-r ${project.color} text-white transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                                        >
                                            <FiArrowUpRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3.5 py-1.5 text-xs font-semibold bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <div className="p-1.5 rounded-lg bg-yellow-50">
                                            <FiStar className="w-4 h-4 text-yellow-600" />
                                        </div>
                                        <span className="text-sm font-semibold">
                                            {project.stars}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <div className="p-1.5 rounded-lg bg-blue-50">
                                            <FiGitBranch className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <span className="text-sm font-semibold">
                                            {project.forks}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

"use client"
import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X, Zap, Layers, Users, BarChart, Code, Palette, Rocket, Shield, Globe, BookOpen, Briefcase, Award, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState({});
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const megaMenuCategories = [
        {
            title: "Getting Started",
            items: [
                { icon: Zap, title: "Quick Start", desc: "Get up and running", href: "#" },
                { icon: BookOpen, title: "Documentation", desc: "Complete guides", href: "#" },
                { icon: Rocket, title: "Tutorials", desc: "Step-by-step lessons", href: "#" },
                { icon: Award, title: "Best Practices", desc: "Learn from experts", href: "#" },
            ]
        },
        {
            title: "Templates & Tools",
            items: [
                {
                    icon: Layers,
                    title: "Templates",
                    desc: "Pre-built solutions",
                    href: "#",
                    submenu: [
                        { title: "Landing Pages", href: "#", desc: "Convert visitors" },
                        { title: "Dashboards", href: "#", desc: "Analytics & metrics" },
                        { title: "E-commerce", href: "#", desc: "Online stores" },
                        { title: "SaaS Apps", href: "#", desc: "Web applications" },
                        { title: "Portfolios", href: "#", desc: "Showcase work" },
                        { title: "Blogs", href: "#", desc: "Content platforms" },
                    ]
                },
                { icon: Code, title: "Components", desc: "Reusable UI blocks", href: "#" },
                { icon: Palette, title: "Design System", desc: "Brand guidelines", href: "#" },
                { icon: Globe, title: "Integrations", desc: "Connect tools", href: "#" },
            ]
        },
        {
            title: "Community & Support",
            items: [
                { icon: Users, title: "Community", desc: "Join discussions", href: "#" },
                { icon: Briefcase, title: "Partner Program", desc: "Grow together", href: "#" },
                { icon: BarChart, title: "Analytics", desc: "Track progress", href: "#" },
                { icon: Shield, title: "Security", desc: "Stay protected", href: "#" },
            ]
        },
    ];

    const toggleMobileSubmenu = (itemTitle) => {
        setMobileSubmenuOpen(prev => ({
            ...prev,
            [itemTitle]: !prev[itemTitle]
        }));
    };

    return (
        <div className="sticky top-0 z-50">
            {/* Sticky Navbar */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <a className="flex items-center gap-2" href="#">
                        <img src="/l.svg" alt="Brand Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                        <span className="hidden sm:block text-xl font-bold tracking-wider uppercase">
                            <span className="text-gray-800">AKTU</span>
                            <span className="text-blue-600">HELPER</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav aria-label="Global" className="hidden lg:block">
                        <ul className="flex items-center gap-1">
                            <li>
                                <a className="px-4 py-2 text-gray-700 font-medium transition hover:text-blue-600 rounded-lg hover:bg-blue-50" href="/">
                                    Home
                                </a>
                            </li>

                            <li className="relative group">
                                <button
                                    onMouseEnter={() => setDropdownOpen(true)}
                                    onMouseLeave={() => setDropdownOpen(false)}
                                    className="px-4 py-2 text-gray-700 font-medium transition hover:text-blue-600 rounded-lg hover:bg-blue-50 flex items-center gap-1"
                                >
                                    Explore
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Mega Menu Dropdown */}
                                {isDropdownOpen && (
                                    <div
                                        onMouseEnter={() => setDropdownOpen(true)}
                                        onMouseLeave={() => setDropdownOpen(false)}
                                        className="absolute left-0 mt-2 w-[900px] bg-white shadow-2xl border border-gray-100 rounded-2xl overflow-hidden"
                                        style={{ animation: 'fadeIn 0.2s ease-in-out' }}
                                    >
                                        <div className="p-8">
                                            <div className="grid grid-cols-3 gap-8">
                                                {megaMenuCategories.map((category, catIndex) => (
                                                    <div key={catIndex}>
                                                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
                                                            {category.title}
                                                        </h3>
                                                        <div className="space-y-1">
                                                            {category.items.map((item, itemIndex) => {
                                                                const Icon = item.icon;
                                                                return (
                                                                    <div key={itemIndex} className="relative group/item">
                                                                        <a
                                                                            href={item.href}
                                                                            className="group/link flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-all duration-200"
                                                                        >
                                                                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover/link:bg-blue-200 transition-colors shrink-0">
                                                                                <Icon className="w-4 h-4 text-blue-600" />
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <div className="flex items-center gap-1">
                                                                                    <h4 className="font-semibold text-sm text-gray-900 group-hover/link:text-blue-600 transition-colors">
                                                                                        {item.title}
                                                                                    </h4>
                                                                                    {item.submenu && (
                                                                                        <ChevronRight className="w-3 h-3 text-gray-400" />
                                                                                    )}
                                                                                </div>
                                                                                <p className="text-xs text-gray-500 mt-0.5">
                                                                                    {item.desc}
                                                                                </p>
                                                                            </div>
                                                                        </a>

                                                                        {/* Nested Submenu for Templates */}
                                                                        {item.submenu && (
                                                                            <div className="absolute left-full top-0 ml-2 w-64 bg-white shadow-xl border border-gray-100 rounded-xl p-3 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-10">
                                                                                <div className="space-y-1">
                                                                                    {item.submenu.map((subItem, subIndex) => (
                                                                                        <a
                                                                                            key={subIndex}
                                                                                            href={subItem.href}
                                                                                            className="block p-3 rounded-lg hover:bg-blue-50 transition group/sub"
                                                                                        >
                                                                                            <div className="font-medium text-sm text-gray-900 group-hover/sub:text-blue-600 transition-colors">
                                                                                                {subItem.title}
                                                                                            </div>
                                                                                            <div className="text-xs text-gray-500 mt-0.5">
                                                                                                {subItem.desc}
                                                                                            </div>
                                                                                        </a>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>

                            <li>
                                <Link className="px-4 py-2 text-gray-700 font-medium transition hover:text-blue-600 rounded-lg hover:bg-blue-50" href="/Contact">
                                    Contact 
                                </Link>
                            </li>

                            <li>
                                <Link className="px-4 py-2 text-gray-700 font-medium transition hover:text-blue-600 rounded-lg hover:bg-blue-50" href="/About">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link className="px-4 py-2 text-gray-700 font-medium transition hover:text-blue-600 rounded-lg hover:bg-blue-50" href="/Blog">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Desktop Search Bar */}
                    <div className="hidden lg:flex items-center flex-1 max-w-xl mx-4">
                        <div className="relative w-full group">
                            <input
                                type="text"
                                placeholder="Search resources, docs, templates..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-10 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 placeholder:text-gray-400"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        {/* Mobile Search Button */}
                        <button
                            onClick={() => setSearchOpen(!isSearchOpen)}
                            className="lg:hidden rounded-lg bg-gray-100 p-2 text-gray-600 transition hover:bg-gray-200"
                            aria-label="Toggle search"
                        >
                            {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
                        </button>



                        <a
                            className="hidden md:block rounded-lg bg-blue-600 px-4 lg:px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg"
                            href="#"
                        >
                            Get Started
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden rounded-lg bg-gray-100 p-2 text-gray-600 transition hover:bg-gray-200"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                {isSearchOpen && (
                    <div className="lg:hidden px-4 pb-4 border-t border-gray-100 bg-white animate-slideDown">
                        <div className="relative mt-3 group">
                            <input
                                type="text"
                                placeholder="Search resources, docs, templates..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-10 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all duration-200 placeholder:text-gray-400"
                                autoFocus
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                )}

                {/* Mobile Menu */}

                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-gray-100 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
                        <nav className="px-4 py-4 space-y-2">

                            <a href="#" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                                About
                            </a>

                            {/* Explore Section with Dropdown */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => setMobileSubmenuOpen(prev => ({ ...prev, explore: !prev.explore }))}
                                    className="w-full flex items-center justify-between px-4 py-3 font-medium text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                                >
                                    Explore
                                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenuOpen.explore ? 'rotate-180' : ''}`} />
                                </button>

                                {mobileSubmenuOpen.explore && (
                                    <div className="pl-4 space-y-2">
                                        {megaMenuCategories.map((category, catIndex) => (
                                            <div key={catIndex} className="space-y-1">
                                                <button
                                                    onClick={() => toggleMobileSubmenu(category.title)}
                                                    className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                                                >
                                                    {category.title}
                                                    <ChevronDown className={`w-3 h-3 transition-transform ${mobileSubmenuOpen[category.title] ? 'rotate-180' : ''}`} />
                                                </button>

                                                {mobileSubmenuOpen[category.title] && (
                                                    <div className="pl-4 space-y-1">
                                                        {category.items.map((item, itemIndex) => {
                                                            const Icon = item.icon;
                                                            const hasSubmenu = item.submenu && item.submenu.length > 0;
                                                            const isOpen = mobileSubmenuOpen[item.title];

                                                            return (
                                                                <div key={itemIndex} className="space-y-1">
                                                                    <div className="flex items-center">
                                                                        <a
                                                                            href={item.href}
                                                                            className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition flex-1"
                                                                        >
                                                                            <Icon className="w-5 h-5 text-blue-500 shrink-0" />
                                                                            <div className="flex-1 min-w-0">
                                                                                <div className="font-medium text-sm">{item.title}</div>
                                                                                <div className="text-xs text-gray-500">{item.desc}</div>
                                                                            </div>
                                                                        </a>

                                                                        {hasSubmenu && (
                                                                            <button
                                                                                onClick={() => toggleMobileSubmenu(item.title)}
                                                                                className="p-2 text-gray-400 hover:text-blue-600 transition"
                                                                            >
                                                                                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                                                            </button>
                                                                        )}
                                                                    </div>

                                                                    {/* Nested Submenu */}
                                                                    {hasSubmenu && isOpen && (
                                                                        <div className="pl-6 pr-4 space-y-1 pb-2">
                                                                            {item.submenu.map((subItem, subIndex) => (
                                                                                <a
                                                                                    key={subIndex}
                                                                                    href={subItem.href}
                                                                                    className="block px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                                                                                >
                                                                                    <div className="font-medium">{subItem.title}</div>
                                                                                    <div className="text-xs text-gray-500 mt-0.5">{subItem.desc}</div>
                                                                                </a>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <a href="#" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                                Careers
                            </a>
                            <a href="#" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                                Services
                            </a>
                            <a href="#" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                                Blog
                            </a>

                            <div className="pt-4 space-y-2 border-t border-gray-100 mt-4">

                                <a href="#" className="block px-4 py-3 text-center text-white font-medium rounded-lg bg-blue-600 hover:bg-blue-700 transition">
                                    Get Started
                                </a>
                            </div>
                        </nav>
                    </div>
                )}

            </header>



            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}
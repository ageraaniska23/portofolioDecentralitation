import React, { useState, useEffect } from 'react';

const navItems = [
    { name: "Home", href: "home" },
    { name: "About Me", href: "about-me" },
    { name: "Experience", href: "experience" },
    { name: "Education", href: "education" },
    { name: "Certificate", href: "certificate" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Contact", href: "contact" },
];

const Navbar = () => {
    const [bgOpacity, setBgOpacity] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (scrolled > 0) {
                setBgOpacity(0.7);
            } else {
                setBgOpacity(0);
            }

            let currentSection = "home";
            navItems.forEach((item) => {
                const section = document.getElementById(item.href);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrolled >= sectionTop - sectionHeight / 3) {
                        currentSection = item.href;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
            <nav className="fixed top-0 w-full z-50">
                <div
                    className="bg-gray-950 absolute inset-0"
                    style={{ opacity: bgOpacity }}
                ></div>
                <div className="relative flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
                <div className="flex items-center">
                    <div className="font-bold italic font-serif">
                        <span className="text-[#00eaff] text-4xl animate-pulse relative">
                            <span className="animate-wave inline-block">A</span>
                            <span className="animate-wave inline-block" style={{ animationDelay: "0.1s" }}>g</span>
                            <span className="animate-wave inline-block" style={{ animationDelay: "0.2s" }}>e</span>
                            <span className="animate-wave inline-block" style={{ animationDelay: "0.3s" }}>r</span>
                            <span className="animate-wave inline-block" style={{ animationDelay: "0.4s" }}>a</span>
                        </span>
                    </div>
                </div>
                    <div className="hidden md:flex space-x-4 text-gray-50 font-bold">
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className={`hover:text-[#00eaff] ${activeSection === item.href ? 'text-cyan-400' : ''}`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-50 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`fixed inset-y-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden bg-gray-950 w-64 z-40`}>
                    <div className="flex flex-col p-4 text-gray-50 font-bold">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="self-end mb-4 text-gray-50 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        {navItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => {
                                    scrollToSection(item.href);
                                    setIsOpen(false);
                                }}
                                className={`py-2 hover:text-[#00eaff] ${activeSection === item.href ? 'text-[#00eaff]' : ''}`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [bgOpacity, setBgOpacity] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (scrolled > 0) {
                setBgOpacity(0.7);
            } else {
                setBgOpacity(0);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50">
            <div
                className="bg-gray-950 absolute inset-0"
                style={{ opacity: bgOpacity }}
            ></div>
            <div className="relative flex justify-between items-center px-4 py-4 max-w-7xl mx-auto">
                <div className="flex items-center space-x-2">
                    <div className="font-bold flex items-center italic font-serif">
                        <span className="text-[#00eaff] text-4xl">Agera</span>
                    </div>
                </div>
                <div className="hidden md:flex space-x-8 text-gray-50 font-bold">
                    <a href="#home" className="hover:text-[#00eaff]">Home</a>
                    <a href="#services" className="hover:text-[#00eaff]">About Me</a>
                    <a href="#about" className="hover:text-[#00eaff]">Portofolio</a>
                    <a href="#contact" className="hover:text-[#00eaff]">Education</a>
                    <a href="#contact" className="hover:text-[#00eaff]">Award</a>
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
                    <a href="#home" className="py-2 hover:text-[#00eaff]" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="#services" className="py-2 hover:text-[#00eaff]" onClick={() => setIsOpen(false)}>About Me</a>
                    <a href="#about" className="py-2 hover:text-[#00eaff]" onClick={() => setIsOpen(false)}>Portofolio</a>
                    <a href="#contact" className="py-2 hover:text-[#00eaff]" onClick={() => setIsOpen(false)}>Education</a>
                    <a href="#contact" className="py-2 hover:text-[#00eaff]" onClick={() => setIsOpen(false)}>Award</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

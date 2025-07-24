import { useState } from "react";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#about" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">K</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            KnockoutZone
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="#contact"
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#features"
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-gray-100 border border-gray-300"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                                <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="pb-4 pt-2 space-y-2">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium backdrop-blur-lg bg-white/10 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-2 space-y-2">
                            <a
                                href="#contact"
                                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium bg-gray-50 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us
                            </a>
                            <a
                                href="#features"
                                className="block w-full px-3 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;

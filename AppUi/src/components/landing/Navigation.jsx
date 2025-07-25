import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GUEST_PATH } from '../../routes/guest/GuestPaths';
import Button from '../Button.jsx';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate(GUEST_PATH.LOGIN);
    };

    const handleLogin = () => {
        navigate(GUEST_PATH.LOGIN);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            KnockoutZone
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            <a href="#features" className="relative text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-base font-bold transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-lg group">
                                <span className="relative z-10">Features</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            <a href="#about" className="relative text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-base font-bold transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-lg group">
                                <span className="relative z-10">How it Works</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                            <a href="#contact" className="relative text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-base font-bold transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-lg group">
                                <span className="relative z-10">Contact</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Button
                            variant="outline"
                            size="small"
                            onClick={handleLogin}
                            className="text-gray-700 hover:text-blue-600"
                        >
                            Login
                        </Button>
                        <Button
                            size="small"
                            onClick={handleGetStarted}
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-white/20 transition-colors duration-200"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden backdrop-blur-lg bg-white/10 border-t border-white/20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#features" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                            Features
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                            How it Works
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </a>
                        <div className="pt-4 pb-3 border-t border-white/20">
                            <div className="flex items-center px-3 space-x-3">
                                <Button
                                    variant="outline"
                                    size="small"
                                    onClick={handleLogin}
                                    className="flex-1"
                                >
                                    Login
                                </Button>
                                <Button
                                    size="small"
                                    onClick={handleGetStarted}
                                    className="flex-1"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GUEST_PATH } from '../../routes/guest/GuestPaths';
import { LANDING_SECTIONS, UI_TEXT } from '../../utils/constants/landingSections';
import Button from '../common/Buttons/ButtonComponent.jsx';

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
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link 
                            to={GUEST_PATH.LANDING} 
                            className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text hover:scale-105 transition-all duration-300"
                            style={{
                                WebkitTextFillColor: 'transparent',
                                backgroundImage: 'linear-gradient(90deg, #60A5FA, #A855F7)',
                                WebkitBackgroundClip: 'text',
                                textShadow: '0 0 20px rgba(96, 165, 250, 0.5)'
                            }}
                        >
                            {UI_TEXT.APP_NAME}
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            <Button
                                variant="glass-nav"
                                size="nav"
                                onClick={() => document.querySelector(LANDING_SECTIONS.FEATURES)?.scrollIntoView({ behavior: 'smooth' })}
                                className="group"
                            >
                                <span className="relative z-10">{UI_TEXT.NAV_FEATURES}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Button>
                            <Button
                                variant="glass-nav"
                                size="nav"
                                onClick={() => document.querySelector(LANDING_SECTIONS.HOW_IT_WORKS)?.scrollIntoView({ behavior: 'smooth' })}
                                className="group"
                            >
                                <span className="relative z-10">{UI_TEXT.NAV_HOW_IT_WORKS}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Button>
                            <Button
                                variant="glass-nav"
                                size="nav"
                                onClick={() => document.querySelector(LANDING_SECTIONS.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
                                className="group"
                            >
                                <span className="relative z-10">{UI_TEXT.NAV_CONTACT}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Button>
                        </div>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleLogin}
                            className="text-foreground/80 hover:text-primary"
                        >
                            {UI_TEXT.BUTTON_LOGIN}
                        </Button>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={handleGetStarted}
                            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                        >
                            {UI_TEXT.BUTTON_GET_STARTED}
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="glass-nav"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden backdrop-blur-lg bg-white/5 border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                document.querySelector(LANDING_SECTIONS.FEATURES)?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className="w-full justify-start text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                        >
                            {UI_TEXT.NAV_FEATURES}
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                document.querySelector(LANDING_SECTIONS.HOW_IT_WORKS)?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className="w-full justify-start text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                        >
                            {UI_TEXT.NAV_HOW_IT_WORKS}
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                document.querySelector(LANDING_SECTIONS.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className="w-full justify-start text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                        >
                            {UI_TEXT.NAV_CONTACT}
                        </Button>
                        <div className="pt-4 pb-3 border-t border-white/10">
                            <div className="flex items-center px-3 space-x-3">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleLogin}
                                    className="flex-1"
                                >
                                    {UI_TEXT.BUTTON_LOGIN}
                                </Button>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={handleGetStarted}
                                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                                >
                                    {UI_TEXT.BUTTON_GET_STARTED}
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

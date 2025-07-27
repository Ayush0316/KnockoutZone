import React from 'react';
import { Link } from 'react-router-dom';
import { GUEST_PATH } from '../../routes/guest/GuestPaths';
import { LANDING_SECTIONS, SOCIAL_LINKS, UI_TEXT } from '../../utils/constants/landingSections';
import Button from '../common/Buttons/ButtonComponent.jsx';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: UI_TEXT.NAV_FEATURES, href: LANDING_SECTIONS.FEATURES },
            { name: 'Pricing', href: LANDING_SECTIONS.PRICING },
            { name: 'Tournament Types', href: LANDING_SECTIONS.TYPES },
            { name: 'Mobile App', href: LANDING_SECTIONS.MOBILE }
        ],
        company: [
            { name: 'About Us', href: LANDING_SECTIONS.ABOUT },
            { name: UI_TEXT.NAV_CONTACT, href: LANDING_SECTIONS.CONTACT },
            { name: 'Careers', href: LANDING_SECTIONS.CAREERS },
            { name: 'Press Kit', href: LANDING_SECTIONS.PRESS }
        ],
        support: [
            { name: 'Help Center', href: LANDING_SECTIONS.HELP },
            { name: 'Documentation', href: LANDING_SECTIONS.DOCS },
            { name: 'API Reference', href: LANDING_SECTIONS.API },
            { name: 'Community', href: LANDING_SECTIONS.COMMUNITY }
        ],
        legal: [
            { name: 'Privacy Policy', href: LANDING_SECTIONS.PRIVACY },
            { name: 'Terms of Service', href: LANDING_SECTIONS.TERMS },
            { name: 'Cookie Policy', href: LANDING_SECTIONS.COOKIES },
            { name: 'GDPR', href: LANDING_SECTIONS.GDPR }
        ]
    };

    const socialLinks = [
        { name: 'Twitter', href: SOCIAL_LINKS.TWITTER, icon: '🐦' },
        { name: 'Facebook', href: SOCIAL_LINKS.FACEBOOK, icon: '📘' },
        { name: 'Instagram', href: SOCIAL_LINKS.INSTAGRAM, icon: '📷' },
        { name: 'LinkedIn', href: SOCIAL_LINKS.LINKEDIN, icon: '💼' },
        { name: 'YouTube', href: SOCIAL_LINKS.YOUTUBE, icon: '📹' }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-background via-card to-background overflow-hidden">
            {/* Decorative elements - maintaining glassmorphism theme */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent"></div>
                <div className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl"></div>
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
            </div>

            <div className="relative z-10">
                {/* Newsletter section */}
                <div className="border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Stay Updated with Tournament Insights
                            </h3>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Get the latest tips, tournament management strategies, and feature updates delivered to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg backdrop-blur-lg bg-white/5 border border-white/20 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                />
                                <Button 
                                    variant="primary"
                                    className="hover:scale-105 hover:shadow-glow-primary"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main footer content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {/* Brand section */}
                        <div className="lg:col-span-2">
                            <Link to={GUEST_PATH.LANDING} className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {UI_TEXT.APP_NAME}
                            </Link>
                            <p className="text-muted-foreground mt-4 leading-relaxed">
                                The ultimate tournament management platform. Create, manage, and run tournaments with ease.
                            </p>
                            
                            {/* Social links */}
                            <div className="flex space-x-4 mt-6">
                                {socialLinks.map((social) => (
                                    <Button
                                        key={social.name}
                                        variant="glass-social"
                                        size="social-icon"
                                        onClick={() => window.open(social.href, '_blank')}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Product links */}
                        <div>
                            <h4 className="text-foreground font-semibold mb-4">Product</h4>
                            <ul className="space-y-3">
                                {footerLinks.product.map((link) => (
                                    <li key={link.name}>
                                        <Button
                                            variant="ghost"
                                            size="footer-link"
                                            onClick={() => {
                                                if (link.href.startsWith('#')) {
                                                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                                } else {
                                                    window.open(link.href, '_blank');
                                                }
                                            }}
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company links */}
                        <div>
                            <h4 className="text-foreground font-semibold mb-4">Company</h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Button
                                            variant="ghost"
                                            size="footer-link"
                                            onClick={() => {
                                                if (link.href.startsWith('#')) {
                                                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                                } else {
                                                    window.open(link.href, '_blank');
                                                }
                                            }}
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support links */}
                        <div>
                            <h4 className="text-foreground font-semibold mb-4">Support</h4>
                            <ul className="space-y-3">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <Button
                                            variant="ghost"
                                            size="footer-link"
                                            onClick={() => {
                                                if (link.href.startsWith('#')) {
                                                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                                } else {
                                                    window.open(link.href, '_blank');
                                                }
                                            }}
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal links */}
                        <div>
                            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <Button
                                            variant="ghost"
                                            size="footer-link"
                                            onClick={() => {
                                                if (link.href.startsWith('#')) {
                                                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                                } else {
                                                    window.open(link.href, '_blank');
                                                }
                                            }}
                                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-muted-foreground text-sm">
                                © {currentYear} {UI_TEXT.APP_NAME}. All rights reserved.
                            </div>
                            <div className="flex items-center space-x-6 mt-4 md:mt-0">
                                <span className="text-muted-foreground text-sm">Made with ❤️ for tournament organizers</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-game-success rounded-full animate-pulse"></div>
                                    <span className="text-muted-foreground text-sm">All systems operational</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

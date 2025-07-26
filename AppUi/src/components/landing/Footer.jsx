import { Link } from 'react-router-dom';
import Button from '../common/Buttons/ButtonComponent.jsx';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Features', href: '#features' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Tournament Types', href: '#types' },
            { name: 'Mobile App', href: '#mobile' }
        ],
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Contact', href: '#contact' },
            { name: 'Careers', href: '#careers' },
            { name: 'Press Kit', href: '#press' }
        ],
        support: [
            { name: 'Help Center', href: '#help' },
            { name: 'Documentation', href: '#docs' },
            { name: 'API Reference', href: '#api' },
            { name: 'Community', href: '#community' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '#privacy' },
            { name: 'Terms of Service', href: '#terms' },
            { name: 'Cookie Policy', href: '#cookies' },
            { name: 'GDPR', href: '#gdpr' }
        ]
    };

    const socialLinks = [
        { name: 'Twitter', href: '#', icon: '🐦' },
        { name: 'Facebook', href: '#', icon: '📘' },
        { name: 'Instagram', href: '#', icon: '📷' },
        { name: 'LinkedIn', href: '#', icon: '💼' },
        { name: 'YouTube', href: '#', icon: '📹' }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Newsletter section */}
                <div className="border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Stay Updated with Tournament Insights
                            </h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                Get the latest tips, tournament management strategies, and feature updates delivered to your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <Button 
                                    variant="primary"
                                    className="text-white"
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
                            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                KnockoutZone
                            </Link>
                            <p className="text-gray-300 mt-4 leading-relaxed">
                                The ultimate tournament management platform. Create, manage, and run tournaments with ease.
                            </p>
                            
                            {/* Social links */}
                            <div className="flex space-x-4 mt-6">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-10 h-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-lg hover:bg-white/20 transition-colors duration-300"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Product links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-3">
                                {footerLinks.product.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Support</h4>
                            <ul className="space-y-3">
                                {footerLinks.support.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Legal</h4>
                            <ul className="space-y-3">
                                {footerLinks.legal.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                                            {link.name}
                                        </a>
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
                            <div className="text-gray-300 text-sm">
                                © {currentYear} KnockoutZone. All rights reserved.
                            </div>
                            <div className="flex items-center space-x-6 mt-4 md:mt-0">
                                <span className="text-gray-300 text-sm">Made with ❤️ for tournament organizers</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-gray-300 text-sm">All systems operational</span>
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

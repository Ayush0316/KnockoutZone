const Footer = () => {
    const footerLinks = {
        product: [
            { name: "Features", href: "#features" },
            { name: "Tournaments", href: "#tournaments" },
            { name: "Pricing", href: "#pricing" },
            { name: "API", href: "#api" }
        ],
        company: [
            { name: "About", href: "#about" },
            { name: "Blog", href: "#blog" },
            { name: "Careers", href: "#careers" },
            { name: "Contact", href: "#contact" }
        ],
        resources: [
            { name: "Documentation", href: "#docs" },
            { name: "Help Center", href: "#help" },
            { name: "Community", href: "#community" },
            { name: "Status", href: "#status" }
        ],
        legal: [
            { name: "Privacy", href: "#privacy" },
            { name: "Terms", href: "#terms" },
            { name: "Security", href: "#security" },
            { name: "Cookies", href: "#cookies" }
        ]
    };

    const socialLinks = [
        { name: "GitHub", icon: "🐙", href: "https://github.com/Ayush0316/KnockoutZone" },
        { name: "Discord", icon: "💬", href: "https://discord.gg/txrsgvV5" },
        { name: "Twitter", icon: "🐦", href: "#twitter" },
        { name: "LinkedIn", icon: "💼", href: "https://www.linkedin.com/in/ayushkansal0316" }
    ];

    return (
        <footer className="relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>

            <div className="relative z-10">
                {/* Main footer content */}
                <div className="backdrop-blur-lg bg-white/5 border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                            {/* Brand section */}
                            <div className="lg:col-span-2">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">K</span>
                                    </div>
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        KnockoutZone
                                    </h3>
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                                    The ultimate tournament management platform. Create, manage, and track tournaments with ease.
                                </p>
                                
                                {/* Social links */}
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="group w-10 h-10 backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                            title={social.name}
                                        >
                                            <span className="group-hover:scale-110 transition-transform duration-300">
                                                {social.icon}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Links sections */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">Product</h4>
                                <ul className="space-y-3">
                                    {footerLinks.product.map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={link.href}
                                                className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-4">Company</h4>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={link.href}
                                                className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-4">Resources</h4>
                                <ul className="space-y-3">
                                    {footerLinks.resources.map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={link.href}
                                                className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-4">Legal</h4>
                                <ul className="space-y-3">
                                    {footerLinks.legal.map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={link.href}
                                                className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Newsletter signup */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Stay Updated
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Get the latest updates about new features and tournament tips.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="backdrop-blur-lg bg-white/5 border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm">
                                © 2025 KnockoutZone. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-6 mt-4 md:mt-0">
                                <span className="text-gray-400 text-sm">Made with ❤️ for tournament organizers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

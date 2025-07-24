const Features = () => {
    const features = [
        {
            icon: "🏆",
            title: "Create Tournaments",
            description: "Set up single elimination tournaments with customizable brackets and settings in minutes."
        },
        {
            icon: "👥",
            title: "Auto Team Assignment",
            description: "Automatically assign players to teams with intelligent algorithms for balanced competition."
        },
        {
            icon: "⚡",
            title: "Real-time Score Updates",
            description: "Track scores and match progress in real-time with instant notifications and updates."
        },
        {
            icon: "📊",
            title: "Analytics Dashboard",
            description: "Get detailed insights into tournament performance, player statistics, and match history."
        },
        {
            icon: "🎮",
            title: "Multiple Game Formats",
            description: "Support for various tournament formats including single elimination and league play."
        },
        {
            icon: "📱",
            title: "Mobile Responsive",
            description: "Access your tournaments anywhere with our fully responsive design on all devices."
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-purple-50 to-blue-50"></div>
            
            {/* Floating elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                        Powerful Features
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to run successful tournaments, from creation to completion.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:bg-white/30"
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover indicator */}
                            <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-16">
                    <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Join thousands of tournament organizers who trust KnockoutZone.
                        </p>
                        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Start Your Tournament
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

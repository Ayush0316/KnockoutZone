const Features = () => {
    const features = [
        {
            icon: "🏆",
            title: "Tournament Creation",
            description: "Create custom tournaments with flexible bracket systems, elimination formats, and participant management.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: "👥",
            title: "Player Management",
            description: "Easy player registration, team formation, and skill-based matchmaking for fair competition.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: "📊",
            title: "Real-time Scoring",
            description: "Live score updates, match progress tracking, and instant leaderboard refreshes for all participants.",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: "📱",
            title: "Mobile Responsive",
            description: "Access your tournaments from any device with our fully responsive design and mobile app.",
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: "🔒",
            title: "Secure & Reliable",
            description: "Enterprise-grade security with 99.9% uptime guarantee and automatic data backups.",
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            icon: "📈",
            title: "Analytics Dashboard",
            description: "Comprehensive statistics, performance metrics, and detailed reports for organizers and players.",
            gradient: "from-teal-500 to-blue-500"
        }
    ];

    return (
        <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-20 right-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                        Powerful Features
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to create, manage, and run successful tournaments. Built for organizers, loved by players.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group relative backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-8 hover:bg-white/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* Background gradient on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                            
                            {/* Icon */}
                            <div className="relative z-10 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-white/50 to-white/30 border border-white/40 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-100"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl p-8 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Ready to revolutionize your tournaments?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Join thousands of organizers who trust KnockoutZone for their tournament management needs.
                        </p>
                        <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Start Your Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Features;

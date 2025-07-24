const About = () => {
    const steps = [
        {
            step: "01",
            title: "Create Your Tournament",
            description: "Set up your tournament with custom rules, brackets, and participant limits in just a few clicks."
        },
        {
            step: "02",
            title: "Player Registration",
            description: "Players register and get automatically assigned to teams based on skill level and preferences."
        },
        {
            step: "03",
            title: "Match Scheduling",
            description: "Our system automatically generates brackets and schedules matches for optimal tournament flow."
        },
        {
            step: "04",
            title: "Real-time Management",
            description: "Track scores, update results, and manage the tournament progress with live updates for all participants."
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 left-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-3000"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        From tournament creation to winner announcement, we make the entire process seamless and enjoyable.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Steps */}
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div 
                                key={index}
                                className="group flex items-start space-x-6 backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:shadow-xl"
                            >
                                {/* Step number */}
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {step.step}
                                    </div>
                                </div>
                                
                                {/* Step content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right side - Visual representation */}
                    <div className="relative">
                        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl">
                            {/* Tournament bracket visualization */}
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Live Tournament View</h3>
                                </div>
                                
                                {/* Mock bracket */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="p-3 bg-white/40 rounded-lg border border-white/50">
                                            <div className="text-sm font-medium text-gray-700">Team Alpha vs Team Beta</div>
                                            <div className="text-xs text-gray-500 mt-1">Quarter Final - Live</div>
                                        </div>
                                        <div className="p-3 bg-white/40 rounded-lg border border-white/50">
                                            <div className="text-sm font-medium text-gray-700">Team Gamma vs Team Delta</div>
                                            <div className="text-xs text-gray-500 mt-1">Quarter Final - Upcoming</div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-3 bg-white/40 rounded-lg border border-white/50">
                                            <div className="text-sm font-medium text-gray-700">Team Echo vs Team Foxtrot</div>
                                            <div className="text-xs text-green-600 mt-1">Quarter Final - Completed</div>
                                        </div>
                                        <div className="p-3 bg-white/40 rounded-lg border border-white/50">
                                            <div className="text-sm font-medium text-gray-700">Team Golf vs Team Hotel</div>
                                            <div className="text-xs text-gray-500 mt-1">Quarter Final - Scheduled</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 mt-8">
                                    <div className="text-center p-3 bg-white/30 rounded-lg">
                                        <div className="text-lg font-bold text-blue-600">24</div>
                                        <div className="text-xs text-gray-600">Players</div>
                                    </div>
                                    <div className="text-center p-3 bg-white/30 rounded-lg">
                                        <div className="text-lg font-bold text-purple-600">8</div>
                                        <div className="text-xs text-gray-600">Teams</div>
                                    </div>
                                    <div className="text-center p-3 bg-white/30 rounded-lg">
                                        <div className="text-lg font-bold text-indigo-600">7</div>
                                        <div className="text-xs text-gray-600">Matches</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce animation-delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

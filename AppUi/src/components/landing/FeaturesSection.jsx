import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GUEST_PATH } from '../../routes/guest/GuestPaths';
import { UI_TEXT } from '../../utils/constants/landingConstants';
import { SECTION_IDS } from '../../utils/constants/landingSections';
import Button from '../common/Buttons/ButtonComponent';
import GlassCard from '../common/Cards/GlassCard';

const FeaturesSection = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate(GUEST_PATH.LOGIN);
    };

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
        <section id={SECTION_IDS.FEATURES} className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background effects - maintaining glassmorphism theme */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50"></div>
                
                {/* Floating elements */}
                <div className="absolute top-20 right-1/4 w-32 h-32 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <GlassCard variant="badge" className="mb-6">
                        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Powerful Features</span>
                    </GlassCard>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                        Powerful Features
                    </h2>
                    
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to create, manage, and run successful tournaments. Built for organizers, loved by players.
                    </p>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* Background gradient on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                            
                            {/* Icon */}
                            <div className="relative z-10 mb-6">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animation-delay-100"></div>
                            
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Ready to revolutionize your tournaments?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Join thousands of organizers who trust KnockoutZone for their tournament management needs.
                        </p>
                        <Button 
                            variant="primary" 
                            size="lg"
                            className="text-lg hover:scale-105 hover:shadow-glow-primary transition-all duration-300"
                            onClick={handleGetStarted}
                        >
                            {UI_TEXT.BUTTON_START_TRIAL}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

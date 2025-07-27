import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GUEST_PATH } from '../../routes/guest/GuestPaths';
import { LANDING_SECTIONS, SECTION_IDS, UI_TEXT } from '../../utils/constants/landingSections';
import Button from '../common/Buttons/ButtonComponent.jsx';
import GlassCard from '../common/Cards/GlassCard.jsx';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate(GUEST_PATH.LOGIN);
    };

    const handleLearnMore = () => {
        document.getElementById(SECTION_IDS.FEATURES)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id={SECTION_IDS.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient - adapting to glassmorphism theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
            </div>

            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-4 h-4 bg-primary/60 rounded-full animate-bounce"></div>
                <div className="absolute top-20 right-20 w-3 h-3 bg-secondary/60 rounded-full animate-bounce animation-delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-5 h-5 bg-accent/60 rounded-full animate-bounce animation-delay-2000"></div>
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-primary/60 rounded-full animate-bounce animation-delay-3000"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Badge */}
                    <GlassCard variant="badge" className="mb-8 text-muted-foreground">
                        <span className="w-2 h-2 bg-game-success rounded-full mr-2 animate-pulse"></span>
                        New: Real-time Tournament Management
                    </GlassCard>

                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight relative animate-fade-in">
                        {/* Fallback background for better visibility */}
                        <div className="absolute inset-0 text-5xl md:text-7xl font-black text-white/10 blur-lg">
                            Tournament Management<br />Made Simple
                        </div>
                        <div className="relative z-10">
                            <span className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x font-extrabold" 
                                  style={{
                                      WebkitTextStroke: '0.5px rgba(255,255,255,0.05)',
                                      textShadow: '0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(147, 51, 234, 0.2)',
                                      filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))'
                                  }}>
                                Tournament
                            </span>{' '}
                            <span className="bg-gradient-to-r from-pink-300 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-gradient-x font-extrabold"
                                  style={{
                                      WebkitTextStroke: '0.5px rgba(255,255,255,0.05)',
                                      textShadow: '0 0 15px rgba(236, 72, 153, 0.3), 0 0 30px rgba(147, 51, 234, 0.2)',
                                      filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.4))'
                                  }}>
                                Management
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-emerald-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x font-extrabold"
                                  style={{
                                      WebkitTextStroke: '0.5px rgba(255,255,255,0.05)',
                                      textShadow: '0 0 15px rgba(52, 211, 153, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)',
                                      filter: 'drop-shadow(0 0 10px rgba(52, 211, 153, 0.4))'
                                  }}>
                                Made Simple
                            </span>
                        </div>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                        Create, manage, and run tournaments with ease. From player registration to real-time score tracking, 
                        we've got everything you need to host successful competitions.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button
                            onClick={handleGetStarted}
                            variant="primary"
                            size="lg"
                            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:scale-105 hover:shadow-glow-primary transition-all duration-300"
                        >
                            {UI_TEXT.BUTTON_GET_STARTED_FREE}
                        </Button>
                        <Button
                            onClick={handleLearnMore}
                            variant="glass-outline"
                            size="lg"
                        >
                            {UI_TEXT.BUTTON_LEARN_MORE}
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <GlassCard variant="stat">
                            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                            <div className="text-sm text-muted-foreground">Tournaments</div>
                        </GlassCard>
                        <GlassCard variant="stat">
                            <div className="text-3xl font-bold text-secondary mb-2">50K+</div>
                            <div className="text-sm text-muted-foreground">Players</div>
                        </GlassCard>
                        <GlassCard variant="stat">
                            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                            <div className="text-sm text-muted-foreground">Uptime</div>
                        </GlassCard>
                        <GlassCard variant="stat">
                            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-sm text-muted-foreground">Support</div>
                        </GlassCard>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

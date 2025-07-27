import React from 'react';
import { Plus, Users, Play, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import Button from '../common/Buttons/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import { GUEST_PATH } from '../../routes/guest/GuestPaths';
import { SECTION_IDS } from '../../utils/constants/landingSections';

const HowItWorksSection = () => {
  const navigate = useNavigate();

  const steps = [
    {
      step: "01",
      title: "Create Your Tournament",
      description: "Set up your tournament with custom rules, brackets, and participant limits in just a few clicks.",
      icon: <Plus className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Player Registration",
      description: "Players register and get automatically assigned to teams based on skill level and preferences.",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Match Scheduling",
      description: "Our system automatically generates brackets and schedules matches for optimal tournament flow.",
      icon: <Play className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Real-time Management",
      description: "Track scores, update results, and manage the tournament progress with live updates for all participants.",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  return (
    <section id={SECTION_IDS.HOW_IT_WORKS} className="relative py-24 px-4 overflow-hidden">
      {/* Background elements with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background to-background/95">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <Play className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">How It Works</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Tournament Creation
            <br />
            Made Simple
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            From tournament creation to winner announcement, we make the entire process seamless and enjoyable.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group flex items-start space-x-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                </div>
                
                {/* Step content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Visual representation */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              {/* Tournament bracket visualization */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Live Tournament View
                  </h3>
                </div>
                
                {/* Mock bracket */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="text-sm font-medium text-foreground">Team Alpha vs Team Beta</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-game-success rounded-full animate-pulse"></div>
                        <div className="text-xs text-game-success">Quarter Final - Live</div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="text-sm font-medium text-foreground">Team Gamma vs Team Delta</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="text-xs text-primary">Quarter Final - Upcoming</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="text-sm font-medium text-foreground">Team Echo vs Team Foxtrot</div>
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle className="w-3 h-3 text-game-success" />
                        <div className="text-xs text-game-success">Quarter Final - Completed</div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="text-sm font-medium text-foreground">Team Golf vs Team Hotel</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                        <div className="text-xs text-muted-foreground">Quarter Final - Scheduled</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-lg font-bold text-primary">24</div>
                    <div className="text-xs text-muted-foreground">Players</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-lg font-bold text-secondary">8</div>
                    <div className="text-xs text-muted-foreground">Teams</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-lg font-bold text-accent">7</div>
                    <div className="text-xs text-muted-foreground">Matches</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/60 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/60 rounded-full opacity-60 animate-bounce delay-1000"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ready to Create Your First Tournament?
            </h3>
            <p className="text-foreground/80 mb-6 max-w-lg mx-auto">
              Join thousands of organizers who have discovered the easiest way to manage competitive gaming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate(GUEST_PATH.REGISTER)}
              >
                Start Creating
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/5 backdrop-blur-md border-2 border-primary/30 hover:bg-primary/10 hover:border-primary/60"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

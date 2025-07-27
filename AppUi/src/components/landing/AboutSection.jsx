import React from 'react';
import { Trophy, Users, Clock, Star, Shield, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: <Trophy className="w-8 h-8" />, number: "10K+", label: "Tournaments Created" },
    { icon: <Users className="w-8 h-8" />, number: "50K+", label: "Active Players" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Platform Uptime" },
    { icon: <Star className="w-8 h-8" />, number: "4.9", label: "User Rating" }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Fair Play",
      description: "We ensure every tournament is conducted with complete transparency and fairness, using advanced algorithms to prevent cheating and maintain competitive integrity."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description: "Experience real-time updates, instant bracket generation, and lightning-fast match results that keep the excitement flowing without any delays."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community First",
      description: "Built by gamers, for gamers. Our platform fosters a vibrant community where players can connect, compete, and celebrate their victories together."
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        {/* Animated gradient orbs */}
        <div className="absolute top-40 left-10 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">About KnockOutZone</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Revolutionizing 
            <br />
            Tournament Gaming
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            KnockOutZone is more than just a tournament platform – it's the future of competitive gaming. 
            We've reimagined how tournaments should work, combining cutting-edge technology with 
            passionate community-driven design.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-black text-foreground mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Born from Passion, Built for Champions
            </h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Founded by a team of passionate gamers and tournament organizers, KnockOutZone emerged 
                from a simple frustration: existing tournament platforms were clunky, unfair, and 
                didn't capture the true spirit of competitive gaming.
              </p>
              <p>
                We spent countless hours analyzing what makes tournaments exciting – the thrill of 
                competition, the satisfaction of fair play, and the joy of community. Then we built 
                a platform that amplifies these elements while eliminating the common pain points.
              </p>
              <p>
                Today, KnockOutZone powers thousands of tournaments worldwide, from casual community 
                events to major esports championships, always staying true to our core mission: 
                making competitive gaming accessible, fair, and incredibly fun.
              </p>
            </div>
          </div>
          
          <div className="relative">
            {/* Glassmorphism image placeholder */}
            <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-md border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[size:20px_20px]"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <Trophy className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground/80">Champion's Vision</p>
                  <p className="text-sm text-muted-foreground mt-2">Where every player is a champion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Core Values
          </h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            These principles guide everything we do, from feature development to community interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 mx-auto bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                  {value.icon}
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

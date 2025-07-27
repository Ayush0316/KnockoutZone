import React from "react";
import Navigation from "../components/landing/Navigation";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import AboutSection from "../components/landing/AboutSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

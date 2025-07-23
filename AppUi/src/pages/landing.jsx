import Navigation from "../components/landing/Navigation";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import About from "../components/landing/About";
import Footer from "../components/landing/Footer";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <main>
                <Hero />
                <div id="features">
                    <Features />
                </div>
                <div id="about">
                    <About />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
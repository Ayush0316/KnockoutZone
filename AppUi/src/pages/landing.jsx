
import Navigation from "../components/landing/Navigation";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import About from "../components/landing/About";
import Footer from "../components/landing/Footer";
import Button from "../components/common/Buttons/ButtonComponent";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Navigation />
            <Hero />
            <Features />
            <About />
            <div className="text-center my-8">
                <Button variant="secondary">Login</Button>
            </div>
            <Footer />
        </div>
    );
};
export default LandingPage;


import Navigation from "../components/landing/Navigation";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import About from "../components/landing/About";
import Footer from "../components/landing/Footer";
import Button from "../components/common/Buttons/ButtonComponent";
import { useDispatch } from "react-redux";
import { showToast } from "../store/slices/toastSlice";


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

export default function Landing() {
  const dispatch = useDispatch();
  const btnHandle = () => {
    dispatch(showToast({ 
        message: "Login Successful!", 
        type: "success" }));
  };
  return (
    <div>
      Landing Page. <br/>
      <Button variant="secondary" onClick={btnHandle}>
        Login
      </Button>
    </div>
  );
}


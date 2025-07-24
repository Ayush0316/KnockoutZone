import { useNavigate } from "react-router-dom";
import { GUEST_PATH } from "../../routes/guest/GuestPaths";

const Hero = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate(GUEST_PATH.LOGIN);
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100"></div>
            
            {/* Floating orbs for visual effect */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

            {/* Main content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Glassmorphism card */}
                <div className="backdrop-blur-lg bg-white/20 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
                    {/* Logo/Title */}
                    <div className="mb-8">
                        <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                            KnockoutZone
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
                        The Ultimate Tournament Management Platform
                    </p>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Create, manage, and track tournaments with ease. From player registration to real-time score updates, we've got everything covered.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button 
                            onClick={handleGetStarted}
                            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            Get Started
                        </button>
                        
                        <button className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Feature badges */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12">
                        <span className="px-4 py-2 backdrop-blur-lg bg-white/30 border border-white/40 rounded-full text-sm font-medium text-gray-700">
                            🏆 Tournament Creation
                        </span>
                        <span className="px-4 py-2 backdrop-blur-lg bg-white/30 border border-white/40 rounded-full text-sm font-medium text-gray-700">
                            ⚡ Real-time Updates
                        </span>
                        <span className="px-4 py-2 backdrop-blur-lg bg-white/30 border border-white/40 rounded-full text-sm font-medium text-gray-700">
                            👥 Auto Team Assignment
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

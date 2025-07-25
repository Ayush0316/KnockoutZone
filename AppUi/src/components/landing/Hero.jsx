import { useNavigate } from 'react-router-dom';
import { GUEST_PATH } from '../../routes/guest/GuestPaths';
import Button from '../common/Buttons/ButtonComponent.jsx';

const Hero = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate(GUEST_PATH.LOGIN);
    };

    const handleLearnMore = () => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bounce animation-delay-1000"></div>
                <div className="absolute bottom-20 left-20 w-5 h-5 bg-indigo-400 rounded-full opacity-60 animate-bounce animation-delay-2000"></div>
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-bounce animation-delay-3000"></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-lg bg-white/20 border border-white/30 text-sm font-medium text-gray-700 mb-8">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                        New: Real-time Tournament Management
                    </div>

                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
                        Tournament <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Management</span>
                        <br />
                        Made Simple
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Create, manage, and run tournaments with ease. From player registration to real-time score tracking, 
                        we've got everything you need to host successful competitions.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button
                            onClick={handleGetStarted}
                            variant="primary"
                            size="lg"
                        >
                            Get Started Free
                        </Button>
                        <Button
                            onClick={handleLearnMore}
                            variant="secondary"
                            size="lg"
                        >
                            Learn More
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 min-w-[120px]">
                            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                            <div className="text-sm text-gray-600">Tournaments</div>
                        </div>
                        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 min-w-[120px]">
                            <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                            <div className="text-sm text-gray-600">Players</div>
                        </div>
                        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 min-w-[120px]">
                            <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
                            <div className="text-sm text-gray-600">Uptime</div>
                        </div>
                        <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 min-w-[120px]">
                            <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
                            <div className="text-sm text-gray-600">Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;

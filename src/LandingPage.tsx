import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
            <div className="text-center">
                <h1 className="my-4 text-5xl font-bold text-gray-900">
                    Welcome to Your Website
                </h1>
                <p className="my-4 text-xl text-gray-600 max-w-2xl">
                    Create something amazing with this modern React template
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={() => navigate("/page-two")}
                        className="rounded bg-blue-500 px-8 py-3 font-bold text-white hover:bg-blue-700 transition"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

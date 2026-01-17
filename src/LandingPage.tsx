import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="my-4 text-4xl font-bold">
                Welcome to Your Template
            </h1>
            <p className="my-2 text-lg">Create something amazing</p>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate("/page-two")}
                    className="rounded bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default LandingPage;

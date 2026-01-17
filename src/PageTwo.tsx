import { useNavigate } from "react-router-dom";

const PageTwo: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">
                    About Us
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Add your about page content here. This is a flexible
                    template ready for customization.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button
                        onClick={() => navigate("/")}
                        className="rounded px-6 py-2 bg-gray-500 text-white hover:bg-gray-700 transition"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => navigate("/page-three")}
                        className="rounded px-6 py-2 bg-blue-500 text-white hover:bg-blue-700 transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageTwo;

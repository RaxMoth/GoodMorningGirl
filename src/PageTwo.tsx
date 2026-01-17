import { useNavigate } from "react-router-dom";

const PageTwo: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-6">Page Two Content</h1>
            <p className="my-2 text-lg">Add your content here</p>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate("/")}
                    className="rounded px-4 py-2 bg-gray-500 text-white hover:bg-gray-700"
                >
                    Back
                </button>
                <button
                    onClick={() => navigate("/page-three")}
                    className="rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PageTwo;

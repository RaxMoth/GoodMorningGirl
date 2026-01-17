import React from "react";
import { useNavigate } from "react-router-dom";

const PageThree: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <div className="my-4 text-4xl font-bold">Page Three</div>
            <p className="my-2 text-lg">Customize this page</p>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate("/page-two")}
                    className="rounded px-4 py-2 bg-gray-500 text-white hover:bg-gray-700"
                >
                    Back
                </button>
                <button
                    onClick={() => navigate("/page-four")}
                    className="rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PageThree;

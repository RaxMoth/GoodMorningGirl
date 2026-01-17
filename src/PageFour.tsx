import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageFour: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 100 / 60;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">
                    Portfolio
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    View our work and projects...
                </p>
                <div className="mb-8">
                    <p className="text-gray-600 mb-3">
                        Loading portfolio items...
                    </p>
                    <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-8">
                    <button
                        onClick={() => navigate("/page-three")}
                        className="rounded px-6 py-2 bg-gray-500 text-white hover:bg-gray-700 transition"
                    >
                        Back
                    </button>
                    {progress === 100 && (
                        <button
                            onClick={() => navigate("/page-five")}
                            className="rounded px-6 py-2 bg-blue-500 text-white hover:bg-blue-700 transition"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageFour;

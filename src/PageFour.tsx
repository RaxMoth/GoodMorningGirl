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
        <div className="flex h-screen flex-col items-center justify-center">
            <div className="my-4 text-4xl font-bold">Page Four</div>
            <p className="my-2 text-lg">Loading content...</p>
            <div className="w-3/4 h-4 bg-gray-300 rounded-full overflow-hidden my-4">
                <div
                    className="h-full bg-blue-500"
                    style={{ width: `${progress}%` }}
                />
            </div>
            {progress === 100 && (
                <button
                    onClick={() => navigate("/page-five")}
                    className="mt-4 rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-700"
                >
                    Continue
                </button>
            )}
        </div>
    );
};

export default PageFour;

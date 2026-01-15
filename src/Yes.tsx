import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Yes: React.FC = () => {
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
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="my-4 text-4xl font-bold">
                First 69 Kisses for the Eumel !!!
            </div>
            <div className="w-3/4 h-4 bg-gray-300 rounded-full overflow-hidden my-4">
                <div
                    className="h-full bg-green-500"
                    style={{ width: `${progress}%` }}
                />
            </div>
            {progress === 100 && (
                <button
                    onClick={() => navigate("/events")}
                    className="mt-4 rounded px-4 py-2 text-black bg-gradient-to-b from-pink-200 to-pink-100"
                >
                    Now we can continue
                </button>
            )}
        </div>
    );
};

export default Yes;

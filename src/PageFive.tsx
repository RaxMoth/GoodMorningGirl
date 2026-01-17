import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const itemsData = [
    {
        title: "Item One",
        description: "Add your first item description here",
    },
    {
        title: "Item Two",
        description: "Add your second item description here",
    },
    {
        title: "Item Three",
        description: "Add your third item description here",
    },
];

const PageFive: React.FC = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentItem < itemsData.length - 1) {
            setCurrentItem(currentItem + 1);
        }
    };

    const handlePrevious = () => {
        if (currentItem > 0) {
            setCurrentItem(currentItem - 1);
        }
    };

    const handleFinish = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">
                    {itemsData[currentItem].title}
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    {itemsData[currentItem].description}
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button
                        onClick={handlePrevious}
                        className="rounded px-6 py-2 bg-gray-500 text-white hover:bg-gray-700 transition disabled:opacity-50"
                        disabled={currentItem === 0}
                    >
                        Back
                    </button>
                    {currentItem < itemsData.length - 1 ? (
                        <button
                            onClick={handleNext}
                            className="rounded px-6 py-2 bg-blue-500 text-white hover:bg-blue-700 transition"
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            onClick={handleFinish}
                            className="rounded px-6 py-2 bg-green-500 text-white hover:bg-green-700 transition"
                        >
                            Home
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageFive;

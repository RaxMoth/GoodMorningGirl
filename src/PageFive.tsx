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
        <div className="flex h-screen flex-col items-center justify-center">
            <div className="my-4 text-4xl font-bold">
                {itemsData[currentItem].title}
            </div>
            <p className="my-2 text-lg">{itemsData[currentItem].description}</p>
            <div className="flex justify-between gap-4 mt-8">
                <button
                    onClick={handlePrevious}
                    className="rounded px-4 py-2 bg-gray-500 text-white hover:bg-gray-700"
                    disabled={currentItem === 0}
                >
                    Back
                </button>
                {currentItem < itemsData.length - 1 ? (
                    <button
                        onClick={handleNext}
                        className="rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-700"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        onClick={handleFinish}
                        className="rounded px-4 py-2 bg-green-500 text-white hover:bg-green-700"
                    >
                        Finish
                    </button>
                )}
            </div>
        </div>
    );
};

export default PageFive;

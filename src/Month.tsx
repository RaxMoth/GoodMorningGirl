import React from "react";

interface MonthProps {
    image: string;
    gif: string;
    title: string;
    description: string;
}

const Month: React.FC<MonthProps> = ({ image, gif, title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-200 to-pink-100">
            <h1 className="text-5xl font-bold mb-6 text-red-600">{title}</h1>

            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    Meme of the month:
                </h2>
                <img
                    className="h-[300px] w-auto rounded-lg border-4 border-pink-400"
                    src={image}
                    alt="Favorite Meme"
                />
            </div>

            <p className="text-lg mb-6 px-8 text-center text-gray-700 max-w-2xl">
                {description}
            </p>

            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
                <img
                    className="h-[300px] w-auto rounded-lg border-4 border-pink-400"
                    src={gif}
                    alt="Gif Memory"
                />
            </div>
        </div>
    );
};

export default Month;

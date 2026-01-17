import React from "react";

interface CardProps {
    image?: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-200 to-blue-100">
            <h1 className="text-5xl font-bold mb-6 text-blue-600">{title}</h1>

            {image && (
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 mb-6">
                    <img
                        className="h-[300px] w-auto rounded-lg border-4 border-blue-400"
                        src={image}
                        alt={title}
                    />
                </div>
            )}

            <p className="text-lg mb-6 px-8 text-center text-gray-700 max-w-2xl">
                {description}
            </p>
        </div>
    );
};

export default Card;

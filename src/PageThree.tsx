import React from "react";
import { useNavigate } from "react-router-dom";

const PageThree: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">
                    Services
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Explore our services and what we offer to help your project
                    succeed.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="font-bold text-lg mb-2">Service One</h3>
                        <p className="text-gray-600">
                            Description of your service
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="font-bold text-lg mb-2">Service Two</h3>
                        <p className="text-gray-600">
                            Description of your service
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <h3 className="font-bold text-lg mb-2">
                            Service Three
                        </h3>
                        <p className="text-gray-600">
                            Description of your service
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-8">
                    <button
                        onClick={() => navigate("/page-two")}
                        className="rounded px-6 py-2 bg-gray-500 text-white hover:bg-gray-700 transition"
                    >
                        Back
                    </button>
                    <button
                        onClick={() => navigate("/page-four")}
                        className="rounded px-6 py-2 bg-blue-500 text-white hover:bg-blue-700 transition"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageThree;

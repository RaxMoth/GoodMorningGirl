import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-2xl font-bold hover:text-blue-200"
                    >
                        My Website
                    </Link>
                    <nav className="flex gap-6">
                        <Link to="/" className="hover:text-blue-200 transition">
                            Home
                        </Link>
                        <Link
                            to="/page-two"
                            className="hover:text-blue-200 transition"
                        >
                            About
                        </Link>
                        <Link
                            to="/page-three"
                            className="hover:text-blue-200 transition"
                        >
                            Services
                        </Link>
                        <Link
                            to="/page-four"
                            className="hover:text-blue-200 transition"
                        >
                            Portfolio
                        </Link>
                        <Link
                            to="/page-five"
                            className="hover:text-blue-200 transition"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

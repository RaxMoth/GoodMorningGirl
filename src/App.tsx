import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./LandingPage";
import About from "./About";
import Services from "./Services";
import Features from "./Features";
import Portfolio from "./Portfolio";
import FeatureComponent from "./components/FeatureComponent";

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/feature" element={<FeatureComponent />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

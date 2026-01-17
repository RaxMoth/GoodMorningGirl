import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./LandingPage";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import FeatureComponent from "./components/FeatureComponent";

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/page-two" element={<PageTwo />} />
                    <Route path="/page-three" element={<PageThree />} />
                    <Route path="/page-four" element={<PageFour />} />
                    <Route path="/page-five" element={<PageFive />} />
                    <Route path="/feature" element={<FeatureComponent />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

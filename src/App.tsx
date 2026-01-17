import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import FeatureComponent from "./components/FeatureComponent";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/page-two" element={<PageTwo />} />
                <Route path="/page-three" element={<PageThree />} />
                <Route path="/page-four" element={<PageFour />} />
                <Route path="/page-five" element={<PageFive />} />
                <Route path="/feature" element={<FeatureComponent />} />
            </Routes>
        </Router>
    );
};

export default App;

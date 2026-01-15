import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Yes from "./Yes";
import Events from "./Events";
import MonthsPage from "./MonthPage";
import Talks from "./Talks";
import Valentines from "./Valentines";
import Marry from "./Marry";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/yes" element={<Yes />} />
                <Route path="/events" element={<Events />} />
                <Route path="/months" element={<MonthsPage />} />
                <Route path="/talks" element={<Talks />} />
                <Route path="/valentinesday" element={<Valentines />} />
                <Route path="/valentines" element={<Valentines />} />
                <Route path="/marry" element={<Marry />} />
                <Route path="/marryme" element={<Marry />} />
            </Routes>
        </Router>
    );
};

export default App;

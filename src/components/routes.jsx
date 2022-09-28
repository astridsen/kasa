import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "../pages/homePage";
import LocationPage from "../pages/locationPage";
import AProposPage from "../pages/aProposPage";
import NotFoundPage from "../pages/notFoundPage"

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/location" element={<LocationPage />} exact />
        <Route path="/a-propos" element={<AProposPage />} exact />
        <Route path="*" element={<NotFoundPage />} exact/>
      </Routes>
    </Router>
  );
};

export default index;
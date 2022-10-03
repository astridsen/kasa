import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "../pages/homePage";
import LocationPage from "../pages/locationPage";
import AboutPage from "../pages/aboutPage";
import NotFoundPage from "../pages/notFoundPage";
import Header from './Layout/header';
import Footer from './Layout/footer';

const index = () => {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/location/:id" element={<LocationPage />} exact />
        <Route path="/a-propos" element={<AboutPage />} exact />
        <Route path="*" element={<NotFoundPage />} exact/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default index;
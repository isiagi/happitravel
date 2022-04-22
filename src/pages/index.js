import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "../components/nav/ma";
import Footer from "../components/footer/index";
import HomePage from "./HomePage";
import Courses from '../components/course/Course'

function index() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default index;

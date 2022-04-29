// import {lazy} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import Nav from "../components/nav/ma";
import Footer from "../components/footer/index";
import Courses from "../components/course/Course";
import NotFound from "../components/not/NotFound";
import CourseItem from "../components/course/CourseItem";
import CourseDetails from "../components/course/CourseDetails";
import Contact from "../components/contact/Contact";

function index() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/*" element={<Courses />}>
            <Route path="civil" element={<CourseItem />} />
            <Route path="studies" element={<CourseItem />} />
            <Route path="cse" element={<CourseItem />} />
            <Route path="bank" element={<CourseItem />} />
            <Route path="social" element={<CourseItem />} />
          </Route>
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default index;
// Tha 


// digitalforgood@ubunifu.systems 
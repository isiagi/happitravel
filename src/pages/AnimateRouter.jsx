import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./HomePage";
import Courses from "../components/course/Course";
import NotFound from "../components/not/NotFound";
import CourseItem from "../components/course/CourseItem";
import BankItem from "../components/course/Bank";
import CourseDetails from "../components/course/CourseDetails";
import Contact from "../components/contact/Contact";
import Social from '../components/course/Social'
import Detail from "../components/detail/Detail";
import Service from "./service/Service";

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/*" element={<Courses />}>
          <Route path="civil" element={<CourseItem />} />
          <Route path="studies" element={<CourseItem />} />
          <Route path="cse" element={<CourseItem />} />
          <Route path="bank" element={<BankItem />} />
          <Route path="social" element={<Social />} />
        </Route>
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/detail/:id" element={<Detail />}>
         
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;

// import {lazy} from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Nav from "../components/nav/ma";
import Footer from "../components/footer/index";
import RouterF from "./AnimateRouter"


function index() {
  return (
    <div>
      <Router>
        <Nav />
        <RouterF />
        <Footer />
      </Router>
    </div>
  );
}

export default index;
// Tha 


// digitalforgood@ubunifu.systems 
import React from "react";
import { motion } from "framer-motion";
import Project from "../components/cp/Project";
import Hero1 from "../components/hero1/Hero1";
import Hero2 from "../components/hero2/Hero2";
import Vid from "../components/vid/Vid";
import News from "../components/news";

const Index = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exist={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero1 />
      <Hero2 />
      <Project />
      <Vid />
      <News />
    </motion.div>
  );
};

export default Index;

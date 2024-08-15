import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";
import { motion } from "framer-motion";
import React from "react";
const sliderVariants = {
  initial: {
    x:0,
  },
  animate: {
    x: "-660%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 45,
    },
  },
};
const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

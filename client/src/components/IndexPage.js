import React, {Component} from "react";
import AppNavBar from "./AppNavBar";
import Home from "./home/Home";
import About from "./about-do/About";
import AboutText from "./about-me/AboutText";

function IndexPage() {
  return (
    <div>
      <AppNavBar page="Portfolio" />
      <Home  />
      <AboutText  />
      <About  />  
    </div>
  )
}

export default IndexPage;

import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import FeatureSection from "./Components/FeatureSection";
import Workflow from "./Components/Workflow";
import Pricing from "./Components/Pricing";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <FeatureSection/>
        <Workflow/>
        <Pricing/>
        <Testimonial/>
        <Footer/>
      </div>
    </>
  );
}

export default App;

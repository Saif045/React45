import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";
import Newsletter from "./components/Newsletter";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Resources />

      <Newsletter />

      <Prices />

      <About />

      <Contact />

      <Footer />
    </>
  );
}

export default App;

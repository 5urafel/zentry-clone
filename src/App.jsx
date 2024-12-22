import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;

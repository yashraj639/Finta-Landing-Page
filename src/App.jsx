import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <main className=" w-full h-screen relative">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 90% at 50% 0%, #FFF 6.32%, #E0F0FF 29.28%, #E7EFFD 68.68%, #FFF 100%) ",
        }}
      />
      {/* Your Content/Components */}

      <div className="max-w-5xl h-screen mx-auto absolute inset-0 z-10 px-5">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
};

export default App;

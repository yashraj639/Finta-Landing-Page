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
            "radial-gradient(125% 125% at 50% 20%, #fff 28%, #e0effe 45%)",
        }}
      />
      {/* Your Content/Components */}

      <div className="max-w-5xl mx-auto absolute inset-0 z-10 px-5">
        <Navbar />
        <Hero/>
      </div>
    </main>
  );
};

export default App;

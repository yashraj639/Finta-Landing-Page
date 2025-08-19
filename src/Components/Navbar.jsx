import React from "react";

const Navbar = () => {
  return (
    <nav className="p-6 flex items-center justify-between">
      <a href="/">
        <img src="./logo.svg" alt="logo" />
      </a>
      <div className="right-div flex items-center text-sm gap-5">
        <a
          href="#founders"
          className="hover:text-gray-500 transition duration-300"
        >
          <h1>Founders</h1>
        </a>
        <a
          href="#guide"
          className="hover:text-gray-500 transition duration-300"
        >
          <h1>Guide</h1>
        </a>
        <a
          href="#pricing"
          className="hover:text-gray-500 transition duration-300"
        >
          <h1>Pricing</h1>
        </a>
        <a
          href="#login"
          className="hover:text-gray-500 transition duration-300"
        >
          <h1>Log In</h1>
        </a>
        <a
          href="#get-started"
          className="bg-blue-500 hover:bg-blue-600 text-white text-shadow-lg px-4 py-2 rounded-lg shadow-md transition duration-200"
        >
          <h3>Get Started</h3>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

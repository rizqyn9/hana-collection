import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Navbar() {
  return (
    <div className="sticky top-0 z-40 py-3 w-full backdrop-blur bg-indigo-800/50 text-white border-b-2 border-gray-900/10">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-semibold uppercase text-lg">Hana's Collections</h1>
        <div>
          {/* <ul className="flex items-center space-x-10 text-sm">
            <li><Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-gray-100">About Us</Link></li>
            <li><Link to="/docs" className="text-gray-400 hover:text-gray-100">Docs</Link></li>
          </ul> */}
        </div>
        <div className="flex gap-4">
          <Button text={"Login"} />
          <Button text={"Sign Up"} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

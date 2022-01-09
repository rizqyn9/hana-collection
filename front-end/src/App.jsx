import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import { Routes } from "react-router";

function App() {
  useEffect(() => {
    let root = document.getElementsByTagName("html")[0];
    if (root) root.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  }, []);

  return (
    <BrowserRouter>
      <Routes />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="signin" element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

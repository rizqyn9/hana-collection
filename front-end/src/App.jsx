import React, { useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Routes } from "react-router";
import { Login } from "./pages/Auth";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
        </Route>
        <Route path="/masuk" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

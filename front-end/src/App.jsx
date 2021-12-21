import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  useEffect(() => {
    document.body.className = "bg-indigo-900";
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-indigo-800 to-indigo-100">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

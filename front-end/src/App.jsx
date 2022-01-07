import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // document.body.className = "bg-indigo-900";
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

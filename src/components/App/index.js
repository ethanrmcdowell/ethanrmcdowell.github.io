import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './style.css';
import Nav from "../Nav";
import About from "../../pages/About";
import Portfolio from "../../pages/Portfolio";
import Card from "../Card";

function App() {
  return (
      <Router>
        <Nav />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component ={Portfolio} />
      </Router>
  );
}

export default App;

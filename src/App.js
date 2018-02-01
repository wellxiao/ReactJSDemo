import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RouteMap from "./Router";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./component/home/index.js";
import About from "./component/about/index.js";

class App extends Component {
  render() {
    return (
        <Router>  
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/topics">topics</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
          </ul>
          <hr/>
            <Route  path="/" component={Home}>
              <Route  path="Home" component={Home}></Route>
              <Route  path="about" component={About}></Route>
            </Route>
            <hr/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;

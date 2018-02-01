import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App.js"
import Home from "../component/home/index.js"
import About from "../component/about/index.js"

class RouteMap extends Component {
  updateHandle() {
    console.log("触发router，打印出来");
  }
  render() {
    return (
        <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
         <Route path="/" compontent={App}>
            <Route exact path="" compontent={Home}></Route>
            <Route  path="about" compontent={About}></Route>
          </Route>
        </Router>
    )
  }
}

export default RouteMap;

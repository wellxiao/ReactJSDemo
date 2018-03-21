import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter, Route } from "react-router-dom";

import Home from "./component/home/index.js";
import About from "./component/about/index.js";
import Message from "./component/message/index.js";
const route = (
  <HashRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Message" component={Message} />
    </App>
  </HashRouter>
);

ReactDOM.render(route, document.getElementById("root"));
registerServiceWorker();

import React, { Component } from "react";
import "./index.css";



class Home extends Component {
  render() {
    return (
      <div className="homeContent">
        <h1>HOME</h1>
        <p> 这是征文</p>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
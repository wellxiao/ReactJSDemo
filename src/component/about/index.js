import React, { Component } from "react";
import "./index.css";
import Message from "../message";

class About extends Component {
  handleClick() {
    alert("你点击了我");
  }
  render() {
    return (
      <div className="App">
        <h1>ABOUT</h1>
        <button onClick={this.handleClick}> 点击</button>
        {this.props.children || "wellxiao  is me"}
        <Message myName="wellxiao" />
      </div>
    );
  }
}

export default About;

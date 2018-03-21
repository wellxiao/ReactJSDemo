import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wellxiao"
    };
  }
  handleClick = () => {
    console.log(this.state.name);
  };
  render() {
    console.log(this);
    return (
      <div>
        <h3>Message get name is : {this.state.name}</h3>
        <button onClick={this.handleClick}> 我的名字</button>
      </div>
    );
  }
}

export default Message;

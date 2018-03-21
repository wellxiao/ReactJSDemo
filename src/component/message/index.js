import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "wellxiao",
      mess: "上山打老虎"
    };
  }
  handleClick = () => {
    console.log(this.state.name);
  };
  handelChange = event => {
    console.log(event.target);
    this.setState({ mess: event.target.value });
  };
  render() {
    console.log(this);
    return (
      <div>
        <h3>Message get name is : {this.state.name}</h3>
        <button onClick={this.handleClick}> 我的名字</button>
        <input
          type="text"
          onChange={this.handelChange}
          value={this.state.mess}
        />
        <b>{this.state.mess}</b>
      </div>
    );
  }
}

export default Message;

import React, { Component } from "react";



class Message extends Component {
    handleClick(){
        alert(this.props.myName)
    }
  render() {
    return (
      <div >
          <h3>Message get name is : {this.props.myName}</h3>
          <button onClick={this.handleClick}> 我的名字</button>
      </div>
    );
  }
}

export default Message;
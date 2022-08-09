import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <div className="my-3">
        <p className="text-right fw-bold">{this.props.name}</p>
        <input className="p-3 w-100" placeholder={this.props.val} />
      </div>
    );
  }
}

export default PersonalInfo;

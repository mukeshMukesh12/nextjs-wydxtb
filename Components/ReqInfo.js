import React, { Component } from "react";

class ReqInfo extends Component {
  render() {
    return (
      <div className="col-md">
        <label style={{ fontSize: "13px" }}>{this.props.name}: </label>
        <span className="main-c fw-bold">{this.props.val}</span>
      </div>
    );
  }
}

export default ReqInfo;

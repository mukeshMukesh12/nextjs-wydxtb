import React, { Component } from "react";

class LectInfo extends Component {
  render() {
    return (
      <div
        className="lect-info row w-100 my-3 mx-auto sec-bg rounded"
        style={{ padding: "5px", marginRight: "2px!important" }}
      >
        <div className="pt-3 col-6 text-right">
          <h6 className="fw-bold">{this.props.name}: </h6>
        </div>
        <div className="pt-3 col-6 text-right">
          <h6 className="main-c fw-bold">{this.props.val}</h6>
        </div>
      </div>
    );
  }
}

export default LectInfo;

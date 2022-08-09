import React, { Component } from "react";

export default class SiteDescription extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-primary fw-bold text-center">
          Set Description To The Site
        </h3>

        <form>
          <div className="form-group text-center mt-5">
            <textarea
              className="mx-auto rounded p-3 border"
              placeholder="Set Your Site Description Here"
              style={{
                width: "500px",
                height: "250px",
                backgroundColor: "#f1f3f4",
                resize: "none",
              }}
            ></textarea>
          </div>
          <div className="form-group mx-auto" style={{ width: "500px" }}>
            <button className="btn btn-outline-primary">Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}

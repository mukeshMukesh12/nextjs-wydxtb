// Core
import React, { Component } from "react";

// Styles
import "./../css/style.css";

class DashboardResetPassword extends Component {
  render() {
    return (
      <section dir="ltr">
        <div className="container">
          <div className="gap py-5"></div>
          <div className="d-flex justify-content-center">
            <div className="bg-white p-3 w-75 shadow rounded">
              <form>
                <h3 className="text-center text-capitalize fw-bold">
                  moruge admin panel{" "}
                  <span className="text-primary">forget password</span>
                </h3>
                <div className="form-group py-3">
                  <input
                    type="password"
                    className="form-control border"
                    id="exampleInputPassword1"
                    placeholder="Enter new Password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardResetPassword;

// Core
import React, { Component } from "react";

class DashboardForgetPassword extends Component {
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
                    type="email"
                    className="form-control border"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter E-mail"
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

export default DashboardForgetPassword;

import React, { Component } from "react";

// Components
import Topics from "./Components/Topics";

export default class DashboardManage extends Component {
  render() {
    return (
      <>
        <section className="manage-home my-5 w-100">
          <div className="container">
            <h3 className="text-center fw-bold mb-3 text-capitalize text-secondary">
              Topics
            </h3>
            <div className="row">
              <div className="col-md-4">
                <Topics
                  url="/dashboard/courses"
                  name="Courses"
                  help="Here you can mange all your Course and its Teachr and students and others"
                />
              </div>
              <div className="col-md-4">
                <Topics
                  url="/dashboard/profiles/"
                  name="Users"
                  help="Here you can mange all Users and dump users data"
                />
              </div>
              <div className="col-md-4">
                <Topics
                  url="/dashboard/countries"
                  name="Countries"
                  help="Here you can manage country"
                />
              </div>
              <div className="col-md-4">
                <Topics
                  url="/dashboard/universties"
                  name="Universties"
                  help="Here you can manage Universties"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

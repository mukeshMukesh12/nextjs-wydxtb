// Core
import React, { Component } from "react";
import Link from "next/dist/client/link";

// Component
import CourseCard from "../../Components/CourseCard";

export default class Courses extends Component {
  render() {
    return (
      <>
        <div className="w-100 border pt-3">
          <div className="container p-3">
            <div className="row justify-content-between">
              <div className="col-5">
                <div className="form-group">
                  <input
                    className="border form-control"
                    type="text"
                    placeholder="Search Here"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <button className="btn btn-primary mr-5">Search</button>
                  <Link href="/dashboard/add_new_course">
                    <a className="btn btn-outline-success mr-5">
                      Add New course
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap"></div>
        <div className="c-cards row w-100 mx-auto d-flex justify-content-between">
          <CourseCard
            col="col-md-4"
            name="اساسيات علوم الحاسب"
            time="12"
            rate="120"
            price="200"
            univers="جامعة الملك فهد"
            to="/dashboard/course_edit"
          />
          <CourseCard
            col="col-md-4"
            name="اساسيات علوم الحاسب"
            time="12"
            rate="120"
            price="200"
            univers="جامعة الملك فهد"
            to="/dashboard/course_edit"
          />
          <CourseCard
            col="col-md-4"
            name="اساسيات علوم الحاسب"
            time="12"
            rate="120"
            price="200"
            univers="جامعة الملك فهد"
            to="/dashboard/course_edit"
          />
        </div>
      </>
    );
  }
}

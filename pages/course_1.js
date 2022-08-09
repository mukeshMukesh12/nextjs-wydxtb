// Core
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";

// Images
import img from "../img/poster/download.jpeg";

// Components
import CourseLect from "../Components/CourseLect";
import CourseAsideBar from "../Components/CourseAsideBar";

// Reandering
class Course_1 extends Component {
  inDashboard;
  componentDidMount() {
    this.inDashboard = window.location.href.indexOf("dashboard") == -1;
  }
  render() {
    return (
      <>
        {this.inDashboard ? (
          <section className="profile-home main-bgi py-5 ">
            <div className="container position-relative">
              <div className="gap"></div>
              <h3 className="text-white fw-bold text-center">
                مقدمة في علوم الحاسب
              </h3>
              <h3 className="text-white fw-bold sec-title text-center center-after white-after">
                المعلم: <span className="therd-c">احمد محمد</span>
              </h3>
            </div>
            <div className="gap"></div>
          </section>
        ) : null}
        <div className="gap"></div>
        <section className="course-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3 sec-bg p-3" style={{ height: "350px" }}>
                <h5 className="text-right fw-bold mt-5 text-center ">
                  Course Details
                </h5>
                <div className="d-flex h-100 align-items-start mt-5">
                  <div>
                    <CourseAsideBar
                      ico="fa-user"
                      comp_name="Mr/احمد عبد المطلب"
                    />
                    <CourseAsideBar
                      ico="fa-video-camera"
                      comp_name="77 lectures"
                    />
                    <CourseAsideBar ico="fa-share-alt" comp_name="4 Projects" />
                    <CourseAsideBar
                      ico="fa-commenting"
                      comp_name="Interactive Group"
                    />
                    <CourseAsideBar ico="fa-usd" comp_name="200 ريال" />
                    {/* 
                    {window.location.href.indexOf("dashboard") == -1 ? (
                      <Link href="/web33">
                        <a className="btn btn-block main-bgc my-3 text-white fw-bold">
                          اشتراك
                        </a>
                      </Link>
                    ) : null} */}
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <video
                  // src={require("../algo.mp4")}
                  poster={img}
                  className="w-100 rounded"
                  controls
                ></video>
                <CourseLect
                  lect_pos="1"
                  lect_name="ما هو الحاسب الالي؟"
                  time="12"
                />
                <CourseLect
                  lect_pos="2"
                  lect_name="ما هو الحاسب الالي؟"
                  time="12"
                />
                <CourseLect
                  lect_pos="3"
                  lect_name="ما هو الحاسب الالي؟"
                  time="12"
                />
                <CourseLect
                  lect_pos="4"
                  lect_name="ما هو الحاسب الالي؟"
                  time="12"
                />
                <CourseLect
                  lect_pos="5"
                  lect_name="ما هو الحاسب الالي؟"
                  time="12"
                />
                <CourseLect
                  lect_pos="6"
                  lect_name="ما هو الحاسب الالي؟"
                  time="12"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Course_1;

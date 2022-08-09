// Core
import React, { Component } from "react";

// Components
import AsideBar from "../Components/AsideBar";
import Search from "../Components/Search";
import CompoleteData from "../Components/CompleteData";

// Images
import img from "../img/poster/download.jpeg";

// Reandering
class Web42 extends Component {
  render() {
    return (
      <>
        <CompoleteData name="username" />
        <Search class="" />
        <div className="gap my-5"></div>
        <section className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>
              <div className="col-md-8 sec-bg mr-3 position-relative">
                <div className="container">
                  <div className="video-top-header row pt-5">
                    <div className="col-md-10">
                      <div className="page-title text-center">
                        <h4>حصة الغة العربية</h4>
                        <h4 className="main-c">المعلم: محمداحمد علي</h4>
                      </div>
                    </div>
                    <div className="col-md-2 pt-3">
                      <div
                        className="back"
                        style={{ width: "fit-content", cursor: "pointer" }}
                      >
                        <span>رجوع</span>
                        <i className="fa fa-arrow-left"></i>
                      </div>
                    </div>
                  </div>

                  <video
                    // src={require("../algo.mp4")}
                    className="w-100 mt-5"
                    controls
                    poster={img}
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="gap"></div>
      </>
    );
  }
}

export default Web42;

// Core
import React, { Component } from "react";
import AsideBar from "../Components/AsideBar";
import CompleteData from "../Components/CompleteData";
import Search from "../Components/Search";

// Reandering
class Web20 extends Component {
  render() {
    return (
      <>
        <CompleteData name="haha" />
        <Search />
        <div className="gap my-5"></div>
        <section className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>
              <div className="col-md-8 sec-bg mr-3 mt-3 pt-5">
                <div className="container">
                  <h4 className="text-center mb-5">الاعدادات العامة</h4>
                  <div className="notif-settings">
                    <div className="p-2 bg-white d-flex justify-content-between">
                      <div className="texts">
                        <i className="fa fa-bell text-white main-bgc p-2 rounded"></i>
                        <span>صوت الاشعارات</span>
                      </div>
                      <label className="switch position-relative inline-block">
                        <input type="checkbox" className="d-none" />
                        <span className="slider position-absolute"></span>
                      </label>
                    </div>

                    <div className="p-2 bg-white d-flex justify-content-between my-3">
                      <div className="texts">
                        <i className="fa fa-bell text-white main-bgc p-2 rounded"></i>
                        <span>صوت الاشعارات</span>
                      </div>
                      <label className="switch position-relative inline-block">
                        <input type="checkbox" className="d-none" />
                        <span className="slider position-absolute"></span>
                      </label>
                    </div>
                  </div>
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

export default Web20;

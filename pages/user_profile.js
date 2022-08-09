// Core
import React, { Component } from "react";

// Components
import CompleteData from "../Components/CompleteData";
import Search from "../Components/Search";
import AsideBar from "../Components/AsideBar";

// Reandering
class User_profile extends Component {
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

              <div className="col-md-8 sec-bg mr-3 p-3 rounded">
                <div className="shadow bg-white rounded p-3 mb-5 bg-white">
                  <div className="container">
                    <p className="text-center fw-bold my-3">
                      اهلا بك عزيزي الطالب{" "}
                      <span className="main-c">{this.props.name}</span> في منصة
                      بروج
                    </p>
                    <div className="row text-center">
                      <div className="col-md">
                        <p className="fw-bold">
                          رصيد حسابك الان <span className="main-c">500</span>{" "}
                          دينار سعودي
                        </p>
                      </div>
                      <div className="col-md">
                        <a href="#" className="btn main-bgc text-white fw-bold">
                          شحن رصيدك
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white d-flex justify-content-between p-3">
                  <label className="fw-bold">حصصك اليوم</label>
                  <p className="fw-bold text-secondary">12-4-2020</p>
                </div>

                <div className="bg-white mt-5 p-3">
                  <div className="row">
                    <div className="col-md text-right pt-3">
                      <label>المادة:</label>
                      <h5 className="d-inline-block main-c">رياضيات</h5>
                      <br />
                      <label>المعلم:</label>
                      <h5 className="d-inline-block main-c">احمد محمد علي</h5>
                      <br />
                      <label>مدة الحصة:</label>
                      <h5 className="d-inline-block main-c">3 ساعات</h5>
                    </div>
                    <div className="col-md">
                      <h4 className="text-center">تبدأ الحصة بعد</h4>
                      <div className="d-flex justify-content-between">
                        <div className="clock">
                          <div className="sqr text-white text-center fw-bold main-bgc ">
                            0
                          </div>
                          <p>الثانية</p>
                        </div>
                        <div className="clock">
                          <div className="sqr text-white text-center fw-bold main-bgc ">
                            0
                          </div>
                          <p>دقيقة</p>
                        </div>
                        <div className="clock">
                          <div className="sqr text-white text-center fw-bold main-bgc ">
                            0
                          </div>
                          <p>ساعة</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex align-items-center justify-content-center">
                      <button className="btn btn-danger">الغاء الحصة</button>
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

export default User_profile;

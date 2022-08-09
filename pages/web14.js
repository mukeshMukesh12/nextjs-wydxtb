// Core
import React, { Component } from "react";

// Components
import AsideBar from "../Components/AsideBar";
import Search from "../Components/Search";
import CompleteData from "../Components/CompleteData";

// Reandering
class Web14 extends Component {
  name = "ahmed";

  render() {
    return (
      <>
        <CompleteData name={this.name} />
        <Search class="" />
        <div className="gap my-5"></div>
        <section className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>
              <div className="col-md-8 sec-bg p-5">
                <div className="std-wel shadow bg-white p-3">
                  <h5 className="text-center text-secondary fw-bold">
                    اهلا بك عزيزي الطالب <span className="main-c">علي</span> في
                    منصة مروج
                  </h5>
                  <div className="d-flex justify-content-between mt-5 ">
                    <h5 className="fw-bold">
                      رصيد حسابك الان{" "}
                      <span className="main-c"> 500 ريال سعودي</span>
                    </h5>
                    <button className="btn main-bgc text-white ">
                      شحن رصيدك
                    </button>
                  </div>
                </div>
                <div className="std-today-lects shadow bg-white d-flex justify-content-between p-3 my-3">
                  <h5 className="fw-bold">حصصك اليوم</h5>
                  <p className="text-secondary fw-bold">12-4-2020</p>
                </div>
                <div className="row std-lect shadow bg-white p-3 ">
                  <div className="col-md-4 text-right">
                    <h6 className="fw-bold">
                      المادة:<span className="main-c">رياضيات</span>
                    </h6>
                    <h6 className="fw-bold my-3">
                      المعلم:<span className="main-c">احمد محمد علي</span>
                    </h6>
                    <h6 className="fw-bold">
                      مدة الحصة:<span className="main-c">3 ساعات</span>
                    </h6>
                  </div>
                  <div className="col-md-4">
                    <h5 className="text-center fw-bold">تبدا الحصة بعد</h5>
                    <div className="time d-flex justify-content-between my-3">
                      <div className="t text-center main-c">
                        <div className="p-2 fw-bold text-white main-bgc rounded">
                          20
                        </div>
                        ثانية
                      </div>
                      <span>:</span>

                      <div className="t text-center main-c">
                        <div className="p-2 fw-bold text-white main-bgc rounded">
                          14
                        </div>
                        دقيقة
                      </div>
                      <span>:</span>
                      <div className="t text-center main-c">
                        <div className="p-2 fw-bold text-white main-bgc rounded">
                          00
                        </div>
                        ساعة
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex justify-content-center h-100 align-items-center">
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

export default Web14;

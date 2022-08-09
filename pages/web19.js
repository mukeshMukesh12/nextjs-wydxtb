import React, { Component } from "react";

import AsideBar from "../Components/AsideBar";
import Search from "../Components/Search";
import CompleteData from "../Components/CompleteData";

class Web19 extends Component {
  render() {
    return (
      <>
        <CompleteData name="username" />
        <Search class="" />
        <div className="gap my-5"></div>
        <section className="lect-detailes">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>

              <div className="col-md-7 sec-bg p-3">
                <h5 className="fw-bold text-center my-3">اتمام الدفع</h5>
                <div className="pay-sec d-flex justify-content-center">
                  <div className="card mx-3 text-center p-3 bg-white">
                    <i className="fa fa-lg fa-cc-visa"></i>
                  </div>
                  <div className="card mx-3 text-center p-3 bg-white">
                    <i className="fa fa-lg fa-cc-paypal"></i>
                  </div>
                  <div className="card mx-3 text-center p-3 bg-white">
                    <i className="fa fa-lg fa-cc-jcb"></i>
                  </div>
                  <button className="btn main-bgc fw-bold text-white card mx-3">
                    التحويل البنكي
                  </button>
                </div>

                <div className="row">
                  <div className="col-md">
                    <div className="with-visa p-3">
                      <div className="row">
                        <div className="col-md-1 pt-3 text-right">
                          <input type="radio" />
                        </div>
                        <div className="col-md-8 position-relative">
                          <input
                            type="text"
                            className="p-2 my-3 w-100"
                            placeholder="3333*********"
                          />
                          <i className="fa fa-cc-visa fa-lg position-absolute main-c"></i>
                        </div>
                        <div className="col-md-3 text-right pt-3">
                          <a href="#" className="visa-det">
                            اظهار التفاصيل
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="with-out">
                      <div className="row">
                        <div className="col-md-12 p-2 text-right px-5 mb-3">
                          <input type="radio" />
                          <a href="#"> اضافى بطاقة جديدية</a>
                        </div>
                        <div className="col-md-8 px-5 mb-3">
                          <input
                            type="text"
                            className="p-2 w-100"
                            placeholder="3333*********"
                          />
                        </div>
                        <div className="col-md-8 px-5 mb-3">
                          <input
                            type="text"
                            className="p-2 w-100"
                            placeholder="3333*********"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-5 pt-3">
                          <p className="fw-bold">تاريخ الانتهاء</p>
                        </div>
                        <div className="col-7 visa-date text-right pr-4">
                          <input
                            className="rounded p-2"
                            type="text"
                            placeholder="5"
                          />
                          <input
                            className="rounded p-2"
                            type="text"
                            placeholder="5/5"
                          />
                          <i className="fa fa-question-circle"></i>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6 pt-3">
                          <p className="fw-bold">
                            {" "}
                            رمزالتحقق من البطاقة[ CCV ]
                          </p>
                        </div>
                        <div className="col-6 visa-date text-right pr-5">
                          <input
                            className="rounded p-2"
                            type="text"
                            placeholder="5/5"
                          />
                          <i className="fa fa-question-circle"></i>
                        </div>
                        <div className="col-md-12 visa-date text-right mx-auto d-flex justify-content-center">
                          <button className="btn main-bgc text-white d-block my-5">
                            <i className="fa fa-check"></i>
                            تحقق من البطاقة
                          </button>
                        </div>
                      </div>
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

export default Web19;

import React, { Component } from "react";

class Web33 extends Component {
  render() {
    return (
      <>
        <section className="p-5 main-bgc">
          <div className="gap"></div>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="home-content text-white fw-bold">
              <h2 className="home-content-title">مقدمة في علم الحاسب الالي</h2>
              <h2 className="text-center home-content-tec">
                المعلم:-
                <span className="therd-c">احمد محمد</span>
                <span className="line mx-auto my-3"></span>
              </h2>
            </div>
          </div>
        </section>
        <section className="comp-pay my-5">
          <div className="container">
            <h2 className="comp-pay-title main-c text-center ">
              اتمام الدفع و الاشترك
            </h2>
            <span className="line mx-auto my-3 main-bgc "></span>

            <div className="row my-5">
              <div className="col-md-4 ml-3">
                <div className="row">
                  <div className="col-md sec-bg py-3 left-hem-cfeer">
                    <h4 className="text-center main-c pt-3">
                      مقدمة في اساسيات علم الحاسب الالي
                    </h4>
                    <div className="inst-info d-flex justify-content-between">
                      <p className="main-c">
                        <i className="fa fa-user text-darck"></i>
                        الاستاذ احد محمد
                      </p>
                      <p>
                        <i className="fa fa-star text-warning"></i>
                        213 تقييم
                      </p>
                    </div>

                    <div className="bg-white p-2 main-c d-flex justify-content-between">
                      <h5>التكلفة</h5>
                      <h5>200 ريال</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-7 sec-bg">
                <div className="gap"></div>
                <div className="row">
                  <div className="col-md">
                    <div className="with-visa p-3">
                      <div className="row">
                        <div className="col-md-1 d-flex justify-content-center align-items-center text-right">
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
                      <div className="row px-3">
                        <div className="col-md-1 d-flex justify-content-center align-items-center">
                          <input type="radio" />
                        </div>
                        <div className="col-md-11 p-2 pr-3 text-right  ">
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
                        <div className="col-7 visa-date text-right">
                          <input
                            className="rounded p-2"
                            type="text"
                            placeholder="5"
                          />
                          <input
                            className="rounded p-2 mr-0"
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
                        <div className="col-6 visa-date text-right pr-4">
                          <input
                            className="rounded p-2"
                            type="text"
                            placeholder="5/5"
                          />
                          <i className="fa fa-question-circle"></i>
                        </div>
                        <div className="col-md-12 visa-date text-right mx-auto d-flex justify-content-center">
                          <button className="btn main-bgc text-white fw-bold d-block my-5">
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

export default Web33;

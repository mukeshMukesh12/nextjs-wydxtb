import React, { Component } from "react";

class Web36 extends Component {
  render() {
    return (
      <>
        <h3 className="hd-title text-center mt-5 main-c">
          تفاصيل الحصة الخاصة بك
        </h3>
        <span className="line main-bgc mx-auto mb-5"></span>
        <section className="lect-detailes">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ml-3">
                <div className="col-container sec-bg p-3">
                  <h5 className="main-c text-center">تفاصيل الحصة</h5>
                  <div className="lect-info-slide mb-3 d-flex justify-content-between bg-white px-2">
                    <div className="txt-icon pt-3">
                      <i className="fa fa-clock-o"></i>
                      <span>وقت البدء</span>
                    </div>
                    <p className="fw-bold main-c pt-3">12:30pm</p>
                  </div>

                  <div className="lect-info-slide mb-3 d-flex justify-content-between bg-white px-2">
                    <div className="txt-icon pt-3">
                      <i className="fa fa-clock-o"></i>
                      <span>وقت الانتهاء</span>
                    </div>
                    <p className="fw-bold main-c pt-3">3:30pm</p>
                  </div>

                  <div className="lect-info-slide mb-3 d-flex justify-content-between bg-white px-2">
                    <div className="txt-icon pt-3">
                      <i className="fa fa-clock-o"></i>
                      <span>اجمالي الساعات المستحقة</span>
                    </div>
                    <p className="fw-bold main-c pt-3">3 ساعات</p>
                  </div>

                  <div className="lect-info-slide mb-3 d-flex justify-content-between bg-white px-2">
                    <div className="txt-icon pt-3">
                      <i className="fa fa-usd"></i>
                      <span>التكلفة لكل ساعة</span>
                    </div>
                    <p className="fw-bold main-c pt-3">100 ريال</p>
                  </div>

                  <div className="lect-info-slide mb-3 d-flex justify-content-between bg-white px-2">
                    <div className="txt-icon pt-3">
                      <i className="fa fa-usd"></i>
                      <span> اجمالي التكلفة</span>
                    </div>
                    <p className="fw-bold main-c pt-3">300 ريال</p>
                  </div>

                  <div className="copon-code d-flex">
                    <input type="text" placeholder="#Hala-50" className="p-2" />
                    <button className="btn text-white mr-2 fw-bold main-bgc">
                      تفعيل
                    </button>
                  </div>
                </div>
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

export default Web36;

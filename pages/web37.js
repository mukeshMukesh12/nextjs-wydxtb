import React, { Component } from "react";

import Image from "next/image";

import img from "../img/download.jpg";
class Web37 extends Component {
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
                <h5
                  className="fw-bold text-center my-5"
                  style={{ fontSize: "15px" }}
                >
                  يمكنك التحويل علي احد حساباتناالتالية
                </h5>
                <div className="row">
                  <div className="col-md-7">
                    <table>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>
                            <h5 className="cell-name text-right">اسم البنك</h5>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="main-c form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="cell-name text-right">
                              اسم صاحب الحساب
                            </h5>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="main-c form-control"
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h5 className="cell-name text-right">
                              رقم الايداع
                            </h5>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="main-c form-control"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-4 rounded">
                    <Image
                      src={img}
                      alt="..."
                      className="w-100 h-100 rounded"
                    />
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col-md-7">
                    <table>
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>
                            <h5 className="cell-name text-right">اسم البنك</h5>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="main-c form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="cell-name text-right">
                              اسم صاحب الحساب
                            </h5>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="main-c form-control"
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <h5 className="cell-name text-right">
                              رقم الايداع
                            </h5>
                          </td>
                          <td>
                            <input
                              type="text"
                              className="main-c form-control"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-4 rounded">
                    <Image
                      src={img}
                      alt="..."
                      className="w-100 h-100 rounded"
                    />
                  </div>
                </div>
                <h5 className=" text-center w-75 mx-auto my-5">
                  بعد التحويل يرجي ارفاق الصور والتحويل و اسم صاحب المحمول منة
                  وسيتم تخزين البيانات
                </h5>

                <div className="row">
                  <div className="col-md-10 per-info">
                    <div className=" position-relative">
                      <input type="text" className="w-100 main-c my-2 p-2" />
                      <i className="fa fa-picture-o position-absolute"></i>
                    </div>
                    <div className="position-relative">
                      <input type="text" className="w-100 main-c my-2 p-2" />
                      <i className="fa fa-user position-absolute"></i>
                    </div>
                    <div className="position-relative">
                      <input type="text" className="w-100 main-c my-2 p-2" />
                      <i className="fa fa-phone position-absolute"></i>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <label className="pt-2" htmlFor="imp-img">
                      تحميل
                    </label>

                    <input type="file" id="imp-img" className="d-none" />
                  </div>
                  <button className="btn main-bgc text-white d-block mx-auto my-5">
                    ارسال
                  </button>
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

export default Web37;

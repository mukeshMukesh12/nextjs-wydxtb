// Core
import React, { Component } from "react";
import Image from "next/dist/client/image";
import Link from "next/link";

// Image
import img from "../img/characters/user.png";

// Components
import AsideBar from "../Components/AsideBar";
import Search from "../Components/Search";
import CompleteData from "../Components/CompleteData";
import ReqInfo from "../Components/ReqInfo";
import Stars from "../Components/Stars";

// Reandering
class Web16 extends Component {
  render() {
    return (
      <>
        <CompleteData />
        <Search class="" />
        <div className="gap my-5"></div>
        <section className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>
              <div className="col-md-8">
                <div
                  className="res-0 d-flex sec-bg mr-3 rounded"
                  style={{ padding: "10px" }}
                >
                  <div className="col-md d-flex justify-content-between">
                    <h5 className="text-right fw-bold">رصيدك بالمحفظة</h5>
                    <span className="main-c fw-bold w-100">2400 ريال</span>
                  </div>
                  <div className="col-md">
                    <a href="#" className="btn main-bgc fw-bold text-white">
                      شحن المحفظة
                    </a>
                  </div>
                </div>

                <div className="inst-requests">
                  <div
                    className="row shadow my-5 mr-3 bg-white rounded position-relative h-25"
                    style={{ padding: "10px", marginRight: "2px!important" }}
                  >
                    <div className="col-md-3">
                      <Image src={img} width="100" height="100" alt="" />
                    </div>
                    <div className="col-md-5 text-right">
                      <h6 className="main-c">
                        <i className="fa fa-user"></i> محمد علي احمد
                      </h6>
                      <Stars />
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "170px" }}
                      >
                        <label className="fw-bold">تاريخ الحصة</label>
                        <p className="main-c">08-12-2020</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center fw-bold text-white d-flex justify-content-center">
                      <div className="ml-3">
                        <button className="btn btn-danger">
                          <i className="fa fa-trash-o"></i> الغاء
                        </button>
                      </div>
                      <div>
                        <button className="btn therd-bgc text-white">
                          قيد الانتظار
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <ReqInfo name="المادة" val="عربي" />
                      <ReqInfo name="سعر الساعة" val="200" />
                      <ReqInfo name="عدد الساعات المدفوعة" val="1" />
                      <ReqInfo name="عدد الطلاب" val="1" />
                    </div>
                  </div>
                </div>

                <div className="inst-requests">
                  <div
                    className="row shadow my-5 mr-3 bg-white rounded position-relative h-25"
                    style={{ padding: "10px", marginRight: "2px!important" }}
                  >
                    <div className="col-md-3">
                      <Image src={img} width="100" height="100" alt="" />
                    </div>
                    <div className="col-md-5 text-right">
                      <h6 className="main-c">
                        <i className="fa fa-user"></i> محمد علي احمد
                      </h6>
                      <Stars />
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "170px" }}
                      >
                        <label className="fw-bold">تاريخ الحصة</label>
                        <p className="main-c">08-12-2020</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center fw-bold text-white d-flex justify-content-end">
                      <div>
                        <button className="btn btn-danger">
                          <i className="fa fa-trash-o"></i> تم الغاء
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <ReqInfo name="المادة" val="عربي" />
                      <ReqInfo name="سعر الساعة" val="200" />
                      <ReqInfo name="عدد الساعات المدفوعة" val="1" />
                      <ReqInfo name="عدد الطلاب" val="1" />
                    </div>
                  </div>
                </div>

                <div className="inst-requests">
                  <div
                    className="row shadow my-5 mr-3 bg-white rounded position-relative h-25"
                    style={{ padding: "10px", marginRight: "2px!important" }}
                  >
                    <div className="col-md-3">
                      <Image src={img} width="100" height="100" alt="" />
                    </div>
                    <div className="col-md-5 text-right">
                      <h6 className="main-c">
                        <i className="fa fa-user"></i> محمد علي احمد
                      </h6>
                      <Stars />
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "170px" }}
                      >
                        <label className="fw-bold">تاريخ الحصة</label>
                        <p className="main-c">08-12-2020</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center fw-bold text-white p-0 d-flex justify-content-center">
                      <div className="ml-2">
                        <button className="btn btn-primary text-white">
                          <i className="fa fa-long-arrow-right"></i> ابدأ الان
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-success">
                          تمت الموافقة
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <ReqInfo name="المادة" val="عربي" />
                      <ReqInfo name="سعر الساعة" val="200" />
                      <ReqInfo name="عدد الساعات المدفوعة" val="1" />
                      <ReqInfo name="عدد الطلاب" val="1" />
                    </div>
                  </div>
                </div>

                <div className="inst-requests">
                  <div
                    className="row shadow my-5 mr-3 bg-white rounded position-relative h-25"
                    style={{ padding: "10px", marginRight: "2px!important" }}
                  >
                    <div className="col-md-3">
                      <Image src={img} width="100" height="100" alt="" />
                    </div>
                    <div className="col-md-5 text-right">
                      <h6 className="main-c">
                        <i className="fa fa-user"></i> محمد علي احمد
                      </h6>
                      <Stars />
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "170px" }}
                      >
                        <label className="fw-bold">تاريخ الحصة</label>
                        <p className="main-c">08-12-2020</p>
                      </div>
                    </div>
                    <div className="col-md-3 text-center fw-bold p-0 text-white d-flex justify-content-center">
                      <div>
                        <Link href="/guest_window">
                          <a className="btn btn-primary text-white">
                            <i className="fa fa-long-arrow-right"></i> ذهاب الان
                          </a>
                        </Link>
                      </div>
                      <div className="mr-2">
                        <p className="text-dark">جاري الان </p>
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <ReqInfo name="المادة" val="عربي" />
                      <ReqInfo name="سعر الساعة" val="200" />
                      <ReqInfo name="عدد الساعات المدفوعة" val="1" />
                      <ReqInfo name="عدد الطلاب" val="1" />
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

export default Web16;

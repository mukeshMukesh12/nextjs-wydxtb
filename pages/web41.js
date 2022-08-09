// Core
import React, { Component } from "react";

import Image from "next/dist/client/image";

// Components
import AsideBar from "../Components/AsideBar";
import Search from "../Components/Search";
import LectInfo from "../Components/LectInfo";

import CompleteData from "../Components/CompleteData";

// Images
import img from "../img/characters/user.png";

// Reandering
class Web41 extends Component {
  render() {
    return (
      <>
        <CompleteData name="username" />
        <Search class="" />
        <div className="gap my-5"></div>
        <section className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div
                    className="col d-flex sec-bg mr-3 rounded"
                    style={{ padding: "10px" }}
                  >
                    <div className="col-md">
                      <h4 className="text-right fw-bold">الحصص السابقة</h4>
                    </div>
                    <div className="col-md">
                      <i className="fa fa-clock-o"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="row shadow my-5 mr-3 bg-white rounded"
                  style={{ padding: "10px", marginRight: "2px!important" }}
                >
                  <div className="col-md-3">
                    <Image src={img} width="100" height="100" alt="" />
                  </div>

                  <div className="col-md-6 text-right">
                    <h6 className="main-c">
                      <i className="fa fa-user"></i> محمد علي احمد
                    </h6>
                    <span
                      className="job fw-bold text-secondary"
                      style={{ fontSize: "12px" }}
                    >
                      معلم لغة عربية
                    </span>
                    <div
                      className="d-flex justify-content-between"
                      style={{ width: "170px" }}
                    >
                      <label className="fw-bold">تاريخ الحصة</label>
                      <p className="main-c">08-12-2020</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <button className="btn btn-success btn-block mb-3">
                      <i className="fa fa-play"></i> مشاهدة
                    </button>
                    <button className="btn btn-success btn-block mb-3">
                      تفاصيل الحصة
                    </button>
                  </div>
                </div>

                <div
                  className="row shadow my-5 mr-3 bg-white rounded"
                  style={{ padding: "10px", marginRight: "2px!important" }}
                >
                  <div className="col-md-3">
                    <Image src={img} width="100" height="100" alt="" />
                  </div>

                  <div className="col-md-6 text-right">
                    <h6 className="main-c">
                      <i className="fa fa-user"></i> محمد علي احمد
                    </h6>
                    <span
                      className="job fw-bold text-secondary"
                      style={{ fontSize: "12px" }}
                    >
                      معلم لغة عربية
                    </span>
                    <div
                      className="d-flex justify-content-between"
                      style={{ width: "170px" }}
                    >
                      <label className="fw-bold">تاريخ الحصة</label>
                      <p className="main-c">08-12-2020</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <button className="btn btn-success btn-block mb-3">
                      <i className="fa fa-play"></i> مشاهدة
                    </button>
                    <button className="btn btn-success btn-block mb-3">
                      تفاصيل الحصة
                    </button>
                  </div>
                  <hr className="w-75 text-center my-5" />
                  <h5 className="fw-bold w-100 text-center">تفاصيل الحصة</h5>

                  <LectInfo name="اسم المعلم" val="محمد احمد اسماعيل" />
                  <LectInfo name="المادة" val="لغة عربية" />
                  <LectInfo name="تاريخ البدء" val="08-02-2020" />
                  <LectInfo name="عدد الطلاب" val="2" />
                  <LectInfo name="عدد الساعات" val="2" />
                  <LectInfo name="سعر الساعة" val="200 ريال" />
                  <LectInfo name="نسبة الخم" val="0%" />
                  <LectInfo name="البلغ بعد الخصم" val="200 ريال" />
                  <LectInfo name="حالة الطلب" val="انتهاء الحصة بنجاح" />

                  <div
                    className="row w-100"
                    style={{ padding: "5px", marginRight: "2px!important" }}
                  >
                    <div className="col text-center main-c">
                      <i
                        className="text-secondary fa fa-print"
                        aria-hidden="true"
                      ></i>{" "}
                      طباعة
                      <span className="mx-3 text-dark">او</span>
                      <i
                        className="text-secondary fa fa-share-alt"
                        aria-hidden="true"
                      ></i>{" "}
                      مشاركة
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

export default Web41;

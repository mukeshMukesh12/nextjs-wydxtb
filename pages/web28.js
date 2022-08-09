// Core
import React, { Component } from "react";
import Image from "next/dist/client/image";

// Images
import img from "../img/characters/user.png";

// Components
import AsideBar from "../Components/AsideBar";
import Completed from "../Components/Completed";

// Reandering
class Web28 extends Component {
  render() {
    return (
      <>
        <Completed />
        <div className="gap my-5"></div>
        <section className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>
              <div className="col-md-9">
                <div className="inst-requests">
                  <h3 className="text-center">عروض الاسعار</h3>
                  <div
                    className="row shadow my-5 mr-3 bg-white rounded position-relative h-25"
                    style={{ padding: "10px", marginRight: "2px!important" }}
                  >
                    <div className="col-md-3">
                      <Image src={img} width="100" height="100" alt="" />
                    </div>
                    <div className="col-md-4 text-right">
                      <h6 className="main-c">
                        <i className="fa fa-user"></i> محمد علي احمد
                      </h6>
                      <bold className="text-secondary fw-bold">
                        الصف الثالث الاعدادي
                      </bold>
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "170px" }}
                      >
                        <bold className="fw-bold">تاريخ البدء</bold>
                        <p className="main-c"> 08-20-2020 </p>
                      </div>
                    </div>
                    <div className="col-md-5 text-center">
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-danger">رفض العرض</button>
                        <button className="btn main-bgc text-white">
                          وضع عرض سعر
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <div className="col-md">
                        <i className="fa fa-graduation-cap"></i> سنوات الخبرة 6
                        / 8 سنوات
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <div className="col-md">
                        <label style={{ fontSize: "12px" }}>المادة: </label>
                        <span className="main-c fw-bold">علوم</span>
                      </div>

                      <div className="col-md">
                        <label style={{ fontSize: "12px" }}>سعر الساعة: </label>
                        <span className="main-c fw-bold">200</span>
                      </div>

                      <div className="col-md-4">
                        <label style={{ fontSize: "12px" }}>
                          عدد الساعات المدفوعة:{" "}
                        </label>
                        <span className="main-c fw-bold">1</span>
                      </div>

                      <div className="col-md">
                        <label style={{ fontSize: "12px" }}>عدد الطلاب: </label>
                        <span className="main-c fw-bold">1</span>
                      </div>
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
                    <div className="col-md-4 text-right">
                      <h6 className="main-c">
                        <i className="fa fa-user"></i> محمد علي احمد
                      </h6>
                      <bold className="text-secondary fw-bold">
                        الصف الثالث الاعدادي
                      </bold>
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "170px" }}
                      >
                        <bold className="fw-bold">تاريخ البدء</bold>
                        <p className="main-c"> 08-20-2020 </p>
                      </div>
                    </div>
                    <div className="col-md-5 text-center">
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-danger">رفض العرض</button>
                        <button className="btn main-bgc text-white">
                          وضع عرض سعر
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <div className="col-md">
                        <i className="fa fa-graduation-cap"></i> سنوات الخبرة 6
                        / 8 سنوات
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <div className="col-md">
                        <label style={{ fontSize: "12px" }}>المادة: </label>
                        <span className="main-c fw-bold">علوم</span>
                      </div>

                      <div className="col-md">
                        <label style={{ fontSize: "12px" }}>سعر الساعة: </label>
                        <span className="main-c fw-bold">200</span>
                      </div>

                      <div className="col-md-4">
                        <label style={{ fontSize: "12px" }}>
                          عدد الساعات المدفوعة:{" "}
                        </label>
                        <span className="main-c fw-bold">1</span>
                      </div>

                      <div className="col-md">
                        <label style={{ fontSize: "12px" }}>عدد الطلاب: </label>
                        <span className="main-c fw-bold">1</span>
                      </div>
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
                    <div className="col-md-4 text-right">
                      <h6 className="main-c">
                        <i className="fa fa-user"></i> محمد علي احمد
                      </h6>
                      <bold className="text-secondary fw-bold">
                        الصف الثالث الاعدادي
                      </bold>
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "170px" }}
                      >
                        <bold className="fw-bold">تاريخ البدء</bold>
                        <p className="main-c"> 08-20-2020 </p>
                      </div>
                    </div>
                    <div className="col-md-5 text-center">
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-danger">رفض العرض</button>
                        <button className="btn main-bgc text-white">
                          وضع عرض سعر
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <div className="col-md">
                        <i className="fa fa-graduation-cap"></i> سنوات الخبرة 6
                        / 8 سنوات
                      </div>
                    </div>
                    <div className="col-md-12 row text-right mx-auto my-3">
                      <div className="col-md">
                        <label style={{ fontSize: "12px" }}>المادة: </label>
                        <span className="main-c fw-bold">علوم</span>
                      </div>

                      <div className="col-md">
                        <label style={{ fontSize: "12px" }}>سعر الساعة: </label>
                        <span className="main-c fw-bold">200</span>
                      </div>

                      <div className="col-md-4">
                        <label style={{ fontSize: "12px" }}>
                          عدد الساعات المدفوعة:{" "}
                        </label>
                        <span className="main-c fw-bold">1</span>
                      </div>

                      <div className="col-md">
                        <label style={{ fontSize: "12px" }}>عدد الطلاب: </label>
                        <span className="main-c fw-bold">1</span>
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

export default Web28;

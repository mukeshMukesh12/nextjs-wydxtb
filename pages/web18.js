// Core
import React, { Component } from "react";
import Image from "next/dist/client/image";

// Image
import img from "../img/characters/user.png";

// Components
import AsideBar from "../Components/AsideBar";
import Search from "../Components/Search";
import CompleteData from "../Components/CompleteData";

// Reandering
class Web18 extends Component {
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
                <div className="row">
                  <div
                    className="res-0 col d-flex sec-bg mr-3 rounded"
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
                </div>
                <div className="">
                  <h3 className="mt-5 text-center">حصصك اليوم</h3>
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
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "170px" }}
                      >
                        <label className="fw-bold">تاريخ الحصة</label>
                        <p className="main-c">08-12-2020</p>
                      </div>
                    </div>
                    <div className="col-md-5 text-center fw-bold text-white">
                      <button className="btn btn-danger">
                        <i className="fa fa-trash-o"></i> الغاء
                      </button>
                      <button className="btn therd-bgc text-white">
                        قيد الانتظار
                      </button>
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

export default Web18;

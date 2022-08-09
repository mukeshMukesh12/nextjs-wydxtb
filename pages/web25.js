// Core
import React, { Component } from "react";
import Image from "next/dist/client/image";
import Link from "next/link";

// Components
import AsideBar from "../Components/AsideBar";
import Completed from "../Components/Completed";
import Stars from "../Components/Stars";
import ReqInfo from "../Components/ReqInfo";
import BankTrans from "../Components/BankTrans";
import OutTrans from "../Components/OutTrans";
import PayPal from "../Components/PayPal";
import WesternUniuon from "../Components/WesternUniuon";

// Images
import img from "../img/characters/user.png";

// Reandering
class Web25 extends Component {
  hideControlers = () => {
    document.querySelector(".ov-lay").classList.toggle("d-none");
    document.body.style.overflowY = "hidden";
  };

  showControlers = () => {
    document.querySelector(".ov-lay").classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  };

  state = {
    showBank: false,
    showOut: false,
    showWistern: false,
    showPayPal: false,
  };

  _BankTrans = () => {
    this.setState({
      showBank: true,
      showOut: false,
      showWistern: false,
      showPayPal: false,
    });
  };

  _OutTrans = () => {
    this.setState({
      showOut: true,
      showBank: false,
      showWistern: false,
      showPayPal: false,
    });
  };

  _WestrenUnion = () => {
    this.setState({
      showWistern: true,
      showBank: false,
      showOut: false,
      showPayPal: false,
    });
  };

  _PayPal = () => {
    this.setState({
      showPayPal: true,
      showBank: false,
      showOut: false,
      showWistern: false,
    });
  };

  handelUi = () => {
    if (this.state.showBank) return <BankTrans />;
    else if (this.state.showOut) return <OutTrans />;
    else if (this.state.showPayPal) return <PayPal />;
    else return <WesternUniuon />;
  };

  render() {
    return (
      <>
        <div className="ov-lay d-none">
          <div className="w-75 h-75 p-5 bg-white rounded">
            <h6 className="fw-bold text-center">اجراء طلب السحب</h6>
            <p className="text-secondary fw-bold text-center">
              من فضلك اختر طريقة السحب المناسبة لك
            </p>
            <div className="d-flex  justify-content-center my-5 ">
              <button
                onClick={this._BankTrans}
                className="pay-method btn mr-3 main-bgc text-white fw-bold"
              >
                التحويل البنكي
              </button>
              <button
                onClick={this._OutTrans}
                className="pay-method btn mr-3 bg-secondary text-white fw-bold"
              >
                التحويل الخارجي
              </button>
              <button
                onClick={this._WestrenUnion}
                className="pay-method btn mr-3 bg-secondary text-white fw-bold"
              >
                Western union
              </button>
              <button
                onClick={this._PayPal}
                className="pay-method btn mr-3 bg-secondary text-white fw-bold"
              >
                PayPal
              </button>
            </div>

            <this.handelUi />
            <button
              className="btn main-bgc fw-bold text-white d-block my-5 mx-auto"
              onClick={this.showControlers}
            >
              تاكيد الطلب
            </button>
          </div>
        </div>
        <Completed />
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
                    <button
                      onClick={this.hideControlers}
                      className="btn main-bgc fw-bold text-white"
                    >
                      شحن المحفظة
                    </button>
                  </div>
                </div>
                <div className="inst-requests">
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
                      <Stars />
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "170px" }}
                      >
                        <label className="fw-bold">تاريخ الحصة</label>
                        <p className="main-c">08-12-2020</p>
                      </div>
                    </div>
                    <div className="col-md-5 text-center">
                      <Link href="/web22">
                        <a  className="btn btn-primary fw-bold text-white">
                        ابدا الحصة <i className="fa fa-long-arrow-left"></i>
                        </a>
                      </Link>
                      <div className="time d-flex justify-content-between my-3">
                        <div className="t text-success">
                          <div className="p-2 fw-bold text-white bg-success rounded">
                            20
                          </div>
                          ثانية
                        </div>
                        <span>:</span>

                        <div className="t text-success">
                          <div className="p-2 fw-bold text-white bg-success rounded">
                            14
                          </div>
                          دقيقة
                        </div>
                        <span>:</span>
                        <div className="t text-success">
                          <div className="p-2 fw-bold text-white bg-success rounded">
                            00
                          </div>
                          ساعة
                        </div>
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
                  <div className="inst-requests">
                    <div
                      className="row shadow my-5 mr-3 bg-white rounded position-relative h-25"
                      style={{ padding: "10px", marginRight: "2px!important" }}
                    >
                      <div className="col-md-3">
                        <Image src={img} width="100" height="100" alt="" />
                      </div>
                      <div className="col-md-3 text-right">
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
                      <div className="col-md-5 text-center fw-bold text-white d-flex justify-content-end">
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

export default Web25;

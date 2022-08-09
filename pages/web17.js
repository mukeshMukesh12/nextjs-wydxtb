// Core
import React, { Component } from "react";
import Image from "next/dist/client/image";
import Cookie from "js-cookie";
import { connect } from "react-redux";
import { loadProfileAction } from "../redux/actions/action";
import { editProfileAction } from "../redux/actions/action";

import axios from "axios";

// Components
import CompleteData from "../Components/CompleteData";
import Search from "../Components/Search";
import AsideBar from "../Components/AsideBar";

// Image
import img from "../img/characters/user.png";
import img_logo from "../img/logo/1200px-Flag_of_Saudi_Arabia.svg.png";

// Reandering
class Web17 extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    country: "",
  };

  componentDidMount() {
    this.props.userData();

    if (this.props.curr) {
      this.setState({
        fname: this.props.curr.fname,
        lname: this.props.curr.lname,
        phone: this.props.curr.phone,
        email: this.props.curr.email,
        country: this.props.curr.country,
      });
    }
  }

  handelFName = (e) => {
    this.setState({ fname: e.target.value });
  };

  handelLName = (e) => {
    this.setState({ lname: e.target.value });
  };

  handelPhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  handelEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <>
        <CompleteData name={this.state.fname + " " + this.state.lname} />
        <Search class="" />
        <div className="gap my-5"></div>
        <section className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>
              <div className="col-md-8 sec-bg mr-3 mt-3 pt-5">
                <div className="container">
                  <h3 className="text-center">اعدادات الملف الشخصي</h3>
                  <div className="text-center position-relative my-3">
                    <label htmlFor="f-inp">
                      <i
                        className="prof-img-btn fa fa-camera p-2 main-bgc text-white rounded-circle position-absolute"
                        style={{ zIndex: "2" }}
                      ></i>
                    </label>
                    <input type="file" className="d-none" id="f-inp" />
                    <div className="prof-img mx-auto">
                      <Image
                        src={img}
                        width="100"
                        height="100"
                        className="rounded-circle"
                        alt="..."
                      />
                    </div>
                  </div>
                  <form className="text-right">
                    <div className="form-row justify-content-between">
                      <div className="form-group col-md-6">
                        <div className="form-group">
                          <label className="mt-2 fw-bold" htmlFor="inputEmail4">
                            الاسم الاول
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.fname}
                            onChange={this.handelFName}
                          />
                        </div>
                        <div className="form-group">
                          <label
                            className="mt-2 fw-bold"
                            htmlFor="inputPassword4"
                          >
                            ابريد الاليكتروني
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            value={this.state.email}
                            onChange={this.handelEmail}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputState" className="mt-2 fw-bold">
                            الدولة
                          </label>
                          <div className="d-flex justify-content-between">
                            <select id="inputState" className="form-control">
                              <option selected>{this.state.country}</option>
                              <option>...</option>
                            </select>

                            <div className="cunt-logo">
                              <Image
                                width="100"
                                height="100"
                                src={img_logo}
                                className="rounded-circle"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="mt-2 fw-bold">رقم الهاتف</label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.handelPhone}
                          />
                        </div>
                      </div>

                      <div className="form-group col-md-5">
                        <div className="form-group">
                          <label className="mt-2 fw-bold" htmlFor="inputEmail4">
                            الاسم الاول
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.lname}
                            onChange={this.handelLName}
                          />
                        </div>
                        <div className="form-group">
                          <label className="mt-2 fw-bold">
                            المرحلة الدراسية
                          </label>
                          <select
                            className="form-control"
                            defaultValue={{ label: "الاعدادي", value: 0 }}
                          >
                            <option>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="mt-2 fw-bold">الفصل الدراسي</label>
                          <select
                            className="form-control"
                            defaultValue={{ label: "الاول", value: 1 }}
                          >
                            <option>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="mt-2 fw-bold">المدينة</label>
                          <select
                            className="form-control"
                            defaultValue={{ label: "مصر", value: 2 }}
                          >
                            <option>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-primary d-block mb-5 mx-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        this.props.editProfile(this.state);
                      }}
                    >
                      حفظ
                    </button>
                  </form>
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

const mapDispatchToProps = (dispatch) => {
  if (Cookie.get("user")) {
    let acc_token = JSON.parse(Cookie.get("user")).access_token;
    let type = JSON.parse(Cookie.get("user")).type;

    return {
      userData: (token = acc_token, end_point = type) => {
        if (end_point == "student") dispatch(loadProfileAction(token, "user"));
        else if (end_point == "teacher")
          dispatch(loadProfileAction(token, end_point));
      },
      editProfile: (data, token = acc_token, end_point = type) => {
        if (end_point == "student")
          dispatch(editProfileAction(token, "user", data));
        else if (end_point == "teacher")
          dispatch(editProfileAction(token, end_point, data));
      },
    };
  } else {
    console.log("ha");
  }
};

const mapStateToProps = (state) => {
  return {
    curr: state.getUserProfileData.user_profile
      ? JSON.parse(state.getUserProfileData.user_profile)
      : null,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Web17);

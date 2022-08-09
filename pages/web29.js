// Core
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";

// Components
import AsideBar from "../Components/AsideBar";
import Completed from "../Components/Completed";
import PersonalInfo from "../Components/PersonalInfo";

// Images
import img from "../img/characters/user.png";

// Reandering
class Web29 extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    about: "",
    subjects_he_teach: "",
    educational_qulifictions: "",
  };

  // getUserProfile = () => {
  //   let token = JSON.parse(localStorage.getItem("user")).access_token;
  //   axios({
  //     method: "get",
  //     url: "https://moroj-apis.herokuapp.com/api/teacher",
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(function (response) {
  //       localStorage.setItem("tch", JSON.stringify(response.data.teacher));
  //     })
  //     .catch(function (response) {
  //       console.log(response.error);
  //     });
  // };

  // componentDidMount() {
  //   this.getUserProfile();
  //   let tch = JSON.parse(localStorage.getItem("tch"));
  //   this.setState({
  //     name: tch.name,
  //     phone: tch.phone,
  //     email: tch.email,
  //     country: tch.country,
  //     subjects_he_teach: tch.subjects_he_teach,
  //     educational_qulifictions: tch.educational_qulifictions,
  //   });
  // }

  render() {
    return (
      <>
        <Completed name={this.state.name} />
        <div className="gap my-5"></div>
        <section className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>
              <div className="col-md-8 sec-bg p-3">
                <div className="d-flex p-3 w-50 mx-auto">
                  <div className="p-3">
                    <Link href="/web29">
                      <a className="btn main-bgc text-white">
                        المعلومات الشخصية
                      </a>
                    </Link>
                  </div>
                  <div className="p-3">
                    <Link href="/web47">
                      <a className="btn btn-secondary">الشهادات الدراسية</a>
                    </Link>
                  </div>
                </div>
                <div className="text-center position-relative my-3">
                  <label htmlFor="f-inp">
                    <i
                      style={{ zIndex: "2" }}
                      className="prof-img-btn fa fa-camera p-2 main-bgc text-white rounded-circle position-absolute"
                    ></i>
                  </label>
                  <input type="file" className="d-none" id="f-inp" />
                  <div className="prof-img mx-auto">
                    <Image src={img} className="rounded-circle" alt="..." />
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-md-5">
                    <PersonalInfo name="الاسم" val={this.state.name} />
                    <PersonalInfo
                      name="البريد الاليكتروني"
                      val={this.state.email}
                    />
                    <PersonalInfo
                      name="المواد التي ادرسها"
                      val={this.state.subjects_he_teach}
                    />
                    <div className="d-flex mb-5">
                      <div className="p-3 main-bgc text-white fw-bold rounded mx-2 ">
                        رياضيات
                      </div>
                      <div className="p-3 main-bgc text-white fw-bold rounded mx-2 ">
                        احصاء
                      </div>
                      <div className="p-3 main-bgc text-white fw-bold rounded mx-2 ">
                        جبر
                      </div>
                    </div>
                    <div className="sub-price text-right">
                      <h6 className="mb-5 fw-bold">سعر الساعة لكل مادة</h6>
                      <table>
                        <thead></thead>
                        <tbody>
                          <tr>
                            <td>
                              <h5 className="text-right">رياضيات </h5>
                            </td>
                            <td className="py-3">
                              <span className="p-2 text-right rounded fw-bold bg-white">
                                100
                              </span>
                            </td>
                            <td>
                              <h5 className="text-right">ريال</h5>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <h5 className="text-right">احصاء </h5>
                            </td>
                            <td className="py-3">
                              <span className="p-2 text-right rounded fw-bold bg-white">
                                100
                              </span>
                            </td>
                            <td>
                              <h5 className="text-right">ريال</h5>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <h5 className="text-right">جبر </h5>
                            </td>
                            <td className="py-3">
                              <span className="p-2 text-right rounded fw-bold bg-white">
                                100
                              </span>
                            </td>
                            <td>
                              <h5 className="text-right">ريال</h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="col-md-5">
                    <div className="my-3">
                      <PersonalInfo
                        name="المؤهل"
                        val={this.state.educational_qulifictions}
                      />
                    </div>

                    <div className="my-3">
                      <PersonalInfo name="رقم الهاتف" val={this.state.phone} />
                    </div>

                    <p className="text-right fw-bold">نبذة عني</p>
                    <textarea className="w-100 h-25 border-0 p-3">
                      {this.state.about}
                    </textarea>
                    <div className="w-50">
                      <p className="text-right fw-bold">النوع</p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <label className="main-c fw-bold">ذكر</label>
                          <input type="radio" name="a" />
                        </div>
                        <div>
                          <label className="main-c fw-bold">انثي</label>
                          <input type="radio" name="a" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn main-bgc fw-bold text-white d-block mx-auto">
                  حفظ
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="gap"></div>
      </>
    );
  }
}

export default Web29;

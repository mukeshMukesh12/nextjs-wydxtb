// Core
import React, { Component } from "react";

import Image from "next/dist/client/image";

// Components
import Completed from "../Components/Completed";
import Stars from "../Components/Stars";
import AsideBar from "../Components/AsideBar";

// Images
import img from "../img/characters/mr1.png";

// Reandering
class Web40 extends Component {
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
              <div className="col-md-8">
                <div className="row">
                  <div
                    className="res-0 col d-flex sec-bg mr-3 rounded"
                    style={{ padding: "#9fffb6" }}
                  >
                    <div className="col-md d-flex justify-content-between">
                      <h5 className="text-right m-0 pt-2 fw-bold">التقييمات</h5>
                    </div>
                    <div className="col-md p-2">
                      <select className="form-select bg-light p-2">
                        <option selected>خمس نجوم</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-white shadow row p-3 mb-5 bg-white rounded mt-3 mr-2"
                  style={{ minHeight: "117px" }}
                >
                  <div className="col-md">
                    <div className="right d-flex text-right">
                      <div style={{ width: "60px", height: "60px" }}>
                        <Image
                          src={img}
                          className="ml-2"
                          width="100"
                          height="100"
                          alt=""
                        />
                      </div>
                      <div className="u-info">
                        <h4 className="main-c">محمد علي</h4>
                        <span className="fw-bold text-secondary">
                          الصف الثالث الاعدادي
                        </span>
                        <div className="stars">
                          <Stars rate="5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div
                      className="h-100 bg-secondary mx-auto"
                      style={{ width: "2px" }}
                    ></div>
                  </div>
                  <div className="col-md h-100">
                    <p className="text-secondary text-right">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشانانا
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white shadow row p-3 mb-5 bg-white rounded mt-3 mr-2"
                  style={{ minHeight: "117px" }}
                >
                  <div className="col-md">
                    <div className="right d-flex text-right">
                      <div style={{ width: "60px", height: "60px" }}>
                        <Image
                          src={img}
                          className="ml-2"
                          width="100"
                          height="100"
                          alt=""
                        />
                      </div>
                      <div className="u-info">
                        <h4 className="main-c">محمد علي</h4>
                        <span className="fw-bold text-secondary">
                          الصف الثالث الاعدادي
                        </span>
                        <div className="stars">
                          <Stars rate="5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div
                      className="h-100 bg-secondary mx-auto"
                      style={{ width: "2px" }}
                    ></div>
                  </div>
                  <div className="col-md h-100">
                    <p className="text-secondary text-right">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشانانا
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white shadow row p-3 mb-5 bg-white rounded mt-3 mr-2"
                  style={{ minHeight: "117px" }}
                >
                  <div className="col-md">
                    <div className="right d-flex text-right">
                      <div style={{ width: "60px", height: "60px" }}>
                        <Image
                          src={img}
                          className="ml-2"
                          width="100"
                          height="100"
                          alt=""
                        />
                      </div>
                      <div className="u-info">
                        <h4 className="main-c">محمد علي</h4>
                        <span className="fw-bold text-secondary">
                          الصف الثالث الاعدادي
                        </span>
                        <div className="stars">
                          <Stars rate="5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div
                      className="h-100 bg-secondary mx-auto"
                      style={{ width: "2px" }}
                    ></div>
                  </div>
                  <div className="col-md h-100">
                    <p className="text-secondary text-right">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشانانا
                    </p>
                  </div>
                </div>

                <div
                  className="bg-white shadow row p-3 mb-5 bg-white rounded mt-3 mr-2"
                  style={{ minHeight: "117px" }}
                >
                  <div className="col-md">
                    <div className="right d-flex text-right">
                      <div style={{ width: "60px", height: "60px" }}>
                        <Image
                          src={img}
                          className="ml-2"
                          width="100"
                          height="100"
                          alt=""
                        />
                      </div>
                      <div className="u-info">
                        <h4 className="main-c">محمد علي</h4>
                        <span className="fw-bold text-secondary">
                          الصف الثالث الاعدادي
                        </span>
                        <div className="stars">
                          <Stars rate />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div
                      className="h-100 bg-secondary mx-auto"
                      style={{ width: "2px" }}
                    ></div>
                  </div>
                  <div className="col-md h-100">
                    <p className="text-secondary text-right">
                      هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة
                      ما سيلهي القارئ عن التركيز على الشانانا
                    </p>
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

export default Web40;

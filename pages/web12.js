// Core
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";

// Component
import InstInSearch from "../Components/InstInSearch";
import Subjects from "../Components/Subjects";
import Comments from "../Components/Comments";

// Images
import std_img from "../img/characters/man-1.jpeg";
import user from "../img/characters/mr1.png";

// Reandering
class Web12 extends Component {
  render() {
    return (
      <>
        <InstInSearch
          name="محمد عبد السلام"
          exper="8/6"
          star="5"
          online="100"
          ofline="120"
          cuntry="الرياض"
        />
        <div className="mb-5">
          <div className="container-fluid">
            <div className="cust  shadow bg-white rounded mx-auto">
              <div className="user-img">
                <Image
                  src={user}
                  width="100"
                  height="100"
                  className=" rounded "
                  alt=""
                />
              </div>
              <section className="profile-content">
                <div className="container py-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row text-right">
                        <div className="col-md p-3">
                          <div className="about-tet">
                            <h4 className="main-c fw-bold">عن المعلم</h4>
                            <span className="line f-line"></span>
                            <span className="line t-line"></span>
                          </div>
                          <p className="text-secondary my-5">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،
                            لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك
                            أن تولد مثل هذا النص أو العديد من النصوص الأخرى
                            إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                          </p>

                          <div className="about-tet">
                            <h4 className="main-c fw-bold">المواد التعليمية</h4>
                            <span className="line f-line"></span>
                            <span className="line t-line"></span>
                          </div>
                          <div className="row my-5">
                            <Subjects sub="علوم" />
                            <Subjects sub="احياء" />
                            <Subjects sub="mathematics" />
                            <Subjects sub="كيمياء" />
                            <Subjects sub="فيزياء" />
                          </div>
                          <div className="about-tet">
                            <h4 className="main-c fw-bold">التقييمات</h4>
                            <span className="line f-line"></span>
                            <span className="line t-line"></span>
                          </div>
                          <Comments
                            name="عبد الله احمد"
                            star="5"
                            date="15-02-2020"
                            comment="مين جااااااامدناووو"
                            img={std_img}
                          />
                          <Comments
                            name="عبد الله احمد"
                            star="5"
                            date="15-02-2020"
                            comment="مين جااااااامدناووو"
                            img={std_img}
                          />
                          <Comments
                            name="عبد الله احمد"
                            star="5"
                            date="15-02-2020"
                            comment="مين جااااااامدناووو"
                            img={std_img}
                          />
                          <Comments
                            name="عبد الله احمد"
                            star="5"
                            date="15-02-2020"
                            comment="مين جااااااامدناووو"
                            img={std_img}
                          />
                          <Comments
                            name="عبد الله احمد"
                            star="5"
                            date="15-02-2020"
                            comment="مين جااااااامدناووو"
                            img={std_img}
                          />
                          <Comments
                            name="عبد الله احمد"
                            star="5"
                            date="15-02-2020"
                            comment="مين جااااااامدناووو"
                            img={std_img}
                          />
                          <Comments
                            name="عبد الله احمد"
                            star="5"
                            date="15-02-2020"
                            comment="مين جااااااامدناووو"
                            img={std_img}
                          />
                          <Comments
                            name="عبد الله احمد"
                            star="5"
                            date="15-02-2020"
                            comment="مين جااااااامدناووو"
                            img={std_img}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="row w-100">
                        <div className="col-md bg-light p-3 text-right">
                          <div className="d-flex justify-content-between">
                            <span className="step text-white main-bgc rounded-circle text-center">
                              1
                            </span>
                            <span className="le main-bgc"></span>
                            <span className="step text-white main-bgc rounded-circle text-center">
                              2
                            </span>
                            <span className="le"></span>
                            <span className="step text-white bg-secondary rounded-circle text-center">
                              3
                            </span>
                          </div>
                          <h4 className="main-c my-5">الخطوة الثانية</h4>
                          <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group mb-5">
                              <label>عدد الساعات</label>
                              <div className="d-flex">
                                <input
                                  type="text"
                                  value="3"
                                  className="form-control w-75"
                                />
                                <span className="fw-bold text-secondary mx-3">
                                  ساعات
                                </span>
                              </div>
                            </div>
                            <div className="form-group mb-5">
                              <label>عدد الطلاب</label>
                              <div className="d-flex">
                                <input
                                  type="text"
                                  value="3"
                                  className="form-control w-75"
                                />
                                <span className="fw-bold text-secondary mx-3">
                                  طالب
                                </span>
                              </div>
                            </div>
                            <div className="d-flex">
                              <Link href="/web11">
                                <a className="btn btn-secondary text-white d-block mx-auto">
                                  السابق
                                </a>
                              </Link>
                              <Link href="/web13">
                                <a className="btn main-bgc text-white d-block mx-auto">
                                  التالي
                                </a>
                              </Link>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Web12;

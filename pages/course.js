// Core
import React, { Component } from "react";

import Image from "next/image";

// Images
import partImg from "../img/logo/p1.png";
import CourseCard from "../Components/CourseCard";

// Rendring
class Course extends Component {
  render() {
    return (
      <>
        <section className="profile-home main-bgi py-5  ">
          <div className="container position-relative">
            <h3 className="text-white fw-bold sec-title text-center center-after white-after">
              <div className="gap"></div>
              قاعدة بيانات تحتوي علي جميع الكورسات التي تبحث عنها
            </h3>
          </div>
          <div className="gap"></div>
        </section>
        <div className="container-fluid">
          <div className="gap"></div>
          <div className="drop-cont shadow sec-bg rounded p-5 w-75 position-absolute">
            <div className="drops row">
              <div className="col-md">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle w-100 mb-3 py-3 bg-white px-3"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    اسم الجامعة
                  </button>
                  <div
                    className="dropdown-menu text-right"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      الابتدائي
                    </a>
                    <a className="dropdown-item" href="#">
                      الاعددي
                    </a>
                    <a className="dropdown-item" href="#">
                      الثانوي
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <input
                  type="text"
                  className="w-100 h-75 px-3"
                  placeholder="اسم الكورس"
                />
              </div>
            </div>
            <div className="search-btn">
              <button className="btn px-5 position-absolute main-bgc">
                <i className="fa fa-search fa-sm"></i>
                ابحث عن معلم
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="sec-hello mt-5 text-center">
            <h5 className="fw-bold text-center"># شركائنا</h5>
            <h5 className="w-100 fw-bold sec-title center-after">
              شركاء النجاح
            </h5>
          </div>
          <div className="d-flex mx-auto" style={{ width: "fit-content" }}>
            <div style={{ width: "170px" }}>
              <Image src={partImg} width={100} height={100} alt="" />
            </div>
            <div style={{ width: "170px" }}>
              <Image src={partImg} width={100} height={100} alt="" />
            </div>
            <div style={{ width: "170px" }}>
              <Image src={partImg} width={100} height={100} alt="" />
            </div>
            <div style={{ width: "170px" }}>
              <Image src={partImg} width={100} height={100} alt="" />
            </div>
            <div style={{ width: "170px" }}>
              <Image src={partImg} width={100} height={100} alt="" />
            </div>
          </div>
          <div className="sec-hello mt-5 text-center">
            <h5 className="w-100 fw-bold sec-title center-after mb-5">
              الاكثر شيوعا بين الطلاب
            </h5>
          </div>
          <div className="c-cards row">
            <CourseCard
              col="col-md-4"
              name="اساسيات علوم الحاسب"
              time="12"
              rate="120"
              price="200"
              univers="جامعة الملك فهد"
              to="/course_1"
            />
            <CourseCard
              col="col-md-4"
              name="اساسيات علوم الحاسب"
              time="12"
              rate="120"
              price="200"
              univers="جامعة الملك فهد"
              to="/course_1"
            />
            <CourseCard
              col="col-md-4"
              name="اساسيات علوم الحاسب"
              time="12"
              rate="120"
              price="200"
              univers="جامعة الملك فهد"
              to="/course_1"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Course;

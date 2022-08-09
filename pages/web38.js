// Core
import React, { useState } from "react";

import Image from "next/image";

// Images
import img from "../img/characters/user.png";

// Components
import CompleteData from "../Components/CompleteData";
import AsideBar from "../Components/AsideBar";
import Search from "../Components/Search";
import Stars from "../Components/Stars";

// Reandering
const Web38 = () => {
  const op_eduStage = [
    { value: "اختر المرحلة الدراسية", label: "اختر المرحلة الدراسية" },
  ];

  const op_subject = [
    { value: "اختر المادة", label: "اختر المادة" },
    { value: "math ", label: "math" },
    { value: "pysyc", label: "pysyc" },
    { value: "pyloscfy", label: "pyloscfy" },
  ];

  const op_duration = [{ value: "المدة بالساعة", label: "المدة بالساعة" }];

  const op_meeting = [
    { value: "انلاين", label: "انلاين" },
    { value: "اوفلاين", label: "اوفلاين" },
  ];

  const [edustage, setEduStage] = useState("");
  const [subject, setSubject] = useState("");
  const [duration, setDuration] = useState("");
  const [meeting, setMeeting] = useState("");

  const hideControlers = () => {
    document.querySelector(".ov-lay").classList.toggle("d-none");
    document.body.style.overflowY = "hidden";
  };

  const showControlers = () => {
    document.querySelector(".ov-lay").classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  };

  return (
    <>
      <div className="ov-lay d-none">
        <div className="w-75 h-75 p-5 bg-white rounded">
          <h3 className="fw-bold text-center main-c">عرض سعر</h3>

          <div className="form-row my-5 justify-content-center">
            <div className="form-group mx-2">
              <select
                value={edustage}
                className="form-control border"
                onChange={(e) => setEduStage(e.target.value)}
              >
                {op_eduStage.map((stage, index) => (
                  <option value={stage.value} key={index}>{stage.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group mx-2">
              <select
                value={subject}
                className="form-control border"
                onChange={(e) => setSubject(e.target.value)}
              >
                {op_subject.map((sub, index) => (
                  <option value={sub.value} key={index}>{sub.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group mx-2">
              <select
                value={duration}
                className="form-control border"
                onChange={(e) => setDuration(e.target.value)}
              >
                {op_duration.map((dur, index) => (
                  <option value={dur.value} key={index}>{dur.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group mx-2">
              <select
                value={meeting}
                className="form-control border"
                onChange={(e) => setMeeting(e.target.value)}
              >
                {op_meeting.map((met, index) => (
                  <option value={met.value} key={index}>{met.label}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            className="btn main-bgc fw-bold text-white d-block my-5 mx-auto"
            onClick={showControlers}
          >
            تاكيد الطلب
          </button>
        </div>
      </div>

      <CompleteData />
      <Search />
      <div className="gap my-5"></div>
      <section className="profile-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <AsideBar />
              </div>
            </div>
            <div className="col-md-9">
              <div className="row sec-bg mr-3 rounded">
                <div
                  className="res-0 col d-flex justify-content-between "
                  style={{ padding: "10px" }}
                >
                  <div className="d-flex align-items-center">
                    <h5>عروض الاسعار</h5>
                  </div>

                  <div className="d-flex align-items-center">
                    <select className="form-control">
                      <option selected>حالية</option>
                      <option>...</option>
                    </select>
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
                    <Stars rate="5" />
                    <div className="d-flex justify-content-between">
                      <p className="text-secondary">
                        لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن
                        الغاية هي الشكل
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 text-center">
                    <div className="my-3 w-75 mx-auto d-flex justify-content-center">
                      <div className="d-flex justify-content-between ml-3">
                        <h6>المادة</h6>
                        <h6 className="main-c">احياء</h6>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h6>السعر</h6>
                        <h6 className="main-c">120 ريال</h6>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center w-75 mx-auto">
                      <button className="btn btn-danger ml-3">حذف</button>
                      <button className="btn main-bgc text-white">
                        موافقة
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 row text-right mx-auto my-3">
                    <div className="col-md">
                      <i className="fa fa-graduation-cap"></i> سنوات الخبرة 6 /
                      8 سنوات
                    </div>

                    <div className="col-md d-flex justify-content-end">
                      <button className="mr-2 btn main-bgc text-white">
                        احجز الان
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
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
                    <Stars rate="5" />
                    <div className="d-flex justify-content-between">
                      <p className="text-secondary">
                        لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن
                        الغاية هي الشكل
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 text-center">
                    <div className="my-3 w-75 mx-auto d-flex justify-content-center">
                      <div className="d-flex justify-content-between ml-3">
                        <h6>المادة</h6>
                        <h6 className="main-c">احياء</h6>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h6>السعر</h6>
                        <h6 className="main-c">120 ريال</h6>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center w-75 mx-auto">
                      <button className="btn btn-danger ml-3">حذف</button>
                      <button className="btn main-bgc text-white">
                        موافقة
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12 row text-right mx-auto my-3">
                    <div className="col-md">
                      <i className="fa fa-graduation-cap"></i> سنوات الخبرة 6 /
                      8 سنوات
                    </div>

                    <div className="col-md d-flex justify-content-end">
                      <button className="mr-2 btn main-bgc text-white">
                        احجز الان
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        className="btn main-bgc text-white fw-bold d-block mx-auto"
        onClick={hideControlers}
      >
        انشاء عرض السعر
      </button>
      <div className="gap"></div>
    </>
  );
};

export default Web38;

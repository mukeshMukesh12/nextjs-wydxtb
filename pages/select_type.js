// Core
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Image from "next/dist/client/image";
import { studentSignupApi, teacherSignupApi } from "../redux/actions/action";
import Cookie from "js-cookie";

// Images
import img1 from "../img/characters/9@2x.png";
import img2 from "../img/characters/8@2x.png";

// Reandering
const Select_type = (props) => {
  const [select_home_sec, setSelect_home_sec] = useState("");
  const [std, setStd] = useState("");
  const [tch, setTch] = useState("");

  useEffect(() => {
    try {
      setSelect_home_sec(JSON.parse(Cookie.get("select_type")));
      setStd(JSON.parse(Cookie.get("student")));
      setTch(JSON.parse(Cookie.get("teacher")));
    } catch (error) {}
  }, []);
  return (
    <div>
      <>
        <section className="good-wishes">
          <div className="cross-border main-bgi py-5 d-flex justify-content-center">
            <div className="cross-content p-5">
              <div className="container text-center">
                <h5 className="text-warning fw-bold mt-5">
                  # {select_home_sec.select_type_page_hashtag}
                </h5>
                <h1 className="sec-title text-white fw-bold">
                  {select_home_sec.select_type_page_title}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="signup sec-bg  my-5">
          <div className="container text-right mt-5 py-5">
            <div className="row justify-content-center">
              <div className="col-md-5 text-center p-3">
                <div className="shadow mb-5 bg-white rounded p-3">
                  <Image src={img2} alt="" />
                  <h4 className="fw-bold main-c">{std.student_welocme_text}</h4>
                  <p className="fw-bold">{std.student_description}</p>
                  <Link href="/signup">
                    <a
                      className="btn fw-bold"
                      style={{
                        color: std.student_button_text_color,
                        backgroundColor: std.student_button_background_color,
                      }}
                      onClick={props.stdApi}
                    >
                      {std.student_button_text}
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-5 text-center p-3">
                <div className="shadow mb-5 bg-white rounded p-3">
                  <Image src={img1} alt="" />
                  <h4 className="fw-bold main-c">{tch.teacher_welocme_text}</h4>
                  <p className="fw-bold">{tch.teacher_description}</p>

                  <Link href="/signup">
                    <a
                      className="btn fw-bold"
                      style={{
                        color: tch.teacher_button_text_color,
                        backgroundColor: tch.teacher_button_background_color,
                      }}
                      onClick={props.tchApi}
                    >
                      {tch.teacher_button_text}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    stdApi: () => dispatch(studentSignupApi()),
    tchApi: () => dispatch(teacherSignupApi()),
  };
};

export default connect(null, mapDispatchToProps)(Select_type);

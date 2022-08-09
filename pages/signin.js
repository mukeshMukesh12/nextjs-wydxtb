// Core
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { connect } from "react-redux";
import { userSignin } from "../redux/actions/action";

import Cookie from "js-cookie";
import { getSigninData } from "../redux/actions/action";

// Images
import img from "../img/characters/8@2x.png";

// Reandering
const Signin = (props) => {
  // Active && Deactive Inputs
  useEffect(() => {
    props.get;
    document.querySelectorAll("input").forEach((inp) => handelInput(inp));
    document
      .querySelectorAll(".btn-cont button")
      .forEach((btn) => handelButton(btn));
  }, []);

  // useEffect(() => {
  //   props.getSigninData();

  // }, []);

  const [signin, setSignin] = useState("");

  setTimeout(() => {
    try {
      setSignin(JSON.parse(Cookie.get("signin")));
    } catch (error) {}
  }, 1000);

  function handelInput(inp) {
    inp.onblur = function () {
      this.classList.remove("active");
      this.parentNode.childNodes[0].classList.remove("main-c");
    };
    inp.onfocus = function () {
      this.classList.add("active");
      this.parentNode.childNodes[0].classList.add("main-c");
    };
  }

  // Cach input Value Logic
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [api, setApi] = useState(
    `${process.env.API_URL}user/registration/login`
  );

  function handelLogIn(e) {
    e.preventDefault();
    let item = { email, password };
    props.userSignin(item, api, "");
  }

  // Active && Deactive Buttons
  function handelButton(btn) {
    btn.onclick = function (e) {
      e.preventDefault();
      document
        .querySelectorAll(".btn-cont button")
        .forEach((btn) => btn.setAttribute("class", "btn px-5 btn-light"));
      this.setAttribute("class", "btn px-5 ml-3 main-bgc text-white");
      if (this.innerText == "طالب") {
        setApi(`${process.env.API_URL}user/registration/login`);
      } else {
        setApi(`${process.env.API_URL}teacher/registration/login`);
      }
    };
  }

  return (
    <div>
      <>
        <section className="good-wishes">
          <div className="cross-border main-bgi py-5 d-flex justify-content-center">
            <div className="cross-content p-5">
              <div className="container text-center">
                <h5 className="text-warning fw-bold mt-5">
                  # {signin.signin_hashtag}
                </h5>
                <h1 className="sec-title text-white fw-bold">
                  {signin.signin_title}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="signin sec-bg mb-5">
          <div className="container text-right mt-5 py-5">
            <div className="row">
              <div className="col-md pt-5">
                <form className="text-center" onSubmit={(e) => handelLogIn(e)}>
                  <div className="form-group">
                    <div className="btn-cont w-75 d-flex text-center mb-5 justify-content-between mx-auto">
                      <button className="btn px-5 ml-3 main-bgc text-white">
                        طالب
                      </button>
                      <button className="btn px-5 btn-light">معلم</button>
                    </div>
                    <div className="position-relative mb-3">
                      <i className="fa fa-user position-absolute"></i>
                      <input
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="اسم المستخدم او رقم الجوال"
                      />
                    </div>
                    <div className="position-relative">
                      <i className="fa fa-lock position-absolute"></i>
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="كلمة المرور"
                      />
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label pr-3"
                          htmlFor="exampleCheck1"
                        >
                          تذكرني
                        </label>
                      </div>
                      <a href="#" className="text-secondary fw-bold">
                        نسيت كلمة المرور
                      </a>
                    </div>
                    <button className="btn main-bgc my-3 text-white">
                      تسجيل الدخول
                    </button>
                    <div className="using-media text-center">
                      <label htmlFor="">اوقم بالتسجيل من</label>

                      {/*<!-- Img1 -->*/}
                      {/*<!-- Img2 -->*/}
                    </div>
                    <p>
                      ليس لديك حساب!!!
                      <Link href="/select_type">
                        <a className="btn-link fw-bold">انشئ حساب الان</a>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
              <div className="col-md">
                <Image className="w-100" src={img} alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  if (Cookie.get("user")) {
    let token = JSON.parse(Cookie.get("user")).access_token;
    return {
      userSignin: (data, api, goto) => dispatch(userSignin(data, api, goto)),
      getSigninData: () =>
        dispatch(
          getSigninData(
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hbGdvcml0aG0uZGVtby5jYXJtYXJ0YXBwLmNvbVwvbW9yb2dcL3B1YmxpY1wvYXBpXC9hZG1pblwvcmVnaXN0cmF0aW9uXC9sb2dpbiIsImlhdCI6MTYzMTA0ODAyNywiZXhwIjoxNjMxMTM0NDI3LCJuYmYiOjE2MzEwNDgwMjcsImp0aSI6IksyZHhGY3RiUG5PanhPM1QiLCJzdWIiOjEsInBydiI6ImRmODgzZGI5N2JkMDVlZjhmZjg1MDgyZDY4NmM0NWU4MzJlNTkzYTkiLCJ0eXBlIjoiQWRtaW4ifQ.KaMJaYh5SNsXVtaBcCaEvBUIVh4VJihoo7sNsycp-2M"
          )
        ),
    };
  }
};
export default connect(null, mapDispatchToProps)(Signin);

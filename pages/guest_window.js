import React, { useEffect, useState } from "react";
import Image from "next/dist/client/image";
import img from "../img/characters/user.png";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(() => import("./src/page"), {
  ssr: false,
});

export default function Guest_window() {
  const [val, setVal] = useState("");
  const createMessage = (msg) => {
    let chObj = document.createElement("div");
    chObj.classList.add("chat-obj");
    chObj.innerHTML = `
                <div class="d-flex flex-column align-items-start">
                  <img src=${img} class="me" alt="">
                  <p class="w-100 sec-bg fw-bold p-3 my-3">${msg}</p>
                  <span class="seen">122.0 </span>
                </div>
        `;
    return chObj;
  };

  const addMessage = (e) => {
    e.preventDefault();
    let cont = document.querySelector(".msg-content").value;
    if (cont) {
      document.querySelector(".chat-body").appendChild(createMessage(cont));
      document.querySelector(".msg-content").value = "";
    }
  };

  const hideControlers = () => {
    document.querySelector(".ov-lay").classList.toggle("d-none");
    document.body.style.overflowY = "hidden";
  };

  const showControlers = () => {
    document.querySelector(".ov-lay").classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  };

  useEffect(() => {
    document.querySelector(".show-chat").onclick = () => {
      console.log(this);
      document
        .querySelector(".col-md-4.position-absolute")
        .classList.toggle("hidden-chat");
    };
    document.querySelector(".fa-microphone.rounded").onclick = function () {
      this.classList.toggle("fa-microphone-slash");
    };
  }, []);

  return (
    <>
      <div className="ov-lay direc d-none">
        <div className="w-75 h-75 p-5 bg-white rounded text-right">
          <i className="fa fa-close" onClick={showControlers}></i>
          <h6 className="sec-bg main-c fw-bold text-center p-3 mb-2">
            ضبط اعدادات الصوت
          </h6>
          <div className="title-logo d-flex my-3 justify-content-center">
            <i className="fa fa-microphone fa-lg main-c p-3"></i>
            <h4 className="main-c fw-bold">اختبار الميكروفون</h4>
          </div>
          <h6 className="text-secondary text-center fw-bold">
            تأكد من توصيل الميكروفون و التحدث فيه
          </h6>
          <div className="slideContainer">
            <input
              type="range"
              min="0"
              max="100"
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
              }}
              className="slider"
              id="myRange"
            />
            <p className="text-center fw-bold main-c">
              <span id="value"></span>
            </p>
          </div>
          <button
            className="btn main-bgc text-white fw-bold d-block mx-auto"
            onClick={showControlers}
          >
            <i className="fa fa-long-arrow-left"></i> ابدا الحصة
          </button>
        </div>
      </div>
      <nav className="p-3 main-bgc mb-5">
        <div className="container">
          <div className="art-board-header  position-relative">
            <div className="col-md text-right ">
              <h5 className="text-white mx-auto text-center fw-bold mb-4">
                وقت الحصة الحالي
              </h5>

              <div className="text-white text-center fw-bold d-flex justify-content-center">
                <div className="time-sec">
                  <div className="time-block rounded p-3 bg-white main-c">
                    20
                  </div>
                  <p>ثانية</p>
                </div>
                <span className="m-3">:</span>
                <div className="time-men">
                  <div className="time-block rounded p-3 bg-white main-c">
                    15
                  </div>
                  <p>دقيقة</p>
                </div>
                <span className="m-3">:</span>
                <div className="time-hou">
                  <div className="time-block rounded p-3 bg-white main-c">
                    00
                  </div>
                  <p>ساعة</p>
                </div>
              </div>
            </div>
            
            <div className="d-flex std-tech-container position-absolute justify-content-center w-100 pt-3">
              <div className="teacher ml-3 text-center">
                <Image src={img} className="techImg d-flex mb-2" alt=""/>
                <i
                  onClick={hideControlers}
                  className="fa fa-microphone fa-lg main-c p-3 "
                ></i>
              </div>
              <div className="student text-center">
                <Image src={img} className="stdImg d-flex mb-2"  alt="" />
                <i
                  onClick={hideControlers}
                  className="fa fa-microphone fa-lg main-c p-3 "
                ></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="gap"></div>
      <section className="lect-content" style={{ height: "100vh" }}>
        <div className="h-100">
          <div className="row position-relative h-100">
            <div className="col-md-12">
              <div className="container h-100">
                <div className=" p-0 py-3 ml-3  rounded h-100">
                  <div className="top-h px-3 ">
                    <h3 className="text-center fw-bold main-c">Projector</h3>
                  </div>
                  <DynamicComponentWithNoSSR />
                  {/* <div className="bg-dark"></div> */}
                  <div className="ic-container p-3 main-bgc text-center ">
                    <div className="row">
                      <div className="col-md-6 text-center">
                        <button className="btn btn-danger">غادر</button>
                      </div>
                      <div className="col-md-6 text-center">
                        <i className="p-3 bg-white mr-2 rounded fa fa-microphone"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4  hidden-chat position-absolute">
              <i className="show-chat fa fa-arrow-left position-absolute"></i>
              <div className="chat-area  shadow rounded border bg-white p-3">
                <h3 className="text-center main-c">
                  <i className="fa fa-commenting fa-sm"></i>
                  chat
                </h3>
                <div className="chat-body"></div>
                <div className="send-data d-flex my-3 justify-content-between">
                  <div className="d-flex">
                    <i className="fa fa-picture-o"></i>
                    <i className="fa fa-paperclip"></i>
                  </div>
                  <form className="d-flex w-100" onSubmit={addMessage}>
                    <input
                      type="text"
                      className="msg-content form-control w-100 "
                      placeholder="اكتب هنا"
                    />
                    <button
                      type="submit"
                      className="add-msg btn btn-link main-c fw-bold"
                    >
                      ارسال
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="gap my-5"></div>
      {/* <div className="gap my-5"></div>
      <div className="gap my-5"></div>
      <div className="gap my-5"></div> */}
    </>
  );
}

// Core
import React, { useState, useEffect } from "react";
import Image from "next/dist/client/image";
import dynamic from "next/dynamic";

// images
import img from "../img/characters/user.png";

const DynamicComponentWithNoSSR = dynamic(() => import("../agora/host"), {
  ssr: false,
});
// Reandering
const Web22 = () => {
  useEffect(() => {
    let whiteBoard = document.querySelector(".wh-board");
    let can = document.querySelector("#canvas");
    fitToContainer(can);
    let ctx = can.getContext("2d");
    let painting = false;

    let paintTools = {
      pencil: function (e) {
        paintSettings(e, 2, "#000");
      },

      boardPen: function (e) {
        paintSettings(e, 5, "#00F");
      },

      eraser: function (e) {
        paintSettings(e, 9, "#fff");
      },
    };

    function pencilType(selector, tool) {
      selector.onclick = function () {
        if (document.querySelectorAll(".active").length > 0) {
          document
            .querySelectorAll(".active")
            .forEach((ele) => ele.classList.remove("active"));
        } else {
          this.classList.add("active");
          can.onmousedown = function () {
            start(1);
          };
          can.onmouseup = end;
          can.onmousemove = tool;
        }
      };
    }

    let reguler = document.querySelector(".fa-pencil");
    let bold = document.querySelector(".fa-pencil-square-o");

    let eraser = document.querySelector(".fa-circle-thin");
    pencilType(reguler, paintTools.pencil);
    pencilType(bold, paintTools.boardPen);
    pencilType(eraser, paintTools.eraser);

    document.querySelector(".fa-arrows-alt").onclick = function () {
      whiteBoard.classList.toggle("col-md-12");
      document.querySelector(".chat-area").classList.toggle("col-md-12");
      fitToContainer(can);
      can.onmousedown = function () {
        start(1);
      };
      can.onmouseup = end;
      can.onmousemove = paintTools.pencil;
    };
    function fitToContainer(canvas) {
      canvas.style.width = "100%";
      canvas.style.height = "81%";
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function start(e, paint) {
      painting = true;
      if (paint == 1) {
        paintTools.pencil(e);
      } else {
        paintTools.boardPen(e);
      }
    }

    function end() {
      painting = false;
      ctx.beginPath();
    }

    function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
      };
    }

    function paintSettings(e, lw, color) {
      if (!painting) return;
      ctx.lineWidth = lw;
      ctx.lineCap = "round";
      ctx.strokeStyle = color;
      let mAxis = getMousePos(can, e);
      ctx.lineTo(mAxis.x, mAxis.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(mAxis.x, mAxis.y);
    }

    // Range Slider logic
    var slider = document.getElementById("myRange");
    var output = document.getElementById("value");

    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = value;
    };

    var start_value = slider.getAttribute("value");

    var x = start_value;
    var color =
      "linear-gradient(90deg, var(--main-color)" +
      x +
      "% , rgb(214, 214, 214)" +
      x +
      "%)";
    slider.style.background = color;

    slider.addEventListener("mousemove", function () {
      x = slider.value;
      color =
        "linear-gradient(90deg, var(--main-color)" +
        x +
        "% , rgb(214, 214, 214)" +
        x +
        "%)";
      slider.style.background = color;
    });
  }, []);

  const createMessage = (msg) => {
    let chObj = document.createElement("div");
    chObj.classList.add("chat-obj");
    chObj.innerHTML = `
                <div class="d-flex flex-column align-items-start">
                  <img src=${img.src} class="me" alt="">
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
              // value={state.value}
              onChange={(e) => {
                // setState({ value: e.target.value });
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
          <div className="art-board-header row position-relative">
            <div className="col-md text-right d-flex">
              <h5 className="text-white mx-auto fw-bold pt-3 ml-3">
                وقت الحصة الحالي
              </h5>
            </div>
            <div className="col-md d-flex justify-content-center align-items-center my-3">
              <div className="text-white text-center fw-bold d-flex">
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
            <DynamicComponentWithNoSSR />
            <div className="d-flex std-tech-container position-absolute justify-content-center w-100">
              <div className="teacher ml-3 text-center">
                <div className="techImg">
                  <Image
                    src={img}
                    className=" d-flex mb-2"
                    alt=""
                    width="100"
                    height="100"
                  />
                </div>
                <i
                  onClick={hideControlers}
                  className="fa fa-microphone fa-lg main-c p-3 "
                ></i>
              </div>
              <div className="student text-center">
                <div className="stdImg">
                  <Image
                    src={img}
                    className=" d-flex mb-2"
                    alt=""
                    width="100"
                    height="100"
                  />
                </div>
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
      <section className="lect-content">
        <div className="container">
          <div className="row mb-5">
            <div className="wh-board col-md-7 p-0 py-3 ml-3 shadow rounded ">
              <div className="top-h d-flex justify-content-between px-3 ">
                <i className="fa fa-arrows-alt p-3 rounded"></i>
                <h3 className="text-center fw-bold main-c">White Board</h3>
              </div>
              <canvas id="canvas"></canvas>
              <div className="ic-container p-3 main-bgc text-center">
                <i className="p-3 bg-white mr-2 rounded fa fa-pencil-square-o"></i>
                <i className="p-3 bg-white mr-2 rounded fa fa-hand-paper-o"></i>
                <i className="p-3 bg-white mr-2 rounded fa fa-picture-o"></i>
                <i className="p-3 bg-white mr-2 rounded fa fa-paperclip"></i>
                <i className="p-3 bg-white mr-2 rounded fa fa-circle-thin"></i>
                <i className="p-3 bg-white mr-2 rounded fa fa-arrows-h"></i>
                <i className="p-3 bg-white mr-2 rounded fa fa-pencil"></i>
              </div>
            </div>

            <div className="chat-area col-md-4 shadow rounded  p-3">
              <h3 className="text-center main-c ">
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
      </section>
    </>
  );
};

export default Web22;

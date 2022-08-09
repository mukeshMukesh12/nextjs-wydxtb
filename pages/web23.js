// Core
import React, { Component } from "react";
import Image from "next/dist/client/image";

// Components
import Stars from "../Components/Stars";

// Images
import img from "../img/characters/mr1.png";

// Reandering
class Web23 extends Component {
  render() {
    return (
      <>
        <div className="gap"></div>
        <section className="rating">
          <div className="container">
            <div className="row">
              <div className="col-md text-center">
                <h5 className="main-c">
                  تقييم المعلم<i className="fa fa-star"></i>
                </h5>
                <div
                  className="mx-auto"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Image src={img} width="100" height="100" alt="" />
                </div>
                <div className="rate-stars my-2">
                  <Stars rate="4" />
                </div>
                <textarea
                  placeholder="اكتب تعليقا للمعلم"
                  rows="5"
                  cols="25"
                  className="border-0 bg-light p-2 rounded "
                ></textarea>
              </div>

              <div className="col-md text-center">
                <h5 className="main-c">
                  تقييم الحصة<i className="fa fa-star"></i>
                </h5>
                <div
                  className="mx-auto"
                  style={{ width: "80px", height: "80px" }}
                >
                  <Image src={img} width="100" height="100" alt="" />
                </div>
                <div className="rate-stars my-2">
                  <Stars rate="5" />
                </div>
                <textarea
                  placeholder="اكتب تقييم للحصة"
                  rows="5"
                  cols="25"
                  className="border-0 bg-light p-2 rounded "
                ></textarea>
              </div>
            </div>
            <button className="btn main-bgc text-white d-block mx-auto mt-5">
              ارسال
            </button>
          </div>
        </section>
        <div className="gap"></div>
      </>
    );
  }
}

export default Web23;

import React, { Component } from "react";
import Stars from "./Stars";
import Image from "next/dist/client/image";

// Images
import img from "../img/characters/mr1.png";

class Completed extends Component {
  render() {
    return (
      <section className="profile-home main-bgi py-5 ">
        <div className="container position-relative text-center">
          <h3
            className="sec-title fw-bold text-white mx-auto center-after white-after"
            style={{ width: "fit-content" }}
          >
            مرحبا بك <span className="therd-c">معلم {this.props.name}</span> في
            منصة مروج
          </h3>
          <label className="switch position-relative inline-block">
            <input type="checkbox" className="d-none" />
            <span className="slider position-absolute slider-suc"></span>
          </label>
          <h5 className="text-white fw-bold">اخفاء من البحث</h5>
          <div className="gap"></div>
          <div className="main-info position-absolute">
            <div className="mr-pro-img">
              <Image src={img} width="100" height="100" alt="" />
            </div>
            <div className="stars">
              <Stars rate="5" />
            </div>
            <span className="fw-bold">213 تقييم</span>
            <br />
            <a href="#">عرض التقييمات</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Completed;

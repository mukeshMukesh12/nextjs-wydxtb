import React, { Component } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import user from "../img/characters/user.png";
import bgImg from "../img/features/b-img.jpeg";

class CourseCard extends Component {
  render() {
    return (
      <div className={this.props.col}>
        <div className="c-card shadow mb-5 bg-white rounded">
          <div className="top position-relative">
            <div
              className="inst-img position-absolute"
              style={{ zIndex: "30" }}
            >
              <Image
                src={user}
                className="rounded-circle"
                width="100"
                height="100"
              />
            </div>

            <img src={bgImg.src} className="w-100" />
          </div>
          <div className="bottom text-right my-3">
            <div className="bottom-top d-flex justify-content-center  text-center">
              <h5 className="main-c">{this.props.name}</h5>
              <div className="rate">
                <i className="fa fa-star therd-c"></i>
                <p style={{ fontSize: "12px" }}>{this.props.rate} تقييم</p>
              </div>
            </div>

            <div className="mb-5 pr-3">
              <h6 className="fw-bold text-secondary">
                الجامعة: <span className="main-c">{this.props.univers}</span>
              </h6>
              <h6 className="fw-bold text-secondary">
                عدد الساعات:
                <span className="main-c">{this.props.time} ساعة</span>
              </h6>
            </div>
            <div className="d-flex justify-content-between mt-3 px-3 pb-3 mx-auto">
              <Link href={this.props.to}>
                <a className="btn main-bgc text-white">تفاصيل الكورس</a>
              </Link>
              <h5 className="main-c">{this.props.price} ريال</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCard;

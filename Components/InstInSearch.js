import React, { Component } from "react";
import Stars from "./Stars";

class InstInSearch extends Component {
  render() {
    return (
      <section className="profile-home main-bgi py-5">
        <div className="my-5"></div>
        <div className="container position-relative">
          <div className="mx-auto mb-5">
            <h4 className="text-white text-center fw-bold">
              {this.props.name}
            </h4>
            <div className="therd-c text-center">
              <Stars rate="5" />
            </div>
            <div className="gen-info d-flex justify-content-between w-75 mx-auto my-5">
              <div className="text-right">
                <i className="fa fa-map-marker therd-c"></i>
                <label className="text-white fw-bold">
                  {this.props.cuntry}
                </label>
              </div>
              <div className="text-right">
                <i className="fa fa-graduation-cap therd-c"></i>
                <label className="text-white fw-bold">
                  سنوات الخبرة {this.props.exper} سنوات
                </label>
              </div>
              <div className="text-right">
                <i className="fa fa-usd therd-c"></i>
                <label className="text-white fw-bold">
                  <span className="therd-c mr-2">اونلاين</span>{" "}
                  {this.props.online} ريال
                </label>
                <label className="text-white fw-bold">
                  <span className="therd-c mr-2">بالمنزل</span>{" "}
                  {this.props.ofline} ريال
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="gap"></div>
      </section>
    );
  }
}

export default InstInSearch;

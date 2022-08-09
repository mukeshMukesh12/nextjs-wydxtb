import React, { Component } from "react";
import "./subEdu.css";
export default class subEduStage extends Component {
  componentDidMount() {
    document.querySelectorAll(".sub-stage").forEach((one) => {
      one.onclick = function () {
        this.parentNode.removeChild(this);
      };
    });
  }
  showControlers = (cls) => {
    document.querySelector(`${cls}`).classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  };

  addSubEdu() {
    let par = document.querySelector(".sub-stage-parent");
    let inp = document.querySelector(".edu-name");

    let p = document.createElement("p");
    p.classList.add("sub-stage");
    p.innerHTML = inp.value;

    p.onclick = function () {
      this.parentNode.removeChild(this);
    };

    par.appendChild(p);

    // To Hide window
    document.querySelector(".join").classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  }

  close = (xe) => {
    xe.preventDefault();
    document.querySelector(".join").classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  };

  componentDidMount() {
    document.querySelectorAll(".del").forEach((btn_del) => {
      btn_del.onclick = function () {
        let par = this.parentNode.parentNode.parentNode;
        document.getElementById("accordion").removeChild(par);
      };
    });
  }

  render() {
    return (
      <div className="mx-auto" style={{ width: "97%" }}>
        <div className="ov-lay join d-none">
          <div className="w-75 h-50 p-5 bg-white text-right rounded">
            <i
              className="fa fa-close"
              onClick={(e) => {
                this.close(e);
              }}
            ></i>
            <h6 className="fw-bold text-center mb-5">Add education stage</h6>
            <div className="form-group">
              <input
                className="form-control border edu-name"
                type="text"
                placeholder="Add here"
              />
            </div>
            <button
              className="btn btn-primary fw-bold text-white d-block my-5 mx-auto"
              onClick={this.addSubEdu}
            >
              Add
            </button>
          </div>
        </div>
        <div id="accordion">
          <div className="card my-3">
            <div
              className="card-header d-flex justify-content-between"
              id="headingOne"
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  المرحلة الابتدائية
                </button>
              </h5>

              <div>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    this.showControlers(".join");
                  }}
                >
                  Add
                </button>
                <button className="del btn btn-danger">Delete</button>
              </div>
            </div>
            <div
              id="collapseOne"
              className="collapse show p-3"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="pl-3 sub-stage-parent">
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
              </div>
            </div>
          </div>
          <div className="card my-3">
            <div
              className="card-header  d-flex justify-content-between"
              id="headingTwo"
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  المرحلة الاعدادية
                </button>
              </h5>
              <div>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    this.showControlers(".join");
                  }}
                >
                  Add
                </button>
                <button className="del btn btn-danger">Delete</button>
              </div>
            </div>
            <div
              id="collapseTwo"
              className="collapse p-3"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="pl-3">
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
              </div>
            </div>
          </div>
          <div className="card my-3">
            <div
              className="card-header d-flex justify-content-between"
              id="headingThree"
            >
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  المرحلة الثانوية
                </button>
              </h5>
              <div>
                <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    this.showControlers(".join");
                  }}
                >
                  Add
                </button>
                <button className="del btn btn-danger">Delete</button>
              </div>
            </div>
            <div
              id="collapseThree"
              className="collapse p-3"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="pl-3">
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
                <p className="sub-stage">1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

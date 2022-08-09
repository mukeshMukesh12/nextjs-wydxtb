import React, { Component } from "react";

class CourseLect extends Component {
  render() {
    return (
      <div className="course-lect row shadow p-3 mb-5 bg-white rounded mt-3">
        <div className="col-md-6">
          <div className="d-flex main-c">
            <i className="fa fa-video-camera"></i>
            <h6 className="fw-bold mx-2">
              Lecture
              <span className="text-dark mx-2" style={{ fontWeight: "normal" }}>
                {this.props.lect_pos}
              </span>
            </h6>
            <p className="text-secondary fw-bold mx-auto">
              {this.props.lect_name}
            </p>
          </div>
        </div>
        <div className="col-md-6 main-c d-flex justify-content-end">
          <p className="text-secondary fw-bold text-right mx-3">
            {this.props.time} min
          </p>
          <i
            className="fa fa-play text-center rounded-circle main-bgc text-white"
            style={{
              width: "35px",
              height: "35px",
              padding: "9px 0 0 3px",
              cursor: "pointer",
            }}
          ></i>
        </div>
      </div>
    );
  }
}

export default CourseLect;

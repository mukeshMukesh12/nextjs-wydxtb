import React, { Component } from "react";

class CourseAsideBar extends Component {
  handelIcons = (ico) => {
    return "fa " + ico;
  };
  render() {
    return (
      <div className="d-flex">
        <i className={this.handelIcons(this.props.ico)}></i>
        <h6 className="main-c mx-2">{this.props.comp_name}</h6>
      </div>
    );
  }
}

export default CourseAsideBar;

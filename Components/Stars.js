import React, { Component } from "react";

class Stars extends Component {
  handelStars = () => {
    let arr = [];
    for (var i = 0; i < this.props.rate; i++) {
      arr.push(0);
    }
    return arr;
  };
  render() {
    return (
      <>
        {this.handelStars().map(function (index) {
          return <i className="fa fa-star text-warning" key={index}></i>;
        })}
      </>
    );
  }
}

export default Stars;

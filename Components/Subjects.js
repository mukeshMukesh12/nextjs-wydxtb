import React, { Component } from "react";

class Subjects extends Component {
  render() {
    return (
      <div className="subject text-center col-md-3  rounded main-bgc text-white fw-bold">
        {this.props.sub}
      </div>
    );
  }
}

export default Subjects;

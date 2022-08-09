import React, { Component } from "react";

class WesternUniuon extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control border"
                placeholder="اسم الشخص"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control border"
                placeholder="اسم حامل البطاقة"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default WesternUniuon;

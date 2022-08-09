import React, { Component } from "react";

class OutTrans extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-md-6 p-2 ">
              <input
                type="text"
                className="form-control border"
                placeholder="اسم ابنك"
              />
            </div>
            <div className="col-md-6 p-2 ">
              <input
                type="text"
                className="form-control border"
                placeholder="اسم حامل البطاقة"
              />
            </div>
            <div className="col-md-6 p-2 ">
              <input
                type="text"
                className="form-control border"
                placeholder="البلد"
              />
            </div>
            <div className="col-md-6 p-2 ">
              <input
                type="text"
                className="form-control border"
                placeholder="رقم الحساب"
              />
            </div>
            <div className="col-md-6 p-2 ">
              <input
                type="text"
                className="form-control border"
                placeholder="رقم السويفت كود"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default OutTrans;

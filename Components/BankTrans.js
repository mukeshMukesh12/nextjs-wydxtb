import React, { Component } from "react";

class BankTrans extends Component {
  render() {
    return (
      <>
        <form>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control border"
                placeholder="اسم ابنك"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control border"
                placeholder="اسم حامل البطاقة"
              />
            </div>
            <div className="col-md-6 mt-5">
              <input
                type="text"
                className="form-control border"
                placeholder="اسم ابنك"
              />
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default BankTrans;

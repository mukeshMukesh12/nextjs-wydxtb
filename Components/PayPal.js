import React, { Component } from "react";

class PayPal extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control border"
                placeholder="البريد الاليكتروني لصاحب الحساب"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PayPal;

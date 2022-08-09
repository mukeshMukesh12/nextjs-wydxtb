import React, { Component } from "react";

// Image
import img from "../../img/characters/user.png";

export default class AdminProfile extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    country: "",
  };

  render() {
    return (
      <>
        <form className="bg-white mx-auto shadow p-3 m-5">
          <div className="text-center position-relative my-3 mb-5">
            <label htmlFor="f-inp">
              <i className="prof-img-btn fa fa-camera p-2 main-bgc text-white rounded-circle position-absolute"></i>
            </label>
            <input type="file" className="d-none" id="f-inp" />
            <img src={img} className="prof-img rounded-circle" alt="..." />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control border"
                id="fName"
                placeholder="First Name"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control border"
                id="lName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group ">
            <input
              type="password"
              className="form-control border"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>

          <div className="form-group ">
            <input
              type="password"
              className="form-control border"
              id="inputPassword5"
              placeholder="Password Confermation"
            />
          </div>

          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control border"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Address 2</label>
            <input
              type="text"
              className="form-control border"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">City</label>
              <input
                type="text"
                className="form-control border"
                id="inputCity"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">State</label>
              <select id="inputState" className="form-control border">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip</label>
              <input
                type="text"
                className="form-control border"
                id="inputZip"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </>
    );
  }
}

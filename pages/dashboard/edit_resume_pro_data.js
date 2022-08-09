import React from "react";

export default function Resume_pro() {
  return (
    <>
      <div className="gap"></div>
      <h1 className="text-center">Edit Compolete Profile Page</h1>
      <div className="gap"></div>
      <div className="home-edit shadow p-3 mb-5">
        <h3>Home</h3>
        <ul className="p-3 ">
          <hr />
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Hashtag ( # ) </h5>
            </div>
            <div className="col-md-9">
              <input type="text" className="form-control border" />
            </div>
          </li>
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Title </h5>
            </div>
            <div className="col-md-9">
              <input type="text" className="form-control border" />
            </div>
          </li>
        </ul>
      </div>

      <div className="gap"></div>
      <div className="home-edit shadow p-3 mb-5">
        <h3>Body</h3>
        <ul className="p-3 ">
          <hr />
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Hashtag ( # ) </h5>
            </div>
            <div className="col-md-9">
              <input type="text" className="form-control border" />
            </div>
          </li>
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Title </h5>
            </div>
            <div className="col-md-9">
              <input type="text" className="form-control border" />
            </div>
          </li>
        </ul>
      </div>
      <button className="btn btn-primary btn-block my-5">Save</button>
      <div className="p-2"></div>
    </>
  );
}

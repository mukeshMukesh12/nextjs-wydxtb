import React from "react";
import Link from "next/dist/client/link";
export default function AddNewCountry() {
  return (
    <div className="pt-5">
      <h1 className="text-center my-5">Add New Country</h1>

      <form className="w-75 mx-auto shadow p-3 mb-5">
        <div className="form-group">
          <div className="form-group row">
            <div className="col-md-3">
              <h6 className="pt-2 mr-2 text-dark fw-bold">Country name:</h6>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control border"
                placeholder="Add Country Name"
              />
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-3">
            <h6 className="pt-2 mr-2 text-dark fw-bold">Character Images:</h6>
          </div>
          <div className="col-md-9">
            <input type="file" className="form-control border" multiple />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-3">
            <h6 className="pt-2 mr-2 text-dark fw-bold">Discription:</h6>
          </div>
          <div className="col-md-9">
            <div className="form-group mx-auto">
              <textarea
                className="w-100 p-3"
                rows="10"
                placeholder="Type Here"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-3">
            <h6 className="pt-2 mr-2 text-dark fw-bold">Country Flag:</h6>
          </div>
          <div className="col-md-9">
            <input type="file" className="form-control border" multiple />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-md-3">
            <h6 className="pt-2 mr-2 text-dark fw-bold">Educational Stages:</h6>
          </div>
          <div className="col-md-9">
            <div>
              <Link href="/dashboard/edu_stage">
                <a className="btn btn-primary">Manage</a>
              </Link>
            </div>
          </div>
        </div>
      </form>
      <button className="btn btn-primary btn-block w-75 mx-auto">Add</button>
    </div>
  );
}

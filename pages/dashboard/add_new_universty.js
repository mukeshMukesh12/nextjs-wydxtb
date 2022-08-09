import React from "react";
import Link from "next/dist/client/link";
export default function Universty() {
  return (
    <div className="pt-5">
      <h1 className="text-center my-5">Add New Universty</h1>

      <form className="w-75 mx-auto shadow p-3 mb-5">
        <div className="form-group">
          <div className="form-group row">
            <div className="col-md-3">
              <h6 className="pt-2 mr-2 text-dark fw-bold">Universty name:</h6>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control border"
                placeholder="Add Universty Name"
              />
            </div>
          </div>
        </div>
      </form>
      <button className="btn btn-primary btn-block w-75 mx-auto">Add</button>
    </div>
  );
}

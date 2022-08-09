import React from "react";

function UneiverstiEdit() {
  const course = [
    { id: "1", title: "Course one" },
    { id: "2", title: "Course two" },
    { id: "3", title: "Course three" },
    { id: "4", title: "Course four" },
  ];

  const currncey = [
    { id: "1", title: "$" },
    { id: "2", title: "¥" },
    { id: "3", title: "£" },
    { id: "4", title: "€" },
  ];
  return (
    <div className="pt-5">
      <h1 className="text-center my-5">Edit Universty</h1>

      <form className="w-75 mx-auto shadow p-3 mb-5">
        <div className="form-group row">
          <div className="col-md-3">
            <h6 className="pt-2 mr-2 text-dark fw-bold">Select Universty:</h6>
          </div>
          <div className="col-md-9">
            <select className="form-control border select-opt">
              <option value={-1}>No one</option>
              {course.map((topic, index) => (
                <option value={topic.id} key={index}>
                  {topic.title}
                </option>
              ))}
            </select>
          </div>
        </div>
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
      <div className="w-75 mx-auto row">
        <div className="col-md-6">
          <button className="btn btn-success btn-block">Save</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-outline-danger btn-block">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default UneiverstiEdit;

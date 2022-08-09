import React from "react";

import Link from "next/link";

function CourseEdit() {
  const course = [
    { id: "1", title: "مصر" },
    { id: "2", title: "عمان" },
    { id: "3", title: " مسقط" },
    { id: "4", title: "الشارقة" },
  ];

  const currncey = [
    { id: "1", title: "$" },
    { id: "2", title: "¥" },
    { id: "3", title: "£" },
    { id: "4", title: "€" },
  ];
  return (
    <div>
      <div className="gap"></div>

      <form className="shadow w-75 mx-auto p-3 mb-5">
        <h3 className="mb-5">Edit Country Page</h3>

        <div className="form-group">
          <div className="form-group row">
            <div className="col-md-3">
              <h6 className="pt-2 mr-2 text-dark fw-bold">Select Country:</h6>
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

      <div className="w-75 mx-auto row">
        <div className="col-md-6">
          <button className="btn btn-success btn-block">Save</button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-outline-danger btn-block">Delete</button>
        </div>
      </div>

      <div className="gap"></div>
    </div>
  );
}

export default CourseEdit;

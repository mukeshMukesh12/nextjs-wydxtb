import React from "react";

function CourseEdit() {
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
    <div>
      <div className="gap"></div>
      <div className="home shadow p-3">
        <h3>Edit Course Page</h3>
        <ul className="p-3 ">
          <hr />
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Select Course </h5>
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
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Title </h5>
            </div>
            <div className="col-md-9">
              <input
                // value={homeWelText}
                // onChange={(e) => setHomeWelText(e.target.value)}
                type="text"
                className="form-control border"
              />
            </div>
          </li>
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Final Price </h5>
            </div>
            <div className="col-md-7">
              <input
                // value={homeWelText}
                // onChange={(e) => setHomeWelText(e.target.value)}
                type="number"
                className="form-control border"
              />
            </div>
            <div className="col-md-2">
              <select className="form-control border select-opt">
                {currncey.map((topic, index) => (
                  <option value={topic.id} key={index}>
                    {topic.title}
                  </option>
                ))}
              </select>
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Description </h5>
            </div>
            <div className="col-md-9">
              <textarea
                rows="10"
                // value={homeDesc}
                // onChange={(e) => setHomeDesc(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Image </h5>
            </div>
            <div className="col-md-9">
              {/* <input
                type="file"
                value={homeImg}
                onChange={(e) => setHomeImg(e.target.files[0])}
                className="form-control border"
              /> */}

              <button className="btn btn-link">
                <label htmlFor="clu-inp">رفع صورة من جهازك</label>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                {/* <input {...getInputProps()} className="d-none" id="clu-inp" /> */}
              </button>
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Is Active </h5>
            </div>
            <div className="col-md-9">
              <input type="checkbox" name="" id="" />
            </div>
          </li>
        </ul>
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-success btn-block">Save</button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-outline-danger btn-block">Delete</button>
          </div>
        </div>
      </div>
      <div className="gap"></div>
    </div>
  );
}

export default CourseEdit;

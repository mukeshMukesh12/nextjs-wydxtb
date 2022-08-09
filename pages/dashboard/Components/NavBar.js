import React, { useState } from "react";
import { connect } from "react-redux";
import { filterActionCreator } from "../../../redux/actions/action";
function Navbar(props) {
  const options = [
    { value: "مصر", label: "مصر" },
    { value: "عمان", label: "عمان" },
    { value: "السعودية", label: "السعودية" },
    { value: "الجزائر", label: "الجزائر" },
  ];

  const topics = [
    { value: "Teacher", label: "Teacher" },
    { value: "Student", label: "Student" },
    { value: "Courses", label: "Courses" },
  ];

  const [country, setCountry] = useState("");
  const [person, setEntity] = useState("Teacher");
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light ml-3 shadow mb-5"
      style={{ width: "1236px" }}
    >
      <a className="navbar-brand" href="#">
        Hi Admin
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto pt-3">
          <li className="nav-item mr-2" style={{ width: "200px" }}>
            <div className="form-group">
              <select
                value={country}
                className="form-control border"
                onChange={(e) => setCountry(e.target.value)}
              >
                {options.map((option, index) => (
                  <option value={option.value} key={index}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </li>
          <li className="nav-item mr-2" style={{ width: "200px" }}>
            <input
              type="text"
              className="form-control border"
              placeholder="Search Here"
            />
          </li>
          <li className="nav-item mr-2" style={{ width: "250px" }}>
            <div className="form-group">
              <select
                value={person}
                className="form-control border"
                onChange={(e) => setEntity(e.target.value)}
              >
                {topics.map((topic, index) => (
                  <option value={topic.value} key={index}>
                    {topic.label}
                  </option>
                ))}
              </select>
            </div>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              onClick={() => {
                console.log(person);
                props.setFilter(person);
              }}
            >
              Search
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (f) => dispatch(filterActionCreator(f)),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);

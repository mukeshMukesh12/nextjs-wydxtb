import React, { useState } from "react";

const Filter = () => {
  const options = [
    { value: "مصر", label: "مصر" },
    { value: "عمان", label: "عمان" },
    { value: "السعودية", label: "السعودية" },
    { value: "الجزائر", label: "الجزائر" },
  ];

  const topics = [
    { value: "Teachers", label: "Teachers" },
    { value: "Students", label: "Students" },
  ];

  const [country, setCountry] = useState("");

  return (
    <div className="content border p-3 row align-items-center mt-5 w-100 mx-auto bg-white">
      <div className="col-md-3">
        <h4 className="text-capitalize ">
          filter <span className="text-primary">&</span> search
        </h4>
      </div>

      <div className="col-md-3 pt-3">
        <div className="form-group">
          <input
            type="text"
            className="form-control border"
            placeholder="Search Here"
          />
        </div>
      </div>

      <div className="col-md-2 pt-3">
        <div className="form-group">
          <select
            value={country}
            className="form-control border"
            onChange={(e) => setCountry(e.target.value)}
          >
            {topics.map((topic, index) => (
              <option value={topic.value} key={index}>
                {topic.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-md-1">
        <div>
          <button className="btn btn-primary">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;

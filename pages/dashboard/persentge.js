import React, { useState } from "react";

export default function Persentge() {
  const options = [
    { value: "By Mony", label: "By Mony" },
    { value: "By Time", label: "By Time" },
  ];

  const discount = [
    { value: "Houer", label: "Houer" },
    { value: "Minuts", label: "Minuts" },
    { value: "Days", label: "Days" },
  ];

  const [by, setBy] = useState("By Mony");
  const [time, setTime] = useState("Houer");
  const [name, setName] = useState("");
  const [countOfUsers, setCountOfUsers] = useState("");
  const [prestVal, setPerstVal] = useState("");

  function dis() {
    let check = document.querySelector("input[type=checkbox]");
    if (check.checked) {
      document.querySelector(".hh").setAttribute("disabled", "true");
    } else {
      document.querySelector(".hh").removeAttribute("disabled");
    }
  }

  function addRow() {
    let table = document.querySelector("table");
    let tr = document.createElement("tr");
    let isChecked = document.getElementById("exampleCheck1").checked;
    let id = document.querySelectorAll("th[scope=row]");
    id = id.length + 1;

    if ((name && countOfUsers && prestVal) || (name && prestVal && isChecked)) {
      tr.innerHTML = `
      <th scope="row">${id}</th>
      <td>${name}</td>
      <td>${by}</td>
      <td>${by == "By Mony" ? prestVal + "%" : prestVal + " " + time}</td>
      <td>${isChecked ? "unlimeted" : countOfUsers}</td>
    `;

      table.appendChild(tr);
    } else alert("Fill fields below");
  }

  return (
    <div className="container my-5">
      <h3 className="text-center text-dark">Create Copon Code</h3>
      <form className="my-5  mx-auto shadow p-3">
        <div className="form-group my-3">
          <input
            value={name}
            className="form-control border "
            placeholder="Enter Code Here"
            onChange={(e) => setName(e.target.value)}
          />

          <div className="form-row mx-auto">
            <div className="form-group w-50 my-3">
              <select
                value={by}
                className="form-control border"
                onChange={(e) => setBy(e.target.value)}
              >
                {options.map((op, index) => (
                  <option value={op.value} key={index}>
                    {op.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group w-50 ">
              {by == "By Time" ? (
                <div className="row  justify-content-center">
                  <div classNam="col-md-6">
                    <input
                      value={prestVal}
                      type="number"
                      className="form-control my-3 ml-2 border"
                      onChange={(e) => setPerstVal(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <select
                      value={time}
                      className="form-control border my-3"
                      onChange={(e) => setTime(e.target.value)}
                    >
                      {discount.map((op, index) => (
                        <option value={op.value} key={index}>
                          {op.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div className="row  justify-content-center">
                  <div className="col-md-9">
                    <input
                      value={prestVal}
                      type="number"
                      className="form-control my-3 ml-2 border"
                      onChange={(e) => setPerstVal(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 py-3 ml-2">
                    <i className="fa fa-percent"></i>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="d-flex">
            <div>
              <p className="pt-2">How Many Can Use It</p>
            </div>
            <div className="w-50 mx-3">
              <input
                value={countOfUsers}
                type="number"
                placeholder="Type Here"
                className="form-control hh ml-2 border w-100"
                onChange={(e) => setCountOfUsers(e.target.value)}
              />
            </div>
            <div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onClick={dis}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  unlimited users
                </label>
              </div>
            </div>
          </div>
          <button
            className="btn btn-success mt-3"
            onClick={(e) => {
              e.preventDefault();
              console.log(name, by, time, countOfUsers, prestVal);
              addRow();
            }}
          >
            Generate
          </button>
        </div>
      </form>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">By</th>
            <th scope="col">offer</th>
            <th scope="col">limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>000</td>
            <td>Mony</td>
            <td>30%</td>
            <td>11</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>001</td>
            <td>Mony</td>
            <td>50%</td>
            <td>15</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>002</td>
            <td>Time</td>
            <td>80 day</td>
            <td>Unlimited</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

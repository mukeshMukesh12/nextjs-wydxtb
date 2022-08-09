import React, { useState } from "react";
import Chart from "react-google-charts";
import Link from "next/link";

export default function TeacherProfile() {
  let topics = [
    { value: "CS50", label: "CS50" },
    { value: "Math101", label: "Math101" },
    { value: "Qountum Pysics", label: "Qountum Pysics" },
  ];

  const [country, setCountry] = useState("");

  const joinToCorse = () => {
    document.querySelector(".join").classList.remove("d-none");
  };

  const showControlers = (cls) => {
    document.querySelector(`${cls}`).classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  };

  const makeDeactive = (btn, ac) => {
    btn.classList.remove("btn-outline-success");
    btn.classList.add("btn-outline-danger");
    btn.innerHTML = "Deactive";

    ac.classList.remove("text-danger");
    ac.classList.add("text-success");
    ac.innerHTML = "True";
  };

  const makeActive = (btn, ac) => {
    btn.classList.remove("btn-outline-danger");
    btn.classList.add("btn-outline-success");
    btn.innerHTML = "Active";

    ac.classList.remove("text-success");
    ac.classList.add("text-danger");
    ac.innerHTML = "False";
  };

  const activeUser = () => {
    let ac = document.querySelector(".ac");
    let btn = document.querySelector(".ac-dc-btn");
    if (btn.classList.value.includes("btn-outline-danger")) makeActive(btn, ac);
    else makeDeactive(btn, ac);
  };

  const handleAcDcBtn = () => {};

  const deleteWarning = () => {
    document.querySelector(".delete").classList.remove("d-none");
  };

  function close(xe) {
    xe.preventDefault();
    document.querySelector(".join").classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  }

  return (
    <div className="container">
      <div className="gap"></div>
      <div className="ov-lay join d-none">
        <div className="w-75 h-50 p-5 bg-white rounded text-right">
          <i
            className="fa fa-close"
            onClick={(e) => {
              close(e);
            }}
          ></i>
          <h6 className="fw-bold text-center mb-5">Join User To Course</h6>
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
          <button
            className="btn main-bgc fw-bold text-white d-block my-5 mx-auto"
            onClick={() => showControlers(".join")}
          >
            Join Now
          </button>
        </div>
      </div>

      <div className="ov-lay delete d-none">
        <div className="w-75 h-50 p-5 bg-white rounded">
          <h6 className="fw-bold text-center mb-5">
            Are You Sure You Want Delete
          </h6>

          <div className="d-flex w-50 mx-auto">
            <button
              className="btn btn-danger d-block my-5 mx-auto"
              onClick={() => showControlers(".delete")}
            >
              Delete
            </button>

            <button
              className="btn btn-outline-secondary d-block my-5 mx-auto"
              onClick={() => showControlers(".delete")}
            >
              Cansel
            </button>
          </div>
        </div>
      </div>

      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="border">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>Mr Mohamed</h4>
                    <p className="text-secondary mb-1">math physics algebra</p>
                    <p className="text-muted font-size-sm">
                      El khalige, aman, elbehera
                    </p>
                  </div>
                </div>

                <p className="fw-bold text-center">
                  Active:<span className="ac text-danger">False</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="border">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 fw-bold text-dark">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Kenneth Valdez</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 fw-bold text-dark">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">fip@jukmuh.al</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 fw-bold text-dark">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">(239) 816-9029</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 fw-bold text-dark">Country</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Cairo</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 fw-bold text-dark">Gender</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Maile</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 fw-bold text-dark">Type</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">Teacher</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 fw-bold text-dark">Lectures number</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">15</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 fw-bold text-dark">
                      Canceled lectures
                    </h6>
                  </div>
                  <div className="col-sm-9 text-secondary">3</div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0 fw-bold text-dark">attended number</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">12</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-4">
                    <button
                      className="btn btn-outline-primary"
                      onClick={joinToCorse}
                    >
                      join to course
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <button
                      className="ac-dc-btn btn btn-outline-success"
                      onClick={activeUser}
                    >
                      Active
                    </button>
                  </div>
                  <div className="col-sm-4">
                    <button
                      className="btn btn-outline-danger"
                      onClick={deleteWarning}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ti my-5">
        <h3 className="mb-3">Price offers</h3>
        <table className="table shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student</th>
              <th scope="col">Data</th>
              <th scope="col">is Accepted</th>

              {/* <th scope="col">
                <Link href="/dashboard/persentge" className="btn btn-primary">
                  Create One
                </Link>
              </th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <Link href="/dashboard/student_profile">khaled ebrahem</Link>
              </td>
              <td>20-3-2020</td>

              <td>
                <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <Link href="">ahmed ebrahem</Link>
              </td>
              <td>20-3-2020</td>

              <td>
                <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
              </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>
                <Link href="">mohamed khaled</Link>
              </td>
              <td>20-3-2020</td>
              <td>
                <i className="fa fa-close p-2 rounded-circle text-white bg-danger"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="hr my-5">
        <h3 className="mb-3">Home Requests</h3>
        <table className="table shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student</th>
              <th scope="col">Data</th>
              <th scope="col">is Accepted</th>

              {/* <th scope="col">
                <Link href="/dashboard/persentge" className="btn btn-primary">
                  Create One
                </Link>
              </th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <Link href="/dashboard/users/student">khaled ebrahem</Link>
              </td>
              <td>20-3-2020</td>

              <td>
                <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <Link href="/dashboard/users/studen">ahmed ebrahem</Link>
              </td>
              <td>20-3-2020</td>

              <td>
                <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
              </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>
                <Link href="/dashboard/users/studen">mohamed khaled</Link>
              </td>
              <td>20-3-2020</td>

              <td>
                <i className="fa fa-close p-2 rounded-circle text-white bg-danger"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="lecs my-5">
        <h3 className="mb-3">Leactures</h3>
        <table className="table shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">lecture title</th>
              <th scope="col">Data</th>
              <th scope="col">Subject</th>
              <th scope="col">Students number</th>
              <th scope="col">hours</th>
              <th scope="col">price</th>
              <th scope="col">Status</th>
              <th scope="col">is Accepted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <Link href="/dashboard/users/student">Algebra</Link>
              </td>
              <td>20-3-2020</td>
              <td>علوم</td>
              <td>3</td>
              <td>1:30</td>
              <td>80$</td>
              <td>active</td>

              <td>
                <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <Link href="">geometry</Link>
              </td>
              <td>20-3-2020</td>
              <td>علوم</td>
              <td>3</td>
              <td>1:30</td>
              <td>80$</td>
              <td>Waiting</td>
              <td>
                <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
              </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>
                <Link href="">cs</Link>
              </td>
              <td>20-3-2020</td>
              <td>علوم</td>
              <td>3</td>
              <td>1:30</td>
              <td>80$</td>
              <td>canceld</td>

              <td>
                <i className="fa fa-close p-2 rounded-circle text-white bg-danger"></i>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="mb-3">Courses i joined in</h3>
        <table className="table shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">course name</th>
              <th scope="col">Data</th>
              {/* <th scope="col">Subject</th> */}
              <th scope="col">Students number</th>
              <th scope="col">hours</th>
              <th scope="col">price</th>

              <th scope="col">Status</th>
              <th scope="col">view</th>
              <th scope="col">is Accepted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>khaled ebrahem</td>

              <td>علوم</td>
              <td>3</td>
              <td>1:30</td>
              <td>30$</td>
              <td>active</td>
              <td>
                <Link
                  href="/dashboard/course_details"
                  className="btn btn-primary"
                >
                  view
                </Link>
              </td>
              <td>
                <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>ahmed ebrahem</td>

              <td>علوم</td>
              <td>3</td>
              <td>1:30</td>
              <td>30$</td>
              <td>Waiting</td>
              <td>
                <Link
                  href="/dashboard/course_details"
                  className="btn btn-primary"
                >
                  view
                </Link>
              </td>
              <td>
                <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
              </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>mohamed khaled</td>

              <td>علوم</td>
              <td>3</td>
              <td>1:30</td>
              <td>30$</td>
              <td>canceld</td>

              <td>
                <Link
                  href="/dashboard/course_details"
                  className="btn btn-primary"
                >
                  view
                </Link>
              </td>

              <td>
                <i className="fa fa-close p-2 rounded-circle text-white bg-danger"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

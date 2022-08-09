// Core
import React, { useEffect, useState } from "react";
import Link from "next/dist/client/link";
import DashboardCharts from "./Components/Charts";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

const DashboardHome = () => {
  const options = [
    { value: "Users", label: "Users" },
    { value: "Requests", label: "Requests" },
    { value: "Courses", label: "Courses" },
  ];

  const [currentChart, setCurrentChart] = useState("Users");

  const charts = [
    <DashboardCharts
      title="Users Subscription"
      data={[
        ["2021", "Students", "Teachers"],
        ["january", 1000, 400],
        ["february", 1170, 460],
        ["march", 660, 1120],
        ["june", 1030, 540],
      ]}
      class="Users"
      key={1}
    />,

    <DashboardCharts
      title="Courses Creation"
      data={[
        ["2021", "Number of Courses"],
        ["january", 1000],
        ["february", 1170],
        ["march", 660],
        ["june", 1030],
      ]}
      options={{
        // Material design options
        chart: {
          title: "Courses Creation",
        },
      }}
      class="Courses"
      key={2}
    />,

    <DashboardCharts
      title="Requests"
      data={[
        ["2021", "Prices Offer", "Home Reaquest", "Teacher Signup Requests"],
        ["january", 1000, 400, 350],
        ["february", 1170, 460, 533],
        ["march", 660, 1120, 100],
        ["june", 1030, 540, 980],
      ]}
      class="Requests"
      key={3}
    />,
  ];

  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#my-table" });

    // User Subscription Report

    doc.autoTable({
      head: [data[0]],
      body: data.slice(1),
    });

    doc.save("report.pdf");
  };

  const getCurrentChart = (curr) => {
    charts.forEach((cht) => {
      if (cht.props.class == curr) {
        generatePDF(cht.props.data);
      }
    });
  };

  let router = useRouter();

  useEffect(() => {
    if (!Cookie.get("user")) {
      router.push("/dashboard/login");
    }
  }, []);

  return (
    <>
      <h3>Dashboard Home</h3>
      <div className="container my-3">
        <div className="d-flex justify-content-between">
          <div className="bg-light shadow p-3" style={{ width: "250px" }}>
            <div className="d-flex">
              <i className="fa fa-files-o"></i>
              <h5 className="mx-3">Edit Pages</h5>
            </div>
            <h3 className="fw-bold">7</h3>
            <Link href="/dashboard/all_pages">
              <a className="btn btn-primary btn-block mt-3">view</a>
            </Link>
          </div>

          <div className="bg-light shadow p-3" style={{ width: "250px" }}>
            <div className="d-flex">
              <i className="fa fa-graduation-cap"></i>
              <h5 className="mx-3">Courses</h5>
            </div>
            <h3 className="fw-bold">2365</h3>
            <Link href="/dashboard/courses">
              <a className="btn btn-primary btn-block mt-3">view</a>
            </Link>
          </div>

          <div className="bg-light shadow p-3" style={{ width: "250px" }}>
            <div className="d-flex">
              <i className="fa fa-file-o"></i>
              <h5 className="mx-3">Requsets</h5>
            </div>
            <h3 className="fw-bold">3691</h3>
            <Link href="/dashboard/requests">
              <a className="btn btn-primary btn-block mt-3">view</a>
            </Link>
          </div>

          <div className="bg-light shadow p-3" style={{ width: "250px" }}>
            <div className="d-flex">
              <i className="fa fa-share"></i>
              <h5 className="mx-3">Live Rooms</h5>
            </div>
            <h3 className="fw-bold">209</h3>
            <Link href="/dashboard/live_rooms">
              <a className="btn btn-primary btn-block mt-3">view</a>
            </Link>
          </div>
        </div>
        <div className="shadow my-5 p-3 ">
          <div className="d-flex justify-content-between">
            <select
              className="form-control border w-25"
              value={currentChart}
              onChange={(e) => setCurrentChart(e.target.value)}
            >
              {options.map((op, index) => (
                <option value={op.value} key={index}>
                  {op.label}
                </option>
              ))}
            </select>

            <button
              className="btn btn-primary"
              onClick={() => {
                getCurrentChart(currentChart);
              }}
            >
              Download as PDF
            </button>
          </div>
          <div className="my-5"></div>

          {charts.filter((chart) => chart.props.class == currentChart)}
        </div>

        {/* Heddin Table */}
        <table className="d-none" id="my-table"></table>

        <div className="copons my-5">
          <h3 className="mb-3">Copons</h3>
          <table className="table shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">By</th>
                <th scope="col">offer</th>
                <th scope="col">limit</th>
                <th scope="col">
                  <Link href="/dashboard/persentge" className="btn btn-primary">
                    Create One
                  </Link>
                </th>
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

        <div className="copons my-5">
          <h3 className="mb-3">Users</h3>
          <table className="table shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Is Active</th>

                <th scope="col">
                  <Link href="/dashboard/profiles" className="btn btn-primary">
                    View all
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>ahmed khaled</td>
                <td>teacher</td>
                <td>
                  <i className="fa fa-close p-2 rounded-circle text-white bg-danger"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mhomamed abdo</td>
                <td>Teacher</td>
                <td>
                  <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Ibrahiemovech</td>
                <td>Teacher</td>
                <td>
                  <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;

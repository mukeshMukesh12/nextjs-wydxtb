import React from "react";
import Link from "next/dist/client/link";
export default function RoomStudentDetails() {
  return (
    <div>
      <div className="gap"></div>
      <table className="table shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student</th>
            <th scope="col">Data</th>
            <th scope="col">is Attend</th>
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
              <Link href="/dashboard/student_profile">ahmed ebrahem</Link>
            </td>
            <td>20-3-2020</td>

            <td>
              <i className="fa fa-check p-2 rounded-circle text-white bg-success"></i>
            </td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>
              <Link href="/dashboard/student_profile">mohamed khaled</Link>
            </td>
            <td>20-3-2020</td>

            <td>
              <i className="fa fa-close p-2 rounded-circle text-white bg-danger"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

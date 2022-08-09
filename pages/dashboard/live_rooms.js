import React from "react";

import Link from "next/dist/client/link";

export default function LiveRooms() {
  return (
    <div className="lr my-5">
      <h3 className="mb-3">Live Rooms</h3>
      <table className="table shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Teacher</th>
            <th scope="col">Students attend</th>
            <th scope="col">Absent students</th>
            <th scope="col">Total Students</th>
            <th scope="col">view</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>mr adel</td>
            <td>19</td>
            <td>3</td>
            <td>22</td>
            <td>
              <Link href="room_student_detailes">
                <a className="btn btn-primary"> View Details</a>
              </Link>
            </td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>mr hossam</td>
            <td>19</td>
            <td>3</td>
            <td>22</td>
            <td>
              <Link href="/student_details">
                <a className="btn btn-primary"> View Details</a>
              </Link>
            </td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>mr khaled</td>
            <td>19</td>
            <td>3</td>
            <td>22</td>
            <td>
              <Link href="/student_details">
                <a className="btn btn-primary">View Details</a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

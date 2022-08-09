import React, { Component } from "react";
import Link from "next/dist/client/link";

export default class Requests extends Component {
  render() {
    return (
      <>
        <div>
          <h2 className="w-75 mx-auto  my-5">Teachers Signedup Requestes</h2>
          <table className="table w-75 mx-auto">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Subject</th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <div className="d-flex justify-content-between w-50 mx-auto">
                    <button className="btn btn-success">Accept</button>
                    <button className="btn btn-danger">Refuse</button>
                    <Link href="/dashboard/teacher_request_profile">
                      <a className="btn btn-primary">View</a>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornto</td>
                <td>
                  <div className="d-flex justify-content-between w-50 mx-auto">
                    <button className="btn btn-success">Accept</button>
                    <button className="btn btn-danger">Refuse</button>
                    <Link href="/dashboard/teacher_request_profile">
                      <a className="btn btn-primary">View</a>
                    </Link>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                  <div className="d-flex justify-content-between w-50 mx-auto">
                    <button className="btn btn-success">Accept</button>
                    <button className="btn btn-danger">Refuse</button>
                    <Link href="/dashboard/teacher_request_profile">
                      <a className="btn btn-primary">View</a>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

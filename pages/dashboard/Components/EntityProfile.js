// Core
import React, { Component } from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

export default class EntityProfile extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="obj-com row mt-5 bg-light border w-50 mx-auto p-3">
          <div className="col-md-6 d-flex">
            <Image src={this.props.img} className="rounded-circle" alt="" />
            <div className="ab-text-content  pr-3">
              <h5 className="fw-bold text-dark pt-2 pl-2">{this.props.name}</h5>
            </div>
          </div>
          <div className="col-md-2">
            <div className="ab-text-content pr-3">
              <h5 className="fw-bold text-dark pt-2 pl-2">{this.props.type}</h5>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <div>
              <Link href={this.props.url}>
                <a className="btn btn-primary">View</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Link from "next/dist/client/link";

export default class Topics extends Component {
  render() {
    return (
      <>
        <div className="p-3 shadow my-3 ">
          <h3 className="text-center">{this.props.name}</h3>
          <hr />
          <p style={{ height: "70px" }}>{this.props.help}</p>
          <hr />
          <Link href={this.props.url}>
            <a className="btn btn-primary btn-block">View</a>
          </Link>
        </div>
      </>
    );
  }
}

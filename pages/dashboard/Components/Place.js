import React, { Component } from "react";
import Link from "next/dist/client/link";
export default class Place extends Component {
  handleIcon = () => `fa ${this.props.ico} fa-lg`;

  render() {
    return (
      <div className="place">
        <Link href={this.props.loc}>
          <a
            data-toggle="tooltip"
            data-placement="right"
            title={this.props.title}
            className="d-block p-2 w-100 h-100 text-center"
          >
            <i className={this.handleIcon()}></i>
            <small className="d-block text-center">{this.props.title}</small>
          </a>
        </Link>
        <hr />
      </div>
    );
  }
}

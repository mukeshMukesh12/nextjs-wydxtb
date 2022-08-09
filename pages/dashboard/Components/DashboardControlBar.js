// Core
import React, { Component } from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import { logOut } from "../../../Api/Users";

// Components
import Place from "../Components/Place";

// Images
import img from "../../../img/characters/user.png";

export default class DashboardControlBar extends Component {
  render() {
    return (
      <div className="aside main-bg position-fixed shadow p-2 d-flex flex-column justify-content-between ">
        <div className="top-sectioin">
          <Place title="Home" loc="/dashboard" ico="fa-home" />
          <Place
            title="Manage"
            loc="/dashboard/dashboard_manage"
            ico="fa-briefcase"
          />

          <Place
            title="Assues"
            loc="/dashboard/reports"
            ico="fa-question-circle"
          />
          <Place title="Requests" loc="/dashboard/requests" ico="fa-user-o" />
          <Place title="Discount" loc="/dashboard/persentge" ico="fa-percent" />
          <Place title="Pages" loc="/dashboard/all_pages" ico="fa-files-o" />
        </div>
        <div className="bottom-section">
          <hr />
          <div className="nav-item dropdown" style={{ listStyle: "none" }}>
            <a
              className="nav-link dropdown-toggle text-dark"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div style={{ width: "30px", height: "30px" }}>
                <Image
                  src={img}
                  className="man-img rounded-circle"
                  width="100"
                  height="100"
                  alt="..."
                />
              </div>
            </a>
            <div
              className="dropdown-menu text-right"
              aria-labelledby="navbarDropdown"
            >
              <Link href="/dashboard/admin_profile">
                <a className="dropdown-item">profile</a>
              </Link>

              <div className="dropdown-divider"></div>
              <button onClick={logOut} className="dropdown-item">
                signout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

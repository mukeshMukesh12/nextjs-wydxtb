// Core
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import { connect } from "react-redux";

// Images
import img1 from "../../img/logo/1200px-Flag_of_Saudi_Arabia.svg.png";

// Components
import Registerd from "./Registerd";
import NotRegisterd from "./NotRegisterd";
import Cookie from "js-cookie";

const Navbar = (props) => {
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   if (props.user) {
  //     setUser(JSON.parse(props.user));
  //   }
  // }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light shadow bg-white">
      <div className="container position-relative">
        <div className="logo position-absolute shadow  mb-5 bg-white rounded p-3"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-start text-primary text-right"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item dropdown">
              <Link href="#">
                <a
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link d-flex dropdown-toggle text-dark"
                >
                  <div style={{ width: "30px", height: "30px" }}>
                    <Image
                      src={img1}
                      className="rounded-circle"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  السعودية
                </a>
              </Link>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="#">
                  <a className="dropdown-item text-right">رابط 1</a>
                </Link>
                <Link href="#">
                  <a className="dropdown-item text-right">رابط 2</a>
                </Link>
                <Link href="#">
                  <a className="dropdown-item text-right">رابط 3</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link href="#">
                <a
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="nav-link d-flex dropdown-toggle text-dark"
                >
                  <div style={{ width: "30px", height: "30px" }}>
                    <Image
                      src={img1}
                      className="rounded-circle"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  العربية
                </a>
              </Link>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="#">
                  <a className="dropdown-item text-right">رابط 1</a>
                </Link>
                <Link href="#">
                  <a className="dropdown-item text-right">رابط 2</a>
                </Link>
                <Link href="#">
                  <a className="dropdown-item text-right">رابط 3</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="home-link nav-link">
                  الرئيسية
                  <span className="f-line main-bgc"></span>
                  <span className="t-line main-bgc"></span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">من نحن</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/course">
                <a className="nav-link ">الكورسات</a>
              </Link>
            </li>
          </ul>
        </div>
        {props.user ? <Registerd /> : <NotRegisterd />}
      </div>
    </nav>
  );
};

// Navbar.getInitialProps = (req) => {
//   const cookies = parseCookie(req);

//   return {
//     currentLogedInUser: req,
//   };
// };

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Navbar);

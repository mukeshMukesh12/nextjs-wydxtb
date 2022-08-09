// Core
import React, { Component } from "react";
import Link from "next/link";

class Search extends Component {
  handelSearch = (props) => {
    return `drop-cont ${props} bg-white shadow rounded p-5 w-75 position-absolute`;
  };

  render() {
    return (
      <div className="container-fluid ">
        <div className={this.handelSearch(this.props.class)}>
          <div className="drops row ">
            <div className="col-sm">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle w-100 mb-3 py-3 px-3"
                  style={{ background: "#e9fffd" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  اختر المرحلة ...
                </button>
                <div
                  className="dropdown-menu text-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    الابتدائي
                  </a>
                  <a className="dropdown-item" href="#">
                    الاعددي
                  </a>
                  <a className="dropdown-item" href="#">
                    الثانوي
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle w-100 mb-3 py-3 px-3"
                  style={{ background: "#e9fffd" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  اختر المادة ...
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    رياضيات
                  </a>
                  <a className="dropdown-item" href="#">
                    علوم الحاسب
                  </a>
                  <a className="dropdown-item" href="#">
                    الفيزياء الكمية
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle w-100 mb-3 py-3 px-3"
                  style={{ background: "#e9fffd" }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  اونلاين ...
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="search-btn">
            <Link href="/profiles">
              <a className="btn px-5 position-absolute main-bgc">
                <i className="fa fa-search fa-sm"></i>
                ابحث عن معلم
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

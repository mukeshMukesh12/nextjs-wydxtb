// Core
import React, { Component } from "react";

// Components
import Pagination from "../Components/Pagination";
import AsideBar from "../Components/AsideBar";
import Filter from "../Components/Filter";
import InstInfo from "../Components/InstInfo";
import Search from "../Components/Search";
import CompleteData from "../Components/CompleteData";

// Reandering
class Profile_in_search extends Component {
  render() {
    return (
      <div>
        <CompleteData name="username" />
        <Search class="" />

        <div className="gap my-5"></div>
        <section className="profile-content">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <AsideBar />
              </div>

              <div className="col-md-9">
                <Filter />
                <InstInfo />
                <InstInfo />
                <InstInfo />
                <InstInfo />
              </div>
            </div>
          </div>
        </section>
        <Pagination />
        <div className="gap"></div>
      </div>
    );
  }
}

export default Profile_in_search;

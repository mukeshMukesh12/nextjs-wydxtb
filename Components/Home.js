// Core
import React, { useEffect } from "react";
import Image from "next/dist/client/image";

// Images
import img from "../img/characters/5.png";

const Home = (props) => {
  return (
    <section className="home main-bgi pt-3">
      <div
        className="container position-relative"
        style={{ zIndex: "30!important" }}
      >
        <div className="home-content d-flex text-right">
          <div className="text-content pt-5 w-75">
            <h4 className="therd-c fw-bold"># {props.ht}</h4>
            <div className="gap">
              <h1 className="text-white w-100 fw-bold position-absolute">
                {props.wt}
              </h1>
            </div>
            <div className="p-3"></div>
            <p className="home-desc fw-normal text-light ">{props.desc}</p>
            <button
              className="btn fw-bold"
              style={{
                color: props.btntc,
                backgroundColor: props.btnbc,
              }}
            >
              {props.btnt}
            </button>
          </div>
          <div className="home-img">
            <Image src={img} alt="Welcome img" quality="100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

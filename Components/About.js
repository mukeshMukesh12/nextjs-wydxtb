// Core
import React from "react";
import Image from "next/dist/client/image";

// Images
import img from "./../img/characters/7@2x.png";

const About = (props) => {
  return (
    <section className="about-us py-5 sec-bg">
      <div className="container pt-5">
        <div className="row pt-5">
          <div className="col-md-5">
            <Image
              src={img}
              className="w-100 h-100"
              alt="About us image"
              quality="100"
            />
          </div>
          <div className="col-md-7 text-right">
            <h5 className="fw-bold"># {props.ht}</h5>
            <h1 className="sec-title">{props.wt}</h1>
            <p className="about-desc ">{props.desc}</p>
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
        </div>
      </div>
    </section>
  );
};

export default About;

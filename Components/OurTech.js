// Core
import React from "react";
import Image from "next/dist/client/image";

// Images
import img from "../img/characters/8@2x.png";

const OurTech = (props) => {
  return (
    <section className="our-tech main-bgi pt-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-md-6 text-right pt-5">
            <h4 className="fw-bold therd-c my-3"># {props.ht}</h4>
            <h3 className="text-white fw-bold w-100">{props.wt}</h3>
            <p className="text-light pt-3">{props.desc}</p>
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
          <div className="col-md-6">
            <div>
              <Image
                src={img}
                className="w-75 h-75"
                alt="About us image"
                quality="100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTech;

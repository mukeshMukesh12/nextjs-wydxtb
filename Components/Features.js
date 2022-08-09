// Core
import React from "react";

import Cookie from "js-cookie";
import { connect } from "react-redux";

const Features = (props) => {
  return (
    <section className="fetures">
      <div className="container p-5">
        <h5 className="text-center fw-bold"># {props.ht}</h5>
        <h1 className="sec-title w-50 mx-auto mb-5 text-center">{props.wt}</h1>

        <div className="fet-cards d-flex justify-content-between pt-5">
          {props.feats.map((i) => (
            <div className="fet-card position-relative">
              <div className="top-block  main-bgc text-center text-white position-absolute shadow rounded">
                <i className="fa fa-usd"></i>
              </div>
              <div className="card-content text-center shadow bg-white rounded p-3 pt-5 bg-white ">
                <h4 className="my-3 fw-bold main-c">{i.title}</h4>
                <p className="card-desc">{i.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const mapCookieToProps = () => {
  if (Cookie.get("feat")) {
    return {
      feats: JSON.parse(Cookie.get("feat")),
    };
  }
};

export default connect(mapCookieToProps)(Features);

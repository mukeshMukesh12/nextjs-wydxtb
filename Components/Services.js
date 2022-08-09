// Core
import React, { useState } from "react";
import Cookie from "js-cookie";
const Searvics = (props) => {
  const [servs, setSer] = useState([]);
  setTimeout(function () {
    try {
      setSer(JSON.parse(Cookie.get("serv")));
    } catch {}
  }, 500);
  return (
    <section className="our-services py-3">
      <div className="cross-border main-bgi py-2 d-flex justify-content-center">
        <div className="cross-content p-5">
          <div className="container text-right">
            <h5 className="text-warning fw-bold pt-5"># {props.ht}</h5>
            <h1 className="sec-title text-white fw-bold">{props.wt}</h1>
            <div className="card-container pt-5 d-flex justify-content-between">
              {servs.map((i) => (
                <div className="card-core rounded">
                  <div className="c f-c main-bgc rounded-circle shadow  mb-5 bg-whit"></div>
                  <div className="c t-c therd-bgc rounded-circle shadow  mb-5 bg-whit"></div>
                  <div className="card-content text-center w-100 p-3 pt-5 bg-white position-absolute">
                    <h4 className="my-3 main-c fw-bold">{i.title}</h4>
                    <p className="card-desc">{i.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="gap"></div>
    </section>
  );
};
export default Searvics;

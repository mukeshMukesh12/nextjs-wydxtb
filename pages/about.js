// Core
import React, { useState } from "react";
import Cookie from "js-cookie";

// Images
import img from "../img/characters/7@2x.png";
import Image from "next/image";

// Reandering
const About = () => {
  const [who, setWho] = useState("");
  const [about, setAout] = useState("");

  setTimeout(() => {
    try {
      setWho(JSON.parse(Cookie.get("who_we_are")));
      setAout(JSON.parse(Cookie.get("about")));
    } catch (error) {}
  }, 1000);
  return (
    <div>
      <>
        <section className="who-we-are">
          <div className="cross-border main-bgi py-5 d-flex justify-content-center">
            <div className="cross-content p-5">
              <div className="container text-center">
                <h5 className="text-warning fw-bold mt-5">
                  # {about.about_hashtag}
                </h5>
                <h1 className="sec-title text-white fw-bold">
                  {about.about_title}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="the-best sec-bg mb-5">
          <div className="container text-right mt-5 py-5">
            <div className="row">
              <div className="col">
                <h5 className="fw-bold"># {who.who_hashtag}</h5>
                <h1 className="sec-title  fw-bold">{who.who_welocme_text}</h1>
                <p className="fw-normal">{who.who_description}</p>
                <button
                  className="btn fw-bold"
                  style={{
                    color: who.who_button_text_color,
                    backgroundColor: who.who_button_background_color,
                  }}
                >
                  {who.who_button_text}
                </button>
              </div>
              <div className="col">
                <Image src={img} alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default About;

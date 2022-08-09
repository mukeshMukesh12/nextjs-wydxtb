// Core
import React, { useState } from "react";
import Link from "next/link";
import Cookie from "js-cookie";

// Rendring
const AuthCode = () => {
  //
  const [auth_data, setAuth_data] = useState("");
  setTimeout(() => {
    try {
      setAuth_data(JSON.parse(Cookie.get("authenticate")));
    } catch (error) {}
  }, 1000);
  return (
    <div>
      <>
        <section className="good-wishes">
          <div className="cross-border main-bgi py-5 d-flex justify-content-center">
            <div className="cross-content p-5">
              <div className="container text-center">
                <h5 className="text-warning fw-bold mt-5">
                  # {auth_data.authenticate_hashtag}
                </h5>
                <h1 className="sec-title text-white fw-bold">
                  {auth_data.authenticate_title}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="signin sec-bg mb-5">
          <div className="container text-center mt-5 py-5">
            <h4 className="therd-c fw-bold pt-5">
              # {auth_data.authenticate_body_hashtag}
            </h4>
            <h1 className="sec-title text-center mx-auto center-after fw-bold">
              {auth_data.authenticate_body_title}
            </h1>
            <p className="fw-normal">
              {auth_data.authenticate_body_description}
            </p>
            <div className="code mx-auto my-5 d-flex justify-content-between">
              <input
                type="text"
                className="main-bgc text-center p-3 rounded text-white fw-bold"
              />
              <input
                type="text"
                className="main-bgc text-center p-3 rounded text-white fw-bold"
              />
              <input
                type="text"
                className="main-bgc text-center p-3 rounded text-white fw-bold"
              />
              <input
                type="text"
                className="main-bgc text-center p-3 rounded text-white fw-bold"
              />
            </div>
            <p className="fw-bold text-center mb-5">
              لم يصلك رسالة تأكيد...!!!
              <a href="#" className="main-c">
                ارسال مرة اخري
              </a>
            </p>
            <Link href="/">
              <a className="btn main-bgc text-white fw-bold">تأكيد ومتابعة</a>
            </Link>
          </div>
        </section>
      </>
    </div>
  );
};

export default AuthCode;

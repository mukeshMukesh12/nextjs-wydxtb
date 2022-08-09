// Core
import React, { useState } from "react";
import { connect } from "react-redux";
import { userSignin } from "../../redux/actions/action";

const DashboardLogin = (props) => {
  // Cach input Value Logic
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handelLogIn(e) {
    e.preventDefault();
    let item = { email, password };
    props.userSignin(
      item,
      `${process.env.API_URL}admin/registration/login`,
      "dashboard"
    );
  }

  console.log(process.env.API_URL);

  return (
    <section dir="ltr">
      <div className="container">
        <div className="gap py-5"></div>
        <div className="d-flex justify-content-center">
          <div className="bg-white p-3 w-75 shadow rounded">
            <form>
              <h3 className="text-center text-capitalize fw-bold">
                moruge admin panel <span className="text-primary">login</span>
              </h3>
              <div className="form-group py-3">
                <input
                  type="email"
                  value={email}
                  className="form-control border"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter E-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group py-3">
                <input
                  type="password"
                  value={password}
                  className="form-control border"
                  id="exampleInputPassword1"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="form-check pb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Rememer me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handelLogIn}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignin: (data, api, goto) => dispatch(userSignin(data, api, goto)),
  };
};

export default connect(null, mapDispatchToProps)(DashboardLogin);

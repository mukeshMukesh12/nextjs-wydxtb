import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Cookie from "js-cookie";
import { getSigninData, editSigninData } from "../../redux/actions/action";

function Signin(props) {
  const [hash, setHash] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    props.getSigninData();

    setHash(props.signin.signin_hashtag);
    setTitle(props.signin.signin_title);
  }, []);

  return (
    <>
      <div className="gap"></div>
      <h1 className="text-center">Edit Signin Page</h1>
      <div className="gap"></div>
      <div className="home-edit shadow p-3 mb-5">
        <h3>Home</h3>
        <ul className="p-3 ">
          <hr />
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Hashtag ( # ) </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={hash}
                onChange={(e) => {
                  setHash(e.target.value);
                }}
                className="form-control border"
              />
            </div>
          </li>
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Title </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Image </h5>
            </div>
            <div className="col-md-9">
              <input type="file" className="form-control border" />
            </div>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-primary btn-block my-5"
        onClick={() => {
          const data = {
            signin_hashtag: hash,
            signin_title: title,
          };
          console.log(data);
          props.editSigninData(data);
        }}
      >
        Save
      </button>
      <div className="p-2"></div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  if (Cookie.get("user")) {
    let token = JSON.parse(Cookie.get("user")).access_token;
    return {
      getSigninData: () => dispatch(getSigninData(token)),
      editSigninData: (data) => dispatch(editSigninData((token = token), data)),
    };
  }
};

const mapStateToProps = () => {
  if (Cookie.get()) {
    return {
      signin: JSON.parse(Cookie.get("signin_gg")),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

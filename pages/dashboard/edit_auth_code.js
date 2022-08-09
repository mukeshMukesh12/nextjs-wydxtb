import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getAuthCodeData, editAuthCodeData } from "../../redux/actions/action";
import Cookie from "js-cookie";

function Auth_code(props) {
  const [secHash, setSecHash] = useState("");
  const [secTitle, setSecTitle] = useState("");

  const [bodyHash, setBodyHash] = useState("");
  const [bodyTitle, setBodyTitle] = useState("");
  const [bodyDesc, setBodyDesc] = useState("");

  /**
   * 
   * 
        "authenticate_hashtag": null,
        "authenticate_title": null,
        "authenticate_body_hashtag": null,
        "authenticate_body_title": null,
        "authenticate_body_description": null,
   */

  useEffect(() => {
    props.getAuthCodeData();

    setSecHash(props.auth.authenticate_hashtag);
    setSecTitle(props.auth.authenticate_title);

    setBodyHash(props.auth.authenticate_body_hashtag);
    setBodyTitle(props.auth.authenticate_body_title);
    setBodyDesc(props.auth.authenticate_body_description);
  }, []);

  return (
    <>
      <div className="gap"></div>
      <h1 className="text-center">Edit Authentecation Code Page</h1>
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
                value={secHash}
                onChange={(e) => setSecHash(e.target.value)}
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
                value={secTitle}
                onChange={(e) => setSecTitle(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>
        </ul>
      </div>

      <div className="gap"></div>
      <div className="home-edit shadow p-3 mb-5">
        <h3>Body</h3>
        <ul className="p-3 ">
          <hr />
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Hashtag ( # ) </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={bodyHash}
                onChange={(e) => setBodyHash(e.target.value)}
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
                value={bodyTitle}
                onChange={(e) => setBodyTitle(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Description </h5>
            </div>
            <div className="col-md-9">
              <textarea
                rows="10"
                value={bodyDesc}
                onChange={(e) => setBodyDesc(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-primary btn-block my-5"
        onClick={() => {
          const data = {
            authenticate_hashtag: secHash,
            authenticate_title: secTitle,
            authenticate_body_hashtag: bodyHash,
            authenticate_body_title: bodyTitle,
            authenticate_body_description: bodyDesc,
          };

          props.editAuthCodeData(data);
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
      getAuthCodeData: () => dispatch(getAuthCodeData(token)),
      editAuthCodeData: (data) =>
        dispatch(editAuthCodeData((token = token), data)),
    };
  }
};

const mapStateToProps = () => {
  if (Cookie.get("authen_e")) {
    return {
      auth: JSON.parse(Cookie.get("authen_e")),
    };
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth_code);

import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { connect } from "react-redux";
import {
  getSelectTypeData,
  editSelectTypeData,
} from "../../redux/actions/action";

function Select_type(props) {
  const [secHash, setSecHash] = useState("");
  const [secTitle, setSecTitle] = useState("");

  const [stdWelText, setStdWelText] = useState("");
  const [stdDesc, setStdDesc] = useState("");
  const [stdImg, setStdImg] = useState("");
  const [stdButtonText, setStdButtonText] = useState("");
  const [stdButtonTextColor, setStdButtonTextColor] = useState("");
  const [stdButtonBackgroundColor, setStdButtonBackgroundColor] = useState("");

  const [tchWelText, setTchWelText] = useState("");
  const [tchDesc, setTchDesc] = useState("");
  const [tchImg, setTchImg] = useState("");
  const [tchButtonText, setTchButtonText] = useState("");
  const [tchButtonTextColor, setTchButtonTextColor] = useState("");
  const [tchButtonBackgroundColor, setTchButtonBackgroundColor] = useState("");

  useEffect(() => {
    props.getSelectTypeData();

    setSecTitle(props.select_home_sec.select_type_page_hashtag);
    setSecHash(props.select_home_sec.select_type_page_title);

    setStdWelText(props.select_std.student_welocme_text);
    setStdDesc(props.select_std.student_description);
    setStdImg(props.select_std.student_image);
    setStdButtonText(props.select_std.student_button_text);
    setStdButtonTextColor(props.select_std.student_button_text_color);
    setStdButtonBackgroundColor(
      props.select_std.student_button_background_color
    );

    setTchWelText(props.select_tch.teacher_welocme_text);
    setTchDesc(props.select_tch.teacher_description);
    setTchImg(props.select_tch.teacher_image);
    setTchButtonText(props.select_tch.teacher_button_text);
    setTchButtonTextColor(props.select_tch.teacher_button_text_color);
    setTchButtonBackgroundColor(
      props.select_tch.teacher_button_background_color
    );
  }, []);

  return (
    <>
      <div className="gap"></div>
      <h1 className="text-center">Edit Select Type Page</h1>
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
      <div className="home shadow p-3">
        <h3>Edit Student UI</h3>
        <ul className="p-3 ">
          <hr />

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Welcome text </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={stdWelText}
                onChange={(e) => setStdWelText(e.target.value)}
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
                value={stdDesc}
                onChange={(e) => setStdDesc(e.target.value)}
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

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Button </h5>
            </div>
            <div className="col-md-9 d-flex">
              <input
                type="text"
                value={stdButtonText}
                onChange={(e) => setStdButtonText(e.target.value)}
                className="form-control border"
              />
              <div className="colors w-25 d-flex ml-3">
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={stdButtonTextColor}
                  onChange={(e) => setStdButtonTextColor(e.target.value)}
                />
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={stdButtonBackgroundColor}
                  onChange={(e) => setStdButtonBackgroundColor(e.target.value)}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="gap"></div>
      <div className="home shadow p-3">
        <h3>Edit Teacher UI</h3>
        <ul className="p-3 ">
          <hr />

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Welcome text </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={tchWelText}
                onChange={(e) => setTchWelText(e.target.value)}
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
                value={tchDesc}
                onChange={(e) => setTchDesc(e.target.value)}
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

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Button </h5>
            </div>
            <div className="col-md-9 d-flex">
              <input
                type="text"
                value={tchButtonText}
                onChange={(e) => setTchButtonText(e.target.value)}
                className="form-control border"
              />
              <div className="colors w-25 d-flex ml-3">
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={tchButtonTextColor}
                  onChange={(e) => setTchButtonTextColor(e.target.value)}
                />
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={tchButtonBackgroundColor}
                  onChange={(e) => setTchButtonBackgroundColor(e.target.value)}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-primary btn-block my-5"
        onClick={() => {
          let data = {
            select_type_page_hashtag: secHash,
            select_type_page_title: secTitle,

            student_welocme_text: stdWelText,
            student_description: stdDesc,
            // student_image: stdImg,
            student_button_text: stdButtonText,
            student_button_text_color: stdButtonTextColor,
            student_button_background_color: stdButtonBackgroundColor,

            teacher_welocme_text: tchWelText,
            teacher_description: tchDesc,
            // teacher_image: tchImg,
            teacher_button_text: tchButtonText,
            teacher_button_text_color: tchButtonTextColor,
            teacher_button_background_color: tchButtonBackgroundColor,
          };
          console.log(data);
          props.editSelectTypeData(data);
        }}
      >
        Save
      </button>
      <div className="p-2"></div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  if (Cookie.get()) {
    let token = JSON.parse(Cookie.get("user")).access_token;
    return {
      getSelectTypeData: () => dispatch(getSelectTypeData(token)),
      editSelectTypeData: (data) =>
        dispatch(editSelectTypeData((token = token), data)),
    };
  }
};

const mapStateToProps = () => {
  if (Cookie.get()) {
    return {
      select_home_sec: JSON.parse(Cookie.get("select_home_sec")),
      select_std: JSON.parse(Cookie.get("select_std")),
      select_tch: JSON.parse(Cookie.get("select_tch")),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Select_type);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Cookie from "js-cookie";
import { getAboutData, editAboutData } from "../../redux/actions/action";

function About(props) {
  const [whoHashtag, setWhoHashtag] = useState("");
  const [whoWelText, setWhoWelText] = useState("");
  const [whoDesc, setWhoDesc] = useState("");
  const [whoButtonText, setWhoButtonText] = useState("");
  const [whoButtonTextColor, setWhoButtonTextColor] = useState("");
  const [whoButtonBackgroundColor, setWhoButtonBackgroundColor] = useState("");
  const [whoImg, setWhoImg] = useState(
    "http://algorithm.demo.carmartapp.com/morog/public/uploads/homedata/default.jpg"
  );

  const [aboutHashtag, setAboutHashtag] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");

  useEffect(() => {
    props.getAboutData();

    setWhoHashtag(props.who_we_are.who_hashtag);
    setWhoWelText(props.who_we_are.who_welocme_text);
    setWhoDesc(props.who_we_are.who_description);
    setWhoButtonText(props.who_we_are.who_button_text);
    setWhoButtonBackgroundColor(props.who_we_are.who_button_background_color);
    setWhoButtonTextColor(props.who_we_are.who_button_text_color);

    setAboutHashtag(props.about.about_hashtag);
    setAboutTitle(props.about.about_title);
  }, []);
  return (
    <>
      <div className="gap"></div>
      <h1 className="text-center">Edit About Page</h1>
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
                value={aboutHashtag}
                onChange={(e) => setAboutHashtag(e.target.value)}
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
                value={aboutTitle}
                onChange={(e) => setAboutTitle(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>
        </ul>
      </div>
      <div className="gap"></div>

      <div className="home shadow p-3">
        <h3>Who we are</h3>
        <ul className="p-3 ">
          <hr />
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Hashtag ( # ) </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={whoHashtag}
                onChange={(e) => setWhoHashtag(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Who we are </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={whoWelText}
                onChange={(e) => setWhoWelText(e.target.value)}
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
                value={whoDesc}
                onChange={(e) => setWhoDesc(e.target.value)}
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
                value={whoButtonText}
                onChange={(e) => setWhoButtonText(e.target.value)}
                className="form-control border"
              />
              <div className="colors w-25 d-flex ml-3">
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={whoButtonTextColor}
                  onChange={(e) => setWhoButtonTextColor(e.target.value)}
                />
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={whoButtonBackgroundColor}
                  onChange={(e) => setWhoButtonBackgroundColor(e.target.value)}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-primary btn-block my-5"
        onClick={() => {
          const data = {
            who_hashtag: whoHashtag,
            who_welocme_text: whoWelText,
            who_description: whoDesc,
            who_button_text: whoButtonText,
            who_button_text_color: whoButtonTextColor,
            who_button_background_color: whoButtonBackgroundColor,
            about_hashtag: aboutHashtag,
            about_title: aboutTitle,
          };
          console.log(data);
          props.editAboutData(data);
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
      getAboutData: () => dispatch(getAboutData(token)),
      editAboutData: (data) => dispatch(editAboutData((token = token), data)),
    };
  }
};

const mapStateToProps = () => {
  if (Cookie.get()) {
    return {
      who_we_are: JSON.parse(Cookie.get("who_we_are")),
      about: JSON.parse(Cookie.get("about")),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

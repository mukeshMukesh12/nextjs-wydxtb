import Cookie from "js-cookie";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";

// Home Data Action Creatores
import { getHomeData, getServices } from "../../redux/actions/action";
import { editHomeData } from "../../redux/actions/action";

// Serices Action Creatores
import { addServices } from "../../redux/actions/action";
import { editServices } from "../../redux/actions/action";
import { deleteServices } from "../../redux/actions/action";

// Features Aciton Creatores
import { getFeatuers } from "../../redux/actions/action";
import { addFeatuers } from "../../redux/actions/action";
import { editFeatuers } from "../../redux/actions/action";
import { deleteFeatuers } from "../../redux/actions/action";

function PageEdit(props) {
  const [country, setCountry] = useState("");

  const [homeHashtag, setHomeHashtag] = useState("");
  const [homeWelText, setHomeWelText] = useState("");
  const [homeDesc, setHomeDesc] = useState("");
  const [homeImg, setHomeImg] = useState([
    "http://algorithm.demo.carmartapp.com/morog/public/uploads/homedata/default.jpg",
  ]);
  const [homeButtonText, setHomeButtonText] = useState("");
  const [homeButtonTextColor, setHomeButtonTextColor] = useState("");
  const [homeButtonBackgroundColor, setHomeButtonBackgroundColor] =
    useState("");

  const [whoHashtag, setWhoHashtag] = useState("");
  const [whoWelText, setWhoWelText] = useState("");
  const [whoDesc, setWhoDesc] = useState("");
  const [whoImg, setWhoImg] = useState(
    "http://algorithm.demo.carmartapp.com/morog/public/uploads/homedata/default.jpg"
  );
  const [whoButtonText, setWhoButtonText] = useState("");
  const [whoButtonTextColor, setWhoButtonTextColor] = useState("");
  const [whoButtonBackgroundColor, setWhoButtonBackgroundColor] = useState("");

  const [technologyHashtag, setTechnologyHashtag] = useState("");
  const [technologyWelText, setTechnologyWelText] = useState("");
  const [technologyDesc, setTechnologyDesc] = useState("");
  const [technologyImg, setTechnologyImg] = useState(
    "http://algorithm.demo.carmartapp.com/morog/public/uploads/homedata/default.jpg"
  );
  const [technologyButtonText, setTechnologyButtonText] = useState("");
  const [technologyButtonTextColor, setTechnologyButtonTextColor] =
    useState("");
  const [technologyButtonBackgroundColor, setTechnologyButtonBackgroundColor] =
    useState("");

  const [serviceHashtag, setServiceHashtag] = useState("");
  const [serviceTitle, setServiceTitle] = useState("");

  const [partnerHashtag, setPartnerHashtag] = useState("");
  const [partnerTitle, setPartnerTitle] = useState("");

  const [featureHashtag, setFeatureHashtag] = useState("");
  const [featureTitle, setFeatureTile] = useState("");

  // Servicess section
  const [servTitle, setServTitle] = useState("");
  const [servDesc, setServDesc] = useState("");

  const [servEditTitle, setServEditTitle] = useState("");
  const [servEditDesc, setServEditDesc] = useState("");

  const [servIdEdit, setServIdEdit] = useState(-1);
  const [servIdDel, setServIdDel] = useState(-1);

  // Features section
  const [featTitle, setFeatTitle] = useState("");
  const [featDesc, setFeatDesc] = useState("");

  const [featEditTitle, setFeatEditTitle] = useState("");
  const [featEditDesc, setFeatEditDesc] = useState("");

  const [featIdEdit, setFeatIdEdit] = useState(-1);
  const [featIdDel, setFeatIdDel] = useState(-1);

  useEffect(() => {
    props.getAllServices();
    props.getAllFeatuers();
    props.getHomeData();

    setHomeHashtag(props.homedata.home_hashtag);
    setHomeWelText(props.homedata.home_welocme_text);
    setHomeDesc(props.homedata.home_description);
    setHomeButtonText(props.homedata.home_button_text);
    setHomeButtonBackgroundColor(props.homedata.home_button_background_color);
    setHomeButtonTextColor(props.homedata.home_button_text_color);

    setWhoHashtag(props.who_we_are.who_hashtag);
    setWhoWelText(props.who_we_are.who_welocme_text);
    setWhoDesc(props.who_we_are.who_description);
    setWhoButtonText(props.who_we_are.who_button_text);
    setWhoButtonBackgroundColor(props.who_we_are.who_button_background_color);
    setWhoButtonTextColor(props.who_we_are.who_button_text_color);

    setTechnologyHashtag(props.technology.technology_hashtag);
    setTechnologyWelText(props.technology.technology_welocme_text);
    setTechnologyDesc(props.technology.technology_description);
    setTechnologyButtonText(props.technology.technology_button_text);
    setTechnologyButtonBackgroundColor(
      props.technology.technology_button_background_color
    );
    setTechnologyButtonTextColor(props.technology.technology_button_text_color);

    setServiceHashtag(props.service.service_hashtag);
    setServiceTitle(props.service.service_title);

    setPartnerHashtag(props.partner.partner_hashtag);
    setPartnerTitle(props.partner.partner_title);

    setFeatureHashtag(props.feature.feature_hashtag);
    setFeatureTile(props.feature.feature_title);
  }, []);

  // ----------------------------- //

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const [uploadPer, setUploadPer] = useState("0");
  const [file, setFile] = useState("");

  const uploadFile = ({ target: { files } }) => {
    console.log(files[0]);
    let data = new FormData();
    data.append("file", files[0]);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          setUploadPer(percent);
        }
      },
    };

    axios({
      method: "post",
      url: "https://fileupload.free.beeceptor.com/upload",
      data,
      options,
    }).then((res) => {
      console.log(res);

      setFile(res.data.url);
      setUploadPer(100);
      setTimeout(() => {
        setUploadPer(0);
      }, 1000);
    });
  };

  const images = files.map((file) => (
    <div
      className="mx-auto bg-dark"
      style={{ width: "200px", height: "200px" }}
      key={file.name}
    >
      <div className="w-100 h-100">
        <img src={file.preview} className="w-100 h-100" alt="preview" />
      </div>
    </div>
  ));

  // ----------------------------- //

  return (
    <div>
      <h1 className="text-center">Edit Home Page</h1>
      <div className="gap"></div>

      <div className="home shadow p-3">
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
                value={homeHashtag}
                onChange={(e) => setHomeHashtag(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Welcome text </h5>
            </div>
            <div className="col-md-9">
              <input
                value={homeWelText}
                onChange={(e) => setHomeWelText(e.target.value)}
                type="text"
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
                value={homeDesc}
                onChange={(e) => setHomeDesc(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Image </h5>
            </div>
            <div className="col-md-9">
              {/* <input
                type="file"
                value={homeImg}
                onChange={(e) => setHomeImg(e.target.files[0])}
                className="form-control border"
              /> */}

              <button className="btn btn-link">
                <label htmlFor="clu-inp">رفع صورة من جهازك</label>
                <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                <input {...getInputProps()} className="d-none" id="clu-inp" />
              </button>
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Button </h5>
            </div>
            <div className="col-md-9 d-flex">
              <input
                type="text"
                value={homeButtonText}
                onChange={(e) => {
                  setHomeButtonText(e.target.value);
                }}
                className="form-control border"
              />

              <div className="colors w-25 d-flex ml-3">
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={homeButtonTextColor}
                  onChange={(e) => setHomeButtonTextColor(e.target.value)}
                />
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={homeButtonBackgroundColor}
                  onChange={(e) => setHomeButtonBackgroundColor(e.target.value)}
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="gap"></div>

      <div className="who-we-are shadow p-3">
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
              <h5> Title </h5>
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
      <div className="gap"></div>

      <div className="our-service shadow p-3 mb-5">
        <h3>Our Services</h3>
        <ul className="p-3 ">
          <hr />
          <h5 className="text-center">Section Edit</h5>
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Hashtag ( # ) </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={serviceHashtag}
                onChange={(e) => setServiceHashtag(e.target.value)}
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
                value={serviceTitle}
                onChange={(e) => setServiceTitle(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <h5 className="text-center mt-3">Services Edit</h5>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Edit one </h5>
            </div>
            <div className="col-md-9">
              <select
                value={servIdEdit}
                className="form-control border select-opt"
                onChange={(e) => {
                  setServIdEdit(e.target.value);
                }}
              >
                <option value={-1}>No one</option>
                {props.serv
                  ? props.serv.map((topic, index) => (
                      <option value={topic.id} key={index}>
                        {topic.title}
                      </option>
                    ))
                  : null}
              </select>
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Title </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control border"
                value={servEditTitle}
                onChange={(e) => {
                  setServEditTitle(e.target.value);
                }}
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
                className="form-control border"
                value={servEditDesc}
                onChange={(e) => {
                  setServEditDesc(e.target.value);
                }}
              />
            </div>
          </li>

          <button
            className="btn btn-primary"
            onClick={() => {
              props.editServices(
                { title: servEditTitle, description: servEditTitle },
                servIdEdit
              );
            }}
          >
            Edit
          </button>

          <div className="py-2"></div>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Delete one </h5>
            </div>
            <div className="col-md-9">
              <select
                value={servIdDel}
                className="form-control border select-opt"
                onChange={(e) => {
                  setServIdDel(e.target.value);
                }}
              >
                <option value={-1}>No one</option>
                {props.serv
                  ? props.serv.map((topic, index) => (
                      <option value={topic.id} key={index}>
                        {topic.title}
                      </option>
                    ))
                  : null}
              </select>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.delServ(servIdDel);
              }}
            >
              Delete
            </button>
          </li>

          <hr />
          <h5 className="text-center mt-3">Add Services</h5>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Title </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={servTitle}
                onChange={(e) => setServTitle(e.target.value)}
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
                value={servDesc}
                onChange={(e) => setServDesc(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <button
            className="btn btn-primary mt-3"
            onClick={() => {
              props.addNewServices({ title: servTitle, description: servDesc });
            }}
          >
            Add One
          </button>
        </ul>
      </div>
      <div className="gap"></div>

      <div className="partner shadow p-3 mb-5">
        <h3>Partners</h3>
        <ul className="p-3 ">
          <hr />
          <h5 className="text-center">Section Edit</h5>
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Hashtag ( # ) </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={partnerHashtag}
                onChange={(e) => setPartnerHashtag(e.target.value)}
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
                value={partnerTitle}
                onChange={(e) => setPartnerTitle(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <h5 className="text-center mt-3">Section Add && Remove</h5>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Add </h5>
            </div>
            <div className="col-md-9">
              <input type="file" className="form-control border" />
            </div>
            <button className="mx-2 btn btn-primary">Add</button>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Remove </h5>
            </div>
            <div className="col-md-9">
              <select
                value={country}
                className="form-control border"
                onChange={(e) => setCountry(e.target.value)}
              >
                {/* {options.map((topic) => (
                  <option value={topic.value}>{topic.label}</option>
                ))} */}
              </select>
            </div>
            <button className="btn btn-danger mx-2">delete</button>
          </li>
        </ul>
      </div>
      <div className="gap"></div>

      <div className="our-tech shadow p-3">
        <h3>Our Tech</h3>
        <ul className="p-3 ">
          <hr />
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Hashtag ( # ) </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={technologyHashtag}
                onChange={(e) => setTechnologyHashtag(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Welcome text </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={technologyWelText}
                onChange={(e) => setTechnologyWelText(e.target.value)}
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
                value={technologyDesc}
                onChange={(e) => setTechnologyDesc(e.target.value)}
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
                value={technologyButtonText}
                onChange={(e) => setTechnologyButtonText(e.target.value)}
                className="form-control border"
              />
              <div className="colors w-25 d-flex ml-3">
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={technologyButtonTextColor}
                  onChange={(e) => setTechnologyButtonTextColor(e.target.value)}
                />
                <input
                  type="color"
                  className="form-control ml-2 border p-1"
                  value={technologyButtonBackgroundColor}
                  onChange={(e) =>
                    setTechnologyButtonBackgroundColor(e.target.value)
                  }
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="gap"></div>

      <div className="our-features shadow p-3 mb-5">
        <h3>Our Features</h3>
        <ul className="p-3 ">
          <hr />
          <h5 className="text-center">Section Edit</h5>
          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Hashtag ( # ) </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={featureHashtag}
                onChange={(e) => setFeatureHashtag(e.target.value)}
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
                value={featureTitle}
                onChange={(e) => setFeatureTile(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <h5 className="text-center mt-3">Features Edit</h5>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Edit one </h5>
            </div>
            <div className="col-md-9">
              <select
                value={featIdEdit}
                className="form-control border select-opt"
                onChange={(e) => {
                  setFeatIdEdit(e.target.value);
                }}
              >
                <option value={-1}>No one</option>
                {props.feat
                  ? props.feat.map((topic, index) => (
                      <option value={topic.id} key={index}>
                        {topic.title}
                      </option>
                    ))
                  : null}
              </select>
            </div>
          </li>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Title </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={featEditTitle}
                onChange={(e) => setFeatEditTitle(e.target.value)}
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
                value={featEditDesc}
                onChange={(e) => setFeatEditDesc(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>

          <button
            className="btn btn-primary"
            onClick={() => {
              props.editFeatuers(
                { title: featEditTitle, description: featEditDesc },
                featIdEdit
              );
            }}
          >
            Edit
          </button>
          <div className="py-2"></div>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Delete one </h5>
            </div>
            <div className="col-md-9">
              <select
                value={featIdDel}
                className="form-control border select-opt"
                onChange={(e) => {
                  setFeatIdDel(e.target.value);
                }}
              >
                <option value={-1}>No one</option>
                {props.feat
                  ? props.feat.map((topic, index) => (
                      <option value={topic.id} key={index}>
                        {topic.title}
                      </option>
                    ))
                  : null}
              </select>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.delFeat(featIdDel);
              }}
            >
              Delete
            </button>
          </li>

          <hr />
          <h5 className="text-center mt-3">Add Features</h5>

          <li className="pt-3 row">
            <div className="col-md-2">
              <h5> Title </h5>
            </div>
            <div className="col-md-9">
              <input
                type="text"
                value={featTitle}
                onChange={(e) => setFeatTitle(e.target.value)}
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
                value={featDesc}
                onChange={(e) => setFeatDesc(e.target.value)}
                className="form-control border"
              />
            </div>
          </li>
          <button
            className="btn btn-primary mt-3"
            onClick={() =>
              props.addNewFeatuers({ title: featTitle, description: featDesc })
            }
          >
            Add One
          </button>
        </ul>
      </div>
      <button
        className="btn btn-primary btn-block my-5"
        onClick={() => {
          const data = {
            home_hashtag: homeHashtag,
            home_welocme_text: homeWelText,
            home_image: files[0].path,
            home_description: homeDesc,
            home_button_text: homeButtonText,
            home_button_text_color: homeButtonTextColor,
            home_button_background_color: homeButtonBackgroundColor,

            who_hashtag: whoHashtag,
            who_welocme_text: whoWelText,
            who_description: whoDesc,
            who_button_text: whoButtonText,
            who_button_text_color: whoButtonTextColor,
            who_button_background_color: whoButtonBackgroundColor,

            technology_hashtag: technologyHashtag,
            technology_welocme_text: technologyWelText,
            technology_description: technologyDesc,
            // technology_image: technologyImg,
            technology_button_text: technologyButtonText,
            technology_button_text_color: technologyButtonTextColor,
            technology_button_background_color: technologyButtonBackgroundColor,

            service_hashtag: serviceHashtag,
            service_title: serviceTitle,

            partner_hashtag: partnerHashtag,
            partner_title: partnerTitle,

            feature_hashtag: featureHashtag,
            feature_title: featureTitle,
          };
          console.log(data);
          props.editHomeData(data);
        }}
      >
        Save
      </button>

      <div className="p-2"></div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  if (Cookie.get("user")) {
    let token = JSON.parse(Cookie.get("user")).access_token;
    return {
      // Services
      addNewServices: (data) => {
        dispatch(addServices((token = token), data));
      },
      getAllServices: () => dispatch(getServices(token)),
      editServices: (data, id) =>
        dispatch(editServices((token = token), data, id)),
      delServ: (id) => dispatch(deleteServices((token = token), id)),

      // Features
      addNewFeatuers: (data) => dispatch(addFeatuers((token = token), data)),
      getAllFeatuers: () => dispatch(getFeatuers(token)),
      editFeatuers: (data, id) => {
        dispatch(editFeatuers((token = token), data, id));
      },
      delFeat: (id) => dispatch(deleteFeatuers((token = token), id)),

      // Home Data
      getHomeData: () => dispatch(getHomeData(token)),
      editHomeData: (data) => dispatch(editHomeData((token = token), data)),
    };
  }
};

const mapStateToProps = () => {
  if (Cookie.get()) {
    return {
      serv: JSON.parse(Cookie.get("serv")),
      feat: JSON.parse(Cookie.get("feat")),
      homedata: JSON.parse(Cookie.get("homedata")),
      who_we_are: JSON.parse(Cookie.get("who_we_are")),
      technology: JSON.parse(Cookie.get("technology")),
      student: JSON.parse(Cookie.get("student")),
      teacher: JSON.parse(Cookie.get("teacher")),
      service: JSON.parse(Cookie.get("service")),
      partner: JSON.parse(Cookie.get("partner")),
      feature: JSON.parse(Cookie.get("feature")),
      about: JSON.parse(Cookie.get("about")),
      signin: JSON.parse(Cookie.get("signin")),
      signup: JSON.parse(Cookie.get("signup")),
      select_type: JSON.parse(Cookie.get("select_type")),
      authenticate: JSON.parse(Cookie.get("authenticate")),
      profile: JSON.parse(Cookie.get("profile")),
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageEdit);

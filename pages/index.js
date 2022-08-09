// Core
import React, { useEffect, useState, useRef } from "react";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { connect } from "react-redux";

// Components
import Home from "../Components/Home";
import Blog from "../Components/Blog";
import About from "../Components/About";
import OurTech from "../Components/OurTech";
import Partner from "../Components/Partner";
import Services from "../Components/Services";
import Search from "../Components/Search";
import Features from "../Components/Features";

// Home Data Action Creatores
import { getHomeData, getServices, getFeatuers } from "../redux/actions/action";

// Reandering
const Index = (props) => {
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

  useEffect(() => {
    props.getAllFeatuers();
    props.getAllServices();
    props.getHomeData();
  }, []);

  setTimeout(function () {
    try {
      let homedata = JSON.parse(Cookie.get("homedata"));
      let who_we_are = JSON.parse(Cookie.get("who_we_are"));
      let technology = JSON.parse(Cookie.get("technology"));

      let service = JSON.parse(Cookie.get("service"));
      let partner = JSON.parse(Cookie.get("partner"));
      let feature = JSON.parse(Cookie.get("feature"));

      // -------------------------------------------------------

      setHomeHashtag(homedata.home_hashtag);
      setHomeWelText(homedata.home_welocme_text);
      setHomeDesc(homedata.home_description);
      setHomeButtonText(homedata.home_button_text);
      setHomeButtonBackgroundColor(homedata.home_button_background_color);
      setHomeButtonTextColor(homedata.home_button_text_color);

      setWhoHashtag(who_we_are.who_hashtag);
      setWhoWelText(who_we_are.who_welocme_text);
      setWhoDesc(who_we_are.who_description);
      setWhoButtonText(who_we_are.who_button_text);
      setWhoButtonBackgroundColor(who_we_are.who_button_background_color);
      setWhoButtonTextColor(who_we_are.who_button_text_color);

      setTechnologyHashtag(technology.technology_hashtag);
      setTechnologyWelText(technology.technology_welocme_text);
      setTechnologyDesc(technology.technology_description);
      setTechnologyButtonText(technology.technology_button_text);
      setTechnologyButtonBackgroundColor(
        technology.technology_button_background_color
      );
      setTechnologyButtonTextColor(technology.technology_button_text_color);

      setServiceHashtag(service.service_hashtag);
      setServiceTitle(service.service_title);

      setPartnerHashtag(partner.partner_hashtag);
      setPartnerTitle(partner.partner_title);

      setFeatureHashtag(feature.feature_hashtag);
      setFeatureTile(feature.feature_title);

      // ----------------------------------------------------------
    } catch (error) {}
  }, 1000);

  return (
    <div>
      <>
        <Home
          ht={homeHashtag}
          wt={homeWelText}
          desc={homeDesc}
          btnt={homeButtonText}
          btntc={homeButtonTextColor}
          btnbc={homeButtonBackgroundColor}
        />
        <Search class="index" />
        <About
          ht={whoHashtag}
          wt={whoWelText}
          desc={whoDesc}
          btnt={whoButtonText}
          btntc={whoButtonTextColor}
          btnbc={whoButtonBackgroundColor}
        />
        <Services ht={serviceHashtag} wt={servTitle} />
        <Partner ht={partnerHashtag} wt={partnerTitle} />
        <OurTech
          ht={technologyHashtag}
          wt={technologyWelText}
          desc={technologyDesc}
          btnt={technologyButtonText}
          btntc={technologyButtonTextColor}
          btnbc={technologyButtonBackgroundColor}
        />
        {/* <Features ht={featureHashtag} wt={featTitle} /> */}
        <Blog />
      </>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Services
    getAllServices: () => dispatch(getServices()),

    // Features
    getAllFeatuers: () => dispatch(getFeatuers()),

    // Home Data
    getHomeData: () => dispatch(getHomeData()),
  };
};

export default connect(null, mapDispatchToProps)(Index);

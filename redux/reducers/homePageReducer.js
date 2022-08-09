import axios from "axios";
import Cookie from "js-cookie";

const initState = {
  homedata: Cookie.get("homedata"),
};

function splitSectionData(obj) {
  const main = {
    homedata: {
      home_hashtag: obj.home_hashtag,
      home_welocme_text: obj.home_welocme_text,
      home_description: obj.home_description,
      home_image: obj.home_image,
      home_button_text: obj.home_button_text,
      home_button_text_color: obj.home_button_text_color,
      home_button_background_color: obj.home_button_background_color,
    },

    who_we_are: {
      who_hashtag: obj.who_hashtag,
      who_welocme_text: obj.who_welocme_text,
      who_description: obj.who_description,
      who_image: obj.who_image,
      who_button_text: obj.who_button_text,
      who_button_text_color: obj.who_button_text_color,
      who_button_background_color: obj.who_button_background_color,
    },

    technology: {
      technology_hashtag: obj.technology_hashtag,
      technology_welocme_text: obj.technology_welocme_text,
      technology_description: obj.technology_description,
      technology_image: obj.technology_image,
      technology_button_text: obj.technology_button_text,
      technology_button_text_color: obj.technology_button_text_color,
      technology_button_background_color:
        obj.technology_button_background_color,
    },

    student: {
      student_hashtag: obj.student_hashtag,
      student_welocme_text: obj.student_welocme_text,
      student_description: obj.student_description,
      student_image: obj.student_image,
      student_button_text: obj.student_button_text,
      student_button_text_color: obj.student_button_text_color,
      student_button_background_color: obj.student_button_background_color,
    },

    teacher: {
      teacher_hashtag: obj.teacher_hashtag,
      teacher_welocme_text: obj.teacher_welocme_text,
      teacher_description: obj.teacher_description,
      teacher_image: obj.teacher_image,
      teacher_button_text: obj.teacher_button_text,
      teacher_button_text_color: obj.teacher_button_text_color,
      teacher_button_background_color: obj.teacher_button_background_color,
    },

    service: {
      service_hashtag: obj.service_hashtag,
      service_title: obj.service_title,
    },

    partner: {
      partner_hashtag: obj.partner_hashtag,
      partner_title: obj.partner_title,
    },

    feature: {
      feature_hashtag: obj.feature_hashtag,
      feature_title: obj.feature_title,
    },

    about: {
      about_hashtag: obj.about_hashtag,
      about_title: obj.about_title,
    },

    signin: {
      signin_hashtag: obj.signin_hashtag,
      signin_title: obj.signin_title,
      signin_image: obj.signin_image,
    },

    signup: {
      signup_hashtag: obj.signup_hashtag,
      signup_title: obj.signup_title,
      signup_image: obj.signup_image,
    },

    select_type: {
      select_type_page_hashtag: obj.select_type_page_hashtag,
      select_type_page_title: obj.select_type_page_title,
    },

    authenticate: {
      authenticate_hashtag: obj.authenticate_hashtag,
      authenticate_title: obj.authenticate_title,
      authenticate_body_hashtag: obj.authenticate_body_hashtag,
      authenticate_body_title: obj.authenticate_body_title,
      authenticate_body_description: obj.authenticate_body_description,
    },

    profile: {
      profile_hashtag: obj.profile_hashtag,
      profile_title: obj.profile_title,
      profile_body_hashtag: obj.profile_body_hashtag,
      profile_body_title: obj.profile_body_title,
      profile_body_description: obj.profile_body_description,
    },
  };
  Cookie.set("homedata", JSON.stringify(main.homedata));
  Cookie.set("who_we_are", JSON.stringify(main.who_we_are));
  Cookie.set("technology", JSON.stringify(main.technology));
  Cookie.set("student", JSON.stringify(main.student));
  Cookie.set("teacher", JSON.stringify(main.teacher));
  Cookie.set("service", JSON.stringify(main.service));
  Cookie.set("partner", JSON.stringify(main.partner));
  Cookie.set("feature", JSON.stringify(main.feature));
  Cookie.set("about", JSON.stringify(main.about));
  Cookie.set("signin", JSON.stringify(main.signin));
  Cookie.set("signup", JSON.stringify(main.signup));
  Cookie.set("select_type", JSON.stringify(main.select_type));
  Cookie.set("authenticate", JSON.stringify(main.authenticate));
  Cookie.set("profile", JSON.stringify(main.profile));
}

function getHomeData() {
  axios({
    method: "GET",
    url: `${process.env.API_URL}home/allHomedatas`,
  })
    .then(function (params) {
      if (params.data.homedata) {
        initState.home_data = params.data.homedata;
        splitSectionData(params.data.homedata);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function editHomeData(token, data) {
  if (token && data) {
    console.log(data, "form reducer");
    axios({
      method: "POST",
      url: `${process.env.API_URL}update/home_data`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (params) {
        initState.home_data = params.data.homedata;
        if (params.data.homedata) splitSectionData(params.data.homedata);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

export function homeDataReducer(state = initState, action) {
  switch (action.type) {
    case "GET_HOME_DATA":
      getHomeData();
      return {
        ...state,
      };

    case "EDIT_HOME_DATA":
      editHomeData(action.token, action.data);
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}

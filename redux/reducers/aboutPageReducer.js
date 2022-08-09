import axios from "axios";
import Cookie from "js-cookie";

const initState = {
  aboutPage: {},
};

function splitSectionData(obj) {
  const main = {
    who_we_are: {
      who_hashtag: obj.who_hashtag,
      who_welocme_text: obj.who_welocme_text,
      who_description: obj.who_description,
      who_image: obj.who_image,
      who_button_text: obj.who_button_text,
      who_button_text_color: obj.who_button_text_color,
      who_button_background_color: obj.who_button_background_color,
    },
    about: { about_hashtag: obj.about_hashtag, about_title: obj.about_title },
  };
  Cookie.set("who_we_are", JSON.stringify(main.who_we_are));
  Cookie.set("about", JSON.stringify(main.about));
}

function getAboutData(token) {
  axios({
    method: "GET",
    url: `${process.env.API_URL}home_data`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(function (params) {
      if (params.data.homedata) {
        splitSectionData(params.data.homedata);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function editAboutData(token, data) {
  if (token && data) {
    axios({
      method: "POST",
      url: `${process.env.API_URL}update/home_data`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (params) {
        initState.who_we_are = params.data.homedata;
        splitSectionData(params.data.homedata);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

export function aboutDataReducer(state = initState, action) {
  switch (action.type) {
    case "GET_ABOUT_DATA":
      getAboutData(action.token);
      return {
        ...state,
      };

    case "EDIT_ABOUT_DATA":
      editAboutData(action.token, action.data);
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}

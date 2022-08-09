import axios from "axios";
import Cookie from "js-cookie";

const initState = {
  signup: {},
};

function splitSectionData(obj) {
  const main = {
    signup_hashtag: obj.signup_hashtag,
    signup_title: obj.signup_title,
    signup_image: obj.signup_image,
  };

  Cookie.set("signup_gg", JSON.stringify(main));
}

function getSignupData(token) {
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

function editSignupData(token, data) {
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
        initState.signup = params.data.homedata;
        splitSectionData(params.data.homedata);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

export function signupDataReducer(state = initState, action) {
  switch (action.type) {
    case "GET_SIGNUP_DATA":
      getSignupData(action.token);
      return {
        ...state,
      };

    case "EDIT_SIGNUP_DATA":
      editSignupData(action.token, action.data);
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}

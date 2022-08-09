import axios from "axios";
import Cookie from "js-cookie";

const initState = {
  signin: {},
};

function splitSectionData(obj) {
  const main = {
    signin_hashtag: obj.signin_hashtag,
    signin_title: obj.signin_title,
    signin_image: obj.signin_image,
  };

  Cookie.set("signin_gg", JSON.stringify(main));
}

function getSigninData(token) {
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

function editSigninData(token, data) {
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
        initState.signin = params.data.homedata;
        splitSectionData(params.data.homedata);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

export function signinDataReducer(state = initState, action) {
  switch (action.type) {
    case "GET_SIGNIN_DATA":
      getSigninData(action.token);
      return {
        ...state,
      };

    case "EDIT_SIGNIN_DATA":
      editSigninData(action.token, action.data);
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}

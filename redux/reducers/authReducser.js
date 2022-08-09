import axios from "axios";
import Cookie from "js-cookie";

var initState = {
  user: Cookie.get("user"),
};

function logout(url) {
  axios({
    method: "post",
    url: url,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${user.access_token}`,
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response.error);
    });
}

function signup(item, api, goto) {
  axios({
    method: "post",
    url: api,
    data: item,
    headers: { Accept: "application/json" },
  })
    .then(function (response) {
      // Get user Data
      initState.user = response.data;

      // Save User Data into localStoge
      Cookie.set("user", JSON.stringify(initState.user));
      Cookie.set("stell", "code");

      // Redirecting
      window.location.replace("http://localhost:3000/" + goto);
    })
    .catch(function (response) {
      console.log(response.error);
    });
}

function login(item, api, goto) {
  axios({
    method: "post",
    url: api,
    data: item,
    headers: { Accept: "application/json" },
  })
    .then(function (response) {
      // Get user Data
      initState.user = response.data.data;

      // Save User Data into localStoge
      Cookie.set("user", JSON.stringify(initState.user));
      Cookie.set("stell", "code");

      window.location.replace("http://localhost:3000/" + goto);
    })
    .catch(function (response) {
      console.log(response.error);
    });
}

export function authReducer(state = initState, action) {
  switch (action.type) {
    case "SIGNUP_REQUEST":
      signup(action.payload, action.api, action.goto);

      return {
        user: Cookie.get("user"),
      };

    case "SIGNIN_REQUEST":
      login(action.payload, action.api, action.goto);

      return {
        user: Cookie.get("user"),
      };

    case "LOGOUT":
      // Sign-out From Back-end
      let user = Cookie.get("user");
      let api;
      if (user.type == "student") {
        logout(`${process.env.API_URL}user/logout`);
      } else if (user.type == "teacher") {
        logout(`${process.env.API_URL}${user.type}/logout`);
      }

      // Sign-out From Front-end
      Cookie.remove("user_profile");
      Cookie.remove("user");

      // Redirect
      window.location.replace("http://localhost:3000/");
      return {
        user: {},
      };

    default:
      return state;
  }
}

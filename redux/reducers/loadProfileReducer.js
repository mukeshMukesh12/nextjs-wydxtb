import axios from "axios";

import Cookie from "js-cookie";

const initState = {
  user_profile: Cookie.get("user_profile"),
};

const getProfile = (token, end_point) => {
  if (token && end_point) {
    axios({
      method: "get",
      url: `https://smartgroup-demo.com/moro/public/api/${end_point}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        if (response.data.student) {
          initState.user_profile = response.data.student;
        } else if (response.data.teacher) {
          initState.user_profile = response.data.teacher;
        }

        Cookie.set("user_profile", JSON.stringify(initState.user_profile));
      })
      .catch(function (response) {
        console.log(response.error);
      });
  }
};

export function loadProfile(state = initState, action) {
  getProfile(action.token, action.end_point);

  return {
    user_profile:
      Cookie.get("user_profile") != "undefined"
        ? Cookie.get("user_profile")
        : null,
  };
}

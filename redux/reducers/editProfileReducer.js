import axios from "axios";

import Cookie from "js-cookie";

const initState = {
  user_profile: Cookie.get("user_profile"),
};

const editProfile = (token, end_point, data) => {
  if (token && end_point && data) {
    axios({
      method: "POST",
      url: `https://smartgroup-demo.com/moro/public/api/${end_point}/profile/update`,
      data: data,
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

export function editUserProfile(state = initState, action) {
  editProfile(action.token, action.end_point, action.data);
  return {
    ...state,
  };
}

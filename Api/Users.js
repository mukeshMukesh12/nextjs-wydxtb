import axios from "axios";
import Cookie from "js-cookie";

// URLs
const API_URL = "http://algorithm.demo.carmartapp.com/morog/public/api";

export function logOut() {
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

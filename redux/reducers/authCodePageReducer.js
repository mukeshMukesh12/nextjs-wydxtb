import axios from "axios";
import Cookie from "js-cookie";

const initState = {
  auth_ee: {},
};

function splitSectionData(obj) {
  const main = {
    authenticate_hashtag: obj.authenticate_hashtag,
    authenticate_title: obj.authenticate_title,
    authenticate_body_hashtag: obj.authenticate_body_hashtag,
    authenticate_body_title: obj.authenticate_body_title,
    authenticate_body_description: obj.authenticate_body_description,
  };

  Cookie.set("authen_e", JSON.stringify(main));
}

function getAuthCodeeData(token) {
  if (token) {
    axios({
      method: "GET",
      url: `${process.env.API_URL}home_data`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (params) {
        if (params.data.homedata) {
          console.log(params.data.homedata, "jasd");
          splitSectionData(params.data.homedata);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

function editAuthCodeeData(token, data) {
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
        initState.auth_ee = params.data.homedata;
        splitSectionData(params.data.homedata);

        // try {
        //   if (
        //     JSON.parse(params.data.message).select_type_page_hashtag ||
        //     JSON.parse(params.data.message).select_type_page_title
        //   ) {
        //     alert(JSON.parse(params.data.message).select_type_page_hashtag[0]);
        //     alert(JSON.parse(params.data.message).select_type_page_title[0]);
        //   }
        // } catch (error) {
        //   alert(params.data.message);
        // }
      })
      .catch(function (err) {
        // console.log(JSON.parse(params.data.message).select_type_page_hashtag);
        // alert();
        console.log(err);
      });
  }
}

export function AuthCodeDataReducer(state = initState, action) {
  switch (action.type) {
    case "GET_AUTH_CODE_DATA":
      getAuthCodeeData(action.token);
      return {
        ...state,
      };

    case "EDIT_AUTH_CODE_DATA":
      editAuthCodeeData(action.token, action.data);
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}

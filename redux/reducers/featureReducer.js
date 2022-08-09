import axios from "axios";
import Cookie from "js-cookie";

const initState = {
  allFeatures: {},
};

function addNewFeatures(token, data) {
  if (token && data) {
    axios({
      method: "POST",
      url: `${process.env.API_URL}store/feature`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        console.log(response);
      })

      .catch(function (response) {
        console.log(response.error);
      });
  }
}

function getAllFeatures() {
  console.log("Come in hree");

  axios({
    method: "GET",
    url: `${process.env.API_URL}home/allFeatures`,
  })
    .then(function (response) {
      initState.allFeatures = Cookie.set(
        "feat",
        JSON.stringify(response.data.Features)
      );
    })

    .catch(function (response) {
      console.log(response.error);
    });
}

function editFeatures(token, data, id) {
  let validData = data.title != "" && data.description != "";
  if (token && validData && id > -1) {
    axios({
      method: "POST",
      url: `${process.env.API_URL}update/feature/${id}`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        console.log(response);
      })

      .catch(function (response) {
        console.log(response.error);
      });
  }
}

function delFeatures(token, id) {
  console.log(token, id);
  if (token && id > -1) {
    axios({
      method: "GET",
      url: `${process.env.API_URL}delete/feature/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

export function featuresReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_FEATURES":
      addNewFeatures(action.token, action.data);

      return {
        ...state,
      };

    case "GET_FEATURES":
      getAllFeatures();

      return {
        ...state,
      };

    case "EDIT_FEATURE_DATA":
      editFeatures(action.token, action.data, action.id);

      return {
        ...state,
      };

    case "DELETE_FEATURE":
      delFeatures(action.token, action.id);

      return {
        ...state,
      };

    default:
      return state;
  }
}

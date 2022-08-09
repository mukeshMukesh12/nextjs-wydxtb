import axios from "axios";
import Cookie from "js-cookie";

const initState = {
  allServices: {},
};

function addNewServices(token, data) {
  console.log(token, data);
  if (token && data) {
    axios({
      method: "POST",
      url: `${process.env.API_URL}store/service`,
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

function getAllServices() {
  axios({
    method: "GET",
    url: `${process.env.API_URL}home/allServices`,
  })
    .then(function (response) {
      initState.allServices = Cookie.set(
        "serv",
        JSON.stringify(response.data.latestService)
      );
    })

    .catch(function (response) {
      console.log(response.error);
    });
}

function editServices(token, data, id) {
  console.log(token, data, id);
  if (token && data && id > -1) {
    axios({
      method: "POST",
      url: `${process.env.API_URL}update/service/${id}`,
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

function delServices(token, id) {
  console.log(token, id);
  if (token && id > -1) {
    axios({
      method: "GET",
      url: `${process.env.API_URL}delete/service/${id}`,
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

export function servicesReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_SERVICES":
      console.log("herro");
      addNewServices(action.token, action.data);

      return {
        ...state,
      };

    case "GET_SERVICES":
      getAllServices();

      return {
        ...state,
      };

    case "EDIT_SERVICE_DATA":
      editServices(action.token, action.data, action.id);

      return {
        ...state,
      };

    case "DELETE_SERVICE":
      delServices(action.token, action.id);

      return {
        ...state,
      };

    default:
      return state;
  }
}

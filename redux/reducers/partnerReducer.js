import axios from "axios";
import Cookie from "js-cookie";

const initState = {
  allPartner: {},
};

function addNewPartner(token, data) {
  if (token && data) {
    axios({
      method: "POST",
      url: `${process.env.API_URL}store/partner`,
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

function getAllPartner(token) {
  console.log("Come in hree");
  if (token) {
    axios({
      method: "GET",
      url: `${process.env.API_URL}partners`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        initState.allFeatures = Cookie.set(
          "parts",
          JSON.stringify(response.data.Features)
        );
      })

      .catch(function (response) {
        console.log(response.error);
      });
  }
}

// function editPartner(token, data, id) {
//   let validData = data.title != "" && data.description != "";
//   if (token && validData && id > -1) {
//     axios({
//       method: "POST",
//       url: `${process.env.API_URL}update/feature/${id}`,
//       data: data,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(function (response) {
//         console.log(response);
//       })

//       .catch(function (response) {
//         console.log(response.error);
//       });
//   }
// }

function delPartner(token, id) {
  console.log(token, id);
  if (token && id > -1) {
    axios({
      method: "GET",
      url: `${process.env.API_URL}delete/partners/${id}`,
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

export function partnerReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_PARTNER":
      addNewPartner(action.token, action.data);

      return {
        ...state,
      };

    case "GET_PARTNER":
      getAllPartner(action.token);

      return {
        ...state,
      };

    case "EDIT_PARTNER_DATA":
      editPartner(action.token, action.data, action.id);

      return {
        ...state,
      };

    case "DELETE_PARTNER":
      delPartner(action.token, action.id);

      return {
        ...state,
      };

    default:
      return state;
  }
}

import axios from "axios";
import Cookie from "js-cookie";

const initState = {
  selectType: {},
};

function splitSectionData(obj) {
  const main = {
    selectType: {
      select_type_page_hashtag: obj.select_type_page_hashtag,
      select_type_page_title: obj.select_type_page_title,
    },

    student: {
      student_hashtag: obj.student_hashtag,
      student_welocme_text: obj.student_welocme_text,
      student_description: obj.student_description,
      student_image: obj.student_image,
      student_button_text: obj.student_button_text,
      student_button_text_color: obj.student_button_text_color,
      student_button_background_color: obj.student_button_background_color,
    },

    teacher: {
      teacher_hashtag: obj.teacher_hashtag,
      teacher_welocme_text: obj.teacher_welocme_text,
      teacher_description: obj.teacher_description,
      teacher_image: obj.teacher_image,
      teacher_button_text: obj.teacher_button_text,
      teacher_button_text_color: obj.teacher_button_text_color,
      teacher_button_background_color: obj.teacher_button_background_color,
    },
  };

  Cookie.set("select_home_sec", JSON.stringify(main.selectType));
  Cookie.set("select_std", JSON.stringify(main.student));
  Cookie.set("select_tch", JSON.stringify(main.teacher));
}

function getSelectTypeData(token) {
  if (token) {
    axios({
      method: "GET",
      url: `${process.env.API_URL}home_data`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (params) {
        splitSectionData(params.data.homedata);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

function editSelectTypeData(token, data) {
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
        initState.selectType = params.data.homedata;
        splitSectionData(params.data.homedata);

        try {
          if (
            JSON.parse(params.data.message).select_type_page_hashtag ||
            JSON.parse(params.data.message).select_type_page_title
          ) {
            alert(JSON.parse(params.data.message).select_type_page_hashtag[0]);
            alert(JSON.parse(params.data.message).select_type_page_title[0]);
          }
        } catch (error) {
          alert(params.data.message);
        }
      })
      .catch(function (err) {
        // console.log(JSON.parse(params.data.message).select_type_page_hashtag);
        // alert();
        console.log(err);
      });
  }
}

export function selectTypeDataReducer(state = initState, action) {
  switch (action.type) {
    case "GET_SELECT_TYPE_DATA":
      getSelectTypeData(action.token);
      return {
        ...state,
      };

    case "EDIT_SELECT_TYPE_DATA":
      editSelectTypeData(action.token, action.data);
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
}

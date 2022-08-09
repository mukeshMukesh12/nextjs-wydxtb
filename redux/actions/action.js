// Authentcation

export const userSignUp = (data, api, goto) => ({
  type: "SIGNUP_REQUEST",
  payload: data,
  api: api,
  goto: goto,
});

export const userSignin = (data, api, goto) => ({
  type: "SIGNIN_REQUEST",
  payload: data,
  api: api,
  goto: goto,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const studentSignupApi = () => ({
  type: "STD_SIGNUP_REQUEST",
  api: `${process.env.API_URL}user/registration/signup`,
});

export const teacherSignupApi = () => ({
  type: "TCH_SIGNUP_REQUEST",
  api: `${process.env.API_URL}teacher/registration/signup`,
});

// Profiles

export const loadProfileAction = (tocken, end_point) => ({
  type: "LOAD_PROFILE",
  token: tocken,
  end_point,
});

export const editProfileAction = (tocken, end_point, data) => ({
  type: "EDIT_PROFILE",
  token: tocken,
  end_point,
  data: data,
});

// Dashboard

export const editPage = (hashtag, title) => ({
  type: "EDIT_PAGE",
  hashtag: hashtag,
  title: title,
});

// Dashboard Services

export const addServices = (token, data) => ({
  type: "ADD_SERVICES",
  token: token,
  data: data,
});

export const getServices = (token) => ({
  type: "GET_SERVICES",
  token: token,
});

export const editServices = (token, data, id) => ({
  type: "EDIT_SERVICE_DATA",
  token: token,
  data: data,
  id: id,
});

export const deleteServices = (token, id) => ({
  type: "DELETE_SERVICE",
  token: token,
  id: id,
});

// Dashboard Feaures

export const addFeatuers = (token, data) => ({
  type: "ADD_FEATURES",
  token: token,
  data: data,
});

export const getFeatuers = (token) => ({
  type: "GET_FEATURES",
  token: token,
});

export const editFeatuers = (token, data, id) => ({
  type: "EDIT_FEATURE_DATA",
  token: token,
  data: data,
  id: id,
});

export const deleteFeatuers = (token, id) => ({
  type: "DELETE_FEATURE",
  token: token,
  id: id,
});

// Dashboard Partener

export const addPartner = (token, data) => ({
  type: "ADD_PARTNER",
  token: token,
  data: data,
});

export const getPartner = (token) => ({
  type: "GET_PARTNER",
  token: token,
});

export const editPartner = (token, data, id) => ({
  type: "EDIT_PARTNER_DATA",
  token: token,
  data: data,
  id: id,
});

export const deletePartner = (token, id) => ({
  type: "DELETE_PARTNER",
  token: token,
  id: id,
});

// Control Home Content

export const getHomeData = (token) => ({
  type: "GET_HOME_DATA",
  token: token,
});

export const editHomeData = (token, data) => ({
  type: "EDIT_HOME_DATA",
  token: token,
  data: data,
});

// Control About Content

export const getAboutData = (token) => ({
  type: "GET_ABOUT_DATA",
  token: token,
});

export const editAboutData = (token, data) => ({
  type: "EDIT_ABOUT_DATA",
  token: token,
  data: data,
});

// Control Signin Content

export const getSigninData = (token) => ({
  type: "GET_SIGNIN_DATA",
  token: token,
});

export const editSigninData = (token, data) => ({
  type: "EDIT_SIGNIN_DATA",
  token: token,
  data: data,
});

// Control Signup Content

export const getSignupData = (token) => ({
  type: "GET_SIGNUP_DATA",
  token: token,
});

export const editSignupData = (token, data) => ({
  type: "EDIT_SIGNUP_DATA",
  token: token,
  data: data,
});

// Control Select type Content

export const getSelectTypeData = (token) => ({
  type: "GET_SELECT_TYPE_DATA",
  token: token,
});

export const editSelectTypeData = (token, data) => ({
  type: "EDIT_SELECT_TYPE_DATA",
  token: token,
  data: data,
});

// Control Auth_CODE type Content

export const getAuthCodeData = (token) => ({
  type: "GET_AUTH_CODE_DATA",
  token: token,
});

export const editAuthCodeData = (token, data) => ({
  type: "EDIT_AUTH_CODE_DATA",
  token: token,
  data: data,
});

// Control RES_SUINGUP type Content

export const getResSingupeData = (token) => ({
  type: "GET_RES_SUINGUP_DATA",
  token: token,
});

export const editResSingupeData = (token, data) => ({
  type: "EDIT_RES_SUINGUP_DATA",
  token: token,
  data: data,
});

// Others

export const createSteamToken = () => ({
  type: "CREATE_STREAM_TOKEN",
});

export const filterActionCreator = (fil) => ({
  type: "FILTER",
  entity: fil,
});

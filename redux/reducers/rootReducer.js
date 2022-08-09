import { combineReducers } from "redux";
import { authReducer } from "./authReducser";
import { editPageReducer } from "./editPageReducer";
import { filterReducer } from "./filterReducer";
import { loadProfile } from "./loadProfileReducer";
import { selectTypeReducer } from "./selectTypeReducer";
import { editUserProfile } from "./editProfileReducer";
import { genToken } from "./createToken";
import { servicesReducer } from "./servicesReducer";
import { featuresReducer } from "./featureReducer";
import { homeDataReducer } from "./homePageReducer";
import { aboutDataReducer } from "./aboutPageReducer";
import { signinDataReducer } from "./signinPageReducer";
import { signupDataReducer } from "./siginupPageReducer";
import { selectTypeDataReducer } from "./selectTypePageReducer";
import { AuthCodeDataReducer } from "./authCodePageReducer";
import { resSignupDataReducer } from "./resSignupPageRecucer";

export const rootReducer = combineReducers({
  // Authentecation Redcucers
  getUserProfileData: loadProfile,
  editUserProfileData: editUserProfile,
  edit: editPageReducer,
  auth: authReducer,
  selectApi: selectTypeReducer,
  fil: filterReducer,
  streamToken: genToken,

  // Edit Home Page Reducers
  home: homeDataReducer,
  about: aboutDataReducer,
  services: servicesReducer,
  features: featuresReducer,
  signin: signinDataReducer,
  signup: signupDataReducer,
  select_type: selectTypeDataReducer,
  edit_auth: AuthCodeDataReducer,
  res_signup: resSignupDataReducer,
});

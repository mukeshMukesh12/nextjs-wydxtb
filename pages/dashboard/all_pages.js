import React, { Component } from "react";

import Notifecation from "./Components/Notifecation";

export default class AllPages extends Component {
  render() {
    return (
      <div className="my-5">
        <h1 className="text-center">All Pages in system</h1>
        <Notifecation name="Home" page="/dashboard/edit_home" />
        <Notifecation name="About" page="/dashboard/edit_about" />
        <Notifecation name="Signin" page="/dashboard/edit_signin" />
        <Notifecation name="Signup" page="/dashboard/edit_signup" />
        <Notifecation name="Select Type" page="/dashboard/edit_select_type" />
        <Notifecation
          name="Authentecation code"
          page="/dashboard/edit_auth_code"
        />
        <Notifecation
          name="Resume profile"
          page="/dashboard/edit_resume_pro_data"
        />
      </div>
    );
  }
}

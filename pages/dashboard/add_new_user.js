import React, { useState } from "react";
import { connect } from "react-redux";
import { userSignUp } from "../../redux/actions/action";
function AddNewUser(props) {
  const gend = [
    { value: "Mail", label: "Mail" },
    { value: "Femail", label: "Femail" },
  ];

  const op_type = [
    { value: "teacher", label: "teacher" },
    { value: "student", label: "student" },
    { value: "TS", label: "TS" },
  ];

  const [entity, setEntity] = useState("");
  const [type, setType] = useState("");

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConf] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [cuntCode, setCuntCode] = useState("");
  const [gender, setGender] = useState("");

  function handelUserCreation(e) {
    e.preventDefault();
    // Student Object
    if (
      localStorage.length > 0 &&
      JSON.parse(localStorage.getItem("user")).type == "admin"
    ) {
      let stdItem = {
        fname,
        lname,
        email,
        password,
        password_confirmation,
        country,
        gender,
        phone,
      };

      // Teacher Object
      let name = fname;
      let tecItem = {
        name,
        lname,
        email,
        password,
        password_confirmation,
        // country,
        gender,
        phone,
      };

      {
        type == "teacher"
          ? props.userSignUp(
              tecItem,
              "https://moroj-apis.herokuapp.com/api/teacher/registration/signup",
              "dashboard/users/"
            )
          : props.userSignUp(
              stdItem,
              "https://moroj-apis.herokuapp.com/api/user/registration/signup",
              "dashboard/users/"
            );
      }
    } else {
      alert("Make Sure you are loged in with admin account");
    }
  }

  return (
    <div className="shadow p-5 w-75 mx-auto ">
      <h1 className="text-center mb-3 fw-bold text-dark"> Add New User</h1>
      <form className="">
        <div className="form-group">
          <input
            value={fname}
            type="text"
            className="form-control border"
            placeholder="Add First Name"
            onChange={(e) => setFName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            value={lname}
            type="text"
            className="form-control border"
            placeholder="Add Last Name"
            onChange={(e) => setLName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            value={email}
            type="text"
            className="form-control border"
            placeholder="Add User Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            value={password}
            type="password"
            className="form-control border"
            placeholder="Add User Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            value={password_confirmation}
            type="password"
            className="form-control border"
            placeholder="Password confermation"
            onChange={(e) => setPasswordConf(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            value={country}
            type="text"
            className="form-control border"
            placeholder="Add User Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            value={phone}
            type="text"
            className="form-control border"
            placeholder="Add User Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="row jsutify-content-between">
          <div className="col-md-2">
            <h5 className="pt-2 mr-2"> Gernder:</h5>
          </div>
          <div className="col-md-10">
            <div className="form-group ">
              <select
                value={gender}
                className="form-control border"
                onChange={(e) => setGender(e.target.value)}
              >
                {gend.map((g, index) => (
                  <option value={g.value} key={index}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row jsutify-content-between">
          <div className="col-md-2">
            <h5 className="pt-2 mr-2"> Type:</h5>
          </div>
          <div className="col-md-10">
            <div className="form-group">
              <select
                value={type}
                className="form-control border"
                onChange={(e) => setType(e.target.value)}
              >
                {op_type.map((ty, index) => (
                  <option value={ty.value} key={index}>
                    {ty.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary my-3"
          onClick={(e) => {
            handelUserCreation(e);
          }}
        >
          Create
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignUp: (data, api, goto) => dispatch(userSignUp(data, api, goto)),
  };
};

export default connect(null, mapDispatchToProps)(AddNewUser);

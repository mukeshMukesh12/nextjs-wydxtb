import React, { useState, useEffect } from "react";

// Components
import EntityProfile from "./Components/EntityProfile";
import img from "../../img/characters/user.png";
import Link from "next/dist/client/link";
import { connect } from "react-redux";
import { filterActionCreator } from "../../redux/actions/action";

function Profiles(props) {
  const topics = [
    { value: "Teachers", label: "Teachers" },
    { value: "Students", label: "Students" },
  ];

  const [userType, setUserType] = useState();

  const filterMethod = () => {
    if (props.ent) return props.ent.toLowerCase();
    return "all";
  };

  return (
    <>
      <div className="w-100 shadow pt-3">
        <div className="container p-3">
          <div className="row justify-content-between">
            <div className="col-5">
              <div className="form-group d-flex">
                <select
                  value={userType}
                  className="form-control border"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  {topics.map((topic, index) => (
                    <option value={topic.value} key={index}>
                      {topic.label}
                    </option>
                  ))}
                </select>

                <button
                  className="btn btn-primary mx-2"
                  onClick={() => {
                    props.changeFilter(userType);
                  }}
                >
                  filter
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <Link href="/add_new_user">
                  <a className="btn btn-outline-success mr-5">Add New user</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div className="mb-5">
        {[
          <EntityProfile
            url="/dashboard/student_profile"
            img={img}
            type="students"
            name="ahmed abdelbareq"
            key={1}
          />,
          <EntityProfile
            url="/dashboard/teacher_profile"
            img={img}
            type="teachers"
            name="hossam ahmed"
            key={2}
          />,
          <EntityProfile
            url="/dashboard/student_profile"
            img={img}
            type="TS"
            name="ibrahim adel"
            key={3}
          />,
          <EntityProfile
            url="/dashboard/student_profile"
            img={img}
            type="students"
            name="ahmed mohamed "
            key={4}
          />,

          <EntityProfile
            url="/dashboard/student_profile"
            img={img}
            type="students"
            name="ali"
            key={5}
          />,
        ].filter((itm, index) => {
          if (filterMethod() == "all") return true;
          return itm.props.type.toLowerCase() == filterMethod();
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ent: state.fil.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (userType) => dispatch(filterActionCreator(userType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);

import React, { useState } from "react";
import { connect } from "react-redux";
import Link from "next/dist/client/link";

// Components
import Notifecation from "./Components/Notifecation";

function Universtis(props) {
  const topics = [
    { value: "Teachers", label: "Teachers" },
    { value: "Students", label: "Students" },
  ];

  const [userType, setUserType] = useState();

  const filterMethod = () => {
    console.log(props.ent.toLowerCase());
    if (props.ent) return props.ent.toLowerCase();
    return "teacher";
  };

  return (
    <>
      <div className="w-100 shadow pt-3 mt-5">
        <div className="container p-3">
          <div className="row justify-content-between ">
            <div className="col-7">
              <div className="form-group d-flex">
                <input
                  type="text"
                  className="form-control border"
                  placeholder="Search For Country"
                />
                <button className="btn btn-primary mx-3">Search</button>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <Link href="/dashboard/add_new_universty">
                  <a className="btn btn-outline-success mr-5">
                    Add New University
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gap"></div>
      <div className="mb-5">
        <Notifecation
          name="جامعة الملك فهد"
          page="/dashboard/university_edit"
        />
        <Notifecation
          name="Harverd Universtis"
          page="/dashboard/university_edit"
        />
        <Notifecation name="جامعة القاهرة" page="/dashboard/university_edit" />
      </div>
    </>
  );
}

export default Universtis;

import React, { useState } from "react";
import Notifecation from "./Components/Notifecation";
import img from "../../img/characters/user.png";
const Reports = () => {
  const topics = [
    { value: "Teachers", label: "Teachers" },
    { value: "Students", label: "Students" },
  ];

  const [entity, setEntity] = useState("");

  function makeAllSelected() {
    document.querySelectorAll("input[type=checkbox]").forEach((inp) => {
      inp.checked = true;
    });
  }

  function deleteChecked() {
    document.querySelectorAll("input[type=checkbox]").forEach((inp, index) => {
      if (index == 0) {
        // donothing
      } else if (inp.checked) {
        let par = inp.parentNode.parentNode;
        par.parentNode.removeChild(par);
      }
    });
  }

  return (
    <>
      <div className="w-100 border mt-3">
        <div className="container p-3">
          <div className="row">
            <div className="col-1 pt-2">
              <input type="checkbox" onClick={makeAllSelected} />
            </div>
            <div className="col-3">
              <div className="form-group">
                <select
                  value={entity}
                  className="form-control border"
                  onChange={(e) => setEntity(e.target.value)}
                >
                  {topics.map((topic, index) => (
                    <option value={topic.value} key={index}>
                      {topic.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <button className="btn btn-primary mr-5">Filter</button>
                <button className="btn btn-danger" onClick={deleteChecked}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notifecation
        img={img}
        name="jd"
        date="22"
        comment="lddkkdkdkdkdkdkdlkdlkslk;asjd;jas;djflajdslkjsadlkjsdalj;ljfdsjieieikenkldlklopopoopdopdopdopdopdpodopdopdpodopdop "
      />
      <Notifecation
        img={img}
        name="jd"
        date="22"
        comment="lddkkdkdkdkdkdkdlkdlkslk;asjd;jas;djflajdslkjsadlkjsdalj;ljfdsjieieikenkldlklopopoopdopdopdopdopdpodopdopdpodopdop "
      />
      <Notifecation
        img={img}
        name="jd"
        date="22"
        comment="lddkkdkdkdkdkdkdlkdlkslk;asjd;jas;djflajdslkjsadlkjsdalj;ljfdsjieieikenkldlklopopoopdopdopdopdopdpodopdopdpodopdop "
      />
      <Notifecation
        img={img}
        name="jd"
        date="22"
        comment="lddkkdkdkdkdkdkdlkdlkslk;asjd;jas;djflajdslkjsadlkjsdalj;ljfdsjieieikenkldlklopopoopdopdopdopdopdpodopdopdpodopdop "
      />
      <Notifecation
        img={img}
        name="jd"
        date="22"
        comment="lddkkdkdkdkdkdkdlkdlkslk;asjd;jas;djflajdslkjsadlkjsdalj;ljfdsjieieikenkldlklopopoopdopdopdopdopdpodopdopdpodopdop "
      />
    </>
  );
};

export default Reports;

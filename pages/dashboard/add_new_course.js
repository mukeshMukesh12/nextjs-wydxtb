// Core
import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import axios from "axios";

// Rendring
export default function AddNewCourse() {
  const topics = [
    { value: "Hossam arafa", label: "Hossam arafa" },
    { value: "ibrahem hatem", label: "ibrahem hatem" },
    { value: "mohmed abdelbaset", label: "mohmed abdelbaset" },
    { value: "hossny mohamed ", label: "hossny mohamed" },
    { value: "ahmed adel", label: "ahmed adel" },
  ];

  const [entity, setEntity] = useState("");

  const [uploadPer, setUploadPer] = useState("0");
  const [file, setFile] = useState("");

  const uploadFile = ({ target: { files } }) => {
    console.log(files[0]);
    let data = new FormData();
    data.append("file", files[0]);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          setUploadPer(percent);
        }
      },
    };

    axios({
      method: "post",
      url: "https://fileupload.free.beeceptor.com/upload",
      data,
      options,
    }).then((res) => {
      console.log(res);

      setFile(res.data.url);
      setUploadPer(100);
      setTimeout(() => {
        setUploadPer(0);
      }, 1000);
    });
  };

  function handelDataIndex(allLect) {
    console.log(allLect);
    if (allLect.length > 0) {
      return allLect.length + 1;
    } else return 1;
  }

  function addNewLecture() {
    let title = document.querySelector(".lec-title");
    let lect = document.createElement("div");
    let allLect = document.querySelectorAll(".lectures");
    lect.innerHTML = ` 
    <div class="lectures">
        <div class="shadow p-2 my-3" data-index="1">
            <div class="d-flex main-c">
                <i class="fa fa-video-camera"></i>
                <h6 class="fw-bold mx-2">
                Lecture
                <span
                    class="text-dark mx-2"
                    style={{ fontWeight: "normal" }}
                >
                    ${handelDataIndex(allLect)}
                </span>
                </h6>
                <p class="text-secondary fw-bold mx-auto">
                ${title.value}
                </p>
            </div>
        </div>
    </div>`;

    title.value = "";
    let lectContainer = document.querySelector(".lect-cona");
    lectContainer.append(lect);
  }

  return (
    <>
      <h1 className="text-center my-5 fw-bold text-dark">Set Course Info</h1>
      <form className="w-75 mx-auto shadow p-3">
        <div className="form-group">
          <input
            type="text"
            className="form-control border"
            placeholder="Add Course Name"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control border"
            placeholder="Add Course Universti"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control border"
            placeholder="Add Course Price"
          />
        </div>

        <div className="form-group">
          <textarea
            rows="10"
            className="form-control border"
            placeholder="Add Course Description"
          />
        </div>

        <div className="row">
          <div className="col-md-3">
            <h5 className="pt-2 mr-2">Join instructor:</h5>
          </div>
          <div className="col-md-9">
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
        </div>
      </form>
      <h1 className="text-center my-5 fw-bold text-dark">
        Add Course Lectures
      </h1>

      <div className="py-3 px-5 my-5 shadow w-75 mx-auto">
        <div className="lect-cona"></div>
        <div className="form-group">
          <input
            type="text"
            className="lec-title form-control border"
            placeholder="set lecture title"
          />
          <div className="my-5">
            <span>Upload Lecture: </span>

            <input
              type="file"
              className="form-control profile-pic-uploader ml-3"
              onChange={uploadFile}
            />
          </div>
          {uploadPer > 0 && (
            <ProgressBar now={uploadPer} active label={`${uploadPer}%`} />
          )}
        </div>
        <button
          className="btn btn-primary"
          id="upload_btn"
          onClick={addNewLecture}
        >
          Add
        </button>
      </div>
      <div className="w-75 mx-auto my-3">
        <button className="btn btn-primary btn-block ">Create</button>
      </div>
    </>
  );
}

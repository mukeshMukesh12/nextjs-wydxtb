// Core
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Link from "next/link";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import axios from "axios";

import img from "../img/characters/user.png";

// Components
import AsideBar from "../Components/AsideBar";
import Completed from "../Components/Completed";

// Reandering
const Web47 = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

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

  const images = files.map((file) => (
    <div
      className="mx-auto bg-dark"
      style={{ width: "200px", height: "200px" }}
      key={file.name}
    >
      <div className="w-100 h-100">
        <img src={file.preview} className="w-100 h-100" alt="preview" />
      </div>
    </div>
  ));

  return (
    <>
      <Completed />
      <div className="gap my-5"></div>
      <section className="profile-content">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <AsideBar />
            </div>
            <div className="col-md-8 sec-bg p-3">
              <div className="d-flex p-3 w-50 mx-auto">
                <div className="p-3">
                  <Link href="/web29">
                    <a
                      activeClassName="main-bgc"
                      className="btn btn-secondary text-white"
                    >
                      المعلومات الشخصية
                    </a>
                  </Link>
                </div>
                <div className="p-3">
                  <Link href="/web47">
                    <a activeClassName="main-bgc" className="btn btn-secondary">
                      الشهادات الدراسية
                    </a>
                  </Link>
                </div>
              </div>
              <div className="text-center position-relative my-3">
                <label htmlFor="f-inp">
                  <i
                    style={{ zIndex: "2" }}
                    className="prof-img-btn fa fa-camera p-2 main-bgc text-white rounded-circle position-absolute"
                  ></i>
                </label>
                <input type="file" className="d-none" id="f-inp" />

                <div className="prof-img mx-auto">
                  <Image
                    src={img}
                    width="100"
                    height="100"
                    className="rounded-circle"
                    alt="..."
                  />
                </div>
              </div>
              <div className="certificate">
                <div className="certi-img">
                  <h6 className="fw-bold text-right">صورة المؤهل الدراسي</h6>
                  <div className="row">
                    <dvi className="col-md-7">
                      <div {...getRootProps()} className="p-3 border">
                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                        <input {...getInputProps()} />
                      </div>
                    </dvi>
                    <div className="col-md-4">
                      <button className="btn btn-link">
                        <label htmlFor="clu-inp">رفع صورة من جهازك</label>
                        <i
                          className="fa fa-cloud-upload"
                          aria-hidden="true"
                        ></i>
                        <input
                          {...getInputProps()}
                          className="d-none"
                          id="clu-inp"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-100 my-5 p-3">{images}</div>
                <div className="text-right p-3 my-3">
                  <div className="form-group">
                    <div className="my-5">
                      <h6 className="my-3">ارفع فيديو تعريفي عنك: </h6>

                      <input
                        type="file"
                        className="form-control profile-pic-uploader ml-3"
                        onChange={uploadFile}
                      />
                    </div>
                    {uploadPer > 0 && (
                      <ProgressBar
                        now={uploadPer}
                        active
                        label={`${uploadPer}%`}
                      />
                    )}
                  </div>
                </div>
              </div>
              <button className="btn main-bgc fw-bold text-white d-block mx-auto">
                حفظ
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="gap"></div>
    </>
  );
};

export default Web47;

import React from "react";

const Filter = () => {
  return (
    <div
      className="res-0  d-flex sec-bg mr-3 rounded"
      style={{ padding: "10px" }}
    >
      <i className="fa fa-filter bg-white p-2 pt-3"></i>
      <div className="icons-block mr-3 d-flex justify-content-between">
        <h6
          className="main-c pt-2"
          style={{ fontSize: "10px", fontWeight: "bold" }}
        >
          <i className="fa fa-usd"></i> السعر
        </h6>
        <div className="form-group">
          <select
            className="form-control"
            style={{ fontSize: "10px", fontWeight: "bold" }}
          >
            <option selected>الاعلي سعرا</option>
            <option>...</option>
          </select>
        </div>
      </div>

      <div className="icons-block mr-3 d-flex justify-content-between">
        <h6
          className="main-c pt-2"
          style={{ fontSize: "10px", fontWeight: "bold" }}
        >
          <i className="fa fa-star"></i> التقييم
        </h6>
        <div className="form-group">
          <select
            className="form-control"
            style={{ fontSize: "10px", fontWeight: "bold" }}
          >
            <option selected>خمس نجوم</option>
            <option>...</option>
          </select>
        </div>
      </div>

      <div className="icons-block mr-3 d-flex justify-content-between">
        <h6
          className="main-c pt-2"
          style={{ fontSize: "10px", fontWeight: "bold" }}
        >
          <i className="fa fa-male"></i> النوع
        </h6>
        <div className="form-group">
          <select
            className="form-control"
            style={{ fontSize: "10px", fontWeight: "bold" }}
          >
            <option selected>ذكر</option>
            <option>...</option>
          </select>
        </div>
      </div>

      <div className="icons-block mr-3 d-flex justify-content-between">
        <h6
          className="main-c pt-2"
          style={{ fontSize: "10px", fontWeight: "bold" }}
        >
          <i className="fa fa-graduation-cap"></i> الخبرة
        </h6>
        <div className="form-group">
          <select
            className="form-control"
            style={{ fontSize: "10px", fontWeight: "bold" }}
          >
            <option selected>اكثر من 10 سنوات</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div>
        <button className="mr-2 btn main-bgc text-white">تطبيق</button>
      </div>
    </div>
  );
};

export default Filter;

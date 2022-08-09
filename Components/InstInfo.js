import React from "react";
import Image from "next/dist/client/image";

// Images
import img from "../img/characters/user.png";

// Components
import Stars from "../Components/Stars";

const InstInfo = () => {
  return (
    <div className="inst-prfile">
      <div
        className="row shadow my-5 mr-3 bg-white rounded position-relative h-25"
        style={{ padding: "10px", marginRight: "2px!important" }}
      >
        <div className="col-md-3">
          <Image src={img} className="w-100 h-100" alt="" />
        </div>
        <div className="col-md-4 text-right">
          <h6 className="main-c">
            <i className="fa fa-user"></i> محمد علي احمد
          </h6>
          <Stars rate="5" />
          <div
            className="d-flex justify-content-between"
            style={{ width: "170px" }}
          >
            <p className="text-secondary">
              لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي
              الشكل
            </p>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <h5 className="fw-bold">السعر بالساعة</h5>
          <div className="my-3 w-75 mx-auto">
            <div className="d-flex justify-content-between">
              <h5>اونلاين</h5>
              <h5 className="main-c">100 ريال</h5>
            </div>

            <div className="d-flex justify-content-between">
              <h5>بالمنزل</h5>
              <h5 className="main-c">120 ريال</h5>
            </div>
          </div>
        </div>
        <div className="col-md-12 row text-right mx-auto my-3">
          <div className="col-md">
            <i className="fa fa-graduation-cap"></i> سنوات الخبرة 6 / 8 سنوات
          </div>

          <div className="col-md d-flex justify-content-end">
            <button className="mr-2 btn main-bgc text-white">احجز الان</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstInfo;

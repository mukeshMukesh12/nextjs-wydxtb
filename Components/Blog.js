// Core
import React from 'react';
import Image from 'next/image';

// // Images
// import img1 from "../img/characters/man-1.jpeg";
// import img2 from "../img/characters/man-2.jpeg";
// import img3 from "../img/characters/man-3.jpeg";
// import imgBg from "../img/features/b-img.jpeg";

const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <h5 className="text-center fw-bold"># المدونة</h5>
          <h1 className="sec-title w-25 mx-auto mb-5 text-right">مدونة مروج</h1>
          <div className="blog-posts d-flex justify-content-between">
            <div className="blog-card text-right">
              <div className="card position-relative">
                <Image
                  className="card-img-top"
                  src={imgBg}
                  alt="Card image cap"
                />
                <div className="img-container position-absolute hr">
                  {/* <Image
                    src={img1}
                    className="rounded-circle"
                    width="100"
                    height="100"
                    alt=""
                  /> */}
                </div>
                <div className="card-body mt-5">
                  <h4 className="card-title main-c">لماذا عليك اختيار مروج</h4>
                  <p className="">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                  </p>
                  <a href="#">قرائة المزيد</a>
                </div>
              </div>
            </div>
            <div className="blog-card text-right">
              <div className="card position-relative">
                {/* <Image
                  className="card-img-top"
                  src={imgBg}
                  alt="Card image cap"
                /> */}

                <div className="img-container position-absolute hr">
                  {/* <Image
                    src={img2}
                    className="rounded-circle"
                    width={100}
                    height={100}
                    alt="" */}
                  />
                </div>
                <div className="card-body mt-5">
                  <h4 className="card-title main-c">لماذا عليك اختيار مروج</h4>
                  <p className="">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                  </p>
                  <a href="#">قرائة المزيد</a>
                </div>
              </div>
            </div>
            <div className="blog-card text-right">
              <div className="card position-relative">
                {/* <Image
                  className="card-img-top"
                  src={imgBg}
                  alt="Card image cap"
                /> */}

                <div className="img-container position-absolute hr">
                  {/* <Image
                    src={img3}
                    className="rounded-circle"
                    width={100}
                    height={100}
                    alt="" */}
                  />
                </div>

                <div className="card-body mt-5">
                  <h4 className="card-title main-c">لماذا عليك اختيار مروج</h4>
                  <p className="">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                  </p>
                  <a href="#">قرائة المزيد</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="btn btn-link mt-5 d-block mx-auto">عرض المزيد</button>
      <div className="gap" />
    </>
  );
};

export default Blog;

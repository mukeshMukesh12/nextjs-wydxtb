// Core
import React from "react";

const Footer = () => {
  return (
    <footer className="main-bgi">
      <div className="container p-3">
        <div className="row text-right">
          <div className="col-md-3">
            <h2 className="text-white m-3">روابط مهمة</h2>
            <ul>
              <li>
                <a href="#" className="text-white ">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  الشروط و الاحكام
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  الاسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#" className="text-white ">
                  الدعم الفني
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="soc mb-5">
              <h2 className="text-white">شبكات التواصل</h2>
              <div className="text-center text-white">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>
            <div className="pay">
              <h2 className="text-white mt-5">طرق الدفع</h2>
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <h3 className="text-white m-3">الدعم الفني</h3>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="اسمك الكامل"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="w-100"
                    placeholder="البريد الاليكتروني"
                  />
                </div>
              </div>
              <textarea
                name="name"
                rows="8"
                placeholder="وصف المشكلة"
              ></textarea>
              <button className="btn main-c btn-light fw-bold px-3">حفظ</button>
            </form>
          </div>
        </div>
      </div>
      <div className="m-0 p-3 text-white border-top mt-3 text-center">
        Copyright &copy; {new Date().getFullYear()} Moruge, Developed By{" "}
        <a href="http://algorithmltd.com/" className="text-warning">
          Algorithm
        </a>
      </div>
    </footer>
  );
};

export default Footer;

// Core
import React, { Component } from "react";

// Reandering
class Res_signup extends Component {
  render() {
    return (
      <div>
        <section className="good-wishes">
          <div className="cross-border main-bgi py-5 d-flex justify-content-center">
            <div className="cross-content p-5">
              <div className="container text-center">
                <h5 className="text-warning fw-bold mt-5">
                  # اكمال البيانات الشخصية
                </h5>
                <h1 className="sec-title text-white fw-bold">
                  اكمال تسجيل حسابك الشخصي
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="signin sec-bg mb-5">
          <div className="gap my-3"></div>

          <div className="container text-center mt-5 py-5">
            <h4 className="therd-c fw-bold"># البيانات الدفع</h4>
            <h1 className="sec-title text-center mx-auto center-after fw-bold">
              معلومات بطاقةالدفع الخاصة بك
            </h1>
            <form method="post">
              <div className="row">
                <div className="col-md">
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="text"
                        className="p-3 w-75"
                        placeholder="اسم حامل البطاقة"
                      />
                      <i className="fa fa-check-circle"></i>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <select className="bg-white w-75 p-3 text-secondary">
                        <option selected>تاريخ الانتهاء (شهر)</option>
                        <option>...</option>
                      </select>
                      <i className="fa fa-check-circle"></i>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="text"
                        className="p-3 w-75"
                        placeholder="رقم الCCV"
                      />
                      <i className="fa fa-check-circle"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-row">
                    <div className="form-group col">
                      <input
                        type="text"
                        className="p-3 w-75"
                        placeholder="اسم حامل البطاقة"
                      />
                      <i className="fa fa-check-circle"></i>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <select className="bg-white w-75 p-3 text-secondary">
                        <option selected>تاريخ الانتهاء (شهر)</option>
                        <option>...</option>
                      </select>
                      <i className="fa fa-check-circle"></i>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <a
                        href="#"
                        className="btn main-bgc fw-bold text-white p-3 w-75"
                      >
                        تأكيد و دخول الي الملف الشخصي
                      </a>
                      <i className="fa fa-check-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="text-dark">
                تخطي <i className="fa fa-long-arrow-left text-dark"></i>
              </a>
            </form>
          </div>
        </section>
        <div className="gap"></div>
      </div>
    );
  }
}

export default Res_signup;

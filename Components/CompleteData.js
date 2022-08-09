import React, { Component } from "react";
import Link from "next/link";

class CompleteData extends Component {
  render() {
    return (
      <section className="profile-home main-bgi py-5 ">
        <div className="container position-relative">
          <div className="row">
            <div className="col">
              <h4 className="sec-title text-right text-white mx-auto fw-bold">
                مرحبا بك <span className="therd-c">{this.props.name}</span> في
                منصة مروج
              </h4>
            </div>
            <div className="col text-right text-white">
              <h3 className="fw-bold">
                نسبة اكمال ملفك الشخصي هي <span className="therd-c">77%</span>
              </h3>
              <h6 className="my-3">
                قم باستكمال ملفك الشخصي لكي تتمكن من استخدام موقعنا
              </h6>
              <Link href="/res_signup">
                <a className="btn btn-light">اكمال البيانات</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="gap"></div>
      </section>
    );
  }
}

export default CompleteData;

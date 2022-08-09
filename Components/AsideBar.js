// Core
import React, { useEffect } from "react";
import Link from "next/link";
import Cookie from "js-cookie";

const AsideBar = () => {
  useEffect(() => {
    document
      .querySelectorAll(".main-aside-bar a.btn")
      .forEach((btn) => handelButton(btn));
  }, []);

  function handelButton(btn) {
    btn.onclick = function () {
      document
        .querySelectorAll(".main-aside-bar a.btn")
        .forEach((btn) =>
          btn.setAttribute(
            "class",
            "btn btn-light w-100 fw-bold mb-3 p-3 rounded text-right"
          )
        );
      this.setAttribute(
        "class",
        "btn main-bgc text-white w-100 fw-bold mb-3 p-3 rounded text-right"
      );
    };
  }

  function styleClass() {
    return "btn btn-light w-100 fw-bold mb-3 p-3 rounded text-right";
  }

  let isTeacher = false;

  if (Cookie.get("user")) {
    isTeacher = JSON.parse(Cookie.get("user")).type == "teacher";
  }

  return (
    <>
      <div className="main-aside-bar sec-bg p-3 rounded">
        <Link href="/web26">
          <a className={styleClass()}>
            <i className="fa fa-desktop"></i> لوحة الحكم
          </a>
        </Link>

        <Link href="/web16">
          <a className={styleClass()}>
            {isTeacher ? (
              <>
                <i className="fa fa-comments-o"></i> الحصص
              </>
            ) : (
              <>
                <i className="fa fa-comments-o"></i> طلباتي
              </>
            )}
          </a>
        </Link>

        {isTeacher ? (
          <Link href="/web16">
            <a className={styleClass()}>
              <i className="fa fa-usd"></i> عروض الاسعار
            </a>
          </Link>
        ) : null}

        <Link href="/web17">
          <a className={styleClass()}>
            <i className="fa fa-user"></i> ملفي الشخصي
          </a>
        </Link>

        <Link href="/web18">
          <a className={styleClass()}>
            <i className="fa fa-home"></i> طلبات المنزل
          </a>
        </Link>

        {isTeacher ? (
          <Link href="/web19">
            <a className={styleClass()}>
              <i className="fa fa-credit-card"></i> اعدادات السحب
            </a>
          </Link>
        ) : (
          <Link href="/web19">
            <a className={styleClass()}>
              <i className="fa fa-credit-card"></i> اعدادات الدفع
            </a>
          </Link>
        )}

        <Link href="/web20">
          <a className={styleClass()}>
            <i className="fa fa-sliders"></i> الاعدادات
          </a>
        </Link>

        <Link href="/web38" style={{ background: "#9fffb6" }}>
          <a className={styleClass()}>
            <i className="fa fa-usd"></i> عرض السعر
          </a>
        </Link>

        <div className="gap"></div>
        <div className="pre-and-cond text-right">
          <Link href="/" className="main-c">
            سياسة الاسترجاع
          </Link>

          <span>او</span>

          <Link href="/" className="main-c">
            تقديم شكوي
          </Link>
        </div>
      </div>
    </>
  );
};

export default AsideBar;

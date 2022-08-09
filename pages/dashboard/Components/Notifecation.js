import React, { Component } from "react";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";

function Notifecation(props) {
  const router = useRouter();
  return (
    <div className="notifecation mx-auto" style={{ width: "80%" }}>
      <div className="obj-com row mt-5 border p-2">
        {router.pathname.indexOf("all_pages") != -1 ||
        router.pathname.indexOf("countries") != -1 ||
        router.pathname.indexOf("universties") != -1 ? (
          <>
            <div className="col-md-3 pt-3 pl-5">
              <h6 className="fw-bold text-dark">{props.name}</h6>
            </div>

            <div className="col-md-2 ml-auto d-flex justify-content-between">
              <div>
                <Link href={props.page}>
                  <a className="btn btn-primary ">edit</a>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-1 pt-3">
              <input type="checkbox" />
            </div>
            <div className="col-md-1">
              <img src={props.img.src} className="rounded-circle" alt="" />
            </div>
            <div className="col-md-1">
              <h6 className="fw-bold text-dark pt-3">Student</h6>
            </div>
            <div className="col-md-1 pt-3">
              <h6 className="fw-bold text-dark">{props.name}</h6>
            </div>
            <div className="col-md-5 pt-3">
              <p className="text-secondary text-truncate">{props.comment}</p>
            </div>
            <div className="col-md-1 pt-3">
              <p className="text-secondary">
                <i className="fa fa-calendar-minus-o mb-3"></i>
                {props.date}
              </p>
            </div>
            <div className="col-md-1">
              <Link href="/dashboard/email_read">
                <a className="btn btn-primary">View</a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Notifecation;

import React, { Component } from "react";
import img from "../../img/characters/user.png";
import Image from "next/dist/client/image";
export default class EmailRead extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="email-header d-flex">
            <div style={{ width: "60px", height: "60px" }} className="mr-2">
              <Image
                src={img}
                className="rounded-circle"
                width="100"
                height="100"
              />
            </div>
            <div className="sender-info">
              <h3>ahmed .t mamdouh</h3>
              <div className="d-flex">
                <i className="fa fa-calendar-o mr-2"></i>
                <p>25-33-66</p>
              </div>
            </div>
          </div>
          <hr />
          <div>
            {" "}
            <div className="email-body w-75 mx-auto">
              <div className="from">
                <span className="text-dark fw-bold">from:</span> ahmed@dddd.com
              </div>
              <div className="my-5"></div>
              <p className="my-5 mx-auto">
                Ingredia Nutrisha, A collection of textile samples lay spread
                out on the table - Samsa was a travelling salesman - and above
                it there hung a picture Even the all-powerful Pointing has no
                control about the blind texts it is an almost unorthographic
                life One day however a small line of blind text by the name of
                Lorem Ipsum decided to leave for the far World of Grammar.
                Aenean vulputate eleifend tellus.
                <br />
                <br />
                <br /> Aenean leo ligula, porttitor eu, consequat vitae,
                eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                feugiat a, tellus. Aenean vulputate eleifend tellus. Aenean leo
                ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet.
                <br />
                <br />
                <br />
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                pulvinar,
              </p>
            </div>
          </div>
          <div className="replay text-center">
            <div style={{ width: "450px" }} className="mx-auto">
              <div className="form-group">
                <textarea
                  style={{ height: "150px" }}
                  className="w-100 p-3"
                ></textarea>
              </div>
              <button className="btn btn-primary btn-block mb-5">send</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

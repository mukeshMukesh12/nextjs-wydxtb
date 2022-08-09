import React, { useEffect } from "react";
import Link from "next/link";

export default function EduStage() {
  let arr = [];
  useEffect(() => {
    document.querySelectorAll(".sub-stage").forEach((one) => {
      console.log();
      one.onclick = function () {
        this.parentNode.removeChild(this);
      };
    });
  }, []);
  let showControlers = (cls) => {
    document.querySelector(`${cls}`).classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  };

  function addSubEdu() {
    let par = document.querySelector(".active-now .sub-stage-parent");
    let inp = document.querySelector(".edu-name");

    if (!inp.value) return;

    let p = document.createElement("p");
    p.classList.add("sub-stage");
    p.innerHTML = inp.value;

    p.onclick = function () {
      this.parentNode.removeChild(this);
    };

    par.appendChild(p);

    // To Hide window
    document.querySelector(".join").classList.toggle("d-none");
    document.body.style.overflowY = "scroll";

    // Deactive now
    document.querySelector(".active-now").classList.remove("active-now");

    // Reset Input Value
    inp.value = "";
  }

  let close = (xe) => {
    xe.preventDefault();
    document.querySelector(".join").classList.toggle("d-none");
    document.body.style.overflowY = "scroll";
  };

  function addEdu() {
    let eduName = document.querySelector(".st-inp");

    if (!eduName.value) return;
    let par = document.getElementById("accordion");
    let card = document.createElement("div");
    card.setAttribute("class", "my-3");
    var randId;
    var count = 0;
    while (true) {
      if (count == 30) {
        return;
      }
      randId = Math.floor(Math.random() * 30 + 1);
      if (arr.indexOf(randId) === -1) {
        arr.push(randId);
        break;
      }
      count++;
    }
    card.innerHTML = `
      <div
        class="card-header d-flex justify-content-between"
        id="heading${randId}"
        >
        <h5 class="mb-0">
          <button
            class="btn btn-link collapsed"
            data-toggle="collapse"
            data-target="#collapse${randId}"
            aria-expanded="false"
            aria-controls="collapse${randId}"
          >
            ${eduName.value}
          </button>
        </h5>
        <div>
          <button class="add btn btn-primary mx-2" data-id="${randId}">
            Add
          </button>
          <button class="del btn btn-danger">Delete</button>
        </div>
      </div>
      <div
      id="collapse${randId}"
      class="collapse p-3"
      aria-labelledby="heading${randId}"
      data-parent="#accordion"  
      >
        <div class="pl-3 sub-stage-parent" data-id="${randId}"></div>
      </div>
                  
    `;

    par.appendChild(card);

    eduName.value = "";
  }

  function handleClickEvent() {
    document.querySelectorAll(".add").forEach((addBtn) => {
      addBtn.onclick = function () {
        showControlers(".join");
        let par = this.parentNode.parentNode.parentNode;
        par.classList.add("active-now");
      };
    });

    document.querySelectorAll(".del").forEach((dBtn) => {
      dBtn.onclick = function () {
        console.log(this);
        let par = this.parentNode.parentNode.parentNode;
        document.getElementById("accordion").removeChild(par);
      };
    });
  }

  return (
    <div className="container shadow p-3 py-5 w-50 mt-5">
      <Link href="/dashboard/country">
        <a className="btn btn-link">
          <i className="fa fa-long-arrow-left mr-2"></i>
          Back to Country
        </a>
      </Link>
      <div className="ov-lay join d-none">
        <div className="w-75 h-50 p-5 bg-white text-right rounded">
          <i
            className="fa fa-close"
            onClick={(e) => {
              close(e);
            }}
          ></i>
          <h6 className="fw-bold text-center mb-5">Add education stage</h6>
          <div className="form-group">
            <input
              className="form-control border edu-name"
              type="text"
              placeholder="Add here"
            />
          </div>
          <button
            className="btn btn-primary fw-bold text-white d-block my-5 mx-auto"
            onClick={addSubEdu}
          >
            Add
          </button>
        </div>
      </div>

      <div className="content">
        <h4 className="text-center mb-5">Add new edu stage</h4>
        <form className=" mx-auto">
          <div className="form-group">
            <input
              type="text"
              className="form-control border st-inp"
              placeholder="Enter New Edu stage"
            />
          </div>

          <button
            type="submit"
            className="btn btn-success"
            onClick={(e) => {
              e.preventDefault();
              addEdu();

              handleClickEvent();
            }}
          >
            Add stage
          </button>
        </form>
      </div>
      <div className="al-wrapper my-3 "></div>
      <hr />
      <div id="accordion"></div>
    </div>
  );
}

import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example" className="w-25 mx-auto">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link fw-bold text-white bg-dark" href="#">
            السابق
          </a>
        </li>
        <li className="page-item">
          <a className="page-link fw-bold text-white" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link fw-bold text-white" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link fw-bold text-white" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link fw-bold text-white bg-dark" href="#">
            التالي
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

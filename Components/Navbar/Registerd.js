import Link from "next/link";
import Image from "next/dist/client/image";
import { connect } from "react-redux";

// Images
import img2 from "../../img/characters/man-1.jpeg";
import { logout } from "../../redux/actions/action";

const Registerd = (props) => {
  return (
    <>
      <div className="btn-container d-flex justify-content-between w-25">
        <div className="position-relative pt-2">
          <span className="count position-absolute main-bgc">0</span>
          <i className="fa fa-bell fa-lg"></i>
        </div>

        <li className="nav-item dropdown" style={{ listStyle: "none" }}>
          <a
            className="nav-link dropdown-toggle text-dark"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div style={{ width: "30px", height: "30px" }}>
              <Image
                src={img2}
                className="man-img rounded-circle"
                //
                width="100"
                height="100"
                alt=""
              />
            </div>
          </a>
          <div
            className="dropdown-menu text-right"
            aria-labelledby="navbarDropdown"
          >
            <Link href="/web17">
              <a className="dropdown-item">الحساب</a>
            </Link>
            <Link href="/web16">
              <a className="dropdown-item">الحصص</a>
            </Link>
            <Link href="/web38">
              <a className="dropdown-item">العروض</a>
            </Link>
          </div>
        </li>

        <li className="nav-item dropdown" style={{ listStyle: "none" }}>
          <Link href="/">
            <a
              onClick={() => props.logout()}
              className="btn text-white"
              style={{ background: "#c2007b" }}
            >
              تسجيل الخروح
            </a>
          </Link>
        </li>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Registerd);

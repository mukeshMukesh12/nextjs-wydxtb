import Link from "next/link";

const NotRegisterd = () => {
  return (
    <div className="btn-container d-flex">
      <Link href="/signin">
        <a className="btn main-bgc text-white">تسجيل الدخول</a>
      </Link>
      <span className="mx-3">او</span>
      <Link href="/select_type">
        <a className="btn text-white" style={{ backgroundColor: "#c2007b" }}>
          التسجيل
        </a>
      </Link>
    </div>
  );
};

export default NotRegisterd;

import { wrapper } from "../redux/store";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { withRouter } from "next/router";

// globals styles
import "../styles/comp_style/globals.css";

// Component Styles
import "../styles/comp_style/About.css";
import "../styles/comp_style/AsideBar.css";
import "../styles/comp_style/Blog.css";
import "../styles/comp_style/Desisions.css";
import "../styles/comp_style/Features.css";
import "../styles/comp_style/Footer.css";
import "../styles/comp_style/Home.css";
import "../styles/comp_style/Home.module.css";
import "../styles/comp_style/Navbar.css";
import "../styles/comp_style/OurTech.css";
import "../styles/comp_style/Pagination.css";
import "../styles/comp_style/Partner.css";
import "../styles/comp_style/Search.css";
import "../styles/comp_style/Services.css";

// Pages Styles
import "../styles/page_style/About.css";
import "../styles/page_style/art_board.css";
import "../styles/page_style/AuthCode.css";
import "../styles/page_style/Course.css";
import "../styles/page_style/style.css";
import "../styles/page_style/Web17.css";
import "../styles/page_style/Web31.css";
import "../styles/page_style/Web37.css";
import "../styles/page_style/guest_window.css";

// Dashboard Style

import "./dashboard/dashboard_css/style.css";
import "./dashboard/dashboard_css/subEdu.css";

// Components
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DashboardControlBar from "./dashboard/Components/DashboardControlBar";
import Desisions from "../Components/Desisions";

function MyApp({ Component, pageProps, router }) {
  const [inWeb22, setLoc] = useState(false);
  useEffect(() => {
    setLoc(
      router.pathname.includes("web22") ||
        router.pathname.includes("guest_window")
    );
  }, [router.pathname]);
  return (
    <div className="ov-wrapper" dir="rtl">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>منصة مروج التعليمية</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/v4-shims.css"
        />
      </Head>

      {router.pathname.indexOf("dashboard") == 1 ? ( // For Dashboard UI
        <section
          className="dash-home position-relative "
          dir="ltr"
          style={{ width: "88%" }}
        >
          <div className="d-flex w-100">
            {router.pathname.indexOf("login") == -1 &&
            router.pathname.indexOf("forget_password") == -1 &&
            router.pathname.indexOf("reset_password") == -1 ? (
              <DashboardControlBar />
            ) : null}
          </div>
          <div className="container">
            <Component {...pageProps} />

            <div className="p-2"></div>
          </div>
        </section>
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <div className="p-2"></div>
          <Footer />
        </>
      )}

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
      <Script
        src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"
        type="text/javascript"
      />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
    </div>
  );
}

export default wrapper.withRedux(withRouter(MyApp));

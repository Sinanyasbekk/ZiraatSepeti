import React from "react";
import "bootstrap/dist/./css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css"; // Now imported from node_modules
import "animate.css/animate.min.css"; // Now imported from node_modules
import "../css/style.css"; // Keep your custom styles in src/css or src/component
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Popper.js and Bootstrap JS
import $ from "jquery";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div id="wrapper">
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu">
            <li className="nav-header">
              <div className="dropdown profile-element">
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <span className="block m-t-xs font-bold">Example user</span>
                  <span className="text-muted text-xs block">
                    menu <b className="caret"></b>
                  </span>
                </a>
                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                  <li>
                    <a className="dropdown-item" href="login.html">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logo-element">IN+</div>
            </li>
            <li className="active">
              <a href="NavBar.jsx">
                <i className="fa fa-th-large"></i>{" "}
                <span className="nav-label">Main view</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
          <nav
            className="navbar navbar-static-top white-bg"
            role="navigation"
            style={{ marginBottom: 0 }}
          >
            <div className="navbar-header">
              <a
                className="navbar-minimalize minimalize-styl-2 btn btn-primary"
                href="#"
              >
                <i className="fa fa-bars"></i>
              </a>
              <form
                role="search"
                className="navbar-form-custom"
                method="post"
                action="#"
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Search for something..."
                    className="form-control"
                    name="top-search"
                    id="top-search"
                  />
                </div>
              </form>
            </div>
            <ul className="nav navbar-top-links navbar-right">
              <li>
                <a href="#">
                  <i className="fa fa-sign-out"></i> Log out
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center m-t-lg">
                <h1>{t("welcome")}</h1>
                <small>{t("description")}</small>
                <div>
                  <button onClick={() => changeLanguage("en")}>English</button>
                  <button onClick={() => changeLanguage("tr")}>Turkish</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="pull-right">
            10GB of <strong>250GB</strong> Free.
          </div>
          <div>
            <strong>Copyright</strong> Example Company &copy; 2014-2019
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

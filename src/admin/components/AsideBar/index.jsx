import React from "react";
import logo from "../../assets/images/misc/logo.png";
import logoShort from "../../assets/images/misc/it-logo-short.png";
import data from "../AsideBar/data";
import { Link } from "react-router-dom";

const AsideBar = ({ asideBurger, setAsideBurger }) => {
  const [asideAcc, setAsideAcc] = React.useState(null);

  const toggleAsideAcc = (i) => {
    asideAcc === i ? setAsideAcc(null) : setAsideAcc(i);
  };
  return (
    <div>
      <div
        className="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
        id="tc_aside"
        style={
          asideBurger === false
            ? { width: "70px", transition: ".5s" }
            : { width: "265px", transition: ".5s" }
        }
      >
        <div className="brand flex-column-auto" id="tc_brand">
          <a href="#!" className="brand-logo">
            <img
              className="brand-image active show fade"
              style={{ height: "25px" }}
              alt="Logo"
              src={logoShort}
            />
            <span className="brand-text active show fade">
              <img style={{ height: "25px" }} alt="Logo" src={logo} />
            </span>
          </a>
        </div>
        <div
          className="aside-menu-wrapper flex-column-fluid overflow-auto h-100"
          id="tc_aside_menu_wrapper"
        >
          <div
            id="tc_aside_menu"
            className="aside-menu  mb-5"
            data-menu-vertical="1"
            data-menu-scroll="1"
            data-menu-dropdown-timeout="500"
          >
            <div id="accordion">
              <ul className="nav flex-column">
                {data.map((item, i) => (
                  <li key={i}
                    style={
                      asideBurger === false
                        ? {
                            justifyContent: "center",
                            margin: "0px",
                            alignItems: "center",
                          }
                        : {}
                    }
                    className="nav-item"
                  >
                    <div
                      onClick={() => toggleAsideAcc(item)}
                      className="nav-link"
                    >
                      <span className="svg-icon nav-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-home"
                          aria-expanded="true"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </span>
                      <span
                        className="nav-text"
                        style={
                          asideBurger === false
                            ? { display: "none" }
                            : { display: "block" }
                        }
                      >
                        {item.title}
                      </span>
                      <i
                        style={
                          asideAcc === item
                            ? { transform: "rotate(-90deg)", transition: ".2s" }
                            : { transform: "rotate(90deg)", transition: ".2s" }
                        }
                        className={asideBurger === false ? "" : item.icon}
                      ></i>
                    </div>
                    <div
                      className={
                        asideAcc === item && asideBurger === true
                          ? "collapse nav-collapse show"
                          : "collapse nav-collapse"
                      }
                      id="catalog"
                      data-parent="#accordion"
                    >
                      <div id="accordion1">
                        <ul className="nav flex-column">
                          
                          {item.subTitle?.map((subtitle, title) => (
                            <li key={title} className="nav-item">
                              <div
                                className="nav-link sub-nav-link"
                              >
                                <span className="svg-icon nav-icon d-flex justify-content-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10px"
                                    height="10px"
                                    fill="currentColor"
                                    className="bi bi-circle"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                                    />
                                  </svg>
                                </span>
                                <span className="nav-text">
                                        <Link to={item.urlTo}>{subtitle}</Link>
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsideBar;

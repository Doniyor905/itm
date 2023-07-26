import React from "react";
import Table from "react-bootstrap/Table";
import AsideBar from "../../components/AsideBar";
import HeaderFixed from "../../components/HeaderFixed";






const CatalogList = ({asideBurger, setAsideBurger}) => {
  // const [asideBurger, setAsideBurger] = React.useState(true);

  const [listEdit, setListEdit] = React.useState("0");

  const listEditClick = (id) => {
    listEdit === id ? setListEdit(null) : setListEdit(id);
  };
  

  const printWindow = () => {
    window.print();
  };

  const list = [
    {
      id: 1,
      products: "Clayton Bates",
      category: "Cloth",
      price: "137.00",
      status: "Approved",
    },
    {
      id: 2,
      products: "Gabriel Frazier",
      category: "Cloth",
      price: "322.00",
      status: "Approved",
    },
    {
      id: 3,
      products: "Debra Hamilton",
      category: "Cloth",
      price: "543.00",
      status: "Pending",
    },
    {
      id: 4,
      products: "Stacey Ward",
      category: "Cloth",
      price: "876.00",
      status: "Rejected",
    },
    {
      id: 5,
      products: "Troy Alexander",
      category: "Bag",
      price: "241.00",
      status: "Approved",
    },
    {
      id: 6,
      products: "Clayton Bates",
      category: "Cloth",
      price: "137.00",
      status: "Approved",
    },
    {
      id: 7,
      products: "Clayton Bates",
      category: "Cloth",
      price: "137.00",
      status: "Approved",
    },
    {
      id: 8,
      products: "Clayton Bates",
      category: "Cloth",
      price: "137.00",
      status: "Approved",
    },
    {
      id: 9,
      products: "Clayton Bates",
      category: "Cloth",
      price: "137.00",
      status: "Approved",
    },
    {
      id: 10,
      products: "Clayton Bates",
      category: "Cloth",
      price: "137.00",
      status: "Approved",
    },
  ];
  
  return (
    <div className="d-flex flex-row flex-column-fluid page">
      <AsideBar asideBurger={asideBurger} setAsideBurger={setAsideBurger}/>
      <div
        className="d-flex flex-column flex-row-fluid wrapper"
        id="tc_wrapper"
      >
        {/* <div id="tc_header" className="header header-fixed">
        <div className="container-fluid d-flex align-items-stretch justify-content-between">
          <div
            className="header-menu-wrapper header-menu-wrapper-left"
            id="tc_header_menu_wrapper"
          >
            <div
              id="tc_header_menu"
              className="header-menu header-menu-mobile header-menu-layout-default"
            >
              <ul className="menu-nav">
                <li
                  className="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here menu-item-active p-0"
                  data-menu-toggle="click"
                  aria-haspopup="true"
                >
                  <div
                    className="btn  btn-clean btn-dropdown mr-0 p-0"
                    id="tc_aside_toggle"
                  >
                    <span className="svg-icon svg-icon-xl svg-icon-primary">
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 16 16"
                        className="bi bi-list"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="topbar">
            <div className="posicon d-lg-block d-none">
              <a href="pos.html" className="btn btn-primary white mr-2">
                POS
              </a>
            </div>
            <div className="topbar-item">
              <div
                className="quick-search quick-search-inline ml-20 mr-1 w-300px"
                id="kt_quick_search_inline"
              >
                <form method="get" className="quick-search-form">
                  <div className="input-group rounded bg-light">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <span className="svg-icon svg-icon-lg">
                          <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 16 16"
                            className="bi bi-search"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                            />
                            <path
                              fillRule="evenodd"
                              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control h-45px"
                      placeholder="Search..."
                    />
                  </div>
                </form>
                <div
                  id="kt_quick_search_toggle"
                  data-toggle="dropdown"
                  data-offset="0px,1px"
                ></div>
                <div className="dropdown-menu dropdown-menu-left dropdown-menu-lg dropdown-menu-anim-up">
                  <div
                    className="quick-search-wrapper scroll ps"
                    data-scroll="true"
                    data-height="350"
                    data-mobile-height="200"
                    style={{height: "350px", overflow: "hidden"}}
                  >
                    <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}>
                      <div
                        className="ps__thumb-x"
                        tabindex="0"
                        style={{left: "0px", width: "0px"}}
                      ></div>
                    </div>
                    <div className="ps__rail-y" style={{top: "0px", right: "0px"}}>
                      <div
                        className="ps__thumb-y"
                        tabindex="0"
                        style={{top: "0px", height: "0px"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div
                className="topbar-item"
                data-toggle="dropdown"
                data-display="static"
              >
                <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
                  <img
                    className="h-20px w-20px rounded-sm"
                    src="assets/images/svg/flags/226-united-states.svg"
                    alt=""
                  />
                </div>
              </div>

              <div className="dropdown-menu dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  <span className="symbol symbol-20 mr-3">
                    <img
                      className="h-20px w-20px rounded-sm"
                      src="assets/images/svg/flags/226-united-states.svg"
                      alt=""
                    />
                  </span>
                  English
                </a>
              </div>
            </div>

            <div className="dropdown">
              <div
                className="topbar-item"
                data-toggle="dropdown"
                data-offset="10px,0px"
              >
                <div
                  id="kt_open_fullscreen"
                  className="btn btn-icon btn-clean btn-dropdown mr-1"
                  
                >
                  <span className="svg-icon svg-icon-xl svg-icon-primary">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                      className="bi bi-fullscreen"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                  </span>
                </div>

                <div
                  id="kt_close_fullscreen"
                  className="btn btn-icon btn-clean btn-dropdown mr-1"
                  
                  style={{display: "none"}}
                >
                  <span className="svg-icon svg-icon-xl svg-icon-primary">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                      className="bi bi-fullscreen-exit"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="topbar-item">
              <div
                className="btn btn-icon btn-clean  mr-1"
                id="tc_quick_panel_toggle"
              >
                <span className="svg-icon svg-icon-xl svg-icon-primary">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 16"
                    className="bi bi-people"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                    />
                  </svg>
                </span>
                <span className="badge badge-pill badge-secondary">5</span>
              </div>
            </div>

            <div className="dropdown">
              <div
                className="topbar-item"
                data-toggle="dropdown"
                data-display="static"
              >
                <div className="btn btn-icon btn-clean btn-dropdown mr-1">
                  <div
                    className="svg-icon svg-icon-xl svg-icon-primary"
                    title="Notification"
                  >
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                      className="bi bi-bell"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                      <path
                        fillRule="evenodd"
                        d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                      />
                    </svg>
                    <div className="lds-ripple">
                      <div></div>
                      <div></div>
                    </div>
                  </div>

                  <span className="badge badge-pill badge-primary">5</span>
                </div>
              </div>

              <div className="dropdown-menu p-0 m-0 dropdown-menu-right w-300px">
                <form>
                  <div className="d-flex flex-column p-3 border-bottom rounded-top">
                    <h4 className="d-flex justify-content-between align-items-center mb-0 rounded-top">
                      <span className="font-size-h5 ">Notifications</span>
                      <a
                        href="#"
                        className="btn btn-sm btn-primary-hover py-1 px-2"
                      >
                        Clear
                      </a>
                    </h4>
                  </div>

                  <div className="nav nav-hover scrollbar-1 ">
                    <a href="#" className="nav-item border-bottom">
                      <div className="nav-link">
                        <div className="nav-icon mr-3">
                          <i className="fas fa-cog text-primary"></i>
                        </div>
                        <div className="nav-text">
                          <div className="font-weight-bold">
                            New report has been received
                          </div>
                          <div className="text-muted">23 hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="nav-item border-bottom">
                      <div className="nav-link">
                        <div className="nav-icon mr-3">
                          <i className="fas fa-archive text-secondary"></i>
                        </div>
                        <div className="nav-text">
                          <div className="font-weight-bold">
                            New report has been received
                          </div>
                          <div className="text-muted">23 hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="nav-item border-bottom">
                      <div className="nav-link">
                        <div className="nav-icon mr-3">
                          <i className="fas fa-plane text-success"></i>
                        </div>
                        <div className="nav-text">
                          <div className="font-weight-bold">
                            New report has been received
                          </div>
                          <div className="text-muted">23 hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="nav-item border-bottom">
                      <div className="nav-link">
                        <div className="nav-icon mr-3">
                          <i className="fas fa-plane text-success"></i>
                        </div>
                        <div className="nav-text">
                          <div className="font-weight-bold">
                            New report has been received
                          </div>
                          <div className="text-muted">23 hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="nav-item border-bottom">
                      <div className="nav-link">
                        <div className="nav-icon mr-3">
                          <i className="fas fa-plane text-success"></i>
                        </div>
                        <div className="nav-text">
                          <div className="font-weight-bold">
                            New report has been received
                          </div>
                          <div className="text-muted">23 hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="nav-item border-bottom">
                      <div className="nav-link">
                        <div className="nav-icon mr-3">
                          <i className="fas fa-plane text-success"></i>
                        </div>
                        <div className="nav-text">
                          <div className="font-weight-bold">
                            New report has been received
                          </div>
                          <div className="text-muted">23 hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="nav-item border-bottom">
                      <div className="nav-link">
                        <div className="nav-icon mr-3">
                          <i className="fas fa-plane text-success"></i>
                        </div>
                        <div className="nav-text">
                          <div className="font-weight-bold">
                            New report has been received
                          </div>
                          <div className="text-muted">23 hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="nav-item border-bottom">
                      <div className="nav-link">
                        <div className="nav-icon mr-3">
                          <i className="fas fa-plane text-success"></i>
                        </div>
                        <div className="nav-text">
                          <div className="font-weight-bold">
                            New report has been received
                          </div>
                          <div className="text-muted">23 hrs ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="nav-item border-bottom">
                      <div className="nav-link">
                        <div className="nav-icon mr-3">
                          <i className="fas fa-daimond text-success"></i>
                        </div>
                        <div className="nav-text">
                          <div className="font-weight-bold">
                            New report has been received
                          </div>
                          <div className="text-muted">23 hrs ago</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="d-flex flex-column p-3 rounded-top">
                    <h4 className="d-flex justify-content-center mb-0  rounded-top">
                      <a href="#" className="font-size-base text-primary">
                        View All
                      </a>
                    </h4>
                  </div>
                </form>
              </div>
            </div>

            <div className="dropdown">
              <div
                className="topbar-item"
                data-toggle="dropdown"
                data-display="static"
              >
                <div className="btn btn-icon w-auto btn-clean d-flex align-items-center pr-1 pl-3">
                  <span className="text-dark-50 font-size-base d-none d-xl-inline mr-3">
                    Angilina Deo
                  </span>
                  <span className="symbol symbol-35 symbol-light-success">
                    <span className="symbol-label font-size-h5 ">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        className="bi bi-person-fill"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>

              <div
                className="dropdown-menu dropdown-menu-right"
                style={{minWidth: "150px"}}
              >
                <a href="#" className="dropdown-item">
                  <span className="svg-icon svg-icon-xl svg-icon-primary mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-user"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  Edit Profile
                </a>

                <a href="#" className="dropdown-item">
                  <span className="svg-icon svg-icon-xl svg-icon-primary mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-power"
                    >
                      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                      <line x1="12" y1="2" x2="12" y2="12"></line>
                    </svg>
                  </span>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <HeaderFixed asideBurger={asideBurger} setAsideBurger={setAsideBurger}/>
        <div
          className="content d-flex flex-column flex-column-fluid"
          id="tc_content"
        >
          <div className="subheader py-2 py-lg-6 subheader-solid">
            <div className="container-fluid">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-white mb-0 px-0 py-2">
                  <li className="breadcrumb-item active" aria-current="page">
                    Catalog
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="d-flex flex-column-fluid">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">
                      <div className="card card-custom gutter-b bg-transparent shadow-none border-0">
                        <div className="card-header align-items-center  border-bottom-dark px-0">
                          <div className="card-title mb-0">
                            <h3 className="card-label mb-0 font-weight-bold text-body">
                              Product
                            </h3>
                          </div>
                          <div className="icons d-flex">
                            <a href="add-product.html" className="ml-2">
                              <span className="bg-secondary h-30px font-size-h5 w-30px d-flex align-items-center justify-content-center  rounded-circle shadow-sm ">
                                <svg
                                  width="25px"
                                  height="25px"
                                  viewBox="0 0 16 16"
                                  className="bi bi-plus white"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                                  />
                                </svg>
                              </span>
                            </a>
                            <a href="#" className="ml-2" onClick={printWindow}>
                              <span className="icon h-30px font-size-h5 w-30px d-flex align-items-center justify-content-center rounded-circle ">
                                <svg
                                  width="15px"
                                  height="15px"
                                  viewBox="0 0 16 16"
                                  className="bi bi-printer-fill"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M11 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                                  />
                                </svg>
                              </span>
                            </a>
                            <a href="#" className="ml-2">
                              <span className="icon h-30px font-size-h5 w-30px d-flex align-items-center justify-content-center rounded-circle ">
                                <svg
                                  width="15px"
                                  height="15px"
                                  viewBox="0 0 16 16"
                                  className="bi bi-file-earmark-text-fill"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
                                  />
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 ">
                      <div className="card card-custom gutter-b bg-white border-0">
                        <div className="card-body">
                          <div>
                            <div
                              className=" table-responsive"
                              id="printableTable"
                            >
                              <Table
                                striped
                                bordered
                                hover
                                id="productTable"
                                className="display "
                              >
                                <thead className="text-body">
                                  <tr>
                                    <th>ID</th>
                                    <th>Products</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th className="no-sort"></th>
                                  </tr>
                                </thead>
                                <tbody className="kt-table-tbody text-dark">
                                  {list.map((list, id) => (
                                    <tr
                                      key={id}
                                      className="kt-table-row kt-table-row-level-0"
                                    >
                                      <td>#{list.id}</td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <span>{list.products}</span>
                                        </div>
                                      </td>
                                      <td>{list.category}</td>
                                      <td>${list.price}</td>
                                      <td>
                                        <div className="">
                                          <div className="">
                                            <span className="text-success">
                                              {list.status}
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="card-toolbar text-right">
                                          <button
                                            onClick={() => listEditClick(id)}
                                            className="btn p-0 shadow-none"
                                            type="button"
                                            id="dropdowneditButton"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                          >
                                            <span className="svg-icon">
                                              <svg
                                                width="20px"
                                                height="20px"
                                                viewBox="0 0 16 16"
                                                className="bi bi-three-dots text-body"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                                ></path>
                                              </svg>
                                            </span>
                                          </button>

                                          <div
                                            className={
                                              listEdit === id
                                                ? "dropdown-menu dropdown-menu-right show"
                                                : "dropdown-menu dropdown-menu-right"
                                            }
                                            aria-labelledby="dropdowneditButton"
                                          >
                                            <a
                                              className="dropdown-item"
                                              href="add-product.html"
                                            >
                                              Edit
                                            </a>
                                            <a
                                              className="dropdown-item confirm-delete"
                                              title="Delete"
                                              href="#"
                                            >
                                              Delete
                                            </a>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer bg-white py-4 d-flex flex-lg-column"
          id="tc_footer"
        >
          <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="text-dark order-2 order-md-1">
              <span className="text-muted font-weight-bold mr-2">2020©</span>
              <a
                href="#"
                target="_blank"
                className="text-dark-75 text-hover-primary"
              >
                Themescoder
              </a>
            </div>

            <div className="nav nav-dark">
              <a href="#" target="_blank" className="nav-link pl-0 pr-5">
                About
              </a>
              <a href="#c" target="_blank" className="nav-link pl-0 pr-5">
                Team
              </a>
              <a href="#" target="_blank" className="nav-link pl-0 pr-0">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogList;

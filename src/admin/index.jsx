import React from "react";
// import "./assets/scss/style.scss";
import "./style.scss"
import ReactApexChart from "react-apexcharts";
import CountUp from "react-countup";
import HeaderFixed from "./components/HeaderFixed";
import AsideBar from "./components/AsideBar";

const Admin = ({asideBurger, setAsideBurger}) => {
  // const [asideBurger, setAsideBurger] = React.useState(true);


  const [stateTwo, setStateTwo] = React.useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  const [state, setState] = React.useState({
    series: [
      {
        name: "Sales",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
        },
      },
      title: {
        text: "Forecast",
        align: "left",
        style: {
          fontSize: "16px",
          color: "#666",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10,
        max: 40,
      },
    },
  });

  return (
    <div>      
      <div className="d-flex flex-column flex-root">
        
        <div className="d-flex flex-row flex-column-fluid page">
         <AsideBar asideBurger={asideBurger} setAsideBurger={setAsideBurger}/>
          <div className="aside-overlay"></div>
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="tc_wrapper"
          >
            <HeaderFixed asideBurger={asideBurger} setAsideBurger={setAsideBurger}/>
            <div
              className="content d-flex flex-column flex-column-fluid"
              id="tc_content"
            >
              <div className="subheader py-2 py-lg-6 subheader-solid">
                <div className="container-fluid">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-white mb-0 px-0 py-2">
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Dashboard
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
                        <div className="col-lg-6 col-xl-3">
                          <div className="card card-custom gutter-b bg-white border-0 theme-circle theme-circle-primary">
                            <div className="card-body">
                              <h3 className="text-body font-weight-bold">
                                Orders
                              </h3>
                              <div className="mt-3">
                                <div className="d-flex align-items-center">
                                  <span className="text-dark font-weight-bold font-size-h1 mr-3">
                                    <CountUp
                                      className="counter"
                                      duration={5}
                                      end={400}
                                    />
                                  </span>
                                </div>
                                <div className="text-black-50 mt-3">
                                  Compare to last year (2019)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                          <div className="card card-custom gutter-b bg-white border-0 theme-circle theme-circle theme-circle-secondary">
                            <div className="card-body">
                              <h3 className="text-body font-weight-bold">
                                Products
                              </h3>
                              <div className="mt-3">
                                <div className="d-flex align-items-center">
                                  <span className="text-dark font-weight-bold font-size-h1 mr-3">
                                    <CountUp
                                      className="counter"
                                      duration={5}
                                      end={600}
                                    />
                                  </span>
                                </div>
                                <div className="text-black-50 mt-3">
                                  Compare to last year (2019)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                          <div className="card card-custom gutter-b bg-white border-0 theme-circle theme-circle-success">
                            <div className="card-body">
                              <h3 className="text-body font-weight-bold">
                                Users
                              </h3>
                              <div className="mt-3">
                                <div className="d-flex align-items-center">
                                  <span className="text-dark font-weight-bold font-size-h1 mr-3">
                                    <CountUp
                                      className="counter"
                                      duration={5}
                                      end={1000}
                                    />
                                  </span>
                                </div>
                                <div className="text-black-50 mt-3">
                                  Compare to last year (2019)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-3">
                          <div className="card card-custom gutter-b bg-white border-0 theme-circle theme-circle-info">
                            <div className="card-body">
                              <h3 className="text-body font-weight-bold">
                                Sales
                              </h3>
                              <div className="mt-3">
                                <div className="d-flex align-items-center">
                                  <span className="text-dark font-weight-bold font-size-h1 mr-3">
                                    $
                                    <CountUp
                                      className="counter"
                                      duration={5}
                                      end={6800}
                                    />
                                    {/* <span
                                      className="counter"
                                      data-target="6800"
                                    >
                                      0
                                    </span> */}
                                  </span>
                                  <span className="font-weight-bold font-size-h4 text-danger">
                                    8.2
                                  </span>
                                  <span className="svg-icon text-danger">
                                    <svg
                                      width="20px"
                                      height="20px"
                                      viewBox="0 0 16 16"
                                      className="bi bi-arrow-up-short"
                                      fill="currentColor"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="text-black-50 mt-3">
                                  Compare to last year (2019)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6  col-xl-8">
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header align-items-center  border-0">
                              <div className="card-title mb-0">
                                <h3 className="card-label text-body font-weight-bold mb-0">
                                  Users
                                </h3>
                              </div>
                            </div>
                            <div className="card-body pt-3">
                              <div id="chart-4">
                                <ReactApexChart
                                  options={state.options}
                                  series={state.series}
                                  type="line"
                                  height={350}
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 col-xl-4">
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header align-items-center  border-0">
                              <div className="card-title mb-0">
                                <h3 className="card-label text-body font-weight-bold mb-0">
                                  Last Update
                                </h3>
                              </div>
                              <div className="card-toolbar">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="dropdownMenuButton1"
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
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <div
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="dropdownMenuButton1"
                                >
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-body px-0">
                              <ul
                                className="list-group scrollbar-1"
                                style={{ height: "300px" }}
                              >
                                <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between py-2">
                                  <div className="list-left d-flex align-items-center">
                                    <span className="d-flex align-items-center justify-content-center rounded svg-icon w-45px h-45px bg-primary text-white mr-2">
                                      <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 16 16"
                                        className="bi bi-lightning-fill"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                                        />
                                      </svg>
                                    </span>
                                    <div className="list-content">
                                      <span className="list-title text-body">
                                        Total Products
                                      </span>
                                      <small className="text-muted d-block">
                                        1.2k New Products
                                      </small>
                                    </div>
                                  </div>
                                  <span>10.6k</span>
                                </li>
                                <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between py-2">
                                  <div className="list-left d-flex align-items-center">
                                    <span className="d-flex align-items-center justify-content-center rounded svg-icon w-45px h-45px bg-secondary text-white mr-2">
                                      <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 16 16"
                                        className="bi bi-bar-chart-line-fill"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z"
                                        />
                                      </svg>
                                    </span>
                                    <div className="list-content">
                                      <span className="list-title text-body">
                                        Total Sales
                                      </span>
                                      <small className="text-muted d-block">
                                        39.4k New Sales
                                      </small>
                                    </div>
                                  </div>
                                  <span>26M</span>
                                </li>
                                <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between py-2">
                                  <div className="list-left d-flex align-items-center">
                                    <span className="d-flex align-items-center justify-content-center rounded svg-icon w-45px h-45px bg-success text-white mr-2">
                                      <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 16 16"
                                        className="bi bi-credit-card-fill"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4z" />
                                        <path
                                          fillRule="evenodd"
                                          d="M0 7v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H3z"
                                        />
                                      </svg>
                                    </span>
                                    <div className="list-content">
                                      <span className="list-title text-body">
                                        Total Revenue
                                      </span>
                                      <small className="text-muted d-block">
                                        43.5k New Revenue
                                      </small>
                                    </div>
                                  </div>
                                  <span>15.89M</span>
                                </li>

                                <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between py-2">
                                  <div className="list-left d-flex align-items-center">
                                    <span className="d-flex align-items-center justify-content-center rounded svg-icon w-45px h-45px bg-warning text-white mr-2">
                                      <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 16 16"
                                        className="bi bi-lightning-fill"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                                        />
                                      </svg>
                                    </span>
                                    <div className="list-content">
                                      <span className="list-title text-body">
                                        Total Users
                                      </span>
                                      <small className="text-muted d-block">
                                        New Users
                                      </small>
                                    </div>
                                  </div>
                                  <span>1.2k</span>
                                </li>
                                <li className="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between py-2">
                                  <div className="list-left d-flex align-items-center">
                                    <span className="d-flex align-items-center justify-content-center rounded svg-icon w-45px h-45px bg-info text-white mr-2">
                                      <svg
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 16 16"
                                        className="bi bi-lightning-fill"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                                        />
                                      </svg>
                                    </span>
                                    <div className="list-content">
                                      <span className="list-title text-body">
                                        Total Visits
                                      </span>
                                      <small className="text-muted d-block">
                                        New Visits
                                      </small>
                                    </div>
                                  </div>
                                  <span>4.6k</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 col-xl-4">
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header align-items-center  border-0">
                              <div className="card-title mb-0">
                                <h3 className="card-label font-weight-bold mb-0 text-body">
                                  Activity
                                </h3>
                              </div>
                              <div className="card-toolbar">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="dropdownMenuButton2"
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
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <div
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="dropdownMenuButton2"
                                >
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="timeline timeline-6 mt-3">
                                <div className="timeline-item align-items-start">
                                  <div className="timeline-label font-weight-bold text-black-50 ">
                                    08:42
                                  </div>
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-warning icon-xl"></i>
                                  </div>
                                  <div className="font-weight-mormal timeline-content text-muted pl-3">
                                    Outlines keep you honest. And keep structure
                                  </div>
                                </div>
                                <div className="timeline-item align-items-start">
                                  <div className="timeline-label font-weight-bold text-black-50">
                                    10:00
                                  </div>
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-success icon-xl"></i>
                                  </div>
                                  <div className="timeline-content d-flex">
                                    <span className="font-weight-bolder text-body pl-3">
                                      AEOL meeting
                                    </span>
                                  </div>
                                </div>
                                <div className="timeline-item align-items-start">
                                  <div className="timeline-label font-weight-bold text-black-50 ">
                                    14:37
                                  </div>
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-danger icon-xl"></i>
                                  </div>
                                  <div className="timeline-content font-weight-bold text-body pl-3">
                                    Make deposit
                                    <a href="#" className="text-primary">
                                      USD 700
                                    </a>
                                    . to ESL
                                  </div>
                                </div>

                                <div className="timeline-item align-items-start">
                                  <div className="timeline-label font-weight-bold text-black-50 ">
                                    16:50
                                  </div>
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-primary icon-xl"></i>
                                  </div>
                                  <div className="timeline-content font-weight-mormal text-muted pl-3">
                                    Indulging in poorly driving and keep
                                    structure keep great
                                  </div>
                                </div>
                                <div className="timeline-item align-items-start">
                                  <div className="timeline-label font-weight-bold text-black-50">
                                    21:03
                                  </div>
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-danger icon-xl"></i>
                                  </div>
                                  <div className="timeline-content font-weight-bold text-body pl-3">
                                    New order placed
                                    <a href="#" className="text-primary">
                                      #XF-2356
                                    </a>
                                    .
                                  </div>
                                </div>
                                <div className="timeline-item align-items-start">
                                  <div className="timeline-label font-weight-bold text-black-50">
                                    23:07
                                  </div>
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-info icon-xl"></i>
                                  </div>
                                  <div className="timeline-content font-weight-mormal text-muted pl-3">
                                    Outlines keep and you honest. Indulging in
                                    poorly driving
                                  </div>
                                </div>
                                <div className="timeline-item align-items-start">
                                  <div className="timeline-label font-weight-bold text-black-50">
                                    16:50
                                  </div>
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-primary icon-xl"></i>
                                  </div>
                                  <div className="timeline-content font-weight-mormal text-muted pl-3">
                                    Indulging in poorly driving and keep
                                    structure keep great
                                  </div>
                                </div>

                                <div className="timeline-item align-items-start">
                                  <div className="timeline-label font-weight-bold text-black-50">
                                    21:03
                                  </div>
                                  <div className="timeline-badge">
                                    <i className="fa fa-genderless text-danger icon-xl"></i>
                                  </div>
                                  <div className="timeline-content font-weight-bold text-body pl-3">
                                    New order placed
                                    <a href="#" className="text-primary">
                                      #XF-2356
                                    </a>
                                    .
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-8">
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header align-items-center  border-0">
                              <div className="card-title mb-0">
                                <h3 className="card-label font-weight-bold mb-0 text-body">
                                  Weekly Sales
                                </h3>
                              </div>
                            </div>
                            <div className="card-body pt-3">
                              <div id="chart-3">
                                <ReactApexChart
                                  options={stateTwo.options}
                                  series={stateTwo.series}
                                  type="area"
                                  height={350}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 col-xl-8">
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header align-items-center  border-0">
                              <div className="card-title mb-0">
                                <h3 className="card-label mb-0 font-weight-bold text-body">
                                  New Orders
                                </h3>
                              </div>
                              <div className="card-toolbar">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="dropdownMenuButton3"
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
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <div
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="dropdownMenuButton3"
                                >
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <div>
                                <div className="kt-table-content table-responsive">
                                  <table id="myTable" className="table ">
                                    <thead className="kt-table-thead text-body">
                                      <tr>
                                        <th className="kt-table-cell">
                                          Order ID
                                        </th>
                                        <th className="kt-table-cell">
                                          Customer Name
                                        </th>
                                        <th className="kt-table-cell">
                                          Amount
                                        </th>
                                        <th className="kt-table-cell">
                                          <div className="text-right">
                                            Status
                                          </div>
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="kt-table-tbody text-dark">
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Clayton Bates
                                            </span>
                                          </div>
                                        </td>

                                        <td className="kt-table-cell">
                                          $137.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-success">
                                              Approved
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Gabriel Frazier
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $322.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-success">
                                              Approved
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Debra Hamilton
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $543.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-info">
                                              Pending
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Stacey Ward
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $876.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-danger">
                                              Rejected
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Troy Alexander
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $241.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-success">
                                              Approved
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Clayton Bates
                                            </span>
                                          </div>
                                        </td>

                                        <td className="kt-table-cell">
                                          $137.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-success">
                                              Approved
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Gabriel Frazier
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $322.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-success">
                                              Approved
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Debra Hamilton
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $543.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-info">
                                              Pending
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Stacey Ward
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $876.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-danger">
                                              Rejected
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Troy Alexander
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $241.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-success">
                                              Approved
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Clayton Bates
                                            </span>
                                          </div>
                                        </td>

                                        <td className="kt-table-cell">
                                          $137.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-success">
                                              Approved
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Gabriel Frazier
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $322.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-success">
                                              Approved
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Debra Hamilton
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $543.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-info">
                                              Pending
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Stacey Ward
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $876.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-danger">
                                              Rejected
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr className="kt-table-row kt-table-row-level-0">
                                        <td className="kt-table-cell">
                                          #12425
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="d-flex align-items-center">
                                            <span className="ml-2">
                                              Troy Alexander
                                            </span>
                                          </div>
                                        </td>
                                        <td className="kt-table-cell">
                                          $241.00
                                        </td>
                                        <td className="kt-table-cell">
                                          <div className="text-right">
                                            <span className="mr-0 text-success">
                                              Approved
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header align-items-center  border-0">
                              <div className="card-title mb-0">
                                <h3 className="card-label mb-0 font-weight-bold text-body">
                                  Action Needed
                                </h3>
                              </div>
                              <div className="card-toolbar">
                                <button
                                  className="btn p-0"
                                  type="button"
                                  id="dropdownMenuButton4"
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
                                      />
                                    </svg>
                                  </span>
                                </button>
                                <div
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="dropdownMenuButton4"
                                >
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="card-body pt-4">
                              <div className="progress" data-percentage="80">
                                <span className="progress-left">
                                  <span className="progress-bar"></span>
                                </span>
                                <span className="progress-right">
                                  <span className="progress-bar"></span>
                                </span>
                                <div className="progress-value">
                                  <div className="text-body">
                                    80%
                                    <br />
                                    <span>completed</span>
                                  </div>
                                </div>
                              </div>
                              <div className="pt-0">
                                <p className="text-center font-weight-normal text-body">
                                  Notes: Current sprint requires stakeholders
                                  <br />
                                  to approve newly amended policies
                                </p>
                                <a
                                  href="#"
                                  className="btn btn-secondary text-white font-weight-bold w-100 py-3"
                                >
                                  Generate Report
                                </a>
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
                  <span className="text-muted font-weight-bold mr-2">
                    2020©
                  </span>
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
      </div>

      <ul className="sticky-toolbar nav flex-column bg-primary" title="Setting">
        <li
          className="nav-item"
          id="kt_demo_panel_toggle"
          data-toggle="tooltip"
          title=""
          data-placement="right"
          data-original-title="Check out more demos"
        >
          <a className="btn btn-sm btn-icon text-white" href="#">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              className="bi bi-gear fa-spin"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
              />
              <path
                fillRule="evenodd"
                d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
              />
            </svg>
          </a>
        </li>
      </ul>

      <div
        id="kt_color_panel"
        className="offcanvas offcanvas-right kt-color-panel p-5"
      >
        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-3">
          <h4 className="font-size-h4 font-weight-bold m-0">Theme Config</h4>
          <a
            href="#"
            className="btn btn-sm btn-icon btn-light btn-hover-primary"
            id="kt_color_panel_close"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 16 16"
              className="bi bi-x"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </div>
        <hr />
        <div className="offcanvas-content">
          <div id="customizer-theme-layout" className="customizer-theme-layout">
            <h5 className="mt-1">Theme Layout</h5>
            <div className="theme-layout">
              <div className="d-flex justify-content-start">
                <div className="my-3">
                  <div className="btn-group btn-group-toggle">
                    <label className="btn btn-primary p-2 active">
                      <input
                        type="radio"
                        name="layoutOptions"
                        value="false"
                        id="radio-light"
                        defaultChecked=""
                      />
                      Light
                    </label>
                    <label className="btn btn-primary p-2">
                      <input
                        type="radio"
                        name="layoutOptions"
                        value="false"
                        id="radio-dark"
                      />
                      Dark
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h5 className="mt-1">RTL Layout</h5>
            <div className="rtl-layout">
              <div className="d-flex justify-content-start">
                <div className="my-3 btn-rtl">
                  <div className="toggle">
                    <span className="circle"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div id="customizer-theme-colors" className="customizer-theme-colors">
            <h5>Theme Colors</h5>
            <ul className="list-inline unstyled-list d-flex">
              <li className="color-box mr-2">
                <div
                  id="color-theme-default"
                  className="d-flex rounded w-20px h-20px"
                  style={{ backgroundColor: "#ae69f5d9" }}
                ></div>
              </li>
              <li className="color-box mr-2">
                <div
                  id="color-theme-blue"
                  className="d-flex rounded w-20px h-20px"
                  style={{ backgroundColor: "blue" }}
                ></div>
              </li>
              <li className="color-box mr-2">
                <div
                  id="color-theme-red"
                  className="d-flex rounded w-20px h-20px"
                  style={{ backgroundColor: "red" }}
                ></div>
              </li>
              <li className="color-box mr-2">
                <div
                  id="color-theme-green"
                  className="d-flex rounded w-20px h-20px"
                  style={{ backgroundColor: "green" }}
                ></div>
              </li>
              <li className="color-box mr-2">
                <div
                  id="color-theme-yellow"
                  className="d-flex rounded w-20px h-20px"
                  style={{ backgroundColor: "#ffc107" }}
                ></div>
              </li>
              <li className="color-box mr-2">
                <div
                  id="color-theme-navy-blue"
                  className="d-flex rounded w-20px h-20px"
                  style={{ backgroundColor: "#000080" }}
                ></div>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

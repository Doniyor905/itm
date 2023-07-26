import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Select from "react-select";

import AsideBar from "../../components/AsideBar";
import HeaderFixed from "../../components/HeaderFixed";
import slide1 from "../../assets/images/carousel/slide1.jpg";
import slide3 from "../../assets/images/carousel/slide3.jpg";
import elementBanner1Left from "../../assets/images/carousel/element-banner1-left.jpg";
import elementBanner2Left from "../../assets/images/carousel/element-banner2-left.jpg";
import elementBanner1Right from "../../assets/images/carousel/element-banner1-right.jpg";
import elementBanner2Right from "../../assets/images/carousel/element-banner2-right.jpg";
import elementBanner2Center from "../../assets/images/carousel/element-banner2-center.jpg";

import "./AddProducts.scss";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Editor } from "@tinymce/tinymce-react";

const AddProducts = ({ asideBurger, setAsideBurger }) => {
  const [tabsClick, setTabsClick] = React.useState(1);
  const [tabsContent, setTabsClickContent] = React.useState(1);

  const uptadeTabsClick = (id) => {
    setTabsClick(id);
  };
  const uptadeTabsContent = (id) => {
    setTabsClickContent(id);
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-row flex-column-fluid page">
          <AsideBar asideBurger={asideBurger} setAsideBurger={setAsideBurger} />
          <div className="aside-overlay"></div>
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="tc_wrapper"
          >
            <HeaderFixed
              asideBurger={asideBurger}
              setAsideBurger={setAsideBurger}
            />

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
                        Add Product
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="d-flex flex-column-fluid">
                <div className="container-fluid addproduct-main">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">
                      <div className="card card-custom gutter-b bg-transparent shadow-none border-0">
                        <div className="card-header align-items-center   border-bottom-dark px-0">
                          <div className="card-title mb-0">
                            <h3 className="card-label mb-0 font-weight-bold text-body">
                              Add Product
                            </h3>
                          </div>
                          <div className="icons d-flex">
                            <a href="#" className="ml-2">
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
                              <span className="icon  h-30px font-size-h5 w-30px d-flex align-items-center justify-content-center rounded-circle ">
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
                        <div className="card-body pb-0 pt-4 ">
                          <div className="d-flex justify-content-center">
                            <ul
                              className="nav nav-pills mb-0"
                              id="pills-tabmain"
                              role="tablist"
                            >
                              <li className="nav-item">
                                <a
                                  onClick={() => uptadeTabsContent(1)}
                                  className={tabsContent === 1 ? "nav-link active" : "nav-link"}
                                  id="info-tab"
                                  data-toggle="pill"
                                  href="#info"
                                  role="tab"
                                  aria-controls="info"
                                  aria-selected="true"
                                >
                                  <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 16 16"
                                    className="bi bi-file-earmark-text"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                                    <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                                    <path
                                      fillRule="evenodd"
                                      d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                                    />
                                  </svg>
                                  Basic Info
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  onClick={() => uptadeTabsContent(2)}
                                  className={tabsContent === 2 ? "nav-link active" : "nav-link"}
                                  id="ad-info-tab"
                                  data-toggle="pill"
                                  href="#ad-info"
                                  role="tab"
                                  aria-controls="ad-info"
                                  aria-selected={false}
                                >
                                  <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 16 16"
                                    className="bi bi-receipt"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                                    />
                                  </svg>
                                  Advance Info
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  onClick={() => uptadeTabsContent(3)}
                                  className={tabsContent === 3 ? "nav-link active" : "nav-link"}
                                  id="pricing-tab"
                                  data-toggle="pill"
                                  href="#pricing"
                                  role="tab"
                                  aria-controls="pricing"
                                  aria-selected={false}
                                >
                                  <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 16 16"
                                    className="bi bi-check2-square"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      d="M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z"
                                    />
                                  </svg>
                                  Pricing
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  onClick={() => uptadeTabsContent(4)}
                                  className={tabsContent === 4 ? "nav-link active" : "nav-link"}
                                  id="seo-tab"
                                  data-toggle="pill"
                                  href="#seo"
                                  role="tab"
                                  aria-controls="seo"
                                  aria-selected={false}
                                >
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-clock-history"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                                    />
                                  </svg>
                                  Seo
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className={tabsContent === 1 ? "tab-pane fade show active" : "tab-pane fade"}
                          id="info"
                          role="tabpanel"
                          aria-labelledby="info-tab"
                        >
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header border-0 align-items-center">
                              <h3 className="card-label mb-0 font-weight-bold text-body">
                                General Information
                              </h3>
                            </div>

                            <div className="card-body" id="printableTable">
                              <div className="row">
                                <div className="col-md-6 col-12">
                                  <div
                                    className="bg-light h-300px mb-3  d-flex justify-content-center align-items-center"
                                    data-toggle="modal"
                                    data-target="#quickViewModal"
                                  >
                                    <i className="fas fa-plus"></i>
                                  </div>
                                  <div className="row ">
                                    <div className="col-12">
                                      <div className="addproduct-js row">
                                        <Swiper
                                          slidesPerView={4}
                                          spaceBetween={30}
                                          navigation={true}
                                          modules={[Navigation]}
                                          className="mySwiper"
                                        >
                                          <SwiperSlide>
                                            <div className="">
                                              <div
                                                className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                                data-toggle="modal"
                                                data-target="#quickViewModal"
                                              >
                                                <i className="fas fa-plus"></i>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                            <div className="">
                                              <div
                                                className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                                data-toggle="modal"
                                                data-target="#quickViewModal"
                                              >
                                                <i className="fas fa-plus"></i>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                            <div className="">
                                              <div
                                                className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                                data-toggle="modal"
                                                data-target="#quickViewModal"
                                              >
                                                <i className="fas fa-plus"></i>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                            <div className="">
                                              <div
                                                className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                                data-toggle="modal"
                                                data-target="#quickViewModal"
                                              >
                                                <i className="fas fa-plus"></i>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                            <div className="">
                                              <div
                                                className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                                data-toggle="modal"
                                                data-target="#quickViewModal"
                                              >
                                                <i className="fas fa-plus"></i>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                            <div className="">
                                              <div
                                                className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                                data-toggle="modal"
                                                data-target="#quickViewModal"
                                              >
                                                <i className="fas fa-plus"></i>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                        </Swiper>
                                        {/* <div className="">
                                          <div
                                            className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                            data-toggle="modal"
                                            data-target="#quickViewModal"
                                          >
                                            <i className="fas fa-plus"></i>
                                          </div>
                                        </div>
                                        <div className="">
                                          <div
                                            className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                            data-toggle="modal"
                                            data-target="#quickViewModal"
                                          >
                                            <i className="fas fa-plus"></i>
                                          </div>
                                        </div>
                                        <div className="">
                                          <div
                                            className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                            data-toggle="modal"
                                            data-target="#quickViewModal"
                                          >
                                            <i className="fas fa-plus"></i>
                                          </div>
                                        </div>
                                        <div className="">
                                          <div
                                            className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                            data-toggle="modal"
                                            data-target="#quickViewModal"
                                          >
                                            <i className="fas fa-plus"></i>
                                          </div>
                                        </div>
                                        <div className="">
                                          <div
                                            className="thumb h-70px bg-light  d-flex justify-content-center align-items-center"
                                            data-toggle="modal"
                                            data-target="#quickViewModal"
                                          >
                                            <i className="fas fa-plus"></i>
                                          </div>
                                        </div> */}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row mt-5">
                                    <div className="col-12">
                                      <div className="switch-h d-flex justify-content-between align-items-center border p-2 mb-3">
                                        <h4 className="font-size-h4 text-dark mb-0">
                                          Embed Video
                                        </h4>
                                        <div className="custom-control switch custom-switch-info custom-switch custom-control-inline mr-0">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            defaultChecked=""
                                            id="customSwitchcolor5"
                                          />
                                          <label
                                            className="custom-control-label mr-1"
                                            htmlFor="customSwitchcolor5"
                                          ></label>
                                        </div>
                                      </div>
                                      <label>Video Embeded Code</label>
                                      <fieldset className="form-label-group mb-3">
                                        <textarea
                                          className="border-dark w-100 fixed-size"
                                          id="horizontalTextarea"
                                          rows="4"
                                          placeholder="Textarea"
                                          style={{ outline: "none" }}
                                        ></textarea>
                                      </fieldset>
                                    </div>
                                    <div className="col-12">
                                      <label> Video Display Setting</label>
                                      <ul className="list-unstyled mb-0">
                                        <li className=" mb-1">
                                          <fieldset>
                                            <div className="form-check form-check-inline">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                id="exampleRadios1"
                                                selected="option1"
                                                defaultChecked=""
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="exampleRadios1"
                                              >
                                                Display as first side for image
                                                slider
                                              </label>
                                            </div>
                                          </fieldset>
                                        </li>
                                        <li className=" mb-1">
                                          <fieldset>
                                            <div className="form-check form-check-inline">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                id="inlineRadio21"
                                                selected="option2"
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="inlineRadio21"
                                              >
                                                Display After Product
                                                Description
                                              </label>
                                            </div>
                                          </fieldset>
                                        </li>
                                        <li className=" mb-1">
                                          <fieldset>
                                            <div className="form-check form-check-inline">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                id="inlineRadio22"
                                                selected="option2"
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="inlineRadio22"
                                              >
                                                Display In Tab
                                              </label>
                                            </div>
                                          </fieldset>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  <label>Categories</label>
                                  <select className="single-select w-100 mb-3 categories-select">
                                    <option selected="1">abc</option>
                                    <option selected="2">bcd</option>
                                    <option selected="3">cde</option>
                                    <option selected="4">def</option>
                                    <option selected="5">efg</option>
                                    <option selected="6">fgh</option>
                                    <option selected="7">ghi</option>
                                    <option selected="8">hij</option>
                                    <option selected="9">ijk</option>
                                    <option selected="10">jkl</option>
                                    <option selected="11">klm</option>
                                  </select>
                                  <ul
                                    className="nav nav-pills lang-tab"
                                    id="pills-tab1"
                                    role="tablist"
                                  >
                                    <li className="nav-item ">
                                      <a
                                        onClick={() => uptadeTabsClick(1)}
                                        className={tabsClick === 1 ? "nav-link btn-light active shadow-none rounded-0" : "nav-link btn-light shadow-none rounded-0"}
                                        id="home-tab-basic"
                                        href="#!"
                                      >
                                        Home
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                      onClick={() => uptadeTabsClick(2)}
                                        className={tabsClick === 2 ? "nav-link btn-light active shadow-none rounded-0" : "nav-link btn-light shadow-none rounded-0"}
                                        id="service-tab-basic"
                                        href="#!"
                                      >
                                        Service
                                      </a>
                                    </li>
                                  </ul>
                                  <div className="row">
                                    <div className="col-12">
                                      <div
                                        className="tab-content lang-content"
                                        id="v-pills-tabContent"
                                      >
                                        <div
                                          className={tabsClick === 1 ? "tab-pane fade show active" : "tab-pane fade"}
                                          id="home-basic"
                                          role="tabpanel"
                                          aria-labelledby="home-tab-basic"
                                        >
                                          <h6 className="text-body">
                                            Product Name
                                          </h6>
                                          <fieldset className="form-group mb-3">
                                            <form id="myform">
                                              <input
                                                type="text"
                                                className="form-control bg-transparent text-dark"
                                                id="basicInput"
                                                placeholder="Product Name"
                                              />
                                            </form>
                                          </fieldset>
                                          <h6 className="text-body">
                                            Description
                                          </h6>
                                          <div className="row mb-3">
                                            <div className="col-12 overflow-hidden">
                                              {/* <div
                                                id="editor"
                                                className="bg-transparent text-dark"
                                              >

                                              </div> */}
                                              <Editor
                                                apiKey="lbabh1ozufozn0qprwameo1urzmg3w2yaxxebek0l73p954b"
                                                init={{
                                                  height: 150,
                                                  menubar: false,
                                                }}
                                              />
                                            </div>
                                          </div>
                                          <h6 className="text-body">Tags</h6>
                                          <div className="row ">
                                            {/* <div
                                              className="col-12 "
                                              data-select2-id="173"
                                            >
                                              <fieldset className="form-group mb-0">
                                                <select
                                                  className="js-example-basic-multiple js-states form-control"
                                                  name="states[]"
                                                  multiple="multiple"
                                                >
                                                  <option selected>
                                                    Alabama
                                                  </option>

                                                  <option selected="WY">
                                                    Wyoming
                                                  </option>
                                                </select>
                                              </fieldset>
                                            </div> */}
                                            <Select
                                              defaultValue={[
                                                options[2],
                                                options[3],
                                              ]}
                                              isMulti
                                              name="colors"
                                              options={options}
                                              className="basic-multi-select"
                                              classNamePrefix="select"
                                            />
                                          </div>
                                        </div>
                                        <div
                                          className={tabsClick === 2 ? "tab-pane fade show active" : "tab-pane fade"}
                                          id="service-basic"
                                          role="tabpanel"
                                          aria-labelledby="service-tab-basic"
                                        >
                                          <p className="text-dark">
                                            ..Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Pellentesque lorem est, vestibulum
                                            eu ex ac, mattis aliquam turpis.
                                            Vivamus sed orci nibh. Donec
                                            scelerisque. Lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit.
                                            Pellentesque lorem est, vestibulum
                                            eu ex ac, mattis aliquam turpis.
                                            Vivamus sed orci nibh. Donec
                                            scelerisque
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                              <a
                                data-toggle="pill"
                                href="#ad-info"
                                className="btn btn-primary cta"
                              >
                                Continue
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className={tabsContent === 2 ? "tab-pane fade show active" : "tab-pane fade"}
                          id="ad-info"
                          role="tabpanel"
                          aria-labelledby="ad-info-tab"
                        >
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header border-0 align-items-center">
                              <h3 className="card-label mb-0 font-weight-bold text-body">
                                Advance Information
                              </h3>
                            </div>
                            <div className="card-body">
                              <form>
                                <div className="form-group row">
                                  <div className="col-md-6">
                                    <div className="switch-h d-flex justify-content-between align-items-center border p-2 mb-3">
                                      <h4 className="font-size-h4 text-dark mb-0">
                                        In Active
                                      </h4>
                                      <div className="custom-control switch custom-switch-info custom-switch custom-control-inline mr-0">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          defaultChecked=""
                                          id="customSwitchcolor445"
                                        />
                                        <label
                                          className="custom-control-label mr-1"
                                          htmlFor="customSwitchcolor445"
                                        ></label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="switch-h d-flex justify-content-between align-items-center border p-2 mb-3">
                                      <h4 className="font-size-h4 text-dark mb-0">
                                        Is Feature
                                      </h4>
                                      <div className="custom-control switch custom-switch-info custom-switch custom-control-inline mr-0">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          defaultChecked=""
                                          id="features"
                                        />
                                        <label
                                          className="custom-control-label mr-1"
                                          htmlFor="features"
                                        ></label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <label>Units</label>
                                    <fieldset className="form-group mb-3">
                                      <select
                                        className="js-example-basic-single js-states form-control bg-transparent"
                                        name="state"
                                      >
                                        <option selected="AL">Alabama</option>

                                        <option selected="WY">Wyoming</option>
                                      </select>
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6">
                                    <label>Product Weight</label>
                                    <fieldset className="form-group mb-3">
                                      <input
                                        type="text"
                                        id="weight"
                                        className="form-control round bg-transparent text-dark"
                                        placeholder="Enter Weight"
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6">
                                    <label>Minimum Order</label>
                                    <fieldset className="form-group mb-3">
                                      <input
                                        type="text"
                                        id="type"
                                        className="form-control round bg-transparent text-dark"
                                        placeholder="Type Here"
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6">
                                    <label>Maximum Order</label>
                                    <fieldset className="form-group mb-3">
                                      <input
                                        type="text"
                                        id="type-max"
                                        className="form-control round bg-transparent text-dark"
                                        placeholder="Type Here"
                                      />
                                    </fieldset>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                              <a
                                data-toggle="pill"
                                href="#info"
                                className="btn btn-dark swipe-to-top cta "
                              >
                                Back
                              </a>
                              <a
                                data-toggle="pill"
                                href="#pricing"
                                className="btn btn-primary swipe-to-top cta ml-2"
                              >
                                Continue
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className={tabsContent === 3 ? "tab-pane fade status-tab-style show active" : "tab-pane fade status-tab-style"}
                          id="pricing"
                          role="tabpanel"
                          aria-labelledby="pricing-tab"
                        >
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header border-0 align-items-center">
                              <h3 className="card-label mb-0 font-weight-bold text-body">
                                Pricing
                              </h3>
                            </div>
                            <div className="card-body">
                              <form>
                                <div className="form-group row">
                                  <div className="col-md-6">
                                    <label>Price</label>
                                    <fieldset className="form-group mb-3">
                                      <input
                                        type="text"
                                        id="weight1"
                                        className="form-control round bg-transparent text-dark"
                                        placeholder="Enter Price"
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6">
                                    <label>Discount</label>
                                    <fieldset className="form-group mb-3">
                                      <input
                                        type="text"
                                        id="type2"
                                        className="form-control round bg-transparent text-dark"
                                        placeholder="Enter Discount"
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6">
                                    <label>Flash</label>
                                    <div className="switch-h d-flex justify-content-between align-items-center border p-2 mb-3">
                                      <h4 className="font-size-h4 text-dark mb-0">
                                        Flash Sale
                                      </h4>
                                      <div className="custom-control switch custom-switch-info custom-switch custom-control-inline mr-0">
                                        <input
                                          type="checkbox"
                                          className="custom-control-input"
                                          defaultChecked=""
                                          id="flash"
                                        />
                                        <label
                                          className="custom-control-label mr-1"
                                          htmlFor="flash"
                                        ></label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <label>Units</label>
                                    <fieldset className="form-group mb-3">
                                      <select
                                        className="js-example-basic-single js-states form-control bg-transparent"
                                        name="state"
                                      >
                                        <option selected="AL">Alabama</option>

                                        <option selected="WY">Wyoming</option>
                                      </select>
                                    </fieldset>
                                  </div>
                                  <div className="col-12">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>Product Type</label>
                                        <fieldset className="form-group mb-3">
                                          <select
                                            className="js-example-basic-single js-states form-control bg-transparent"
                                            name="state"
                                          >
                                            <option selected="AL">
                                              Alabama
                                            </option>

                                            <option selected="WY">
                                              Wyoming
                                            </option>
                                          </select>
                                        </fieldset>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>Select</label>
                                        <fieldset className="form-group mb-3 d-flex">
                                          <select
                                            id="slc"
                                            className="js-Select js-states form-control bg-transparent"
                                            name="state"
                                          >
                                            <option selected="Color">
                                              Color
                                            </option>

                                            <option selected="Size">
                                              Size
                                            </option>
                                          </select>
                                          <a
                                            href="#!"
                                            className="btn-secondary btn ml-2 white pt-1 pb-1"
                                          >
                                            ADD
                                          </a>
                                        </fieldset>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="row">
                                      <div
                                        id="Size"
                                        className="col-md-6 selected-input"
                                        style={{ display: "none" }}
                                      >
                                        <div className="bg-light p-2 d-flex align-items-center  position-relative mb-3">
                                          <label className="mr-3 mb-0">
                                            Size
                                          </label>

                                          <fieldset className="form-group w-100 mb-0">
                                            <select
                                              className="js-size-multiple js-states form-control"
                                              id="sizeSelect"
                                              name="states[]"
                                              multiple="multiple"
                                            >
                                              <option selected="Xl">Xl</option>

                                              <option selected="Sm">Sm</option>
                                              <option selected="Lg">Lg</option>
                                            </select>
                                          </fieldset>
                                          <a
                                            href="#!"
                                            id="remove-s"
                                            className="remove-icon"
                                          >
                                            <svg
                                              width="15px"
                                              height="15px"
                                              viewBox="0 0 16 16"
                                              className="bi bi-x-octagon"
                                              fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"
                                              />
                                              <path
                                                fillRule="evenodd"
                                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                              />
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="row">
                                      <div
                                        id="Color"
                                        className="col-md-6 selected-input"
                                        style={{ display: "none" }}
                                      >
                                        <div className="bg-light p-2 d-flex align-items-center position-relative">
                                          <label className="mr-3 mb-0">
                                            Color
                                          </label>

                                          <fieldset className="form-group w-100 mb-0">
                                            <select
                                              className="js-size-multiple js-states form-control"
                                              id="selectColor"
                                              name="states[]"
                                              multiple="multiple"
                                            >
                                              <option selected="Brown">
                                                Brown
                                              </option>

                                              <option selected="Red">
                                                Red
                                              </option>
                                            </select>
                                          </fieldset>
                                          <a
                                            href="#!"
                                            id="remove-c"
                                            className="remove-icon "
                                          >
                                            <svg
                                              width="15px"
                                              height="15px"
                                              viewBox="0 0 16 16"
                                              className="bi bi-x-octagon"
                                              fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"
                                              />
                                              <path
                                                fillRule="evenodd"
                                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                              />
                                            </svg>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>

                              <table className="table table-bordered">
                                <thead>
                                  <tr className="row m-0 text-center">
                                    <th scope="col" className="col-2">
                                      Color
                                    </th>
                                    <th scope="col" className="col-2">
                                      Size
                                    </th>
                                    <th scope="col" className="col-3">
                                      SKU
                                    </th>
                                    <th scope="col" className="col-2">
                                      Image
                                    </th>
                                    <th scope="col" className="col-3">
                                      Price
                                    </th>
                                  </tr>
                                </thead>
                                <tbody
                                  id="table-show"
                                  style={{ display: "none" }}
                                >
                                  {/* <!-- <tr className="row m-0 text-center">
																<td  className="col-2">Brown</td>
																<td className="col-2">Medium</td>
																<td className="col-3 d-flex justify-content-center">
																	<input type="text" className="form-control w-150px text-center" id="disabledInput" placeholder="Credit Card" disabled="">
																</td>
																<td className="col-2">
																	<img src={slide1} className="h-45px w-45px img-fluid" alt="img">
																</td>
																<td className="col-3 d-flex justify-content-center">
																	<input type="text" className="form-control w-150px text-center" id="disabledInput" placeholder="Credit Card" disabled="">
																</td>
															  </tr>
															  <tr className="row m-0 text-center">
																<td  className="col-2">Red</th>
																<td className="col-2">Large</td>
																<td className="col-3 d-flex justify-content-center">
																	<input type="text" className="form-control w-150px text-center" id="disabledInput" placeholder="Credit Card" disabled="">
																</td>
																<td className="col-2">
																	<img src={slide1} className="h-45px w-45px img-fluid" alt="img">
																</td>
																<td className="col-3 d-flex justify-content-center ">
																	<input type="text" className="form-control w-150px text-center" id="disabledInput" placeholder="Credit Card" disabled="">
																</td>
															  </tr>
															   --> */}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                              <a
                                data-toggle="pill"
                                href="#ad-info"
                                className="btn btn-dark swipe-to-top cta "
                              >
                                Back
                              </a>
                              <a
                                data-toggle="pill"
                                href="#seo"
                                className="btn btn-primary swipe-to-top cta ml-2"
                              >
                                Continue
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className={tabsContent === 4 ? "tab-pane fade show active" : "tab-pane fade"}
                          id="seo"
                          role="tabpanel"
                          aria-labelledby="seo-tab"
                        >
                          <div className="card card-custom gutter-b bg-white border-0">
                            <div className="card-header border-0 align-items-center">
                              <h3 className="card-label mb-0 font-weight-bold text-body">
                                Meta Tags
                              </h3>
                            </div>
                            <div className="card-body">
                              <form>
                                <div className="form-group row">
                                  <div className="col-12">
                                    <label>Meta Title</label>
                                    <fieldset className="form-group mb-3">
                                      <select
                                        className="js-example-basic-single js-states form-control bg-transparent"
                                        name="state"
                                      >
                                        <option selected="AL">Alabama</option>

                                        <option selected="WY">Wyoming</option>
                                      </select>
                                    </fieldset>
                                  </div>
                                  <div className="col-12">
                                    <label>Discription</label>
                                    <fieldset className="form-label-group mb-3">
                                      <textarea
                                        className="border-dark w-100 fixed-size"
                                        id="horizontalTextarea2"
                                        rows="6"
                                        placeholder="Textarea"
                                        style={{ outline: "none" }}
                                      ></textarea>
                                    </fieldset>
                                  </div>
                                  <div className="col-12">
                                    <label>Meta Image</label>
                                    <div className="custom-file">
                                      <input
                                        type="file"
                                        className="custom-file-input"
                                        id="customFile"
                                      />
                                      <label
                                        className="custom-file-label"
                                        htmlFor="customFile"
                                      >
                                        Upload Image
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 d-flex justify-content-end">
                              <a
                                data-toggle="pill"
                                href="#pricing"
                                className="btn btn-dark swipe-to-top cta "
                              >
                                Back
                              </a>
                              <a
                                data-toggle="pill"
                                href="#"
                                className="btn btn-primary swipe-to-top cta ml-2"
                              >
                                Save
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

      <ul className="sticky-toolbar nav flex-column bg-primary">
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
                        selected={false}
                        id="radio-light"
                        defaultChecked=""
                      />
                      Light
                    </label>
                    <label className="btn btn-primary p-2">
                      <input
                        type="radio"
                        name="layoutOptions"
                        selected={false}
                        id="radio-dark"
                      />{" "}
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
      <div
        className="modal fade"
        id="quickViewModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog  modal-xl modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="myModalLabel1">
                Add File Here
              </h3>
              <button
                type="button"
                className="close rounded-pill btn btn-sm btn-icon btn-light btn-hover-primary m-0"
                data-dismiss="modal"
                aria-label="Close"
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
                  ></path>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="media-categories p-0 mb-4">
                <ul
                  className="nav nav-pills justify-content-start  mb-0"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link  btn-light-dark shadow-none active mr-4 mb-4"
                      id="All-tab-center"
                      data-toggle="pill"
                      href="#All-center"
                      role="tab"
                      aria-controls="All-center"
                      aria-selected="true"
                    >
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  btn-light-dark shadow-none mr-4 mb-4"
                      id="general-tab-center"
                      data-toggle="pill"
                      href="#general"
                      role="tab"
                      aria-controls="general"
                      aria-selected={false}
                    >
                      General
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link btn-light-dark shadow-none mr-4 mb-4"
                      id="Fashion-tab-center"
                      data-toggle="pill"
                      href="#Fashion"
                      role="tab"
                      aria-controls="Fashion"
                      aria-selected={false}
                    >
                      Fashion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  btn-light-dark shadow-none mr-4 mb-4"
                      id="grocery-tab-center"
                      data-toggle="pill"
                      href="#grocery"
                      role="tab"
                      aria-controls="grocery"
                      aria-selected={false}
                    >
                      Grocery
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link  btn-light-dark shadow-none mr-4 mb-4"
                      id="Glasses-tab-center"
                      data-toggle="pill"
                      href="#Glasses"
                      role="tab"
                      aria-controls="Glasses"
                      aria-selected={false}
                    >
                      Glasses
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  btn-light-dark shadow-none mr-4 mb-4"
                      id="Flowers-tab-center"
                      data-toggle="pill"
                      href="#Flowers"
                      role="tab"
                      aria-controls="Flowers"
                      aria-selected={false}
                    >
                      Flowers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="All-center"
                  role="tabpanel"
                  aria-labelledby="All-tab-center"
                >
                  <div className="row">
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide1}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide3}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Center}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide1}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide3}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Center}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide1}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide3}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Center}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <nav aria-label="navigation">
                        <div className="pagination d-flex justify-content-end align-items-center">
                          <div className="mr-2 text-dark">
                            (Showing result <span id="numbering">12</span> out
                            of <span id="totalnumber"></span> )
                          </div>
                          <a
                            className="btn btn-secondary white"
                            href="#"
                            id="loadMore"
                          >
                            Load More
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="general"
                  role="tabpanel"
                  aria-labelledby="general-tab-center"
                >
                  <div className="row">
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide3}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Center}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide1}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide3}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Center}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <nav aria-label="navigation">
                        <div className="pagination d-flex justify-content-end align-items-center">
                          <div className="mr-2 text-dark">
                            (Showing result <span id="numbering">12</span> out
                            of <span id="totalnumber"></span> )
                          </div>
                          <a
                            className="btn btn-secondary white"
                            href="#"
                            id="loadMore"
                          >
                            Load More
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Fashion"
                  role="tabpanel"
                  aria-labelledby="Fashion-tab-center"
                >
                  <div className="row">
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide1}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide3}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Center}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <nav aria-label="navigation">
                        <div className="pagination d-flex justify-content-end align-items-center">
                          <div className="mr-2 text-dark">
                            (Showing result <span id="numbering">12</span> out
                            of <span id="totalnumber"></span> )
                          </div>
                          <a
                            className="btn btn-secondary white"
                            href="#"
                            id="loadMore"
                          >
                            Load More
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="grocery"
                  role="tabpanel"
                  aria-labelledby="grocery-tab-center"
                >
                  <div className="row">
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide1}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide3}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Center}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <nav aria-label="navigation">
                        <div className="pagination d-flex justify-content-end align-items-center">
                          <div className="mr-2 text-dark">
                            (Showing result <span id="numbering">12</span> out
                            of <span id="totalnumber"></span> )
                          </div>
                          <a
                            className="btn btn-secondary white"
                            href="#"
                            id="loadMore"
                          >
                            Load More
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Glasses"
                  role="tabpanel"
                  aria-labelledby="Glasses-tab-center"
                >
                  <div className="row">
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide1}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide3}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Center}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <nav aria-label="navigation">
                        <div className="pagination d-flex justify-content-end align-items-center">
                          <div className="mr-2 text-dark">
                            (Showing result <span id="numbering">12</span> out
                            of <span id="totalnumber"></span> )
                          </div>
                          <a
                            className="btn btn-secondary white"
                            href="#"
                            id="loadMore"
                          >
                            Load More
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Flowers"
                  role="tabpanel"
                  aria-labelledby="Flowers-tab-center"
                >
                  <div className="row">
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide1}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={slide3}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner1Right}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Center}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-4">
                      <div className="thumbnail text-center  mb-4">
                        <div className="detail-link"></div>
                        <div className="thumbnail-imges mb-2 ">
                          <a className="img-select d-block" href="#!;">
                            <img
                              className="img-fluid"
                              src={elementBanner2Left}
                              alt="image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <nav aria-label="navigation">
                        <div className="pagination d-flex justify-content-end align-items-center">
                          <div className="mr-2 text-dark">
                            (Showing result <span id="numbering">12</span> out
                            of <span id="totalnumber"></span> )
                          </div>
                          <a
                            className="btn btn-secondary white"
                            href="#"
                            id="loadMore"
                          >
                            Load More
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-dismiss="modal"
              >
                <span className="">Close</span>
              </button>
              <button
                type="button"
                className="btn btn-primary ml-1"
                data-dismiss="modal"
              >
                <span className="">Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;

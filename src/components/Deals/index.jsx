import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import deal01 from "../../images/index-3/deal-01.png";
import deal02 from "../../images/index-3/deal-02.png";
import deal03 from "../../images/index-3/deal-03.png";
import deal04 from "../../images/index-3/deal-04.png";
import deal05 from "../../images/index-3/deal-05.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Deals = ({ setActive }) => {
  const deals = [
    {
      imgUrl: deal01,
      title: "Video Camcorder",
      price: 119,
      salePrice: 182,
    },
    {
      imgUrl: deal02,
      title: "Gaming Laptop Wins10",
      price: 185,
      salePrice: 282,
    },
    {
      imgUrl: deal03,
      title: "CUBOT 4G Smartphone",
      price: 219,
      salePrice: 382,
    },
    {
      imgUrl: deal04,
      title: "Toaster With Two Slices",
      price: 183,
      salePrice: 382,
    },
    {
      imgUrl: deal05,
      title: "Android 8.1 HD Tablet",
      price: 119,
      salePrice: 182,
    },
  ];
  return (
    <div className="tri-banners-content tri-slick pro-content">
      <div className="fullwidth-banner3 pro-content">
        <section className="deal-of-the-day">
          <div className="container">
            <div className="products-area">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                  <div className="pro-heading-title">
                    <h2 className="justify-content-center text-center">
                      DEALS OF THE DAY
                    </h2>
                    <p className="justify-content-center d-flex">
                      Lorem ipsum dolor sit amet, consectetur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="deal-of-the-day-js center-product-style .slider-nav row">
                  <Swiper
                    slidesPerView={"4"}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {deals.map((name, imgUrl) => (
                      <SwiperSlide>
                        <div className=" ">
                          <div className="product">
                            <article>
                              <div className="pro-thumb">
                                <img
                                  className="img-fluid"
                                  src={name.imgUrl}
                                  alt="Product-Image"
                                />
                                <div className="pro-hover-icons">
                                  <div className="icons">
                                    <button className="icon btn-light">
                                      <i className="fas fa-shopping-bag"></i>
                                    </button>
                                    <button
                                      className="icon btn-light"
                                      onClick={() => setActive(true)}
                                    >
                                      <i className="fas fa-eye"></i>
                                    </button>
                                    <button className="btn-light icon">
                                      <i
                                        className="fas fa-align-right"
                                        data-fa-transform="rotate-90"
                                      ></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="pro-info">
                                <div className="pro-heading">
                                  <h3>
                                    <a href="product-page1.html">
                                      {name.title}
                                    </a>
                                  </h3>
                                  <div className="pro-price">
                                    <ins>
                                      {name.price}
                                      <del> {name.salePrice} </del>
                                    </ins>
                                  </div>
                                  <div className="countdown2 pre-timer">
                                    <span className="days"></span>
                                    <span className="hours"></span>
                                    <span className="mintues"></span>
                                    <span className="seconds"></span>
                                  </div>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Deals;

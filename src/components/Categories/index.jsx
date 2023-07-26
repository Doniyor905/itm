import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import cat01 from "../../images/index-3/cat-01.png";
import cat02 from "../../images/index-3/cat-02.png";
import cat03 from "../../images/index-3/cat-03.png";
import cat04 from "../../images/index-3/cat-04.png";
import cat05 from "../../images/index-3/cat-05.png";
import cat06 from "../../images/index-3/cat-06.png";
import cat07 from "../../images/index-3/cat-07.png";
import cat08 from "../../images/index-3/cat-08.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Categories = () => {
  return (
    <div className="tri-top-sellers tri-slick pro-content">
      <div className="container">
        <div className="products-area">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <div className="pro-heading-title">
                <h2 className="justify-content-center text-center">
                  OUR CATEGORIES
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
            <div className="our-categories-carousel-js Categories-content .slider-nav row">
              <Swiper
                slidesPerView={"6"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat01}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html">Modern Vr Box</a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat02}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html"> Mobile Stand</a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat03}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html">Smart Watch</a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat04}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html"> Camera Lens</a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat05}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html">Modern Watch</a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat07}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html">Gaming Laptop</a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat06}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html">Apple Airpod </a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat08}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html">Car Charger</a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat01}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html">Modern Vr Box</a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={cat02}
                            alt="Product-Image"
                          />
                        </div>
                        <div className="pro-info">
                          <div className="pro-heading">
                            <h3>
                              <a href="shop-4cols.html"> Mobile Stand</a>
                            </h3>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

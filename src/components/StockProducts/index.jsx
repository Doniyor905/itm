import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import stock01 from "../../images/index-3/stock-01.png";
import stock02 from "../../images/index-3/stock-02.png";
import stock03 from "../../images/index-3/stock-03.png";
import stock04 from "../../images/index-3/stock-04.png";
import stock05 from "../../images/index-3/stock-05.png";
import stock06 from "../../images/index-3/stock-06.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const StockProducts = () => {
  return (
    
    <div className="Stock-clearance-content tri-slick pro-content">
    <div className="fullwidth-banner4 pro-content">
      <section className="deal-of-the-day">
        <div className="container">
          <div className="products-area">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6">
                <div className="pro-heading-title">
                  <h2 className="justify-content-center text-center">
                    STOCK PRODUCTS
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
              <div className="stock-products-js deals .slider-nav row">
              <Swiper
              slidesPerView={"3"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>  <div className="">
                  <figure className="banner-image">
                    <img
                      className="img-fluid"
                      src={stock01}
                      alt="Banner Image"
                    />

                    <div className="banner-caption right-caption">
                      <h3>PlayStation 4 Sony</h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-outline-primary"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </figure>
                </div> 
                <div className="">
                  <figure className="banner-image">
                    <img
                      className="img-fluid"
                      src={stock02}
                      alt="Banner Image"
                    />

                    <div className="banner-caption right-caption">
                      <h3>Gaming Headset Deep Base</h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-outline-primary"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </figure>
                </div></SwiperSlide>
              <SwiperSlide>           <div className="">
                  <figure className="banner-image">
                    <img
                      className="img-fluid"
                      src={stock03}
                      alt="Banner Image"
                    />

                    <div className="banner-caption right-caption">
                      <h3>CUBOT POWER 4G Smartphone</h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-outline-primary"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </figure>
                </div>
                <div className="">
                  <figure className="banner-image">
                    <img
                      className="img-fluid"
                      src={stock04}
                      alt="Banner Image"
                    />

                    <div className="banner-caption right-caption">
                      <h3>Digital Camera Video Record</h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-outline-primary"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </figure>
                </div> </SwiperSlide>
              <SwiperSlide>         <div className="">
                  <figure className="banner-image">
                    <img
                      className="img-fluid"
                      src={stock05}
                      alt="Banner Image"
                    />

                    <div className="banner-caption right-caption">
                      <h3>Rounded Rectangle 9</h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-outline-primary"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </figure>
                </div>
                <div className="">
                  <figure className="banner-image">
                    <img
                      className="img-fluid"
                      src={stock06}
                      alt="Banner Image"
                    />

                    <div className="banner-caption right-caption">
                      <h3>Universal Fast Quick Charge</h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-outline-primary"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </figure>
                </div> </SwiperSlide>
              <SwiperSlide>       <div className="">
                  <figure className="banner-image">
                    <img
                      className="img-fluid"
                      src={stock01}
                      alt="Banner Image"
                    />

                    <div className="banner-caption right-caption">
                      <h3>PlayStation 4 Sony</h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-outline-primary"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </figure>
                </div>
                <div className="">
                  <figure className="banner-image">
                    <img
                      className="img-fluid"
                      src={stock02}
                      alt="Banner Image"
                    />

                    <div className="banner-caption right-caption">
                      <h3>Gaming Headset Deep Base</h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-outline-primary"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </figure>
                </div> </SwiperSlide>
            </Swiper>     
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default StockProducts
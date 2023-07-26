import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Speakers from "../../images/index-3/Speakers.png";
import CamLens from "../../images/index-3/CamLens.png";
import Earphones from "../../images/index-3/Earphones.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const SaleProducts = () => {
  return (
    <div className="tri-Featured-sellers tri-slick pro-content">
      <div className="container">
        <div className="products-area">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <div className="pro-heading-title">
                <h2 className="justify-content-center text-center">
                  ON SALE PRODUCTS
                </h2>
                <p className="justify-content-center d-flex">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="col-12">
          <div className="on-sale-product-js .slider-nav row">
            <Swiper
              slidesPerView={"3"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className=" ">
                  <div className="pro-category-product light-bg">
                    <div className="pro-cate-content">
                      <h3>
                        3D STEREO WIRELESS <strong>SPEAKER</strong>
                      </h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-link"
                        tabIndex="0"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                    <div className="tri-cate-image">
                      <img
                        className="img-fluid"
                        src={Speakers}
                        alt="Banner Image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="pro-category-product light-bg">
                    <div className="pro-cate-content">
                      <h3>
                        3D STEREO WIRELESS <strong>SPEAKER</strong>
                      </h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-link"
                        tabIndex="0"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                    <div className="tri-cate-image">
                      <img
                        className="img-fluid"
                        src={Speakers}
                        alt="Banner Image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="pro-category-product light-bg">
                    <div className="pro-cate-content">
                      <h3>
                        3D STEREO WIRELESS <strong>SPEAKER</strong>
                      </h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-link"
                        tabIndex="0"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                    <div className="tri-cate-image">
                      <img
                        className="img-fluid"
                        src={Speakers}
                        alt="Banner Image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="pro-category-product dark-bg2">
                    <div className="pro-cate-content">
                      <h3>
                        ASSORTED BLACK CAMERA <strong>LENSES</strong>
                      </h3>
                      <div className="pro-price">
                        <ins>
                          $129
                          <del> $142 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-link"
                        tabIndex="0"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                    <div className="tri-cate-image">
                      <img
                        className="img-fluid"
                        src={CamLens}
                        alt="Banner Image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" ">
                  <div className="pro-category-product dark-bg">
                    <div className="pro-cate-content">
                      <h3>
                        3D STEREO WIRELESS <strong>EARPHONE</strong>
                      </h3>
                      <div className="pro-price">
                        <ins>
                          $119
                          <del> $182 </del>
                        </ins>
                      </div>
                      <a
                        href="shop-4cols.html"
                        className="btn btn-link"
                        tabIndex="0"
                      >
                        Shop Now
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                    <div className="tri-cate-image">
                      <img
                        className="img-fluid"
                        src={Earphones}
                        alt="Banner Image"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleProducts;

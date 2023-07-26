import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../../images/about-us/profile1.png";
import profile2 from "../../images/about-us/profile2.png";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="testimonial-content tri-slick pro-content">
      <div className="container">
        <div className="products-area">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              <div className="pro-heading-title">
                <h2 className="justify-content-center text-center">
                  TESTIMONIALS
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
            <div className="testimonial-js testimonial3 .slider-nav row">
              <Swiper
                slidesPerView={"1"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <div className="">
                    <div className="product">
                      <article>
                        <div className="media">
                          <img
                            src={profile1}
                            alt="profile"
                            className="rounded-circle"
                          />
                          <div className="media-body">
                            <h3>John Doe</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit,
                            </p>
                            <div className="pro-rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                            </div>
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
                        <div className="media">
                          <img
                            src={profile2}
                            alt="profile"
                            className="rounded-circle"
                          />
                          <div className="media-body">
                            <h3>Iliener Wise</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit,
                            </p>
                            <div className="pro-rating">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star-half-alt"></i>
                            </div>
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
    </section>
  );
};

export default Testimonial;

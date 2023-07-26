import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "./HeaderBg.scss";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const HeaderBg = () => {
  return (
    <>
      <Swiper pagination={{ clickable: true,}} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="headerBg">
            <div className="container">
              <div className="headerBg__inner">
                <h2>IT materials</h2>
                <h1>
                  Ищите подходящий набор <br />
                  материалов для себя.
                </h1>
                <a className="btn-primary" href="#!">Подробнее</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="headerBg_2">
            <div className="container">
              <div className="headerBg__inner">
                <h2>IT materials</h2>
                <h1>
                  Совершите путешествие <br /> в мир IT вместе с нами
                </h1>
                <a className="btn-primary" href="#!">Подробнее</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeaderBg;

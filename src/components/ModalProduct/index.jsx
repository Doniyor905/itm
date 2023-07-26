import React from "react";
import productImg from "../../images/gallery/preview/Product_image_01.jpg";
import productImg2 from "../../images/gallery/preview/Product_image_02.jpg";
import productImg3 from "../../images/gallery/preview/Product_image_03.jpg";
import productImg4 from "../../images/gallery/preview/Product_image_04.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./ModalProduct.scss";

const ModalProduct = ({ active, setActive }) => {
  const products = [
    {
      imgUrl: productImg,
    },
    {
      imgUrl: productImg2,
    },
    {
      imgUrl: productImg3,
    },
    {
      imgUrl: productImg4,
    },
  ];
  return (
    <>
      <div className={active ? "modalProduct active" : "modalProduct"} onClick={() => setActive(false)}>
      <div className={active ? "modalProduct-dialog modal-lg active" : "modalProduct-dialog modal-lg"} onClick={e => e.stopPropagation()}>
          <div className="modalProduct-content">
            <div className="modalProduct-body">
              <div className="container">
              <button
                type="button"
                className="modalProduct-close"
                onClick={() => setActive(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <Swiper
                        slidesPerView={"1"}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        {products.map((content, imgUrl) => (
                          <SwiperSlide key={imgUrl}>
                            <img
                              className="img-fluid"
                              src={content.imgUrl}
                              alt="image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 pro-description">
                    <div className="row">
                      <div className="col-12 col-md-12">
                        <div className="badges">
                          <div className="badge badge-success">New</div>
                          <div className="badge badge-info">Featured</div>
                          <div className="badge badge-danger">Sale</div>
                          <div className="badge badge-dark">Out Of Stock</div>
                        </div>
                        <h3>Luxerious Bed</h3>

                        <div className="pro-price">
                          <ins>$358</ins>
                          <del>$192</del>
                        </div>
                        <div className="pro-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                          <a href="#review" className="btn-link">
                            2 reviews
                          </a>
                        </div>
                        <div className="pro-info">
                          <div className="pro-single-info">
                            <b>Product ID :</b>
                            <span>1004</span>
                          </div>
                          <div className="pro-single-info">
                            <b>Categroy :</b>
                            <span>
                              <a href="#">Furniture</a>
                            </span>
                          </div>
                          <div className="pro-single-info">
                            <b>Tags :</b>
                            <ul>
                              <li>
                                <a href="#">Beds</a>
                              </li>
                              <li>
                                <a href="#">Chair</a>
                              </li>
                              <li>
                                <a href="#">Sofa</a>
                              </li>
                            </ul>
                          </div>
                          <div className="pro-single-info">
                            <b>Available :</b>
                            <span className="text-secondary">InStock</span>
                          </div>
                          <div className="pro-single-info">
                            <b>Min Order Limit :</b>
                            <span>
                              <a href="#">5</a>
                            </span>
                          </div>
                        </div>

                        <div className="pro-options">
                          <div className="color-option">
                            <b>Color : </b>

                            <ul className="product-model">
                              <li className="active">
                                <a className="green" href=""></a>
                              </li>
                              <li>
                                <a className="red" href=""></a>
                              </li>
                            </ul>
                          </div>
                          <div className="size-option">
                            <b>Size : </b>
                            <ul className="product-model1">
                              <li className="active">
                                <a className="size-select" href="">
                                  XS
                                </a>
                              </li>
                              <li>
                                <a className="size-select" href="">
                                  S
                                </a>
                              </li>
                              <li>
                                <a className="size-select" href="">
                                  M
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="pro-quantiy">
                          <div className="input-group-control">
                            <div className="form-control">10</div>
                            <span className="input-group-btn">
                              <button
                                type="button"
                                defaultValue="quantity1"
                                className="quantity-plus1 btn btn-outline-secondary"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                type="button"
                                defaultValue="quantity1"
                                className="quantity-minus1 btn btn-outline-secondary"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                            </span>
                          </div>

                          <button
                            type="button"
                            className="btn btn-secondary btn-lg"
                          >
                            Add to Cart
                          </button>
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
      {/* <div className="modal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <Swiper
                        slidesPerView={"1"}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        {products.map((content, imgUrl) => (
                          <SwiperSlide key={imgUrl}>
                            <img
                              className="img-fluid"
                              src={content.imgUrl}
                              alt="image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 pro-description">
                    <div className="row">
                      <div className="col-12 col-md-12">
                        <div className="badges">
                          <div className="badge badge-success">New</div>
                          <div className="badge badge-info">Featured</div>
                          <div className="badge badge-danger">Sale</div>
                          <div className="badge badge-dark">Out Of Stock</div>
                        </div>
                        <h3>Luxerious Bed</h3>

                        <div className="pro-price">
                          <ins>$358</ins>
                          <del>$192</del>
                        </div>
                        <div className="pro-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half-alt"></i>
                          <a href="#review" className="btn-link">
                            2 reviews
                          </a>
                        </div>
                        <div className="pro-info">
                          <div className="pro-single-info">
                            <b>Product ID :</b>
                            <span>1004</span>
                          </div>
                          <div className="pro-single-info">
                            <b>Categroy :</b>
                            <span>
                              <a href="#">Furniture</a>
                            </span>
                          </div>
                          <div className="pro-single-info">
                            <b>Tags :</b>
                            <ul>
                              <li>
                                <a href="#">Beds</a>
                              </li>
                              <li>
                                <a href="#">Chair</a>
                              </li>
                              <li>
                                <a href="#">Sofa</a>
                              </li>
                            </ul>
                          </div>
                          <div className="pro-single-info">
                            <b>Available :</b>
                            <span className="text-secondary">InStock</span>
                          </div>
                          <div className="pro-single-info">
                            <b>Min Order Limit :</b>
                            <span>
                              <a href="#">5</a>
                            </span>
                          </div>
                        </div>

                        <div className="pro-options">
                          <div className="color-option">
                            <b>Color : </b>

                            <ul className="product-model">
                              <li className="active">
                                <a className="green" href=""></a>
                              </li>
                              <li>
                                <a className="red" href=""></a>
                              </li>
                            </ul>
                          </div>
                          <div className="size-option">
                            <b>Size : </b>
                            <ul className="product-model1">
                              <li className="active">
                                <a className="size-select" href="">
                                  XS
                                </a>
                              </li>
                              <li>
                                <a className="size-select" href="">
                                  S
                                </a>
                              </li>
                              <li>
                                <a className="size-select" href="">
                                  M
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="pro-quantiy">
                          <div className="input-group-control">
                            <div className="form-control">10</div>
                            <span className="input-group-btn">
                              <button
                                type="button"
                                defaultValue="quantity1"
                                className="quantity-plus1 btn btn-outline-secondary"
                                data-type="plus"
                                data-field=""
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                              <button
                                type="button"
                                defaultValue="quantity1"
                                className="quantity-minus1 btn btn-outline-secondary"
                                data-type="minus"
                                data-field=""
                              >
                                <i className="fas fa-minus"></i>
                              </button>
                            </span>
                          </div>

                          <button
                            type="button"
                            className="btn btn-secondary btn-lg"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ModalProduct;

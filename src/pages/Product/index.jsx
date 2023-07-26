import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../components/Header";
import sliderProductImg1 from "../../images/gallery/preview/Product_image_01.jpg";
import sliderProductImg2 from "../../images/gallery/preview/Product_image_02.jpg";
import sliderProductImg3 from "../../images/gallery/preview/Product_image_03.jpg";
import sliderProductImg4 from "../../images/gallery/preview/Product_image_04.jpg";
import sliderProductImg5 from "../../images/gallery/preview/Product_image_05.jpg";
import productImg1 from "../../images/product_images/product_image_1.jpg";
import productImg2 from "../../images/product_images/product_image_2.jpg";
import productImg3 from "../../images/product_images/product_image_3.jpg";
import productImg4 from "../../images/product_images/product_image_4.jpg";
import productImg5 from "../../images/product_images/product_image_5.jpg";
import productImg6 from "../../images/product_images/product_image_6.jpg";
import productImg7 from "../../images/product_images/product_image_7.jpg";
import productImg8 from "../../images/product_images/product_image_8.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import ModalProduct from "../../components/ModalProduct";

const Product = () => {
  const [modalProductActive, setModalProductActive] = React.useState(false);
  const [productTabs, setProductTabs] = React.useState(1);

  const uptadeProductTabs = (id) => {
    setProductTabs(id)
  }

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="wrapper" style={{ display: "block" }}>
      <Header />
      <div className="container-fuild">
        <div
          className="page-header-no-conent"
          style={{
            backgroundImage: "url('images/miscellaneous/page-header.png')",
          }}
        ></div>
        <nav aria-label="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="index.html">Products</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Bed
              </li>
            </ol>
          </div>
        </nav>
      </div>

      <div className="pro-content page-content product-page product-page-one">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="slider-wrapper">
                <div className="slider-for">
                  <a className="slider-for__item ex1 fancybox-button" href="#!">
                    <img src={sliderProductImg1} alt="Zoom Image" />
                  </a>
                </div>

                <div className="slider-nav"></div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="badges">
                    <div className="badge badge-info">Featured</div>
                    <div className="badge badge-danger">Sale</div>
                    <div className="badge badge-success">New</div>
                    <div className="badge badge-dark">Out Of Stock</div>
                  </div>
                  <h2>Skye Ottoman bed, Light Grey Velvet</h2>

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
                        <a href="#">Rings</a>
                      </span>
                    </div>
                    <div className="pro-single-info">
                      <b>Tags :</b>
                      <ul>
                        <li>
                          <a href="#">bracelets</a>
                        </li>
                        <li>
                          <a href="#">diamond</a>
                        </li>
                        <li>
                          <a href="#">ring</a>
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

                      <ul className="product-page">
                        <li className="active">
                          <a className="green" href="#!"></a>
                        </li>
                        <li>
                          <a className="red" href="#!"></a>
                        </li>
                        <li>
                          <a className="yellow" href="#!"></a>
                        </li>
                      </ul>
                    </div>
                    <div className="size-option">
                      <b>Size : </b>
                      <ul className="product-page1">
                        <li className="active">
                          <a className="size-select" href="#!">
                            XS
                          </a>
                        </li>
                        <li>
                          <a className="size-select" href="#!">
                            S
                          </a>
                        </li>
                        <li>
                          <a className="size-select" href="#!">
                            M
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pro-quantiy">
                    <div className="input-group-control">
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        className="form-control"
                        maxLength="2"
                        defaultValue="10"
                        size="2"
                      />
                      <span className="input-group-btn">
                        <button
                          type="button"
                          defaultValue="quantity"
                          className="quantity-plus btn btn-outline-secondary"
                          data-type="plus"
                          data-field=""
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                        <button
                          type="button"
                          defaultValue="quantity"
                          className="quantity-minus btn btn-outline-secondary"
                          data-type="minus"
                          data-field=""
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                      </span>
                    </div>

                    <button type="button" className="btn btn-secondary btn-lg">
                      Add to Cart
                    </button>
                  </div>
                  <div className="pro-buttons">
                    <button className="btn btn-link">
                      <i className="fas fa-heart"></i>Add to Wishlist
                    </button>
                    <button className="btn btn-link">
                      <i className="fas fa-align-right"></i>Add to Compare
                    </button>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="defaultCheck0"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck0">
                      I agree with the terms and conditions
                    </label>
                    <small
                      id="checkboxHelp"
                      className="form-text text-muted"
                    ></small>
                  </div>
                  <div className="pro-social-share">
                    <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                      <a
                        className="a2a_dd"
                        href="https://www.addtoany.com/share"
                      ></a>
                      <a className="a2a_button_facebook"></a>
                      <a className="a2a_button_twitter"></a>
                      <a className="a2a_button_email"></a>
                    </div>
                    <script
                      async
                      src="https://static.addtoany.com/menu/page.js"
                    ></script>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 discrption-product">
              <div className="nav nav-pills" role="tablist">
                <a
                  className={productTabs === 1 ? "nav-link nav-item active" : "nav-link nav-item"}
                  href="#!"
                  onClick={() => uptadeProductTabs(1)}
                >
                  Description
                </a>
                <a
                  className={productTabs === 2 ? "nav-link nav-item active" : "nav-link nav-item"}
                  href="#!"
                  onClick={() => uptadeProductTabs(2)}
                >
                  Additional information
                </a>
                <a
                  className={productTabs === 3 ? "nav-link nav-item active" : "nav-link nav-item"}
                  href="#!"
                  onClick={() => uptadeProductTabs(3)}
                >
                  Reviews
                </a>
              </div>
              <div className="tab-content">
                <div
                  role="tabpanel"
                  className={productTabs === 1 ? "tab-pane fade active show" : "tab-pane fade"}
                  id="description"
                  aria-labelledby="description-tab"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                  <ul>
                    <li>
                      Pellentesque consectetur lorem gravida lacinia mollis.
                    </li>
                    <li>
                      Phasellus vel nisl consequat, sagittis mi nec, dignissim
                      turpis.
                    </li>
                    <li>Morbi ornare lorem non lacus ultricies fermentum.</li>
                    <li>Mauris aliquam turpis ut orci egestas luctus.</li>
                  </ul>
                </div>
                <div
                  role="tabpanel"
                  className={productTabs === 2 ? "tab-pane fade active show" : "tab-pane fade"}
                  id="additionalInfo"
                  aria-labelledby="additional-info-tab"
                >
                  <table className="table table-striped table-borderless">
                    <tbody>
                      <tr>
                        <th scope="row">Brand Name:</th>
                        <td>lindoMetals</td>
                      </tr>
                      <tr>
                        <th scope="row">Metals Type:</th>
                        <td>Silver</td>
                      </tr>
                      <tr>
                        <th scope="row">Main Stone:</th>
                        <td>Pearl</td>
                      </tr>
                      <tr>
                        <th scope="row">Style:</th>
                        <td>Trendy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  role="tabpanel"
                  className={productTabs === 3 ? "tab-pane fade active show" : "tab-pane fade"}
                  id="review"
                  aria-labelledby="review-tab"
                >
                  <div className="reviews">
                    <div className="review-bubbles">
                      <h2>Customer Reviews</h2>
                      <div className="review-bubble-single">
                        <div className="review-bubble-bg">
                          <div className="pro-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <h4>Good</h4>
                          <span>Sep 20, 2019</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                          </p>
                        </div>
                      </div>
                      <div className="review-bubble-single">
                        <div className="review-bubble-bg">
                          <div className="pro-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                          <h4>NICE WORK!!!</h4>
                          <span>Sep 20, 2019</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="write-review">
                      <h2>Write a Review</h2>
                      <div className="write-review-box">
                        <div className="from-group row mb-3">
                          <div className="col-12">
                            <label htmlFor="inlineFormInputGroup01">Name</label>
                          </div>
                          <div className="input-group col-12">
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroup01"
                              placeholder="Enter Your Name"
                            />
                          </div>
                        </div>
                        <div className="from-group row mb-3">
                          <div className="col-12">
                            <label htmlFor="inlineFormInputGroup1">
                              Email Address
                            </label>
                          </div>
                          <div className="input-group col-12">
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroup1"
                              placeholder="Enter Your Email"
                            />
                          </div>
                        </div>
                        <div className="from-group row mb-3">
                          <div className="col-12">
                            <label htmlFor="inlineFormInputGroup2">
                              Rating
                            </label>
                          </div>
                          <div className="pro-rating  col-12">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                          </div>
                        </div>

                        <div className="from-group row mb-3">
                          <div className="col-12">
                            <label htmlFor="inlineFormInputGroup2">
                              Review Title
                            </label>
                          </div>
                          <div className="input-group col-12">
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroup2"
                              placeholder="Title of Review"
                            />
                          </div>
                        </div>
                        <div className="from-group row mb-3">
                          <div className="col-12">
                            <label htmlFor="inlineFormInputGroup3">
                              Review Body
                            </label>
                          </div>
                          <div className="input-group col-12">
                            <textarea
                              className="form-control"
                              id="inlineFormInputGroup3"
                              placeholder="Write Your Review"
                            ></textarea>
                          </div>
                        </div>
                        <div className="from-group">
                          <button
                            type="button"
                            className="btn btn-secondary swipe-to-top"
                          >
                            Submit
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
        <div className="pro-content">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-md-6">
                <div className="pro-heading-title">
                  <h2> Related Products</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
              </div>
            </div>
            <div className="tab-carousel-js row">
              <Swiper
                slidesPerView={"4"}
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
                            id="myImage"
                            src={productImg1}
                            alt="Product-Image"
                          />

                          <div className="badges">
                            <div className="badge badge-info">Featured</div>
                            <div className="badge badge-danger">Sale</div>
                          </div>

                          <div className="pro-hover-icons">
                            <div className="icons">
                              <button className="btn-light icon ">
                                <i className="fas fa-shopping-bag"></i>
                              </button>
                              <button
                                className="btn-light icon"
                                data-toggle="modal"
                                data-target="#quickViewModal"
                                onClick={() => setModalProductActive(true)}
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
                          <div className="pro-category">Decore, Furniture</div>
                          <h3>
                            <a href="product-page1.html">Modern Single Sofa</a>
                          </h3>

                          <div className="pro-price">
                            <ins>
                              $119
                              <del>$182</del>
                            </ins>

                            <button className="btn-light icon ">
                              <i className="fas fa-heart"></i>
                            </button>
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
                            id="myImage"
                            src={productImg1}
                            alt="Product-Image"
                          />

                          <div className="badges">
                            <div className="badge badge-info">Featured</div>
                            <div className="badge badge-danger">Sale</div>
                          </div>

                          <div className="pro-hover-icons">
                            <div className="icons">
                              <button className="btn-light icon ">
                                <i className="fas fa-shopping-bag"></i>
                              </button>
                              <button
                                className="btn-light icon"
                                data-toggle="modal"
                                data-target="#quickViewModal"
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
                          <div className="pro-category">Decore, Furniture</div>
                          <h3>
                            <a href="product-page1.html">Modern Single Sofa</a>
                          </h3>

                          <div className="pro-price">
                            <ins>
                              $119
                              <del>$182</del>
                            </ins>

                            <button className="btn-light icon ">
                              <i className="fas fa-heart"></i>
                            </button>
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
                            id="myImage"
                            src={productImg1}
                            alt="Product-Image"
                          />

                          <div className="badges">
                            <div className="badge badge-info">Featured</div>
                            <div className="badge badge-danger">Sale</div>
                          </div>

                          <div className="pro-hover-icons">
                            <div className="icons">
                              <button className="btn-light icon ">
                                <i className="fas fa-shopping-bag"></i>
                              </button>
                              <button
                                className="btn-light icon"
                                data-toggle="modal"
                                data-target="#quickViewModal"
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
                          <div className="pro-category">Decore, Furniture</div>
                          <h3>
                            <a href="product-page1.html">Modern Single Sofa</a>
                          </h3>

                          <div className="pro-price">
                            <ins>
                              $119
                              <del>$182</del>
                            </ins>

                            <button className="btn-light icon ">
                              <i className="fas fa-heart"></i>
                            </button>
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
                            id="myImage"
                            src={productImg1}
                            alt="Product-Image"
                          />

                          <div className="badges">
                            <div className="badge badge-info">Featured</div>
                            <div className="badge badge-danger">Sale</div>
                          </div>

                          <div className="pro-hover-icons">
                            <div className="icons">
                              <button className="btn-light icon ">
                                <i className="fas fa-shopping-bag"></i>
                              </button>
                              <button
                                className="btn-light icon"
                                data-toggle="modal"
                                data-target="#quickViewModal"
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
                          <div className="pro-category">Decore, Furniture</div>
                          <h3>
                            <a href="product-page1.html">Modern Single Sofa</a>
                          </h3>

                          <div className="pro-price">
                            <ins>
                              $119
                              <del>$182</del>
                            </ins>

                            <button className="btn-light icon ">
                              <i className="fas fa-heart"></i>
                            </button>
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
                            id="myImage"
                            src={productImg1}
                            alt="Product-Image"
                          />

                          <div className="badges">
                            <div className="badge badge-info">Featured</div>
                            <div className="badge badge-danger">Sale</div>
                          </div>

                          <div className="pro-hover-icons">
                            <div className="icons">
                              <button className="btn-light icon ">
                                <i className="fas fa-shopping-bag"></i>
                              </button>
                              <button
                                className="btn-light icon"
                                data-toggle="modal"
                                data-target="#quickViewModal"
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
                          <div className="pro-category">Decore, Furniture</div>
                          <h3>
                            <a href="product-page1.html">Modern Single Sofa</a>
                          </h3>

                          <div className="pro-price">
                            <ins>
                              $119
                              <del>$182</del>
                            </ins>

                            <button className="btn-light icon ">
                              <i className="fas fa-heart"></i>
                            </button>
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
                            id="myImage"
                            src={productImg1}
                            alt="Product-Image"
                          />

                          <div className="badges">
                            <div className="badge badge-info">Featured</div>
                            <div className="badge badge-danger">Sale</div>
                          </div>

                          <div className="pro-hover-icons">
                            <div className="icons">
                              <button className="btn-light icon ">
                                <i className="fas fa-shopping-bag"></i>
                              </button>
                              <button
                                className="btn-light icon"
                                data-toggle="modal"
                                data-target="#quickViewModal"
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
                          <div className="pro-category">Decore, Furniture</div>
                          <h3>
                            <a href="product-page1.html">Modern Single Sofa</a>
                          </h3>

                          <div className="pro-price">
                            <ins>
                              $119
                              <del>$182</del>
                            </ins>

                            <button className="btn-light icon ">
                              <i className="fas fa-heart"></i>
                            </button>
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
                            id="myImage"
                            src={productImg1}
                            alt="Product-Image"
                          />

                          <div className="badges">
                            <div className="badge badge-info">Featured</div>
                            <div className="badge badge-danger">Sale</div>
                          </div>

                          <div className="pro-hover-icons">
                            <div className="icons">
                              <button className="btn-light icon ">
                                <i className="fas fa-shopping-bag"></i>
                              </button>
                              <button
                                className="btn-light icon"
                                data-toggle="modal"
                                data-target="#quickViewModal"
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
                          <div className="pro-category">Decore, Furniture</div>
                          <h3>
                            <a href="product-page1.html">Modern Single Sofa</a>
                          </h3>

                          <div className="pro-price">
                            <ins>
                              $119
                              <del>$182</del>
                            </ins>

                            <button className="btn-light icon ">
                              <i className="fas fa-heart"></i>
                            </button>
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
                            id="myImage"
                            src={productImg1}
                            alt="Product-Image"
                          />

                          <div className="badges">
                            <div className="badge badge-info">Featured</div>
                            <div className="badge badge-danger">Sale</div>
                          </div>

                          <div className="pro-hover-icons">
                            <div className="icons">
                              <button className="btn-light icon ">
                                <i className="fas fa-shopping-bag"></i>
                              </button>
                              <button
                                className="btn-light icon"
                                data-toggle="modal"
                                data-target="#quickViewModal"
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
                          <div className="pro-category">Decore, Furniture</div>
                          <h3>
                            <a href="product-page1.html">Modern Single Sofa</a>
                          </h3>

                          <div className="pro-price">
                            <ins>
                              $119
                              <del>$182</del>
                            </ins>

                            <button className="btn-light icon ">
                              <i className="fas fa-heart"></i>
                            </button>
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

      <footer id="footerOne" className="footer-area footer-one footer-desktop">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 newsletter">
              <h5>Newsletter</h5>
              <h3>Get Discount 30% OFF</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Aliquam congue urna turpis, id hendrerit risus fringilla quis.
              </p>

              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email..."
                  aria-label="Enter Your Email..."
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="copyright-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <div className="footer-info">
                    ©&nbsp;2019 Company, Inc. <a href="privacy.html">Privacy</a>
                    &nbsp;•&nbsp;<a href="term.html">Terms</a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="socials">
                    <li>
                      <a href="#" className="fab fb fa-facebook-square"></a>
                    </li>
                    <li>
                      <a href="#" className="fab tw fa-twitter-square"></a>
                    </li>
                    <li>
                      <a href="#" className="fab sk fa-skype"></a>
                    </li>
                    <li>
                      <a href="#" className="fab In fa-linkedin"></a>
                    </li>
                    <li>
                      <a href="#" className="fab ig fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ModalProduct active={modalProductActive} setActive={setModalProductActive}/>
    </div>
  );
};

export default Product;

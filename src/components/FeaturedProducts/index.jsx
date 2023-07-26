import React from 'react'
import feat01 from "../../images/index-3/feat-01.png";
import feat02 from "../../images/index-3/feat-02.png";
import feat03 from "../../images/index-3/feat-03.png";
import feat04 from "../../images/index-3/feat-04.png";
import feat05 from "../../images/index-3/feat-05.png";
import feat06 from "../../images/index-3/feat-06.png";
import feat07 from "../../images/index-3/feat-07.png";
import camera from "../../images/index-3/camera.png";

const FeaturedProducts = () => {
  const [tabs, setTabs] = React.useState(1);

  const uptadeTabs = (id) => {
    setTabs(id)
  }
  return (
    <div className="tabs-product-without-carousel productcard-2 tri-slick pro-content">
    <div className="container">
      <div className="products-area">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="pro-heading-title">
              <h2 className="justify-content-center text-center">
                FEATURED PRODUCTS
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
          <div className="nav" role="tablist" id="tabCarousel">
            <a
              className={tabs === 1 ? "nav-link active show": "nav-link"}
              href="#featured"
              onClick={() => uptadeTabs(1)}
            >
              All
            </a>
    
            <a
              className={tabs === 2 ? "nav-link active show": "nav-link"}
              href="#camera-audio"
              onClick={() => uptadeTabs(2)}
            >
              camera and audio
            </a>
            <a
             className={tabs === 3 ? "nav-link active show": "nav-link"}
              href="#computer-laptop"
              onClick={() => uptadeTabs(3)}
            >
              computer and laptop
            </a>
    
            <a
             className={tabs === 4 ? "nav-link active show": "nav-link"}
              href="#mobile-tab"
              onClick={() => uptadeTabs(4)}
            >
              Mobile and tablets
            </a>
          </div>
          <div className="tab-content">
            <div
              role="tabpanel"
              className={tabs === 1 ? "tab-pane fade active show" : "tab-pane fade"}
              id="featured"
            >
              <div className="pre-tabs-content center-product-style row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat01}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Mini Sandwich 1</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat02}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">iPhone 6s</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat03}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Tablet Android</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat04}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Electric Irons</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat05}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Samsung Galaxy</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat06}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="product-page1.html">Game Controller</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat07}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Micro Card Port</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={camera}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Digital Camera</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              className={tabs === 2 ? "tab-pane fade active show" : "tab-pane fade"}
              id="camera-audio"
            >
              <div className="pre-tabs-content center-product-style row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat07}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Port with Micro card2
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={camera}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Mini Digital Camera
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat01}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Mini Sandwich Maker
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat02}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Apple iPhone 6s</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat03}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Tablet PC Android</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat04}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Electric Steam Irons
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat05}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Samsung Galaxy S8 Plus
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat06}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                              Wireless Game Controller
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              className={tabs === 3 ? "tab-pane fade active show" : "tab-pane fade"}
              id="computer-laptop"
            >
              <div className="pre-tabs-content center-product-style row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat03}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Tablet PC Android 3</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
    
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat07}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Port with Micro card
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={camera}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Mini Digital Camera
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat01}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Mini Sandwich Maker
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat02}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Apple iPhone 6s</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
    
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat04}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Electric Steam Irons
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat05}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Samsung Galaxy S8 Plus
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat06}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                              Wireless Game Controller
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div role="tabpanel" className={tabs === 4 ? "tab-pane fade active show" : "tab-pane fade"} id="mobile-tab">
              <div className="pre-tabs-content center-product-style row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat02}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Apple iPhone 6s 4</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat05}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Samsung Galaxy S8 Plus
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat03}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">Tablet PC Android</a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
    
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat04}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Electric Steam Irons
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
    
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat01}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Mini Sandwich Maker
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat06}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                              Wireless Game Controller
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={feat07}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Port with Micro card
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="product">
                    <article>
                      <div className="pro-thumb">
                        <img
                          className="img-fluid"
                          src={camera}
                          alt="Product-Image"
                        />
                        <div className="pro-hover-icons">
                          <div className="icons">
                            <button
                              className="icon btn-light"
                              data-toggle="modal"
                              data-target="#quickViewModal"
                            >
                              <i className="fas fa-eye"></i>
                            </button>
                            <button
                              className="btn-light icon"
        
                            >
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
                            <a href="shop-4cols.html">
                              Mini Digital Camera
                            </a>
                          </h3>
                          <div className="pro-price">
                            <ins>
                              $119
                              <del> $182 </del>
                            </ins>
                          </div>
                          <div className="pro-buttons">
                            <a href="wishlist.html" className="">
                              <i className="far fa-heart"></i> Wishlist
                            </a>
                            <button
                              type="button"
                              className="btn btn-link btn-sm"
                            >
                              <i className="fas fa-shopping-bag"></i> Add to
                              Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default FeaturedProducts
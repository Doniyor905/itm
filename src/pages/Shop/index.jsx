import React from "react";
import Header from "../../components/Header";
import productImg1 from "../../images/product_images/product_image_1.jpg";
import productImg2 from "../../images/product_images/product_image_2.jpg";
import productImg3 from "../../images/product_images/product_image_3.jpg";
import productImg4 from "../../images/product_images/product_image_4.jpg";
import productImg5 from "../../images/product_images/product_image_5.jpg";
import productImg6 from "../../images/product_images/product_image_6.jpg";
import productImg7 from "../../images/product_images/product_image_7.jpg";
import productImg8 from "../../images/product_images/product_image_8.jpg";
import ModalProduct from "../../components/ModalProduct";
// import "../../scss/private/_variables.scss"
// import "../../scss/components/_product.scss"
// import "../../scss/style.scss"

const Shop = () => {
  const [modalProductActive, setModalProductActive] = React.useState(false);
  const [shopFilter, setShopFilter] = React.useState(false);

  const shopFilterToggle = () => {
    setShopFilter(!shopFilter)
  }

  const productList = [
    {
      imgUrl: productImg1,
      title: "Modern Single Sofa",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "Modern Wood Chair",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "White Plastic Chair",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "Black Plastic Chair",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "Yellow Armless Chair",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "White Folding Chair",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "Leather 2-Seat Sofa",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "White Armchair",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "Yellow Armless Chair",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "White Folding Chair",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "Leather 2-Seat Sofa",
      price: "$119",
      salePrice: "$182"
    },
    {
      imgUrl: productImg1,
      title: "White Armchair",
      price: "$119",
      salePrice: "$182"
    },
  ]
  return (
    <div className="wrapper" style={{ display: "block" }}>

      <Header />

      <div className="container-fuild">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url('../../images/miscellaneous/page-header.png')",
          }}
        >
          <div className="container">
            <h1 className="page-title">
              Grid 4 Columns<span>Shop</span>
            </h1>
          </div>
        </div>
        <nav aria-label="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Grid 4 Columns
              </li>
            </ol>
          </div>
        </nav>
      </div>

      <div className="pro-content page-content shop-page shop-page-one">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="toolbar">
                <div className="toolbox">
                  <div className="toolbox-left">
                    <a
                      onClick={() => setShopFilter(!shopFilter)}
                      className="btn fillter-bottom"
                      role="button"
                      aria-expanded={shopFilter === true ? "true" : "false"}
                      aria-controls="collapseExample"
                    >
                      Filters
                    </a>
                    <div className="fillter-right">
                      <nav className="navbar navbar-expand-lg">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarCollapse"
                          aria-controls="navbarCollapse"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <i className="fas fa-bars"></i>
                          <i className="fas fa-times"></i>FILLTERS
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarCollapse"
                        >
                          <div className="row">
                            <div className="col-12 col-md-6">
                              <h3>Product Categories</h3>

                              <div className="product-category">
                                <ul className="unorder-list">
                                  <li className="list-item">
                                    <div className="checkbox">
                                      <label className="active">
                                        <input type="checkbox" value="" />
                                        Option 1
                                      </label>
                                    </div>
                                  </li>
                                  <li className="list-item">
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" value="" />
                                        Option 1
                                      </label>
                                    </div>
                                  </li>
                                  <li className="list-item">
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" value="" />
                                        Option 1
                                      </label>
                                    </div>
                                  </li>
                                  <li className="list-item">
                                    <div className="checkbox">
                                      <label>
                                        <input type="checkbox" value="" />
                                        Option 1
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <h3>Product Price</h3>

                              <div className="price-select">
                                <ul className="unorder-list">
                                  <li className="list-item">
                                    <a className="list-link" href="#">
                                      $10-$100
                                    </a>
                                  </li>
                                  <li className="list-item">
                                    <a className="list-link" href="#">
                                      $10-$1000
                                    </a>
                                  </li>
                                  <li className="list-item">
                                    <a className="list-link" href="#">
                                      $100-$1000
                                    </a>
                                  </li>
                                  <li className="list-item">
                                    <a className="list-link" href="#">
                                      $50-$1000
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <h3>Filter By Color</h3>
                              <div className="color-range">
                                <ul className="unorder-list">
                                  <li className="list-item">
                                    <div className="radio">
                                      <label>
                                        <input type="radio" name="optradio" />
                                        Orange
                                      </label>
                                    </div>
                                  </li>
                                  <li className="list-item">
                                    <div className="radio">
                                      <label>
                                        <input type="radio" name="optradio" />
                                        Red
                                      </label>
                                    </div>
                                  </li>
                                  <li className="list-item">
                                    <div className="radio">
                                      <label>
                                        <input type="radio" name="optradio" />
                                        yellow
                                      </label>
                                    </div>
                                  </li>
                                  <li className="list-item">
                                    <div className="radio">
                                      <label>
                                        <input type="radio" name="optradio" />
                                        Green
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <h3>Popular Tags</h3>
                              <div className="popular-tags">
                                <ul>
                                  <li className="active">
                                    <a href="shop-4cols.html">Nike</a>
                                  </li>
                                  <li>
                                    <a href="shop-4cols.html">Dinner</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="shop-4cols.html">Nike</a>
                                  </li>
                                  <li>
                                    <a href="shop-4cols.html">Nike</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="toolbox-info">
                      Showing <span>12 of 56</span> Products
                    </div>
                  </div>

                  <div className="toolbox-right">
                    <div className="toolbox-sort">
                      <label htmlFor="sortby">Sort by:</label>
                      <div className="select-control">
                        <select
                          name="sortby"
                          id="sortby"
                          className="form-control"
                        >
                          <option value="popularity" defaultValue="selected">
                            Most Popular
                          </option>
                          <option value="rating">Most Rated</option>
                          <option value="date">Date</option>
                        </select>
                      </div>
                    </div>
                    {/* <div className="toolbox-layout">
                              <a href="shop-4cols.html" className="btn-layout active">
                                  <svg width="22" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="4" height="4"></rect>
                                    <rect x="12" y="0" width="4" height="4"></rect>
                                    <rect x="18" y="0" width="4" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="4" height="4"></rect>
                                    <rect x="12" y="6" width="4" height="4"></rect>
                                    <rect x="18" y="6" width="4" height="4"></rect>
                                  </svg>
                                </a>
                                <a href="shop-3cols.html" className="btn-layout">
                                    <svg width="16" height="10">
                                      <rect x="0" y="0" width="4" height="4"></rect>
                                      <rect x="6" y="0" width="4" height="4"></rect>
                                      <rect x="12" y="0" width="4" height="4"></rect>
                                      <rect x="0" y="6" width="4" height="4"></rect>
                                      <rect x="6" y="6" width="4" height="4"></rect>
                                      <rect x="12" y="6" width="4" height="4"></rect>
                                    </svg>
                                  </a>
                                  <a href="shop-2cols.html" className="btn-layout">
                                      <svg width="10" height="10">
                                        <rect x="0" y="0" width="4" height="4"></rect>
                                        <rect x="6" y="0" width="4" height="4"></rect>
                                        <rect x="0" y="6" width="4" height="4"></rect>
                                        <rect x="6" y="6" width="4" height="4"></rect>
                                      </svg>
                                    </a>
                              <a href="shop-list.html" className="btn-layout ">
                                <svg width="16" height="10">
                                  <rect x="0" y="0" width="4" height="4"></rect>
                                  <rect x="6" y="0" width="10" height="4"></rect>
                                  <rect x="0" y="6" width="4" height="4"></rect>
                                  <rect x="6" y="6" width="10" height="4"></rect>
                                </svg>
                              </a>
  
                              
  
                              
  
                              
                            </div> */}
                  </div>
                </div>

                <div className={shopFilter === true ? "collapse show" : "collapse"} id="collapseExample">
                  <div className="card card-body">
                    <div className="row">
                      <div className="col-12 col-md-3">
                        <h3>Product Categories</h3>

                        <div className="product-category">
                          <ul className="unorder-list">
                            <li className="list-item">
                              <div className="checkbox">
                                <label className="active">
                                  <input type="checkbox" value="" />
                                  Option 1
                                </label>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" value="" />
                                  Option 1
                                </label>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" value="" />
                                  Option 1
                                </label>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="checkbox">
                                <label>
                                  <input type="checkbox" value="" />
                                  Option 1
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-3">
                        <h3>Product Price</h3>

                        <div className="price-select">
                          <ul className="unorder-list">
                            <li className="list-item">
                              <a className="list-link" href="#">
                                $10-$100
                              </a>
                            </li>
                            <li className="list-item">
                              <a className="list-link" href="#">
                                $10-$1000
                              </a>
                            </li>
                            <li className="list-item">
                              <a className="list-link" href="#">
                                $100-$1000
                              </a>
                            </li>
                            <li className="list-item">
                              <a className="list-link" href="#">
                                $50-$1000
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-3">
                        <h3>Filter By Color</h3>
                        <div className="color-range">
                          <ul className="unorder-list">
                            <li className="list-item">
                              <div className="radio">
                                <label>
                                  <input type="radio" name="optradio" />
                                  Orange
                                </label>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="radio">
                                <label>
                                  <input type="radio" name="optradio" />
                                  Red
                                </label>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="radio">
                                <label>
                                  <input type="radio" name="optradio" />
                                  yellow
                                </label>
                              </div>
                            </li>
                            <li className="list-item">
                              <div className="radio">
                                <label>
                                  <input type="radio" name="optradio" />
                                  Green
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 col-lg-3">
                        <h3>Popular Tags</h3>
                        <div className="popular-tags">
                          <ul>
                            <li className="active">
                              <a href="shop-4cols.html">Nike</a>
                            </li>
                            <li>
                              <a href="shop-4cols.html">Dinner</a>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <a href="shop-4cols.html">Nike</a>
                            </li>
                            <li>
                              <a href="shop-4cols.html">Nike</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="swap" className="productbar">
                <div className="row">
                  {productList.map((name,imgUrl) => (
                    <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                    <div className="product">
                      <article>
                        <div className="pro-thumb">
                          <img
                            className="img-fluid"
                            src={name.imgUrl}
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
                            <a href="product-page1.html">{name.title}</a>
                          </h3>

                          <div className="pro-price">
                            <ins>
                              {name.price}
                              <del>{name.salePrice}</del>
                            </ins>

                            <button className="btn-light icon ">
                              <i className="fas fa-heart"></i>
                            </button>
                          </div>
                          <div className="pro-options">
                            <div className="color-option">
                              <ul className="product1">
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
                              <ul className="product2">
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
                        </div>
                      </article>
                    </div>
                  </div>
                  ))}
                  
                </div>
              </div>

              <nav aria-label="navigation">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a
                      className="page-link page-link-prev"
                      href="#"
                      aria-label="Previous"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Prev
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item-total">of 6</li>
                  <li className="page-item">
                    <a
                      className="page-link page-link-next"
                      href="#"
                      aria-label="Next"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
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

export default Shop;

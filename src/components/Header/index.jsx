import React from "react";
import logo2 from "../../images/logo/it-logo.png";
import home1 from "../../images/miscellaneous/home1.jpg";
import home2 from "../../images/miscellaneous/home2.jpg";
import home3 from "../../images/miscellaneous/home3.jpg";
import home4 from "../../images/miscellaneous/home4.jpg";
import home5 from "../../images/miscellaneous/home5.jpg";
import home6 from "../../images/miscellaneous/home6.jpg";
import home7 from "../../images/miscellaneous/home7.jpg";
import home8 from "../../images/miscellaneous/home8.jpg";
import home9 from "../../images/miscellaneous/home9.jpg";
import home10 from "../../images/miscellaneous/home10.jpg";
import home11 from "../../images/miscellaneous/home11.jpg";
import banner1 from "../../images/banners/banner-1.jpg";
import productImage1 from "../../images/product_images/product_image_1.jpg";
import productImage2 from "../../images/product_images/product_image_2.jpg";
import productImage3 from "../../images/product_images/product_image_3.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [openCate, setOpenCate] = React.useState(false);
  const [openCart, setOpenCart] = React.useState(false);
  return (
    <div>
      <header
        id="headerThree"
        className="header-area header-three header-desktop"
      >
        <div className="header-mini">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-2">
                <div className="logo">
                  <Link to="/">
                    <img className="img-fluid" src={logo2} alt="logo here" />
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-7 justify-content-center d-flex">
                <nav className="navbar navbar-expand-lg">
                  <div className="navbar-collapse">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                          Home
                        </a>
                        <div className="dropdown-menu">
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="index.html">
                              1- Furniture
                              <img src={home1} alt="home-1" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="index-2.html">
                              2- Fashion
                              <img src={home2} alt="home-2" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="index-3.html">
                              3- Electronics
                              <img src={home3} alt="home-3" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="index-4.html">
                              4- Grocery
                              <img src={home4} alt="home-4" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="index-5.html">
                              5- Cosmetics
                              <img src={home5} alt="home-5" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="index-6.html">
                              6- Shoes
                              <img src={home6} alt="home-6" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="index-7.html">
                              7- Glasses
                              <img src={home7} alt="home-7" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="index-8.html">
                              8- Flowers
                              <img src={home8} alt="home-8" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="index-9.html">
                              9- Jewelry
                              <img src={home9} alt="home-9" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a
                              className="dropdown-item"
                              href="vendor-home6.html"
                            >
                              10- MultiProduct
                              <img src={home10} alt="home-10" />
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a
                              className="dropdown-item"
                              href="vendor-home7.html"
                            >
                              11- MultiProduct2
                              <img src={home11} alt="home-11" />
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                          Shop
                        </a>
                        <div className="dropdown-menu mega-menu mega-menu-md row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-4 no-gutters">
                                <ul>
                                  <li className="dropdown-header">
                                    <h5>Shop Pages</h5>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-2cols.html"
                                    >
                                      Shop Grid 2 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-3cols.html"
                                    >
                                      Shop Grid 3 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-4cols.html"
                                    >
                                      Shop Grid 4 Columns
                                    </a>
                                  </li>
                                  <li>
                                    <Link
                                      className="dropdown-item"
                                      to="/shop"
                                    >
                                      Shop Grid 6 Columns
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4 no-gutters">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-fullwidth.html"
                                    >
                                      Shop Full Width
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-infinitescroll.html"
                                    >
                                      Infinite Scroll
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-list.html"
                                    >
                                      Shop List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shoplist-fullwidth.html"
                                    >
                                      Shop List Full
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-sidebar-banner.html"
                                    >
                                      Sidebar & banner
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="shop-rightbar.html"
                                    >
                                      Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4 no-gutters">
                                <ul>
                                  <li className="dropdown-header">
                                    <h5>Account Pages</h5>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="cart-page1.html"
                                    >
                                      Cart Page Layout 1
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="cart-page2.html"
                                    >
                                      Cart Page Layout 2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="wishlist.html"
                                    >
                                      Wishlist
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="checkout.html"
                                    >
                                      Checkout
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="dashboard.html"
                                    >
                                      My Account
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                          Product
                        </a>
                        <div className="dropdown-menu mega-menu mega-menu-md row">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-4 no-gutters">
                                <ul>
                                  <li className="dropdown-header">
                                    <h5>Product Detail Pages</h5>
                                  </li>

                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-page1.html"
                                    >
                                      Left Carousel
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-page2.html"
                                    >
                                      Right Carousel
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-page3.html"
                                    >
                                      Vertical Carousel
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-page4.html"
                                    >
                                      Right Banner
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-page5.html"
                                    >
                                      Best Seller
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4 no-gutters">
                                <ul>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-left-sidebar.html"
                                    >
                                      Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-right-sidebar.html"
                                    >
                                      Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-4-image.html"
                                    >
                                      product 4 image
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-accordian.html"
                                    >
                                      product Accordian
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-tabs.html"
                                    >
                                      product Tabs
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="product-noslide.html"
                                    >
                                      product No Slide
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-md-4 no-gutters">
                                <div className="banner banner-overlay">
                                  <a
                                    href="shop-4cols.html"
                                    className="banner banner-menu"
                                  >
                                    <img src={banner1} alt="Banner" />

                                    <div className="banner-content banner-content-top">
                                      <div className="banner-title">
                                        Last <br />
                                        Chance
                                        <br />
                                        <span>
                                          <strong>Sale</strong>
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                          Elements
                        </a>

                        <div className="dropdown-menu">
                          <div className="dropdown-submenu">
                            <a
                              className="dropdown-item"
                              href="element-products.html"
                            >
                              Product Cards
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a
                              className="dropdown-item"
                              href="element-banner.html"
                            >
                              Banners
                            </a>
                          </div>

                          <div className="dropdown-submenu">
                            <a
                              className="dropdown-item"
                              href="element-blogs.html"
                            >
                              Blog Style
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a
                              className="dropdown-item"
                              href="element-typography.html"
                            >
                              Typography
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a
                              className="dropdown-item"
                              href="element-title.html"
                            >
                              Title
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a
                              className="dropdown-item"
                              href="element-tabs.html"
                            >
                              Tabs
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a
                              className="dropdown-item"
                              href="element-accordions.html"
                            >
                              Accordions
                            </a>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                          Pages
                        </a>

                        <div className="dropdown-menu">
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="404.html">
                              404 Page
                            </a>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="#">
                              About
                            </a>
                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item"
                                href="about-page1.html"
                              >
                                About Page 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="about-page2.html"
                              >
                                About Page 2
                              </a>
                            </div>
                          </div>
                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="#">
                              Contact
                            </a>
                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item"
                                href="contact-page1.html"
                              >
                                Contact Page 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="contact-page2.html"
                              >
                                Contact Page 2
                              </a>
                            </div>
                          </div>

                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="#">
                              Blog
                            </a>
                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item"
                                href="blog-page1.html"
                              >
                                Blog Page 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="blog-page2.html"
                              >
                                Blog Page 2
                              </a>
                              <a
                                className="dropdown-item"
                                href="blog-single-page.html"
                              >
                                Blog Single
                              </a>
                            </div>
                          </div>

                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="#">
                              login
                            </a>
                            <div className="dropdown-menu">
                              <a
                                className="dropdown-item"
                                href="login-page1.html"
                              >
                                login Page 1
                              </a>
                              <a
                                className="dropdown-item"
                                href="login-page2.html"
                              >
                                login Page 2
                              </a>
                            </div>
                          </div>

                          <div className="dropdown-submenu">
                            <a className="dropdown-item" href="signup.html">
                              Signup
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#">
                          Vendor
                        </a>
                        <div className="dropdown-menu mega-menu mega-menu-md row dropdown-menu-right vendorrightmenu">
                          <div className="col-12">
                            <div className="row">
                              <div className="col-md-4 no-gutters">
                                <ul>
                                  <li className="dropdown-header">
                                    <h5>Vendor Home Pages</h5>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendor-home1.html"
                                    >
                                      Vendor Home1
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendor-home2.html"
                                    >
                                      Vendor Home2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendor-home3.html"
                                    >
                                      Vendor Home3
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendor-home4.html"
                                    >
                                      Vendor Home4
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendor-home5.html"
                                    >
                                      Vendor Home5
                                    </a>
                                  </li>
                                  <br />
                                  <li className="dropdown-header">
                                    <h5>Vendor Other Pages</h5>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendor-listing.html"
                                    >
                                      All Vendor Listing
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendor-profile.html"
                                    >
                                      Vendor Profile
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorlogin.html"
                                    >
                                      Vendor Login
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4 no-gutters">
                                <ul>
                                  <li className="dropdown-header">
                                    <h5>Vendor Shop Pages</h5>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshop-2cols.html"
                                    >
                                      Vendor Shop 2 Col
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshop-3cols.html"
                                    >
                                      Vendor Shop 3 Col
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshop-4cols.html"
                                    >
                                      Vendor Shop 4 Col
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshop-6cols.html"
                                    >
                                      Vendor Shop 6 Col
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshop-fullwidth.html"
                                    >
                                      Fullwidth Shop
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshop-list.html"
                                    >
                                      Shop List
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshop-infinitescroll.html"
                                    >
                                      Infinite Scroll
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshoplist-fullwidth.html"
                                    >
                                      Shop List Full
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshop-sidebar-banner.html"
                                    >
                                      Side Bar and Banner
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorshop-infinitescroll.html"
                                    >
                                      Rigth Side Bar
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4 no-gutters">
                                <ul>
                                  <li className="dropdown-header">
                                    <h5>Vendor Product Pages</h5>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-page1.html"
                                    >
                                      Vendor Product 1
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-page2.html"
                                    >
                                      Vendor Product 2
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-page3.html"
                                    >
                                      Vendor Product 3
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-page4.html"
                                    >
                                      Vendor Product 4
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-page5.html"
                                    >
                                      Vendor Product 5
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-left-sidebar.html"
                                    >
                                      Vendor Product 6
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-right-sidebar.html"
                                    >
                                      Vendor Product 7
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-4-image.html"
                                    >
                                      Vendor Product 8
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-accordian.html"
                                    >
                                      Vendor Product 9
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-noslide.html"
                                    >
                                      Vendor Product 10
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="dropdown-item"
                                      href="vendorproduct-tabs.html"
                                    >
                                      Vendor Product 11
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-12 col-md-3">
                <ul className="pro-mini-header-right">
                  <li>
                    <Link to="/login" className="dropdown-toggle list-link" >
                      Login
                    </Link>
                    {/* <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownAccountButton46"
                    >
                      <a className="dropdown-item" href="dashboard.html">
                        Dashboard
                      </a>
                      <a className="dropdown-item" href="wishlist.html">
                        Wishlist&nbsp;(8)
                      </a>
                      <a className="dropdown-item" href="compare.html">
                        Compare&nbsp;(2)
                      </a>
                      <a className="dropdown-item" href="#">
                        Logout
                      </a>
                    </div> */}
                  </li>

                  <li>
                    <Link to="/signup" className="">
                     SignUp
                      <span className="badge badge-primary">2</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-maxi bg-header-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-12 col-lg-3">
                <form className="Categroy-toggle">
                  <button
                    className="btn btn-secondary swipe-to-top dropdown-toggle"
                    type="button"
                    id="headerOneCartButton1"
                    onClick={() => setOpenCate(!openCate)}
                  >
                    ALL CATEGORIES <span className="fas fa-bars"></span>
                  </button>
                  {openCate && (
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="headerOneCartButton1"
                    >
                      <a className="dropdown-item" href="shop-4cols.html">
                        Cell Phones & Accessories
                      </a>
                      <a className="dropdown-item" href="shop-4cols.html">
                        Computers & Accessories
                      </a>
                      <a className="dropdown-item" href="shop-4cols.html">
                        Multimedia Devices
                      </a>
                      <a className="dropdown-item" href="shop-4cols.html">
                        Game Accessories
                      </a>
                      <a className="dropdown-item" href="shop-4cols.html">
                        Smart Electronics
                      </a>
                      <a className="dropdown-item" href="shop-4cols.html">
                        Kitchen Appliances
                      </a>
                      <a className="dropdown-item" href="shop-4cols.html">
                        Office Electronics
                      </a>
                      <a className="dropdown-item" href="shop-4cols.html">
                        Generators
                      </a>
                      <a className="dropdown-item" href="shop-4cols.html">
                        Portable Audio & Video
                      </a>
                      <a className="dropdown-item" href="shop-4cols.html">
                        Camera & Lens
                      </a>
                    </div>
                  )}
                </form>
              </div>

              <div className="col-12 col-sm-6">
                <form className="form-inline">
                  <div className="search-field-module">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Email..."
                        aria-label="Enter Your Email..."
                        aria-describedby="button-addo2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary"
                          type="button"
                          id="button-addo2"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                <ul className="pro-header-right-options">
                  <li className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="headerOneCartButton"
                      onClick={() => setOpenCart(!openCart)}
                    >
                      <span className="cart-left">
                        <i className="fas fa-shopping-bag"></i>
                      </span>

                      <span className="cart-right d-flex align-items-center ml-13">
                        <span className="title-cart">My Cart</span>
                        <span className="badge badge-secondary">2</span>
                      </span>
                    </button>
                    {openCart && <div
                      className="dropdown-menu dropdown-menu-right show"
                      aria-labelledby="headerOneCartButton"
                    >
                      <ul className="shopping-cart-items">
                        <li>
                          <div className="item-thumb">
                            <div className="image">
                              <img
                                className="img-fluid"
                                src={productImage1}
                                alt="Product Image"
                              />
                            </div>
                          </div>
                          <div className="item-detail">
                            <h3>Modern Single Sofa</h3>
                            <div className="item-s">
                              1 x $45.00 <i className="fas fa-trash"></i>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="item-thumb">
                            <div className="image">
                              <img
                                className="img-fluid"
                                src={productImage3}
                                alt="Product Image"
                              />
                            </div>
                          </div>
                          <div className="item-detail">
                            <h3>Modern Wood Chair</h3>
                            <span className="item-s">
                              2 x $90.00 <i className="fas fa-trash"></i>
                            </span>
                          </div>
                        </li>
                        <li>
                          <span className="item-summary">
                            Total&nbsp;:&nbsp;<span>$145.00</span>
                          </span>
                        </li>
                        <li>
                          <a
                            className="btn btn-link btn-block"
                            href="cart-page1.html"
                          >
                            View Cart
                          </a>
                          <a
                            className="btn btn-secondary btn-block swipe-to-top"
                            href="checkout.html"
                          >
                            Checkout
                          </a>
                        </li>
                      </ul>
                    </div>}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header
        id="stickyHeader"
        className="header-area header-sticky d-none bg-sticky-bar"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-xl-2 col-lg-1">
              <div className="logo">
                <a href="index.html">
                  <img className="img-fluid" src={logo2} alt="logo here" />
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xl-6">
              <nav className="navbar navbar-expand-lg">
                <div className="navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Home
                      </a>
                      <div className="dropdown-menu">
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="index.html">
                            1- Furniture
                            <img src={home1} alt="home-1" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="index-2.html">
                            2- Fashion
                            <img src={home2} alt="home-2" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="index-3.html">
                            3- Electronics
                            <img src={home3} alt="home-3" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="index-4.html">
                            4- Grocery
                            <img src={home4} alt="home-4" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="index-5.html">
                            5- Cosmetics
                            <img src={home5} alt="home-5" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="index-6.html">
                            6- Shoes
                            <img src={home6} alt="home-6" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="index-7.html">
                            7- Glasses
                            <img src={home7} alt="home-7" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="index-8.html">
                            8- Flowers
                            <img src={home8} alt="home-8" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="index-9.html">
                            9- Jewelry
                            <img src={home9} alt="home-9" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="vendor-home6.html">
                            10- MultiProduct
                            <img src={home10} alt="home-10" />
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="vendor-home7.html">
                            11- MultiProduct2
                            <img src={home11} alt="home-11" />
                          </a>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Shop
                      </a>
                      <div className="dropdown-menu mega-menu mega-menu-md row">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-md-4 no-gutters">
                              <ul>
                                <li className="dropdown-header">
                                  <h5>Shop Pages</h5>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shop-2cols.html"
                                  >
                                    Shop Grid 2 Columns
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shop-3cols.html"
                                  >
                                    Shop Grid 3 Columns
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shop-4cols.html"
                                  >
                                    Shop Grid 4 Columns
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shop-6cols.html"
                                  >
                                    Shop Grid 6 Columns
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4 no-gutters">
                              <ul>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shop-fullwidth.html"
                                  >
                                    Shop Full Width
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shop-infinitescroll.html"
                                  >
                                    Infinite Scroll
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shop-list.html"
                                  >
                                    Shop List
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shoplist-fullwidth.html"
                                  >
                                    Shop List Full
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shop-sidebar-banner.html"
                                  >
                                    Sidebar & banner
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="shop-rightbar.html"
                                  >
                                    Right Sidebar
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4 no-gutters">
                              <ul>
                                <li className="dropdown-header">
                                  <h5>Account Pages</h5>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="cart-page1.html"
                                  >
                                    Cart Page Layout 1
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="cart-page2.html"
                                  >
                                    Cart Page Layout 2
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="wishlist.html"
                                  >
                                    Wishlist
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="checkout.html"
                                  >
                                    Checkout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="dashboard.html"
                                  >
                                    My Account
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Product
                      </a>
                      <div className="dropdown-menu mega-menu mega-menu-md row">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-md-4 no-gutters">
                              <ul>
                                <li className="dropdown-header">
                                  <h5>Product Detail Pages</h5>
                                </li>

                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-page1.html"
                                  >
                                    Left Carousel
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-page2.html"
                                  >
                                    Right Carousel
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-page3.html"
                                  >
                                    Vertical Carousel
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-page4.html"
                                  >
                                    Right Banner
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-page5.html"
                                  >
                                    Best Seller
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4 no-gutters">
                              <ul>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-left-sidebar.html"
                                  >
                                    Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-right-sidebar.html"
                                  >
                                    Right Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-4-image.html"
                                  >
                                    product 4 image
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-accordian.html"
                                  >
                                    product Accordian
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-tabs.html"
                                  >
                                    product Tabs
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="product-noslide.html"
                                  >
                                    product No Slide
                                  </a>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-4 no-gutters">
                              <div className="banner banner-overlay">
                                <a
                                  href="shop-4cols.html"
                                  className="banner banner-menu"
                                >
                                  <img src={banner1} alt="Banner" />

                                  <div className="banner-content banner-content-top">
                                    <div className="banner-title">
                                      Last <br />
                                      Chance
                                      <br />
                                      <span>
                                        <strong>Sale</strong>
                                      </span>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Elements
                      </a>

                      <div className="dropdown-menu">
                        <div className="dropdown-submenu">
                          <a
                            className="dropdown-item"
                            href="element-products.html"
                          >
                            Product Cards
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a
                            className="dropdown-item"
                            href="element-banner.html"
                          >
                            Banners
                          </a>
                        </div>

                        <div className="dropdown-submenu">
                          <a
                            className="dropdown-item"
                            href="element-blogs.html"
                          >
                            Blog Style
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a
                            className="dropdown-item"
                            href="element-typography.html"
                          >
                            Typography
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a
                            className="dropdown-item"
                            href="element-title.html"
                          >
                            Title
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="element-tabs.html">
                            Tabs
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a
                            className="dropdown-item"
                            href="element-accordions.html"
                          >
                            Accordions
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Pages
                      </a>

                      <div className="dropdown-menu">
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="404.html">
                            404 Page
                          </a>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="#">
                            About
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="about-page1.html"
                            >
                              About Page 1
                            </a>
                            <a
                              className="dropdown-item"
                              href="about-page2.html"
                            >
                              About Page 2
                            </a>
                          </div>
                        </div>
                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="#">
                            Contact
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="contact-page1.html"
                            >
                              Contact Page 1
                            </a>
                            <a
                              className="dropdown-item"
                              href="contact-page2.html"
                            >
                              Contact Page 2
                            </a>
                          </div>
                        </div>

                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="#">
                            Blog
                          </a>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="blog-page1.html">
                              Blog Page 1
                            </a>
                            <a className="dropdown-item" href="blog-page2.html">
                              Blog Page 2
                            </a>
                            <a
                              className="dropdown-item"
                              href="blog-single-page.html"
                            >
                              Blog Single
                            </a>
                          </div>
                        </div>

                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="#">
                            login
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="login-page1.html"
                            >
                              login Page 1
                            </a>
                            <a
                              className="dropdown-item"
                              href="login-page2.html"
                            >
                              login Page 2
                            </a>
                          </div>
                        </div>

                        <div className="dropdown-submenu">
                          <a className="dropdown-item" href="signup.html">
                            Signup
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#">
                        Vendor
                      </a>
                      <div className="dropdown-menu mega-menu mega-menu-md row dropdown-menu-right vendorrightmenu">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-md-4 no-gutters">
                              <ul>
                                <li className="dropdown-header">
                                  <h5>Vendor Home Pages</h5>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendor-home1.html"
                                  >
                                    Vendor Home1
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendor-home2.html"
                                  >
                                    Vendor Home2
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendor-home3.html"
                                  >
                                    Vendor Home3
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendor-home4.html"
                                  >
                                    Vendor Home4
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendor-home5.html"
                                  >
                                    Vendor Home5
                                  </a>
                                </li>
                                <br />
                                <li className="dropdown-header">
                                  <h5>Vendor Other Pages</h5>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendor-listing.html"
                                  >
                                    All Vendor Listing
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendor-profile.html"
                                  >
                                    Vendor Profile
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorlogin.html"
                                  >
                                    Vendor Login
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4 no-gutters">
                              <ul>
                                <li className="dropdown-header">
                                  <h5>Vendor Shop Pages</h5>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshop-2cols.html"
                                  >
                                    Vendor Shop 2 Col
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshop-3cols.html"
                                  >
                                    Vendor Shop 3 Col
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshop-4cols.html"
                                  >
                                    Vendor Shop 4 Col
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshop-6cols.html"
                                  >
                                    Vendor Shop 6 Col
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshop-fullwidth.html"
                                  >
                                    Fullwidth Shop
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshop-list.html"
                                  >
                                    Shop List
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshop-infinitescroll.html"
                                  >
                                    Infinite Scroll
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshoplist-fullwidth.html"
                                  >
                                    Shop List Full
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshop-sidebar-banner.html"
                                  >
                                    Side Bar and Banner
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorshop-infinitescroll.html"
                                  >
                                    Rigth Side Bar
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4 no-gutters">
                              <ul>
                                <li className="dropdown-header">
                                  <h5>Vendor Product Pages</h5>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-page1.html"
                                  >
                                    Vendor Product 1
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-page2.html"
                                  >
                                    Vendor Product 2
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-page3.html"
                                  >
                                    Vendor Product 3
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-page4.html"
                                  >
                                    Vendor Product 4
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-page5.html"
                                  >
                                    Vendor Product 5
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-left-sidebar.html"
                                  >
                                    Vendor Product 6
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-right-sidebar.html"
                                  >
                                    Vendor Product 7
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-4-image.html"
                                  >
                                    Vendor Product 8
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-accordian.html"
                                  >
                                    Vendor Product 9
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-noslide.html"
                                  >
                                    Vendor Product 10
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="vendorproduct-tabs.html"
                                  >
                                    Vendor Product 11
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-end">
              <div className="navbar-lang">
                <ul>
                  <li className="dropdown">
                    <button className="btn dropdown-toggle" type="button">
                      En
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        En
                      </a>
                      <a className="dropdown-item" href="#">
                        Ar
                      </a>
                    </div>
                  </li>
                  <li className="dropdown">
                    <button className="btn dropdown-toggle" type="button">
                      USD
                    </button>

                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        USD
                      </a>
                      <a className="dropdown-item" href="#">
                        AED
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <ul className="pro-header-right-options">
                <li className="dropdown search-field">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownAccountButton34"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownAccountButton34"
                  >
                    <form>
                      <div className="search-field-module">
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroup0"
                          placeholder="Search Products"
                        />
                        <button className="btn" type="submit">
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </li>
                <li className="dropdown profile-tags">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownAccountButton45"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user"></i>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownAccountButton45"
                  >
                    <a className="dropdown-item" href="dashboard.html">
                      Dashboard
                    </a>
                    <a className="dropdown-item" href="wishlist.html">
                      Wishlist&nbsp;(8)
                    </a>
                    <a className="dropdown-item" href="compare.html">
                      Compare&nbsp;(2)
                    </a>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </div>
                </li>
                <li>
                  <a href="wishlist.html" className="btn btn-light">
                    <i className="far fa-heart"></i>
                    <span className="badge badge-secondary">0</span>
                  </a>
                </li>

                <li className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownCartButton18"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge badge-secondary">2</span>
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownCartButton18"
                  >
                    <ul className="shopping-cart-items">
                      <li>
                        <div className="item-thumb">
                          <div className="image">
                            <img
                              className="img-fluid"
                              src={productImage1}
                              alt="Product Image"
                            />
                          </div>
                        </div>
                        <div className="item-detail">
                          <h3>Modern Single Sofa</h3>
                          <div className="item-s">
                            1 x $45.00 <i className="fas fa-trash"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="item-thumb">
                          <div className="image">
                            <img
                              className="img-fluid"
                              src={productImage3}
                              alt="Product Image"
                            />
                          </div>
                        </div>
                        <div className="item-detail">
                          <h3>Modern Wood Chair</h3>
                          <span className="item-s">
                            2 x $90.00 <i className="fas fa-trash"></i>
                          </span>
                        </div>
                      </li>
                      <li>
                        <span className="item-summary">
                          Total&nbsp;:&nbsp;<span>$145.00</span>
                        </span>
                      </li>
                      <li>
                        <a
                          className="btn btn-link btn-block"
                          href="cart-page1.html"
                        >
                          View Cart
                        </a>
                        <a
                          className="btn btn-secondary btn-block"
                          href="checkout.html"
                        >
                          Checkout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <header id="headerMobile" className="header-area header-mobile">
        <div className="header-maxi bg-header-bar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 pr-0 flex-col">
                <div className="navigation-mobile-container">
                  <a href="#!" className="navigation-mobile-toggler">
                    <span className="fas fa-bars"></span>
                  </a>
                  <nav id="navigation-mobile">
                    <div className="logout-main">
                      <div className="welcome">
                        <span>Welcome&nbsp;Guest !</span>
                      </div>
                    </div>

                    <a
                      className="main-manu btn"
                      data-toggle="collapse"
                      href="#homepages"
                      role="button"
                      aria-expanded="false"
                      aria-controls="shoppages"
                    >
                      Home
                    </a>
                    <div
                      className="sub-manu collapse multi-collapse"
                      id="homepages"
                    >
                      <ul className="unorder-list">
                        <li className="">
                          <a href="index.html" className="btn main-manu">
                            1- Furniture
                          </a>
                          <a href="index-2.html" className="btn main-manu">
                            2- Fashion
                          </a>
                          <a href="index-3.html" className="btn main-manu">
                            3- Electronics
                          </a>
                          <a href="index-4.html" className="btn main-manu">
                            4- Grocery
                          </a>
                          <a href="index-5.html" className="btn main-manu">
                            5- Cosmetics
                          </a>
                          <a href="index-6.html" className="btn main-manu">
                            6- Shoes
                          </a>
                          <a href="index-7.html" className="btn main-manu">
                            7- Glasses
                          </a>
                          <a href="index-8.html" className="btn main-manu">
                            8- Flowers
                          </a>
                          <a href="index-9.html" className="btn main-manu">
                            9- Jewelry
                          </a>
                        </li>
                      </ul>
                    </div>

                    <a
                      className="main-manu btn"
                      data-toggle="collapse"
                      href="#shoppages"
                      role="button"
                      aria-expanded="false"
                      aria-controls="shoppages"
                    >
                      Shop
                    </a>
                    <div
                      className="sub-manu collapse multi-collapse"
                      id="shoppages"
                    >
                      <ul className="unorder-list">
                        <li className="">
                          <a href="shop-4cols.html" className="btn main-manu">
                            Shop Grid 4 Columns
                          </a>
                          <a href="shop-3cols.html" className="btn main-manu">
                            Shop Grid 3 Columns
                          </a>
                          <a href="shop-2cols.html" className="btn main-manu">
                            Shop Grid 2 Columns
                          </a>
                          <a href="shop-list.html" className="btn main-manu">
                            shop List
                          </a>
                          <a className="btn main-manu" href="shop-6cols.html">
                            Shop Grid 6 Columns
                          </a>

                          <a
                            className="btn main-manu"
                            href="shop-fullwidth.html"
                          >
                            Full Width
                          </a>
                          <a
                            className="btn main-manu"
                            href="shop-infinitescroll.html"
                          >
                            Infinite Scroll
                          </a>
                          <a className="btn main-manu" href="shop-list.html">
                            Shop List
                          </a>
                          <a
                            className="btn main-manu"
                            href="shoplist-fullwidth.html"
                          >
                            Shop List Full
                          </a>
                          <a
                            className="btn main-manu"
                            href="shop-sidebar-banner.html"
                          >
                            Shop Sidebar & banner
                          </a>
                          <a
                            className="btn main-manu"
                            href="shop-rightbar.html"
                          >
                            Shop Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </div>

                    <a
                      className="main-manu btn"
                      data-toggle="collapse"
                      href="#productpages"
                      role="button"
                      aria-expanded="false"
                      aria-controls="productpages"
                    >
                      Product
                    </a>
                    <div
                      className="sub-manu collapse multi-collapse"
                      id="productpages"
                    >
                      <ul className="unorder-list">
                        <li className="">
                          <a
                            href="product-page1.html"
                            className="btn main-manu"
                          >
                            Left Carousel
                          </a>
                          <a
                            href="product-page2.html"
                            className="btn main-manu"
                          >
                            Right Carousel
                          </a>
                          <a
                            href="product-page3.html"
                            className="btn main-manu"
                          >
                            Vertical Carousel
                          </a>
                          <a
                            href="product-page4.html"
                            className="btn main-manu"
                          >
                            Right Banner
                          </a>
                          <a
                            href="product-page5.html"
                            className="btn main-manu"
                          >
                            Best Seller
                          </a>

                          <a
                            className="btn main-manu"
                            href="product-left-sidebar.html"
                          >
                            Left Sidebar
                          </a>
                          <a
                            className="btn main-manu"
                            href="product-right-sidebar.html"
                          >
                            Right Sidebar
                          </a>
                          <a
                            className="btn main-manu"
                            href="product-4-image.html"
                          >
                            product 4 image
                          </a>
                          <a
                            className="btn main-manu"
                            href="product-accordian.html"
                          >
                            product Accordian
                          </a>
                          <a className="btn main-manu" href="product-tabs.html">
                            product Tabs
                          </a>
                          <a
                            className="btn main-manu"
                            href="product-noslide.html"
                          >
                            product No Slide
                          </a>
                        </li>
                      </ul>
                    </div>

                    <a
                      className="main-manu btn"
                      data-toggle="collapse"
                      href="#Featurespages"
                      role="button"
                      aria-expanded="false"
                      aria-controls="productpages"
                    >
                      Features
                    </a>
                    <div
                      className="sub-manu collapse multi-collapse"
                      id="Featurespages"
                    >
                      <ul className="unorder-list">
                        <li className="">
                          <a
                            className="btn main-manu"
                            href="element-title.html"
                          >
                            Title
                          </a>
                          <a
                            className="btn main-manu"
                            href="element-banner.html"
                          >
                            Collection Banner
                          </a>

                          <a
                            className="btn main-manu"
                            href="element-typography.html"
                          >
                            Typography
                          </a>
                          <a
                            className="btn main-manu"
                            href="element-button.html"
                          >
                            Buttons
                          </a>
                          <a
                            className="btn main-manu"
                            href="element-products.html"
                          >
                            Product Cards
                          </a>
                          <a
                            className="btn main-manu"
                            href="element-blogs.html"
                          >
                            Blog Style
                          </a>
                          <a className="btn main-manu" href="element-tabs.html">
                            Tabs Style
                          </a>
                          <a
                            className="btn main-manu"
                            href="element-accordions.html"
                          >
                            Accordions Style
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      className="main-manu btn"
                      data-toggle="collapse"
                      href="#staticpages"
                      role="button"
                      aria-expanded="false"
                      aria-controls="staticpages"
                    >
                      Pages
                    </a>
                    <div
                      className="sub-manu collapse multi-collapse"
                      id="staticpages"
                    >
                      <ul className="unorder-list">
                        <li className="">
                          <a
                            className="main-manu btn"
                            data-toggle="collapse"
                            href="#staticabout"
                            role="button"
                            aria-expanded="false"
                            aria-controls="staticabout"
                          >
                            About
                          </a>
                          <div
                            className="sub-manu1 collapse multi-collapse"
                            id="staticabout"
                          >
                            <ul className="unorder-list">
                              <li className="">
                                <a
                                  href="about-page1.html"
                                  className="btn main-manu"
                                >
                                  About Page 1
                                </a>
                                <a
                                  href="about-page2.html"
                                  className="btn main-manu"
                                >
                                  About Page 2
                                </a>
                              </li>
                            </ul>
                          </div>

                          <a
                            className="main-manu btn"
                            data-toggle="collapse"
                            href="#staticcontact"
                            role="button"
                            aria-expanded="false"
                            aria-controls="staticcontact"
                          >
                            Contact
                          </a>
                          <div
                            className="sub-manu1 collapse multi-collapse"
                            id="staticcontact"
                          >
                            <ul className="unorder-list">
                              <li className="">
                                <a
                                  href="contact-page1.html"
                                  className="btn main-manu"
                                >
                                  Contact Page 1
                                </a>
                                <a
                                  href="contact-page2.html"
                                  className="btn main-manu"
                                >
                                  Contact Page 2
                                </a>
                              </li>
                            </ul>
                          </div>

                          <a
                            className="main-manu btn"
                            data-toggle="collapse"
                            href="#staticlogin"
                            role="button"
                            aria-expanded="false"
                            aria-controls="staticlogin"
                          >
                            Login
                          </a>
                          <div
                            className="sub-manu1 collapse multi-collapse"
                            id="staticlogin"
                          >
                            <ul className="unorder-list">
                              <li className="">
                                <a
                                  href="login-page1.html"
                                  className="btn main-manu"
                                >
                                  Login Page 1
                                </a>
                                <a
                                  href="login-page2.html"
                                  className="btn main-manu"
                                >
                                  Login Page 2
                                </a>
                              </li>
                            </ul>
                          </div>

                          <a
                            className="main-manu btn"
                            data-toggle="collapse"
                            href="#staticblog"
                            role="button"
                            aria-expanded="false"
                            aria-controls="staticblog"
                          >
                            Blogs
                          </a>
                          <div
                            className="sub-manu1 collapse multi-collapse"
                            id="staticblog"
                          >
                            <ul className="unorder-list">
                              <li className="">
                                <a
                                  href="blog-page1.html"
                                  className="btn main-manu"
                                >
                                  Blog Page 1
                                </a>
                                <a
                                  href="blog-page2.html"
                                  className="btn main-manu"
                                >
                                  Blog Page 2
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="blog-single-page.html"
                                >
                                  Blog Single
                                </a>
                              </li>
                            </ul>
                          </div>

                          <a
                            className="main-manu btn"
                            data-toggle="collapse"
                            href="#staticcart"
                            role="button"
                            aria-expanded="false"
                            aria-controls="staticcart"
                          >
                            Shopping Cart
                          </a>
                          <div
                            className="sub-manu1 collapse multi-collapse"
                            id="staticcart"
                          >
                            <ul className="unorder-list">
                              <li className="">
                                <a
                                  href="cart-page1.html"
                                  className="btn main-manu"
                                >
                                  Cart Page 1
                                </a>
                                <a
                                  href="cart-page2.html"
                                  className="btn main-manu"
                                >
                                  Cart Page 2
                                </a>
                              </li>
                            </ul>
                          </div>

                          <a href="checkout.html" className="main-manu btn">
                            Checkout
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      className="main-manu btn"
                      data-toggle="collapse"
                      href="#vendor"
                      role="button"
                      aria-expanded="false"
                      aria-controls="vendor"
                    >
                      Vendor
                    </a>
                    <div
                      className="sub-manu collapse multi-collapse"
                      id="vendor"
                    >
                      <ul className="unorder-list">
                        <li className="">
                          <a
                            className="main-manu btn"
                            data-toggle="collapse"
                            href="#vendorhome"
                            role="button"
                            aria-expanded="false"
                            aria-controls="vendorhome"
                          >
                            Vendor Homes
                          </a>
                          <div
                            className="sub-manu1 collapse multi-collapse"
                            id="vendorhome"
                          >
                            <ul className="unorder-list">
                              <li className="">
                                <a
                                  href="vendor-home1.html"
                                  className="btn main-manu"
                                >
                                  vendo Home 1
                                </a>
                                <a
                                  href="vendor-home2.html"
                                  className="btn main-manu"
                                >
                                  vendo Home 2
                                </a>
                                <a
                                  href="vendor-home3.html"
                                  className="btn main-manu"
                                >
                                  vendo Home 3
                                </a>
                                <a
                                  href="vendor-home3.html"
                                  className="btn main-manu"
                                >
                                  vendo Home 4
                                </a>
                                <a
                                  href="vendor-home3.html"
                                  className="btn main-manu"
                                >
                                  vendo Home 5
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            className="main-manu btn"
                            data-toggle="collapse"
                            href="#vendorshop"
                            role="button"
                            aria-expanded="false"
                            aria-controls="vendorshop"
                          >
                            Vendor Shop Pages
                          </a>
                          <div
                            className="sub-manu1 collapse multi-collapse"
                            id="vendorshop"
                          >
                            <ul className="unorder-list">
                              <li>
                                <a
                                  className="btn main-manu"
                                  href="vendorshop-2cols.html"
                                >
                                  Vendor Shop 2 Col
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorshop-3cols.html"
                                >
                                  Vendor Shop 3 Col
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorshop-4cols.html"
                                >
                                  Vendor Shop 4 Col
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorshop-6cols.html"
                                >
                                  Vendor Shop 6 Col
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorshop-fullwidth.html"
                                >
                                  Fullwidth Shop
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorshop-list.html"
                                >
                                  Shop List
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorshop-infinitescroll.html"
                                >
                                  Infinite Scroll
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorshoplist-fullwidth.html"
                                >
                                  Shop List Full
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorshop-sidebar-banner.html"
                                >
                                  Side Bar and Banner
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorshop-infinitescroll.html"
                                >
                                  Rigth Side Bar
                                </a>
                              </li>
                            </ul>
                          </div>
                          <a
                            className="main-manu btn"
                            data-toggle="collapse"
                            href="#vendorproduct"
                            role="button"
                            aria-expanded="false"
                            aria-controls="vendorproduct"
                          >
                            Vendor Product Pages
                          </a>
                          <div
                            className="sub-manu1 collapse multi-collapse"
                            id="vendorproduct"
                          >
                            <ul className="unorder-list">
                              <li>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-page1.html"
                                >
                                  Vendor Product 1
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-page2.html"
                                >
                                  Vendor Product 2
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-page3.html"
                                >
                                  Vendor Product 3
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-page4.html"
                                >
                                  Vendor Product 4
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-page5.html"
                                >
                                  Vendor Product 5
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-left-sidebar.html"
                                >
                                  Vendor Product 6
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-right-sidebar.html"
                                >
                                  Vendor Product 7
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-4-image.html"
                                >
                                  Vendor Product 8
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-accordian.html"
                                >
                                  Vendor Product 9
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-noslide.html"
                                >
                                  Vendor Product 10
                                </a>
                                <a
                                  className="btn main-manu"
                                  href="vendorproduct-tabs.html"
                                >
                                  Vendor Product 11
                                </a>
                              </li>
                            </ul>
                          </div>

                          <a
                            href="vendor-listing.html"
                            className="main-manu btn"
                          >
                            All Vendor Listing
                          </a>

                          <a
                            href="vendor-profile.html"
                            className="main-manu btn"
                          >
                            Vendor Profile
                          </a>

                          <a href="vendorlogin.html" className="main-manu btn">
                            Vendor Login
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a href="dashboard.html" className="main-manu btn">
                      My Account
                    </a>
                    <a href="wishlist.html" className="main-manu btn">
                      Wishlist (8)
                    </a>
                    <a href="compare.html" className="main-manu btn">
                      Compare
                    </a>
                    <a href="logiut.html" className="main-manu btn">
                      Logout
                    </a>
                  </nav>
                </div>
                <a href="index.html" className="logo">
                  <img className="img-fluid" src={logo2} alt="logo here" />
                </a>
              </div>

              <div className="col-6 pl-0">
                <ul className="pro-header-right-options">
                  <li>
                    <a href="wishlist.html" className="btn btn-light">
                      <i className="far fa-heart"></i>
                      <span className="badge badge-secondary">0</span>
                    </a>
                  </li>

                  <li className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle"
                      type="button"
                      id="dropdownCartButton2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-shopping-bag"></i>
                      <span className="badge badge-secondary">2</span>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownCartButton2"
                    >
                      <ul className="shopping-cart-items">
                        <li>
                          <div className="item-thumb">
                            <div className="image">
                              <img
                                className="img-fluid"
                                src={productImage1}
                                alt="Product Image"
                              />
                            </div>
                          </div>
                          <div className="item-detail">
                            <h3>Modern Single Sofa</h3>
                            <div className="item-s">
                              1 x $45.00 <i className="fas fa-trash"></i>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="item-thumb">
                            <div className="image">
                              <img
                                className="img-fluid"
                                src={productImage2}
                                alt="Product Image"
                              />
                            </div>
                          </div>
                          <div className="item-detail">
                            <h3>Modern Wood Chair</h3>
                            <span className="item-s">
                              2 x $90.00 <i className="fas fa-trash"></i>
                            </span>
                          </div>
                        </li>
                        <li>
                          <span className="item-summary">
                            Total&nbsp;:&nbsp;<span>$145.00</span>
                          </span>
                        </li>
                        <li>
                          <a
                            className="btn btn-link btn-block"
                            href="cart-page1.html"
                          >
                            View Cart
                          </a>
                          <a
                            className="btn btn-secondary btn-block"
                            href="checkout.html"
                          >
                            Checkout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-navbar bg-menu-bar">
          <div className="container">
            <form className="form-inline">
              <div className="search-field-module">
                <div className="search-field-wrap">
                  <input
                    type="search"
                    placeholder="Search Products..."
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="search item"
                  />
                  <button
                    className="btn btn-secondary swipe-to-top"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Search Products"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

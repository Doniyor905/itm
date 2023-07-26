import React from "react";
import Header from "../../components/Header";
import Categories from "../../components/Categories";
import Deals from "../../components/Deals";
import FeaturedProducts from "../../components/FeaturedProducts";
import SaleProducts from "../../components/SaleProducts";
import StockProducts from "../../components/StockProducts";
import Testimonial from "../../components/Testimonial";
import Footer from "../../components/Footer";
import HeaderBg from "../../components/HeaderBg";
import ModalProduct from "../../components/ModalProduct";

const Home = () => {
  const onThemeDark = (event) => {
    document.body.classList.toggle("dark");
  };
  const [modalProductActive, setModalProductActive] = React.useState(false);
  return (
    <div className="wrapper" style={{ display: "block" }}>
      <Header/>
      <HeaderBg/>
      <Categories/>
      <Deals setActive={setModalProductActive}/>
      <FeaturedProducts/>
      <SaleProducts/>
      <StockProducts/>
      <Testimonial/>
      <Footer/>
      <ModalProduct active={modalProductActive} setActive={setModalProductActive}/>
      <button onClick={onThemeDark} className="switch btn btn-secondary btn-sm" >
      Dark
    </button>
    </div>
  );
};

export default Home;

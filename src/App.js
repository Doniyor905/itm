import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import "./scss/style.scss"
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Admin from './admin';
import CatalogList from './admin/routes/CatalogList';
import AddProducts from './admin/routes/AddProducts';
function App() {
  const [asideBurger, setAsideBurger] = React.useState(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/admin" element={<Admin asideBurger={asideBurger} setAsideBurger={setAsideBurger}/>} />
        <Route path="/admin/catalogList" element={<CatalogList asideBurger={asideBurger} setAsideBurger={setAsideBurger}/>} />
        <Route path="/admin/addProducts" element={<AddProducts asideBurger={asideBurger} setAsideBurger={setAsideBurger}/>} />
      </Routes>
    </div>
  );
}

export default App;

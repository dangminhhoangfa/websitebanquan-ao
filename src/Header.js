import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link to="/ProductList">Sản phẩm</Link>
        <Link to="/cart">Giỏ hàng</Link>
        <Link to="/address">Địa chỉ</Link>
        <Link to="/login">Đăng nhập</Link>
      </nav>
    </header>
  );
};

export default Header;

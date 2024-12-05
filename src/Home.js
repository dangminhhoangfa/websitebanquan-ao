import React from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList.js";

const Home = () => {
  return (
    <div className="home">
      {/* Banner */}
      <div className="banner"></div>

      {/* Bảng săn sale */}
      <div className="sale-board">
        <h2>Săn Sale Cực Hot</h2>
        <table>
          <thead>
            <tr>
              <th>Hình Ảnh</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá Gốc</th>
              <th>Giá Sale</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/alm5001-tan-qjm5055-xnh-6.jpg"
                  alt="Sale 1"
                />
              </td>
              <td>Áo Len Nam Thu Đông Cổ </td>
              <td>399.000đ</td>
              <td>279.300đ</td>
              <td>
                <Link to="/products/1">Xem ngay</Link>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thu-dong-nam-giu-nhiet-co-tron-yody-ATM7004-GHI%20(5).jpg"
                  alt="Sale 2"
                />
              </td>
              <td>Áo Thun Đông Nam Giữ Nhiệt Cổ Tròn</td>
              <td>179.000đ</td>
              <td>161.100đ</td>
              <td>
                <Link to="/products/2">Xem ngay</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sản phẩm ưa chuộng */}
      <h1>Sản phẩm ưa chuộng</h1>
      <div className="home-links">
        <Link to="/products">
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/quan-au-nu-yody-QAN7054-TIT%20(3).jpg"
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <p>Quần Tây Nữ Nano Chun Di Động</p>
        </Link>
        <Link to="/products/1">
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/quan-jeans-nam-yody-QJM7066-XTU%20(3).jpg"
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <p>Quần Jean Nam Slim Fit Wash Vintage</p>
        </Link>
        <Link to="/products/2">
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/quan-short-nam-kaki-QSM7041-TIT%20(1).JPG"
            alt="Product B"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Quần Short Nam Kaki Nam Túi Hộp</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;

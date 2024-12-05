import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Banner sản phẩm */}
      <div className="banner"></div>

      {/* Chi tiết sản phẩm */}
      <div className="product-details">
        <h2>Chi Tiết Sản Phẩm</h2>
        <div className="product-info">
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/quan-jeans-nam-yody-QJM7066-XTU%20(3).jpg"
            alt="Sản phẩm chính"
            style={{ width: "300px", height: "300px" }}
          />
          <div className="details">
            <h3>Quần Jean Nam Slim Fit Wash Vintage</h3>
            <p>
              <strong>Giá: </strong>499.000đ
            </p>
            <p>
              <strong>Mô tả: </strong>Quần Jean với thiết kế slim-fit hiện đại,
              chất liệu vải co giãn thoải mái, phù hợp cho mọi hoạt động.
            </p>
            <button className="add-to-cart">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>

      {/* Gợi ý sản phẩm tương tự */}
      <h2>Sản Phẩm Tương Tự</h2>
      <div className="suggested-products">
        <Link to="/products/1">
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thu-dong-nam-giu-nhiet-co-tron-yody-ATM7004-GHI%20(5).jpg"
            alt="Sản phẩm 1"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Áo Thun Đông Nam Giữ Nhiệt</p>
          <p>179.000đ</p>
        </Link>
        <Link to="/products/2">
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/alm5001-tan-qjm5055-xnh-6.jpg"
            alt="Sản phẩm 2"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Áo Len Nam Thu Đông</p>
          <p>279.300đ</p>
        </Link>
        <Link to="/products/3">
          <img
            src="https://m.yodycdn.com/fit-in/filters:format(webp)/products/quan-au-nu-yody-QAN7054-TIT%20(3).jpg"
            alt="Sản phẩm 3"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Quần Tây Nữ Nano Chun</p>
          <p>399.000đ</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;

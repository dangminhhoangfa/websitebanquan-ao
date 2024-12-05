import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    "Quần Jean Nam Slim Fit Wash Vintage",
    "Áo Thun Đông Nam Giữ Nhiệt",
  ]);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <section id="cart" className="cart">
      <h2>Giỏ Hàng</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Xóa</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cart;

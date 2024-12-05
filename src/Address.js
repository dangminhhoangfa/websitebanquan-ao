import React, { useState } from "react";

const Address = () => {
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Địa chỉ đã được lưu!");
  };

  return (
    <div className="address">
      <h1>Địa Chỉ Giao Hàng</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên:</label>
          <input
            type="text"
            name="name"
            value={address.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Số Điện Thoại:</label>
          <input
            type="text"
            name="phone"
            value={address.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Địa Chỉ:</label>
          <textarea
            name="address"
            value={address.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Lưu Địa Chỉ</button>
      </form>
    </div>
  );
};

export default Address;

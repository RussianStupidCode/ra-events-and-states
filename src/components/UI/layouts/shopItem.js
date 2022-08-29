import React from "react";

const ShopItem = ({ name, price, color, img }) => {
  return (
    <div className="d-flex flex-row w-100 my-1 align-items-center justify-content-between border border-2 shop-item">
      <img src={img} alt={name} className="h-100" />
      <h2>{name}</h2>
      <p>{color}</p>
      <span className="badge bg-warning mx-2 d-flex align-items-center">
        ${price}
      </span>

      <button className="btn btn-warning mx-2">ADD TO CART</button>
    </div>
  );
};

export default ShopItem;

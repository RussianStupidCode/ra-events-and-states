import React from "react";

const ShopCard = ({ name, price, color, img }) => {
  return (
    <div className="d-flex flex-column w-25 shadow-lg m-5 align-items-center">
      <h2>{name}</h2>
      <p>{color}</p>
      <img src={img} alt={name} className="w-75" />
      <div className="d-flex flex-row justify-content-between w-100 my-2">
        <span className="badge bg-warning mx-2 d-flex align-items-center">
          ${price}
        </span>
        <button className="btn btn-warning mx-2">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ShopCard;

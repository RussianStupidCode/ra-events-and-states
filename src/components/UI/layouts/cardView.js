import React from "react";
import ShopCard from "./shopCard";

const CardView = ({ products }) => {
  return (
    <div className="w-100 d-flex flex-row flex-wrap justify-content-between">
      {products.map((product) => (
        <ShopCard key={product.img} {...product} />
      ))}
    </div>
  );
};

export default CardView;

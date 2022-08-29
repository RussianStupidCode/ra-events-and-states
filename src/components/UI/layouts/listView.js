import React from "react";
import ShopItem from "./shopItem";

const ListView = ({ products }) => {
  return (
    <div className="w-100 d-flex flex-row flex-wrap justify-content-between">
      {products.map((product) => (
        <ShopItem key={product.img} {...product} />
      ))}
    </div>
  );
};

export default ListView;

import React, { useState } from "react";
import CardView from "./cardView";
import IconSwitch from "./iconSwitch";
import ListView from "./listView";

const products = [
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg",
  },
  {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg",
  },
  {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg",
  },
  {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg",
  },
];

const Store = () => {
  const icons = ["grid-3x3-gap-fill", "hdd-stack"];

  const [icon, setIcon] = useState(icons[0]);

  const handleSwitch = () => {
    const newIcon = icon === icons[0] ? icons[1] : icons[0];
    setIcon(newIcon);
  };

  return (
    <div className="d-flex flex-column align-items-center my-2 w-100">
      <IconSwitch icon={icon} onSwitch={handleSwitch} />
      {icon === icons[0] && <CardView products={products} />}
      {icon === icons[1] && <ListView products={products} />}
    </div>
  );
};

export default Store;

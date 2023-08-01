import React from "react";
import MapImplement from "../MapImplement/MapImplement";
import "./style.css";

export default function HelloWord() {
  const data = [
    {
      title: "title first",
      price: "$99.99",
      discription: "This is best product",
      butonTag: "view",
    },
    {
      title: "title second",
      price: "$89.99",
      discription: "This is good product",
      butonTag: "view",
    },
  ];

  return (
    <div className="HelloWord">
      <div className="hello_word">Hello Word</div>
      <br></br> <br></br>
      <div className="welcome">Welcome To My 10 React App</div>

      {data.map((i) => (
        <MapImplement title={i.title} price={i.price} discription={i.discription} butonTag={i.butonTag} />
      ))}

    </div>
  );
}

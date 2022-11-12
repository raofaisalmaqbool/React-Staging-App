import React, { useState } from "react";
import "./style.css";


export default function MapImplement(props) {
    const [title, setTitle] = useState(props.title);
    const [price, setPrice] = useState(props.price);
    const [discription, setDiscription] = useState(props.discription);
    const [butonTag, setbutonTage] = useState(props.butonTag);

  return (
    <div className="MapImplement">
      <div className="card">
        <h1>{title}</h1>
        <p className="price">{price}</p>
        <p>{discription}</p>
        <p>
          <button>{butonTag}</button>
        </p>
      </div>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import "./style.css";

export default function ClickEvent() {
  let data0 = "Click Event";
  const [data, setData] = useState(data0);

  // function OnClick(){
  //     data = 'On Click Function Called Successfully.';
  //     alert(data);
  // }

  function OnClick() {
    let data1 = "On Click Function Called Successfully.";
    setData(data1);
    // alert(data1);
  }

  return (
    <div className="ClickEvent">
      <h1>{data}</h1>
      <br />
      <br />
      <button onClick={OnClick}>Click Me</button>
    </div>
  );
}

// import React from 'react'
import React, { useEffect, useState } from "react";

export default function TestGetApi() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://api.bondbeam.com/api/product/").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp.data);
      });
    });
  }, []);
  console.warn(users);
  // console.log(users);
  return (
    <div className="TestGetApi">
      <h1>Test Get Api</h1>
      {
        users.map ((item, i)=>{
          return(
          <div>
            <img src={item.product_image}/>
            <h4>id: {item.id}</h4>
            <h4>discription: {item.product_discription}</h4>
            <h4>price: {item.product_price}</h4>
            <h4>title: {item.product_title}</h4>
            

            </div>)
        })
      }

    </div>
  );
}

import React from 'react'
import './style.css';


export default function ClickEvent() {

    let data = 'Click Event';
    
    function OnClick(){
        data = 'On Click Function Called Successfully.';
        alert(data);
    }

  return (
    <div className='ClickEvent'>
        <h1>{data}</h1>
        <br/><br/>
        <button onClick={OnClick}>Click Me</button>
    </div>
  )
}

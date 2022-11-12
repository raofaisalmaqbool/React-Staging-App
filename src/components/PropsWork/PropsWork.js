import React, { useState } from 'react'
import "./style.css";


export default function PropsWork(props) {
    const [name, setName] = useState(props.name)
    const [email, setEmail] = useState(props.email)

    function OnClick() {
        let data1 = "Name Updated";
        let data2 = 'test@gmail.com Update'
        setName(data1);
        setEmail(data2);
        // alert(data1);
      }

  return (
    <div className='PropsWork'>
        <h1>PropsWork</h1><br/>
        <div className='studentdata'>
            <h3>Student Name: {name}</h3>
            <h3>Student email: {email}</h3>

            <button onClick={OnClick}>Click Me</button>

        </div>
    </div>

  )
}

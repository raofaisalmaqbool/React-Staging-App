import React, { useState, useEffect } from 'react'
import './style.css';


export default function TestPostApi() {
    const [email, setStateEmail] = useState('');
    const [password, setStatePassword] = useState('');

    function userLogin(){
        console.warn(email, password);
        let data = {email, password}

        fetch("http://52.198.220.115/api/user_login/", {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' },
        body: JSON.stringify(data),

    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }


  return (
    <div className='TestPostApi'>

        <h1>Test Post Api</h1>


        <div className="imgcontainer">
            <img id='img123' src="img_avatar2.png" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Your Email" name="email" value={email} onChange={(e)=>{setStateEmail(e.target.value)}} required /> 

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e)=>{setStatePassword(e.target.value)}} required />
                
            <button type="submit" onClick={userLogin}>Login</button>

        </div>


    </div>
  )
}

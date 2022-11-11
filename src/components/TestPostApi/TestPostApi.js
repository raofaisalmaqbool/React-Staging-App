// import React from 'react'
import React, { useState, useEffect } from 'react'
import './style.css';


export default function TestPostApi() {
  return (
    <div className='TestPostApi'>

        <h1>Test Post Api</h1>

        {/* <div class="container">

            <label for="email"><b>Email: </b></label>
            <input type="text" placeholder="Enter Your Email" name="email" required /> <br/>

            <label for="password"><b>Password: </b></label>
            <input type="password" placeholder="Enter Your Password" name="password" required /><br/>

            <button type="submit">Login</button>

        </div> */}
        <div class="imgcontainer">
            <img id='img123' src="img_avatar2.png" alt="Avatar" class="avatar" />
        </div>

        <div class="container">
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Your Email" name="email" required /> 

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />
                
            <button type="submit">Login</button>

        </div>


    </div>
  )
}

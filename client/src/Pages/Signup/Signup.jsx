import React from 'react'
import './Signup.scss'
import logo from '../../Assets/Images/kjm-logo.png'

function Signup() {
  return (
    <div>
       <div id='signupnav'>
            <img src={logo} alt="Logo" id='logoacct'/>
        </div>
        <div id='signuphero'>

        <div id='signupform'>
            <h2>Create an Account</h2>
            <label htmlFor="fullName"></label>
            <input type="text" id='forminput' placeholder='Full Name' name='fullname' /> <br/>
            <input type="text" id='forminput' placeholder='User Name' name='username' /> <br/>
            <input type="email" id='forminput' placeholder='Email Address' name='email' /> <br/>
            <input type="password" id='forminput' placeholder='Password' name='passowrd' /> <br/>
            <button id='signupsubmit'>Submit</button>
        </div>

        </div>
    </div>
  )
}

export default Signup

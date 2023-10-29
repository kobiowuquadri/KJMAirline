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
            <input type="text" id='forminput' placeholder='Full Name' /> <br/>
            <input type="text" id='forminput' placeholder='User Name' /> <br/>
            <input type="email" id='forminput' placeholder='Email Address' /> <br/>
            <input type="password" id='forminput' placeholder='Password' /> <br/>
            <input type="password" id='forminput' placeholder='Confirm Password' /> <br/>
            <button id='signupsubmit'>Submit</button>
        </div>

        </div>
    </div>
  )
}

export default Signup

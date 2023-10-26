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
            <input type="text" id='forminput' placeholder='Full Name' />
            <input type="text" id='forminput' placeholder='User Name' />
            <input type="email" id='forminput' placeholder='Email Address' />
            <input type="password" id='forminput' placeholder='Password' />
            <input type="password" id='forminput' placeholder='Confirm Password' />
            <button id='signupsubmit'>Submit</button>
        </div>

        </div>
    </div>
  )
}

export default Signup

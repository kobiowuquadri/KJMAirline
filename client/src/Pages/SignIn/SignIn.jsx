import React from 'react'
import '../Signup/Signup.scss'
import logo from '../../Assets/Images/kjm-logo.png'

function SignIn() {
  return (
    <div>
       <div id='signupnav'>
            <img src={logo} alt="Logo" id='logoacct'/>
        </div>
        <div id='signuphero'>

        <div id='signupform'>
            <h2>Login to your account</h2>
            <input type="email" id='forminput' placeholder='Email Address' name='email' /> <br/>
            <input type="password" id='forminput' placeholder='Password' name='passowrd' /> <br/>
            <button id='signupsubmit'>Submit</button>
        </div>

        </div>
    </div>
  )
}

export default SignIn
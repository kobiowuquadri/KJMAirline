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

        <form action="">
            <input type="text" />
            <input type="text" />
            <input type="email" />
            <input type="password" />
            <input type="t" />
        </form>

        </div>
    </div>
  )
}

export default Signup

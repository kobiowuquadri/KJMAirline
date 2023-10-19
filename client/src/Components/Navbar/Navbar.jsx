import React from 'react'
import ng from '../../Assets/Images/NG.svg'
import logo from '../../Assets/Images/kl-logo-2022.svg'
import { CgProfile } from 'react-icons/cg'
import { MdDirectionsWalk } from 'react-icons/md'
import './navbar.scss'

function Navbar() {
  return (
    <div>
      <div id='navhero'>
       <div id='navtop'>
           <div>
              <img src={logo} alt="Logo" />
            </div>
            <div id='navtopside'>
                <div id='navtopsidecontent'>
                  <img src={ng} alt="Nigeria flag" id='navtopsideimg' />
                  <p>Nigeria - EN</p>
                </div>
                <div id='navtopsidecontent'>
                  <CgProfile id='navtopsideimg'/>
                  <p>Log in</p>
                </div>
                <div id='navtopsidecontent'>
                  <MdDirectionsWalk id='navtopsideimg'/>
                  <p>Sign Up</p>
                </div>
            </div>
       </div>
       <div id='navbottom'>
          <p>Home</p>
          <p>My Trip</p>
          <p>Check-in</p>
          <p>Information</p>
       </div>
      </div>
    </div>
  )
}

export default Navbar
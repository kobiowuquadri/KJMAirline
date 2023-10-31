import React from 'react'
import ng from '../../Assets/Images/NG.svg'
import logo from '../../Assets/Images/kjm-logo.png'
import { CgProfile } from 'react-icons/cg'
import { MdDirectionsWalk } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
  return (
    <div>
      <div id='navhero'>
       <div id='navtop'>
           <div>
              <img src={logo} alt="Logo" id='logo'/>
            </div>
            <div id='navtopside'>
                <div id='navtopsidecontent'>
                  <img src={ng} alt="Nigeria flag" id='navtopsideimg' />
                  <p>Nigeria - EN</p>
                </div>
                <div id='navtopsidecontent'>
                  <CgProfile id='navtopsideimg'/>
                  <Link to='/login' id='navtoplink'>
                  <p>Log in</p>
                  </Link>
                </div>
                <div id='navtopsidecontent'>
                  <MdDirectionsWalk id='navtopsideimg'/>
                  <Link to='/signup' id='navtoplink'>
                  <p>Sign Up</p>
                  </Link>
                </div>
            </div>
       </div>
       <div id='navbottom'>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to='/mytrip'>
        <p>My Trip</p>
        </Link>
        <Link to='/information'>
        <p>Information</p>
        </Link>
       </div>
      </div>
    </div>
  )
}

export default Navbar
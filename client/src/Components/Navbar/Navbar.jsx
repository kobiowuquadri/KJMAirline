import React from 'react'
import ng from '../../Assets/Images/NG.svg'
import logo from '../../Assets/Images/kjm-logo.png'
import { CgProfile } from 'react-icons/cg'
import { MdDirectionsWalk } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './navbar.scss'

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data upon logout
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div>
     <div id='navhero'>
        <div id='navtop'>
          <div>
            <img src={logo} alt="Logo" id='logo' />
          </div>
          <div id='navtopside'>
            {user ? (
              // Display user's name and logout option if logged in
              <div id='navtopsidecontent'>
                <h1>{user.username}</h1>
                <CgProfile id='navtopsideimg' />
                <button onClick={handleLogout} id='navtoplink'>
                  Logout
                </button>
              </div>
            ) : (
              // Display login and sign up options if not logged in
              <>
                <div id='navtopsidecontent'>
                  <img src={ng} alt="Nigeria flag" id='navtopsideimg' />
                  <p>Nigeria - EN</p>
                </div>
                <div id='navtopsidecontent'>
                  <CgProfile id='navtopsideimg' />
                  <Link to='/login' id='navtoplink'>
                    <p>Log in</p>
                  </Link>
                </div>
                <div id='navtopsidecontent'>
                  <MdDirectionsWalk id='navtopsideimg' />
                  <Link to='/signup' id='navtoplink'>
                    <p>Sign Up</p>
                  </Link>
                </div>
              </>
            )}
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
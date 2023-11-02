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
    <div id="navhero">
    <div id="navtop">
      <div>
        <img src={logo} alt="Logo" id="logo" />
      </div>
      <div id="navtopside">
        {user ? (
          <div id="navtopsidecontent">
            <h1>{user.username}</h1>
            <CgProfile id="navtopsideimg" />
            <button onClick={handleLogout} id="navtoplink">
              Logout
            </button>
          </div>
        ) : (
          <div id="navtopsidecontent">
            <img src={ng} alt="Nigeria flag" id="navtopsideimg" />
            <p>Nigeria - EN</p>
            <CgProfile id="navtopsideimg" />
            <Link to="/login" id="navtoplink">
              <p>Log in</p>
            </Link>
            <MdDirectionsWalk id="navtopsideimg" />
            <Link to="/signup" id="navtoplink">
              <p>Sign Up</p>
            </Link>
          </div>
        )}
      </div>
    </div>
    <div id="navbottom">
      <Link to="/">Home</Link>
      <Link to="/mytrip">My Trip</Link>
      <Link to="/information">Information</Link>
    </div>
  </div>
  )
}

export default Navbar
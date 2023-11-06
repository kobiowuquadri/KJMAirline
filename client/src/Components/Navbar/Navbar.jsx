import React, { useContext } from 'react';
import usa from '../../Assets/Images/usa_logo.png';
import logo from '../../Assets/Images/kjm-logo.png';
import { CgProfile } from 'react-icons/cg';
import { MdDirectionsWalk } from 'react-icons/md';
import { Link} from 'react-router-dom';
import './navbar.scss'
import { AuthContext } from '../../contexts/authContext';

function Navbar() {
  const { isUser, logout } = useContext(AuthContext); // Access the isUser state from the context

  const handleLogout = () => {
    logout()
  }
  return (
    <div id="navhero">
      <div id="navtop">
        <div>
          <img src={logo} alt="Logo" id="logo" />
        </div>
        <div id="navtopside">
          <img src={usa} alt="Nigeria flag" id="navtopsideimg" />
          <p className="pe-4">America - US</p>

          <div id="navtopsidecontent">
            {isUser ? (
              <>
                <p className="pe-4">Welcome, {isUser.username}</p>
                <CgProfile id="navtopsideimg" />
                <button id="navtoplink" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <div id="navtopsidecontent">
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
      </div>
      <div id="navbottom">
        <Link to="/">Home</Link>
        <Link to="/mytrip">My Trip</Link>
        <Link to="/information">Information</Link>
      </div>
    </div>
  );
}

export default Navbar;

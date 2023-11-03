import React from 'react'
import usa from '../../Assets/Images/usa_logo.png'
import logo from '../../Assets/Images/kjm-logo.png'
import { CgProfile } from 'react-icons/cg'
import { MdDirectionsWalk } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './navbar.scss'
import axios from 'axios'

// const handleUsername = async () => {
//   try {
//     const response = await axios.get('https://kjm.zuuroo.com/api/auth/user', {
//       params: {
//         name: name, // Replace 'name' with the actual value you want to send
//         username: username, // Replace 'username' with the actual value you want to send
//       },
//     });

//     // Process the response data
//     console.log(response.data);
//   } catch (error) {
//     // Handle any errors here
//     console.error(error);
//   }
// };


function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login'); 
  };




  return (
    <div id="navhero">
    <div id="navtop">
      <div>
        <img src={logo} alt="Logo" id="logo" />
      </div>
      <div id="navtopside">
       <img src={usa} alt="Nigeria flag" id="navtopsideimg" />
        <p className='pe-4'>America - US</p>
        {user ? (
          <div id="navtopsidecontent">
            <p className='pe-4'>Welcome, {user.username}</p>
            <CgProfile id="navtopsideimg" />
            <button onClick={handleLogout} id="navtoplink">
              Logout
            </button>

          </div>
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
    <div id="navbottom">
      <Link to="/">Home</Link>
      <Link to="/mytrip">My Trip</Link>
      <Link to="/information">Information</Link>
    </div>
  </div>
  )
}

export default Navbar
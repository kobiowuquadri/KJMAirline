import React, { useContext, useState } from 'react'
import usa from '../../Assets/Images/usa_logo.png'
import logo from '../../Assets/Images/kjm-logo.png'
import { CgProfile } from 'react-icons/cg'
import { MdDirectionsWalk } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { AuthContext } from '../../contexts/authContext'
import close_menu_black from '../../Assets/Images/icon-close.svg'
import hamburger from '../../Assets/Images/icon-menu.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaHome } from 'react-icons/fa'
import { FcList } from 'react-icons/fc'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { IoIosInformationCircle } from 'react-icons/io'

function Navbar () {
  const { userDatas, isUser, logout } = useContext(AuthContext)
  let [toggle, updateToggle] = useState(false)

  const handleLogout = () => {
    logout()
  }

  return (
    <>


<div
      id='footer_nav'
        className='shadow-3'
      >
         <Link to={'/'} className='active' >
        <p className='d-flex flex-column gap-0 align-items-center justify-content-center'>
         <FaHome style={{ fontSize: '1.4rem' }} />
          <p style={{ fontSize: '.6rem' }}>Home</p>
        </p>
         </Link>
         <Link to={'/mytrip'} className='active'>
        <p className='d-flex flex-column gap-0 align-items-center justify-content-center'>
         <FcList style={{ fontSize: '1.4rem' }} />
          <p style={{ fontSize: '.6rem' }}>My Trip</p>
        </p>
         </Link>
         <Link to={'/login'} className='active'>
        <p className='d-flex flex-column gap-0 align-items-center justify-content-center text-center'>
         <IoCheckmarkDoneOutline style={{ fontSize: '1.4rem' }} />
          <p style={{ fontSize: '.6rem', textAlign: 'center' }}>Book Flight</p>
        </p>
         </Link>
         <Link to={'/information'} className='active'>
        <p className='d-flex flex-column gap-0 align-items-center justify-content-center'>
         <IoIosInformationCircle style={{ fontSize: '1.4rem' }} />
          <p style={{ fontSize: '.6rem' }}>Information</p>
        </p>
         </Link>
      </div>



      <div id='navcard' className={toggle && 'show'}>
        <img
          id='close'
          onClick={() => updateToggle(false)}
          width={'20px'}
          src={close_menu_black}
          style={{ color: 'white' }}
        ></img>
        <img width={'80px'} src={usa} alt='Nigeria flag' />
        <p className='text-white'>America - US</p>
        <Link to='/' style={{ fontSize: '1rem' }}>
          Home
        </Link>
        <Link to='/mytrip' style={{ fontSize: '1rem' }}>
          My Trip
        </Link>
        <Link to='/information' style={{ fontSize: '1rem' }}>
          Information
        </Link>

        {isUser ? (
          <>
            {userDatas && (
              <p className='text-white'>Welcome, {userDatas.username}</p>
            )}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div>
            <Link to='/login' style={{ fontSize: '1rem' }} id='navtoplink'>
              <p>Log in</p>
            </Link>
            <MdDirectionsWalk id='navtopsideimg' />
            <Link to='/signup' style={{ fontSize: '1rem' }} id='navtoplink'>
              <p>Sign Up</p>
            </Link>
          </div>
        )}
      </div>
      
      <div id='navhero'>
        
        <div id='navtop'>
          <div>
            <img src={logo} alt='Logo' id='logo' />
          </div>
          <div id='navtopside'>
            <img src={usa} alt='Nigeria flag' id='navtopsideimg' />
            <p className='pe-4'>America - US</p>

            <div id='navtopsidecontent'>
              {isUser ? (
                <>
                  {userDatas && (
                    <p className='pe-4'>Welcome, {userDatas.username}</p>
                  )}
                  <CgProfile id='navtopsideimg' />
                  <button id='navtoplink' onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <div id='navtopsidecontent'>
                  <CgProfile id='navtopsideimg' />
                  <Link to='/login' id='navtoplink'>
                    <p>Log in</p>
                  </Link>
                  <MdDirectionsWalk id='navtopsideimg' />
                  <Link to='/signup' id='navtoplink'>
                    <p>Sign Up</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <p id='hamburger' onClick={() => updateToggle(true)}>
            {<RxHamburgerMenu />}
          </p>
        </div>
        <div id='navbottom'>
          <Link to='/'>Home</Link>
          <Link to='/mytrip'>My Trip</Link>
          <Link to='/information'>Information</Link>
        </div>


      </div>

     
    </>
  )
}

export default Navbar

import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Trip.scss'
import { CgProfile } from 'react-icons/cg'
import { MdDirectionsWalk } from 'react-icons/md'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import BookFlightForm from '../../Components/BookFlightForm/BookFlightForm'

function Trip () {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  return (
    <div>
      <Navbar />
      <div id='mytripflex'>
        <div id='mytriphero'>
          <h1>Your Trip</h1>
          {user ? (
           <BookFlightForm/>
          ) : (
            <div>
              <p id='tripmanage'>Log in to view and manage your trip.</p>
              <CgProfile id='inputiconright' />
              <Link to='/login'>
                <input
                  type='text'
                  placeholder='Log in to my account'
                  id='mytripinput'
                />
              </Link>
              <BiChevronRight id='inputiconleft' />
              <Link to='/loginbooking'>
                <p id='tripbooking'>
                  Log in with booking details{' '}
                  <BiChevronRight id='bookingicon' />
                </p>
              </Link>
              <p id='tripaccount'>Don't have an account? </p>
              <p id='tripfree'>Sign up for free and enjoy all benefits.</p>
              <MdDirectionsWalk id='inputiconright' />
              <Link to='/signup'>
                <input
                  type='text'
                  placeholder='Create an account'
                  id='mytripinput'
                />
              </Link>
              <BiChevronRight id='inputiconleft' />
            </div>
          )}
        </div>
        <div>
          <img
            src='https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='plane'
            id='planeimg'
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Trip

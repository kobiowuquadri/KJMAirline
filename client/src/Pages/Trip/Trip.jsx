import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Trip.scss'
import { CgProfile } from 'react-icons/cg'
import { MdDirectionsWalk } from 'react-icons/md'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import BookFlightForm from '../../Components/BookFlightForm/BookFlightForm'
import { AuthContext } from '../../contexts/authContext'
import axios from 'axios'

function Trip () {
  const { isUser, userDatas } = useContext(AuthContext)
  console.log(userDatas)
  const [bookedFlights, setBookedFlights] = useState([])

  const accessToken = localStorage.getItem('accessToken')
  const handleUserBookedFlights = async () => {
    try {
      const response = await axios.get(
        `https://kjm.zuuroo.com/api/get_my_booking/${userDatas.id}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
          }
        }
      )
      console.log(response?.data)
      const { data } = response?.data
      setBookedFlights(data)
    } catch (err) {
      console.log(err?.response?.data)
    }
  }

  useEffect(() => {
    handleUserBookedFlights()
  }, [bookedFlights])

  return (
    <div>
      <Navbar />
      <div id='mytripflex'>
        <div id='mytriphero'>
          <h2 className='w-100 text-center'>Your Trip</h2>
          {isUser ? (
            <>
              <h3>Booked Flight</h3>
              {bookedFlights.map((flight, index) => {
                return (
                  <div key={index}>
                    <p>User ID: {flight.user_id}</p>
                    <p>Arrival Date: {flight.arrival_date}</p>
                    <p>Departure Date{flight.departure_date}</p>
                    <p>From: {flight.from_city}</p>
                    <p>To: {flight.to_city}</p>
                    <p>Passengers: {flight.no_of_passenger}</p>
                    <p>Trip Type: {flight.trip_type}</p>
                    <p>Amount Paid: {flight.amount_paid}</p>
                    <p>Payment ref: {flight.payment_ref}</p>
                    <p>Payment Status: {flight.payment_status}</p>
                    {flight.payment_status === 'pending' && (
                    <Link to={'/payment'} className='d-flex align-items-center text-danger justify-content-center gap-2'>You're yet to make paymnt: <button className='btn btn-danger'>Pay Now</button></Link>
                    )}
                  </div>
                )
              })}
              <Link to={'/bookflight'} className='btn btn-primary p-2 fs-5 m-2'>
                Click to Book a Flight
              </Link>
            </>
          ) : (
            <div>
              <p id='tripmanage'>Log in to view and manage your trip.</p>

              <Link
                to='/login'
                className='d-flex justify-content-around align-items-center p-2'
                id='mytripinput'
              >
                <CgProfile id='inputiconright' />
                <button>Log in to my account</button>
                <BiChevronRight id='inputiconleft' />
              </Link>
              <p id='tripaccount'>Don't have an account? </p>
              <p id='tripfree'>Sign up for free and enjoy all benefits.</p>
              <Link
                to='/signup'
                className='d-flex justify-content-around align-items-center p-2'
                id='mytripinput'
              >
                <MdDirectionsWalk id='inputiconright' />
                <button>Create an account</button>
                <BiChevronRight id='inputiconleft' />
              </Link>
            </div>
          )}
        </div>
        <div id='tripimage'>
          <img
            src='https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='plane'
            id='planeimg'
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Trip

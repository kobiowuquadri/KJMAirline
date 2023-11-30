import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Trip.scss'
import { CgProfile } from 'react-icons/cg'
import { MdDirectionsWalk } from 'react-icons/md'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/authContext'
import axios from 'axios'
import { IoAirplaneSharp } from 'react-icons/io5'


function Trip () {
  const { isUser } = useContext(AuthContext)
  const [bookedFlights, setBookedFlights] = useState([])
  console.log(isUser)

  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken)
  const handleUserBookedFlights = async () => {
    try {
      const response = await axios.get(
        'https://server.kjmairline.com/api/get_my_booking',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`

        }
        }
      )
      console.log(response)
      console.log(response?.data)
      const { data } = response?.data
      setBookedFlights(data)
      console.log(bookedFlights)
    } catch (err) {
      console.log(err?.response?.data)
    }
  }

  useEffect(() => {
    handleUserBookedFlights()
  }, [])

  return (
    <div>
      <Navbar />
      <div id='mytripflex'>
        <div id='mytriphero'>
          <h2 className='w-100 text-center'>Your Trip</h2>
          {isUser ? (
            <>
              <h3 style={{background: '#042d37', color:'white'}} className='p-2'>Booked Flight</h3>
              {bookedFlights.length > 0 ? (
                <div className='row row-cols-lg-2 row-cols-md-1'>
                  {bookedFlights.map((flight, index) => {
                    return (
                      <div key={index} className='bg-white shadow p-3'>
                        <p><b>Arrival Date: </b> {flight.arrival_date}</p>
                        <p><b>Departure Date: </b>{flight.departure_date}</p>
                        <p><b>From: </b> {flight.from_city}</p>
                        <p><b>To: </b> {flight.to_city}</p>
                        <p><b>Passengers: </b> {flight.no_of_passenger}</p>
                        <p><b>Trip Type: </b> {flight.trip_type}</p>
                        <p><b>Amount Paid: </b> {flight.amount_paid}</p>
                        <p><b>Payment ref: </b>{flight.payment_ref}</p>
                        <p><b>Payment Status: </b> {flight.payment_status}</p>
                        <p><b>Class Type: </b> {flight.class_type}</p>
                        {flight.payment_status === 'pending' && (
                          <Link
                            to={'/payment'}
                            className='d-flex align-items-center text-danger justify-content-center gap-2'
                          >
                            If you're yet to make payment:{' '}
                            <button className='btn btn-danger'>Pay Now</button>
                          </Link>
                        )}
                      <hr style={{width:'100%'}} />
                      <hr style={{width:'100%'}} />
                      <hr style={{width:'100%'}} />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <p>No booked flights found.</p>
              )}

              {/* Book chopper and Private jet */}
            <div className='d-flex flex-column justify-content-center align-items-center p-4'>
            <p className='d-flex align-items-center gap-2 btn btn-primary p-3' style={{background: '#042d37'}}>
             <IoAirplaneSharp id='tripbookicon' />
                  <Link
                    to={'chopper'}
                    className='text-white'
                  >
                    Book a Chopper
                  </Link>
                </p>
                <p  className='d-flex align-items-center gap-2 btn btn-primary p-3' style={{background: '#042d37'}}>
                <IoAirplaneSharp id='tripbookicon' />
                  <Link
                    to={'privatejet'}
                    className='text-white'
                  >
                    Book a Private Jet
                  </Link>
                </p>
                <p  className='d-flex align-items-center gap-2 btn btn-primary p-3' style={{background: '#042d37'}}>
                <IoAirplaneSharp id='tripbookicon' />
                  <Link
                    to={'bookflight'}
                    className='text-white'
                  >
                    First Class, Business Class, and Economy Class flights
                  </Link>
                </p>
            </div>
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

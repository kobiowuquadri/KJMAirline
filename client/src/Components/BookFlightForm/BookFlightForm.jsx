import React, { useState, useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import axios from 'axios'
import './bookfight.scss'
import { useNavigate } from 'react-router-dom'

function BookFlightForm () {
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')
  const [travelers, setTravelers] = useState(1)
  const [flightPrice, setFlightPrice] = useState(0)
  const [flightDetails, setFlightDetails] = useState({
    trip_type: '',
    from_city: '',
    to_city: '',
    departure_date: '',
    arrival_date: '',
    no_of_passenger: '',
    amount_paid: ''
  })

  const navigate = useNavigate()
  const options = useMemo(() => countryList().getData(), [])

  const handleFromChange = selectedOption => {
    setFromValue(selectedOption)

    // Update the flightDetails with the selected from_city
    setFlightDetails(prevDetails => ({
      ...prevDetails,
      from_city: selectedOption ? selectedOption.label : ''
    }))
    calculateFlightPrice(
      selectedOption ? selectedOption.label : '',
      toValue ? toValue.label : '',
      travelers,
      flightDetails.trip_type
    )
  }

  const handleToChange = selectedOption => {
    setToValue(selectedOption)

    // Update the flightDetails with the selected to_city
    setFlightDetails(prevDetails => ({
      ...prevDetails,
      to_city: selectedOption ? selectedOption.label : ''
    }))
    calculateFlightPrice(
      fromValue ? fromValue.label : '',
      selectedOption ? selectedOption.label : '',
      travelers,
      flightDetails.trip_type
    )
  }

  const handleTravelersChange = event => {
    const numTravelers = parseInt(event.target.value, 10)
    setTravelers(numTravelers)

    setFlightDetails(prevDetails => ({
      ...prevDetails,
      no_of_passenger: numTravelers.toString()
    }))

    calculateFlightPrice(
      fromValue ? fromValue.label : '',
      toValue ? toValue.label : '',
      numTravelers,
      flightDetails.trip_type
    )
  }

  const calculateFlightPrice = (from, to, numTravelers, tripType) => {
    let price = 500

    if (tripType === 'Round Trip') {
      price *= 2
    } else if (tripType === 'Chopper') {
      price = 1500
    } else if (tripType === 'Private Jet') {
      price = 5000
    }
    if (from === 'USA' && to === 'Canada') {
      price = 300
    } else if (from === 'USA' && to === 'Mexico') {
      price = 400
    } else if (from === 'Canada' && to === 'USA') {
      price = 350
    } else if (from === 'Mexico' && to === 'USA') {
      price = 450
    }

    const totalPrice = price * numTravelers

    setFlightPrice(totalPrice)
    setFlightDetails(prevDetails => ({
      ...prevDetails,
      amount_paid: totalPrice
    }))
  }

  const handleSubmitFlightBooking = async e => {
    e.preventDefault()

    try {
      // Retrieve the access token from local storage
      const accessToken = localStorage.getItem('accessToken')

      // Make a POST request to the API with the flightDetails, including the access token in the headers
      const response = await axios.post(
        'https://kjm.zuuroo.com/api/create_booking',
        {
          // Include the necessary parameters from flightDetails
          from_city: flightDetails.from_city,
          trip_type: flightDetails.trip_type,
          to_city: flightDetails.to_city,
          amount_paid: flightDetails.amount_paid,
          departure_date: flightDetails.departure_date,
          arrival_date: flightDetails.arrival_date,
          no_of_passenger: flightDetails.no_of_passenger
        },
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}` // Include the access token here
          }
        }
      )

      // Handle the API response as needed
      console.log('Booking successful:', response?.data)
        navigate('/payment')
    } catch (err) {
      console.error('Error:', err?.response?.data)
    }
  }

  return (
    <div className='bg_flight'>
      <h1 className='text-white fw-bold p-4 fs-1'>Book a Flight</h1>
      <div className='wrapper__form bg-white'>
        <form onSubmit={handleSubmitFlightBooking}>
          <div className='form-group border-bottom d-flex align-items-center justify-content-between flex-wrap'>
            <label className='option my-sm-0 my-2'>
              <input
                type='radio'
                name='trip_type'
                value='Round Trip'
                checked={flightDetails.trip_type === 'Round Trip'}
                onChange={e =>
                  setFlightDetails({
                    ...flightDetails,
                    trip_type: e.target.value
                  })
                }
              />
              Round Trip
              <span className='checkmark'></span>
            </label>
            <label className='option my-sm-0 my-2'>
              <input
                type='radio'
                name='trip_type'
                value='One Way'
                checked={flightDetails.trip_type === 'One Way'}
                onChange={e =>
                  setFlightDetails({
                    ...flightDetails,
                    trip_type: e.target.value
                  })
                }
              />
              One Way
              <span className='checkmark'></span>
            </label>
            <label className='option my-sm-0 my-2'>
              <input
                type='radio'
                name='trip_type'
                value='Chopper'
                checked={flightDetails.trip_type === 'Chopper'}
                onChange={e =>
                  setFlightDetails({
                    ...flightDetails,
                    trip_type: e.target.value
                  })
                }
              />
              Chopper
              <span className='checkmark'></span>
            </label>
            <label className='option my-sm-0 my-2'>
              <input
                type='radio'
                name='trip_type'
                value='Private Jet'
                checked={flightDetails.trip_type === 'Private Jet'}
                onChange={e =>
                  setFlightDetails({
                    ...flightDetails,
                    trip_type: e.target.value
                  })
                }
              />
              Private Jet
              <span className='checkmark'></span>
            </label>
          </div>
          <div className='form-group d-sm-flex margin'>
            <div className='d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative'>
              <b>From</b>
              <Select
                name='from_city'
                className='form-control'
                options={options}
                value={fromValue}
                onChange={handleFromChange}
              />
              <div className='label' id='from'></div>
              <span className='fas fa-dot-circle text-muted'></span>
            </div>
            <div className='d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative'>
              <b>TO</b>
              <Select
                name='to_city'
                className='form-control'
                options={options}
                value={toValue}
                onChange={handleToChange}
              />
              <div className='label' id='to'></div>
              <span className='fas fa-map-marker text-muted'></span>
            </div>
          </div>
          <div className='form-group d-sm-flex margin'>
            <div className='d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative'>
              <input
                type='date'
                required
                placeholder='Depart Date'
                className='form-control'
                name='departure_date'
                onChange={e =>
                  setFlightDetails({
                    ...flightDetails,
                    departure_date: e.target.value
                  })
                }
              />
              <div className='label' id='depart'></div>
            </div>
            <div className='d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative'>
              <input
                type='date'
                required
                placeholder='Return Date'
                name='arrival_date'
                className='form-control'
                onChange={e =>
                  setFlightDetails({
                    ...flightDetails,
                    arrival_date: e.target.value
                  })
                }
              />
              <div className='label' id='return'></div>
            </div>
          </div>
          <div className='form-group border-bottom d-flex align-items-center position-relative'>
            <select
              className='form-control'
              name='no_of_passenger'
              onChange={handleTravelersChange}
              value={flightDetails.no_of_passenger}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <div className='label' id='psngr'></div>
            <span className='fas fa-users text-muted'></span>
          </div>
          <div className='rounded-0 d-flex justify-content-center gap-2 align-items-center bg-white shadow p-3'>
            <input
              type='number'
              required
              className='form-control'
              name='amount_paid'
              placeholder='price in dollar'
              value={flightPrice}
              readOnly
            />
            <p>dollars</p>
          </div>
          <div className='form-group my-3'>
            <input
              type='submit'
              value='Book Flight'
              className='btn btn-primary rounded-0 d-flex justify-content-center text-center p-3'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookFlightForm

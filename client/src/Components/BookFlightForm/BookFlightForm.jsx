import React, { useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import axios from 'axios';
import './bookfight.scss'
import { useNavigate } from 'react-router-dom';

function BookFlightForm() {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [flightPrice, setFlightPrice] = useState(0);
  const [flightDetails, setFlightDetails] = useState({
    trip_type: '',
    from_city: '',
    to_city: '',
    departure_date: '',
    arrival_date: '',
    no_of_passenger: '',
    amount_paid: ''
  });

  const navigate = useNavigate()
  const options = useMemo(() => countryList().getData(), []);

  const handleFromChange = (value) => {
    setFromValue(value);
    calculateFlightPrice(value, toValue, travelers);
  };

  const handleToChange = (value) => {
    setToValue(value);
    calculateFlightPrice(fromValue, value, travelers);
  };

  const handleTravelersChange = (event) => {
    const numTravelers = parseInt(event.target.value, 10);
    setTravelers(numTravelers);
    calculateFlightPrice(fromValue, toValue, numTravelers);
  };

  const calculateFlightPrice = (from, to, numTravelers) => {
    let price = 500;

    if (from === 'USA' && to === 'Canada') {
      price = 300;
    } else if (from === 'USA' && to === 'Mexico') {
      price = 400;
    } else if (from === 'Canada' && to === 'USA') {
      price = 350;
    } else if (from === 'Mexico' && to === 'USA') {
      price = 450;
    }
    const totalPrice = price * numTravelers;

    setFlightPrice(totalPrice);
  };

  const handleSubmitFlightBooking = async () => {
    try {
      // Prepare the data to send in the request
      const requestData = {
        trip_type: flightDetails.trip_type,
        from_city: fromValue,
        to_city: toValue,
        departure_date: flightDetails.departure_date,
        arrival_date: flightDetails.arrival_date,
        no_of_passenger: travelers,
        amount_paid: flightPrice
      };

      // Make a POST request to the API with the requestData
      const response = await axios.post('https://kjm.zuuroo.com/api/create_booking', requestData);

      // Handle the API response as needed
      console.log('Booking successful:', response.data);
      navigate('/payment')
    } catch (err) {
      console.error('Error:', err.message);
    }
  };

  return (
    <div className='bg_flight'>
      <h1 className='text-white fw-bold p-4 fs-1'>Book a Flight</h1>
      <div className='wrapper__form bg-white'>
        <form action='post'>
          <div className='form-group border-bottom d-flex align-items-center justify-content-between flex-wrap'>
            <label className='option my-sm-0 my-2'>
              <input type='radio' name='trip_type' checked />
              Round Trip
              <span className='checkmark'></span>
            </label>
            <label className='option my-sm-0 my-2'>
              <input type='radio' name='trip_type' />
              One Way
              <span className='checkmark'></span>
            </label>
          </div>
          <div className='form-group d-sm-flex margin'>
            <div className='d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative'>
              <b>From</b>
              <Select
                name='country'
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
                name='country'
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
                onChange={(e) =>
                  setFlightDetails({ ...flightDetails, departure_date: e.target.value })
                }
              />
              <div className='label' id='depart'></div>
            </div>
            <div className='d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative'>
              <input
                type='date'
                required
                placeholder='Return Date'
                className='form-control'
                onChange={(e) =>
                  setFlightDetails({ ...flightDetails, arrival_date: e.target.value })
                }
              />
              <div className='label' id='return'></div>
            </div>
          </div>
          <div className='form-group border-bottom d-flex align-items-center position-relative'>
            <select className='form-control' onChange={handleTravelersChange}>
              <option selected>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <div className='label' id='psngr'></div>
            <span className='fas fa-users text-muted'></span>
          </div>
          <div className='rounded-0 d-flex justify-content-center text-center p-3'>
            <input
              type='text'
              required
              className='form-control'
              name='price'
              placeholder='price in dollar'
              value={`${flightPrice} dollars`}
              readOnly
            />
          </div>
          <div className='form-group my-3'>
            <div
              className='btn btn-primary rounded-0 d-flex justify-content-center text-center p-3'
              onClick={handleSubmitFlightBooking}
            >
              Book Flight
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookFlightForm;

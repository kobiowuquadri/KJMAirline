import React, { useState, useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './bookfight.scss'
import Payment from '../Payment/Payment'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function BookFlightForm () {

  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [flightPrice, setFlightPrice] = useState(0);

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
    const totalPrice = `${price * numTravelers} dollars`;

    setFlightPrice(totalPrice);
  };

  return (
    <div className='bg_flight'>
      <h1 className='text-white fw-bold p-4 fs-1'>Book a Flight</h1>
      <div class='wrapper__form bg-white'>
        <form action='#'>
          <div class='form-group border-bottom d-flex align-items-center justify-content-between flex-wrap'>
            <label class='option my-sm-0 my-2'>
              <input type='radio' name='radio' checked />
              Round Trip
              <span class='checkmark'></span>
            </label>
            <label class='option my-sm-0 my-2'>
              <input type='radio' name='radio' />
              One Way
              <span class='checkmark'></span>
            </label>
          </div>
          <div class='form-group d-sm-flex margin'>
            <div class='d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative'>
              <b>From</b>
            <Select name="country" className="form-control"  options={options}
                value={fromValue}
                onChange={handleFromChange} />
              <div class='label' id='from'></div>
              <span class='fas fa-dot-circle text-muted'></span>
            </div>
            <div class='d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative'>
            <b>TO</b>
            <Select name="country" className="form-control"  options={options}
                value={toValue}
                onChange={handleToChange} />
           
              <div class='label' id='to'></div>
              <span class='fas fa-map-marker text-muted'></span>
            </div>
          </div>
          <div class='form-group d-sm-flex margin'>
            <div class='d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative'>
              <input
                type='date'
                required
                placeholder='Depart Date'
                class='form-control'
              />
              <div class='label' id='depart'></div>
            </div>
            <div class='d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative'>
              <input
                type='date'
                required
                placeholder='Return Date'
                class='form-control'
              />
              <div class='label' id='return'></div>
            </div>
          </div>
          <div class='form-group border-bottom d-flex align-items-center position-relative'>
          

            <select className='form-control'  onChange={handleTravelersChange}>
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
            <div class='label' id='psngr'></div>
            <span class='fas fa-users text-muted'></span>
          </div>
          <div class='rounded-0 d-flex justify-content-center text-center p-3'>
          <input
                type='string'
                required
                class='form-control'
                name='price'
                placeholder='price in dollar'
                value={flightPrice}
                readOnly
              />
          </div>

          <div class='form-group my-3'>
            <div class='btn btn-primary rounded-0 d-flex justify-content-center text-center p-3'>
              Book Flight
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookFlightForm

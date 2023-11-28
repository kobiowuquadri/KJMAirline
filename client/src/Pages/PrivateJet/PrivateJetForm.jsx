import React, { useState, useMemo, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Select from 'react-select'
import { CiCalendarDate } from 'react-icons/ci'
import axios from 'axios'
import '../../Components/BookFlightForm/bookfight.scss'
import { useNavigate } from 'react-router-dom'

function PrivateJetForm () {
  const [fromValue, setFromValue] = useState('')
  const [toValue, setToValue] = useState('')
  const [travelers, setTravelers] = useState(1)
  const [flightPrice, setFlightPrice] = useState(null)
  const [flightDetails, setFlightDetails] = useState({
    trip_type: 'Round Trip',
    class_type: 'Private Jet',
    from_city: '',
    to_city: '',
    departure_date: '',
    arrival_date: '',
    no_of_passenger: '0',
    amount_paid: ''
  })

  const navigate = useNavigate()
  const airports = useMemo(
    () => [
      'Louisiana Offshore Oil Port (LOOP)',
      'Louis Armstrong New Orleans International Airport (MSY)',
      'Theodore Roosevelt Regional Airport',
      'Repsol Oil Rig',
      'Adolfo Suarez Madrid-Barajas Airport',
      'Ted Stevens Anchorage International Airport',
      'Louisiana Offshore Oil Port',
      'MidAmerica in Mascoutah, IL',
      'Evansville Regional Airport',
      'Roanoke Virginia Regional Airport',
      'Adolfo Suarez Madrid',
      'Ted Stevens Anchorage International Airport',
      'Adolfo Suarez Madrid',
      'Evansville Regional Airport',
      'Atlanta International Airport',
      'Los Angeles International Airport',
      "Chicago O'Hare International Airport",
      'Dallas/Fort Worth International Airport',
      'Denver International Airport',
      'New York JFK International Airport',
      'San Francisco International Airport',
      'Seattle International Airport',
      'Orlando International Airport',
      'Las Vegas International Airport',
      'Charlotte International Airport',
      'Newark International Airport',
      'Phoenix International Airport',
      'Houston Bush International Airport',
      'Miami International Airport',
      'Boston Logan International Airport',
      'Minneapolis International Airport',
      'Detroit Metro Airport',
      'Fort Lauderdale International Airport',
      'Philadelphia International Airport',
      'Atlanta Airport',
      'Los Angeles Airport',
      "Chicago O'Hare Airport",
      'Dallas/Fort Worth Airport',
      'Denver Airport',
      'New York JFK Airport',
      'San Francisco Airport',
      'Seattle Airport',
      'Orlando Airport',
      'Las Vegas Airport',
      'Charlotte Airport',
      'Newark Airport',
      'Phoenix Airport',
      'Houston Bush Airport',
      'Miami Airport',
      'Boston Airport',
      'Minneapolis Airport',
      'Detroit Metro Airport',
      'Fort Lauderdale Airport',
      'Philadelphia Airport',
      'New York LaGuardia Airport',
      'Baltimore Airport',
      'Salt Lake City Airport',
      'San Diego Airport',
      'Washington Dulles Airport',
      'Washington Reagan Airport',
      'Tampa Airport',
      'Chicago Midway Airport',
      'Honolulu Airport',
      'Portland Airport',
      'Nashville Airport',
      'Austin Airport',
      'Dallas Airport',
      'St. Louis Airport',
      'San Jose Airport',
      'Houston Airport',
      'Raleigh/Durham Airport',
      'New Orleans Airport',
      'Oakland Airport',
      'Sacramento Airport',
      'Kansas City Airport',
      'Santa Ana Airport',
      'Fort Myers Airport',
      'San Antonio Airport',
      'Cleveland Airport',
      'Indianapolis Airport',
      'Pittsburgh Airport',
      'San Juan Airport',
      'Cincinnati Airport',
      'Columbus Airport',
      'Kahului Airport',
      'Jacksonville Airport',
      'West Palm Beach/Palm Beach Airport',
      'Milwaukee Airport',
      'Hartford Airport',
      'Burbank Airport',
      'Ontario Airport',
      'Anchorage Airport',
      'Albuquerque Airport',
      'Omaha Airport',
      'Buffalo Airport',
      'Charleston Airport',
      'Memphis Airport',
      'Richmond Airport',
      'Reno Airport',
      'Oklahoma City Airport',
      'Boise Airport',
      'Louisville Airport',
      'Norfolk Airport',
      'Providence Airport',
      'Spokane Airport',
      'Kona Airport',
      'Tucson Airport',
      'Grand Rapids Airport',
      'Long Beach Airport',
      'El Paso Airport',
      'Lihue Airport',
      'Birmingham Airport',
      'Sanford Airport',
      'Tulsa Airport',
      'Albany Airport',
      'Savannah Airport',
      'Des Moines Airport',
      'Palm Springs Airport',
      'Myrtle Beach Airport',
      'Rochester Airport',
      'Greenville-Spartanburg Airport',
      'Syracuse Airport',
      'Knoxville Airport',
      'Madison Airport',
      'St. Petersburg Airport',
      'Pensacola Airport',
      'Portland Airport',
      'Little Rock Airport',
      'Greensboro/High Point Airport',
      'Sarasota/Bradenton Airport',
      'Fresno Airport',
      'Fayetteville Airport',
      'Phoenix Airport',
      'White Plains Airport',
      'Wichita Airport',
      'Manchester Airport',
      'Dayton Airport',
      'Punta Gorda Airport',
      'Colorado Springs Airport',
      'Valparaiso Airport',
      'Asheville Airport',
      'Bozeman Airport',
      'Islip Airport',
      'Harrisburg Airport',
      'Lexington Airport',
      'Huntsville Airport',
      'Burlington Airport',
      'Midland/Odessa Airport',
      'Cedar Rapids/Iowa City Airport',
      'Columbia Airport',
      'Panama City Airport',
      'Eugene Airport',
      'Hilo Airport',
      'Springfield Airport',
      'Sioux Falls Airport',
      'Chattanooga Airport',
      'Jackson/Vicksburg Airport',
      'Fairbanks Airport',
      'Wilmington Airport',
      'Medford Airport',
      'Atlantic City Airport',
      'Lubbock Airport',
      'Santa Barbara Airport',
      'Key West Airport',
      'Bend/Redmond Airport',
      'Fargo Airport',
      'Billings Airport',
      'Trenton Airport',
      'Missoula Airport',
      'Jackson Airport',
      'Pasco/Kennewick/Richland Airport',
      'Allentown/Bethlehem/Easton Airport',
      'Mission/McAllen/Edinburg Airport',
      'Tallahassee Airport',
      'South Bend Airport',
      'Akron Airport',
      'Fort Wayne Airport',
      'Baton Rouge Airport',
      'Everett Airport',
      'Appleton Airport',
      'Charlottesville Airport',
      'Aguadilla Airport',
      'Juneau Airport',
      'Roanoke Airport',
      'Kalispell Airport',
      'Moline Airport',
      'Amarillo Airport',
      'Rapid City Airport',
      'Green Bay Airport',
      'Daytona Beach Airport',
      'Peoria Airport',
      'Harlingen/San Benito Airport',
      'Bellingham Airport',
      'Augusta Airport',
      'Mobile Airport',
      'Corpus Christi Airport',
      'Shreveport Airport',
      'Bismarck/Mandan Airport',
      'Aspen Airport',
      'Bangor Airport',
      'Flint Airport',
      'Scranton/Wilkes-Barre Airport',
      'Traverse City Airport',
      'Gulfport/Biloxi Airport',
      'Gainesville Airport',
      'San Luis Obispo Airport',
      'Newburgh/Poughkeepsie Airport',
      'Lafayette Airport',
      'Grand Junction Airport',
      'Evansville Airport',
      'Santa Rosa Airport',
      'Melbourne Airport',
      'Monterey Airport',
      'Charleston/Dunbar Airport',
      'Bristol/Johnson City/Kingsport Airport',
      'Fayetteville Airport',
      'Newport News/Williamsburg Airport',
      'Bloomington/Normal Airport',
      'Durango Airport',
      'Montgomery Airport',
      'State College Airport',
      'Eagle Airport',
      'Rochester Airport',
      'Concord Airport',
      'Idaho Falls Airport',
      'Great Falls Airport',
      'Minot Airport',
      'Lincoln Airport',
      'Lansing Airport',
      'Jacksonville/Camp Lejeune Airport',
      'Montrose/Delta Airport',
      'Elmira/Corning Airport',
      'Bethel Airport',
      'Latrobe Airport',
      'Bucharest Henri Coandă International Airport',
      'Cluj International Airport',
      'Timișoara Traian Vuia International Airport',
      'Iasi International Airport',
      'George Enescu International Airport',
      'Târgu Mureș Transylvania Airport',
      'Sibiu International Airport',
      'Craiova International Airport',
      // Romania
      'Bucharest Henri Coandă International Airport',
      'Cluj International Airport',
      'Timișoara Traian Vuia International Airport',
      'Iasi International Airport',
      'George Enescu International Airport',
      'Târgu Mureș Transylvania Airport',
      'Sibiu International Airport',
      'Craiova International Airport',
      // Germany
      'Frankfurt Airport',
      'Munich Airport',
      'Berlin Brandenburg Airport',
      'Düsseldorf Airport',
      'Hamburg Airport',
      'Cologne Bonn Airport',
      'Stuttgart Airport',
      'Hanover Airport',
      'Nuremberg Airport',
      'Leipzig/Halle Airport',
      // Canada
      'Toronto Pearson International Airport',
      'Vancouver International Airport',
      'Montreal-Pierre Elliott Trudeau International Airport',
      'Calgary International Airport',
      'Edmonton International Airport',
      'Halifax Stanfield International Airport',
      'Ottawa Macdonald-Cartier International Airport',
      'Winnipeg James Armstrong Richardson International Airport',
      'Québec City Jean Lesage International Airport',
      'Hamilton John C. Munro International Airport',
      // Qatar
      'Hamad International Airport',
      'Doha International Airport',
      // Belgium
      'Brussels Airport',
      'Antwerp International Airport',
      // UK
      'Heathrow Airport',
      'Gatwick Airport',
      'Manchester Airport',
      'London Stansted Airport',
      'London Luton Airport',
      'Edinburgh Airport',
      'Birmingham Airport',
      'Bristol Airport',
      'Glasgow Airport',
      'Newcastle International Airport',
      // Finland
      'Helsinki-Vantaa Airport',
      'Oulu Airport',
      'Tampere-Pirkkala Airport',
      'Turku Airport',
      'Rovaniemi Airport',
      // Belarus
      'Minsk National Airport',
      'Gomel International Airport',
      'Vitebsk Vostochny Airport',
      'Brest Airport',
      // Israel
      'Ben Gurion Airport',
      'Sde Dov Airport',
      'Eilat Airport',
      // Turkey
      'Istanbul Airport',
      'Istanbul Sabiha Gökçen International Airport',
      'Ankara Esenboğa Airport',
      'Izmir Adnan Menderes Airport',
      'Antalya Airport',
      'Dalaman Airport',
      'Bodrum Milas Airport',
      'Trabzon Airport',
      'Erzurum Airport',
      'Adana Şakirpaşa Airport'
    ],
    []
  )

  const handleFromChange = selectedOption => {
    setFromValue(selectedOption)

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

  const calculateFlightPrice = (from, to, numTravelers, classType) => {
    if (flightPrice !== null) {
      const totalPrice = parseFloat(flightPrice) * numTravelers;

      setFlightDetails((prevDetails) => ({
        ...prevDetails,
        amount_paid: totalPrice,
      }));
    }
  };

  const handleSubmitFlightBooking = async e => {
    e.preventDefault()

    try {
      const accessToken = localStorage.getItem('accessToken')

      const response = await axios.post(
        'https://kjm.zuuroo.com/api/create_booking',
        {
          from_city: flightDetails.from_city,
          trip_type: flightDetails.trip_type,
          class_type: flightDetails.class_type,
          to_city: flightDetails.to_city,
          amount_paid: flightDetails.amount_paid,
          departure_date: flightDetails.departure_date,
          arrival_date: flightDetails.arrival_date,
          no_of_passenger: flightDetails.no_of_passenger
        },
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${accessToken}`
          }
        }
      )

      console.log('Booking successful:', response?.data)
      navigate('/payment')
    } catch (err) {
      console.error('Error:', err?.response?.data)
    }
  }


    const getFlightPrice = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken')
        console.log(accessToken)
        const response = await axios.get(
          'https://kjm.zuuroo.com/api/get_price/3',
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
        console.log(response?.data)
        const { flight_price } = response?.data
        console.log(flight_price)
        setFlightPrice(parseFloat(flight_price))
        const parsedFlightPrice = parseInt(flight_price, 10);

        if (!isNaN(parsedFlightPrice)) {
          setFlightPrice(parsedFlightPrice);
        } else {
          console.error('Invalid flight price:', flight_price);
        }
      } catch (err) {
        console.log(err)
      }
    }

    useEffect(() => {
      getFlightPrice()
    }, [])


  return (
    <div className='bg_flight'>
      <h1 className='text-white fw-bold p-4 fs-1'>Book a Private Jet</h1>
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
          </div>

          <div className='class-select d-flex align-items-center'>
            <b className='w-50'>Class Type: </b>
            <Select
              className='w-50'
              name='class_type'
              options={[{ label: 'Private Jet', value: 'Private Jet' }]}
              value={{
                label: flightDetails.class_type,
                value: flightDetails.class_type
              }}
              onChange={selectedOption => {
                setFlightDetails(prevDetails => ({
                  ...prevDetails,
                  class_type: selectedOption
                    ? selectedOption.label
                    : 'Private Jet'
                }))
                calculateFlightPrice(
                  fromValue ? fromValue.label : '',
                  toValue ? toValue.label : '',
                  travelers,
                  selectedOption ? selectedOption.label : 'Private Jet'
                )
              }}
            />
          </div>

          <div className='form-group d-flex flex-column'>
            <div className='d-flex align-items-center flex-fill me-sm-1 my-sm-0 mt-3 border-bottom position-relative'>
              <b>From: </b>
              <Select
                name='from_city'
                className='form-control'
                options={airports.map(airport => ({
                  label: airport,
                  value: airport
                }))}
                value={fromValue}
                onChange={handleFromChange}
              />
              <div className='label' id='from'></div>
              <span className='fas fa-dot-circle text-muted'></span>
            </div>
            <div className='d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative'>
              <b>TO: </b>
              <Select
                name='to_city'
                className='form-control'
                options={airports.map(airport => ({
                  label: airport,
                  value: airport
                }))}
                value={toValue}
                onChange={handleToChange}
              />
              <div className='label' id='to'></div>
              <span className='fas fa-map-marker text-muted'></span>
            </div>
          </div>
          <div className='form-group d-sm-flex margin'>
            <div className='d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative'>
              <b id='not__show'>Departure Date: </b>
              <CiCalendarDate id='not__show' style={{ fontSize: '2rem' }} />
              <input
                type='date'
                required
                className='form-control'
                name='departure_date'
                onChange={e =>
                  setFlightDetails({
                    ...flightDetails,
                    departure_date: e.target.value
                  })
                }
              />
              {/* <div className='label' id='depart'></div> */}
            </div>
            <div className='d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative'>
              <b id='not__show'>Return Date: </b>
              <CiCalendarDate id='not__show' style={{ fontSize: '2rem' }} />
              <input
                type='date'
                required
                name='arrival_date'
                className='form-control'
                onChange={e =>
                  setFlightDetails({
                    ...flightDetails,
                    arrival_date: e.target.value
                  })
                }
              />
              {/* <div className='label' id='return'></div> */}
            </div>
          </div>
          <div className='form-group border-bottom d-flex align-items-center position-relative'>
            <select
              className='form-control'
              name='no_of_passenger'
              onChange={handleTravelersChange}
              value={flightDetails.no_of_passenger}
            >
              <option value='0' selected>
                0
              </option>
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
              value={flightPrice !== null ? flightPrice : ''}
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

export default PrivateJetForm

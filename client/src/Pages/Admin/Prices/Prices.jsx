import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Slidebar from '../../../Components/SideBar/SideBar'
import axios from 'axios'
import './prices.scss'

function Prices () {
  const [flightOptions, setFlightOptions] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedId, setSelectedId] = useState('');
  const [price, setPrice] = useState('');
  const [flightPrices, getFlightPrices] = useState([]);

  const adminAccessToken = localStorage.getItem('adminAccessToken')

  const handleUpdatePrice = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://kjm.zuuroo.com/api/admin/update_price',
        {
         name: selectedFlight?.value,
          price,
          id: selectedId,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminAccessToken}`
          }
        }
      )
      console.log(response?.data)
      alert('Price Updated, Kindly refresh the page to view the lastest changes.')
    } catch (err) {
      console.log(err?.response?.data)
    }
  }

  const showAllFlightPrices = async () => {
    try {
      const response = await axios.get(
        'https://kjm.zuuroo.com/api/admin/all_pricing',
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${adminAccessToken}`
          }
        }
      )
      console.log(response?.data)
      const { data } = response?.data
      getFlightPrices(data)

      // Create options for flight names
      const options = data.map((flight) => ({
        value: flight.flight_name,
        label: flight.flight_name,
        id: flight.id,
      }));

      setFlightOptions(options);
    } catch (err) {
      console.log(err?.response?.data)
    }
  }

  useEffect(() => {
    showAllFlightPrices()
  }, [])

  const handleFlightChange = (selectedOption) => {
    setSelectedFlight(selectedOption);
    setSelectedId(selectedOption?.id || '');
  };

  return (
    <div className='admin__dashbaord'>
      <Slidebar />
      <div className='main__admin2 shadow mt-2'>
      <div className='w-100 d-flex justify-content-center p-5 align-items-center min-vh-50 flex-column'>
          <h1>All Prices</h1>
          <table width={'50%'} border={1}>
           <tr className='d-flex justify-content-between align-items-center'>
           <th>Flight Name</th>
            <th>Current Price</th>
            <th>ID</th>
           </tr>
          </table>
          {flightPrices.map((price, index) => {
            return (
              <>
                <table width={'50%'} style={{border: '2px solid black'}} key={index}>
                  <tr className='d-flex justify-content-between align-items-center'>
                    <td>{price.flight_name}</td>
                    <td>{price.flight_price}</td>
                    <td>{price.id}</td>
                  </tr>
                </table>
              </>
            )
          })}
        </div>

        <p className='text-center fw-bold bg-primary text-white p-3'>Update Price</p>
        <form
          onSubmit={handleUpdatePrice}
          id='update__prices'
          className='shadow'
        >
          <p>
          <label htmlFor=''>Flight Name: </label>
          <Select
              value={selectedFlight}
              onChange={handleFlightChange}
              options={flightOptions}
            />
          </p>
          <p>
          <label htmlFor=''>New Price: </label>
            <input
              type='number'
              placeholder='Enter new price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              name='price'
            />
          </p>
          <p>
          <label htmlFor=''>ID: </label>
            <input
              type='number'
              value={selectedId}
              readOnly
              name='id'
            />
          </p>
          <p>
            <input
              type='submit'
              className='btn btn-primary border-0'
              value='Update Price'
            />
          </p>
        </form>
        
      </div>
    </div>
  )
}

export default Prices

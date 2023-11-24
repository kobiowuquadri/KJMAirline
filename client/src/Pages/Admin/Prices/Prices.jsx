import React, { useEffect, useState } from 'react'
import Slidebar from '../../../Components/SideBar/SideBar'
import axios from 'axios'
import './prices.scss'

function Prices () {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [id, setId] = useState('')
  const [flightPrices, getFlightPrices] = useState([])

  const adminAccessToken = localStorage.getItem('adminAccessToken')
  const handleUpdatePrice = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://kjm.zuuroo.com/api/admin/update_price',
        {
          name,
          price,
          id
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
      console.log(data)
    } catch (err) {
      console.log(err?.response?.data)
    }
  }

  useEffect(() => {
    showAllFlightPrices()
  }, [])

  return (
    <div className='admin__dashbaord'>
      <Slidebar />
      <div className='main__admin2 shadow mt-2'>
        <h1>Update Price</h1>
        <form
          onSubmit={handleUpdatePrice}
          id='update__prices'
          className='shadow'
        >
          <p>
            <label for=''>Flight Name: </label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </p>
          <p>
            <label for=''>Amount: </label>
            <input
              type='number'
              value={price}
              onChange={e => setPrice(e.target.value)}
              name='price'
            />
          </p>
          <p>
            <label for=''>ID: </label>
            <input
              type='number'
              value={id}
              onChange={e => setId(e.target.value)}
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
        <div className='w-100 d-flex justify-content-center p-5 align-items-center min-vh-50 flex-column'>
          <h1>All Prices</h1>
          <table width={'50%'}>
           <tr className='d-flex justify-content-between align-items-center'>
           <th>Flight Name</th>
            <th>Price</th>
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
      </div>
    </div>
  )
}

export default Prices

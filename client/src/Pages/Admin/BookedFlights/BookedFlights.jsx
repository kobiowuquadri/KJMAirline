import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Slidebar from '../../../Components/SideBar/SideBar'
import { AuthContext } from '../../../contexts/authContext'


function BookedFlights() {
      const [allBookedFlights, getAllBookedFlights] = useState([])
      // const { setUserData  } = useContext(AuthContext);

      // console.log(setUserData())

    const adminAccessToken = localStorage.getItem('adminAccessToken')
    const handleBookedFlight = async () => {
       try{
        const response = await axios.get('https://kjm.zuuroo.com/api/admin/get_allbookings', {
            headers:{
                Accept: 'application/json',
                'Content-Type' : 'application/json',
                Authorization:`Bearer ${adminAccessToken}`
            }
        })
      //   console.log(response?.data)
        const {data} = response?.data
        getAllBookedFlights(data)
       }
       catch(err) {
          console.error(err?.response?.data)
       }


    }

    const approvePayment = async () => {
      try {
        const response = await axios.get('https://kjm.zuuroo.com/api/admin/activate_booking/{paymentRef}', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminAccessToken}`
           }
           
      })
      console.log(response?.data)
      }
      catch(err){
         console.error(err?.response?.data)
      }
    }

    useEffect(() => {
       handleBookedFlight()
       approvePayment()
    }, [])
  return (
   <div className='admin__dashbaord'>
    <Slidebar/>
   <div className='main__admin2 shadow mt-2'>
   {allBookedFlights.map((flights, index) => {
      return (
            <div key={index} className='d-flex justify-content-around row row-cols-lg-3 p-4 border-2 text-white rounded-5' style={{background: 'rgb(55,105,159)'}}>
               <div className='d-flex flex-column col-md-12'>
                  <h4 className='text-danger'>User Details</h4>
                  <p>Name: {flights.name}</p>
                  <p>Email: {flights.email}</p>
               </div>

               <div className='d-flex flex-column col-md-12'>
                  <h4 className='text-danger'>Flight Details</h4>
                  <p>Flight ID: {flights.flightId}</p>
                  <p>Departure Date: {flights.departure_date}</p>
                  <p>Arrival Date: {flights.arrival_date}</p>
                  <p>From: {flights.from_city}</p>
                  <p>To: {flights.to_city}</p>
                  <p>Flight ID: {flights.id}</p>
                  <p>No of Passengers: {flights.no_of_passenger}</p>
                  <p>Trip Type: {flights.trip_type}</p>
               </div>

               <div className='d-flex flex-column col-md-12'>
                  <h4 className='text-danger'>Payment Details</h4>
                  <p>Payment: {flights.payment_status}</p>
                  <p>Payment ref: {flights.payment_ref}</p>
                  <p>Amount Paid: {flights.amount_paid}</p>
                  <button className='btn btn-success' onClick={() => approvePayment()}>Approve Payment</button>
               </div>
            </div>
      )
    })}
   </div>
   </div>
  )
}

export default BookedFlights
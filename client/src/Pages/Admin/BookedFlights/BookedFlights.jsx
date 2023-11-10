import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slidebar from '../../../Components/SideBar/SideBar'

function BookedFlights() {
      const [allBookedFlights, getAllBookedFlights] = useState([])


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
        console.log(response?.data)
        const {data} = response?.data
        getAllBookedFlights(data)
       }
       catch(err) {
          console.error(err?.response?.data)
       }


    }

    useEffect(() => {
       handleBookedFlight()
    }, [])
  return (
   <div className='admin__dashbaord'>
    <Slidebar/>
   <div className='main__admin2 shadow mt-2'>
   {allBookedFlights.map((flights, index) => {
      return (
            <div key={index} className='p-4 border-2 text-white rounded-5' style={{background: 'rgb(55,105,159)'}}>
               <p>Name: {flights.name}</p>
               <p>Email: {flights.email}</p>
               <p>Flight ID: {flights.flightId}</p>
               <p>Departure Date: {flights.departure_date}</p>
               <p>Arrival Date: {flights.arrival_date}</p>
               <p>From: {flights.from_city}</p>
               <p>To: {flights.to_city}</p>
               <p>Flight ID: {flights.id}</p>
               <p>No of Passengers: {flights.no_of_passenger}</p>
               <p>Trip Type: {flights.trip_type}</p>
               <p>Payment: {flights.payment_status}</p>
               <p>Payment ref: {flights.payment_ref}</p>
               <p>Amount Paid: {flights.amount_paid}</p>
            </div>
      )
    })}
   </div>
   </div>
  )
}

export default BookedFlights
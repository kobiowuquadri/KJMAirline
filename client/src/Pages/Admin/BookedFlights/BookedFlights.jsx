import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Slidebar from '../../../Components/SideBar/SideBar'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'


function BookedFlights() {
      const [allBookedFlights, getAllBookedFlights] = useState([])
      // const { setUserData  } = useContext(AuthContext);
      const navigate = useNavigate()
      const [loading, setLoading] = useState(false)

      // console.log(setUserData())

    const adminAccessToken = localStorage.getItem('adminAccessToken')
    const handleBookedFlight = async () => {
      setLoading(true)
       try{
        const response = await axios.get('https://server.kjmairline.com/api/admin/get_allbookings', {
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
       finally {
         setLoading(false) // Set loading to false after the API response is received
       }


    }

    const approvePayment = async (paymentRef) => {
      setLoading(true)
      try {
        const response = await axios.get(`https://server.kjmairline.com/api/admin/activate_booking/${paymentRef}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminAccessToken}`
           }
           
      })
      console.log(response?.data)
      await sendReceiptToUser(paymentRef);
      alert('Payment Approved!,a receipt has been sent to the user, Kindly refersh to see the lastest changes')
      navigate('/admin/dashboard/bookedflights')
      }
      catch(err){
         console.error(err?.response?.data)

      }
      finally {
         setLoading(false) // Set loading to false after the API response is received
       }
    }

    const sendReceiptToUser = async (paymentRef) => {
      try {
        // Replace the following with your logic to send a receipt
        // You can use another API endpoint or library to send emails or notifications to the user
        console.log(`Receipt sent to user with payment ref: ${paymentRef}`);
      } catch (error) {
        console.error('Error sending receipt:', error);
      }
    };


    useEffect(() => {
       handleBookedFlight()
    }, [])
  return (
   <div className='admin__dashbaord'>
    <Slidebar/>
   <div className='main__admin2 shadow mt-2'>
   {/* <p className='d-flex align-items-center justify-content-center min-vh-100'>{loading && <ClipLoader color='#36699E' />}</p> */}
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
                  <p>Class Type: {flights.class_type}</p>
               </div>

               <div className='d-flex flex-column col-md-12'>
                  <h4 className='text-danger'>Payment Details</h4>
                  <p>Payment: {flights.payment_status}</p>
                  <p>Payment ref: {flights.payment_ref}</p>
                  <p>Amount Paid: {flights.amount_paid}</p>
                  <button className='btn btn-success cursor-pointer' onClick={() => approvePayment(flights.payment_ref)}>Approve Payment  <span>{loading && <ClipLoader color='#36699E' />}</span></button>
               </div>
            </div>
      )
    })}
   </div>
   </div>
  )
}

export default BookedFlights
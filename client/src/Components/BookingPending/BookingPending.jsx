import React, {useEffect} from 'react'
import '../Payment/payment.scss'
import { useNavigate } from 'react-router-dom'

function BookingPending() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
        navigate('/mytrip')
    }, 5000)
  }, [])

  return (
    <div className='payment_booking'>
        <h1 className='btn btn-success tw-px-2'>Booking Confimed! </h1>
         <p className='text-danger'>Payment Pending...</p>
         <p>Your payment will be confirmed in few minutes by the Admin!</p>
         <p>You will be redirect shortly to view your booked flight details</p>
    </div>
  )
}

export default BookingPending
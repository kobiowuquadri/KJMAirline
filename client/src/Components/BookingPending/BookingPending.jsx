import React from 'react'
import '../Payment/payment.scss'

function BookingPending() {
  return (
    <div className='payment_booking'>
        <h1 className='btn btn-success tw-px-2'>Booking Confimed! </h1>
         <p className='text-danger'>Payment Pending...</p>
         <p>Your payment will be confirmed in few minutes by the Admin!</p>
    </div>
  )
}

export default BookingPending
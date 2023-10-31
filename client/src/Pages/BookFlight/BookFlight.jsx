import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from '../../Components/Navbar/Navbar'
import './bookfight.scss'

function BookFlight() {
  return (
   <>
      <Navbar/>
    <div className='bg_flight'> 
    <h1 className='text-white fw-bold p-4 fs-1'>Book a Flight</h1>     
        <div class="wrapper__form bg-white">
        <form action="#">
            <div class="form-group border-bottom d-flex align-items-center justify-content-between flex-wrap">
                <label class="option my-sm-0 my-2">
                    <input type="radio" name="radio" checked/>Round Trip
                    <span class="checkmark"></span>
                </label>
                <label class="option my-sm-0 my-2">
                    <input type="radio" name="radio"/>One Way
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="form-group d-sm-flex margin">
                <div class="d-flex align-items-center flex-fill me-sm-1 my-sm-0 my-4 border-bottom position-relative">
                    <input type="text" required placeholder="From" class="form-control"/>
                    <div class="label" id="from"></div>
                    <span class="fas fa-dot-circle text-muted"></span>
                </div>
                <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                    <input type="text" required placeholder="To" class="form-control"/>
                    <div class="label" id="to"></div>
                    <span class="fas fa-map-marker text-muted"></span>
                </div>
            </div>
            <div class="form-group d-sm-flex margin">
                <div class="d-flex align-items-center flex-fill me-sm1 my-sm-0 border-bottom position-relative">
                    <input type="date" required placeholder="Depart Date" class="form-control"/>
                    <div class="label" id="depart"></div>
                </div>
                <div class="d-flex align-items-center flex-fill ms-sm-1 my-sm-0 my-4 border-bottom position-relative">
                    <input type="date" required placeholder="Return Date" class="form-control"/>
                    <div class="label" id="return"></div>
                </div>
            </div>
            <div class="form-group border-bottom d-flex align-items-center position-relative">
                <input type="text" required placeholder="Traveller(s)" class="form-control"/>
                <div class="label" id="psngr"></div>
                <span class="fas fa-users text-muted"></span>
            </div>
            <div class="form-group my-3">
                <div class="btn btn-primary rounded-0 d-flex justify-content-center text-center p-3">Book Flight
                </div>
            </div>
        </form>
        
        </div>
    </div>
   </>
  )
}

export default BookFlight
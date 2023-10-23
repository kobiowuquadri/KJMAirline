import { useState, React } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import bck from '../../Assets/Images/bck.jpg'
import { FiChevronDown } from 'react-icons/fi'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { GiAirplaneArrival } from 'react-icons/gi'
import { BiChevronRight, BiCoinStack } from 'react-icons/bi'
import { IoAirplaneSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './Home.scss'

function Home () {
  const [selectedCity, setSelectedCity] = useState('Lagos') // State to hold the selected city

  // Event handler to update the selected city
  const handleCityChange = event => {
    setSelectedCity(event.target.value)
  }
  const customBackgroundColor = 'rgb(194, 219, 234)'

  return (
    <>
      <div className='IFE'>
        <Navbar />
        <div id="tripposition">
          <div id="tripbook">
            <p id='tripflight'> <IoAirplaneSharp id='tripbookicon'/> Book a flight</p>
            <p id='tripmiles'> <BiCoinStack id='tripbookicon'/> Book with miles</p>
          </div>
          <div id='tripcont'>
            <div id="tripconttop">
              <select name='trips' id='hometrip'>
                <option value='round' selected>
                  Round trip
                </option>
                <option value='One-way'>One-way</option>
                <option value='Multi city'>Multi city</option>
              </select>
                <GiAirplaneDeparture id='tripicon' size={15}/>
                <input type='text' id='tripinputs' placeholder='Departing from'/>
                <GiAirplaneArrival id='tripicon' size={15}/>
                <input type='text'  id='tripinputs' placeholder='Arriving at'/>
                <div id='tripcontinue'>
                  <p>Continue</p>
                  <FiChevronDown id='continueicon' />
                </div>
              </div>
                <div>
                  <div id='tripextended'>
                    <input type='date'  id='tripinputs2'/>
                    <input type='text'  id='tripinputs2' placeholder='1 adult'/>
                    <select name='trips' id='tripinputs2'>
                      <option value='economy' selected>
                        Economy Class
                      </option>
                      <option value='premium'>Premium Comfort Class</option>
                      <option value='business'>Business Class</option>
                      <option value='premiere'>La Premiere</option>
                    </select>
                  </div>
                <div id='tripsearch'>
                  <p>I want to book with a bluebiz or corporate contract</p>
                   <button>Search flights</button>
                </div>
              </div>
          </div>
        </div>
        <div>
          <img src={'https://img.static-kl.com/transform/11bc98fe-6f4d-4875-b837-410565e2f2f3/?io=transform:fill,width:1440,height:480'} alt='background' id='bodybck' />
          {/* <img src={bck} alt='background' id='bodybck' /> */}
        </div>
        <div id='tripfuture'>
          <h1>Contributing to a sustainable future</h1>
          <p id='tripfuturep1'>Here's what we are doing and how we can help</p>
          <div id="learnmore">
            <Link to='/learnmore'>
            <p>Learn More </p>
            </Link>
            <BiChevronRight id='learnmoreicon'/>
          </div> 
        </div>
      </div>





      <div className='SHAKIROH mx-20'>
        <h2 className='ml-4 mt-16 text-4xl'>Destinations and deals</h2>
        <div className='flex ml-4 my-7'>
          <p className='py-3'>
            Discover our best Economy class deals on flights departing from{' '}
          </p>
          <div className='border-none ml-3 py-2'>
            <select
              id='citySelect'
              value={selectedCity}
              onChange={handleCityChange}
              className='w-full border-b border-black p-1 bg-transparent focus:outline-none focus:border-none focus:border-b focus:border-black active:outline-none active:border-none active:border-b active:border-black'
            >
              <option value='Lagos' className='bg-transparent'>
                Lagoss
              </option>
              <option value='Abuja' className='bg-transparent'>
                Abuja
              </option>
            </select>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='table'>
            <tbody>
              <tr>
                <td>Houston (United States)</td>
                <td>From USD 1,343*</td>
                <td>Round trip</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Washington (United States)</td>
                <td>From USD 1,236*</td>
                <td>Round trip</td>
                <td>Purple</td>
              </tr>
              <tr>
                <td>Montreal (Canada)</td>
                <td>From USD 1,044*</td>
                <td>Round trip</td>
                <td>Red</td>
              </tr>
              <tr>
                <td>Bermingham (United Kingdom)</td>
                <td>From USD 889*</td>
                <td>Round trip</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Toronto (Canada)</td>
                <td>From USD 938*</td>
                <td>Round trip</td>
                <td>Blue</td>
              </tr>
              <tr>
                <td>Paris (France)</td>
                <td>From USD 1,023*</td>
                <td>Round trip</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='ml-4 my-5'>
          {' '}
          *All amounts are in USD. Taxes and surcharges are included. No booking
          fee is applicable. Prices shown may vary depending on fare
          availability.
        </p>
        <button className='bg-blue-200 px-6 py-3 text-blue-700 ml-4'>
          Explore all deals
        </button>
        <h2 className='mt-16 ml-4 text-4xl'>Stay up to date</h2>
        <div className=''>
          <div className='flex justify-center my-9 '>
            <div className='card card-compact w-1/2 bg-base-100 shadow-xl mr-5 '>
              <figure>
                <img
                  src='https://img.static-kl.com/transform/0d64d723-9256-4593-b8e9-b973b5141a6b/?io=transform:fill,width:960,height:480'
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>Ready to travel?</h2>
                <p>
                  Start planning your next trip and dream away at the world's
                  most beautiful destinations.
                </p>
              </div>
            </div>
            <div className='card card-compact w-1/2 bg-base-100 shadow-xl ml-5'>
              <figure>
                <img
                  src='https://img.static-kl.com/transform/4aa04570-3bbc-419d-8707-748a25e9021a/?io=transform:fill,width:960,height:480'
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>Join Flying Blue</h2>
                <p>
                  Save time booking flights, earn Miles and recieve special
                  offers and deals.
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center mb-9'>
            <div className='card card-compact w-1/2 bg-base-100 shadow-xl mr-5'>
              <figure>
                <img
                  src='https://img.static-kl.com/transform/840b34fa-49a0-4797-9980-2deb115acc21/?io=transform:fill,width:960,height:480'
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>Discover the best deals</h2>
                <p>
                  Browse our selection of deals at the most favourable fares.
                </p>
              </div>
            </div>
            <div className='card card-compact w-1/2 bg-base-100 shadow-xl ml-5'>
              <figure>
                <img
                  src='https://img.static-kl.com/transform/3de16107-5796-4b56-ba33-7ea41c72eb97/?io=transform:fill,width:960,height:480'
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>World Business Class</h2>
                <p>
                  Travel in style with more privacy, comfort, and full attention
                  from our cabin crew.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='BOSS'></div>
    </>
  )
}

export default Home

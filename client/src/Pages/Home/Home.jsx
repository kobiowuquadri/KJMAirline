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
import { BsArrowLeftRight } from 'react-icons/bs'
import { BiSolidErrorCircle } from 'react-icons/bi'

function Home() {
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
            <p id='tripflight'> <IoAirplaneSharp id='tripbookicon' /> Book a flight</p>
            <p id='tripmiles'> <BiCoinStack id='tripbookicon' /> Book with miles</p>
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
              <GiAirplaneDeparture id='tripicon' size={15} />
              <input type='text' id='tripinputs' placeholder='Departing from' />
              <GiAirplaneArrival id='tripicon' size={15} />
              <input type='text' id='tripinputs' placeholder='Arriving at' />
              <div id='tripcontinue'>
                <p>Continue</p>
                <FiChevronDown id='continueicon' />
              </div>
            </div>
            <div>
              <div id='tripextended'>
                <input type='date' id='tripinputs2' />
                <input type='text' id='tripinputs2' placeholder='1 adult' />
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
            <BiChevronRight id='learnmoreicon' />
          </div>
        </div>
      </div>





      <div className='SHAKIROH sm:my-10 md:my-32 lg:my-40 xl:my-40 2xl:my-40 w-3/4 mx-auto '>
        <h2 className='mt-16 text-4xl'>Destinations and deals</h2>
        <div className='flex my-7'>
          <p className='py-3'>
            Discover our best Economy class deals on flights departing from{' '}
          </p>
          <div className='border-none ml-3 sm:ml-2 py-2'>
            <select
              id='citySelect'
              value={selectedCity}
              onChange={handleCityChange}
              className='w-full border-b border-black p-1 bg-transparent focus:outline-none focus:border-none focus:border-b focus:border-black active:outline-none active:border-none active:border-b active:border-black'
            >
              <option value='Lagos' className='bg-transparent'>
                Lagos
              </option>
              <option value='Abuja' className='bg-transparent'>
                Abuja
              </option>
            </select>
          </div>
        </div>


        {/* Bigger screen */}

        <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block flex flex-col space-y-4'>
          <div className='flex justify-between items-center py-5'>
            <div className='w-1/3 text-gray-900'>Houston <span className='text-gray-700'>(United States)</span></div>
            <div className='text-gray-900'>From USD 1,343*</div>
            <div className='flex'><BsArrowLeftRight /><span className='text-gray-700 ml-2'>Round trip</span></div>
            <div><BiSolidErrorCircle /></div>
          </div>

          <div className='flex justify-between items-center py-5'>
            <div className='w-1/3 text-gray-900'>Washington <span className='text-gray-700'>(United States)</span></div>
            <div className='text-gray-900'>From USD 1,236*</div>
            <div className='flex'><BsArrowLeftRight /><span className='text-gray-700 ml-2'>Round trip</span></div>
            <div><BiSolidErrorCircle /></div>
          </div>

          <div className='flex justify-between items-center py-5'>
            <div className='w-1/3 text-gray-900'>Montreal <span className='text-gray-700'>(Canada)</span></div>
            <div className='text-gray-900'>From USD 1,044*</div>
            <div className='flex'><BsArrowLeftRight /><span className='text-gray-700 ml-2'>Round trip</span></div>
            <div><BiSolidErrorCircle /></div>
          </div>

          <div className='flex justify-between items-center py-5'>
            <div className='w-1/3 text-gray-900'>Birmingham <span className='text-gray-700'>(United Kingdom)</span></div>
            <div className='text-gray-900'>From USD 889*</div>
            <div className='flex'><BsArrowLeftRight /><span className='text-gray-700 ml-2'>Round trip</span></div>
            <div><BiSolidErrorCircle /></div>
          </div>

          <div className='flex justify-between items-center py-5'>
            <div className='w-1/3 text-gray-900'>Toronto <span className='text-gray-700'>(Canada)</span></div>
            <div className='text-gray-900'>From USD 938*</div>
            <div className='flex'><BsArrowLeftRight /><span className='text-gray-700 ml-2'>Round trip</span></div>
            <div><BiSolidErrorCircle /></div>
          </div>

          <div className='flex justify-between items-center py-5'>
            <div className='w-1/3 text-gray-900'>Paris <span className='text-gray-700'>(France)</span></div>
            <div className='text-gray-900'>From USD 1,023*</div>
            <div className='flex'><BsArrowLeftRight /><span className='text-gray-700 ml-2'>Round trip</span></div>
            <div><BiSolidErrorCircle /></div>
          </div>
        </div>

        {/* Smaller screen */}

        <div className='flex flex-col lg:hidden xl:hidden 2xl:hidden'>
          <div className='flex justify-between w-full py-3'>
            <div>
              <div className='text-gray-900 pb-1'>Houston <span className='text-gray-700'>(United States)</span></div>
              <div className='flex'>
                <div className='text-gray-900'>From USD 1,343*</div>
                <div className='flex ml-4'><BsArrowLeftRight className='mt-1'/><span className='text-gray-700 ml-2'>Round trip</span></div>
              </div>
            </div>
            <div className='mt-4'><BiSolidErrorCircle /></div>
          </div>
          <div className='flex justify-between w-full py-3'>
            <div>
              <div className='text-gray-900 pb-1'>Washington <span className='text-gray-700'>(United States)</span></div>
              <div className='flex'>
                <div className='text-gray-900'>From USD 1,343*</div>
                <div className='flex ml-4'><BsArrowLeftRight className='mt-1'/><span className='text-gray-700 ml-2'>Round trip</span></div>
              </div>
            </div>
            <div className='mt-4'><BiSolidErrorCircle /></div>
          </div>
          <div className='flex justify-between w-full py-3'>
            <div>
              <div className='text-gray-900 pb-1'>Montreal <span className='text-gray-700'>(Canada)</span></div>
              <div className='flex'>
                <div className='text-gray-900'>From USD 1,343*</div>
                <div className='flex ml-4'><BsArrowLeftRight className='mt-1'/><span className='text-gray-700 ml-2'>Round trip</span></div>
              </div>
            </div>
            <div className='mt-4'><BiSolidErrorCircle /></div>
          </div>
          <div className='flex justify-between w-full py-3'>
            <div>
              <div className='text-gray-900 pb-1'>Birmingham <span className='text-gray-700'>(United Kingdom)</span></div>
              <div className='flex'>
                <div className='text-gray-900'>From USD 1,343*</div>
                <div className='flex ml-4'><BsArrowLeftRight className='mt-1'/><span className='text-gray-700 ml-2'>Round trip</span></div>
              </div> 
            </div>
            <div className='mt-4'><BiSolidErrorCircle /></div>
          </div>
          <div className='flex justify-between w-full py-3'>
            <div>
              <div className='text-gray-900 pb-1'>Toronto <span className='text-gray-700'>(Canada)</span></div>
              <div className='flex'>
                <div className='text-gray-900'>From USD 1,343*</div>
                <div className='flex ml-4'><BsArrowLeftRight className='mt-1'/><span className='text-gray-700 ml-2'>Round trip</span></div>
              </div>
            </div>
            <div className='mt-4'><BiSolidErrorCircle /></div>
          </div>
          <div className='flex justify-between w-full py-3'>
            <div>
              <div className='text-gray-900 pb-1'>Paris <span className='text-gray-700'>(France)</span></div>
              <div className='flex'>
                <div className='text-gray-900'>From USD 1,343*</div>
                <div className='flex ml-4'><BsArrowLeftRight className='mt-1'/><span className='text-gray-700 ml-2'>Round trip</span></div>
              </div>
            </div>
            <div className='mt-4'><BiSolidErrorCircle /></div>
          </div>
        </div>

        <p className='my-5 text-gray-500'>
          {' '}
          *All amounts are in USD. Taxes and surcharges are included. No booking
          fee is applicable. Prices shown may vary depending on fare
          availability.
        </p>
        <button className='bg-blue-200 px-6 py-3 text-blue-700'>
          Explore all deals
        </button>
        <h2 className='mt-16 text-4xl'>Stay up to date</h2>
        <div className=''>
          <div className='flex justify-center my-9 '>
            <div className='card card-compact w-1/2 bg-base-100 shadow-xl mr-5 '>
              <figure>
                <img
                  src='https://img.static-kl.com/transform/0d64d723-9256-4593-b8e9-b973b5141a6b/?io=transform:fill,width:960,height:480'
                  alt='Shoes'
                />
              </figure>
              <div className='card-body text-gray-600 p-5'>
                <h2 className='card-title text-2xl'>Ready to travel?</h2>
                <p className='py-3'>
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
              <div className='card-body text-gray-600 p-5'>
                <h2 className='card-title text-2xl'>Join Flying Blue</h2>
                <p className='py-3'>
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
              <div className='card-body text-gray-600 p-5'>
                <h2 className='card-title text-2xl'>Discover the best deals</h2>
                <p className='py-3'>
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
              <div className='card-body text-gray-600 p-5'>
                <h2 className='card-title text-2xl'>World Business Class</h2>
                <p className='py-3'>
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

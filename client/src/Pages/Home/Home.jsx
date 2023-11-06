import { useState, React } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
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

const deals = [
  {
    id: 1,
    city: 'Houston',
    country: 'United States',
    price: 'From USD 1,343*',
    tripType: 'Round trip'
  },
  {
    id: 2,
    city: 'Washington',
    country: 'United States',
    price: 'From USD 1,236*',
    tripType: 'Round trip'
  },
  {
    id: 3,
    city: 'Montreal',
    country: 'Canada',
    price: 'From USD 1,044*',
    tripType: 'Round trip'
  },
  {
    id: 4,
    city: 'Birmingham',
    country: 'United Kingdom',
    price: 'From USD 889*',
    tripType: 'Round trip'
  },
]

const deals2 = [
  {
    id: 5,
    city: 'Toronto',
    country: 'Canada',
    price: 'From USD 938*',
    tripType: 'Round trip'
  },
  {
    id: 6,
    city: 'Paris',
    country: 'France',
    price: 'From USD 1,023*',
    tripType: 'Round trip'
  }
]


const cards = [
  {
    id: 1,
    image:
      'https://img.static-kl.com/transform/0d64d723-9256-4593-b8e9-b973b5141a6b/?io=transform:fill,width:960,height:480',
    title: 'Ready to travel?',
    description:
      "Start planning your next trip and dream away at the world's most beautiful destinations."
  },
  {
    id: 2,
    image:
      'https://img.static-kl.com/transform/4aa04570-3bbc-419d-8707-748a25e9021a/?io=transform:fill,width:960,height:480',
    title: 'Join Flying Blue',
    description:
      'Save time booking flights, earn Miles and recieve special offers and deals.'
  },
  {
    id: 3,
    image:
      'https://img.static-kl.com/transform/840b34fa-49a0-4797-9980-2deb115acc21/?io=transform:fill,width:960,height:480',
    title: 'Discover the best deals',
    description: 'Browse our selection of deals at the most favourable fares.'
  },
  {
    id: 4,
    image:
      'https://img.static-kl.com/transform/3de16107-5796-4b56-ba33-7ea41c72eb97/?io=transform:fill,width:960,height:480',
    title: 'World Business Class',
    description:
      'Travel in style with more privacy, comfort, and full attention from our cabin crew.'
  }
]

function Home () {
  const [selectedCity, setSelectedCity] = useState('Lagos') // State to hold the selected city

  // Event handler to update the selected city
  const handleCityChange = event => {
    setSelectedCity(event.target.value)
  }
  const customBackgroundColor = 'rgb(194, 219, 234)'

  const [ search, setSearch ] = useState('')

  const [ show, setShow ] = useState(false)


  return (
    <>
      <div className='IFE'>
        <Navbar />
        <div id='tripposition'>
          <div id='tripbook'>
            <p id='tripflight'>
             <Link to={'/signup'} className='animate__animated animate__heartBeat animate__infinite'>
             {' '}
              <IoAirplaneSharp id='tripbookicon'  /> Book a flight
             </Link>
            </p>
            <p id='tripmiles'>
              {' '}
              <BiCoinStack id='tripbookicon' /> Book with miles
            </p>
          </div>
          <div id='tripcont'>
            <div id='tripconttop'>
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
              <input type='text' id='tripinputs' placeholder='Arriving at' onChange= {(e) => setSearch(e.target.value)} />
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
          <img
            src={
              'https://img.static-kl.com/transform/11bc98fe-6f4d-4875-b837-410565e2f2f3/?io=transform:fill,width:1440,height:480'
            }
            alt='background'
            id='bodybck'
          />
        </div>
        <div id='tripfuture'>
          <h1>Contributing to a sustainable future</h1>
          <p id='tripfuturep1'>Here's what we are doing and how we can help</p>
          <div id='learnmore'>
            <Link to='/learnmore'>
              <p>Learn More </p>
            </Link>
            <BiChevronRight id='learnmoreicon' />
          </div>
        </div>
      </div>

      <div className='tw-SHAKIROH tw-my-10 tw-md:my-32 tw-lg:my-40 tw-xl:my-40 tw-2xl:my-40 pt-1 tw-w-3/4 tw-mx-auto'>
        <h2 className='tw-mt-16 tw-text-4xl'>Destinations and deals</h2>
        <div className='tw-flex tw-my-7'>
          <p className='tw-py-3'>
            Discover our best Economy class deals on flights departing from{' '}
          </p>
          <div className='tw-border-none tw-ml-3 tw-sm:ml-2 tw-py-2'>
            <select
              id='citySelect'
              value={selectedCity}
              onChange={handleCityChange}
              className='tw-w-full tw-border-b tw-border-black tw-p-1 tw-bg-transparent tw-focus:outline-none tw-focus:border-none tw-focus:border-b tw-focus:border-black tw-active:outline-none tw-active:border-none tw-active:border-b tw-active:border-black'
            >
              <option value='Lagos' className='tw-bg-transparent'>
                America
              </option>
              <option value='Abuja' className='tw-bg-transparent'>
                Maryland
              </option>
            </select>
          </div>
        </div>

        <div className='tw-grid tw-grid-cols-1 tw-gap-4 tw-sm:grid-cols-2 tw-lg:grid-cols-3'>
          {deals.filter((deal => {
            return search.toLowerCase() === '' ? deal : deal.country.toLowerCase().includes(search) ||  deal.city.toLowerCase().includes(search);
          })).map(deal => (
            <div
              key={deal.id}
              className='tw-flex tw-flex-col tw-justify-between tw-p-5 tw-bg-white tw-shadow-md tw-rounded-lg'
            >
              <div className='tw-flex tw-justify-between tw-items-center'>
                <div className='tw-text-gray-900'>
                  {deal.city}{' '}
                  <span className='tw-text-gray-700'>({deal.country})</span>
                </div>
                <div className='tw-text-gray-900'>{deal.price}</div>
              </div>
              <div className='tw-flex tw-justify-between tw-items-center tw-mt-2'>
                <div className='tw-flex'>
                  <BsArrowLeftRight />
                  <span className='tw-text-gray-700 tw-ml-2'>
                    {deal.tripType}
                  </span>
                </div>
                <div>
                  <BiSolidErrorCircle />
                </div>
              </div>
            </div>
          ))}
        </div>

        
       { 
           show &&  <div className='tw-grid tw-grid-cols-1 tw-gap-4 tw-sm:grid-cols-2 tw-lg:grid-cols-3'>
                  {deals2.filter((deal2 => {
                    return search.toLowerCase() === '' ? deal2 : deal2.country.toLowerCase().includes(search);
                  })).map(deal2 => (
                    <div
                      key={deal2.id}
                      className='tw-flex tw-flex-col tw-justify-between tw-p-5 tw-bg-white tw-shadow-md tw-rounded-lg'
                    >
                      <div className='tw-flex tw-justify-between tw-items-center'>
                        <div className='tw-text-gray-900'>
                          {deal2.city}{' '}
                          <span className='tw-text-gray-700'>({deal2.country})</span>
                        </div>
                        <div className='tw-text-gray-900'>{deal2.price}</div>
                      </div>
                      <div className='tw-flex tw-justify-between tw-items-center tw-mt-2'>
                        <div className='tw-flex'>
                          <BsArrowLeftRight />
                          <span className='tw-text-gray-700 tw-ml-2'>
                            {deal2.tripType}
                          </span>
                        </div>
                        <div>
                          <BiSolidErrorCircle />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
        }

        <p className='tw-my-5 tw-text-gray-500'>
          {' '}
          *All amounts are in USD. Taxes and surcharges are included. No booking
          fee is applicable. Prices shown may vary depending on fare
          availability.
        </p>
        <button className='tw-bg-blue-200 tw-px-6 tw-py-3 tw-text-blue-700' onClick = { () => setShow(!show)}>
          Explore all deals
        </button>
        <h2 className='tw-mt-16 tw-text-4xl'>Stay up to date</h2>
        <div className='tw-grid tw-grid-cols-1 tw-gap-4 tw-sm:grid-cols-2 tw-lg:grid-cols-3'>
          {cards.map(card => (
            <div
              key={card.id}
              className='tw-col tw-w-full tw-sm:w-1/2 tw-lg:w-1/3'
            >
              <div className='tw-card tw-card-compact tw-bg-base-100 tw-shadow-xl tw-rounded-lg'>
                <figure>
                  <img src={card.image} alt={card.title} />
                </figure>
                <div className='tw-card-body tw-text-gray-600 tw-p-5'>
                  <h2 className='tw-card-title tw-text-2xl'>{card.title}</h2>
                  <p className='tw-py-3'>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Home

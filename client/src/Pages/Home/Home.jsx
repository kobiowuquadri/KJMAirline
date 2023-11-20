import React, { useState, useEffect } from 'react'
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
import { RingLoader } from 'react-spinners'

const deals = [
  {
    id: 1,
    city: 'Houston',
    country: 'United States',
    price: 'From USD 500*',
    tripType: 'Round trip'
  },
  {
    id: 2,
    city: 'Washington',
    country: 'United States',
    price: 'From USD 500*',
    tripType: 'Round trip'
  },
  {
    id: 3,
    city: 'Montreal',
    country: 'Canada',
    price: 'From USD 500*',
    tripType: 'Round trip'
  },
  {
    id: 4,
    city: 'Birmingham',
    country: 'United Kingdom',
    price: 'From USD 500*',
    tripType: 'Round trip'
  }
]

const deals2 = [
  {
    id: 5,
    city: 'Toronto',
    country: 'Canada',
    price: 'From USD 500*',
    tripType: 'Round trip'
  },
  {
    id: 6,
    city: 'Paris',
    country: 'France',
    price: 'From USD 500*',
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
  const [isLoading, setIsLoading] = useState(true)

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className='loading'>
          <RingLoader color='#36d7b7' />
        </div>
      ) : (
        <>
          <div className='IFE'>
            <Navbar />

            <div id='bodybck'>
              <div id='tripbook'>
                <p id='tripflight'>
                  <Link
                    to={'/signup'}
                    className='animate__animated animate__heartBeat animate__infinite'
                  >
                    {' '}
                    <IoAirplaneSharp id='tripbookicon' /> Book a flight
                  </Link>
                </p>
                <p id='tripmiles'>
                 <Link to={'/login'}>
                 {' '}
                  <BiCoinStack id='tripbookicon' /> Book with miles
                 </Link>
                </p>
              </div>
              <div id='tripfuture'>
                <h3>Contributing to a sustainable future</h3>
                <p id='tripfuturep1'>
                  Here's what we are doing and how we can help
                </p>
                <div id='learnmore' className='d-flex align-items-center'>
                  <Link to='/information'>Learn More </Link>
                  <BiChevronRight id='learnmoreicon' />
                </div>
              </div>
            </div>
          </div>

          <div className='tw-SHAKIROH tw-w-3/4 tw-mx-auto'>
            <h2 className='tw-mt-16 tw-text-4xl pt-5 tw-xs:text-red text-center'>
            TOP DESTINATIONS AND DEALS
            </h2>

            <div className='tw-grid tw-grid-cols-1 tw-gap-4 tw-sm:grid-cols-2 tw-lg:grid-cols-3'>
              {deals.map(deal => (
                  <div
                    key={deal.id}
                    className='tw-flex tw-flex-col tw-justify-between tw-p-5 tw-bg-white tw-shadow-md tw-rounded-lg'
                  >
                   <Link to={'/login'}>
                   <div className='tw-flex tw-justify-between tw-items-center'>
                      <div className='tw-text-gray-900'>
                        {deal.city}{' '}
                        <span className='tw-text-gray-700'>
                          ({deal.country})
                        </span>
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
                   </Link>
                  </div>
                ))}
            </div>

            {show && (
              <div className='tw-grid tw-grid-cols-1 tw-gap-4 tw-sm:grid-cols-2 tw-lg:grid-cols-3'>
                {deals2.map(deal2 => (
                    <div
                      key={deal2.id}
                      className='tw-flex tw-flex-col tw-justify-between tw-p-5 tw-bg-white tw-shadow-md tw-rounded-lg'
                    >
                      <Link to={'/login'}>
                      <div className='tw-flex tw-justify-between tw-items-center'>
                        <div className='tw-text-gray-900'>
                          {deal2.city}{' '}
                          <span className='tw-text-gray-700'>
                            ({deal2.country})
                          </span>
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
                      </Link>
                    </div>
                  ))}
              </div>
            )}

            <p className='tw-my-5 tw-text-gray-500'>
              {' '}
              *All amounts are in USD. Taxes and surcharges are included. No
              booking fee is applicable. Prices shown may vary depending on fare
              availability.
            </p>
            <button
              className='tw-bg-blue-200 tw-px-6 tw-py-3 tw-text-blue-700'
              onClick={() => setShow(!show)}
            >
              Explore all deals
            </button>

            {/* Book chopper and Private jet */}
            <div className='d-flex flex-column justify-content-center align-items-center p-4'>
            <p className='d-flex align-items-center gap-2 btn btn-primary p-3 fs-3'>
             <IoAirplaneSharp id='tripbookicon' />
                  <Link
                    to={'/signup'}
                    className='text-white'
                  >
                    Book a Chopper
                  </Link>
                </p>
                <p  className='d-flex align-items-center gap-2 btn btn-primary p-3 fs-3'>
                <IoAirplaneSharp id='tripbookicon' />
                  <Link
                    to={'/signup'}
                    className='text-white'
                  >
                    Book a Private Jet
                  </Link>
                </p>
            </div>



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
                      <h2 className='tw-card-title tw-text-2xl'>
                        {card.title}
                      </h2>
                      <p className='tw-py-3'>{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  )
}

export default Home

import React from 'react'
import InformationData from '../../Assets/Data/Information.json'

function Information() {
  return (
    <>
      <div>
        <h1>Information</h1>
        <h4>Whether you are all set to book your ticket or are looking for practical information after your booking, we've got you covered!</h4>
        <h1>Book and manage your trip</h1>
        {InformationData.map((item, index) => (
          <div key={index}>
            {item.id === 8 && <h1>Get ready to travel</h1>}
            {item.id === 15 && <h2>How can we help you?</h2>}
            <div className='card card-compact w-1/2 bg-base-100 shadow-xl mr-5'>
              <figure>
                <img src={item.img} alt="Hello" />
              </figure>
              <div className='card-body text-gray-600 p-5'>
                <h2 className='card-title text-2xl'>{item.heading}</h2>
                <p className='py-3'>{item.parag}</p>
              </div>
            </div>
          </div>
        ))}

      </div>

    </>
  )
}

export default Information
import React from 'react'
import InformationData from '../../Assets/Data/Information.json'

function Information() {
  return (
    <>
      <div className='w-3/4 mx-auto my-10'>
        <h1 className='text-3xl text-gray-700 mb-6'>Information</h1>
        <h4 className='py-6'>
          Whether you are all set to book your ticket or are looking for practical information after your booking, we've got you covered!
        </h4>
        <div>
          <h1 className='text-3xl text-gray-700 my-4'>Book and manage your trip</h1>
          <div className='flex flex-wrap -mx-4 justify-between'>
            {InformationData.map((item) => {
              if (item.id >= 1 && item.id <= 7) {
                return (
                  <div key={item.id} className='w-1/3 h-auto px-4 py-5'>
                    <div className='card card-compact bg-base-100 shadow-md rounded-md h-full'>
                      <figure>
                        <img src={item.img} alt='' className='h-32 w-full object-cover rounded-t-md' />
                      </figure>
                      <div className='card-body text-gray-600 p-5'>
                        <h2 className='card-title text-2xl'>{item.heading}</h2>
                        <p className='py-3'>{item.parag}</p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div>
            <h1 className='text-3xl text-gray-700 my-10'>
              Get ready to travel
            </h1>
            <div className='flex flex-wrap -mx-4'>
              {InformationData.map((item) => {
                if (item.id >= 8 && item.id <= 14) {
                  return (
                    <div key={item.id} className='w-1/3 h-auto px-4 py-5'>
                      <div className='card card-compact bg-base-100 shadow-md rounded-md h-full'>
                        <figure>
                          <img src={item.img} alt='' className='h-32 w-full object-cover rounded-t-md' />
                        </figure>
                        <div className='card-body text-gray-600 p-5'>
                          <h2 className='card-title text-2xl'>{item.heading}</h2>
                          <p className='py-3'>{item.parag}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                else {
                  return null;
                }
              })}
            </div>
          </div>
          <div>
            <h1 className='text-3xl text-gray-700 my-10'>
              How can we help you?
            </h1>
            <div className='flex flex-wrap -mx-4'>
              {InformationData.map((item) => {
                if (item.id >= 15 && item.id <= 20) {
                  return (
                    <div key={item.id} className='w-1/3 h-auto px-4 py-5'>
                      <div className='card card-compact bg-base-100 shadow-md rounded-md h-full'>
                        <div className='card-body text-gray-600 p-5'>
                          <h2 className='card-title text-2xl'>{item.heading}</h2>
                          <p className='py-3'>{item.parag}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                else {
                  return null;
                }
              })}
            </div>
          </div>
          <div>
            <h1 className='text-3xl text-gray-700 my-10'>
              Frequent flyers and coorperate travellers
            </h1>
            <div className='flex flex-wrap -mx-4'>
              {InformationData.map((item) => {
                if (item.id >= 21 && item.id <= 22) {
                  return (
                    <div key={item.id} className='w-1/3 h-auto px-4 py-5'>
                      <div className='card card-compact bg-base-100 shadow-md rounded-md h-full'>
                        <div className='card-body text-gray-600 p-5'>
                          <h2 className='card-title text-2xl'>{item.heading}</h2>
                          <p className='py-3'>{item.parag}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Information
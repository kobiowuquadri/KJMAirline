import React from 'react'
import InformationData from '../../Assets/Data/Information.json'
import Navbar from '../../Components/Navbar/Navbar';

function Information() {
  return (
    <>
    <Navbar/>
    <div className='tw-w-3/4 tw-mx-auto tw-my-10'>
  <h1 className='tw-text-3xl tw-text-gray-700 tw-mb-6'>Information</h1>
  <h4 className='tw-py-6'>
    Whether you are all set to book your ticket or are looking for practical information after your booking, we've got you covered!
  </h4>
  <div>
    <h1 className="tw-text-2xl tw-text-gray-700 tw-my-4 tw-sm:text-3xl tw-md:text-3xl tw-lg:text-3xl tw-xl:text-3xl tw-2xl:text-3xl">
      Book and manage your trip
    </h1>
    <div className="tw-flex tw-flex-wrap tw-mx-4 justify-between sm:-mx-2">
      {InformationData.map((item) => {
        if (item.id >= 1 && item.id <= 7) {
          return (
            <div
              key={item.id}
              className="tw-w-auto tw-h-auto tw-px-4 tw-py-5 sm:tw-w-2/6 sm:tw-px-2 sm:tw-py-4 md:tw-px-3 md:tw-py-3"
            >
              <div className="card card-compact bg-base-100 shadow-md rounded-md h-full">
                <figure>
                  <img
                    src={item.img}
                    alt=""
                    className="h-32 w-full object-cover rounded-t-md sm:h-24 md:h-36"
                  />
                </figure>
                <div className="card-body text-gray-600 tw-p-5 sm:tw-px-4 sm:tw-py-5">
                  <h2 className="card-title tw-text-xl sm:tw-text-xl md:tw-text-2xl lg:tw-text-2xl xl:tw-text-2xl 2xl:tw-text-2xl sm:tw-pb-4 md:tw-text-2xl">
                    {item.heading}
                  </h2>
                  <p className="tw-py-3 sm:tw-py-0 sm:tw-text-base">
                    {item.parag}
                  </p>
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
      <h1 className="tw-text-2xl tw-text-gray-700 tw-my-10 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
        Get ready to travel
      </h1>
      <div className="tw-flex tw-flex-wrap tw-mx-4 justify-between sm:-mx-2">
        {InformationData.map((item) => {
          if (item.id >= 8 && item.id <= 14) {
            return (
              <div
                key={item.id}
                className="tw-w-auto tw-h-auto tw-px-4 tw-py-5 sm:tw-w-2/6 sm:tw-px-2 sm:tw-py-4 md:tw-px-3 md:tw-py-3"
              >
                <div className="card card-compact bg-base-100 shadow-md rounded-md h-full">
                  <figure>
                    <img
                      src={item.img}
                      alt=""
                      className="h-32 w-full object-cover rounded-t-md sm:h-24 md:h-36"
                    />
                  </figure>
                  <div className="card-body text-gray-600 tw-p-5 sm:tw-px-4 sm:tw-py-5">
                    <h2 className="card-title tw-text-xl sm:tw-text-xl md:tw-text-2xl lg:tw-text-2xl xl:tw-text-2xl 2xl:tw-text-2xl sm:tw-pb-4 md:tw-text-2xl">
                      {item.heading}
                    </h2>
                    <p className="tw-py-3 sm:tw-py-0 sm:tw-text-base">
                      {item.parag}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
    <div>
      <h1 className="tw-text-2xl tw-text-gray-700 tw-my-10 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
        How can we help you?
      </h1>
      <div className="tw-flex tw-flex-wrap tw-mx-4 justify-between sm:-mx-2">
        {InformationData.map((item) => {
          if (item.id >= 15 && item.id <= 20) {
            return (
              <div
                key={item.id}
                className="tw-w-auto tw-h-auto tw-px-4 tw-py-5 sm:tw-w-2/6 sm:tw-px-2 sm:tw-py-4 md:tw-px-3 md:tw-py-3"
              >
                <div className="card card-compact bg-base-100 shadow-md rounded-md h-full">
                  <div className="card-body text-gray-600 tw-p-5 sm:tw-px-4 sm:tw-py-5">
                    <h2 className="card-title tw-text-xl sm:tw-text-xl md:tw-text-2xl lg:tw-text-2xl xl:tw-text-2xl 2xl:tw-text-2xl sm:tw-pb-4 md:tw-text-2xl">
                      {item.heading}
                    </h2>
                    <p className="tw-py-3 sm:tw-py-0 sm:tw-text-base">
                      {item.parag}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
    <div>
      <h1 className="tw-text-2xl tw-text-gray-700 tw-my-10 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
        Frequent flyers and coorperate travellers
      </h1>
      <div className="tw-flex tw-flex-wrap tw-mx-4 justify-between sm:-mx-2">
        {InformationData.map((item) => {
          if (item.id >= 21 && item.id <= 22) {
            return (
              <div
                key={item.id}
                className="tw-w-auto tw-h-auto tw-px-4 tw-py-5 sm:tw-w-2/6 sm:tw-px-2 sm:tw-py-4 md:tw-px-3 md:tw-py-3"
              >
                <div className="card card-compact bg-base-100 shadow-md rounded-md h-full">
                  <div className="card-body text-gray-600 tw-p-5 sm:tw-px-4 sm:tw-py-5">
                    <h2 className="card-title tw-text-xl sm:tw-text-xl md:tw-text-2xl lg:tw-text-2xl xl:tw-text-2xl 2xl:tw-text-2xl sm:tw-pb-4 md:tw-text-2xl">
                      {item.heading}
                    </h2>
                    <p className="tw-py-3 sm:tw-py-0 sm:tw-text-base">
                      {item.parag}
                    </p>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Information;

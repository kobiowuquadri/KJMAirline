import React from "react";
import InformationData from "../../Assets/Data/Information.json";

function Information() {
  return (
    <>
      <div className="w-3/4 mx-auto my-10 sm:w-10/12 sm:h-screen">
        <h1 className="text-3xl text-gray-700 mb-6">
          Information
        </h1>
        <h4 className="py-6">
          Whether you are all set to book your ticket or are looking for
          practical information after your booking, we've got you covered!
        </h4>
        <div>
          <h1 className="text-2xl text-gray-700 my-4 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
            Book and manage your trip
          </h1>
          <div className="flex flex-wrap -mx-4 justify-between sm:-mx-2">
            {InformationData.map((item) => {
              if (item.id >= 1 && item.id <= 7) {
                return (
                  <div
                    key={item.id}
                    className="w-auto h-auto px-4 py-5 sm:w-2/6 sm:px-2 sm:py-4 md:px-3 md:py-3"
                  >
                    <div className="card card-compact bg-base-100 shadow-md rounded-md h-full">
                      <figure>
                        <img
                          src={item.img}
                          alt=""
                          className="h-32 w-full object-cover rounded-t-md sm:h-24 md:h-36"
                        />
                      </figure>
                      <div className="card-body text-gray-600 p-5 sm:px-4 sm:py-5">
                        <h2 className="card-title text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl sm:pb-4 md:text-2xl">
                          {item.heading}
                        </h2>
                        <p className="py-3 sm:py-0 sm:text-base">
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
            <h1 className="text-2xl text-gray-700 my-10 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
              Get ready to travel
            </h1>
            <div className="flex flex-wrap -mx-4 justify-between sm:-mx-2">
              {InformationData.map((item) => {
                if (item.id >= 8 && item.id <= 14) {
                  return (
                    <div
                      key={item.id}
                      className="w-auto h-auto px-4 py-5 sm:w-2/6 sm:px-2 sm:py-4 md:px-3 md:py-3"
                    >
                      <div className="card card-compact bg-base-100 shadow-md rounded-md h-full">
                        <figure>
                          <img
                            src={item.img}
                            alt=""
                            className="h-32 w-full object-cover rounded-t-md sm:h-24 md:h-36"
                          />
                        </figure>
                        <div className="card-body text-gray-600 p-5 sm:px-4 sm:py-5">
                          <h2 className="card-title text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl sm:pb-4 md:text-2xl">
                            {item.heading}
                          </h2>
                          <p className="py-3 sm:py-0 sm:text-base">
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
            <h1 className="text-2xl text-gray-700 my-10 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
              How can we help you?
            </h1>
            <div className="flex flex-wrap -mx-4 justify-between sm:-mx-2">
              {InformationData.map((item) => {
                if (item.id >= 15 && item.id <= 20) {
                  return (
                    <div
                      key={item.id}
                      className="w-auto h-auto px-4 py-5 sm:w-2/6 sm:px-2 sm:py-4 md:px-3 md:py-3"
                    >
                      <div className="card card-compact bg-base-100 shadow-md rounded-md h-full">
                        <div className="card-body text-gray-600 p-5 sm:px-4 sm:py-5">
                          <h2 className="card-title text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl sm:pb-4 md:text-2xl">
                            {item.heading}
                          </h2>
                          <p className="py-3 sm:py-0 sm:text-base">
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
            <h1 className="text-2xl text-gray-700 my-10 sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
              Frequent flyers and coorperate travellers
            </h1>
            <div className="flex flex-wrap -mx-4 justify-between sm:-mx-2">
              {InformationData.map((item) => {
                if (item.id >= 21 && item.id <= 22) {
                  return (
                    <div
                      key={item.id}
                      className="w-auto h-auto px-4 py-5 sm:w-2/6 sm:px-2 sm:py-4 md:px-3 md:py-3"
                    >
                      <div className="card card-compact bg-base-100 shadow-md rounded-md h-full">
                        <div className="card-body text-gray-600 p-5 sm:px-4 sm:py-5">
                          <h2 className="card-title text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl sm:pb-4 md:text-2xl">
                            {item.heading}
                          </h2>
                          <p className="py-3 sm:py-0 sm:text-base">
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

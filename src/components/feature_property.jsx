/* eslint-disable no-unused-vars */
import React from 'react';
import { Search, MapPin, DollarSign, Home, Scaling, BedSingle, Bath } from 'lucide-react';
import { realEstateData } from '../utils/data';

const FeatureProperty = () => {
    return (
        <>
            <div className="p-8 rounded-xl flex flex-col items-center justify-center">
                <div className="w-full max-w-5xl bg-white rounded-2xl p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <div className="relative group">
                                <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-300 group-hover:text-emerald-500 transition-colors duration-300" />
                                <select className="w-full pl-10 pr-4 py-3 rounded-lg border  focus:border-emerald-300 focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-white transition duration-300 ease-in-out appearance-none">
                                    <option value="" disabled selected hidden>Property Type</option>
                                    <option>House</option>
                                    <option>Apartment</option>
                                    <option>Condo</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <div className="relative group">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-300  group-hover:text-emerald-500 transition-colors duration-300" />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border  focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white transition duration-300 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-1">
                            <div className="relative group">
                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-300  group-hover:text-emerald-500 transition-colors duration-300" />
                                <input
                                    type="text"
                                    placeholder="Min Price"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border  focus:border-emerald-300  focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white transition duration-300 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 lg:col-span-1">
                            <div className="relative group">
                                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-300  group-hover:text-emerald-500 transition-colors duration-300" />
                                <input
                                    type="text"
                                    placeholder="Max Price"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white transition duration-300 ease-in-out"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            <button className="flex items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-emerald-500hover:from-emerald-600 hover:to-emerald-600  font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 shadow-md">
                                <Search className="mr-2" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center bg-[#cef5e4] p-8">
                    <h2 className="text-4xl text-emerald-700 font-bold mb-8 text-center">Feature Property</h2>
                    <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
                        {realEstateData.map((data, index) => (
                            <div key={index} className="mb-4 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
                                <div className="">
                                    <img src={data.images} alt="" className="" />
                                </div>

                                <div className="p-4">
                                    <div className="pb-2">
                                        <a href="#" className="text-lg text-emerald-700 hover:text-green-600 font-medium duration-500 ease-in-out">{data.type}</a>
                                    </div>
                                    <div className="pb-6">
                                        <a href="#" className="text-lg hover:text-green-600 font-medium duration-500 ease-in-out">
                                            {data.location.address} {""}
                                            {data.location.state} {""}
                                            {data.location.country}
                                        </a>
                                    </div>

                                    <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-6">
                                        <li className="mr-4 flex items-center text-left">
                                            <i className="mr-2 text-2xl text-green-600">
                                                <Scaling className="h-5 w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" />
                                            </i>
                                            <span className="text-sm">{data.size_sqf} sqf</span>
                                        </li>

                                        <li className="mr-4 flex items-center text-left">
                                            <i className="mr-2 text-2xl text-green-600">
                                                <BedSingle className="h-5 w-5" />
                                            </i>
                                            <span className="text-sm">{data.bedrooms} Bedrooms</span>
                                        </li>

                                        <li className="flex items-center text-left">
                                            <i className="mr-2 text-2xl text-green-600">
                                                <Bath className="h-5 w-5" viewBox="0 0 24 24" />
                                            </i>
                                            <span className="text-sm">{data.bathrooms} bathrooms</span>
                                        </li>
                                    </ul>

                                    <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                                        <li className="text-left">
                                            <span className="text-sm text-gray-400">Price</span>
                                            <p className="m-0 text-base font-medium">Ksh. {data.price}</p>
                                        </li>

                                        <li className="text-left">
                                            <span className="text-sm text-gray-400">Rating</span>
                                            <ul className="m-0 flex items-center p-0 font-medium">
                                                <li className="inline text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </li>
                                                <li className="inline text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </li>
                                                <li className="inline text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </li>
                                                <li className="inline text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </li>
                                                <li className="inline text-yellow-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                    </svg>
                                                </li>
                                                <li className="ml-2 inline text-base">{data.rating}({data.votes})</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureProperty;
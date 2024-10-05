/* eslint-disable no-unused-vars */
import React from 'react'
import ImgData from '../assets/imgData';

const Hero = () => {
    return (
        <div>
            <div className="relative">
                <img src={ImgData('hero')} className="absolute inset-0 h-full w-full object-cover" alt="" />
                <div className="relative bg-emerald-700 bg-opacity-90">
                    <div className="relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
                                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none">Find Your Dream Home</h2>
                                <p className="mb-4 max-w-xl text-base text-gray-200 md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt laudantium rem molestiae.</p>
                                <a href="/" aria-label="" className="inline-flex items-center font-semibold tracking-wider text-teal-400 transition-colors duration-200 hover:text-teal-300">
                                    Learn more
                                    <svg className="ml-2 inline-block w-3" fill="currentColor" viewBox="0 0 12 12">
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="w-full max-w-xl xl:w-5/12 xl:px-8">
                                <div className="overflow-hidden rounded-xl border-t-4 border-emerald-600 bg-white p-7 shadow-2xl shadow-emerald-300 sm:p-10">
                                    <h3 className="mb-4 text-xl font-bold text-emerald-900 sm:mb-6 sm:text-center sm:text-2xl">Own Your House today</h3>
                                    <form>
                                        <div className="mb-1 sm:mb-2">
                                            <label className="mb-1 inline-block font-medium text-emerald-900">Full name</label>
                                            <input placeholder="Your name" required="" type="text" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label className="mb-1 inline-block font-medium text-emerald-900">E-mail</label>
                                            <input placeholder="yourname@example.com" required="" type="text" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" id="email" name="email" />
                                        </div>
                                        <div className="mb-1 sm:mb-2">
                                            <label className="mb-1 inline-block font-medium text-emerald-900">Message</label>
                                            <textarea placeholder="Your Message" required="" type="text" className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring" />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button type="submit" className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md ring-emerald-200 transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring">Send Message</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero;
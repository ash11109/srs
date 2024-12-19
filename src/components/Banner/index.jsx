import React from 'react'
import '../Banner/index.css'
import banner from './../../assets/Images/srs/banner-girl.png'

const Banner = () => {
    return (
        <>
            <div className='max-h-full overflow-hidden'>
                <div className='relative'>
                    <section className="w-full mx-auto flex flex-col px-8 pt-2 pb-10 md:flex-row-reverse sm:px-12 bg-gradient-to-t from-blue-50 to-[#3F65B7] items-center">
                        <img
                            alt="SRSolution"
                            className="mb-8 w-full dark:contrast-200 sm:mb-0 sm:ml-4 md:w-1/2 z-10"
                            src={banner}
                        />
                        <div className="mr-8 w-full ml-10 z-20">
                            <div className="">
                                <div className="max-w-xl mx-auto my-auto  dark:bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg px-4 pt-5 pb-2 rounded-md shadow">
                                    <div className="text-center">
                                        <h1 className="mb-2 text-xl lg:text-3xl font-semibold text-gray-100">Contact Us</h1>
                                        <p className="text-gray-300 lg:text-sm text-xs">Fill up the form below to send us a message.</p>
                                    </div>
                                    <div className="my-7">
                                        <form action="" method="" id="form">
                                            <div className="mb-3 relative">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder=" "
                                                    required
                                                    className="peer w-full bg-blue-50 px-3 pt-3 pb-2 placeholder-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 "
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-3 top-0 text-sm text-gray-400 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#3F65B7]">
                                                    Full Name
                                                </label>
                                            </div>

                                            <div className="mb-3 relative">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder=" "
                                                    required
                                                    className="peer w-full px-3 bg-blue-50 pt-3 pb-2 placeholder-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-3 top-0 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#3F65B7]">
                                                    Email Address
                                                </label>
                                            </div>

                                            <div className="mb-3 relative">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    placeholder=" "
                                                    required
                                                    className="peer w-full px-3 pt-3 bg-blue-50 pb-2 placeholder-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                                                />
                                                <label
                                                    htmlFor="phone"
                                                    className="absolute left-3 top-0 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#3F65B7]">
                                                    Phone Number
                                                </label>
                                            </div>

                                            <div className="mb-3 relative">
                                                <textarea
                                                    rows="5"
                                                    name="message"
                                                    id="message"
                                                    placeholder=""
                                                    required
                                                    className="peer w-full px-3 pt-3 bg-blue-50 pb-2 placeholder-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300">
                                                </textarea>
                                                <label
                                                    htmlFor="message"
                                                    className="absolute left-3 top-0 text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#3F65B7]">
                                                    Your Message
                                                </label>
                                            </div>

                                            <div className="mb-6">
                                                <button
                                                    type="submit"
                                                    className="w-full px-3 py-3 text-white bg-blue-900 rounded-md focus:bg-blue-950 focus:outline-none">
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className='absolute top-0 right-0 w-full pt-24 pr-20'>
                        <h3 className='text-right text-[60px] lg:text-[70px] font-bold text-[#3F65B7] opacity-20 hidden xl:block'>From Code to Solutions</h3>
                        <h3 className='text-right text-[50px] lg:text-[60px] font-bold text-[#3F65B7] opacity-15 hidden lg:block'>From Code to Solutions </h3>
                        <h3 className='text-right text-[40px] lg:text-[50px] font-bold text-[#3F65B7] opacity-10 hidden md:block'>From Code to Solutions </h3>
                        <h3 className='text-right text-[30px] lg:text-[40px] mt-2 font-bold text-[#3F65B7] opacity-5 hidden sm:block'>From Code to Solutions </h3>
                        <h3 className='text-right text-[20px] lg:text-[30px] mt-2 font-bold text-[#3F65B7] opacity-5 hidden md:block'>From Code to Solutions </h3>
                        <h3 className='text-right text-[10px] lg:text-[20px] mt-2 font-bold text-[#3F65B7] opacity-5 hidden sm:block'>From Code to Solutions </h3>
                    </div>
                    <div id="background-wrap absolute w-full hidden md:block">
                        <div className="bubble x1"></div>
                        <div className="bubble x2"></div>
                        <div className="bubble x3"></div>
                        <div className="bubble x4"></div>
                        <div className="bubble x5"></div>
                        <div className="bubble x6"></div>
                        <div className="bubble x7"></div>
                        <div className="bubble x8"></div>
                        <div className="bubble x9"></div>
                        <div className="bubble x10"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
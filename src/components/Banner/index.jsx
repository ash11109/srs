import React from 'react'
import '../Banner/index.css'
import banner from './../../assets/Images/banner-girl.png'

const Banner = () => {
    return (
        <>
            <div className='max-h-full overflow-hidden'>
                <div className='relative'>
                    <section className="w-full mx-auto flex flex-col px-8 pt-2 pb-10 sm:flex-row-reverse sm:px-12 bg-gradient-to-t from-blue-50 to-[#3F65B7] items-center">
                        <img
                            alt="SRSolution"
                            className="mb-8 w-full dark:contrast-200 sm:mb-0 sm:ml-4 sm:w-1/2 z-10"
                            src={banner}
                        />
                        <div className="mr-4 w-full ml-10 md:text-left sm:w-1/2 sm:text-left z-20">
                            <h1 className="mb-3  md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight dark:text-dark-50 text-blue-950">
                                <span className='text-violet-500'>C</span>
                                <span className='text-indigo-500'>R</span>
                                <span className='text-blue-500'>E</span>
                                <span className='text-green-500'>A</span>
                                <span className='text-yellow-500'>T</span>
                                <span className='text-orange-500'>I</span>
                                <span className='text-red-500'>V</span>
                                <span className='text-white'>E </span>
                                AND
                                <span className='text-pink-100'> E</span>
                                <span className='text-pink-200'>F</span>
                                <span className='text-pink-300'>F</span>
                                <span className='text-pink-400'>E</span>
                                <span className='text-pink-500'>C</span>
                                <span className='text-pink-600'>T</span>
                                <span className='text-pink-700'>I</span>
                                <span className='text-pink-800'>V</span>
                                <span className='text-pink-900'>E,</span>

                                <br />
                                WE'RE EVERYWHERE
                            </h1>
                            <p className="sm:text-sm md:text-base lg:text-xl xl:text-2xl font-extralight mb-6 leading-relaxed text-slate-700 dark:text-slate-400">
                                We at SysRoot Solution believe in making a strong presence in digital and technical world.
                            </p>
                            <button className="rounded-lg border-0 bg-[#3F65B7] px-4 py-2 sm:text-xs lg:text-lg xl:text-xl text-white shadow-lg shadow-blue-100 transition hover:bg-blue-900 hover:shadow-blue-400 dark:shadow-blue-900">
                                Contact Now
                            </button>
                        </div>
                    </section>
                    <div className='absolute top-0 w-full pt-24'>
                        <h3 className='text-center text-[110px]  font-bold text-[#3F65B7] opacity-20 hidden xl:block'>From Code to Solutions </h3>
                        <h3 className='text-center text-[80px] font-bold text-[#3F65B7] opacity-15 hidden lg:block'>From Code to Solutions </h3>
                        <h3 className='text-center text-[50px] mt-3 font-bold text-[#3F65B7] opacity-10 hidden md:block'>From Code to Solutions </h3>
                        <h3 className='text-center text-[40px] mt-4 font-bold text-[#3F65B7] opacity-5 hidden sm:block'>From Code to Solutions </h3>
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
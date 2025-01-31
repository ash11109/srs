import React from 'react'
import { FaCheckCircle, FaEnvelope, FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const WhyChooseUs = () => {
    return (
        <section className="light py-14 md:py-24 bg-blue-50 flex content-center items-center min-h-screen">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-12 gap-6 items-center justify-between mb-10 md:mb-16 border-l-blue-950">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <h2 className="text-[32px] font-bold leading-normal text-[#162b58]">
                            Why <span className="text-[#3F65B7]">Choose</span> Us ? <br /> Let's check the reason . . .
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
                        <p className="text-lg leading-[1.7] opacity-60 text-gray-700">
                        Let us introduce ourselves and showcase the exceptional qualities that set us apart, giving you compelling reasons to choose our organization with confidence.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-9 lg:grid-cols-2 justify-items-center">
                    <div className="relative max-w-4xl mx-auto text-center mt-8 border rounded-lg shadow-sm p-8 md:-rotate-3" style={{ boxShadow: `0px 5px 10px #3F65B750` }}>
                        <p className='font-semibold text-gray-400'>About</p>
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#3F65B7] mb-4 tracking-wider">
                            Sysroot Solution Pvt Ltd
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify lg:mt-6">
                            Sysroot Solution Pvt Ltd is a leading software and app development company committed to delivering cutting-edge digital solutions.
                            We specialize in <strong>custom software development, web applications, mobile apps, and enterprise solutions</strong> tailored to your business needs.
                            With a focus on innovation, scalability, and security, we empower businesses with next-gen technology.
                        </p>
                        <div className="text-center mt-8">
                            <p className="md:text-lg font-semibold tracking-wide text-gray-600">
                                Partner with Sysroot Solution Pvt Ltd and transform your ideas into reality!
                            </p>
                            <NavLink to="more/Contact" className="inline-block mt-6 group [transform:translateZ(0)] px-6 py-2 rounded-lg border overflow-hidden relative before:absolute before:bg-[#3F65B7] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-300">
                                <span className="relative z-0 text-[#3F65B7] group-hover:text-gray-100 transition ease-in-out duration-500">Contact Us Now</span>
                            </NavLink>
                            <p className='my-4 text-gray-600 text-lg'>Connect through our Social Media</p>
                            <div className='flex justify-center space-x-5'>
                                <span className='shadow rounded-full bg-blue-400 p-3 hover:bg-[#3F65B7] duration-200 cursor-pointer'><FaFacebookSquare className='text-white text-xl'></FaFacebookSquare></span>
                                <span className='shadow rounded-full bg-blue-400 p-3 hover:bg-[#3F65B7] duration-200 cursor-pointer'><FaInstagram className='text-white text-xl'></FaInstagram></span>
                                <span className='shadow rounded-full bg-blue-400 p-3 hover:bg-[#3F65B7] duration-200 cursor-pointer'><FaLinkedin className='text-white text-xl'></FaLinkedin></span>
                                <span className='shadow rounded-full bg-blue-400 p-3 hover:bg-[#3F65B7] duration-200 cursor-pointer'><FaEnvelope className='text-white text-xl'></FaEnvelope></span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto mt-8">
                        <h3 className="text-2xl font-bold text-[#3F65B7] text-center mb-6 lg:-rotate-6 tracking-widest">
                            Why Choose Us?
                        </h3>
                        <ul className="space-y-4">
                            {[
                                ["Expert Development Team", "Our skilled professionals ensure high-quality, future-ready solutions."],
                                ["Custom & Scalable Solutions", "We develop software that grows with your business."],
                                ["Latest Technologies", "We leverage modern tech stacks for efficiency and performance."],
                                ["Timely Delivery", "We prioritize deadlines without compromising quality."],
                                ["Cost-Effective Services", "Get premium solutions at competitive prices."],
                                ["Dedicated Support", "Our customer support ensures smooth post-deployment assistance."]
                            ].map(([title, desc], index) => (
                                <li key={index} className="border-l-8 border-srs-primary flex items-start space-x-3 shadow-lg py-3 px-4 rounded-r-full cursor-pointer hover:scale-105 duration-300" >
                                    <span className="text-emerald-500 text-xl mt-1"><FaCheckCircle></FaCheckCircle></span>
                                    <div>
                                        <h4 className="text-lg font-medium tracking-wide text-blue-950">{title}</h4>
                                        <p className="text-gray-500 text-sm">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default WhyChooseUs
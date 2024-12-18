import React from 'react';
import './index.css';
import { CgWebsite } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";
import { IoConstructSharp } from "react-icons/io5";
import { FaDigitalOcean } from "react-icons/fa6";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { AiOutlineAntDesign } from "react-icons/ai";

const Services = () => {
    const servicesList = [
        {
            serial: "01",
            colorTheme: "#f0b27a",
            image: <CgWebsite />,
            name: "Web Development",
            description: "All kinds of websites including educational, e-commerce, other business etc.",
            path: ""
        },
        {
            serial: "02",
            colorTheme: "#76d7c4",
            image: <MdDeveloperMode />,
            name: "App Development",
            description: "Developing mobile apps for Android and iOS platforms.",
            path: ""
        },
        {
            serial: "03",
            colorTheme: "#85c1e9",
            image: <IoConstructSharp />,
            name: "Software Development",
            description: "Custom Software Development as per your need.",
            path: ""
        },
        {
            serial: "04",
            colorTheme: "#d98880",
            image: <FaDigitalOcean />,
            name: "SEO & Digital Marketing",
            description: "We help you list your business on google with help of SEO and Digital Marketing on Various social media platforms.",
            path: ""
        },
        {
            serial: "05",
            colorTheme: "#f7dc6f",
            image: <LuBriefcaseBusiness />,
            name: "Business Services",
            description: "From Company Registration to Gst Registration Our dedicated team is there to help you.",
            path: ""
        },
        {
            serial: "06",
            colorTheme: "#c39bd3",
            image: <AiOutlineAntDesign />,
            name: "UI/UX Design",
            description: "Making interactive design that take your experience next level.",
            path: ""
        }
    ];

    return (
        <section className="light py-14 md:py-24 bg-white flex content-center items-center min-h-screen">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-12 gap-6 items-center justify-between mb-10 md:mb-16 border-l-blue-950">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <h2 className="text-[32px] font-bold leading-normal text-[#162b58]">
                            What <span className="text-[#3F65B7]">Services</span> We Provide to Our Valued Customers . . .
                        </h2>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
                        <p className="text-lg leading-[1.7] opacity-60">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum corporis fugit minima voluptate, obcaecati omnis dignissimos mollitia similique debitis veniam ducimus, tempore perferendis voluptatibus provident ipsa expedita quia labore quod.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center">
                    {servicesList.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative shadow w-full md:max-w-sm lg:max-w-md bg-gray-50 rounded-2xl p-4 transition-all duration-500 min-h-72`}
                            style={{ boxShadow: `0px 4px 6px ${service.colorTheme}` }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = service.colorTheme;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "rgb(249 250 251)";
                            }}
                        >
                            <div className="flex justify-between items-start">
                                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                                    <span
                                        className="text-4xl group-hover:scale-125 transition-all duration-500"
                                        style={{ color: service.colorTheme }}
                                    >
                                        {service.image}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-7xl font-bold text-[#3f65b713] group-hover:scale-90 transition-all duration-500">
                                        {service.serial}
                                    </p>
                                </div>
                            </div>

                            <h4 className="text-xl font-semibold text-[#162b58] mb-3 capitalize transition-all duration-500 group-hover:text-white tracking-wider">
                                {service.name}
                            </h4>
                            <p className="text-sm font-normal text-gray-400 transition-all duration-500 leading-5 group-hover:text-white">
                                {service.description}
                            </p>
                        </div>

                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;

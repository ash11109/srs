import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import srsLogo from '../../assets/images/logo/srs.png';
import { IoIosHelpBuoy } from "react-icons/io";
import { ImBlog } from "react-icons/im";
import { MdPhone, MdEventAvailable, MdOutlineAppSettingsAlt, MdDesignServices, MdOutlineDomainAdd } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaDigitalOcean, FaBusinessTime } from "react-icons/fa6";
import { SiJirasoftware } from "react-icons/si";
import { BiSolidCctv } from "react-icons/bi";
import './index.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubMenu = (index) => {
        setOpenSubmenu((prev) => (prev === index ? null : index));
    };

    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Services",
            subMenu: [
                {
                    logo: <MdOutlineAppSettingsAlt />,
                    title: "App Development",
                    subTitle: "Innovative and user-friendly mobile applications to elevate your business.",
                    path: "/services/AppDevelopment",
                },
                {
                    logo: <SiJirasoftware />,
                    title: "Software Development",
                    subTitle: "Custom software solutions for streamlined operations.",
                    path: "/services/SoftwareDevelopment",
                },
                {
                    logo: <MdDesignServices />,
                    title: "UX / UI Design",
                    subTitle: "Crafting intuitive and visually appealing user experiences.",
                    path: "/services/UI&UXDesign",
                },
                {
                    logo: <CgWebsite />,
                    title: "Website Development",
                    subTitle: "Responsive and dynamic websites tailored to your needs.",
                    path: "/services/WebDevelopment",
                },
                {
                    logo: <BiSolidCctv />,
                    title: "CCTV Installation",
                    subTitle: "Reliable surveillance solutions for your safety and security",
                    path: "/services/CCTVInstallation",
                },
                {
                    logo: <FaDigitalOcean />,
                    title: "Digital Marketing",
                    subTitle: "Strategies that drive engagement and boost online presence.",
                    path: "/services/DigitalMarketing",
                },
                {
                    logo: <MdOutlineDomainAdd />,
                    title: "Domain & Hosting",
                    subTitle: "Secure and scalable domain registration and hosting services.",
                    path: "/services/Domain&Hosting",
                },
                {
                    logo: <FaBusinessTime />,
                    title: "Business Services",
                    subTitle: "Comprehensive solutions to support and grow your business.",
                    path: "/services/BusinessServices",
                },
            ],
        },
        {
            title: "Products",
            path: "/products",
        },
        {
            title: "Clients",
            path: "/clients",
        },
        {
            title: "More",
            subMenu: [
                {
                    logo: <ImBlog />,
                    title: "Blogs",
                    subTitle: "Discover More: Check Out Our Latest Blogs Here.",
                    path: "more/Blog",
                },
                {
                    logo: <MdPhone />,
                    title: "Contact Us",
                    subTitle: "Need Assistance? Our Team is Just a Click Away!",
                    path: "more/Contact",
                },
                {
                    logo: <MdEventAvailable />,
                    title: "Events",
                    subTitle: "Be Where It’s Happening! Explore Our Events Today.",
                    path: "more/Events",
                },
                {
                    logo: <IoIosHelpBuoy />,
                    title: "Help Center",
                    subTitle: "Need Assistance? Visit Our Help Center for Quick Solutions.",
                    path: "more/HelpCenter",
                },
                {
                    logo: <IoShieldCheckmarkOutline />,
                    title: "Security",
                    subTitle: "Understand how we take your privacy seriously.",
                    path: "more/Security",
                },
            ],
        },
    ];

    // Settings For mobile Navigation
    const servicesSubMenu = navLinks.find(link => link.title === "Services")?.subMenu;
    const moreSubMenu = navLinks.find(link => link.title === "More")?.subMenu;
    const mainNavs = navLinks.filter(link => !link.subMenu);
    const mobileNavs = [...mainNavs, ...(moreSubMenu || [])];

    return (
        <div className="relative bg-blue-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-3  xxl:py-5 lg:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">SRSolution</span>
                            <img
                                className="h-8 w-auto sm:h-12"
                                src={srsLogo}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 lg:hidden">
                        <button
                            type="button"
                            className="rounded-md p-2 inline-flex items-center justify-center text-srs-primary hover:text-gray-500 hover:bg-gray-100"
                            onClick={() => setOpen(!open)}
                        >
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden lg:flex space-x-6 lg:space-x-10">
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            link.path
                                            &&
                                            <NavLink to={link.path} className="text-base font-medium hover:text-srs-primary-hover text-srs-primary-hover">{link.title}</NavLink>
                                        }
                                        {
                                            link.subMenu
                                            &&
                                            <div className="relative">
                                                <button type="button" className="group rounded-md text-srs-primary inline-flex items-center text-base font-medium hover:text-gray-900 "
                                                    onClick={() => toggleSubMenu(index)}
                                                >
                                                    <span className='group-hover:text-srs-primary-hover'>{link.title}</span>
                                                    <svg
                                                        className={
                                                            openSubmenu === index
                                                                ? "transform rotate-180 ml-2 h-5 w-5 group-hover:text-srs-primary text-srs-primary-hover transition ease-out duration-200"
                                                                : "ml-2 h-5 w-5 text-srs-primary group-hover:text-srs-primary-hover"
                                                        }
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                                <div
                                                    onMouseLeave={() => setOpenSubmenu(null)}
                                                    className={
                                                        openSubmenu === index
                                                            ? " block translate-y-0 transition ease-out duration-200 absolute z-[999999] -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                            : " hidden translate-y-1 absolute z-[999999] -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                    }
                                                >
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                                                            {
                                                                link.subMenu.map((link, index) => {
                                                                    return (
                                                                        <NavLink key={index} to={link.path} className="-m-3 p-2 flex items-start rounded-lg hover:bg-gray-50 group">
                                                                            <span className="text-srs-primary linkLogo transform transition-transform duration-300 ease-in-out group-hover:scale-110">
                                                                                {link.logo}
                                                                            </span>
                                                                            <div className="ml-4">
                                                                                <p className="text-base font-medium text-gray-600">
                                                                                    {link.title}
                                                                                </p>
                                                                                <p className="mt-1 text-xs text-gray-400">
                                                                                    {link.subTitle}
                                                                                </p>
                                                                            </div>
                                                                        </NavLink>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </nav>
                    <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-srs-primary hover:bg-srs-primary-hover">
                            Sign In
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={
                    open
                        ? "block scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-[999999]"
                        : "hidden scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-[999999]"
                }
            >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5 bg-blue-50">
                        <div className="flex items-center justify-between">
                            <div>
                                <img className="h-8 w-auto" src={srsLogo} alt="SRSolution" />
                            </div>
                            <div className="-mr-2">
                                <button type="button" className="rounded-md p-1 inline-flex items-center justify-center text-gray-400 hover:text-srs-primary-hover"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="border-white rounded-md border-2 p-8 mt-4 bg-white">
                            <nav className="grid gap-y-5">
                                {servicesSubMenu?.map((item, index) => (
                                    <div key={index} >
                                        <NavLink to={item.path} className="-m-2 px-3 py-1 flex items-center rounded-md hover:bg-gray-50">
                                            <span className='linkLogo text-srs-primary'>{item.logo}</span>
                                            <span className="ml-3 text-base font-medium text-gray-500">
                                                {item.title}
                                            </span>
                                        </NavLink>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8  bg-blue-50 rounded-md p-5">
                            {mobileNavs?.map((item, index) => (
                                <div key={index}>
                                    <NavLink to={item.path} className="-m-4 px-3 py-2 flex items-center rounded-md text-srs-primary">
                                        <span className="ml-3 text-base font-medium ">
                                            {item.title}
                                        </span>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                        <div>
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-srs-primary hover:bg-srs-primary-hover"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
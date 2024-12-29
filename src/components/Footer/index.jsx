import React from 'react'
import { NavLink } from "react-router-dom";
import { FaPhone, FaLocationDot, FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import '../Footer/index.css'
import logoSRS from '../../assets/images/logo/srs.png'

const Footer = () => {

  // "About us" column
  const about = [
    {
      link: "/about",
      name: "Company History",
    },
    {
      link: "/team",
      name: "Meet the Team",
    },
    {
      link: "more/blog",
      name: "Blog",
    },
    {
      link: "more/events",
      name: "Events",
    },
    {
      link: "/career",
      name: "Career",
    },
  ];

  // "Our Services" Column
  const services = [
    {
      link: "/services/WebDevelopment",
      name: "Web Development",
    },
    {
      link: "/services/AppDevelopment",
      name: "App Development",
    },
    {
      link: "/services/DigitalMarketing",
      name: "Digital Marketing",
    },
    {
      link: "/services/SoftwareDevelopment",
      name: "Software Development",
    },
    {
      link: "/services/UI&UXDesign",
      name: "UI/UX Design",
    },
    {
      link: "/services/CCTVInstallation",
      name: "CCTV Installation",
    },
    {
      link: "/services/BusinessServices",
      name: "Business Services",
    },
    {
      link: "/services/Domain&Hosting",
      name: "Domain and Hosting",
    },
  ];

  // "Helpful Links" Column
  const helpfulLinks = [
    {
      link: "/clients",
      name: "Clients",
    },
    {
      link: "/products",
      name: "Products",
    },
    {
      link: "/faq",
      name: "FAQ",
    },
    {
      link: "more/contact",
      name: "Contact Us",
    },
    {
      link: "more/helpCenter",
      name: "Help center",
    },
    {
      link: "more/security",
      name: "Security",
    },
  ];


  return (
    <>
      <footer className="bg-[#162b58] bottom-0 overflow-hidden">
        <div className="max-w-screen-xl px-2 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#3F65B7]">
                <img src={logoSRS} alt="SRSolution Logo" className="w-8 h-6" />
                <span className='font-bold text-2xl tracking-widest'>SRSolution</span>
              </div>
              <p className="max-w-md mx-auto mt-6 leading-relaxed text-gray-400 sm:max-w-xs sm:mx-0 justified">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                consequuntur amet culpa cum itaque neque.
              </p>

              <ul className="flex justify-center gap-10 mt-8 md:gap-8 lg:justify-start">
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-[#3F65B7] transition hover:text-gray-300"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-[#3F65B7] transition hover:text-gray-300"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-[#3F65B7] transition hover:text-gray-300"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-[#3F65B7] transition hover:text-gray-300"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-[#3F65B7] transition hover:text-gray-300"
                  >
                    <FaLinkedinIn className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
              <div className="footer-cols">
                <p className="text-lg font-medium text-[#3F65B7]">About Us</p>

                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    {about.map((service, index) => (
                      <li key={index}>
                        <NavLink
                          to={service.link}
                          className="text-white transition hover:text-white/75" href="/"
                        >
                          <p className="text-white text-sm mb-3">{service.name}</p>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="footer-cols">
                <p className="text-lg font-medium text-[#3F65B7]">Our Services</p>
                <div className="mt-8">
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li key={index}>
                        <NavLink
                          to={service.link}
                          className="text-white transition hover:text-white/75" href="/"
                        >
                          <p className="text-white text-sm mb-3">{service.name}</p>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="footer-cols">
                <p className="text-lg font-medium text-[#3F65B7]">Helpful Links</p>

                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                  {helpfulLinks.map((service, index) => (
                      <li key={index}>
                        <NavLink
                          to={service.link}
                          className="text-white transition hover:text-white/75" href="/"
                        >
                          <p className="text-white text-sm mb-3">{service.name}</p>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="footer-cols">
                <p className="text-lg font-medium text-[#3F65B7]">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center lg:justify-start gap-1.5 group"
                      href="/"
                    >
                      {/* <MdOutlineEmail className='text-white text-xl' /> */}
                      <FaTelegramPlane className='text-white text-xl' />

                      <span className="text-white transition group-hover:text-white/75 break-all text-xs">
                        info@sysrootsolution.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center lg:justify-start gap-1.5 group"
                      href="/"
                    >
                      <FaPhone className='text-white text-lg' />

                      <span className="text-white transition group-hover:text-white/75 text-xs">
                        +91-8789171115
                      </span>
                    </a>
                  </li>
                  <li
                    className="flex items-start justify-center gap-1.5 lg:justify-start"
                  >
                    <FaLocationDot className='text-white text-xl' />
                    <address className="-mt-0.5 not-italic text-white text-xs">
                      New Kishore Ganj, Road No. 4,<br />Ranchi, Jharkhand, <br />834001
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-12 border-t border-gray-800">
            <div className="items-center text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-400 my-2">
                <span className="block sm:inline mx-2">All rights reserved.</span>

                <a
                  className="inline-block text-[#3F65B7] transition hover:text-gray-200"
                  href="/"
                >
                  Terms & Conditions
                </a>

                <span className='mx-2'>|</span>

                <a
                  className="inline-block text-[#3F65B7] transition hover:text-gray-200"
                  href="/"
                >
                  Privacy Policy
                </a>
              </p>

              <p className="text-sm text-gray-500 sm:order-first sm:mt-0 my-2">
                &copy; 2024 Sysroot Solution Pvt Ltd.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
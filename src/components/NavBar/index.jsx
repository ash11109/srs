import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import '../NavBar/index.css';
import logoSRS from './../../assets/Images/srs/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
      buttonRef.current && !buttonRef.current.contains(e.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const services = [
    {
      link: "/services/WebDevelopment",
      name: "Web Development",
      details: [
        "Frontend Development",
        "Backend Development",
        "Full-stack Development",
        "CMS Development",
        "E-commerce Development",
      ],
    },
    {
      link: "/services/AppDevelopment",
      name: "App Development",
      details: [
        "Native App Development",
        "Cross-Platform Development",
      ],
    },
    {
      link: "/services/DigitalMarketing",
      name: "Digital Marketing",
      details: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing (SMM)",
        "Content Marketing",
        "Email Marketing",
      ],
    },
    {
      link: "/services/SoftwareDevelopment",
      name: "Software Development",
      details: [
        "Custom Software Solutions",
        "Enterprise Software Development",
        "API Development and Integration",
        "Desktop Application Development",
      ],
    },
    {
      link: "/services/UI&UXDesign",
      name: "UI/UX Design",
      details: [
        "User Experience Research",
        "Responsive Design",
        "Interaction Design",
        "Design Systems Development",
      ],
    },
    {
      link: "https://sysrootsolution.com/",
      name: "Marketing CRM",
      details: [
        "Connect with third-party tools that you're already using.",
      ],
    },
    {
      link: "/services/CCTVInstallation",
      name: "CCTV Installation",
      details: [
        "Residential CCTV Solutions",
        "Commercial CCTV Solutions",
        "CCTV Accessories",
        "Additional Services",
      ],
    },
    {
      link: "/services/BusinessServices",
      name: "Business Services",
      details: [
        "IT Support Services",
        "Digital Transformation",
        "Corporate Communication",
        "Marketing and Branding",
      ],
    },
    {
      link: "/services/Domain&Hosting",
      name: "Domain and Hosting",
      details: [
        "Domain Registration",
        "Specialized Hosting",
        "Domain and Hosting Management",
        "Website Security Services",
        "Technical Support",
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-[9999999]">
      <div className='w-full bg-blue-100'>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2 md:p-5 relative">
          <a href="http://www.sysrootsolution.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logoSRS} className="h-7 md:h-14 px-2" alt="SRS Logo" />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu-full"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className='hidden md:table bg-blue-50 py-1 px-3 shadow-lg cursor-pointer -rotate-0 absolute right-0 top-1 rounded mr-2'>
            <p className="flex items-center gap-2 text-gray-600 m-0"><FaPhoneAlt className='text-[#3F65B7]' /><span className='text-[20px] font-semibold'>+91-8789171115</span></p>
            <p className='flex items-center gap-2 text-gray-600'><IoMdMail className='text-[#3F65B7]' />info@sysrootsolution.com</p>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-between items-center mx-auto w-full bg-[#3F65B7] shadow-sm nav-menu'>
        <div
          id="mega-menu-full"
          className={`items-center justify-between mx-auto font-medium max-w-screen-xl w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="flex flex-col p-2 md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">

            <li className='cursor-pointer'>
              <NavLink to="/" className="text-lg block py-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Home</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/about" className="text-lg block py-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">About</NavLink>
            </li>
            <li className='cursor-pointer'>
              <span onClick={toggleDropdown} ref={buttonRef} className='text-lg block py-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0'>Services</span>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/products" className="text-lg block py-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Products</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/clients" className="text-lg block py-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Clients</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/blog" className="text-lg block py-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Blog</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/contact" className="text-lg block py-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Contact</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/login" className="text-lg block py-2 underline text-blue-200 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-emerald-100 md:p-0">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {isDropdownOpen && (
        <div id="mega-menu-full-dropdown" ref={dropdownRef} className="z-[99999] mt-1 border-gray-200 shadow bg-white dark:bg-gray-800  md:bg-blue-100 border-y dark:border-gray-600 static md:absolute w-full">
          <div className="max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {services.map((service, index) => (
                <ul key={index} className="space-y-2">
                  <li>
                    <NavLink
                      to={service.link}
                      className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <div className="font-semibold text-[#3F65B7]">{service.name}</div>
                      {service.details.map((detail, i) => (
                        <p key={i} className="text-sm text-gray-500 dark:text-gray-400">
                          {detail}
                        </p>
                      ))}
                    </NavLink>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

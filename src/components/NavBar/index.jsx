import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import '../NavBar/index.css';

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
      buttonRef.current &&
      !buttonRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-[9999999]">
      <div className='w-full bg-[#3F65B7] md:table hidden shadow-sm'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-center d-flex gap-3'>
          <a href="https://sysrootsolution.com/" target='blank'><FaFacebookF className='my-3 text-blue-100 hover:text-blue-500 cursor-pointer' /></a>
          <a href="https://sysrootsolution.com/" target='blank'><FaTwitter className='my-3 text-xl text-blue-100 hover:text-blue-400 cursor-pointer' /></a>
          <a href="https://sysrootsolution.com/" target='blank'><IoLogoInstagram className='my-3 text-xl text-blue-100 hover:text-yellow-500 cursor-pointer' /></a>
          <a href="https://sysrootsolution.com/" target='blank'><FaLinkedinIn className='my-3 text-xl text-blue-100 hover:text-blue-300 cursor-pointer' /></a>
        </div>
      </div>
      <div className='w-full bg-blue-100'>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2 md:p-5 relative">
          <a href="http://www.sysrootsolution.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="logo.png" className="h-7 md:h-14 px-2" alt="SRS Logo" />
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
          <div className='hidden md:table bg-blue-50 py-3 px-4 shadow-lg shadow-blue-50 cursor-pointer -rotate-6 absolute right-0 -top-7 rounded mr-5'>
            <p className="flex items-center gap-2 text-gray-600"><FaPhoneAlt className='text-[#3F65B7]' /><span className='text-[27px] font-semibold'>+91-8789171115</span></p>
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
              <NavLink to="/" className="text-lg block p-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Home</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/about" className="text-lg block p-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">About</NavLink>
            </li>
            <li className='cursor-pointer'>
              <span onClick={toggleDropdown} ref={buttonRef} className='text-lg block p-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0'>Services</span>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/products" className="text-lg block p-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Products</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/clients" className="text-lg block p-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Clients</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/blog" className="text-lg block p-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Blog</NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="/contact" className="text-lg block p-2 text-gray-100 rounded hover:text-[#3F65B7] hover:bg-blue-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {
        
      }

      {/* <hr/> */}
      {isDropdownOpen && (
        <div id="mega-menu-full-dropdown" ref={dropdownRef} className="z-[99999] mt-1 border-gray-200 shadow bg-white dark:bg-gray-800  md:bg-blue-100 border-y dark:border-gray-600 absolute w-full">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-3 md:px-6">
            <ul>
              <li>
                <NavLink to="/services/WebDevelopment" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold text-[#3F65B7]">Web Development</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Backend Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Full-stack Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CMS Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">E-commerce Development</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/AppDevelopment" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold text-[#3F65B7]">App Development</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Native App Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cross-Platform Development</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/DigitalMarketing" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold text-[#3F65B7]">Digital Marketing</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Search Engine Optimization (SEO)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Social Media Marketing (SMM)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Content Marketing</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email Marketing</p>
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/services/AppDevelopment" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold text-[#3F65B7]">Software Development</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Custom Software Solutions</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Enterprise Software Development</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">API Development and Integration</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Desktop Application Development</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/UI&UXDesign" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold text-[#3F65B7]">UI/UX Design</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">User Experience Research</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Responsive Design</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Interaction Design</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Design Systems Development</p>
                </NavLink>
              </li>
              <li>
                <a href="https://sysrootsolution.com/" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold text-[#3F65B7]">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/services/CCTVInstallation" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold text-[#3F65B7]">CCTV Installation</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Residential CCTV Solutions</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Commercial CCTV Solutions</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CCTV Accessories</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Additional Services</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/BusinessServices" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold text-[#3F65B7]">Business Services</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">IT Support Services</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Digital Transformation</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Corporate Communication</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Marketing and Branding</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/Domain&Hosting" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="font-semibold text-[#3F65B7]">Domain and Hosting</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Domain Registration</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Specialized Hosting</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Domain and Hosting Management</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Website Security Services</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Technical Support</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

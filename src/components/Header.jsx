import React, { useState } from 'react';
import backgroundImage from '../assets/header-bg.svg';
import agencyLogo from '../assets/logo.svg';
import searchIcon from '../assets/search.png';
import fbIcon from '../assets/fb.png';
import hamburgerIcon from './hamburger.png'; // Import hamburger icon
import './Header.css';
import { ImMenu3, ImMenu4 } from 'react-icons/im';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const fontLato = {
        fontFamily: 'Lato, sans-serif',
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <section
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            className="bg-cover bg-center h-screen">

            <header className="text-white p-0 m-0  z-10 top-0">
                <div className="container mx-auto flex flex-wrap justify-between items-center px-4 lg:px-8">
                    <div className="logo flex items-center mx-4 my-4 lg:my-6">
                        <img src={agencyLogo} alt="Agency Logo" className="h-8 mr-2" />
                        <div className="text-xl lg:text-2xl font-bold" style={fontLato}>Agency</div>
                    </div>
                    <nav className=" px-5 hidden lg:flex  p-4 lg:bg-transparent lg:flex-row gap-5 bg-gray-600">
                        <a href="#" className=" font-medium hover:text-[#fba419]" style={fontLato}>Home</a>
                        <a href="#" onClick={() => scrollToSection('about')} className=" font-medium hover:text-[#fba419]" style={fontLato}>About Us</a>
                        <a href="#" onClick={() => scrollToSection('team')} className=" font-medium hover:text-[#fba419]" style={fontLato}>Team</a>
                        <a href="#" onClick={() => scrollToSection('services')} className=" font-medium hover:text-[#fba419]" style={fontLato}>Services</a>
                        <a href="#" onClick={() => scrollToSection('process')} className=" font-medium hover:text-[#fba419]" style={fontLato}>Process</a>
                        <a href="#" onClick={() => scrollToSection('clients')} className=" font-medium hover:text-[#fba419]" style={fontLato}>Clients</a>
                        <a href="#" onClick={() => scrollToSection('work')} className=" font-medium hover:text-[#fba419]" style={fontLato}>Work</a>
                        
                    </nav>
                    <div className=' max-lg:block hidden'>
                       
                   {
                    !isMobileMenuOpen && <ImMenu3 className=' size-12' onClick={toggleMobileMenu}/>
                   }
                   {
                    isMobileMenuOpen && <ImMenu4 className=' size-12' onClick={toggleMobileMenu}/>
                   }
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="mobile-menu bg-gray-800 w-full text-center py-4 lg:hidden">
                        <nav className="flex flex-col items-center">
                            <a href="#" className="my-2 font-medium text-white hover:text-[#fba419]" style={fontLato}>Home</a>
                            <a href="#" onClick={() => scrollToSection('about')} className="my-2 font-medium text-white hover:text-[#fba419]" style={fontLato}>About Us</a>
                            <a href="#" onClick={() => scrollToSection('team')} className="my-2 font-medium text-white hover:text-[#fba419]" style={fontLato}>Team</a>
                            <a href="#" onClick={() => scrollToSection('services')} className="my-2 font-medium text-white hover:text-[#fba419]" style={fontLato}>Services</a>
                            <a href="#" onClick={() => scrollToSection('process')} className="my-2 font-medium text-white hover:text-[#fba419]" style={fontLato}>Process</a>
                            <a href="#" onClick={() => scrollToSection('clients')} className="my-2 font-medium text-white hover:text-[#fba419]" style={fontLato}>Clients</a>
                            <a href="#" onClick={() => scrollToSection('work')} className="my-2 font-medium text-white hover:text-[#fba419]" style={fontLato}>Work</a>
                            
                        </nav>
                    </div>
                )}
                <div className="bg-white border-b w-full"></div>
            </header>

            <div className="flex flex-col lg:flex-row justify-center items-center py-10 h-full w-full px-4 lg:px-0 lg:w-6/12 lg:pl-20 lg:py-25">
                <div className="p-4 lg:p-8 text-center lg:text-left">
                    <h1 className="text-3xl lg:text-6xl font-bold text-white mb-4" style={fontLato}>
                        Creative idea for <span className="text-[#fba419]">Professionals</span>
                    </h1>
                    <p className="text-white mb-6 text-base" style={fontLato}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="bg-[#fba419] text-white px-5 py-2 rounded-full hover:shadow-md" style={fontLato}>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Header;

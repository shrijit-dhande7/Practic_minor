import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets.jsx'; // Importing assets

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={assets.logo}
            alt="logo"
            className="w-32 h-32 mb-4"
          />
          <h2 className="text-2xl font-bold">Placement Preparation</h2>
          <p className="text-sm mt-2">Your Gateway to Success!</p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2">
            <li><Link to="/header2" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/resume" className="hover:underline">Resume Builder</Link></li>
            <li><Link to="/quiz" className="hover:underline">Quiz</Link></li>
            <li><Link to="/dsatracker" className="hover:underline">DSA Tracker</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Contact us!</h3>
          <p className="text-sm">email@fakeemail.com</p>
          <p className="text-sm mt-2">Phone: +1(800)867-5309</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

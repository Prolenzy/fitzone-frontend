import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Address */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold uppercase">FitZone Gym</h2>
          <p className="text-sm mt-2">
            123 Nairobi Street, Kenya <br />
            Phone: +254 700 000 000 <br />
            Email: info@fitzonegym.com
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
            <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 text-2xl">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        &copy; {new Date().getFullYear()} FitZone Gym. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

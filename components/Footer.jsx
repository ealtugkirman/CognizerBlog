import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <div className="flex items-center justify-center bg-gradient-to-r from-footer via-footer to-purple-900">
    <div className="md:w-2/3 px-4 mt-20 text-white flex flex-col">
      <div className="text-3xl md:text-4xl lg:text-7xl font-bold">
        <h2 className="">Cogist</h2>
      </div>
      <div className="flex mt-8 flex-col md:flex-row md:justify-between">
        <p className="text-gray-400 text-sm md:text-md">
          The Cognizer is a publishing platform initiated by CogIST, a
          cognitive science community from Turkey. On this platform, articles
          and essays on different topics from different fields of cognitive
          science are published in a way that would bridge the gap between
          public audience and experts.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex mt-24 mb-12 flex-row justify-between">
          <a href="https://www.linkedin.com" className="hidden md:block cursor-pointer text-gray-400 hover:text-white uppercase" aria-label="Hakkımızda">
            About Us
          </a>
          <a href="https://www.linkedin.com" className="hidden md:block cursor-pointer text-gray-400 hover:text-white uppercase" aria-label="Amaçımız">
            Publishing Policy
          </a>
          <a href="https://www.linkedin.com" className="hidden md:block cursor-pointer text-gray-400 hover:text-white uppercase" aria-label="İletişim">
            Contact Us
          </a>
          <div className="flex text-2xl flex-row space-x-8 items-center justify-between">
            <a href="https://twitter.com/the_cognizer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
        <hr className="border-gray-600" />
        <p className="text-center my-12 text-gray-600">
          Copyright © 2023 rely-labs.com
        </p>
      </div>
    </div>
  </div>
);

export default Footer;

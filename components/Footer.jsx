import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => (
  <div className="flex items-center justify-center bg-gradient-to-r from-footer via-footer to-purple-900">
    <div className="md:w-2/3 px-4 mt-20 text-white flex flex-col">
      <div className="text-3xl md:text-4xl lg:text-7xl font-bold">
        <h2 className="">Size nasıl yardımcı olabiliriz?</h2>
      </div>
      <div className="flex mt-8 flex-col md:flex-row md:justify-between">
        <p className="text-gray-400 text-md md:text-xl">
          hukukteknolojisi.com, dünya genelinde teknolojiyi etkileyen hukuki gelişmeler ile hukuku etkileyen teknolojik gelişmeleri inceler ve aktarır.
        </p>
        <div className="w-44 pt-6 md:pt-0">
          <a href="https://www.linkedin.com" className="bg-red-500 flex justify-center rounded-lg shadow-xl py-2" aria-label="Bize Ulaşın">
            Bize Ulaşın
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex mt-24 mb-12 flex-row justify-between">
          <a href="https://www.linkedin.com" className="hidden md:block cursor-pointer text-gray-400 hover:text-white uppercase" aria-label="Hakkımızda">
            Hakkımızda
          </a>
          <a href="/" className="hidden md:block cursor-pointer text-gray-400 hover:text-white uppercase" aria-label="Kaynaklar">
            Kaynaklar
          </a>
          <a href="https://www.linkedin.com" className="hidden md:block cursor-pointer text-gray-400 hover:text-white uppercase" aria-label="Amaçımız">
            Amaçımız
          </a>
          <a href="https://www.linkedin.com" className="hidden md:block cursor-pointer text-gray-400 hover:text-white uppercase" aria-label="İletişim">
            İletişim
          </a>
          <div className="flex text-2xl flex-row space-x-8 items-center justify-between">
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://www.twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <AiFillLinkedin />
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

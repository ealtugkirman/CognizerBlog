import React from 'react';
import Link from 'next/dist/client/link';
import { FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import CognizerLogo from '../public/assets/thecognizer.png';

const Footer = () => (
  <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-500 to-black">
    <div className="md:w-2/3 px-4 mt-20 text-white flex flex-col">
      <div className="text-center justify-center">
        <div className="items-center justify-center flex">

          <Image
            src={CognizerLogo}
            width={100}
            height={100}
            alt="cognitive.com"
          />
          <p className="text-3xl  lg:text-7xl ml-12" style={{ fontFamily: 'var(--font-futura)' }}>
            THE COGNİZER
          </p>
        </div>
        <p className=" text-2xl lg:text-4xl" style={{ fontFamily: 'var(--font-futura)' }}>
          Extending Cognition
        </p>
      </div>
      <div className="flex mt-8 flex-col md:flex-row md:justify-between">
        <p className="text-gray-400 text-sm md:text-md">
          The Cognizer is a publishing platform initiated by CogIST, a cognitive
          science community from Turkey. On this platform, articles and essays
          on different topics from different fields of cognitive science are
          published in a way that would bridge the gap between public audience
          and experts.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex mt-24 mb-12 mx-4 flex-row justify-between">
          <Link
            href="/aboutUs"
            className="md:block cursor-pointer text-sm md:text-lg text-gray-400 hover:text-white uppercase"
            aria-label="Hakkımızda"
          >
            About Us
          </Link>
          <Link
            href="/publishingPolicy"
            className="md:block cursor-pointer text-sm md:text-lg text-gray-400 hover:text-white uppercase"
            aria-label="Amaçımız"
          >
            Publishing Policy
          </Link>
          <Link
            href="/contactUs"
            className="md:block cursor-pointer text-sm md:text-lg text-gray-400 hover:text-white uppercase"
            aria-label="İletişim"
          >
            Contact Us
          </Link>
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

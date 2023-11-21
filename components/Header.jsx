'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { getCategories } from '../services';
import CognizerLogo from '../public/assets/thecognizer.png';
// import logo from '../public/assets/logo.svg';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [delayedCloseTimeout, setDelayedCloseTimeout] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(delayedCloseTimeout); // Clear any existing timeout to prevent premature close
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Delay closing the dropdown by 200 milliseconds (adjust as needed)
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
    setDelayedCloseTimeout(timeout);
  };

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const btnRef = useRef(null);
  const menuRef = useRef(null);

  function navToggle() {
    btnRef.current.classList.toggle('open');
    menuRef.current.classList.toggle('hidden');
    menuRef.current.classList.toggle('flex');
  }

  function closeMenu() {
    btnRef.current.classList.remove('open');
    menuRef.current.classList.add('hidden');
    menuRef.current.classList.remove('flex');
  }

  useEffect(() => {
    const btn = btnRef.current;
    btn.addEventListener('click', navToggle);

    return () => {
      btn.removeEventListener('click', navToggle);
    };
  }, []);

  useEffect(() => {
    const menuLinks = menuRef.current.querySelectorAll('a');
    menuLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      closeMenu();
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= sticky) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-40 top-0 w-full">
      <div
        id="navbar"
        className={`flex shadow-2xl bg-third font-myfont flex-col ${
          isScrolled ? 'py-0' : 'py-0'
        } ${isScrolled ? 'lg:py-3' : 'lg:py-3'}`}
      >
        <div className="text-white mx-14 items-center bg-third justify-center hidden lg:flex flex-row ">
          <div className="w-1/4 items-center space-x-4  text-2xl flex">
            <Link className="" href="/">
              <Image
                src={CognizerLogo}
                width={60}
                height={60}
                alt="cognitive.com"
              />
            </Link>
            <p style={{ fontFamily: 'var(--font-futura)' }}>The Cognizer</p>
          </div>
          <div className="w-1/2 space-x-6 mr-8 flex">
            <span>
              <Link href="/">Home</Link>
            </span>
            <div className="relative">
              <span
                className="text-md px-4 flex items-center duration-300 ease-in-out hover:text-blue-400 hover:cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Categories{' '}
                <span>
                  {' '}
                  <IoMdArrowDropdown />{' '}
                </span>
              </span>
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 bg-third border border-gray-200 shadow-md mt-1 p-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {categories.map((category, index) => (
                    <div key={index} className="text-gray-100 text-md">
                      <Link href={`/category/${category.slug}`}>
                        {category.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <span>
              <Link href="/aboutUs">About Us</Link>{' '}
            </span>
            <span>
              {' '}
              <Link href="/publishingPolicy">Publishing Policy</Link>{' '}
            </span>
            <span>
              <Link href="/contactUs">Contact Us</Link>{' '}
            </span>
          </div>

          <div className="flex flex-row text-blue-500 text-2xl w-1/7 items-center space-x-4  ">
            <div
              className="bg-third text-lg text-third rounded-2xl px-3 py-1"
              aria-label="Toggle Menu"
            >
              <Link href="/contactUs">Contact Us</Link>
            </div>
            <a
              href="https://twitter.com/the_cognizer"
              aria-label="Twitter Link"
              className="text-white"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="flex md:flex-row items-center justify-evenly">
        <div className="flex z-50 fixed justify-between px-12 items-center bg-third min-w-full shadow-2xl lg:hidden pt-20 pb-4">
          <div className="mt-2 ml-6">
            <Link href="/">
              <Image
                src={CognizerLogo}
                width={50}
                height={50}
                alt="cognitive.com"
              />
            </Link>
          </div>{' '}
          <div className="lg:hidden ">
            <button
              id="menu-btn"
              ref={btnRef}
              type="button"
              className="z-50 mt-4 block hamburger lg:hidden focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className="hamburger-top" />
              <span className="hamburger-middle" />
              <span className="hamburger-bottom" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          id="menu"
          ref={menuRef}
          className="fixed font-myfont bg-white z-30 top-0 bottom-0 left-0 flex-col text-center hidden lg:hidden w-2/3 min-h-screen py-1 pt-40 space-y-4 text-xl text-white"
        >
          <div className="absolute" />
          {categories.map((category, index) => (
            <span key={index} className="text-black text-lg px-8">
              <Link ref={btnRef} href={`/category/${category.slug}`}>
                {category.name}
              </Link>
            </span>
          ))}
          <p className="text-black text-left text-sm mx-8 pt-10">
            The Cognizer is a publishing platform initiated by CogIST, a
            cognitive science community from Turkey. On this platform, articles
            and essays on different topics from different fields of cognitive
            science are published in a way that would bridge the gap between
            public audience and experts.
          </p>
          <div className="flex text-blue-900 text-2xl flex-row space-x-6 pt-6 justify-center">
            <a
              href="https://twitter.com/the_cognizer"
              aria-label="Twitter Link"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

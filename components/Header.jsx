import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { getCategories } from '../services';
import logo from '../public/assets/logo.svg';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

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
      <div id="navbar" className={`flex shadow-2xl bg-gray-100 font-myfont flex-col ${isScrolled ? 'py-0' : 'py-0'} ${isScrolled ? 'lg:py-1' : 'lg:py-1'}`}>
        <div className="text-black mx-14 items-center bg-gray-100 justify-center hidden lg:flex flex-row ">
          <div className="w-1/4 flex">
            <Link className="" href="/">
              <Image
                src={logo}
                width={50}
                height={50}
                alt="cognitive.com"
              />
            </Link>
          </div>
          <div className="w-1/2 flex">
            {categories.map((category, index) => (
              <span
                key={index}
                className="text-gray-500 text-md px-4 duration-300 ease-in-out hover:text-blue-500 hover:cursor-pointer"
              >
                <Link href={`/category/${category.slug}`}>
                  {category.name}
                </Link>
              </span>
            ))}
          </div>

          <div className="flex flex-row text-blue-500 hover:cursor-pointer text-2xl w-1/7 items-center space-x-4  ">
            <div className="bg-blue-500 cursor-pointer hover:bg-gray-100 hover:text-blue-500 text-lg text-white rounded-2xl px-3 py-1" aria-label="Toggle Menu">
              <p>
                Bize Ulaşın
              </p>
            </div>
            <a href="https://www.twitter.com" aria-label="Twitter Link">
              <FaTwitter />
            </a>

            <a href="https://www.linkedin.com" aria-label="LinkedIn Link">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="flex md:flex-row items-center justify-evenly">
        <div className="flex z-50 fixed justify-between px-12 items-center bg-white min-w-full shadow-2xl lg:hidden pt-20 pb-4">
          <h1 className="text-2xl font-bold lg:hidden">
            <Link href="/">cognitive.com</Link>
          </h1>
          <div className="lg:hidden">
            <button
              id="menu-btn"
              ref={btnRef}
              type="button"
              className="z-50 block hamburger lg:hidden focus:outline-none"
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
            <span
              key={index}
              className="text-black text-lg px-8"
            >
              <Link ref={btnRef} href={`/category/${category.slug}`}>
                {category.name}
              </Link>
            </span>
          ))}
          <p className="text-black text-left text-sm mx-8 pt-10">
            The Cognizer is a publishing platform initiated by CogIST, a cognitive science community from Turkey.
            On this platform, articles and essays on different topics from different fields of cognitive science are published in a way that would bridge the gap between public audience and experts.
            To accomplish this, we will ensure that the publications are argumentatively sophisticated, although not technically complex, thus preventing the loss of information and insight while popularizing academic content.
            In this way, not only we encourage science communication in the field of cognitive science but also reach a diverse audience from all around the world, especially from the underrepresented regions.
          </p>
          <div className="flex text-blue-900 text-2xl flex-row space-x-6 pt-6 justify-center">
            <a href="https://www.twitter.com" aria-label="Twitter Link">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn Link">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

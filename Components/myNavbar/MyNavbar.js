import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const myNavbar = () => {
  const [OnClose, setOnClose] = useState(false);

  const menuToggle = (i) => {
    !OnClose ? setOnClose(true) : setOnClose(false);
  };

  const PageLink = [
    {
      pageName: 'Home',
      link: '/',
    },
    {
      pageName: 'About',
      link: '/about',
    },
    {
      pageName: 'Photo',
      link: '/photo',
    },
    {
      pageName: 'Contact',
      link: '/contact',
    },
  ];

  return (
    <nav className='content-center shadow-sm my-background-gradient'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-2 p-5 space'>
          <div className='w-[300px] md:pl-[5%] lg:pl-0 sm:w-auto'>
            <h2 className='text-2xl font-bold tracking-widest text-tahiti'>
              8<span className='font-mono text-primary'>Prime</span>
            </h2>
            <p className='text-sm sm:text-lg text-background flex-nowrap '>
              Construction and Engineering Services
            </p>
          </div>
          <div className='flex items-center justify-end sm:hidden '>
            <span
              className='p-2 text-3xl rounded cursor-pointer text-light sm:focus:bg-light sm:hover:text-background'
              onClick={menuToggle}
            >
              {OnClose ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </span>
          </div>

          <div className='grid items-center justify-end grid-cols-1 sm:flex'>
            <ul
              className={`absolute z-40 rounded w-[97%] py-6 font-serif text-center  left-[1.5%] sm:left-auto duration-300 ease-in-out sm:py-0 sm:w-auto top-24 sm:top-auto bg-gradient-to-r from-[#000000] via-[#242330] to-[#000000] sm:from-transparent sm:mr-10 sm:space-x-5 sm:flex text-light ${
                !OnClose
                  ? 'opacity-0 sm:opacity-100 top-[-500px]'
                  : 'opacity-100 top-24'
              }`}
            >
              {PageLink.map((pages, idx) => {
                return (
                  <li
                    onClick={menuToggle}
                    key={idx}
                    className='py-1 text-lg font-medium tracking-wide sm:py-0'
                  >
                    <Link href={`${pages.link}`}>
                      <a className='relative p-2 rounded after:absolute after:bg-white after:left-0 after:h-1 after:w-0 after:bottom-0 after:transition-all hover:text-white hover:after:w-full '>
                        {pages.pageName}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default myNavbar;

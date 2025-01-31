"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (<>
  <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-50">
              Uzbekistan Medi
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile Only) */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-blue-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links (Desktop and Mobile) */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } sm:flex sm:space-x-8 sm:items-center absolute sm:static top-16 left-0 right-0 shadow-md sm:shadow-none z-10`}
          >
            <Link href="/" className="block sm:inline-block px-4 py-2 text-gray-50 hover:text-blue-300">
              Home
            </Link>
            <Link href="/about" className="block sm:inline-block px-4 py-2 text-gray-50 hover:text-blue-300">
              About
            </Link>
            <Link href="/mbbs-uzbekistan" className="block sm:inline-block px-4 py-2 text-gray-50 hover:text-blue-300">
              MBBS in Uzbekistan
            </Link>
            <Link href="/universities" className="block sm:inline-block px-4 py-2 text-gray-50 hover:text-blue-300">
              Universities
            </Link>
            <Link href="/blogs" className="block sm:inline-block px-4 py-2 text-gray-50 hover:text-blue-300">
              Blogs
            </Link>
            <Link href="/gallery" className="block sm:inline-block px-4 py-2 text-gray-50 hover:text-blue-300">
              Gallery
            </Link>
            <Link href="/contact-us" className="block sm:inline-block px-4 py-2 text-gray-50 hover:text-blue-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </>

  );
}
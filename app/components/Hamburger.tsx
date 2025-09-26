"use client";
import React, { useState } from "react";
import Link from "next/link";

const Hamburger = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="md:hidden flex flex-col items-center gap-6 py-6">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="flex space-x-5 justify-center pl-6 pr-6 items-center bg-white rounded-full">
          <img src="/logo.png" alt="Logo" width={48} height={48} />
          <span className="text-xl font-bold text-gray-800">Weather</span>
        </div>
        <div
          onClick={() => {
            if (menu) setMenu(false);
            else setMenu(true);
          }}
          className="flex items-center justify-center w-12 h-12 bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
      {/* Links */}
      {menu && (
        <ul
          className="flex flex-col items-center gap-4 text-lg font-medium"
          id="menu"
        >
          <li>
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      )}
      {/* Search */}
      <form
        className="flex items-center bg-white/90 rounded-full px-4 py-2 w-72 shadow-md"
        action="/weather"
      >
        <input
          type="text"
          name="city"
          placeholder="Search city..."
          className="bg-transparent flex-1 text-gray-900 placeholder-gray-600 focus:outline-none"
        />
        <button
          type="submit"
          className="ml-2 text-yellow-400 hover:text-yellow-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="var(--color-gray-900)"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Hamburger;

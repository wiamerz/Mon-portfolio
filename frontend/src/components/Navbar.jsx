import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow bg-white">
      {/* Logo + Name */}
      <div className="flex items-center space-x-2">
        <div className="bg-purple-400 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm">
          W
        </div>
        <span className="font-semibold text-lg text-gray-800">Wiame</span>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-6 text-gray-600 text-sm font-medium">
        <a href="#home" className="hover:text-purple-500">Home</a>
        <a href="#about" className="hover:text-purple-500">About</a>
        <a href="#project" className="hover:text-purple-500">My project</a>
        <a href="#services" className="hover:text-purple-500">Services</a>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-md transition duration-200"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

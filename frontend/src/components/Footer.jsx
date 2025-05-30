import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2c3e50] text-white py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-purple-400 text-white w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">
            W
          </div>
          <span className="font-semibold text-white">Wiame</span>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          Copyright © 2025 Ouiwi.
        </div>
      </div>
    </footer>
  );
}

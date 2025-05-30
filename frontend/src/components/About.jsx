import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Pic1 from '../assets/pic1.png';

const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-white to-green-100 p-8">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center max-w-5xl w-full">
        {/* Image + Social icons */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className=" rounded-lg p-2 shadow-lg  ">
            <img
              src={Pic1}
              alt="Ramzi Wiame"
              className="rounded-lg w-64 h-auto object-cover"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-purple-100 p-2 rounded-full text-purple-500 hover:bg-purple-200 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-purple-100 p-2 rounded-full text-purple-500 hover:bg-purple-200 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-purple-100 p-2 rounded-full text-purple-500 hover:bg-purple-200 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Text content */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            I am Professional User Experience Designer
          </h2>
          <p className="text-gray-700 mb-4">
            I design and develop services for customers specializing in creating
            stylish, modern websites, web services, and online stores. My passion
            is to design digital user experiences.
          </p>
          <p className="text-gray-700 mb-6">
            I design and develop services for customers specializing in creating
            stylish, modern websites, web services.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-500 transition">
              My Project
            </button>
            <button className="px-4 py-2 border border-purple-400 text-purple-500 rounded hover:bg-purple-100 transition flex items-center space-x-2">
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

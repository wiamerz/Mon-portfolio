import React from 'react';
import Pic from '../assets/pic.png'

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-100 via-white to-green-100 p-8">
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Hello, I’m <br />
          Ramzi Wiame
        </h1>
        <p className="text-gray-700 max-w-md mx-auto md:mx-0">
          I'm a Freelance <span className="font-semibold">UI/UX Designer</span> and <span className="font-semibold">Developer</span> 
          based in Beni Mellal, Morocco. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
        </p>
        <button className="mt-4 px-6 py-2 bg-purple-400 text-white rounded hover:bg-purple-500 transition">
          Say Hello!
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="bg-white shadow-lg rounded-xl p-4">
          <img
            src={Pic}
            alt="Ramzi Wiame"
            className="rounded-xl w-64 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

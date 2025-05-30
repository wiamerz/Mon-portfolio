import React from 'react'

function WhatIdo() {
  return (
     <section className="flex flex-col md:flex-row justify-between items-start gap-10 px-6 py-20 bg-gradient-to-r from-pink-100 via-white to-pink-100 rounded-xl shadow-lg">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What I do?</h2>
        <p className="text-sm text-gray-600 mb-2">
          I'm a passionate full-stack developer with a focus on clean UI, intuitive UX, and scalable backend systems.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          I love building interactive apps and platforms that provide real value and delightful experiences.
        </p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 text-sm">
          Say Hello!
        </button>
      </div>

      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div className="bg-white shadow-md p-5 border-l-4 border-purple-500 rounded-lg">
          <h3 className="font-semibold text-gray-800">User Experience (UX)</h3>
          <p className="text-sm text-gray-600 mt-1">
            I focus on making user flows smooth, interfaces intuitive, and experiences memorable using design thinking principles.
          </p>
        </div>
        <div className="bg-white shadow-md p-5 border-l-4 border-purple-500 rounded-lg">
          <h3 className="font-semibold text-gray-800">User Interface (UI)</h3>
          <p className="text-sm text-gray-600 mt-1">
            I create visually appealing and responsive interfaces using tools like Figma and frameworks like Tailwind CSS.
          </p>
        </div>
        <div className="bg-white shadow-md p-5 border-l-4 border-purple-500 rounded-lg">
          <h3 className="font-semibold text-gray-800">Web Development</h3>
          <p className="text-sm text-gray-600 mt-1">
            From frontend React apps to backend Node.js APIs, I build robust full-stack solutions with clean code and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIdo
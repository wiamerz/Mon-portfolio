import React from 'react';

import weatherImg from '../assets/weather.jpg';
import constructionImg from '../assets/Construction.png';
import recipeImg from '../assets/recipe.jpg';
import authImg from '../assets/Authentification.png';
import moviesImg from '../assets/movies.jpg';
import blogImg from '../assets/BLOG.jpg';

const projects = [
  {
    title: 'Weather App',
    description: 'A modern weather application displaying real-time forecasts, location-based weather updates, and interactive UI components.',
    image: weatherImg,
  },
  {
    title: 'Construction Site',
    description: 'A project management dashboard for construction sites, helping track progress, manage workers, and organize tasks efficiently.',
    image: constructionImg,
  },
  {
    title: 'Recipes Gestion',
    description: 'A recipe management app allowing users to save, organize, and share their favorite recipes with an easy-to-use interface.',
    image: recipeImg,
  },
  {
    title: 'Authentification',
    description: 'A secure authentication system using JWT, OAuth, and bcrypt, designed for modern web apps needing multi-role access.',
    image: authImg,
  },
  {
    title: 'Movies Consultation',
    description: 'A sleek movie consultation platform where users can browse, review, and rate films, integrated with external movie APIs.',
    image: moviesImg,
  },
  {
    title: 'Blog',
    description: 'A personal blogging platform where users can write, edit, and publish articles, featuring a clean editor and responsive layout.',
    image: blogImg,
  },
];

const ProjectSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-purple-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">My Project</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <span className="text-xs text-gray-500">UI-UX DESIGN</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <button className="mt-4 text-purple-500 flex items-center hover:underline">
                  show the project
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-12 px-6 py-2 bg-purple-400 text-white rounded hover:bg-purple-500 transition">
          More Project
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;

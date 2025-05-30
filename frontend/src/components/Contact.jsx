import React, { useState } from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      console.log('Form submitted:', formData);
      // Add your email sending logic here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side */}
          <div className="bg-white text-sm p-8 lg:w-1/2 text-black">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-black">Address</p>
                  <p className="font-medium">Beni Mellal, Morocco</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-black">My Email</p>
                  <p className="font-medium">wiame.ramzi1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-black">Call Me Now</p>
                  <p className="font-medium">+212 771-856443</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-purple-500 bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-8 lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                {formErrors.subject && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                />
                {formErrors.message && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-purple-500 text-white px-4 py-2 hover:bg-purple-600 text-sm rounded-lg font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

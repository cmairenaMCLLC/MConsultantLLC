import React from 'react';
import { Calendar } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <nav className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/soHtVQM.png" 
              alt="Martinez Consultant LLC" 
              className="h-24 w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-8 text-[#1D1E33]">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#testimonials" className="hover:text-blue-700">Testimonials</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </nav>
      
      <div className="bg-[#1D1E33] text-white">
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Tax & Business Services – Maximizing Your Refund & Minimizing Your Stress!
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Trusted professionals helping individuals and businesses navigate tax complexities with ease and efficiency.
            </p>
            <a 
              href="https://doodle.com/bp/christiandmartinezmairena/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-white text-[#1D1E33] px-8 py-4 rounded-lg font-semibold items-center space-x-2 hover:bg-blue-100 transition duration-300"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule a Free Consultation</span>
            </a>
            <div className="mt-8 flex items-center space-x-6 text-sm">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Verified Business
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                100+ Happy Clients
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Fast & Secure Tax Filing
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://i.imgur.com/zor8wsd.jpeg"
              alt="Tax professionals at work"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
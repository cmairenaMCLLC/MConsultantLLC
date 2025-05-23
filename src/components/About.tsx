import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const images = [
    "https://i.imgur.com/cnapy9B.jpeg",
    "https://i.imgur.com/Apv5CPB.png"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 10);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-lg shadow-lg mx-auto max-w-md h-[500px] overflow-hidden bg-gray-100 flex items-center justify-center">
              <img 
                src={images[currentImageIndex]}
                alt="Christian D Martinez Mairena MBA - Owner of Martinez Consultant LLC"
                className={`w-auto max-w-full h-auto max-h-full object-contain transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              />
            </div>
          </div>
          <div>
            <p className="text-lg mb-6 text-gray-700">
              At Martinez Consultant LLC, we specialize in tax preparation, accounting, and business consulting, led by Christian D. Martinez Mairena MBA, a licensed tax preparer and insurance agent. With over 15 years of experience as a dedicated professional in the insurance industry, Christian brings valuable insight to both her business and individual clients.
            </p>
            <div className={`transition-all duration-300 overflow-hidden ${expanded ? 'max-h-[1500px]' : 'max-h-0'}`}>
              <p className="text-lg mb-6 text-gray-700">
                Founded in 1998 by Orlando J. Martinez, the firm was built on outstanding customer service and empowering clients with transparent tax preparation. Christian joined her father in 2006, learning the intricacies of personal and business tax preparation and accounting principles. After Orlando's passing in 2011, she took the helm, earning her MBA from the University of Phoenix and becoming a licensed tax preparer that year. In 2024, Christian expanded and rebranded the company as Martinez Consultant LLC, continuing the family legacy with personalized solutions for each client's financial goals.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                With decades of combined expertise, we help individuals and businesses stay compliant with tax laws, maximize deductions, and grow through strategic financial planning. Our dedication to excellence, accuracy, and client empowerment has built a solid reputation for consistent, reliable advice. At Martinez Consultant LLC, we ensure every client feels informed and confident in the care behind their tax preparation, staying true to the values Orlando instilled from day one.
              </p>
            </div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center space-x-2 text-[#1D1E33] font-semibold hover:text-blue-700 transition duration-300"
            >
              <span>{expanded ? 'Show Less' : 'Learn More'}</span>
              {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
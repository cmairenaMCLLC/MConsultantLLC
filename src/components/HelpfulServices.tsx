import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "IRS - Internal Revenue Service Homepage",
    description: "Official website of the Internal Revenue Service, providing tax information, forms, and online services.",
    url: "https://www.irs.gov/"
  },
  {
    title: "IRS - Where's My Refund",
    description: "Check the status of your federal tax refund within 24 hours after the IRS acknowledges receipt of your e-filed return.",
    url: "https://sa.www4.irs.gov/wmr/"
  },
  {
    title: "IRS - Make A Payment",
    description: "Pay your federal taxes electronically using the IRS Direct Pay service or other payment options.",
    url: "https://www.irs.gov/payments"
  },
  {
    title: "FTB - Franchise Tax Board Homepage",
    description: "Official website of California's Franchise Tax Board, handling state income tax collection and enforcement.",
    url: "https://www.ftb.ca.gov/"
  },
  {
    title: "FTB - CA Make A Payment",
    description: "Pay your California state taxes through the Franchise Tax Board's online payment system.",
    url: "https://www.ftb.ca.gov/pay/payment-options.html"
  },
  {
    title: "FTB - Check Your CA Refund",
    description: "Track the status of your California state tax refund after filing your return.",
    url: "https://webapp.ftb.ca.gov/refund/login?Submit=Check+refund&Lang=en-us"
  }
];

export default function HelpfulServices() {
  // Add effect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1D1E33] text-white py-10">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold">Helpful Services</h1>
          <p className="mt-2 text-blue-100">Useful resources for tax filing and payments</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-[#1D1E33] mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a 
                href={service.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-[#1D1E33] mb-6">Need Help With Your Taxes?</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Our tax professionals can help you navigate these services and ensure you're getting the most out of your tax filing experience. 
            Contact us for personalized assistance.
          </p>
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/#contact';
            }}
            className="bg-[#1D1E33] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
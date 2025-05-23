import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1D1E33] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-blue-600/50 rounded-full blur-lg"></div>
              <div className="relative p-1 rounded-full border border-blue-300/60 bg-[#1D1E33] shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                <img 
                  src="https://i.imgur.com/nQm2Tsn.png" 
                  alt="Martinez Consultant LLC" 
                  className="h-20 w-auto object-contain rounded-full"
                />
              </div>
            </div>
            <div className="mt-4">
            <p className="text-blue-200">
              Expert tax and business services you can trust.
            </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-blue-200 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white">About Us</a></li>
              <li><a href="#testimonials" className="text-blue-200 hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white">Contact</a></li>
              <li><a href="/helpful-services" className="text-blue-200 hover:text-white">Helpful Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white">Tax Preparation</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Accounting</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Payroll</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Consulting</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white">Insurance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="https://agents.farmers.com/ca/san-jose/christian-martinez-mairena/" className="text-blue-200 hover:text-white" target="_blank" rel="noopener noreferrer">
                <img src="https://i.imgur.com/pHu5mN2.png" alt="Social Media" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
          <p>© {new Date().getFullYear()} Martinez Consultant LLC – All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
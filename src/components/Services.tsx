import React from 'react';
import { 
  Receipt, Calculator, Shield, Clock,
  BookOpen, DollarSign, BrainCircuit, Building2,
  Umbrella
} from 'lucide-react';

const services = {
  tax: [
    { icon: Receipt, title: 'Individual Tax Preparation', description: 'Expert preparation of personal tax returns' },
    { icon: Calculator, title: 'Business Tax Preparation', description: 'Comprehensive business tax services' },
    { icon: Shield, title: 'Audit Support', description: 'Professional representation during audits' },
    { icon: Clock, title: 'Year-Round Tax Assistance', description: 'Ongoing tax planning and support' },
  ],
  business: [
    { icon: BookOpen, title: 'Accounting & Bookkeeping', description: 'Detailed financial record keeping' },
    { icon: DollarSign, title: 'Payroll Services', description: 'Complete payroll management' },
    { icon: BrainCircuit, title: 'Business Consulting', description: 'Strategic business advice' },
    { icon: Building2, title: 'Entity Formation', description: 'Business structure optimization' },
    { icon: Umbrella, title: 'Insurance', description: 'Comprehensive insurance solutions' },
  ]
};

export default function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Expert Services</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Tax Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-[#1D1E33]">Tax Services</h3>
            <div className="grid gap-6">
              {services.tax.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                  <service.icon className="w-6 h-6 text-[#1D1E33] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Solutions */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-[#1D1E33]">Business Solutions</h3>
            <div className="grid gap-6">
              {services.business.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                  <service.icon className="w-6 h-6 text-[#1D1E33] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="bg-[#1D1E33] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
          >
            Get a Free Quote Today!
          </button>
        </div>
      </div>
    </section>
  );
}
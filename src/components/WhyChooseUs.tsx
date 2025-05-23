import React, { useState } from 'react';
import { Award, PiggyBank, ShieldCheck, Clock, ChevronDown, ChevronUp, HelpingHand } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Award,
    title: 'Expertise You Can Rely On',
    description: 'Years of experience in tax & business consulting'
  },
  {
    icon: PiggyBank,
    title: 'Maximize Your Refund',
    description: 'We find every deduction possible'
  },
  {
    icon: ShieldCheck,
    title: 'Stress-Free Filing',
    description: 'Let us handle your tax worries'
  },
  {
    icon: Clock,
    title: 'Year-Round Support',
    description: "We're here beyond tax season"
  }
];

const testimonials = [
  {
    text: "Martinez Consultant is more than superb! Christian is my go to for filing my taxes year after year. Their website and portal to submit documents is so efficient and helps to keep track of the documents submitted. They are very responsive and willing to go the extra mile to research and answer questions. I highly recommend Martinez Consultant LLC!",
    author: "Cristina Mendoza",
    rating: 5,
    image: ""
  },
  {
    text: "Working with Martinez Consultant LLC has been an outstanding experience. Their approach is refreshingly personal—they truly take the time to get to know you and your needs, which makes every interaction feel meaningful, not transactional. As someone with a very hectic schedule, I really appreciate their flexibility and consistent reliability. They always deliver on time, and I never have to chase them down or worry about follow-ups. What sets them apart is their commitment to education. They don't just try to sell you policies—they take the time to explain everything clearly, answer all my questions, and make sure I understand my options. It's obvious that they stay up-to-date with changes in the industry and genuinely care about doing right by their clients. Their knowledge and professionalism give me full confidence in their work. If you're looking for an insurance agent who's reliable, responsive, and truly invested in helping you make informed decisions, I can't recommend Martinez Consultant LLC enough.",
    author: "Isaias Maire",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX2k8rACTksg6N5GFN5ITsINfRNA9dgvISMhNVz5Dnb7F9KgaQU=w108-h108-p-rp-mo-br100"
  },
  {
    text: "If it weren't for Christian, I wouldn't be a business owner today. She saw something in me that I didn't yet see in myself. The world of business felt like a foreign language to me, but Christian had the patience to explain every step in a way I could understand and apply. She helped me build strong foundations and habits that set me up for long term success. She's honest, respectful, and endlessly patient—exactly the kind of support every entrepreneur needs. I would 100% recommend Christian and Alex to anyone looking to start or grow their business. They're truly on your side and will guide you with care and clarity as you turn your goals into reality.",
    author: "Lala Alvarez",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUKSiVrDOAg37_nWhbeaL9oIQE4IC9swHvhNHD1Jjole_ji-4Q=w108-h108-p-rp-mo-br100"
  }
];

export default function WhyChooseUs() {
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (index) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Function to truncate text
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Clients Trust Martinez Consultant LLC
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <feature.icon className="w-12 h-12 text-[#2D1B5A] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-gray-200"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full mr-4 border-2 border-gray-200 bg-gray-100"></div>
                  )}
                  <p className="font-semibold">{testimonial.author}</p>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-700 mb-3">
                    {expandedReviews[index] ? testimonial.text : truncateText(testimonial.text)}
                  </p>
                  {testimonial.text.length > 100 && (
                    <button 
                      onClick={() => toggleReview(index)}
                      className="flex items-center text-[#1D1E33] hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      {expandedReviews[index] ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp className="ml-1 w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Read More</span>
                          <ChevronDown className="ml-1 w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-8">
          <img 
            src="https://i.imgur.com/yl5eVxd.jpeg" 
            alt="CTEC Registered Tax Preparer" 
            className="h-16 opacity-75 hover:opacity-100 transition-opacity duration-300" 
          />
        </div>
        <p className="text-center text-lg font-semibold text-[#1D1E33] mt-4 mb-6">
          CTEC Certified Tax Professional
        </p>
        <div className="text-center">
          <Link 
            to="/helpful-services"
            className="inline-flex items-center space-x-2 bg-[#1D1E33] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
          >
            <HelpingHand className="w-5 h-5" />
            <span>Helpful Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Phone, Mail, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    service: 'Tax Preparation',
    additionalInfo: ''
  });
  
  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    address: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
    debug?: any;
  }>({});

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Allow formats like (123) 456-7890, 123-456-7890, 1234567890
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phone);
  };

  const validateAddress = (address: string) => {
    // Simple validation to check if address is not just whitespace
    return address.trim().length > 5;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user types
    if (name === 'email' || name === 'phone' || name === 'address') {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      phone: '',
      address: ''
    };
    
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (e.g., 123-456-7890)';
      isValid = false;
    }
    
    if (!validateAddress(formData.address)) {
      newErrors.address = 'Please enter a valid address';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      console.log('Form validation failed:', errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({});

    // Format the data being sent to Zapier
    const zapierPayload = {
      ...formData,
      fullName: `${formData.firstName} ${formData.lastName}`,
      timestamp: new Date().toISOString()
    };
    
    try {
      console.log('Sending data to Zapier:', zapierPayload);
      
      // Use the Supabase Edge Function instead of directly calling Zapier
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/zapier-webhook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify(zapierPayload)
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', [...response.headers.entries()]);
      
      let responseData;
      try {
        const textResponse = await response.text();
        console.log('Raw response:', textResponse);
        
        try {
          responseData = textResponse ? JSON.parse(textResponse) : {};
        } catch (jsonError) {
          console.log('JSON parsing error:', jsonError);
          responseData = { raw: textResponse };
        }
      } catch (textError) {
        console.log('Error reading response text:', textError);
        responseData = { error: 'Failed to read response' };
      }
      
      console.log('Processed response data:', responseData);
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully! We will contact you soon.',
          debug: responseData
        });
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          phone: '',
          service: 'Tax Preparation',
          additionalInfo: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: `There was a problem sending your message (${response.status}). Please try again.`,
          debug: { status: response.status, data: responseData }
        });
      }
    } catch (error) {
      console.error('Network error submitting to Zapier:', error);
      setSubmitStatus({
        success: false,
        message: 'Network error. Please check your connection and try again.',
        debug: error
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Let's Get Started</h2>
          <p className="text-xl text-gray-600">
            Get expert tax and business services tailored to your needs. Book a free consultation today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {submitStatus.message && (
                <div 
                  className={`p-4 mb-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  data-testid="submission-status"
                >
                  {submitStatus.message}
                </div>
              )}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="123-456-7890"
                  className={`w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select 
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Tax Preparation</option>
                  <option>Accounting</option>
                  <option>Payroll</option>
                  <option>Business Consulting</option>
                  <option>Insurance</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1D1E33] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition duration-300 disabled:opacity-70"
                data-testid="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a href="tel:+16502988393" className="flex items-center space-x-4 text-gray-600 hover:text-[#1D1E33]">
                  <Phone className="w-6 h-6" />
                  <span>(650) 298-8393</span>
                </a>
                <a href="mailto:info@martinezconsultantllc.com" className="flex items-center space-x-4 text-gray-600 hover:text-[#1D1E33]">
                  <Mail className="w-6 h-6" />
                  <span>info@martinezconsultantllc.com</span>
                </a>
                <div className="flex items-start space-x-4 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mt-1 flex-shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="leading-relaxed">
                    1302 Lincoln Avenue<br />
                    Suite 206<br />
                    San Jose, CA 95125
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Book a Consultation</h3>
              <a
                href="https://doodle.com/bp/christiandmartinezmairena/consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#1D1E33] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
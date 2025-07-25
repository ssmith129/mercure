import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const coreIssues = [
    'Skin',
    'Hair',
    'Body Composition/Muscle',
    'Sex/Vitality',
    'Weight',
    'Antiaging'
  ];

  const services = [
    'Platelet Rich Plasma (PRP)',
    'IV Fluid Therapy',
    'Peptide Therapy',
    'Functional Medicine',
    'Hormone Optimization',
    'Sexual Health Programs'
  ];

  return (
    <footer id="contact" className="bg-jet-black text-whisper-grey py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-honeydew font-inter mb-4">MerCure</h3>
              <p className="text-whisper-grey font-open-sans leading-relaxed">
                Empowering individuals to achieve aesthetic confidence through innovative, personalized, and science-backed health solutions.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-jade-green flex-shrink-0" />
                <span className="font-open-sans">San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-jade-green flex-shrink-0" />
                <span className="font-open-sans">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-jade-green flex-shrink-0" />
                <span className="font-open-sans">hello@mercure.com</span>
              </div>
            </div>
          </div>

          {/* Core Issues Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-honeydew font-inter">Core Issues</h3>
            <div className="space-y-3">
              {coreIssues.map((issue, index) => (
                <a 
                  key={index}
                  href={`#${issue.toLowerCase().replace(/\s+/g, '').replace('&', '')}`} 
                  className="block text-whisper-grey hover:text-jade-green transition-colors duration-200 font-open-sans text-sm"
                >
                  {issue}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-honeydew font-inter">Popular Services</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href="#services" 
                  className="block text-whisper-grey hover:text-jade-green transition-colors duration-200 font-open-sans text-sm"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-honeydew font-inter">Stay Connected</h3>
            <p className="text-whisper-grey font-open-sans">
              Get health insights, treatment updates, and exclusive offers delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-whisper-grey placeholder-gray-500 focus:outline-none focus:border-jade-green focus:ring-1 focus:ring-jade-green font-open-sans"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-jade-green text-white px-6 py-3 rounded-lg font-inter font-semibold text-sm uppercase tracking-wide hover:bg-jade-green/90 transition-colors duration-200 flex items-center justify-center group"
              >
                Join Our Newsletter
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>

            <div className="pt-4">
              <button className="w-full bg-deep-teal text-white px-6 py-3 rounded-lg font-inter font-semibold text-sm uppercase tracking-wide hover:bg-deep-teal/90 transition-colors duration-200">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 font-open-sans text-sm">
            © 2025 MerCure. All rights reserved. | Aesthetic confidence through science-backed solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
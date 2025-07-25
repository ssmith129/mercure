import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const coreIssues = [
    { name: 'Skin', href: '#skin' },
    { name: 'Hair', href: '#hair' },
    { name: 'Body Composition/Muscle', href: '#body' },
    { name: 'Sex/Vitality', href: '#vitality' },
    { name: 'Weight', href: '#weight' },
    { name: 'Antiaging', href: '#antiaging' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-jet-black shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/Header_White.png" 
              alt="MerCure" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-honeydew hover:text-jade-green transition-colors duration-200 font-open-sans">Mission</a>
            
            {/* Core Issues Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('issues')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-honeydew hover:text-jade-green transition-colors duration-200 font-open-sans flex items-center">
                Core Issues
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {activeDropdown === 'issues' && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                  {coreIssues.map((issue, index) => (
                    <a
                      key={index}
                      href={issue.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-jade-green hover:text-white transition-all duration-200 font-open-sans transform hover:translate-x-1 active:scale-95 active:bg-deep-teal"
                    >
                      {issue.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#services" className="text-honeydew hover:text-jade-green transition-colors duration-200 font-open-sans">Services</a>
            <a href="#approach" className="text-honeydew hover:text-jade-green transition-colors duration-200 font-open-sans">Our Approach</a>
            <a href="#contact" className="text-honeydew hover:text-jade-green transition-colors duration-200 font-open-sans">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-jade-green text-white px-6 py-2 rounded-lg font-inter font-semibold text-sm uppercase tracking-wide hover:bg-jade-green/90 transition-colors duration-200">
              Book Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-honeydew hover:text-jade-green transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
              <a href="#mission" className="block px-3 py-2 text-honeydew hover:text-jade-green transition-colors duration-200 font-open-sans">Mission</a>
              
              {/* Mobile Core Issues */}
              <div className="px-3 py-2">
                <div className="text-honeydew font-open-sans font-semibold mb-2">Core Issues</div>
                <div className="pl-4 space-y-1">
                  {coreIssues.map((issue, index) => (
                    <a
                      key={index}
                      href={issue.href}
                      className="block py-1 text-honeydew/80 hover:text-jade-green transition-all duration-200 font-open-sans text-sm transform hover:translate-x-1 active:scale-95"
                    >
                      {issue.name}
                    </a>
                  ))}
                </div>
              </div>

              <a href="#services" className="block px-3 py-2 text-honeydew hover:text-jade-green transition-colors duration-200 font-open-sans">Services</a>
              <a href="#approach" className="block px-3 py-2 text-honeydew hover:text-jade-green transition-colors duration-200 font-open-sans">Our Approach</a>
              <a href="#contact" className="block px-3 py-2 text-honeydew hover:text-jade-green transition-colors duration-200 font-open-sans">Contact</a>
              
              <div className="px-3 py-2">
                <button className="w-full bg-jade-green text-white px-6 py-2 rounded-lg font-inter font-semibold text-sm uppercase tracking-wide hover:bg-jade-green/90 transition-colors duration-200">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
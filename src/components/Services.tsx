import React from 'react';
import { MapPin, Video, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      name: "Platelet Rich Plasma (PRP)",
      description: "In-person treatments for skin rejuvenation, hair restoration, and joint health.",
      availability: "In-Person",
      icon: "🩸",
      type: "in-person"
    },
    {
      name: "IV Fluid Therapy",
      description: "In-person nutrient infusions for hydration, energy, and overall wellness.",
      availability: "In-Person",
      icon: "💧",
      type: "in-person"
    },
    {
      name: "Peptide Therapy",
      description: "Available both in-person and virtually, offering targeted solutions for various health goals.",
      availability: "In-Person & Virtual",
      icon: "🧬",
      type: "both"
    },
    {
      name: "Functional Medicine Consultations",
      description: "Comprehensive health assessments and personalized treatment plans, available both in-person and virtually.",
      availability: "In-Person & Virtual",
      icon: "🔬",
      type: "both"
    },
    {
      name: "Lab Collection",
      description: "Convenient in-person lab services for comprehensive health insights.",
      availability: "In-Person",
      icon: "🧪",
      type: "in-person"
    },
    {
      name: "Lab Review & Interpretation",
      description: "Virtual consultations to discuss lab results and create actionable health strategies.",
      availability: "Virtual",
      icon: "📊",
      type: "virtual"
    },
    {
      name: "Sexual Health Programs",
      description: "Both in-person and virtual solutions (including prescription medications) to address concerns and enhance vitality.",
      availability: "In-Person & Virtual",
      icon: "❤️",
      type: "both"
    },
    {
      name: "Hair Restoration Programs",
      description: "Comprehensive solutions (pills, creams, PRP) available both in-person and virtually.",
      availability: "In-Person & Virtual",
      icon: "💇",
      type: "both"
    },
    {
      name: "Hormone Optimization",
      description: "Personalized hormone balancing programs for men and women, available both in-person and virtually.",
      availability: "In-Person & Virtual",
      icon: "⚖️",
      type: "both"
    },
    {
      name: "Nutraceuticals & Supplements",
      description: "Virtual guidance on high-quality, professional-grade supplements to support overall health.",
      availability: "Virtual",
      icon: "💊",
      type: "virtual"
    }
  ];

  const getAvailabilityIcon = (type: string) => {
    switch (type) {
      case 'in-person':
        return <MapPin className="h-4 w-4" />;
      case 'virtual':
        return <Video className="h-4 w-4" />;
      case 'both':
        return <Users className="h-4 w-4" />;
      default:
        return <MapPin className="h-4 w-4" />;
    }
  };

  const getAvailabilityColor = (type: string) => {
    switch (type) {
      case 'in-person':
        return 'bg-jade-green/10 text-jade-green';
      case 'virtual':
        return 'bg-deep-teal/10 text-deep-teal';
      case 'both':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-jade-green/10 text-jade-green';
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-jet-black font-inter">
            Services Offered
          </h2>
          <p className="text-xl text-gray-700 font-open-sans max-w-3xl mx-auto">
            Comprehensive health solutions available through convenient in-person and virtual care options tailored to your lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{service.icon}</div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-jet-black font-inter group-hover:text-jade-green transition-colors duration-200">
                      {service.name}
                    </h3>
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold ${getAvailabilityColor(service.type)}`}>
                      {getAvailabilityIcon(service.type)}
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 font-open-sans text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-jade-green text-white px-8 py-4 rounded-lg font-inter font-semibold text-base uppercase tracking-wide hover:bg-jade-green/90 transition-all duration-200">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
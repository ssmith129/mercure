import React from 'react';
import { Target, Heart, Sparkles } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Every treatment plan is tailored to your unique needs and goals."
    },
    {
      icon: Heart,
      title: "Science-Backed Solutions",
      description: "Evidence-based treatments that deliver measurable results."
    },
    {
      icon: Sparkles,
      title: "Inner & Outer Beauty",
      description: "True confidence comes from optimal health and wellness."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-jet-black font-inter">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 font-open-sans max-w-4xl mx-auto leading-relaxed">
            Empowering individuals to achieve aesthetic confidence through innovative, personalized, and science-backed health solutions. We believe true beauty radiates from within and is nurtured by optimal health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-honeydew transition-all duration-300"
            >
              <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto">
                <span className="font-open-sans">hello@mercurelife.com</span>
              </div>
              <h3 className="text-xl font-bold text-jet-black font-inter">{value.title}</h3>
              <p className="text-gray-600 font-open-sans">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Treating the whole you—physically, emotionally, and visually."
    },
    {
      icon: Shield,
      title: "Clinical Expertise",
      description: "Advanced medical science with a deep understanding of wellness."
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Tailored treatments that support your individual goals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-jet-black font-inter">
                Care That Treats the Whole You
              </h2>
              <p className="text-lg text-gray-700 font-open-sans leading-relaxed">
                At MeCure, we take a comprehensive approach to your health and confidence. Our team combines advanced medical science with a deep understanding of aesthetic wellness to support your goals from every angle—physically, emotionally, and visually.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-jade-green/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-jade-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-jet-black font-inter mb-2">{feature.title}</h3>
                    <p className="text-gray-600 font-open-sans">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-azure-mist to-honeydew rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern medical consultation room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-jade-green/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;